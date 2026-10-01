import { useState, useEffect } from 'react';

export default function useWebsite(): boolean {
  const [isWebsite, setIsWebsite] = useState(window.innerWidth > 650);

  useEffect(() => {
    const handleResize = (): void => setIsWebsite(window.innerWidth > 650);

    window.addEventListener('resize', handleResize);

    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return isWebsite;
}
