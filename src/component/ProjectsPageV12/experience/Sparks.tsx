import { useEffect, useState } from 'react';

import { useExperience } from './experience';

type Burst = {
  id: number;
  x: number;
  y: number;
};

// Eight pixels per burst; their directions are set in the stylesheet.
const pieces = [0, 1, 2, 3, 4, 5, 6, 7];

// A short burst of pixels wherever a button marked `data-spark` is pressed: proof the press landed.
// It starts where the pointer clicked, or from the button's middle for a key press.
export default function Sparks() {
  const { motionAllowed } = useExperience();
  const [bursts, setBursts] = useState<Burst[]>([]);

  useEffect(() => {
    if (!motionAllowed) {
      return undefined;
    }

    let nextId = 0;

    const handleClick = (event: MouseEvent): void => {
      const button = event.target instanceof Element ? event.target.closest('[data-spark]') : null;

      if (!button) {
        return;
      }

      const rect = button.getBoundingClientRect();
      const fromPointer = event.detail > 0;

      const burst = {
        id: nextId,
        x: fromPointer ? event.clientX : rect.left + rect.width / 2,
        y: fromPointer ? event.clientY : rect.top + rect.height / 2,
      };

      nextId += 1;
      setBursts(current => [...current, burst]);
    };

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [motionAllowed]);

  const remove = (id: number): void => setBursts(current => current.filter(burst => burst.id !== id));

  return (
    <div className="pp12-sparks" aria-hidden="true">
      {bursts.map(burst => (
        <span
          key={burst.id}
          className="pp12-burst"
          style={{ left: burst.x, top: burst.y }}
          onAnimationEnd={event => {
            // Every piece ends together; the first one to report clears the whole burst.
            if (event.target !== event.currentTarget) {
              remove(burst.id);
            }
          }}
        >
          {pieces.map(piece => (
            <span key={piece} />
          ))}
        </span>
      ))}
    </div>
  );
}
