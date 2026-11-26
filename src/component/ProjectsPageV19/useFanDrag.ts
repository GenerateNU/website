import { useRef, useState } from 'react';
import type { MouseEvent, PointerEvent } from 'react';

type DragStart = {
  pointerId: number;
  x: number;
  moved: boolean;
};

type StagePointerHandler = (event: PointerEvent<HTMLDivElement>) => void;

type FanDrag = {
  // How far the fan is being pulled sideways right now, in pixels; 0 when nobody is dragging.
  dragX: number;
  onPointerDown: StagePointerHandler;
  onPointerMove: StagePointerHandler;
  onPointerUp: StagePointerHandler;
  onPointerCancel: StagePointerHandler;
  onClickCapture: (event: MouseEvent<HTMLDivElement>) => void;
};

// Movement past this many pixels turns a click into a drag.
const DRAG_SLOP_PX = 6;

// Pulls the fan sideways with any pointer (mouse, touch, pen) and reports the distance on release.
// The stage sets touch-action: pan-y, so a vertical swipe still scrolls the page and cancels the drag.
export default function useFanDrag(onRelease: (distance: number) => void): FanDrag {
  const dragRef = useRef<DragStart | null>(null);
  const suppressClickRef = useRef(false);
  const [dragX, setDragX] = useState(0);

  const onPointerDown: StagePointerHandler = event => {
    if (event.pointerType === 'mouse' && event.button !== 0) {
      return;
    }

    suppressClickRef.current = false;
    dragRef.current = { pointerId: event.pointerId, x: event.clientX, moved: false };
  };

  const onPointerMove: StagePointerHandler = event => {
    const drag = dragRef.current;

    if (!drag || drag.pointerId !== event.pointerId) {
      return;
    }

    const distance = event.clientX - drag.x;

    if (!drag.moved) {
      if (Math.abs(distance) < DRAG_SLOP_PX) {
        return;
      }

      // Captured only once it is a real drag, so plain clicks still reach the card's buttons.
      drag.moved = true;
      event.currentTarget.setPointerCapture(drag.pointerId);
    }

    setDragX(distance);
  };

  const onPointerUp: StagePointerHandler = event => {
    const drag = dragRef.current;

    dragRef.current = null;

    if (!drag?.moved) {
      return;
    }

    suppressClickRef.current = true;
    setDragX(0);
    onRelease(event.clientX - drag.x);
  };

  // The browser took the gesture over (usually a vertical scroll): the fan springs back where it was.
  const onPointerCancel: StagePointerHandler = () => {
    dragRef.current = null;
    setDragX(0);
  };

  // A drag that ends over a button must not also count as a click on it.
  const onClickCapture = (event: MouseEvent<HTMLDivElement>): void => {
    if (suppressClickRef.current) {
      suppressClickRef.current = false;
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return { dragX, onPointerDown, onPointerMove, onPointerUp, onPointerCancel, onClickCapture };
}
