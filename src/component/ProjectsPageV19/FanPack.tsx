import type { AnimationEvent } from 'react';

type FanPackProps = {
  name: string;
  onDone: () => void;
};

// The pack just picked, at the foot of the fan: its strip tears off, the cards rise out, then it slides away.
export default function FanPack({ name, onDone }: FanPackProps) {
  // Only the pack's own animation ending counts, not the strip's bubbling up from inside it.
  const handleAnimationEnd = (event: AnimationEvent<HTMLDivElement>): void => {
    if (event.target === event.currentTarget) {
      onDone();
    }
  };

  return (
    <div className="pp19-fan-pack" aria-hidden="true" onAnimationEnd={handleAnimationEnd}>
      <span className="pp19-fan-pack-strip" />
      <p className="pp19-fan-pack-name">{name}</p>
    </div>
  );
}
