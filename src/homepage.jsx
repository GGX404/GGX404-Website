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
          <main className="main">
            <h1>Welcome to My Portfolio</h1>
            <h2>Projects:</h2>
            <p>Here are some of my personal and class projects.</p>
            <div className="projects">
              <ProjectBox /> 
            </div>
          </main>
        }
      />
      <Route path="/fact-checker" element={<FactChecker />} />
    </Routes>
  </Router>
);

