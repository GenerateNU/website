import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router';

export default function RootError() {
  const error = useRouteError();

  const message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : 'Something went wrong.';

  return (
    <div role="alert" style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Oops!</h1>
      <p>{message}</p>
      <a href="/">Back to home</a>
    </div>
  );
}
