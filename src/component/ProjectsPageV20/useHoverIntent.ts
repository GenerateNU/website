import { useEffect, useRef } from 'react';

type HoverIntent = {
  // Call when the pointer arrives on something; `onRest` runs if it stays put for the delay.
  start: (slug: string) => void;
  cancel: () => void;
};

// Waits for the pointer to settle before acting, so sweeping across the grid doesn't flicker the preview.
export default function useHoverIntent(delayMs: number, onRest: (slug: string) => void): HoverIntent {
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => (): void => window.clearTimeout(timer.current), []);

  return {
    start: slug => {
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => onRest(slug), delayMs);
    },
    cancel: () => window.clearTimeout(timer.current),
  };
}
