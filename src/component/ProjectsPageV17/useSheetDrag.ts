import { useRef, useState } from 'react';
import type { DragEvent, MouseEvent, PointerEvent, RefObject } from 'react';

export type FlingDirection = 'left' | 'right';

type DragStart = {
  pointerId: number;
  x: number;
  distance: number;
  moved: boolean;
};

type SheetPointerHandler = (event: PointerEvent<HTMLElement>) => void;

type SheetDrag = {
  isDragging: boolean;
  onPointerDown: SheetPointerHandler;
  onPointerMove: SheetPointerHandler;
  onPointerUp: SheetPointerHandler;
  onPointerCancel: SheetPointerHandler;
  onClickCapture: (event: MouseEvent<HTMLElement>) => void;
  onDragStart: (event: DragEvent<HTMLElement>) => void;
};

// Movement past this many pixels turns a press into a drag.
const DRAG_SLOP_PX = 8;

// A drag must cover this share of the sheet's width (capped) to send the sheet to the back.
const FLING_SHARE = 0.22;

const FLING_MAX_PX = 180;

// How far the sheet leans per pixel dragged, like paper pushed by one corner.
const TILT_DEG_PER_PX = 0.012;

// Written straight to the element, so following the pointer doesn't re-render the whole sheet.
const moveSheet = (sheet: HTMLElement, distance: number): void => {
  sheet.style.setProperty('--pp17-drag-x', `${distance}px`);
  sheet.style.setProperty('--pp17-tilt', `${distance * TILT_DEG_PER_PX}deg`);
};

// The top sheet follows a mouse, finger or pen sideways. Let go past the threshold and `onFling` sends it
// off that way; short of it, the sheet settles back. Vertical finger movement stays a page scroll
// (touch-action: pan-y in CSS), so a phone visitor can still scroll past the stack.
export default function useSheetDrag(
  sheetRef: RefObject<HTMLElement | null>,
  onStart: () => void,
  onFling: (direction: FlingDirection) => void
): SheetDrag {
  const dragRef = useRef<DragStart | null>(null);
  const suppressClickRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  const onPointerDown: SheetPointerHandler = event => {
    if (event.pointerType === 'mouse' && event.button !== 0) {
      return;
    }

    suppressClickRef.current = false;
    dragRef.current = { pointerId: event.pointerId, x: event.clientX, distance: 0, moved: false };
  };

  const onPointerMove: SheetPointerHandler = event => {
    const drag = dragRef.current;
    const sheet = sheetRef.current;

    if (!drag || !sheet) {
      return;
    }

    drag.distance = event.clientX - drag.x;

    if (!drag.moved) {
      if (Math.abs(drag.distance) < DRAG_SLOP_PX) {
        return;
      }

      // Captured only once it is a real drag, so plain clicks still reach the sheet's link.
      drag.moved = true;
      sheet.setPointerCapture(drag.pointerId);
      setIsDragging(true);
      onStart();
    }

    moveSheet(sheet, drag.distance);
  };

  const release = (fling: boolean): void => {
    const drag = dragRef.current;
    const sheet = sheetRef.current;

    dragRef.current = null;

    if (!drag?.moved || !sheet) {
      return;
    }

    suppressClickRef.current = true;
    setIsDragging(false);

    if (fling && Math.abs(drag.distance) >= Math.min(FLING_MAX_PX, sheet.offsetWidth * FLING_SHARE)) {
      // The drag offset stays on the sheet, so it flies off from where the pointer let go.
      onFling(drag.distance < 0 ? 'left' : 'right');
    } else {
      moveSheet(sheet, 0);
    }
  };

  // A drag that ends over the link must not also open it.
  const onClickCapture = (event: MouseEvent<HTMLElement>): void => {
    if (suppressClickRef.current) {
      suppressClickRef.current = false;
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return {
    isDragging,
    onPointerDown,
    onPointerMove,
    onPointerUp: () => release(true),
    // The browser took the pointer (a scroll began, the window lost focus): settle back, never fling.
    onPointerCancel: () => release(false),
    onClickCapture,
    // The browser's own link drag would steal the pointer mid-gesture.
    onDragStart: event => event.preventDefault(),
  };
}
