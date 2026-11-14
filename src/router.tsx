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
import { generateLinksOptions } from './sanity/queries/linksQuery';
import { queryClient } from './sanity/queryClient';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <RootError />,
    children: [
      { index: true, element: <LandingPageV3 /> },
      { path: 'apply/:team?', element: <ApplyPageV2 /> },
      { path: 'positions/:categoryType/:index', element: <Position /> },
      { path: 'about', loader: () => redirect('/') },
      { path: 'culture', element: <CulturePage /> },
      { path: 'teams', element: <TeamsPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'teams-expanded/:team', element: <ExpandedTeamsPage /> },
      {
        path: ':slug',
        element: <LandingPageV3 />,
        loader: async ({ params }) => {
          const links = await queryClient.ensureQueryData(generateLinksOptions());
          const link = links.find(candidate => candidate.slug === params.slug);

          if (link) {
            throw redirect(link.url);
          }

          return null;
        },
      },
      { path: '*', element: <LandingPageV3 /> },
    ],
  },
]);
