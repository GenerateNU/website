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

/**
 *
 * The app.js the routes to the different pages are located.
 * @returns
 */
export default function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<LandingPageV2 />} />
            <Route path='/apply' element={<ApplyPage />}>
              <Route path=':team' element={<ApplyPage />} />
            </Route>
            <Route path='/positions/:id' element={<Position />} />
            <Route path='/positions/:categoryType/:index' element={<Position />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/culture' element={<CulturePage />} />
            <Route path='/teams' element={<TeamsPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/case-study/:project' element={<CaseStudy />} />
            <Route
              path='/teams-expanded'
              element={<ExpandedTeamsPage />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}
