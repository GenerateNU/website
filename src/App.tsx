import React from 'react';
import { BrowserRouter as Router, Navigate, useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import Position from './component/ApplyPage/Position';
import CulturePage from './component/CulturePage';
import ExternalRedirect from './component/ExternalRedirect';
import ProjectsPage from './component/ProjectsPage';
import ProjectsPageV2 from './component/ProjectsPageV2';
import ProjectsPageV3 from './component/ProjectsPageV3';
import ProjectsCaseStudyV3 from './component/ProjectsPageV3/CaseStudy';
import ProjectsPageV4 from './component/ProjectsPageV4';
import ProjectsPageV5 from './component/ProjectsPageV5';
import ProjectsPageV6 from './component/ProjectsPageV6';
import ProjectsPageV7 from './component/ProjectsPageV7';
import ProjectsPageV8 from './component/ProjectsPageV8';
import ProjectsPageV9 from './component/ProjectsPageV9';
import ProjectsCaseStudyV9 from './component/ProjectsPageV9/CaseStudy';
import ProjectsPageV10 from './component/ProjectsPageV10';
import ProjectsCaseStudyV10 from './component/ProjectsPageV10/CaseStudy';
import ProjectsPageV11 from './component/ProjectsPageV11';
import ProjectsCaseStudyV11 from './component/ProjectsPageV11/CaseStudy';
import ProjectsPageV12 from './component/ProjectsPageV12';
import ProjectsCaseStudyV12 from './component/ProjectsPageV12/CaseStudy';
import ProjectsPageV13 from './component/ProjectsPageV13';
import ProjectsCaseStudyV13 from './component/ProjectsPageV13/CaseStudy';
import ProjectsPageV14 from './component/ProjectsPageV14';
import ProjectsPageV15 from './component/ProjectsPageV15';
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
    { path: '/projects-v2', element: <ProjectsPageV2 /> },
    { path: '/projects-v3', element: <ProjectsPageV3 /> },
    { path: '/projects-v3/:slug', element: <ProjectsCaseStudyV3 /> },
    { path: '/projects-v4', element: <ProjectsPageV4 /> },
    { path: '/projects-v5', element: <ProjectsPageV5 /> },
    { path: '/projects-v5/:slug', element: <ProjectsCaseStudyV3 basePath="/projects-v5" /> },
    { path: '/projects-v6', element: <ProjectsPageV6 /> },
    { path: '/projects-v6/:slug', element: <ProjectsCaseStudyV3 basePath="/projects-v6" /> },
    { path: '/projects-v7', element: <ProjectsPageV7 /> },
    { path: '/projects-v7/:slug', element: <ProjectsCaseStudyV3 basePath="/projects-v7" /> },
    { path: '/projects-v8', element: <ProjectsPageV8 /> },
    { path: '/projects-v8/:slug', element: <ProjectsCaseStudyV3 basePath="/projects-v8" mediaCarousel /> },
    { path: '/projects-v9', element: <ProjectsPageV9 /> },
    { path: '/projects-v9/:slug', element: <ProjectsCaseStudyV9 /> },
    { path: '/projects-v10', element: <ProjectsPageV10 /> },
    { path: '/projects-v10/:slug', element: <ProjectsCaseStudyV10 /> },
    { path: '/projects-v11', element: <ProjectsPageV11 /> },
    { path: '/projects-v11/:slug', element: <ProjectsCaseStudyV11 /> },
    { path: '/projects-v12', element: <ProjectsPageV12 /> },
    { path: '/projects-v12/:slug', element: <ProjectsCaseStudyV12 /> },
    { path: '/projects-v13', element: <ProjectsPageV13 /> },
    { path: '/projects-v13/:slug', element: <ProjectsCaseStudyV13 /> },
    { path: '/projects-v14', element: <ProjectsPageV14 /> },
    { path: '/projects-v14/:slug', element: <ProjectsCaseStudyV3 basePath="/projects-v14" /> },
    { path: '/projects-v15', element: <ProjectsPageV15 /> },
    { path: '/projects-v15/:slug', element: <ProjectsCaseStudyV3 basePath="/projects-v15" /> },
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
