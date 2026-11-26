import { useLayoutEffect, useRef } from 'react';
import type { RefObject } from 'react';

import useMediaQuery from '@/shared/useMediaQuery';

type DetailSync = {
  stageRef: RefObject<HTMLDivElement | null>;
  sheetRef: RefObject<HTMLDivElement | null>;
  headingRef: RefObject<HTMLHeadingElement | null>;
  mainRef: RefObject<HTMLDivElement | null>;
  // Call just before opening from the grid: remembers where the page was, and asks for focus on the heading.
  beforeOpen: () => void;
  // Asks the next switch of project to focus the heading (after Enter or Space on Previous / Next).
  focusHeadingNext: () => void;
};

// What changed the open project, which decides how the viewport moves onto it.
type Change = 'open' | 'history' | 'switch';

const FADE_MS = 150;

const getChange = (previous: string | undefined, openedFromGrid: boolean): Change => {
  if (previous !== undefined) {
    return 'switch';
  }

  return openedFromGrid ? 'open' : 'history';
};

const fadeIn = (element: HTMLElement | null, motionAllowed: boolean): void => {
  if (motionAllowed) {
    element?.animate([{ opacity: 0 }, { opacity: 1 }], { duration: FADE_MS, easing: 'ease-out' });
  }
};

// Opening from the grid runs inside a view transition when the browser has one, and the transition
// animates the jump itself, so the scroll is instant there. Switching glides. History jumps.
const getBehavior = (change: Change, motionAllowed: boolean): ScrollBehavior => {
  if (!motionAllowed || change === 'history') {
    return 'instant';
  }

  return change === 'open' && 'startViewTransition' in document ? 'instant' : 'smooth';
};

// Puts the top of the open detail at the top of the viewport (its scroll-margin leaves a small gap).
const lockOnto = (stage: HTMLElement | null, behavior: ScrollBehavior): void => {
  stage?.querySelector('.pp20-detail')?.scrollIntoView({ block: 'start', behavior });
};

// Closing puts the page back exactly where it was and focus back on the project's tile.
const returnToTile = (slug: string | undefined, savedScroll: number | undefined): void => {
  if (savedScroll !== undefined) {
    window.scrollTo({ top: savedScroll, behavior: 'instant' });
  }

  document
    .querySelector<HTMLElement>(`.pp20-tile[data-slug="${slug}"]`)
    ?.focus({ preventScroll: savedScroll !== undefined });
};

// Keeps the viewport locked onto the open project. Opening (from the grid or through history) and
// switching all bring the detail's top to the top of the viewport, then focus its heading without
// scrolling; switching also cross-fades the content and starts the phone panel from its top; closing
// restores the remembered position. It runs as a layout effect, after the new project has rendered,
// so inside a view transition it happens before the new frame is captured.
export default function useDetailSync(slug: string | undefined, wide: boolean): DetailSync {
  const motionAllowed = useMediaQuery('(prefers-reduced-motion: no-preference)');
  const stageRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const savedScroll = useRef<number | undefined>(undefined);
  const openedFromGrid = useRef(false);
  const focusHeading = useRef(false);
  const lastSlug = useRef(slug);

  // A shared link opens straight onto the project, not onto the page header above it.
  useLayoutEffect(() => {
    if (lastSlug.current !== undefined) {
      lockOnto(stageRef.current, 'instant');
    }
  }, []);

  useLayoutEffect(() => {
    const previous = lastSlug.current;

    if (slug === previous) {
      return;
    }

    lastSlug.current = slug;

    if (slug === undefined) {
      returnToTile(previous, savedScroll.current);
      savedScroll.current = undefined;

      return;
    }

    // Opening through Forward has no click to remember the position from, so it is taken here.
    savedScroll.current ??= window.scrollY;

    const change = getChange(previous, openedFromGrid.current);

    openedFromGrid.current = false;
    lockOnto(wide ? stageRef.current : null, getBehavior(change, motionAllowed));
    sheetRef.current?.scrollTo({ top: 0 });

    if (change === 'switch') {
      fadeIn(mainRef.current, motionAllowed);
    }

    if (focusHeading.current) {
      focusHeading.current = false;
      headingRef.current?.focus({ preventScroll: true });
    }
  }, [slug, wide, motionAllowed]);

  return {
    stageRef,
    sheetRef,
    headingRef,
    mainRef,
    beforeOpen: () => {
      savedScroll.current = window.scrollY;
      openedFromGrid.current = true;
      focusHeading.current = true;
    },
    focusHeadingNext: () => {
      focusHeading.current = true;
    },
  };
}
