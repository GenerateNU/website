import { useState, useSyncExternalStore } from 'react';

const activityEvents = ['pointermove', 'pointerdown', 'keydown', 'wheel', 'scroll', 'touchstart'] as const;

type IdleStore = {
  subscribe: (onChange: () => void) => () => void;
  getSnapshot: () => boolean;
};

// Restarts a countdown on every sign of the visitor; when it runs out (with the tab in view) they're idle.
const createIdleStore = (timeout: number): IdleStore => {
  let idle = false;

  return {
    getSnapshot: () => idle,
    subscribe: onChange => {
      let timer = 0;

      const set = (next: boolean): void => {
        if (idle !== next) {
          idle = next;
          onChange();
        }
      };

      const wake = (): void => {
        set(false);
        window.clearTimeout(timer);
        timer = window.setTimeout(() => set(!document.hidden), timeout);
      };

      wake();

      for (const name of activityEvents) {
        window.addEventListener(name, wake, { passive: true });
      }

      document.addEventListener('visibilitychange', wake);

      return (): void => {
        window.clearTimeout(timer);

        for (const name of activityEvents) {
          window.removeEventListener(name, wake);
        }

        document.removeEventListener('visibilitychange', wake);
        idle = false;
      };
    },
  };
};

// True once the visitor has done nothing for `timeout` ms; any movement, key, scroll or tap ends it at once.
export default function useIdle(timeout: number, enabled: boolean): boolean {
  const [store] = useState(() => createIdleStore(timeout));
  const idle = useSyncExternalStore(store.subscribe, store.getSnapshot, () => false);

  return enabled && idle;
}
