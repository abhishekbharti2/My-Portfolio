import React from 'react'
import '../stylesheets/Footer.css'
export default function Footer() {
  return (
    <>
      <footer className='web-footer'>
        <div className='footer-div-1'>
          <div className='footer-div1-el' id='credit-first-cont'>
            <div id="site-title">
              Abhishek <span>Bharti</span>
            </div>
          </div>
          <div className='footer-div1-el'>
            <h4 className='footer-headings'>ABOUT</h4> <br />
            <p className='footer-paragraph'>We specialize in crafting dynamic, responsive, and user-friendly websites. Whether it’s building sleek frontends with React or vanilla HTML/CSS/JavaScript, or powering robust backends, we ensure seamless functionality tailored to your needs.</p>
          </div>
          <div className='footer-div1-el'>
            <h4 className='footer-headings'>CALL TO ACTION</h4><br />
            <p className='footer-paragraph'>
              <strong>Open To Work</strong>
              <li>FrontEnd Role</li>
              <li>BackEnd Role</li>
              <li>Full Stack Role</li>
            </p>
          </div>
        </div>
        <span className='scl-head'>Our Social Media Handles </span>
        <div className="socialmedia-handles">
          <a href="https://www.facebook.com/profile.php?id=100027548940668" className="fa-brands fa-facebook"> </a>
          <a href="https://www.linkedin.com/in/abhishek-bharti7843/" className="fa-brands fa-linkedin"> </a>
          <a href="https://github.com/abhishekbharti2" className="fa-brands fa-github"> </a>
          <a href="https://x.com/AD_Jack9?t=9DGN-8JDwo4rVMXtPKXpUA&s=08" className='fa-brands fa-x-twitter'> </a>
        </div>
        <p className='copyright-p'>&copy; abhishekbharti || All Right Reserved</p><br />
      </footer>
    </>
  );
}