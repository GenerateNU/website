import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Navigate, useRoutes } from 'react-router-dom'
import ExternalRedirect from './component/ExternalRedirect'
import ApplyPageV2 from './pages/ApplyPageV2'
import ScrollToTop from './component/ScrollToTop'
import LandingPageV3 from './pages/LandingPageV3'
import ProjectsPage from './component/ProjectsPage'
import { useSanity } from './services/useSanity'

function AppRoutes({ sanityRoutes }) {
  const routes = [
    { path: '/', element: <LandingPageV3 /> },
    {
      path: '/apply',
      element: <ApplyPageV2 />,
      children: [{ path: ':team', element: <ApplyPageV2 /> }]
    },
    { path: '/about', element: <Navigate to={'/'} /> },
    { path: '/projects', element: <ProjectsPage /> },
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
