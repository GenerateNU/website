
import React, { Component } from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import LandingPage from './component/landingpage.jsx'
import AboutPage from './component/AboutPage/aboutPageMain.jsx'
function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <Routes>
          <Route path="/about" element={<AboutPage/>}>
          </Route>
          <Route path="/" element={<LandingPage/>}>
          </Route>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
