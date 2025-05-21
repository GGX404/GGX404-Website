import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/Components/navbar';
import ProjectBox from './assets/Components/projectbox';
import FactChecker from './assets/Webpages/Fact-checker/factchecker';

createRoot(document.getElementById('root')).render(
  <Router>
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={
          <div className='homepage'>
            <div className="title">
            <h1 className="large-font">Welcome to Chase's Website</h1>
            <h3 >This is a collection of my projects and interests.</h3>
            <h2>Projects:</h2>
            </div>
            <div className="projects">
              <ProjectBox /> 
            </div>
            <h2 className='title'>Cool things:</h2>
            <div className="interest" style={{borderTop:"white solid 1px"}} ><a target="_blank"href="https://github.com/GGX404"><h3>Github</h3><p>My personal Github</p></a></div>
            <div className="interest" ><a target='_blank'href="https://github.com/GGX404/GGX404-Website" ><h3 style={{color: 'lightgreen'}}>Source Code</h3><p>Source code for this website.</p></a></div>
            <footer className='homepage'>Chase, 2025</footer>
          </div>
        }
      />
      <Route path="/fact-checker" element={<FactChecker />} />
    </Routes>
  </Router>
);

