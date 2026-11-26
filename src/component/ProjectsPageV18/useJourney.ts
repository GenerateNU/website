import { createRef, useLayoutEffect, useRef, useState } from 'react';
import type { Dispatch, RefObject, SetStateAction } from 'react';

import type { Project } from '@/data/projectData';

import { advanceNav, clamp, initialNav, readPosition, stepFrom } from './journeyNav';
import type { Nav } from './journeyNav';
import { lastWaypoint, mapLengthAt, mapPointAt, mapRouteLength, waypoints } from './route';

// How long after the last scroll event the engine stays lit and the ship stays banked.
const THRUST_LINGER = 200;

// Degrees of bank per waypoint travelled in one frame, and the most it will lean.
const BANK_PER_STEP = 140;

const MAX_BANK = 7;

// Parallax: how fast each layer moves against the planets, and the width its pattern repeats at.
const layers = {
  far: { speed: 0.1, tile: 520 },
  mid: { speed: 0.32, tile: 1600 },
  near: { speed: 1.7, tile: 900 },
};

export type JourneyParts = {
  section: RefObject<HTMLDivElement | null>;
  frame: RefObject<HTMLDivElement | null>;
  view: RefObject<HTMLDivElement | null>;
  world: RefObject<HTMLDivElement | null>;
  far: RefObject<HTMLDivElement | null>;
  mid: RefObject<HTMLDivElement | null>;
  near: RefObject<HTMLDivElement | null>;
  ship: RefObject<HTMLDivElement | null>;
  mapShip: RefObject<HTMLSpanElement | null>;
  mapTrail: RefObject<SVGPolylineElement | null>;
  distance: RefObject<HTMLElement | null>;
  hint: RefObject<HTMLParagraphElement | null>;
};

type Metrics = {
  // Page scroll where the journey starts, and how much scrolling it lasts.
  start: number;
  range: number;
  // The flight window's width, which the planets' spacing is a share of.
  width: number;
};

type Journey = {
  parts: JourneyParts;
  nav: Nav;
  // The nearest waypoint, and the one the docking panel shows (where the ship is headed in transit).
  current: Project | undefined;
  shown: Project | undefined;
  goTo: (index: number) => void;
  step: (direction: 1 | -1) => void;
};

const createJourneyParts = (): JourneyParts => ({
  section: createRef<HTMLDivElement>(),
  frame: createRef<HTMLDivElement>(),
  view: createRef<HTMLDivElement>(),
  world: createRef<HTMLDivElement>(),
  far: createRef<HTMLDivElement>(),
  mid: createRef<HTMLDivElement>(),
  near: createRef<HTMLDivElement>(),
  ship: createRef<HTMLDivElement>(),
  mapShip: createRef<HTMLSpanElement>(),
  mapTrail: createRef<SVGPolylineElement>(),
  distance: createRef<HTMLElement>(),
  hint: createRef<HTMLParagraphElement>(),
});

const slide = (element: HTMLElement | null, pixels: number): void => {
  element?.style.setProperty('transform', `translate3d(${pixels.toFixed(1)}px, 0, 0)`);
};

// Puts everything that follows the journey where it belongs for a position along the route (in waypoints).
// It writes straight to the DOM because it runs on every scrolled frame; transforms only, so it stays smooth.
const place = (parts: JourneyParts, position: number, travel: number): void => {
  slide(parts.world.current, -position * travel);
  slide(parts.far.current, -((position * travel * layers.far.speed) % layers.far.tile));
  slide(parts.mid.current, -((position * travel * layers.mid.speed) % layers.mid.tile));
  slide(parts.near.current, -((position * travel * layers.near.speed) % layers.near.tile));

  const map = parts.mapShip.current;
  const point = mapPointAt(position);
  const mapWidth = map?.parentElement?.clientWidth ?? 0;

  map?.style.setProperty('transform', `translate(${point.x * mapWidth}px, ${point.y * mapWidth}px) rotate(45deg)`);
  parts.mapTrail.current?.style.setProperty(
    'stroke-dasharray',
    `${mapLengthAt(position) * 100} ${mapRouteLength * 100 + 1}`
  );

  if (parts.distance.current !== null) {
    parts.distance.current.textContent = `${Math.round((position / Math.max(1, lastWaypoint)) * 100)}%`;
  }

  parts.hint.current?.classList.toggle('is-gone', position > 0.3);
};

const measure = (parts: JourneyParts): Metrics => {
  const section = parts.section.current;
  const frame = parts.frame.current;

  if (section === null || frame === null) {
    return { start: 0, range: 1, width: 0 };
  }

  // The console sticks a little below the top, so the journey starts that much before the section does.
  const stickyTop = Number.parseFloat(getComputedStyle(frame).top) || 0;

  return {
    start: section.getBoundingClientRect().top + window.scrollY - stickyTop,
    range: Math.max(1, section.offsetHeight - frame.offsetHeight),
    width: parts.view.current?.clientWidth ?? 0,
  };
};

