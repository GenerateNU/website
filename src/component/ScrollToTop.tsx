import { useEffect, useLayoutEffect, useRef } from 'react';
import { NavigationType, useLocation, useNavigationType } from 'react-router-dom';

// Where each history entry was last scrolled to, keyed by React Router's location key.
const scrollPositions = new Map<string, number>();

// Scrolls to the top when the pathname changes, and back to the saved position on Back/Forward.
// Search-param updates (like a project modal's ?project=) also change the navigation type from POP
// to PUSH, so the scroll must not key on that.
export default function ScrollToTop() {
  const { pathname, key } = useLocation();
  const navigationType = useNavigationType();
  const lastPathname = useRef(pathname);
  const currentKey = useRef(key);

  useEffect(() => {
    const recordScroll = (): void => {
      scrollPositions.set(currentKey.current, window.scrollY);
    };

    window.addEventListener('scroll', recordScroll, { passive: true });

    return () => window.removeEventListener('scroll', recordScroll);
  }, []);

  // A layout effect runs right after the new page is in the DOM and before the browser paints or fires
  // scroll events, so the jump caused by the new page is never saved against the page being left,
  // and a restored position shows up without first flashing the top of the page.
  useLayoutEffect(() => {
    currentKey.current = key;

    if (lastPathname.current === pathname) {
      return;
    }

    lastPathname.current = pathname;

    const saved = navigationType === NavigationType.Pop ? scrollPositions.get(key) : 0;

    // Instant, because Bootstrap's reboot makes page scrolling smooth, which would animate across the new page.
    if (saved !== undefined) {
      window.scrollTo({ top: saved, behavior: 'instant' });
    }
  }, [pathname, navigationType, key]);

  return null;
}
