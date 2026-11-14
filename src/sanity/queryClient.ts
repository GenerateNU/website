import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      // Ride out transient Sanity/CDN blips before a section gives up.
      retry: 2,
    },
  },
});
