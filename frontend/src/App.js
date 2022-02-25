import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from './component/landingpage.jsx'
import AboutPage from './component/AboutPage/aboutPageMain.jsx'
import ApplyPage from './component/ApplyPage/applyPageMain.jsx'

/**
 * The app.js the routes to the different pages are located.
 * @returns 
 */
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/apply" element={<ApplyPage />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;