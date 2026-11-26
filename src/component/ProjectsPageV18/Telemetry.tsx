import { formatNumber } from '@/component/ProjectsPageV8/FeaturedBanner/formatNumber';
import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

import { disciplineOf, waypoints } from './route';
import type { JourneyParts } from './useJourney';

type TelemetryProps = {
  project: Project;
  waypoint: number;
  distanceRef: JourneyParts['distance'];
  showPause: boolean;
  paused: boolean;
  onTogglePause: () => void;
};

// The console's top row: the page title and readouts for the nearest waypoint, all straight from the
// project data. Distance travelled is written by the journey on every frame, so React leaves it empty.
export default function Telemetry(props: TelemetryProps) {
  const { project, waypoint, distanceRef, showPause, paused, onTogglePause } = props;

  return (
    <div className="pp18-telemetry">
      <div className="pp18-console-title">
        <p className="pp18-kicker">Mission control</p>
        <h1 className="pp18-title">Projects</h1>
      </div>
      <dl className="pp18-readouts">
        <div className="pp18-readout">
          <dt>Waypoint</dt>
          <dd>
            {formatNumber(waypoint)} / {waypoints.length}
          </dd>
        </div>
        <div className="pp18-readout">
          <dt>Launch window</dt>
          <dd>{formatSemester(project.semester)}</dd>
        </div>
        <div className="pp18-readout">
          <dt>
            Distance <span className="pp18-dt-extra">travelled</span>
          </dt>
          <dd ref={distanceRef} />
        </div>
        <div className="pp18-readout pp18-readout--wide">
          <dt>Discipline</dt>
          <dd>{disciplineOf(project)}</dd>
        </div>
      </dl>
      {showPause && (
        <button type="button" className="pp18-button pp18-pause" onClick={onTogglePause}>
          <span aria-hidden="true">{paused ? '▶' : '❚❚'}</span> {paused ? 'Play' : 'Pause'}
        </button>
      )}
    </div>
  );
}
