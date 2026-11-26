import { useEffect, useRef } from 'react';

import BranchLegend from './BranchLegend';
import { pluralizeCards } from './cardFacts';
import CardFan from './CardFan';
import CardRow from './CardRow';
import type { CardPack } from './packs';

type OpenedPackProps = {
  pack: CardPack;
  // Wide screens fan the cards out; phones lay them in a row to swipe.
  wide: boolean;
  onOpenProject: (slug: string) => void;
  onBack: () => void;
};

// A pack after opening: its name, the way back to the shelf, and its cards.
export default function OpenedPack({ pack, wide, onOpenProject, onBack }: OpenedPackProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  // The pack button that was pressed is gone, so focus lands on this pack's heading instead of the page top.
  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <section className="pp19-opened" aria-labelledby="pp19-opened-heading">
      <div className="pp19-opened-head">
        <h2 id="pp19-opened-heading" ref={headingRef} className="pp19-opened-heading" tabIndex={-1}>
          {pack.name} pack <span className="pp19-opened-count">· {pluralizeCards(pack.projects.length)}</span>
        </h2>
        <BranchLegend />
        <button type="button" className="pp19-control" onClick={onBack}>
          <span aria-hidden="true">←</span> Back to the packs
        </button>
      </div>
      {wide ? (
        <CardFan pack={pack} onOpen={onOpenProject} />
      ) : (
        <CardRow projects={pack.projects} onOpen={onOpenProject} />
      )}
    </section>
  );
}
