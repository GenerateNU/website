import NavBar from '@/component/NavBar';
import { getPreviewVideo } from '@/data/projectData';
import type { Project } from '@/data/projectData';
import useMediaQuery from '@/shared/useMediaQuery';

import LaunchPad from './LaunchPad';
import PayloadStage from './PayloadStage';
import Skyline from './Skyline';
import useLaunchSequence from './useLaunchSequence';

type LaunchComplexProps = {
  projects: Project[];
  basePath: string;
};

type PauseButtonProps = {
  paused: boolean;
  onToggle: () => void;
};

function PauseButton({ paused, onToggle }: PauseButtonProps) {
  return (
    <button type="button" className="pp16-pause" onClick={onToggle}>
      <span aria-hidden="true">{paused ? '▶' : '❚❚'}</span> {paused ? 'Play' : 'Pause'}
    </button>
  );
}

// The first screen: a launch complex at dusk. The next pad counts down, its rocket lifts off and its
// project deploys onto the stage, then the following pad starts (see useLaunchSequence for the rules).
export default function LaunchComplex({ projects, basePath }: LaunchComplexProps) {
  const motionAllowed = useMediaQuery('(prefers-reduced-motion: no-preference)');
  const sequence = useLaunchSequence(projects.length);
  const active = projects[sequence.activeIndex];

  if (active === undefined) {
    return null;
  }

  const hasActiveVideo = motionAllowed && getPreviewVideo(active) !== undefined;
  // One button stops everything that moves on its own: the countdown, a liftoff in progress, the video.
  const showPause = sequence.sequences || hasActiveVideo;
  const stateClasses = `${sequence.canSequence ? ' is-animated' : ''}${sequence.sequences && sequence.paused ? ' is-paused' : ''}`;

  return (
    <header className={`pp16-complex${stateClasses}`}>
      <NavBar />
      <div className="pp16-topline">
        <div>
          <h1 className="pp16-title">Projects</h1>
          <p className="pp16-intro">Featured projects wait on the launch pads. Pick one to see it up close.</p>
        </div>
        {showPause && <PauseButton paused={sequence.paused} onToggle={sequence.togglePaused} />}
      </div>
      {/* Only the stage and the pads hold the countdown, so a pointer resting on the heading doesn't. */}
      <div className="pp16-flight" {...sequence.holdHandlers}>
        {/* Keyed so each new project remounts and plays its deploy entrance from the start. */}
        <PayloadStage
          key={active.slug}
          project={active}
          index={sequence.activeIndex}
          total={projects.length}
          basePath={basePath}
          playVideo={motionAllowed && !sequence.paused}
          deploying={sequence.launched && sequence.canSequence}
        />
        <div className="pp16-ground">
          <Skyline />
          <ul className="pp16-pads" aria-label="Launch pads, one per featured project">
            {projects.map((project, index) => (
              <LaunchPad
                key={project.slug}
                project={project}
                active={index === sequence.activeIndex}
                rocket={sequence.rocketState(index)}
                countingDown={sequence.sequences && index === sequence.nextIndex}
                running={sequence.running}
                onCountdownEnd={() => sequence.launch(sequence.nextIndex)}
                onLaunch={() => sequence.pick(index)}
              />
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
