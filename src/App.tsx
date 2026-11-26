import React from 'react';
import { BrowserRouter as Router, Navigate, useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import Position from './component/ApplyPage/Position';
import CulturePage from './component/CulturePage';
import ExternalRedirect from './component/ExternalRedirect';
import ProjectsPage from './component/ProjectsPage';
import ProjectsPageV2 from './component/ProjectsPageV2';
import ProjectsCaseStudyV3 from './component/ProjectsPageV3/CaseStudy';
import ProjectsPageV4 from './component/ProjectsPageV4';
import ProjectsPageV8 from './component/ProjectsPageV8';
import ProjectsPageV9 from './component/ProjectsPageV9';
import ProjectsCaseStudyV9 from './component/ProjectsPageV9/CaseStudy';
import ProjectsPageV10 from './component/ProjectsPageV10';
import ProjectsCaseStudyV10 from './component/ProjectsPageV10/CaseStudy';
import ProjectsPageV12 from './component/ProjectsPageV12';
import ProjectsCaseStudyV12 from './component/ProjectsPageV12/CaseStudy';
import ProjectsPageV13 from './component/ProjectsPageV13';
import ProjectsCaseStudyV13 from './component/ProjectsPageV13/CaseStudy';
import ProjectsPageV14 from './component/ProjectsPageV14';
import ProjectsPageV15 from './component/ProjectsPageV15';
import ProjectsPageV16 from './component/ProjectsPageV16';
import ProjectsCaseStudyV16 from './component/ProjectsPageV16/CaseStudy';
import ProjectsPageV17 from './component/ProjectsPageV17';
import ProjectsCaseStudyV17 from './component/ProjectsPageV17/CaseStudy';
import ProjectsPageV18 from './component/ProjectsPageV18';
import ProjectsCaseStudyV18 from './component/ProjectsPageV18/CaseStudy';
import ProjectsPageV19 from './component/ProjectsPageV19';
import ProjectsPageV20 from './component/ProjectsPageV20';
import ProjectsPageV21 from './component/ProjectsPageV21';
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
    { path: '/projects-v4', element: <ProjectsPageV4 /> },
    { path: '/projects-v8', element: <ProjectsPageV8 /> },
    { path: '/projects-v8/:slug', element: <ProjectsCaseStudyV3 basePath="/projects-v8" mediaCarousel /> },
    { path: '/projects-v9', element: <ProjectsPageV9 /> },
    { path: '/projects-v9/:slug', element: <ProjectsCaseStudyV9 /> },
    { path: '/projects-v10', element: <ProjectsPageV10 /> },
    { path: '/projects-v10/:slug', element: <ProjectsCaseStudyV10 /> },
    { path: '/projects-v12', element: <ProjectsPageV12 /> },
    { path: '/projects-v12/:slug', element: <ProjectsCaseStudyV12 /> },
    { path: '/projects-v13', element: <ProjectsPageV13 /> },
    { path: '/projects-v13/:slug', element: <ProjectsCaseStudyV13 /> },
    { path: '/projects-v14', element: <ProjectsPageV14 /> },
    { path: '/projects-v14/:slug', element: <ProjectsCaseStudyV3 basePath="/projects-v14" /> },
    { path: '/projects-v15', element: <ProjectsPageV15 /> },
    { path: '/projects-v15/:slug', element: <ProjectsCaseStudyV3 basePath="/projects-v15" /> },
    { path: '/projects-v16', element: <ProjectsPageV16 /> },
    { path: '/projects-v16/:slug', element: <ProjectsCaseStudyV16 /> },
    { path: '/projects-v17', element: <ProjectsPageV17 /> },
    { path: '/projects-v17/:slug', element: <ProjectsCaseStudyV17 /> },
    { path: '/projects-v18', element: <ProjectsPageV18 /> },
    { path: '/projects-v18/:slug', element: <ProjectsCaseStudyV18 /> },
    { path: '/projects-v19', element: <ProjectsPageV19 /> },
    { path: '/projects-v20', element: <ProjectsPageV20 /> },
    { path: '/projects-v21', element: <ProjectsPageV21 /> },
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
