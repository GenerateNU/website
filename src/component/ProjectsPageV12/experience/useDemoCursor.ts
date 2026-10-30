import { useEffect, useState } from 'react';

const STEP = 2400;

// While `active`, a cursor that walks the grid on its own from the tile after `start`, like an arcade
// game's demo; null otherwise, so the visitor's own cursor is exactly where they left it.
export default function useDemoCursor(active: boolean, start: number, count: number): number | null {
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    if (!active) {
      return undefined;
    }

    const timer = window.setInterval(() => setSteps(current => current + 1), STEP);

    return (): void => {
      window.clearInterval(timer);
      setSteps(0);
    };
  }, [active]);

  return active && count > 0 ? (start + 1 + steps) % count : null;
}
