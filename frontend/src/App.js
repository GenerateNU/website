import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage/';
import ApplyPage from './components/ApplyPage/applyPageMain';
import Position from './components/ApplyPage/Position';
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
            <Route path="/" element={<LandingPage />} />
            <Route path="/apply" element={<ApplyPage />} />
            <Route path="/positions/:id" element={<Position />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}