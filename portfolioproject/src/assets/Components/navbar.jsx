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
    <nav className="navbar">
      <div className="logo">MySite</div>

      <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>

        <li
          className={`dropdown ${openDropdown === "services" ? "open" : ""}`}
        >
          <a
            href="#"
            className="dropdown-toggle"
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown("services");
            }}
          >
            Projects
          </a>
          <ul className="dropdown-menu">
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
