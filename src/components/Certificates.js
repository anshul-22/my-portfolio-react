import React, { useState } from 'react';
import './styles/Certificates.css';

const Certificates = () => {
    const [showAll, setShowAll] = useState(false);

    const certificates = [
        { src: "/images/certificate1.jpeg", alt: "Certificate 1", title: "Software Engineer" },
        { src: "/images/certificate2.png", alt: "Certificate 2", title: "C++ Excellence" },
        { src: "/images/certificate3.jpeg", alt: "Certificate 3", title: "Core Java" },
        { src: "/images/certificate7.png", alt: "Certificate 4", title: "Core Java" },
        { src: "/images/certificate8.png", alt: "Certificate 5", title: "Virtual Internship @ OpenWeaver" },
        { src: "/images/certificate4.png", alt: "Certificate 6", title: "Full Stack Developer Completion" },
        { src: "/images/certificate5.png", alt: "Certificate 7", title: "Internship Completion @ RobustResults" },
        { src: "/images/certificate6.png", alt: "Certificate 8", title: "Project Completion Certificate" }
    ];

    const displayedCertificates = showAll ? certificates : certificates.slice(0, 2);

    const handleSeeMore = () => {
        setShowAll(!showAll);
    };

    return (
        <div id="certificates">
            <h1 className="sub-title">My Certifications</h1>
            <div className="certificates-list">
                {displayedCertificates.map((cert, index) => (
                    <div className="cert-item" key={index}>
                        <img src={cert.src} alt={cert.alt} />
                        <h3>{cert.title}</h3>
                    </div>
                ))}
            </div>
            <button className='btn btn2' onClick={handleSeeMore}>
                {showAll ? "Show Less" : "See More"}
            </button>
        </div>
    );
};

export default Certificates;
