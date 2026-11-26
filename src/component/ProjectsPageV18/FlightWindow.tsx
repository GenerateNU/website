import './window.css';
import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

import Planet from './Planet';
import { waypoints, yearStarts } from './route';
import Ship from './Ship';
import type { JourneyParts } from './useJourney';

type FlightWindowProps = {
  parts: JourneyParts;
  basePath: string;
  // In percent of the window's width: where a docked planet sits, and how far apart planets are.
  dock: number;
  spacing: number;
  motionAllowed: boolean;
  // The nearest waypoint, which the keyboard's flight control starts from.
  current: Project;
  waypoint: number;
  onGoTo: (index: number) => void;
};

// The view out of the front of the ship: far stars, a haze of nebula, the planets, then near dust,
// each sliding past at its own speed. The ship holds its place in the left third. For keyboards the
// window holds a flight control, a range along the route: the arrow keys fly to the next waypoint.
export default function FlightWindow(props: FlightWindowProps) {
  const { parts, basePath, dock, spacing, motionAllowed, current, waypoint, onGoTo } = props;
  const { view, far, mid, world, near, ship, hint } = parts;

  return (
    <div ref={view} className="pp18-window">
      <input
        className="pp18-flight-control"
        type="range"
        min={1}
        max={waypoints.length}
        step={1}
        value={waypoint + 1}
        aria-label="Flight position"
        aria-valuetext={`Waypoint ${waypoint + 1} of ${waypoints.length}: ${current.name}, ${formatSemester(current.semester)}`}
        onChange={event => onGoTo(Number(event.target.value) - 1)}
      />
      <div ref={far} className="pp18-layer pp18-layer--far" aria-hidden="true" />
      <div ref={mid} className="pp18-layer pp18-layer--mid" aria-hidden="true" />
      <div ref={world} className="pp18-world">
        {yearStarts.map(({ year, index }) => (
          <span
            key={year}
            className="pp18-year-mark"
            style={{ left: `${dock + (index - 0.5) * spacing}%` }}
            aria-hidden="true"
          >
            {year}
          </span>
        ))}
        {waypoints.map((project, index) => (
          <Planet
            key={project.slug}
            project={project}
            index={index}
            basePath={basePath}
            left={dock + index * spacing}
          />
        ))}
      </div>
      <div ref={near} className="pp18-layer pp18-layer--near" aria-hidden="true" />
      <Ship shipRef={ship} />
      <span className="pp18-window-corners" aria-hidden="true" />
      <p ref={hint} className="pp18-window-hint" aria-hidden="true">
        {motionAllowed ? 'Scroll to fly ↓' : 'Press Next to travel'}
      </p>
    </div>
  );
}
