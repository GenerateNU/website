import type { Project } from '@/data/projectData';

import TradingCard from './TradingCard';

type FanSlotProps = {
  project: Project;
  // Steps from the front card: negative to the left, positive to the right.
  offset: number;
  dragX: number;
  flipped: boolean;
  onFlip: (next: boolean) => void;
  onOpen: () => void;
  onBringForward: () => void;
};

// Cards further than this from the front are tucked away behind the fan.
const VISIBLE_DEPTH = 2;

// Back cards leave the pack first, so the front card lands last, on top.
const DEAL_STAGGER_MS = 140;

// The wrapper tears open first.
const DEAL_START_MS = 520;

// Places one card in the fan. The spread between cards is a CSS variable, so the fan narrows with the screen.
const placeCard = (offset: number, dragX: number): string => {
  const depth = Math.abs(offset);

  return [
    `translateX(calc(-50% + ${offset} * var(--pp19-spread) + ${dragX}px))`,
    `translateY(${depth * depth * 0.6}rem)`,
    `rotate(${offset * 4.5}deg)`,
    `scale(${1 - Math.min(depth, VISIBLE_DEPTH + 1) * 0.11})`,
  ].join(' ');
};

// One position in the fan: the front card is fully live; the others show their fronts and offer one
// button that brings them forward.
export default function FanSlot({ project, offset, dragX, flipped, onFlip, onOpen, onBringForward }: FanSlotProps) {
  const depth = Math.abs(offset);
  const front = offset === 0;
  const tucked = depth > VISIBLE_DEPTH;

  return (
    <div
      className={`pp19-slot${front ? ' is-front' : ''}${tucked ? ' is-tucked' : ''}`}
      style={{
        transform: placeCard(offset, dragX),
        zIndex: 10 - depth,
        animationDelay: `${(VISIBLE_DEPTH - Math.min(depth, VISIBLE_DEPTH)) * DEAL_STAGGER_MS + DEAL_START_MS}ms`,
      }}
    >
      <TradingCard
        project={project}
        action="flip"
        flipped={front && flipped}
        onFlip={onFlip}
        onOpen={onOpen}
        interactive={front}
      />
      {!front && !tucked && (
        <button type="button" className="pp19-slot-pick" onClick={onBringForward}>
          <span className="pp19-sr-only">Bring {project.name} to the front</span>
        </button>
      )}
    </div>
  );
}
