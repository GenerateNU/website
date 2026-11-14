import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router';

export default function Root() {
  return (
    <div className="App">
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}
