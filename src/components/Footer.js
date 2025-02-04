import React from 'react'
import '../stylesheets/Footer.css'
export default function Footer() {
  return (
    <>
      <footer className='web-footer'>
        <div className='footer-div-1'>
          <div className='footer-div1-el'>
            <h4 className='footer-headings'>DO IN BINARY</h4><br/>
            <p className='footer-paragraph'>
              Creative and Engaging Designs <br/>
              Modern Technologies <br/>
              Custom Solutions <br/>
              End-to-End Services <br/>
              Responsive and Fast Websites</p>
          </div>
          <div className='footer-div1-el'>
            <h4 className='footer-headings'>ABOUT</h4> <br />
            <p className='footer-paragraph'>We specialize in crafting dynamic,
              responsive, and user-friendly websites. Whether it’s
              building sleek frontends with React or vanilla HTML/CSS/JavaScript,
              or powering robust backends, we ensure seamless functionality
              tailored to your needs.</p>
          </div>
          <div className='footer-div1-el'>
            <h4 className='footer-headings'>DEVELOPER TEAM</h4> <br />
            <p className='fa'>&#xf0e0; bhartiabhishek760@gmail.com</p>
            <li><a href="https://bhartiabhi.netlify.app#contact" className='contact-dev'>contact developer</a></li>
          </div>
        </div>
        <span className='scl-head'>Our Social Media Handles </span>
        <div className="socialmedia-handles">
          <a href="https://www.facebook.com/profile.php?id=100027548940668" className="fa fa-facebook"> </a>
          <a href="https://x.com/AD_Jack9?t=9DGN-8JDwo4rVMXtPKXpUA&s=08" className="fa fa-twitter"> </a>
          <a href="https://www.instagram.com/ejoyr.fashion?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="fa fa-instagram"> </a>
          <a href="https://youtube.com" className="fa fa-youtube"> </a>
        </div>
        <p className='copyright-p'>&copy; www.doinbinary.rf.gd || All Right Reserved</p><br />
      </footer>
    </>
  );
}