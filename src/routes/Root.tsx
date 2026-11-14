import React from 'react';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router';

const progressBarStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  width: '100%',
  height: 3,
  border: 'none',
  appearance: 'none',
  accentColor: '#187DFF',
  zIndex: 1000,
};

export default function Root() {
  const isNavigating = useNavigation().state === 'loading';

  return (
    <div className="App">
      {isNavigating && <progress aria-label="Loading page" style={progressBarStyle} />}
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}
