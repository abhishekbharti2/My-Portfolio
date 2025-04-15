import React from 'react';
import '../stylesheets/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand">
            <h2 className="footer-title">
              Abhishek <span>Bharti</span>
            </h2>
            <p className="footer-tagline">Full Stack Developer</p>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">About</h3>
          <p className="footer-text">
            We specialize in crafting dynamic, responsive, and user-friendly websites. 
            Whether it's building sleek frontends with React or vanilla HTML/CSS/JavaScript, 
            or powering robust backends, we ensure seamless functionality tailored to your needs.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Call To Action</h3>
          <div className="footer-cta">
            <p className="cta-text"><strong>Open To Work</strong></p>
            <ul className="cta-list">
              <li>FrontEnd Role</li>
              <li>BackEnd Role</li>
              <li>Full Stack Role</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-social">
        <h4 className="social-title">Connect With Me</h4>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=100027548940668" 
             className="social-icon facebook"
             target="_blank"
             rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.linkedin.com/in/abhibhrt" 
             className="social-icon linkedin"
             target="_blank"
             rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/abhishekbharti2" 
             className="social-icon github"
             target="_blank"
             rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://x.com/abhibhrt" 
             className="social-icon twitter"
             target="_blank"
             rel="noopener noreferrer">
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Abhishek Bharti. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}