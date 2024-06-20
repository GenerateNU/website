import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Navigate, useRoutes } from 'react-router-dom'
import ExternalRedirect from './component/ExternalRedirect'
import ApplyPageV2 from './pages/ApplyPageV2'
import Position from './component/ApplyPage/Position'
import AboutPage from './component/AboutPage'
import ScrollToTop from './component/ScrollToTop'
import LandingPageV3 from './pages/LandingPageV3'
import CulturePage from './component/CulturePage'
import TeamsPage from './pages/TeamsPage'
import ExpandedTeamsPage from './pages/TeamsPage/ExpandedTeams'
import ProjectsPage from './component/ProjectsPage'
import CaseStudy from './component/CaseStudyPage'
import { useSanity } from './services/useSanity'

function AppRoutes({ sanityRoutes }) {
  const routes = [
    { path: '/', element: <LandingPageV3 /> },
    {
      path: '/apply',
      element: <ApplyPageV2 />,
      children: [{ path: ':team', element: <ApplyPageV2 /> }]
    },
    { path: '/positions/:id', element: <Position /> },
    { path: '/positions/:categoryType/:index', element: <Position /> },
    { path: '/about', element: <Navigate to={"/"} /> /> },
    { path: '/culture', element: <CulturePage /> },
    { path: '/teams', element: <TeamsPage /> },
    { path: '/projects', element: <ProjectsPage /> },
    { path: '/case-study/:project', element: <CaseStudy /> },
    { path: '/teams-expanded/*', element: <ExpandedTeamsPage /> },
    ...sanityRoutes,
    { path: '*', element: <LandingPageV3 /> }
  ]

  const allRoutes = useRoutes(routes)
  return allRoutes
}

export default function App() {
  const query = `*[_type == "generateLink"]`
  const links = useSanity(query)
  const [sanityRoutes, setSanityRoutes] = useState([])

  useEffect(() => {
    if (links.length > 0) {
      const newRoutes = links.map((link) => ({
        path: `/${link.slug.current}`,
        element: <ExternalRedirect to={link.url} />
      }))
      setSanityRoutes(newRoutes)
    }
  }, [links])

  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <AppRoutes sanityRoutes={sanityRoutes} />
      </Router>
    </div>
  )
}
