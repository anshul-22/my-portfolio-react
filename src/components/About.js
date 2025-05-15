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
                            Motivated and adaptable Software Engineer with hands-on experience in Advanced Java, Springboot transitioning into DevOps and Cloud (Azure).
                            Certified in Microsoft Azure Fundamentals (AZ-900) with solid knowledge of cloud infrastructure, IaC, and CI/CD concepts.
                            Proven ability to design cloud-based solutions and implement Azure services for data processing and visualization.
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
                                    <li>Hibernate, Springboot, React</li>
                                </ul>
                                <li><span>Databases :</span></li>
                                <ul>
                                    <li>MySQL, PostgreSQL</li>
                                </ul>
                                <li><span>Cloud & DevOps:</span></li>
                                <p>Azure,
                                    Docker, Kubernetes,
                                    Terraform, Bicep, Ansible</p>
                                <li><span>Web Dev :</span></li>
                                <p>HTML, CSS</p>
                            </ul>
                        </div>

                        <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
                            <ul>
                                <li><span>Software Engineer</span><br />May 2025- Present<br />@ Sopra Steria India Pvt Ltd</li>
                                <ul>
                                    <li>Working on DevOps and Azure Cloud technologies with a focus on
                                        infrastructure automation, cloud resource management, and security best
                                        practices.
                                    </li>
                                </ul>
                                <li><span>Engineer Trainee</span><br />Nov 2024- May 2025<br />@ Sopra Steria India Pvt Ltd</li>
                                <ul>
                                    <li>Completed intensive training in Java, Spring Boot, React.js, and full-stack
                                        enterprise application development</li>
                                    <li>Transitioned to DevOps & Cloud technologies in January 2025, undergoing
                                        structured training in Azure services</li>
                                    <li>Designed a POC for an Azure Data Pipeline</li>
                                </ul>
                                <li><span> Full Stack Developer Intern</span><br />Jun 2022- Jul 2022<br />@ Robust Results Pvt Ltd (An IIT Kanpur Incubated Company)</li>
                                <ul>
                                    <li>Led development efforts of Hospital Management System.</li>
                                    <li>Assigned as Team Lead with the responsibility of task assignment and adherence to timeline.</li>
                                </ul>
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
