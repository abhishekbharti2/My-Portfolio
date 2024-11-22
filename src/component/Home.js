import React, { useState } from 'react'
import './Home.css'
export default function Home() {
    const [project, setProject] = useState('Start Project');
    return (

        <div className="home-container">
            <img className='setBg-img' src="https://th.bing.com/th/id/OIP.msjyJvFoaSjaDj-QKTmfkQAAAA?rs=1&pid=ImgDetMain" alt="imm" />
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
                        <h3>Go for <span style={{color:'skyblue'}} >{project}</span></h3>
                    </div>
                    <form action="">
                        <input type="text" placeholder='Enter Name' />
                        <input type="email" name="gmail" id="" placeholder='Enter Gmail' />
                        <input type="number" name="number" id="" placeholder='Mobile Number' />
                        <div className="file-date">
                            <input type="file" name="" id="" />
                            <input type="datetime-local" name="" id="" />
                        </div>
                        <textarea name="" id="" placeholder='Write Specification'></textarea>
                        <button type='submit' className='card-btn' style={{ width: '80%' }}>Submit</button>
                    </form>
                    <label htmlFor="check-project" className='label-in'>&#x2718;</label>
                </div>
            </div>
            <div className="first-cont" id='Intro-Section' >
                <div className="left-cont">
                    <span>We make beautiful websites for all people.</span>
                    <div>
                        <p style={{ color: 'wheat' }} > Call Us at +91 8602175875 <br />
                            <h6 style={{ color: 'inherit' }} >for any inquiry</h6>
                        </p>
                        <div className="select-cont"> <select name="select" onChange={(v) => { setProject(v.target.value) }} >
                            <option value="Not Selected" style={{ backgroundColor: 'grey' }}>Start Project</option>
                            <option value="WebSite Develop">WebDev</option>
                            <option value="Poster Design">Poster Design</option>
                            <option value="Logo Design">Logo Design</option>
                            <option value="Content Writing">Content Writing</option>
                        </select>
                            <label htmlFor="check-project" className='label-go'>Go</label></div>
                    </div>
                    <div className="social-media">
                        <span>Social Media Handles</span>
                        <a href='/' className='fa fa-instagram'> </a>
                        <a href='/' className='fa fa-facebook'> </a>
                        <a href='/' className='fa fa-twitter'> </a>
                        <a href='https://www.youtube.com/@web-xer1' className='fa fa-youtube'> </a>
                    </div>
                </div>
                <div className="right-cont">
                    <h4>Visit Our YouTube Channel</h4>
                    <iframe src="https://www.youtube.com/embed/7e1QTc3FyZk?si=VuG8LJ8qXSL6043c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div className="second-cont" id='About-Section'>
                <div className="sec-left">
                    <h2>Let Us Introduce</h2>
                    <p>
                        Welcome to &nbsp; <strong style={{ color: 'var(--web-color)', opacity: '80%' }}> WebXer, </strong> your one-stop destination for innovative web development and creative design solutions.
                        <br />
                        We specialize in crafting dynamic, responsive, and user-friendly websites. Whether it’s building sleek frontends with React or traditional HTML/CSS/JavaScript, or powering robust backends, we ensure seamless functionality tailored to your needs.
                        <br />
                        Our graphic design services include unique logo designs, eye-catching posters, and professional templates that leave a lasting impression. With a perfect blend of creativity and technology, we aim to bring your ideas to life.
                    </p>
                </div>
                <div className="sec-mid">
                    <strong style={{ color: 'black' }}>Services We Provide</strong>
                    <div className="mid-1">
                        <strong style={{ color: 'black' }}>Develop a WebSite
                            <span>98%</span></strong>
                        <span style={{ width: '98%' }}></span>
                    </div>
                    <div className="mid-1">
                        <strong style={{ color: 'black' }}>Web Design
                            <span>87%</span></strong>
                        <span style={{ width: '87%' }}></span>
                    </div>
                    <div className="mid-1">
                        <strong style={{ color: 'black' }}>Poster Design
                            <span>95%</span></strong>
                        <span style={{ width: '95%' }}></span>
                    </div>
                    <div className="mid-1">
                        <strong style={{ color: 'black' }}>Logo Design
                            <span>85%</span></strong>
                        <span style={{ width: '85%' }}></span>
                    </div>
                    <div className="mid-1">
                        <strong style={{ color: 'black' }}>Content Writing
                            <span>90%</span></strong>
                        <span style={{ width: '90%' }}></span>
                    </div>
                </div>
                <div className="sec-right">
                    <img src="https://i.pinimg.com/736x/7e/35/3f/7e353fb5f0e662d5d6c55cd9302d366d.jpg" alt=" " />
                </div>
            </div>
            <h1 id='Work-Section'>Our Work</h1>
            <div className="third-cont" >
                <div className="work-cards">
                    <img src="https://th.bing.com/th/id/R.3e6af51e02c09ededd33d8a118685cf8?rik=cuy60A%2bJOOmkOA&riu=http%3a%2f%2fthermajohn.com%2fcdn%2fshop%2farticles%2fAdobeStock_101366392_Blog_Post_1200x1200.jpg%3fv%3d1600791992&ehk=y9YAlqUka2lET8k3eucCvIdGH2S8Ftf4ICobMAtDSSM%3d&risl=&pid=ImgRaw&r=0" alt=" " />
                    <div className="card-content">
                        <span className='fa fa-clock-o' > November 22, 2024</span>
                        <a href='/' >This is Title of the Content</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button className='card-btn'>View Details</button>
                    </div>
                </div>
                <div className="work-cards">
                    <img src="https://img.freepik.com/premium-photo/beautiful-girl-white-background_902994-438.jpg" alt=" " />
                    <div className="card-content">
                        <span className='fa fa-clock-o' > November 22, 2024</span>
                        <a href='/' >This is Title of the Content</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button className='card-btn'>View Details</button>
                    </div>
                </div>
                <div className="work-cards">
                    <img src="https://img.freepik.com/premium-photo/young-woman_948023-1111.jpg" alt=" " />
                    <div className="card-content">
                        <span className='fa fa-clock-o' > November 22, 2024</span>
                        <a href='/' >This is Title of the Content</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button className='card-btn'>View Details</button>
                    </div>
                </div>
                <div className="work-cards">
                    <img src="https://s1.1zoom.me/b5050/637/Hair_Blonde_girl_White_background_Beautiful_530576_3840x2400.jpg" alt=" " />
                    <div className="card-content">
                        <span className='fa fa-clock-o' > November 22, 2024</span>
                        <a href='/' >This is Title of the Content</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button className='card-btn'>View Details</button>
                    </div>
                </div>
            </div>
            <div className="fourth-cont">

            </div>
        </div>

    );
}