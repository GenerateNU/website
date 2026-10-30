import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';

type ActiveScene = {
  sceneRefs: RefObject<(HTMLElement | null)[]>;
  active: number;
};

// A thin band a little below the middle of the screen: whichever scene crosses it is the one on the monitor.
// Below the middle, so on phones it sits under the pinned monitor, where the story text is read.
const READING_LINE = '-55% 0px -40% 0px';

// Follows the page's own scrolling; it never scrolls anything itself. The scenes are fixed, so it observes them once.
export default function useActiveScene(): ActiveScene {
  const sceneRefs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          const index = sceneRefs.current.findIndex(scene => scene === entry.target);

          if (entry.isIntersecting && index >= 0) {
            setActive(index);
          }
        }
      },
      { rootMargin: READING_LINE }
    );

    for (const scene of sceneRefs.current) {
      if (scene) {
        observer.observe(scene);
      }
    }

    return (): void => observer.disconnect();
  }, []);

  return { sceneRefs, active };
}
