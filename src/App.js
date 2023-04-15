import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApplyPage from "./component/ApplyPage";
import Position from "./component/ApplyPage/Position";
import AboutPage from "./component/AboutPage";
import ScrollToTop from "./component/ScrollToTop";
import LandingPageV2 from "./component/LandingPageV2/";
import CulturePage from "./component/CulturePage";
import TeamsPage from "./component/TeamsPage";
import ExpandedTeamsPage from "./component/TeamsPage/ExpandedTeams";
import ProjectsPage from "./component/ProjectsPage";

/**
 *
 * The app.js the routes to the different pages are located.
 * @returns
 */
export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LandingPageV2 />}></Route>
            <Route path="/apply" element={<ApplyPage />}></Route>
            <Route path="/positions/:id" element={<Position />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/culture" element={<CulturePage />}></Route>
            <Route path="/teams" element={<TeamsPage />}></Route>
            <Route path="/projects" element={<ProjectsPage />}></Route>
            <Route path="/teams-expanded" element={<ExpandedTeamsPage />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
