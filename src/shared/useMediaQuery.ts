import { useSyncExternalStore } from 'react';

export default function useMediaQuery(query: string): boolean {
  const subscribe = (onChange: () => void): (() => void) => {
    const list = window.matchMedia(query);

    list.addEventListener('change', onChange);

    return () => list.removeEventListener('change', onChange);
  };

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false
  );
}
