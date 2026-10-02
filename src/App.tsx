import React from 'react';
import { BrowserRouter as Router, Navigate, useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import Position from './component/ApplyPage/Position';
import CulturePage from './component/CulturePage';
import ExternalRedirect from './component/ExternalRedirect';
import ProjectsPage from './component/ProjectsPage';
import ScrollToTop from './component/ScrollToTop';
import ApplyPageV2 from './pages/ApplyPageV2';
import LandingPageV3 from './pages/LandingPageV3';
import TeamsPage from './pages/TeamsPage';
import ExpandedTeamsPage from './pages/TeamsPage/ExpandedTeams';
import { useSanity } from './services/useSanity';

type GenerateLink = {
  slug: { current: string };
  url: string;
};

type AppRoutesProps = {
  sanityRoutes: RouteObject[];
};

function AppRoutes({ sanityRoutes }: AppRoutesProps) {
  const routes: RouteObject[] = [
    { path: '/', element: <LandingPageV3 /> },
    {
      path: '/apply',
      element: <ApplyPageV2 />,
      children: [{ path: ':team', element: <ApplyPageV2 /> }],
    },
    { path: '/positions/:id', element: <Position /> },
    { path: '/positions/:categoryType/:index', element: <Position /> },
    { path: '/about', element: <Navigate to={'/'} /> },
    { path: '/culture', element: <CulturePage /> },
    { path: '/teams', element: <TeamsPage /> },
    { path: '/projects', element: <ProjectsPage /> },
    { path: '/teams-expanded/*', element: <ExpandedTeamsPage /> },
    ...sanityRoutes,
    { path: '*', element: <LandingPageV3 /> },
  ];

  const allRoutes = useRoutes(routes);

  return allRoutes;
}

export default function App() {
  const query = `*[_type == "generateLink"]`;
  const links = useSanity<GenerateLink>(query);

  const sanityRoutes: RouteObject[] = links.map(link => ({
    path: `/${link.slug.current}`,
    element: <ExternalRedirect to={link.url} />,
  }));

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <AppRoutes sanityRoutes={sanityRoutes} />
      </Router>
    </div>
  );
}
