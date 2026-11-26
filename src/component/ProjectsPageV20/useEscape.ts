import { useEffect, useEffectEvent } from 'react';

// Calls `onEscape` when Esc is pressed anywhere on the page, while `active`.
export default function useEscape(active: boolean, onEscape: () => void): void {
  const handleKeyDown = useEffectEvent((event: KeyboardEvent): void => {
    if (event.key === 'Escape' && !event.defaultPrevented) {
      onEscape();
    }
  });

  useEffect(() => {
    if (!active) {
      return;
    }

    document.addEventListener('keydown', handleKeyDown);

    return (): void => document.removeEventListener('keydown', handleKeyDown);
  }, [active]);
}
