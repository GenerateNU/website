import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop(): null {
  // @ts-expect-error -- known bug: useLocation is never called, so pathName is always undefined
  const { pathName } = useLocation;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  return null;
}
