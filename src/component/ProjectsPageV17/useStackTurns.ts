import { useState } from 'react';
import type { TransitionEvent } from 'react';

import type { FlingDirection } from './useSheetDrag';

// The top sheet flying off towards `direction`; once it has gone, `target` is on top.
type Leaving = {
  target: number;
  direction: FlingDirection;
};

type StackTurns = {
  activeIndex: number;
  nextIndex: number;
  leaving: Leaving | null;
  // Whether the visitor has turned a sheet themselves, which stops the automatic turning for good.
  picked: boolean;
  pick: () => void;
  turnTo: (target: number, direction: FlingDirection) => void;
  turnByHand: (step: 1 | -1) => void;
  finishLeaving: (event: TransitionEvent<HTMLElement>) => void;
};

// Which sheet is on top, and the short flight of the old one off the stack when it changes.
// Without motion the sheet is simply replaced; nothing slides.
export default function useStackTurns(total: number, motionAllowed: boolean): StackTurns {
  const [activeIndex, setActiveIndex] = useState(0);
  const [leaving, setLeaving] = useState<Leaving | null>(null);
  const [picked, setPicked] = useState(false);

  const turnTo = (target: number, direction: FlingDirection): void => {
    if (leaving !== null || target === activeIndex) {
      return;
    }

    if (motionAllowed) {
      setLeaving({ target, direction });
    } else {
      setActiveIndex(target);
    }
  };

  const turnByHand = (step: 1 | -1): void => {
    setPicked(true);
    turnTo((activeIndex + step + total) % total, step === 1 ? 'left' : 'right');
  };

  const finishLeaving = (event: TransitionEvent<HTMLElement>): void => {
    // Transitions inside the sheet (a button's hover) bubble up here too.
    if (leaving !== null && event.target === event.currentTarget && event.propertyName === 'transform') {
      setActiveIndex(leaving.target);
      setLeaving(null);
    }
  };

  return {
    activeIndex,
    nextIndex: (activeIndex + 1) % total,
    leaving,
    picked,
    pick: () => setPicked(true),
    turnTo,
    turnByHand,
    finishLeaving,
  };
}
