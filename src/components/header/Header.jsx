import React, { useState, useEffect } from "react";
import "./header.css";
import CTA from "./CTA";
import header_picture from "../../assets/profile3.jpg";
import ConditionalSocials from "./ConditionalSocials";

const Header = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const typewriterLines = [
    "Software Developer",
    "Open-Source Contributor | Web, Backend & AI"
  ];

  useEffect(() => {
    const currentLine = typewriterLines[currentLineIndex];
    
    let timeout;
    
    if (!isDeleting && charIndex < currentLine.length) {
      // Typing forward
      timeout = setTimeout(() => {
        const newIndex = charIndex + 1;
        setDisplayedText(currentLine.substring(0, newIndex));
        setCharIndex(newIndex);
      }, 100); // Typing speed: 100ms per character
    } else if (!isDeleting && charIndex === currentLine.length) {
      // Finished typing, pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000); // Pause for 2 seconds after typing complete
    } else if (isDeleting && charIndex > 0) {
      // Deleting backward
      timeout = setTimeout(() => {
        const newIndex = charIndex - 1;
        setCharIndex(newIndex);
        setDisplayedText(currentLine.substring(0, newIndex));
      }, 50); // Deleting speed: 50ms per character (faster)
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, move to next line
      setIsDeleting(false);
      setCurrentLineIndex((currentLineIndex + 1) % typewriterLines.length);
      setDisplayedText("");
    }
    
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentLineIndex, typewriterLines]);

  return (
    <header id="home">
      <div className="container header__container">
        <div className="header__profile">
          <div className="header__profile-image">
            <img src={header_picture} alt="Deepak Prajapati" />
          </div>
          <div className="header__profile-text">
            <h1>Deepak Prajapati</h1>
            <div className="header__subtitle-wrapper">
              <span className="header__subtitle typewriter-text">
                {displayedText}
                <span className="typewriter-cursor">|</span>
              </span>
            </div>
            <h3>Greater Noida, India</h3>
          </div>
        </div>
        <CTA />
        <ConditionalSocials />
      </div>
    </header>
  );
};

export default Header;
