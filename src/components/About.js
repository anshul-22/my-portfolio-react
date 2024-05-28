import React, { useState } from 'react';
import './styles/About.css';

const About = () => {
    const [activeTab, setActiveTab] = useState('skills');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src="/images/user.png" alt="User" />
                    </div>
                    <div className="about-col-2">
                        <h1 className="sub-title">About Me</h1>
                        <p>
                            Dynamic and motivated fresher with a degree in Computer Science and Engineering.
                            Proficient in Java, C++, MySQL, Hibernate,JavaScript and React. I enjoy solving
                            problems and working in teams. Excited to use my knowledge and experience to
                            create meaningful solutions with others.
                        </p>
                        <div className="tab-titles">
                            <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => openTab('skills')}>Skills</p>
                            <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => openTab('experience')}>Experience</p>
                            <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => openTab('education')}>Education</p>
                        </div>
                        <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                            <ul className="skills">
                                <li><span>Languages :</span></li>
                                <ul>
                                    <li>Java, C++, JavaScript, Python</li>
                                </ul>
                                <li><span>Frameworks :</span></li>
                                <ul>
                                    <li>Hibernate, Spring, React</li>
                                </ul>
                                <li><span>Databases :</span></li>
                                <ul>
                                    <li>MySQL</li>
                                </ul>
                                <li><span>IDE :</span></li>
                                <p>Eclipse, Visual Studio</p>
                                <li><span>Web Dev :</span></li>
                                <p>HTML, CSS</p>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
                            <ul>
                                <li><span>Jun 2022- Jul 2022</span><br />Full Stack Developer Intern<br />@ Robust Results Pvt Ltd (An IIT Kanpur Incubated Company)</li>
                                <ul>
                                    <li>Led development efforts of Hospital Management System.</li>
                                    <li>Assigned as Team Lead with the responsibility of task assignment and adherence to timeline.</li>
                                </ul>
                                <li><span>August 2023</span><br />Virtual Internship Full Stack Developer<br />@ OpenWeaver Pvt Ltd, Chennai, IND</li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                            <ul>
                                <li><span>2020-2024</span><br />B.TECH @ Greater Noida Institute of Technology, Greater Noida<br />Branch:- Computer Science and Engineering<br />Aggregate:- 7.2 CGPA</li>
                                <li><span>2019</span><br />12th @ Giriwar Inter College, Daltonganj, JH<br />Score:-73.4%</li>
                                <li><span>2017</span><br />10th @ MKDAV Public School, Daltonganj, JH<br />Score:- 9 CGPA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
