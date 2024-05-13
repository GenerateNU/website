import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ApplyPage from './component/ApplyPage'
import Position from './component/ApplyPage/Position'
import AboutPage from './component/AboutPage'
import ScrollToTop from './component/ScrollToTop'
import LandingPageV2 from './component/LandingPageV2/'
import CulturePage from './component/CulturePage'
import TeamsPage from './pages/TeamsPage'
import ExpandedTeamsPage from './pages/TeamsPage/ExpandedTeams'
import ProjectsPage from './component/ProjectsPage'
import CaseStudy from './component/CaseStudyPage'

import { client } from './client'
/**
 *
 * The app.js the routes to the different pages are located.
 * @returns
 */
export default function App() {
  const [directors, setDirectors] = React.useState([])

  React.useEffect(() => {
    client.fetch(`*[_type == "director"]`).then((data) => {
      setDirectors(data)
    })
  }, [])
  console.log(directors)
  
  return (
    <div className='App'>
      <Router>
        <div>
          <ScrollToTop />
          <Routes>
            <Route
              path='/'
              element={
                <>
                  {' '}
                  <ScrollToTop />
                  <LandingPageV2 />
                </>
              }
            />
            <Route
              path='/apply'
              element={
                <>
                  {' '}
                  <ScrollToTop /> <ApplyPage />
                </>
              }
            >
              <Route
                path=':team'
                element={
                  <>
                    {' '}
                    <ScrollToTop />
                    <ApplyPage />
                  </>
                }
              />
            </Route>
            <Route
              path='/positions/:id'
              element={
                <>
                  {' '}
                  <ScrollToTop /> <Position />
                </>
              }
            />
            <Route
              path='/positions/:categoryType/:index'
              element={
                <>
                  {' '}
                  <ScrollToTop /> <Position />
                </>
              }
            />
            <Route
              path='/about'
              element={
                <>
                  {' '}
                  <ScrollToTop /> <AboutPage />
                </>
              }
            />
            <Route
              path='/culture'
              element={
                <>
                  {' '}
                  <ScrollToTop /> <CulturePage />
                </>
              }
            />
            <Route
              path='/teams'
              element={
                <>
                  {' '}
                  <ScrollToTop />
                  <TeamsPage />
                </>
              }
            />
            <Route
              path='/projects'
              element={
                <>
                  {' '}
                  <ScrollToTop /> <ProjectsPage />
                </>
              }
            />
            <Route
              path='/case-study/:project'
              element={
                <>
                  {' '}
                  <ScrollToTop /> <CaseStudy />
                </>
              }
            />
            <Route
              path='/teams-expanded/*'
              element={
                <>
                  {' '}
                  <ScrollToTop /> <ExpandedTeamsPage />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  )
}
