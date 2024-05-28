import React from 'react';
import './styles/Projects.css';

const Projects = () => {
    const handleClick = () => {
        const githubUrl = "https://github.com/anshul-22";
        window.location.href = githubUrl;
    };
    return (
        <div id="projects">
            <div className="container">
                <h1 className="sub-title">My projects</h1>
                <div className="projects-list">
                    <div>
                        <i className="fa-solid fa-code"></i>
                        <h2>Employee Management System</h2>
                        <p>
                            A robust employee management system was developed using Java, JPA Hibernate, and MySQL, facilitating seamless
                            CRUD operations. Utilizing ORM concepts, the system ensured efficient data mapping and database interactions,
                            streamlining employee data management.
                        </p>
                        <a href="https://github.com/anshul-22/Employee-Management-System" className="btn btn2">Learn More</a>
                    </div>
                    <div>
                        <i className="fa-solid fa-code"></i>
                        <h2>My Portfolio Website</h2>
                        <p>
                            A portfolio website has been meticulously developed using HTML, CSS, and JavaScript to showcase my skills and
                            experiences. This responsive and visually appealing platform serves as a digital representation of my
                            professional journey.
                        </p>
                        <a href="https://github.com/anshul-22/my-portfolio-react" className="btn btn2">Learn More</a>
                    </div>
                </div>
                <button className='btn btn2 seemore' onClick={handleClick}>See More(GitHub)</button>
            </div>
        </div>
    );
};

export default Projects;
