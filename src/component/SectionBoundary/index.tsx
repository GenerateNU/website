import React, { Suspense } from 'react';
import type { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

type SectionBoundaryProps = {
  children: ReactNode;
};

export default function SectionBoundary({ children }: SectionBoundaryProps) {
  return (
    <ErrorBoundary fallback={null}>
      <Suspense fallback={null}>{children}</Suspense>
    </ErrorBoundary>
  );
}
