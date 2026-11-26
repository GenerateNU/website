import type { AnimationEvent, KeyboardEvent } from 'react';

import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

import Rocket from './Rocket';

// Where the pad's rocket is: standing on the pad, flying off it right now, or already gone.
export type RocketState = 'standing' | 'lifting' | 'gone';

type LaunchPadProps = {
  project: Project;
  active: boolean;
  rocket: RocketState;
  // Whether this pad shows the countdown, and whether that countdown is moving.
  countingDown: boolean;
  running: boolean;
  onCountdownEnd: () => void;
  onLaunch: () => void;
};

// Moves focus along the row of pads with the arrow keys, like a row of switches on a console.
const handlePadKeys = (event: KeyboardEvent<HTMLButtonElement>): void => {
  const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
  const row = event.currentTarget.closest('.pp16-pads');

  if (step === undefined || row === null) {
    return;
  }

  const pads = [...row.querySelectorAll<HTMLButtonElement>('.pp16-pad')];
  const current = pads.indexOf(event.currentTarget);

  event.preventDefault();
  pads[(current + step + pads.length) % pads.length]?.focus();
};

// One launch pad: a rocket on a small gantry above a placard with the project's picture, name and semester.
// The whole pad is one button, so pressing it anywhere launches that project onto the stage.
export default function LaunchPad({
  project,
  active,
  rocket,
  countingDown,
  running,
  onCountdownEnd,
  onLaunch,
}: LaunchPadProps) {
  const runningClass = running ? ' is-running' : '';

  // The fill bar's animation is the timer; its end, not one of the rocket's, is what launches.
  const handleAnimationEnd = (event: AnimationEvent<HTMLSpanElement>): void => {
    if (event.animationName === 'pp16-count-fill') {
      onCountdownEnd();
    }
  };

  return (
    <li className="pp16-pad-item">
      <button
        type="button"
        className={`pp16-pad${active ? ' is-active' : ''}${countingDown ? ' is-next' : ''}`}
        aria-pressed={active}
        onClick={onLaunch}
        onKeyDown={handlePadKeys}
      >
        <span className="pp16-pad-scene" aria-hidden="true">
          <span className="pp16-gantry" />
          <span className={`pp16-rocket-wrap is-${rocket}`}>
            <Rocket team={project.teams[0] ?? 'software'} />
          </span>
          {rocket === 'lifting' && <span className="pp16-smoke" />}
          <span className="pp16-pad-base" />
        </span>
        <span className="pp16-placard">
          {/* The digits and the bar mount together and share one play state, so they never drift apart. */}
          {countingDown && (
            <span
              className={`pp16-countdown-bar${runningClass}`}
              aria-hidden="true"
              onAnimationEnd={handleAnimationEnd}
            />
          )}
          {/* Spans rather than ProjectMedia's div, since a button may only hold inline content. */}
          <span className={`pp16-patch pp16-patch--${project.imageKind}`}>
            <img src={project.image} alt="" draggable={false} />
          </span>
          <span className="pp16-placard-name">{project.name}</span>
          <span className="pp16-placard-semester">{formatSemester(project.semester)}</span>
          <span className="pp16-placard-status">
            {active && 'On stage'}
            {countingDown && (
              <>
                Next <span className={`pp16-countdown${runningClass}`} aria-hidden="true" />
              </>
            )}
          </span>
        </span>
      </button>
    </li>
  );
}
