import { useEffect } from 'react';

type ExternalRedirectProps = {
  to: string;
};

export default function ExternalRedirect({ to }: ExternalRedirectProps): null {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return null;
}
