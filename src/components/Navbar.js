import React, { useState, useEffect } from 'react';
import '../stylesheets/Navbar.css'
export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
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
            <a href="#Intro-Section" className="navbar-link">
              Home
            </a>
          </li>
          <li>
            <a href="#About-Section" className="navbar-link">
              About
            </a>
          </li>
          <li>
            <a href="#Projects" className="navbar-link">
              Projects
            </a>
          </li>
           <li>
           <a href="#contact" className="navbar-link">
              Contact
            </a>
           </li>
        </ul> 

        <label htmlFor="checkbox-1" className="label-check" id="label-btn-1">
          &#9776;
        </label>
        <label htmlFor="checkbox-1" className="label-check" id="label-btn-2">
          &#10005;
        </label>
      </nav>

      <div id="loading-page">
        <div className="spinner-loading"></div>
        <span className="loading-title">Please Wait</span>
      </div>
    </>
  );
}