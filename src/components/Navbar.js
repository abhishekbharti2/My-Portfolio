import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`nav-container ${scrolled ? "scrolled" : ""}`}>
        <input type="checkbox" id="checkbox-1" className="check-boxes" />

        <div id="site-title">
          Abhishek <span>Bharti</span>
        </div>

        <ul className="link-container">
          <li>
            <NavLink to="/" className="navbar-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="navbar-link">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin" className="navbar-link">
              Admin
            </NavLink>
          </li>
        </ul>

        <label htmlFor="checkbox-1" className="label-check" id="label-btn-1">
          &#9776;
        </label>
        <label htmlFor="checkbox-1" className="label-check" id="label-btn-2">
          &#10005;
        </label>
      </nav>
    </>
  );
}
