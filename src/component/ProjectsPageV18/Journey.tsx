import { useState } from 'react';

import './console.css';
import useMediaQuery from '@/shared/useMediaQuery';

import CommsLog from './CommsLog';
import DockingPanel from './DockingPanel';
import FlightWindow from './FlightWindow';
import type { Nav } from './journeyNav';
import { lastWaypoint } from './route';
import RouteMap from './RouteMap';
import Telemetry from './Telemetry';
import useJourney from './useJourney';

type JourneyProps = {
  basePath: string;
};

// Roughly one screen of scrolling per leg of the route.
const SCROLL_PER_LEG = 80;

const flightHeight = `calc(100svh + ${lastWaypoint * SCROLL_PER_LEG}svh)`;

type StepButtonsProps = {
  nav: Nav;
  onStep: (direction: 1 | -1) => void;
};

// Previous and Next fly to the neighbouring waypoints; at either end of the route they're greyed out.
function StepButtons({ nav, onStep }: StepButtonsProps) {
  return (
    <div className="pp18-steps">
      <button
        type="button"
        className="pp18-button"
        aria-disabled={nav.docked && nav.waypoint === 0}
        onClick={() => onStep(-1)}
      >
        <span aria-hidden="true">‹</span> Previous
      </button>
      <button
        type="button"
        className="pp18-button"
        aria-disabled={nav.docked && nav.waypoint === lastWaypoint}
        onClick={() => onStep(1)}
      >
        Next <span aria-hidden="true">›</span>
      </button>
    </div>
  );
}

// The mission console: telemetry, the flight window, the route map, the docking panel and the comms
// log, pinned while the visitor scrolls through a tall section that flies the ship from the newest
// project to the oldest. Under reduced motion it's a stepper instead: no long scroll, no travel.
// Pause stops everything that moves by itself: the twinkle, planet spin, engine flicker and video.
export default function Journey({ basePath }: JourneyProps) {
  const motionAllowed = useMediaQuery('(prefers-reduced-motion: no-preference)');
  const compact = useMediaQuery('(max-width: 899.98px)');
  // In percent of the window's width; on phones planets sit further apart, so one fills the view.
  const spacing = compact ? 75 : 48;
  const { parts, nav, current, shown, goTo, step } = useJourney(motionAllowed, spacing / 100);
  const { section, frame, distance } = parts;
  const [paused, setPaused] = useState(false);
  const consoleClass = ['pp18-console', motionAllowed ? 'is-flying' : '', paused ? 'is-paused' : ''].join(' ');

  if (current === undefined || shown === undefined) {
    return null;
  }

  return (
    <div ref={section} className="pp18-journey" style={motionAllowed ? { height: flightHeight } : undefined}>
      <section ref={frame} className={consoleClass} aria-labelledby="pp18-journey-heading">
        <h2 id="pp18-journey-heading" className="pp18-sr-only">
          A flight through every project, newest to oldest
        </h2>
        <Telemetry
          project={current}
          waypoint={nav.waypoint}
          distanceRef={distance}
          showPause={motionAllowed}
          paused={paused}
          onTogglePause={() => setPaused(!paused)}
        />
        <FlightWindow
          parts={parts}
          basePath={basePath}
          spacing={spacing}
          dock={compact ? 60 : 56}
          motionAllowed={motionAllowed}
          current={current}
          waypoint={nav.waypoint}
          onGoTo={goTo}
        />
        <div className="pp18-deck">
          <RouteMap parts={parts} waypoint={nav.waypoint} onGoTo={goTo} />
          <StepButtons nav={nav} onStep={step} />
          <DockingPanel project={shown} docked={nav.docked} basePath={basePath} playVideo={motionAllowed && !paused} />
          <CommsLog lines={nav.log} />
        </div>
        <p className="pp18-sr-only" aria-live="polite">
          {nav.docked ? current.name : ''}
        </p>
      </section>
    </div>
  );
}
