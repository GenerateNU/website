import { useRef, useState } from 'react';
import type { RefObject } from 'react';

type FanPosition = {
  stageRef: RefObject<HTMLDivElement | null>;
  active: number;
  flipped: boolean;
  goTo: (index: number) => void;
  flip: (next: boolean) => void;
};

// Which card is in front of the fan, and which side it shows.
export default function useFanPosition(total: number): FanPosition {
  const stageRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [flipped, setFlipped] = useState(false);

  // Wraps around, so Previous and Next loop through the pack.
  const goTo = (index: number): void => {
    // A card leaving the front goes inert; if focus was on it, it follows to the new front card.
    // Clicks and key presses render before the next frame, so by then the new front card is in place.
    if (stageRef.current?.contains(document.activeElement) === true) {
      requestAnimationFrame(() => stageRef.current?.querySelector<HTMLElement>('.is-front .pp19-stretch')?.focus());
    }

    setActive(((index % total) + total) % total);
    setFlipped(false);
  };

  return { stageRef, active, flipped, goTo, flip: setFlipped };
}
