import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';

type InView<T> = {
  ref: RefObject<T | null>;
  inView: boolean;
};

// Whether the element is on screen, so things that move on their own can hold still while nobody sees them.
export default function useInView<T extends Element>(): InView<T> {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => setInView(entry?.isIntersecting ?? false));

    observer.observe(element);

    return (): void => observer.disconnect();
  }, []);

  return { ref, inView };
}
