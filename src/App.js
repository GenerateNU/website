import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './component/LandingPage/';
import ApplyPage from './component/ApplyPage';
import Position from './component/ApplyPage/Position';
import AboutPage from './component/AboutPage';
import ScrollToTop from './component/ScrollToTop';
import LandingPageV2 from './component/LandingPageV2/';
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
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/apply" element={<ApplyPage />}></Route>
            <Route path="/positions/:id" element={<Position />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/landing" element={<LandingPageV2 />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}