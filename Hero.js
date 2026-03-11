import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";

function Hero() {
    return (

        <div className="hero">

            <nav className="navbar">
                <h2 className="logo">EduLearn</h2>


                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>

            </nav>

            <div className="hero-content">

                <h1>Learn Programming Online</h1>

                <p>
                    Learn HTML, CSS, JavaScript and React easily
                </p>

                <div className="tech-section">


                    <div className="tech-logos">

                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html" />

                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css" />

                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="js" />

                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" />

                    </div>
                    
                    <div className="floating-shapes">

                        <div className="shape shape1"></div>
                        <div className="shape shape2"></div>
                        <div className="shape shape3"></div>

                    </div>

                    <div className="courses-section">

                        <h2>Our Courses</h2>

                        <div className="courses">

                            <div className="course-card">
                                <h3>HTML</h3>
                                <p>Learn the basics of web structure using HTML.</p>
                            </div>

                            <div className="course-card">
                                <h3>CSS</h3>
                                <p>Design beautiful websites using CSS.</p>
                            </div>

                            <div className="course-card">
                                <h3>JavaScript</h3>
                                <p>Add interactivity and logic to your website.</p>
                            </div>

                            <div className="course-card">
                                <h3>React JS</h3>
                                <p>Build modern web applications with React.</p>
                            </div>

                        </div>

                    </div>

                </div>
                
                
            </div>

        </div>

    )
}

export default Hero