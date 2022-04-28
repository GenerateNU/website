import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './component/LandingPage/';
import ApplyPage from './component/ApplyPage/applyPageMain';
import Position from './component/ApplyPage/Position';
import ScrollToTop from './component/ScrollToTop';
import AboutPage from './component/AboutPage/leadership';
import Mission from './component/AboutPage/mission'
/**
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
            {/* <Route path="/" element={<LandingPage />}></Route> */}
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/apply" element={<ApplyPage />}></Route>
            <Route path="/positions/:id" element={<Position />} />
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/mission" element={<Mission />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}