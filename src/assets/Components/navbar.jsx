import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../../../styles/navbar.css"; // Adjust the path as necessary

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    if (window.innerWidth > 768) return; // skip toggle on desktop
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest(".dropdown")) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <nav className="navbar bg-black border-b-2 border-white text-white pl-8 pt-4 pr-8 pb-4 flex justify-between items-center sticky top-0 z-1">
      <div className="text-2xl font-bold">Chase's Site</div>

      <div className="flex-col cursor-pointer gap-1.25" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <span className="w-6 h-0.5 text-white hidden rounded-sm md:max-md:flex"></span>
        <span className="w-6 h-0.5 text-white hidden rounded-sm md:max-md:flex"></span>
        <span className="w-6 h-0.5 text-white hidden rounded-sm md:max-md:flex"></span>
      </div>
      <ul className={`nav-links list-none flex gap-8 items-center md:max-md:flex-col md:max-md:hidden md:max-md:bg-black bg-none md:max-md:w-full md:max-md:absolute md:max-md:top-16 md:max-md:right-0 md:max-md:text-center md:max-md:pb-4 ${mobileMenuOpen ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>

        <li
          className={`dropdown group hover:block relative hover:[&>_dropdown-menu]:block ${openDropdown === "services" ? "open" : ""}`}
        >
          <a
            href="#"
            className="dropdown-toggle text-white no-underline p-2.5 block hover:text-cyan-300"
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown("services");
            }}>
            Projects
          </a>
          <ul className="dropdown-menu md:group-hover:block md:max-md:group-hover:hidden hover:block hidden absolute bg-black top-1/1 left-0 min-w-40 rounded-sm shadow-sm shadow-black z-10 pl-2">
            <li><Link to="/fact-checker">Fact Checker</Link></li>
          </ul>
        </li>

        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
