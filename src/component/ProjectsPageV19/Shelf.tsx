import { useState } from 'react';

import './shelf.css';
import useMediaQuery from '@/shared/useMediaQuery';

import type { CardPack } from './packs';
import ShelfPack from './ShelfPack';
import useHold from './useHold';

type ShelfProps = {
  packs: CardPack[];
  openedIds: string[];
  onOpenPack: (id: string) => void;
};

const NUDGE_STAGGER_MS = 1600;

// The first screen: a shelf of sealed packs, one per stretch of years. The newest sits a little forward.
// Unopened packs give a small "open me" nudge now and then, the only thing on the page that moves on its own,
// and only where it can be held still (a mouse resting on it, or focus inside), with a Pause button,
// never under reduced motion, and never again once the visitor has opened a pack.
export default function Shelf({ packs, openedIds, onOpenPack }: ShelfProps) {
  const canNudge = useMediaQuery('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
  const [paused, setPaused] = useState(false);
  const { held, handlers } = useHold();

  const nudges = canNudge && openedIds.length === 0;
  const nudging = nudges && !paused && !held;

  return (
    <section className="pp19-shelf" aria-labelledby="pp19-shelf-heading" {...handlers}>
      <h2 id="pp19-shelf-heading" className="pp19-sr-only">
        Card packs
      </h2>
      <ul className="pp19-shelf-list">
        {packs.map((pack, index) => (
          <li key={pack.id} className={`pp19-shelf-item${index === 0 && openedIds.length === 0 ? ' is-forward' : ''}`}>
            <ShelfPack
              pack={pack}
              opened={openedIds.includes(pack.id)}
              nudging={nudging}
              nudgeDelayMs={index * NUDGE_STAGGER_MS}
              onOpen={() => onOpenPack(pack.id)}
            />
          </li>
        ))}
      </ul>
      <div className="pp19-shelf-foot">
        <p className="pp19-hint">Pick a pack to open it, or drag across its top strip to tear it open.</p>
        {/* WCAG 2.2.2: anything that moves on its own needs a visible way to stop it. */}
        {nudges && (
          <button type="button" className="pp19-control" onClick={() => setPaused(!paused)}>
            <span aria-hidden="true">{paused ? '▶' : '❚❚'}</span> {paused ? 'Play' : 'Pause'}
          </button>
        )}
      </div>
    </section>
  );
}
