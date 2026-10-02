import { useEffect } from 'react';
import { NavigationType, useLocation, useNavigationType } from 'react-router-dom';

function ScrollOnNavigation() {
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType !== NavigationType.Pop) {
      window.scrollTo(0, 0);
    }
  }, [navigationType]);

  return null;
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  return <ScrollOnNavigation key={pathname} />;
}
