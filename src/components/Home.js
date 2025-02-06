import React, { useState } from 'react'
import '../stylesheets/Home.css'
export default function Home() {
    const [project, setProject] = useState('WebDev');

    const skills = [
        "C", "C++", "JavaScript", "Python",
        "DSA", "DBMS", "OS", "HTML",
        "CSS", "BootStrap", "React.js", "Node.js",
        "Express", "MongoDB", "MySQL", "VSCode", "GitHub",
        "Git", "MS Office Suite", "MATLAB Basics",
        "Rest API", "Communication", "Team Work", "Leadership"
    ];
    function handleHeart(){
        document.getElementById('heart-btn').style.color = 'red'
        document.getElementById('heart-btn').style.animation = 'pulse 1s infinite'

      }
    return (

        <div className="home-container">
            <img className='setBg-img' src="/assets/bg.jpg" alt="imm" />
            <input type="checkbox" name="checkk" id="check-project" />
            <div className="start-project">
                <div className='form-in'>
                    <div className="some-info">
                        <table>
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Expect Time</th>
                                    <th>Low ₹</th>
                                    <th>Mid ₹</th>
                                    <th>High ₹</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Web Dev</td>
                                    <td>3-7 days</td>
                                    <td>500 – 1,500</td>
                                    <td>2,000 – 5,000</td>
                                    <td>6,000 – 10,000</td>
                                </tr>
                                <tr>
                                    <td>Web Design</td>
                                    <td>1-5 days</td>
                                    <td>300 – 700</td>
                                    <td>1,000 – 2,000</td>
                                    <td>2,500 – 5,000</td>
                                </tr>
                                <tr>
                                    <td>Poster Design</td>
                                    <td>2-6 hours</td>
                                    <td>50 – 100</td>
                                    <td>150 – 300</td>
                                    <td>500 – 1,000</td>
                                </tr>
                                <tr>
                                    <td>Logo Design</td>
                                    <td>30 min – 2 hours</td>
                                    <td>100 – 250</td>
                                    <td>500 – 1,000</td>
                                    <td>1,200 – 2,500</td>
                                </tr>
                                <tr>
                                    <td>Content Writing</td>
                                    <td>20 min – 2 hours</td>
                                    <td>50 – 150</td>
                                    <td>200 – 500</td>
                                    <td>600 – 1,200</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>Service Type <span style={{ color: 'black' }} >{project}</span></h3>
                    </div>
                    <form action="https://api.web3forms.com/submit" method="POST">
                        <i>Name*, Gmail*, Mob*, Deadline*, Specifications*</i>
                        <input type="hidden" name="access_key" value="487b169d-1360-4354-8f44-1e908b73e1cc" />
                        <input type="text" name='Client Name' placeholder='Enter Name' required />
                        <input type="email" name="Gmail ID" placeholder='Enter Gmail' required />
                        <input type="number" name="Mobile Number" id="" placeholder='Mobile Number' required />
                        <div className="file-date">
                            <input type="datetime-local" name="Deadline" required />
                            <input type="text" name="Service" value={project} />
                        </div>
                        <textarea name="Message" placeholder='Write Specification' required />
                        <button type='submit' id='contact-submit' style={{ width: '80%' }}>Submit</button>
                    </form>
                    <label htmlFor="check-project" className='label-in'>&#x2718;</label>
                </div>
            </div>
            <div className="first-cont" id='Intro-Section' >
                <div className="left-cont">
                    <div className='gestureCont'>
                        <h3>Hey! There <div className='gesture'>&#128400;</div></h3>
                        <h1 className='nameTag'>I'm <span>Abhishek Bharti</span></h1>
                        <h2>A Full Stack Developer</h2>
                    </div>
                    <div>
                        <span style={{ color: 'grey' }}>Start Work Together: </span>
                        <div className="select-cont"> <select name="select" onChange={(v) => { setProject(v.target.value) }} >
                            <option value="Not Selected">Start Project</option>
                            <option value="WebSite Develop">WebDev</option>
                            <option value="Poster Design">Poster Design</option>
                            <option value="Logo Design">Logo Design</option>
                            <option value="Content Writing">Content Writing</option>
                        </select>
                            <label htmlFor="check-project" className='label-go'>Go</label></div>
                    </div>
                    <div className="social-media">
                        <a href="https://www.facebook.com/profile.php?id=100027548940668" className="fa-brands fa-facebook"> </a>
                        <a href="https://www.linkedin.com/in/abhishek-bharti7843/" className="fa-brands fa-linkedin"> </a>
                        <a href="https://github.com/abhishekbharti2" className="fa-brands fa-github"> </a>
                        <a href="https://x.com/AD_Jack9?t=9DGN-8JDwo4rVMXtPKXpUA&s=08" className='fa-brands fa-x-twitter'> </a>
                        <i class='fa fa-heart' id='heart-btn' onClick={handleHeart}></i>
                    </div>
                </div>
                <div className="right-cont">
                    <img src="/assets/logo-1.png" alt=" " />
                </div>
            </div>
            <div className="second-cont" id='About-Section'>
                <div className="sec-left">
                    <h2 className='sec-h2'>Let Me Introduce</h2>
                    <p>Front-End Developer with a B.Tech in Electronics and Communication Engineering from IIIT Bhopal. Skilled in React.js, JavaScript, Node.js, and MySQL, with hands-on experience in building scalable web applications. Completed Skyscanner’s Front-End Engineering Virtual Experience and developed projects like VerseEx, a space exploration platform. Strong problem-solving abilities with 200+ DSA problems solved on LeetCode and CodeStudio. Passionate about UI/UX, full-stack development, and scalable solutions. Seeking a Front-End or Full-Stack Developer role to leverage technical skills in creating innovative web applications. Strong leadership, teamwork, and communication skills with experience in organizing tech and community events.</p>
                    <a href='/assets/Abhishek_Bharti.pdf' class="animated-button">
                        <span>Get Resume</span>
                        <span></span>
                    </a>
                </div>
                <div className="sec-mid">
                    <h2 className='sec-h2'>My Skills</h2>
                    <div className="skills-container">
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-box">
                                    ✔️ {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="sec-right">
                    <img src="/assets/logo-3.jpg" id='myPic' alt=" " />
                </div>
            </div>
        </div>

    );
}