const positionAt = ({ start, range }: Metrics): number => clamp((window.scrollY - start) / range, 0, 1) * lastWaypoint;

type Flight = {
  parts: JourneyParts;
  metrics: RefObject<Metrics>;
  position: RefObject<number>;
  spacing: number;
  setNav: Dispatch<SetStateAction<Nav>>;
};

// Starts following the page's scroll; returns the way to stop.
const startFlight = (flight: Flight): (() => void) => {
  let frame = 0;
  let thrustTimer = 0;
  let forward = true;

  const update = (): void => {
    frame = 0;

    const next = positionAt(flight.metrics.current);
    const moved = next - flight.position.current;
    const bank = clamp(moved * BANK_PER_STEP, -MAX_BANK, MAX_BANK);

    if (Math.abs(moved) > 0.0005) {
      forward = moved > 0;
    }

    flight.position.current = next;
    place(flight.parts, next, flight.metrics.current.width * flight.spacing);
    flight.parts.ship.current?.style.setProperty('transform', `rotate(${bank.toFixed(2)}deg)`);
    flight.setNav(previous => advanceNav(previous, readPosition(next, forward)));
  };

  const handleScroll = (): void => {
    flight.parts.ship.current?.classList.add('is-thrusting');
    window.clearTimeout(thrustTimer);
    thrustTimer = window.setTimeout(() => {
      flight.parts.ship.current?.classList.remove('is-thrusting');
      flight.parts.ship.current?.style.setProperty('transform', 'rotate(0deg)');
    }, THRUST_LINGER);

    if (frame === 0) {
      frame = window.requestAnimationFrame(update);
    }
  };

  const remeasure = (): void => {
    flight.metrics.current = measure(flight.parts);
    place(flight.parts, flight.position.current, flight.metrics.current.width * flight.spacing);
  };

  const observer = new ResizeObserver(remeasure);

  if (flight.parts.section.current !== null) {
    observer.observe(flight.parts.section.current);
  }

  flight.metrics.current = measure(flight.parts);
  // Start where the page already is (a reload keeps its scroll), without banking into place.
  flight.position.current = positionAt(flight.metrics.current);
  update();
  window.addEventListener('scroll', handleScroll, { passive: true });

  return (): void => {
    window.removeEventListener('scroll', handleScroll);
    observer.disconnect();
    window.cancelAnimationFrame(frame);
    window.clearTimeout(thrustTimer);
  };
};

// Native scrolling flies the ship: one passive, frame-throttled scroll listener turns the page's scroll
// into a position along the route. Nothing ever scrolls the page except the visitor, or a button they
// press. Without motion there's no long scroll: the console is a stepper, and the window cuts straight
// to the waypoint the buttons pick. `spacing` is how far apart planets sit, as a share of the window.
export default function useJourney(motionAllowed: boolean, spacing: number): Journey {
  // Created once, so the effects below don't restart on every render.
  const [parts] = useState(createJourneyParts);
  const [nav, setNav] = useState(initialNav);
  const metrics = useRef<Metrics>({ start: 0, range: 1, width: 0 });
  const position = useRef(0);

  useLayoutEffect(
    () => (motionAllowed ? startFlight({ parts, metrics, position, spacing, setNav }) : undefined),
    [parts, motionAllowed, spacing]
  );

  // Without motion, the window simply shows the chosen waypoint, and again after any resize.
  useLayoutEffect(() => {
    const view = parts.view.current;

    if (motionAllowed || view === null) {
      return undefined;
    }

    const show = (): void => place(parts, nav.waypoint, view.clientWidth * spacing);
    const observer = new ResizeObserver(show);

    position.current = nav.waypoint;
    show();
    observer.observe(view);

    return (): void => observer.disconnect();
  }, [parts, motionAllowed, spacing, nav.waypoint]);

  const goTo = (index: number): void => {
    const target = clamp(index, 0, lastWaypoint);

    if (!motionAllowed) {
      setNav(previous => advanceNav(previous, { waypoint: target, docked: true, next: target }));

      return;
    }

    const { start, range } = metrics.current;

    window.scrollTo({ top: start + (target / Math.max(1, lastWaypoint)) * range, behavior: 'smooth' });
  };

  return {
    parts,
    nav,
    current: waypoints[nav.waypoint],
    shown: waypoints[nav.docked ? nav.waypoint : nav.next],
    goTo,
    step: direction => goTo(stepFrom(position.current, direction)),
  };
}
