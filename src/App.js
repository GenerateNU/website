import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ExternalRedirect from './component/ExternalRedirect'
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
            <Route path='/' element={<> <ScrollToTop /><LandingPageV2 /></>} />
            <Route path='/clientapp' element={<ExternalRedirect to="https://docs.google.com/forms/d/e/1FAIpQLSd8PPVmILgy92GdVZCn8cYm1sSgsnKZVxnaNDxA8KKL1JxYSg/viewform?usp=sf_link" />} />
            <Route path='/apply' element={<> <ScrollToTop /> <ApplyPage /></>}>
              <Route path=':team' element={<> <ScrollToTop /><ApplyPage /></>} />
            </Route>
            <Route path='/positions/:id' element={<> <ScrollToTop /> <Position /></>} />
            <Route path='/positions/:categoryType/:index' element={<> <ScrollToTop /> <Position /></>} />
            <Route path='/about' element={<> <ScrollToTop /> <AboutPage /></>} />
            <Route path='/culture' element={<> <ScrollToTop /> <CulturePage /></>} />
            <Route path='/teams' element={<>    <ScrollToTop /><TeamsPage /></>} />
            <Route path='/projects' element={<> <ScrollToTop /> <ProjectsPage /></>} />
            <Route path='/case-study/:project' element={<> <ScrollToTop /> <CaseStudy /></>} />
            <Route path='/teams-expanded/*' element={<> <ScrollToTop /> <ExpandedTeamsPage /></>} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>


      </Router>
    </div>
  )
}
