import { useRef } from 'react';
import type { KeyboardEvent } from 'react';

import { getPreviewVideo } from '@/data/projectData';
import type { Project } from '@/data/projectData';
import useMediaQuery from '@/shared/useMediaQuery';

import SheetLayers from './SheetLayers';
import type { TopSheetProps } from './SheetLayers';
import StackControls from './StackControls';
import StackStatus from './StackStatus';
import useAutoTurn from './useAutoTurn';
import useSheetDrag from './useSheetDrag';
import type { FlingDirection } from './useSheetDrag';
import useStackTurns from './useStackTurns';

type SheetStackProps = {
  projects: Project[];
  basePath: string;
};

// Whether this sheet's preview video plays on its own (only when motion is allowed).
const playsVideo = (project: Project | undefined, motionAllowed: boolean): boolean =>
  motionAllowed && project !== undefined && getPreviewVideo(project) !== undefined;

const topSheetClass = (isDragging: boolean, leaving: FlingDirection | undefined): string =>
  `is-top${isDragging ? ' is-dragging' : ''}${leaving === undefined ? '' : ` is-leaving is-leaving-${leaving}`}`;

// The featured projects as a stack of drawing sheets. The top one can be dragged off to the back, turned
// with the buttons or the arrow keys, and turns on its own only where that is tolerable: a mouse that can
// point at it to hold it, motion allowed. It holds still under the pointer or keyboard focus, shows its
// countdown along the title block, and stops for good once the visitor turns a sheet themselves.
export default function SheetStack({ projects, basePath }: SheetStackProps) {
  const canRotate = useMediaQuery('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
  const motionAllowed = useMediaQuery('(prefers-reduced-motion: no-preference)');
  const turns = useStackTurns(projects.length, motionAllowed);
  const { activeIndex, nextIndex, leaving } = turns;
  const settled = leaving === null;
  const autoRotates = canRotate && !turns.picked && projects.length > 1;
  const auto = useAutoTurn(autoRotates, settled, () => turns.turnTo(nextIndex, 'left'));
  const sheetRef = useRef<HTMLElement>(null);
  const drag = useSheetDrag(sheetRef, turns.pick, direction => turns.turnTo(nextIndex, direction));
  const active = projects[activeIndex];

  const top: TopSheetProps = {
    ref: sheetRef,
    playing: motionAllowed && !auto.paused && settled,
    timer: auto.timer,
    className: topSheetClass(drag.isDragging, leaving?.direction),
    onPointerDown: settled ? drag.onPointerDown : undefined,
    onPointerMove: drag.onPointerMove,
    onPointerUp: drag.onPointerUp,
    onPointerCancel: drag.onPointerCancel,
    onClickCapture: drag.onClickCapture,
    onDragStart: drag.onDragStart,
    onTransitionEnd: turns.finishLeaving,
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>): void => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      turns.turnByHand(event.key === 'ArrowRight' ? 1 : -1);
    }
  };

  return (
    // oxlint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- a focusable region whose arrow keys turn the sheets; pointing at it only holds the timer.
    <section
      className="pp17-stack-region"
      aria-label="Featured projects"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      {...auto.hold}
    >
      <div className="pp17-topline">
        <div className="pp17-intro">
          <h1 className="pp17-title">Projects</h1>
          <p className="pp17-lede">
            Our featured projects, one drawing sheet each. Drag the top sheet aside or use the buttons to see the next.
          </p>
        </div>
        <StackControls
          // One button stops everything that moves on its own: the turning and the top sheet's video.
          showPause={autoRotates || playsVideo(active, motionAllowed)}
          paused={auto.paused}
          onPrevious={() => turns.turnByHand(-1)}
          onNext={() => turns.turnByHand(1)}
          onTogglePause={auto.togglePause}
        />
      </div>
      <SheetLayers
        projects={projects}
        basePath={basePath}
        topIndex={activeIndex}
        // The sheet the top one will reveal is drawn underneath while it is dragged or flying off.
        underIndex={drag.isDragging ? nextIndex : leaving?.target}
        top={top}
      />
      <StackStatus project={active} index={activeIndex} total={projects.length} announce={turns.picked} />
    </section>
  );
}
