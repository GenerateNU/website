import { formatSemester } from '@/data/projectData';

import { firstYear, lastYear, mapPoints, mapRings, waypoints } from './route';
import type { JourneyParts } from './useJourney';

type RouteMapProps = {
  parts: JourneyParts;
  waypoint: number;
  onGoTo: (index: number) => void;
};

const route = mapPoints.map(point => `${point.x * 100},${point.y * 100}`).join(' ');

// The whole route on one small chart: a ring per year, newest in the middle, the route spiralling out
// through every project, and the ship's place on it. Each project is a button that flies there.
export default function RouteMap({ parts, waypoint, onGoTo }: RouteMapProps) {
  const { mapTrail, mapShip } = parts;

  return (
    <nav className="pp18-map" aria-label="Route map">
      <p className="pp18-panel-label">
        Route map{' '}
        <span className="pp18-map-years">
          {lastYear} → {firstYear}
        </span>
      </p>
      <div className="pp18-map-chart">
        <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
          {mapRings.map(ring => (
            <circle key={ring.year} className="pp18-map-ring" cx="50" cy="50" r={ring.radius * 100} />
          ))}
          <polyline className="pp18-map-route" points={route} />
          <polyline ref={mapTrail} className="pp18-map-trail" points={route} />
        </svg>
        {waypoints.map((project, index) => {
          const point = mapPoints[index] ?? { x: 0.5, y: 0.5 };

          return (
            <button
              key={project.slug}
              type="button"
              className={`pp18-map-body${project.featured === true ? ' pp18-map-body--featured' : ''}`}
              style={{ left: `${point.x * 100}%`, top: `${point.y * 100}%` }}
              aria-label={`Fly to ${project.name}, ${formatSemester(project.semester)}`}
              aria-current={index === waypoint ? 'location' : undefined}
              onClick={() => onGoTo(index)}
            />
          );
        })}
        <span ref={mapShip} className="pp18-map-ship" aria-hidden="true" />
      </div>
    </nav>
  );
}
