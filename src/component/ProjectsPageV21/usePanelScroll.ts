import { useLayoutEffect, useRef } from 'react';
import type { RefObject } from 'react';

import useMediaQuery from '@/shared/useMediaQuery';

type Anchor = {
  slug: string;
  top: number;
};

type PanelScroll = {
  headingRef: RefObject<HTMLHeadingElement | null>;
  bodyRef: RefObject<HTMLDivElement | null>;
  // Call just before opening `slug`: remembers where its tile is on screen, so it can be kept there.
  holdTile: (slug: string) => void;
  // Asks the next opening to focus the panel's heading (after Enter or Space).
  focusHeadingNext: () => void;
};

// Room kept between the panel (or its row) and the viewport's edges.
const EDGE_PX = 16;

const FADE_MS = 150;

const findTile = (grid: HTMLElement | null, slug: string | undefined): HTMLElement | null | undefined =>
  grid?.querySelector<HTMLElement>(`.pp21-tile[data-slug="${slug}"]`);

// The least scrolling that shows the whole panel; a panel taller than the window instead starts its
// row near the top, so the tile and the start of its details show together. The panel may still be
// growing open, so its full height is read from the body inside the clip.
const getLockDelta = (tile: HTMLElement, panel: HTMLElement, body: HTMLElement): number => {
  const top = panel.getBoundingClientRect().top;
  const bottom = top + body.offsetHeight;
  const room = window.innerHeight;

  if (bottom - top > room - 2 * EDGE_PX) {
    return tile.getBoundingClientRect().top - EDGE_PX;
  }

  if (top < EDGE_PX) {
    return top - EDGE_PX;
  }

  return Math.max(0, bottom - (room - EDGE_PX));
};

// Shifts the page back by however far the tile moved, so it stays under the pointer.
const keepTileStill = (tile: HTMLElement, held: Anchor | undefined): void => {
  if (held !== undefined) {
    window.scrollBy({ top: tile.getBoundingClientRect().top - held.top, behavior: 'instant' });
  }
};

const lockOnto = (tile: HTMLElement, body: HTMLElement | null, smooth: boolean): void => {
  const panel = body?.closest<HTMLElement>('.pp21-panel');

  if (panel && body) {
    window.scrollBy({ top: getLockDelta(tile, panel, body), behavior: smooth ? 'smooth' : 'instant' });
  }
};

const crossFade = (body: HTMLElement | null, on: boolean): void => {
  if (on) {
    body?.animate([{ opacity: 0 }, { opacity: 1 }], { duration: FADE_MS, easing: 'ease-out' });
  }
};

// Keeps the viewport on the open panel. When a panel above the clicked tile closes, the page is
// shifted back in the same frame so the tile stays under the pointer; then it scrolls just enough to
// show the new panel. Closing returns focus to the tile. Runs as a layout effect, before paint.
export default function usePanelScroll(gridRef: RefObject<HTMLElement | null>, slug: string | undefined): PanelScroll {
  const motionAllowed = useMediaQuery('(prefers-reduced-motion: no-preference)');
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const anchor = useRef<Anchor | undefined>(undefined);
  const focusHeading = useRef(false);
  const lastSlug = useRef(slug);

  // A shared link opens with its row near the top of the window, not behind the page header.
  useLayoutEffect(() => {
    const tile = findTile(gridRef.current, lastSlug.current);

    if (tile) {
      window.scrollBy({ top: tile.getBoundingClientRect().top - EDGE_PX, behavior: 'instant' });
    }
  }, [gridRef]);

  useLayoutEffect(() => {
    const previous = lastSlug.current;

    if (slug === previous) {
      return;
    }

    lastSlug.current = slug;

    const grid = gridRef.current;
    const tile = findTile(grid, slug);

    if (slug === undefined || !tile) {
      findTile(grid, previous)?.focus({ preventScroll: true });

      return;
    }

    keepTileStill(tile, anchor.current?.slug === slug ? anchor.current : undefined);
    anchor.current = undefined;
    lockOnto(tile, bodyRef.current, motionAllowed);
    crossFade(bodyRef.current, previous !== undefined && motionAllowed);

    if (focusHeading.current) {
      focusHeading.current = false;
      headingRef.current?.focus({ preventScroll: true });
    }
  }, [gridRef, slug, motionAllowed]);

  return {
    headingRef,
    bodyRef,
    holdTile: target => {
      const tile = findTile(gridRef.current, target);

      anchor.current = tile ? { slug: target, top: tile.getBoundingClientRect().top } : undefined;
    },
    focusHeadingNext: () => {
      focusHeading.current = true;
    },
  };
}
