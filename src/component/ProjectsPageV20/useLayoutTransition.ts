import { useLayoutEffect, useRef } from 'react';

import useMediaQuery from '@/shared/useMediaQuery';

// Lets go of a transition whose update never commits, so the page can't stay frozen on its snapshot.
const GIVE_UP_AFTER_MS = 600;

// Runs a layout change inside a view transition, so the browser slides the elements that share a
// view-transition-name from their old place to their new one. The URL update behind the change renders
// in a React transition, which can't be flushed synchronously, so the transition waits for the next
// commit of `layoutKey` instead. Phones, reduced motion and browsers without the API swap instantly.
export default function useLayoutTransition(layoutKey: string | undefined): (update: () => void) => void {
  const animate = useMediaQuery('(min-width: 900px) and (prefers-reduced-motion: no-preference)');
  const finish = useRef<(() => void) | undefined>(undefined);
  const settledKey = useRef(layoutKey);

  useLayoutEffect(() => {
    if (layoutKey === settledKey.current) {
      return;
    }

    settledKey.current = layoutKey;
    finish.current?.();
    finish.current = undefined;
  }, [layoutKey]);

  return update => {
    if (!animate || !('startViewTransition' in document)) {
      update();

      return;
    }

    document.startViewTransition(
      () =>
        new Promise<void>(resolve => {
          finish.current = resolve;
          update();
          window.setTimeout(resolve, GIVE_UP_AFTER_MS);
        })
    );
  };
}
