import type { Ref } from 'react';

import { useExperience } from '@/component/ProjectsPageV12/experience/experience';

import { useFlightLayout, useRocketFlight } from './useFlight';

// The rocket, pointing up, one character per pixel: R red, B body, W window, F flame (only while flying).
const rocket = [
  '...R...',
  '..RRR..',
  '..BBB..',
  '..BWB..',
  '..BBB..',
  '..BBB..',
  '.RBBBR.',
  'RR.B.RR',
  'R..F..R',
  '..FFF..',
  '...F...',
];

const pixelClass = new Map([
  ['R', 'pp13-px-red'],
  ['B', 'pp13-px-body'],
  ['W', 'pp13-px-window'],
  ['F', 'pp13-px-flame'],
]);

const rocketPixels = rocket.flatMap((row, y) =>
  row.split('').flatMap((cell, x) => {
    const className = pixelClass.get(cell);

    return className ? [{ x, y, className }] : [];
  })
);

type RocketProps = {
  ref: Ref<SVGGElement>;
  pixel: number;
  idle: boolean;
};

function Rocket({ ref, pixel, idle }: RocketProps) {
  const width = rocket[0]?.length ?? 0;

  return (
    <g ref={ref} className="pp13-rocket">
      <g className={`pp13-rocket-body${idle ? ' is-idle' : ''}`}>
        {rocketPixels.map(({ x, y, className }) => (
          <rect
            key={`${x},${y}`}
            className={className}
            x={(x - width / 2) * pixel}
            y={(y - rocket.length / 2) * pixel}
            width={pixel}
            height={pixel}
          />
        ))}
      </g>
    </g>
  );
}

// The leading line: a dashed flight path down the page's left margin that ends beside the Apply button, with
// a rocket riding it as the visitor scrolls. The stretch already flown lights up, and so does each stop on
// the way (every featured project, the level card, the grid). It only ever follows the visitor's own
// scrolling, sits in the margin so it never covers text, and is decoration: screen readers skip it.
// Under "reduce motion" the line stays still and the rocket waits at Apply.
export default function FlightPath() {
  const { motionAllowed, idle } = useExperience();
  const { svgRef, layout } = useFlightLayout();
  const { rocketRef, trailRef, waypointRefs } = useRocketFlight(layout, motionAllowed);

  return (
    <svg
      ref={svgRef}
      className="pp13-flight"
      width={layout?.width ?? 0}
      height={layout?.height ?? 0}
      aria-hidden="true"
      focusable="false"
    >
      {layout && (
        <>
          <path className="pp13-flight-ahead" d={layout.path} />
          <path ref={trailRef} className="pp13-flight-trail" d={layout.path} />
          {layout.waypoints.map((waypoint, index) => (
            <rect
              key={waypoint.length}
              ref={element => {
                waypointRefs.current[index] = element;
              }}
              className="pp13-waypoint"
              x={waypoint.x - layout.pixel * 2}
              y={waypoint.y - layout.pixel * 2}
              width={layout.pixel * 4}
              height={layout.pixel * 4}
            />
          ))}
          <Rocket ref={rocketRef} pixel={layout.pixel} idle={idle} />
        </>
      )}
    </svg>
  );
}
