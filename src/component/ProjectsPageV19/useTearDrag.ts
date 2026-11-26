import { useRef, useState } from 'react';
import type { MouseEvent, PointerEvent } from 'react';

type TearStart = {
  pointerId: number;
  x: number;
  width: number;
  moved: boolean;
};

type PackPointerHandler = (event: PointerEvent<HTMLButtonElement>) => void;

type TearDrag = {
  // How much of the strip is torn, 0 to 1.
  progress: number;
  onPointerDown: PackPointerHandler;
  onPointerMove: PackPointerHandler;
  onPointerUp: PackPointerHandler;
  onPointerCancel: PackPointerHandler;
  onClickCapture: (event: MouseEvent<HTMLButtonElement>) => void;
};

// Movement past this many pixels turns a click into a tear.
const DRAG_SLOP_PX = 6;

// Dragging across this share of the pack's width tears it all the way.
const TEAR_LENGTH = 0.7;

const tearAt = (start: TearStart, clientX: number): number =>
  Math.min(1, Math.max(0, (clientX - start.x) / (start.width * TEAR_LENGTH)));

// Tears a pack's strip open by dragging across it with a mouse or pen. A plain click opens it too;
// touch is left to tap and to swiping the row of packs, which a tear gesture would fight.
export default function useTearDrag(onTorn: () => void): TearDrag {
  const startRef = useRef<TearStart | null>(null);
  const suppressClickRef = useRef(false);
  const [progress, setProgress] = useState(0);

  const onPointerDown: PackPointerHandler = event => {
    if (event.pointerType === 'touch' || event.button !== 0) {
      return;
    }

    suppressClickRef.current = false;
    startRef.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      width: event.currentTarget.offsetWidth,
      moved: false,
    };
  };

  const onPointerMove: PackPointerHandler = event => {
    const start = startRef.current;

    if (!start || start.pointerId !== event.pointerId) {
      return;
    }

    if (!start.moved) {
      if (Math.abs(event.clientX - start.x) < DRAG_SLOP_PX) {
        return;
      }

      start.moved = true;
      event.currentTarget.setPointerCapture(start.pointerId);
    }

    setProgress(tearAt(start, event.clientX));
  };

  const onPointerUp: PackPointerHandler = event => {
    const start = startRef.current;

    startRef.current = null;

    if (!start?.moved) {
      return;
    }

    // A drag never also counts as a click; a tear that falls short springs back.
    suppressClickRef.current = true;

    if (tearAt(start, event.clientX) >= 1) {
      onTorn();
    } else {
      setProgress(0);
    }
  };

  const onPointerCancel: PackPointerHandler = () => {
    startRef.current = null;
    setProgress(0);
  };

  const onClickCapture = (event: MouseEvent<HTMLButtonElement>): void => {
    if (suppressClickRef.current) {
      suppressClickRef.current = false;
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return { progress, onPointerDown, onPointerMove, onPointerUp, onPointerCancel, onClickCapture };
}
