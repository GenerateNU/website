type Move = (cursor: number, columns: number, last: number) => number;

// Inside a grid of tiles the arrow keys move the cursor like a joystick.
const moves = {
  ArrowLeft: (cursor): number => cursor - 1,
  ArrowRight: (cursor): number => cursor + 1,
  ArrowUp: (cursor, columns): number => cursor - columns,
  ArrowDown: (cursor, columns): number => cursor + columns,
  Home: (): number => 0,
  End: (_cursor, _columns, last): number => last,
} satisfies Record<string, Move>;

const isMoveKey = (key: string): key is keyof typeof moves => Object.hasOwn(moves, key);

const countColumns = (grid: HTMLElement | null): number =>
  grid === null ? 1 : getComputedStyle(grid).gridTemplateColumns.split(' ').length;

type GridCursor = {
  cursor: number;
  count: number;
  grid: HTMLElement | null;
};

// Where a key press moves the cursor in a CSS grid, or undefined when the key isn't a move.
export const getGridTarget = (key: string, { cursor, count, grid }: GridCursor): number | undefined => {
  if (!isMoveKey(key)) {
    return undefined;
  }

  const last = count - 1;

  return Math.min(Math.max(moves[key](cursor, countColumns(grid), last), 0), last);
};
