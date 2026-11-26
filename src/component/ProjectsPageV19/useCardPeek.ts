import { useEffect, useRef, useState } from 'react';
import type { FocusEvent } from 'react';

import useMediaQuery from '@/shared/useMediaQuery';

type CardPeek = {
  // True while the card should show its back because it is pointed at or keyboard-focused.
  peeking: boolean;
  // A click decides the side from here on; the peek re-arms on the next hover or focus.
  clear: () => void;
  handlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onFocus: (event: FocusEvent<HTMLElement>) => void;
    onBlur: (event: FocusEvent<HTMLElement>) => void;
  };
};

// Hover intent: sweeping the mouse across the binder passes over cards faster than this, so they don't flicker.
const HOVER_DELAY_MS = 150;

// Turns a card to its back while a mouse rests on it (where a mouse can hover), or while keyboard focus
// is inside it, so keyboard users read the same back that mouse users see.
export default function useCardPeek(enabled: boolean): CardPeek {
  const canHover = useMediaQuery('(hover: hover) and (pointer: fine)');
  const [peeking, setPeeking] = useState(false);
  const timerRef = useRef(0);

  // A card can leave the page mid-delay (a filter change, the fan turning); its timer goes with it.
  useEffect(() => (): void => window.clearTimeout(timerRef.current), []);

  const onMouseEnter = (): void => {
    if (canHover) {
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setPeeking(true), HOVER_DELAY_MS);
    }
  };

  const onMouseLeave = (): void => {
    window.clearTimeout(timerRef.current);
    setPeeking(false);
  };

  // Only keyboard focus peeks: a mouse click also focuses, and must not turn the card before the click lands.
  const onFocus = (event: FocusEvent<HTMLElement>): void => {
    if (event.target.matches(':focus-visible')) {
      setPeeking(true);
    }
  };

  const onBlur = (event: FocusEvent<HTMLElement>): void => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setPeeking(false);
    }
  };

  const clear = (): void => {
    window.clearTimeout(timerRef.current);
    setPeeking(false);
  };

  return { peeking: enabled && peeking, clear, handlers: { onMouseEnter, onMouseLeave, onFocus, onBlur } };
}
