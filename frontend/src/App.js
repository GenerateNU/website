import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage/';
import ApplyPage from './components/ApplyPage/applyPageMain';
import PositionDetails from './components/ApplyPage/positionDetails';

/**
 * The app.js the routes to the different pages are located.
 * @returns 
 */
export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            {/* <Route path="/" element={<LandingPage />}></Route> */}
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/apply" element={<ApplyPage />}></Route>
            <Route path="/positionTitle/details" element={<PositionDetails />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}