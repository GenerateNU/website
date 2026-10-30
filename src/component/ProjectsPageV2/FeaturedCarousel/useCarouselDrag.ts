import { useRef, useState } from 'react';
import type { MouseEvent, PointerEvent, RefObject } from 'react';

type DragStart = {
  pointerId: number;
  x: number;
  scrollLeft: number;
  moved: boolean;
};

type TrackPointerHandler = (event: PointerEvent<HTMLDivElement>) => void;

type CarouselDrag = {
  isDragging: boolean;
  onPointerDown: TrackPointerHandler;
  onPointerMove: TrackPointerHandler;
  onPointerUp: TrackPointerHandler;
  onPointerCancel: TrackPointerHandler;
  onClickCapture: (event: MouseEvent<HTMLDivElement>) => void;
};

// Movement past this many pixels turns a click into a drag.
const DRAG_SLOP_PX = 6;

export default function useCarouselDrag(
  trackRef: RefObject<HTMLDivElement | null>,
  onRelease: (startScroll: number, distance: number) => void
): CarouselDrag {
  const dragRef = useRef<DragStart | null>(null);
  const suppressClickRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  const onPointerDown: TrackPointerHandler = event => {
    const track = trackRef.current;

    // Touch and pen already swipe natively; this gives mouse users the same gesture.
    if (!track || event.pointerType !== 'mouse' || event.button !== 0) {
      return;
    }

    suppressClickRef.current = false;
    dragRef.current = { pointerId: event.pointerId, x: event.clientX, scrollLeft: track.scrollLeft, moved: false };
  };

  const onPointerMove: TrackPointerHandler = event => {
    const drag = dragRef.current;
    const track = trackRef.current;

    if (!drag || !track) {
      return;
    }

    const distance = event.clientX - drag.x;

    if (!drag.moved) {
      if (Math.abs(distance) < DRAG_SLOP_PX) {
        return;
      }

      // Captured only once it is a real drag, so plain clicks still reach the slide's buttons.
      drag.moved = true;
      track.setPointerCapture(drag.pointerId);
      setIsDragging(true);
    }

    track.scrollLeft = drag.scrollLeft - distance;
  };

  const endDrag: TrackPointerHandler = event => {
    const drag = dragRef.current;

    dragRef.current = null;

    if (!drag?.moved) {
      return;
    }

    suppressClickRef.current = true;
    setIsDragging(false);
    onRelease(drag.scrollLeft, event.clientX - drag.x);
  };

  // A drag that ends over a button must not also count as a click on it.
  const onClickCapture = (event: MouseEvent<HTMLDivElement>): void => {
    if (suppressClickRef.current) {
      suppressClickRef.current = false;
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return { isDragging, onPointerDown, onPointerMove, onPointerUp: endDrag, onPointerCancel: endDrag, onClickCapture };
}
