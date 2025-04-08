import React from 'react';
import '../stylesheets/Contact.css';

function handleCopy(value) {
    navigator.clipboard.writeText(value);
    const copyMsg = document.getElementById('copymsg');
    copyMsg.style.display = 'flex';
    setTimeout(() => {
        copyMsg.style.display = 'none';
    }, 1000);
}

export default function Contact() {
    return (
        <section className="contact-section" id='contact'>
            <div className="contact-container">
                <h1 className="section-title">Get In <span>Touch</span></h1>
                
                <div className="contact-content">
                    <div className="contact-map">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11344.603545633849!2d81.57501089971723!3d23.184334986240234!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1738604162370!5m2!1sen!2sin" 
                            title='location'
                            loading="lazy"
                            allowFullScreen
                        ></iframe>
                    </div>
                    
                    <div className="contact-info">
                        <div className="contact-card" onClick={() => handleCopy('abhibharti365@gmail.com')}>
                            <div className="contact-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-detail">
                                <h3>Email</h3>
                                <p>abhibharti365@gmail.com</p>
                            </div>
                        </div>
                        
                        <div className="contact-card" onClick={() => handleCopy('9713397975')}>
                            <div className="contact-icon whatsapp">
                                <i className="fab fa-whatsapp"></i>
                            </div>
                            <div className="contact-detail">
                                <h3>WhatsApp</h3>
                                <p>9713397975</p>
                            </div>
                        </div>
                        
                        <div className="contact-card" onClick={() => handleCopy('+91 9713397975')}>
                            <div className="contact-icon phone">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="contact-detail">
                                <h3>Phone</h3>
                                <p>+91 9713397975</p>
                            </div>
                        </div>
                        
                        <div id="copymsg" className="copy-message">
                            <span>Copied to clipboard!</span>
                        </div>
                    </div>
                    
                    <div className="contact-form">
                        <form action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="487b169d-1360-4354-8f44-1e908b73e1cc" />
                            
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="Client Name" 
                                    className="form-input" 
                                    placeholder="Your Name" 
                                    required 
                                />
                                <i className="fas fa-user input-icon"></i>
                            </div>
                            
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    name="Client Gmail" 
                                    className="form-input" 
                                    placeholder="Your Email" 
                                    required 
                                />
                                <i className="fas fa-envelope input-icon"></i>
                            </div>
                            
                            <div className="form-group">
                                <textarea 
                                    name="Message" 
                                    className="form-textarea" 
                                    placeholder="Your Message"
                                    rows="5"
                                    required
                                ></textarea>
                                <i className="fas fa-comment input-icon textarea-icon"></i>
                            </div>
                            
                            <button type="submit" className="submit-btn">
                                Send Message
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}