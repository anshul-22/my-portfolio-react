import React from 'react';
import './components/styles/global.css';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Copyright from './components/Copyright';

function App() {
    return (
        <div className="App container">
            <Navbar />
            <Header />
            <About />
            <Projects />
            <Certificates />
            <Contact />
            <Copyright/>
        </div>
    );
}

export default App;
