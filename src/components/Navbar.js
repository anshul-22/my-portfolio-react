import React, { useState } from 'react';
import './styles/Navbar.css';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('header');

    const openMenu = () => {
        document.getElementById("sidemenu").style.right = "0";
    };

    const closeMenu = () => {
        document.getElementById("sidemenu").style.right = "-200px";
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <nav>
            <a href="#header"><img src="/images/logo.png" className="logo" alt="logo" /></a>
            <ul id="sidemenu">
                <li><a className={activeTab === 'header' ? 'active' : ''} href="#header" onClick={() => handleTabClick('header')}>Home</a></li>
                <li><a className={activeTab === 'about' ? 'active' : ''} href="#about" onClick={() => handleTabClick('about')}>About</a></li>
                <li><a className={activeTab === 'projects' ? 'active' : ''} href="#projects" onClick={() => handleTabClick('projects')}>Projects</a></li>
                <li><a className={activeTab === 'certificates' ? 'active' : ''} href="#certificates" onClick={() => handleTabClick('certificates')}>Certifications</a></li>
                <li><a className={activeTab === 'contact' ? 'active' : ''} href="#contact" onClick={() => handleTabClick('contact')}>Contact</a></li>
                <i className="fa-regular fa-circle-xmark" onClick={closeMenu}></i>
            </ul>
            <i className="fa-solid fa-bars" onClick={openMenu}></i>
        </nav>
    );
};

export default Navbar;
