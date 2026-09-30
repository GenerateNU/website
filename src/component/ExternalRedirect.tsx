import { useEffect } from 'react';
import type { JSX } from 'react';

type ExternalRedirectProps = {
  to: string;
};

export default function ExternalRedirect({ to }: ExternalRedirectProps): JSX.Element {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return <></>;
}
