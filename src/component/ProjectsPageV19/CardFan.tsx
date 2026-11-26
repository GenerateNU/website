import { useState } from 'react';
import type { KeyboardEvent } from 'react';

import './fan.css';
import useMediaQuery from '@/shared/useMediaQuery';

import FanAnnouncement from './FanAnnouncement';
import FanControls from './FanControls';
import FanPack from './FanPack';
import FanSlot from './FanSlot';
import type { CardPack } from './packs';
import useFanDrag from './useFanDrag';
import useFanPosition from './useFanPosition';

type CardFanProps = {
  pack: CardPack;
  onOpen: (slug: string) => void;
};

// A drag shorter than this springs back instead of turning the fan.
const DRAG_THRESHOLD_PX = 40;

const getFanClass = (dealing: boolean, dragging: boolean): string =>
  ['pp19-fan', dealing ? 'is-dealing' : '', dragging ? 'is-dragging' : ''].join(' ');

// Shortest way round the fan, so the cards either side of the front are always its neighbours.
const getOffset = (index: number, active: number, total: number): number => {
  const ahead = (((index - active) % total) + total) % total;

  return ahead > total / 2 ? ahead - total : ahead;
};

// An opened pack's cards fanned out on the table, the front card large. Nothing here moves on its own:
// the visitor drags the fan, uses Previous/Next or the arrow keys, and taps the front card to turn it over.
// Under reduced motion the deal is skipped and the fan simply fades in.
export default function CardFan({ pack, onOpen }: CardFanProps) {
  const motionAllowed = useMediaQuery('(prefers-reduced-motion: no-preference)');
  const [dealing, setDealing] = useState(motionAllowed);
  const { projects } = pack;
  const total = projects.length;
  const { stageRef, active, flipped, goTo, flip } = useFanPosition(total);
  const front = projects[active] ?? pack.lead;

  // How far to drag for one card: the spread between cards, which follows the front card's width.
  const releaseDrag = (distance: number): void => {
    const spread = (stageRef.current?.querySelector<HTMLElement>('.is-front')?.offsetWidth ?? 300) * 0.62;
    const steps = Math.abs(distance) < DRAG_THRESHOLD_PX ? 0 : Math.max(1, Math.round(Math.abs(distance) / spread));

    goTo(active - Math.sign(distance) * steps);
  };

  const { dragX, ...dragHandlers } = useFanDrag(releaseDrag);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>): void => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(active + (event.key === 'ArrowRight' ? 1 : -1));
    }
  };

  return (
    // oxlint-disable-next-line jsx-a11y/no-static-element-interactions -- arrow keys turn the fan from any of its buttons.
    <div className={getFanClass(dealing, dragX !== 0)} onKeyDown={handleKeyDown}>
      {/* oxlint-disable-next-line jsx-a11y/no-static-element-interactions -- dragging is a pointer shortcut; the buttons below do the same. */}
      <div ref={stageRef} className="pp19-stage" {...dragHandlers}>
        {projects.map((project, index) => (
          <FanSlot
            key={project.slug}
            project={project}
            offset={getOffset(index, active, total)}
            dragX={dragX}
            flipped={flipped}
            onFlip={flip}
            onOpen={() => onOpen(project.slug)}
            onBringForward={() => goTo(index)}
          />
        ))}
        {dealing && <FanPack name={pack.name} onDone={() => setDealing(false)} />}
      </div>
      <FanControls
        position={active + 1}
        total={total}
        frontName={front.name}
        onPrevious={() => goTo(active - 1)}
        onNext={() => goTo(active + 1)}
        onOpen={() => onOpen(front.slug)}
      />
      <p className="pp19-hint">Tap a card to flip it. Drag sideways for the next one.</p>
      <FanAnnouncement project={front} position={active + 1} total={total} flipped={flipped} />
    </div>
  );
}
