import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';

import { flightLengthAt, measureFlight, poseAt } from './flightGeometry';
import type { FlightLayout } from './flightGeometry';

// How long after the last scroll event the flame stays lit.
const THRUST_LINGER = 180;

type FlightLayoutState = {
  svgRef: RefObject<SVGSVGElement | null>;
  layout: FlightLayout | null;
};

// Lays the path out against the page (the SVG's parent), and again whenever the page changes size:
// images loading, the grid filter, a resize.
export function useFlightLayout(): FlightLayoutState {
  const svgRef = useRef<SVGSVGElement>(null);
  const [layout, setLayout] = useState<FlightLayout | null>(null);

  useEffect(() => {
    const page = svgRef.current?.parentElement;

    if (!page) {
      return undefined;
    }

    const measure = (): void => setLayout(measureFlight(page));
    const observer = new ResizeObserver(measure);

    observer.observe(page);
    window.addEventListener('resize', measure);

    return (): void => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  return { svgRef, layout };
}

type FlightRefs = {
  rocketRef: RefObject<SVGGElement | null>;
  trailRef: RefObject<SVGPathElement | null>;
  waypointRefs: RefObject<(SVGRectElement | null)[]>;
};

// Flies the rocket along the path as the page scrolls, lighting the trail behind it and each waypoint it
// passes. It writes straight to the DOM because it runs on every scrolled frame. Without motion, the rocket
// is parked at the end and nothing follows the scroll.
export function useRocketFlight(layout: FlightLayout | null, motionAllowed: boolean): FlightRefs {
  const rocketRef = useRef<SVGGElement>(null);
  const trailRef = useRef<SVGPathElement>(null);
  const waypointRefs = useRef<(SVGRectElement | null)[]>([]);

  // A layout effect, so the rocket is in place before the first paint instead of flashing at the corner.
  useLayoutEffect(() => {
    if (!layout) {
      return undefined;
    }

    let frame = 0;
    let thrustTimer = 0;
    let lastLength = motionAllowed ? flightLengthAt(layout, window.scrollY) : layout.total;
    let backwards = false;

    const place = (length: number): void => {
      const pose = poseAt(layout.points, length);
      const landed = length >= layout.total - 0.5;
      // Drawn nose-up, so turn it to face the way it's going (or the way it came, when scrolling back up).
      const turn = pose.heading + (backwards && !landed ? -90 : 90);

      rocketRef.current?.setAttribute('transform', `translate(${pose.x} ${pose.y}) rotate(${turn})`);
      // An inline style, because the stylesheet's dash pattern would override an attribute.
      trailRef.current?.style.setProperty('stroke-dasharray', `${motionAllowed ? length : 0} ${layout.total + 1}`);
      layout.waypoints.forEach((waypoint, index) => {
        waypointRefs.current[index]?.toggleAttribute('data-lit', motionAllowed && waypoint.length <= length + 1);
      });
    };

    place(lastLength);

    if (!motionAllowed) {
      return undefined;
    }

    const update = (): void => {
      frame = 0;

      const length = flightLengthAt(layout, window.scrollY);

      if (Math.abs(length - lastLength) > 0.5) {
        backwards = length < lastLength;
      }

      lastLength = length;
      place(length);
    };

    const handleScroll = (): void => {
      rocketRef.current?.classList.add('is-thrusting');
      window.clearTimeout(thrustTimer);
      thrustTimer = window.setTimeout(() => rocketRef.current?.classList.remove('is-thrusting'), THRUST_LINGER);

      if (frame === 0) {
        frame = requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(frame);
      window.clearTimeout(thrustTimer);
    };
  }, [layout, motionAllowed]);

  return { rocketRef, trailRef, waypointRefs };
}
