import { pluralizeCards } from './cardFacts';
import type { CardPack } from './packs';
import useTearDrag from './useTearDrag';

type ShelfPackProps = {
  pack: CardPack;
  opened: boolean;
  nudging: boolean;
  // Staggers the nudges, so the packs take turns instead of shaking together.
  nudgeDelayMs: number;
  onOpen: () => void;
};

// One sealed pack on the shelf: its lead project shows through a window, so the work is visible before
// anything is opened. Click it, or drag across the strip at the top to tear it open.
export default function ShelfPack({ pack, opened, nudging, nudgeDelayMs, onOpen }: ShelfPackProps) {
  const { progress, ...tearHandlers } = useTearDrag(onOpen);
  const torn = opened ? 1 : progress;
  const count = pluralizeCards(pack.projects.length);

  return (
    <button
      type="button"
      className={`pp19-pack${opened ? ' is-opened' : ''}${nudging && !opened ? ' is-nudging' : ''}`}
      style={{ animationDelay: `${nudgeDelayMs}ms` }}
      data-pack-id={pack.id}
      aria-label={`Open the ${pack.name} pack${opened ? ' again' : ''}, ${count}`}
      onClick={onOpen}
      {...tearHandlers}
    >
      <span className="pp19-pack-strip" aria-hidden="true">
        <span className="pp19-pack-gap" style={{ transform: `scaleX(${torn})` }} />
      </span>
      <span className={`pp19-pack-window pp19-pack-window--${pack.lead.imageKind}`} aria-hidden="true">
        <img src={pack.lead.image} alt="" draggable={false} />
      </span>
      <span className="pp19-pack-name">{pack.name}</span>
      <span className="pp19-pack-meta">
        <span className="pp19-pack-count">{count}</span>
        {opened && <span className="pp19-pack-opened">Opened</span>}
      </span>
    </button>
  );
}
