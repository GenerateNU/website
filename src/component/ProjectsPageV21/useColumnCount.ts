import { useLayoutEffect, useState } from 'react';
import type { RefObject } from 'react';

// Matches the grid's breakpoints in style.css, so the first render already puts a deep-linked panel
// under the right row; the measurement below then keeps it honest.
const guessColumns = (width: number): number => {
  if (width < 600) {
    return 2;
  }

  return width < 1400 ? 3 : 4;
};

const countTracks = (grid: HTMLElement): number => getComputedStyle(grid).gridTemplateColumns.split(' ').length;

// How many tiles sit in each row of the rendered grid, kept current as the window resizes.
export default function useColumnCount(gridRef: RefObject<HTMLElement | null>): number {
  const [columns, setColumns] = useState(() => guessColumns(window.innerWidth));

  useLayoutEffect(() => {
    const grid = gridRef.current;

    if (!grid) {
      return;
    }

    const observer = new ResizeObserver(() => setColumns(countTracks(grid)));

    observer.observe(grid);

    return (): void => observer.disconnect();
  }, [gridRef]);

  return columns;
}
