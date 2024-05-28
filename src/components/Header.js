import React, { useEffect, useRef } from 'react';
import './styles/Header.css';

const Header = () => {
  const typingAnimationElement = useRef(null);
  const typingTexts = ['Software Developer', 'Web Developer'];
  const textIndex = useRef(0);
  const charIndex = useRef(0);

  useEffect(() => {
    const type = () => {
      if (charIndex.current < typingTexts[textIndex.current].length) {
        typingAnimationElement.current.textContent += typingTexts[textIndex.current][charIndex.current];
        charIndex.current++;
        setTimeout(type, 100);
      } else {
        setTimeout(() => {
          typingAnimationElement.current.textContent = '';
          textIndex.current = (textIndex.current + 1) % typingTexts.length;
          charIndex.current = 0;
          type();
        }, 1000);
      }
    };
    type();
  }, []);

  return (
    <div id="header">
      <div className="container">
        <div className="header-text">
          <h1>Hi,<br /> I am <span>Anshul</span></h1>
          <p className="sub-heading">Fresher <span ref={typingAnimationElement}></span></p>
          <a href="https://drive.google.com/file/d/1tn5K2H_p54CYEbSbtFG_lqNL6N3bcog0/view?usp=drive_link" download className="btn btn2">Download Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
