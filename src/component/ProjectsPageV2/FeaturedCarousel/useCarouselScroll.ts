import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';

import useMediaQuery from '@/shared/useMediaQuery';

type CarouselScroll = {
  trackRef: RefObject<HTMLDivElement | null>;
  activeIndex: number;
  reducedMotion: boolean;
  handleScroll: () => void;
  goTo: (index: number) => void;
  settleDrag: (startScroll: number, distance: number) => void;
};

// A drag shorter than this fraction of a slide springs back instead of changing slides.
const DRAG_THRESHOLD = 0.12;

const getStep = (track: HTMLDivElement): number => {
  const [first, second] = [...track.children];

  return first instanceof HTMLElement && second instanceof HTMLElement ? second.offsetLeft - first.offsetLeft : 0;
};

// The last slide can't scroll flush left, so the end of the track also counts as the last slide.
const getIndexAt = (track: HTMLDivElement, scrollLeft: number): number => {
  const lastIndex = track.children.length - 1;
  const step = getStep(track);
  const atEnd = scrollLeft + track.clientWidth >= track.scrollWidth - 2;

  return atEnd || step === 0 ? lastIndex : Math.min(lastIndex, Math.round(scrollLeft / step));
};

export default function useCarouselScroll(count: number): CarouselScroll {
  const trackRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const lastIndex = count - 1;

  // Cancels a pending frame if the carousel unmounts mid-scroll.
  useEffect(() => (): void => cancelAnimationFrame(frameRef.current), []);

  const readActiveIndex = (): void => {
    const track = trackRef.current;

    frameRef.current = 0;

    if (track) {
      setActiveIndex(getIndexAt(track, track.scrollLeft));
    }
  };

  const handleScroll = (): void => {
    if (frameRef.current === 0) {
      frameRef.current = requestAnimationFrame(readActiveIndex);
    }
  };

  // Wraps around, so the arrows and auto-rotation loop back to the first slide.
  const goTo = (index: number): void => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const next = (index + count) % count;

    track.scrollTo({ left: next * getStep(track), behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  // Settles on the nearest slide, nudging one slide in the drag direction if the drag was long enough.
  const settleDrag = (startScroll: number, distance: number): void => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const startIndex = getIndexAt(track, startScroll);
    const nearest = getIndexAt(track, track.scrollLeft);
    const flicked = Math.abs(distance) > getStep(track) * DRAG_THRESHOLD;
    const target = nearest === startIndex && flicked ? startIndex + (distance < 0 ? 1 : -1) : nearest;

    goTo(Math.max(0, Math.min(lastIndex, target)));
  };

  return { trackRef, activeIndex, reducedMotion, handleScroll, goTo, settleDrag };
}
