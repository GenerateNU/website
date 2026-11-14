import React, { Suspense } from 'react';
import type { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

type SectionBoundaryProps = {
  children: ReactNode;
};

/**
 * Isolates a Sanity-backed section: it renders nothing while its data loads or if the fetch fails,
 * so one slow or failed query never blanks the rest of the page.
 */
export default function SectionBoundary({ children }: SectionBoundaryProps) {
  return (
    <ErrorBoundary fallback={null}>
      <Suspense fallback={null}>{children}</Suspense>
    </ErrorBoundary>
  );
}
