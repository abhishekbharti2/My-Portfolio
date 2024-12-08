import React, { useState, useEffect } from 'react';
import './Navbar.css'
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

        <div className="site-title">
          <h1>
            DoIn<span>Binary</span>
          </h1>
        </div>
        <ul className="link-container">
          <li>
            <a href="#Intro-Section" className="navbar-link">
              Home
            </a>
          </li>
          <li>
            <a href="#About-Section" className="navbar-link">
              About Us
            </a>
          </li>
          <li>
            <a href="#Work-Section" className="navbar-link">
              Our Work
            </a>
          </li>
          <li>
           <a href="/" className="navbar-link" >About</a>
          </li>
           <li>
           <a href="https://bhartiabhi.netlify.app" className="navbar-link">
              Contact Us
            </a>
           </li>
        </ul> 

        <label for="checkbox-1" className="label-check" id="label-btn-1">
          &#9776;
        </label>
        <label for="checkbox-1" className="label-check" id="label-btn-2">
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