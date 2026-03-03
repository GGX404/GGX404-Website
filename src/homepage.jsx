import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/Components/Unused/navbar';
import ProjectBox from './assets/Components/Unused/projectbox';
import FactChecker from './Unused/factchecker';
import NewNav from './assets/Components/Unused/newnav';
import Contact from './Pages/contact';
import AboutMe from './Unused/aboutme';
import ConstructionHomePage from './Unused/construction';
import Home from './Pages/home';
import Footer from './assets/Components/footer';
import Music from './Pages/music';
createRoot(document.getElementById('root')).render(
  <Router>
    {/*<NewNav />*/}
    <Routes>
      <Route path="/" element={<Home />}/>
      {/*<Route path="/fact-checker" element={<FactChecker />} />    To be used at a later date.*/}
      <Route path="/contact" element={<Contact />} />
      <Route path="/music" element={<Music />} />
      <Route path="/stairs" element={
        <div className="flex flex-col items-center  text-center h-[92vh] bg-gradient-to-b from-gray-950 to-gray-800 text-white place-content-center">
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

