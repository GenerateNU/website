import { QueryClient } from '@tanstack/react-query';

// CMS content only changes on publish, so a fetched result stays fresh for the whole session.
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});
