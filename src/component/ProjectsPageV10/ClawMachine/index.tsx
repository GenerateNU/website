import { useRef } from 'react';
import type { KeyboardEvent, MouseEvent } from 'react';

import { getGridTarget } from '@/component/ProjectsPageV9/gridCursor';
import type { Project } from '@/data/projectData';

import Claw from './Claw';
import ControlPanel from './ControlPanel';
import Prize from './Prize';
import useClawAim from './useClawAim';
import useGrab from './useGrab';
import type { Phase } from './useGrab';

type ClawMachineProps = {
  projects: Project[];
  cursor: number;
  basePath: string;
  onCursorChange: (index: number) => void;
};

const isHolding = (phase: Phase): boolean => phase === 'grab' || phase === 'lift';

// A plain left click gets the claw; new-tab clicks just follow the link.
const isPlainClick = (event: MouseEvent): boolean =>
  event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;

export default function ClawMachine({ projects, cursor, basePath, onCursorChange }: ClawMachineProps) {
  const glassRef = useRef<HTMLDivElement>(null);
  const pileRef = useRef<HTMLUListElement>(null);
  const prizeRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const { phase, grabbedPath, animate, grab } = useGrab();
  const busy = phase !== 'idle';
  const pathFor = (project: Project): string => `${basePath}/${project.slug}`;
  const grabbed = projects.find(project => pathFor(project) === grabbedPath);
  const target = projects[cursor];

  useClawAim(glassRef, prizeRefs, cursor);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, project: Project): void => {
    if (busy || (animate && isPlainClick(event))) {
      event.preventDefault();
    }

    if (!busy && animate && isPlainClick(event)) {
      grab(pathFor(project));
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLAnchorElement>): void => {
    if (event.key === ' ') {
      event.preventDefault();
      event.currentTarget.click();

      return;
    }

    const next = getGridTarget(event.key, { cursor, count: projects.length, grid: pileRef.current });

    if (next !== undefined && !busy) {
      event.preventDefault();
      prizeRefs.current[next]?.focus();
    }
  };

  const nudge = (step: number): void => {
    onCursorChange(Math.min(Math.max(cursor + step, 0), projects.length - 1));
  };

  return (
    <div className="pp10-machine" data-phase={phase}>
      <div className="pp10-marquee">
        <p className="pp10-marquee-text">Grab a project</p>
      </div>
      <div className="pp10-cabinet">
        <div ref={glassRef} className="pp10-glass">
          <Claw carrying={isHolding(phase) ? grabbed : undefined} />
          {phase === 'lift' && (
            <p className="pp10-win" aria-hidden="true">
              Got it!
            </p>
          )}
          <ul ref={pileRef} className="pp10-pile">
            {projects.map((project, index) => (
              <Prize
                key={project.slug}
                project={project}
                basePath={basePath}
                selected={index === cursor}
                grabbed={project === grabbed && isHolding(phase)}
                linkRef={element => {
                  prizeRefs.current[index] = element;
                }}
                onSelect={() => !busy && onCursorChange(index)}
                onClick={event => handleClick(event, project)}
                onKeyDown={handleKeyDown}
              />
            ))}
          </ul>
        </div>
        <ControlPanel
          targetName={target?.name ?? 'the prize'}
          disabled={busy}
          onLeft={() => nudge(-1)}
          onRight={() => nudge(1)}
          onDrop={() => target && grab(pathFor(target))}
        />
      </div>
    </div>
  );
}
