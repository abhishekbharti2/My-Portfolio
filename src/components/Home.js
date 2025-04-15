import React, { useState, useEffect } from 'react'
import '../stylesheets/Home.css'
import skills from '../dataset/skills.json'

export default function Home() {
    const [project, setProject] = useState('Basic Level');
    const [hidden, setHidden] = useState(null)
    const [isLoading, setIsLoading] = useState(<div className="loading-screen"><span className="loader"></span><p>Be Patience</p></div>);

    function handleHeart() {
        const heartBtn = document.getElementById('heart-btn');
        heartBtn.style.color = '#ef4444';
        heartBtn.style.animation = 'pulse 1s infinite';
    }

    function handleSkillClick(item) {
        setHidden(item);
    }

    useEffect(() => {
        const images = document.querySelectorAll(".portfolio-image");
        let loadedImages = 0;

        if (images.length === 0) {
            setIsLoading(null);
            return;
        }

        const handleImageLoad = () => {
            loadedImages++;
            if (loadedImages === images.length) {
                setIsLoading(null);
            }
        };

        images.forEach((img) => {
            if (img.complete) {
                handleImageLoad();
            } else {
                img.addEventListener("load", handleImageLoad);
            }
        });

        return () => {
            images.forEach((img) => img.removeEventListener("load", handleImageLoad));
        };
    }, []);

    return (
        <div className="portfolio-container">
            {isLoading}
            <img className='portfolio-bg portfolio-image' src="/assets/bg.webp" alt="Background" />
            <input type="checkbox" id="project-modal-toggle" className="modal-toggle" />
            
            <div className="project-modal">
                <div className='modal-content'>
                    <div className="pricing-info">
                        <h3>Service Type: <span>{project}</span></h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Expect Time</th>
                                    <th>Basic</th>
                                    <th>Moderate </th>
                                    <th>Advanced</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>3-10 days</td>
                                    <td>₹ 500 – 1,500</td>
                                    <td>₹ 2,000 – 5,000</td>
                                    <td>₹ 6,000 – 10,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <form action="https://api.web3forms.com/submit" method="POST" className="project-form">
                        <p className="form-instruction"><i>Please fill all required fields*</i></p>
                        <input type="hidden" name="access_key" value="487b169d-1360-4354-8f44-1e908b73e1cc" />
                        <input type="text" name='Client Name' placeholder='Your Name*' required />
                        <input type="email" name="Gmail ID" placeholder='Email Address*' required />
                        <input type="number" name="Mobile Number" placeholder='Phone Number*' required />
                        <div className="form-row">
                            <input type="datetime-local" name="Deadline" required />
                            <input type="text" name="Service" value={project} readOnly />
                        </div>
                        <textarea name="Message" placeholder='Project Specifications*' required rows="5"></textarea>
                        <button type='submit' className="submit-btn">Submit Project</button>
                    </form>
                    
                    <label htmlFor="project-modal-toggle" className='modal-close-btn'>×</label>
                </div>
            </div>

            <section className="hero-section" id='Intro-Section'>
                <div className="hero-content">
                    <div className='hero-text'>
                        <h3 className="hero-greeting">Hey There! <span className="wave">&#128400;</span></h3>
                        <h1 className="hero-title">I'm <span>Abhishek Bharti</span></h1>
                        <h2 className="hero-subtitle">Full Stack Developer</h2>
                    </div>
                    
                    <div className="project-cta">
                        <span className="cta-text">Let's Work Together:</span>
                        <div className="project-selector">
                            <select onChange={(e) => setProject(e.target.value)}>
                                <option value="Not Selected">Select Level</option>
                                <option value="Basic Level">Basics Level</option>
                                <option value="Moderate Level">Moderate Level</option>
                                <option value="Advanced Level">Advanced Level</option>
                            </select>
                            <label htmlFor="project-modal-toggle" className='cta-button'>Get Started</label>
                        </div>
                    </div>
                    
                    <div className="social-links">
                         <a href="https://x.com/abhibhrt" className="fab fa-x-twitter" target="_blank"rel="noopener noreferrer"> </a>
                         <a href="https://github.com/abhishekbharti2" className="fab fa-github" target="_blank"rel="noopener noreferrer"> </a>
                         <a href="https://www.linkedin.com/in/abhibhrt/" className="fab fa-linkedin" target="_blank"rel="noopener noreferrer"> </a>
                         <i className='fas fa-heart' id='heart-btn' onClick={handleHeart}></i>
                    </div>
                </div>
                
                <div className="hero-image">
                    <img src="/assets/logo-1.webp" alt="Profile" className='portfolio-image' />
                </div>
            </section>

            <section className="about-section" id='About-Section'>
                <div className="about-content">
                    <h2 className="section-title">About Me</h2>
                    <p className="about-text">
                        FUll-Stack Developer with a B.Tech in Electronics and Communication Engineering from IIIT Bhopal. 
                        Skilled in React.js, JavaScript, Node.js, Express, and MongoDB, with hands-on experience in building 
                        scalable web applications. Completed Skyscanner's Front-End Engineering Virtual Experience 
                        and developed projects like VerseEx, a space exploration platform. Strong problem-solving 
                        abilities with 200+ DSA problems solved on LeetCode and CodeStudio. Passionate about UI/UX, 
                        full-stack development, and scalable solutions.
                    </p>
                    <a href='/assets/Abhishek_Bharti.pdf' className='resume-btn'>
                        <span className="btn-text">Download Resume</span>
                        <span className="btn-hover">Thank You!</span>
                    </a>
                </div>
                
                <div className="skills-content">
                    <h2 className="section-title">My Skills</h2>
                    <div className="skills-grid">
                        {skills.map((item, index) => (
                            <div key={index} className="skill-category">
                                <div 
                                    className='skill-tag' 
                                    onClick={() => handleSkillClick(item.skills)}
                                >
                                    {item.category}
                                </div>
                                {hidden === item.skills && (
                                    <div className='skill-details'>
                                        <div className="skill-details-header">
                                            <h3>{item.category}</h3>
                                            <button 
                                                className='close-details'
                                                onClick={() => setHidden(null)}
                                            >×</button>
                                        </div>
                                        <div className="skills-list">
                                            {hidden.map((sk, ind) => (
                                                <div key={ind} className='skill-item'>
                                                    <img 
                                                        src={`assets/symbols/${sk}.webp`} 
                                                        alt={sk} 
                                                        className='skill-icon' 
                                                    />
                                                    <span className='skill-name'>{sk}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="profile-image">
                    <img src="/assets/logo-3.webp" alt="Profile" className='portfolio-image' />
                </div>
            </section>
        </div>
    );
}