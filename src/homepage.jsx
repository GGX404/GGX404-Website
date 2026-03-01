import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/Components/navbar';
import ProjectBox from './assets/Components/projectbox';
import FactChecker from './factchecker';
import NewNav from './assets/Components/newnav';
import Contact from './contact';
import AboutMe from './aboutme';
import ConstructionHomePage from './construction';
import Home from './home';
import Footer from './footer';
import Music from './music';
createRoot(document.getElementById('root')).render(
  <Router>
    {/*<NewNav />*/}
    <Routes>
      <Route path="/" element={<Home />}/>
      {/*<Route path="/fact-checker" element={<FactChecker />} />    To be used at a later date.*/}
      <Route path="/contact" element={<Contact />} />
      <Route path="/music" element={<Music />} />
      <Route path="/stairs" element={
        <div className="flex flex-col items-center  text-center h-[92vh] bg-gradient-to-b from-gray-900 to-gray-200 text-white place-content-center">
          <div className="relative bg-gradient-to-b from-olive-950 to-green-900 pb-1 p-10 rounded-2xl"><video autoPlay muted loop playsInline width="1080">
            <source src="./resources/stairs.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className='text-2xl pt-1'>“You are an amazing guy, Natsuki Subaru”</p>

          </div>
          <Footer />
        </div>} />
    </Routes>
  </Router>
);

