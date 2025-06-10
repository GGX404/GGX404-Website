import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/Components/navbar';
import ProjectBox from './assets/Components/projectbox';
import FactChecker from './factchecker';
import BirthdayCard from './birthday_card';
import PortfolioProject from './portfolio_project';
import NewNav from './assets/Components/newnav';
import Contact from './contact';
import AboutMe from './aboutme';
createRoot(document.getElementById('root')).render(
  <Router>
    <NewNav />
    <Routes>
      <Route
        path="/"
        element={
          <div className='homepage text-gray-100 bg-gradient-to-b from-gray-900 to-gray-800 absolute h-[92.5%] text-center w-full'>
            <div className="title inline-block">
            <h1 className="text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-300 text-shadow-lg ">Welcome to Chase's Website</h1>
            <h3 >This is a collection of my projects and interests.</h3>
            <h2 className="text-2xl text-blue-400">Projects:</h2>
            </div>
            <div className="projects sm:max-sm:grid-cols-1 sm:max-sm:text-center sm:max-sm:gap-0">
              <ProjectBox /> 
            </div>
            <h2 className='title'>Cool things:</h2>
            <div className="group bg-gradient-to-l from-gray-900 to-gray-950 border-white border-2 border-solid w-3xs ml-auto mr-auto p-2.5 block" ><a target="_blank"href="https://github.com/GGX404"><h3 className='text-blue-300 text-2xl'>Github</h3><p className='text-gray-500 group-hover:text-gray-300'>My personal Github</p></a></div>
            <div className="group text-m bg-gradient-to-l from-gray-900 to-gray-950 border-white border-2 border-solid w-3xs self-center ml-auto mr-auto p-2.5 block border-t-0" ><a target='_blank'href="https://github.com/GGX404/GGX404-Website" ><h3 className='text-2xl text-green-300'>Source Code</h3><p className='text-gray-500 group-hover:text-gray-300'>Source code for this website.</p></a></div>
            <footer className='homepage md:absolute md:bottom-0 text-gray-600 bottom-0 text-center w-full pb-2.5 sm:max-sm:sticky'>Chase, 2025</footer>
          </div>
        }
      />
      <Route path="/fact-checker" element={<FactChecker />} />
      <Route path="/birthday_card" element={<BirthdayCard />} />
      <Route path="/portfolio-project" element={<PortfolioProject />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/about-me" element={<AboutMe />} />
    </Routes>
  </Router>
);

