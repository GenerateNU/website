import React from 'react';
import { createBrowserRouter, redirect } from 'react-router';

import Position from './component/ApplyPage/Position';
import CulturePage from './component/CulturePage';
import ProjectsPage from './component/ProjectsPage';
import ApplyPageV2 from './pages/ApplyPageV2';
import LandingPageV3 from './pages/LandingPageV3';
import TeamsPage from './pages/TeamsPage';
import ExpandedTeamsPage from './pages/TeamsPage/ExpandedTeams';
import Root from './routes/Root';
import RootError from './routes/RootError';
import RootHydrateFallback from './routes/RootHydrateFallback';
import { copyOptions } from './sanity/queries/copyQuery';
import { directorsOptions } from './sanity/queries/directorsQuery';
import { generateLinksOptions } from './sanity/queries/linksQuery';
import { showcasesOptions } from './sanity/queries/showcasesQuery';
import { applyTeamsOptions, branchesOptions, structuredTeamsOptions } from './sanity/queries/teamsQuery';
import { valuesOptions } from './sanity/queries/valuesQuery';
import { queryClient } from './sanity/queryClient';

async function findShortLink(path: string): Promise<string | undefined> {
  const slug = path.replace(/\/+$/, '').toLowerCase();

  try {
    const links = await queryClient.ensureQueryData(generateLinksOptions());

    return links.find(link => link.slug.toLowerCase() === slug)?.url;
  } catch {
    return undefined;
  }
}

/**
 * Starts every landing-page query without waiting for it. Sections suspend on their own data inside a
 * SectionBoundary, so the page paints immediately and a slow or failed query only affects its section.
 */
const prefetchLanding = (): null => {
  void queryClient.prefetchQuery(copyOptions());
  void queryClient.prefetchQuery(valuesOptions());
  void queryClient.prefetchQuery(branchesOptions());
  void queryClient.prefetchQuery(structuredTeamsOptions());
  void queryClient.prefetchQuery(showcasesOptions());
  void queryClient.prefetchQuery(directorsOptions());

  return null;
};

const prefetchApply = (): null => {
  void queryClient.prefetchQuery(applyTeamsOptions());

  return null;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <RootError />,
    HydrateFallback: RootHydrateFallback,
    children: [
      { index: true, element: <LandingPageV3 />, loader: prefetchLanding },
      { path: 'apply/:team?', element: <ApplyPageV2 />, loader: prefetchApply },
      { path: 'positions/:categoryType/:index', element: <Position /> },
      { path: 'about', loader: () => redirect('/') },
      { path: 'culture', element: <CulturePage /> },
      { path: 'teams', element: <TeamsPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'teams-expanded/:team', element: <ExpandedTeamsPage /> },
      {
        path: '*',
        element: <LandingPageV3 />,
        loader: async ({ params }) => {
          // Start the landing data in parallel with the short-link lookup; it's needed if no link matches.
          prefetchLanding();

          const url = await findShortLink(params['*'] ?? '');

          if (url) {
            throw redirect(url);
          }

          return null;
        },
      },
    ],
  },
]);
