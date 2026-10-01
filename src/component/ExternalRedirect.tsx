import { useEffect } from 'react';

type ExternalRedirectProps = {
  to: string;
};

export default function ExternalRedirect({ to }: ExternalRedirectProps) {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return null;
}
