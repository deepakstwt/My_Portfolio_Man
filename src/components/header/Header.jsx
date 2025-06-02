import React, { useState, useEffect } from "react";
import "./header.css";
import CTA from "./CTA";
import header_picture from "../../assets/profile3.jpg";
import ConditionalSocials from "./ConditionalSocials";

const Header = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  const roles = [
    "iOS Developer",
    "Full Stack Developer"
  ];
  
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 1000 : 2000;
    
    const timer = setTimeout(() => {
      if (!isDeleting && currentIndex < currentRole.length) {
        setDisplayedText(currentRole.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayedText(currentRole.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (!isDeleting && currentIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, currentRoleIndex, roles]);

  return (
    <header id="home">
      <div className="container header__container">
        <div className="header__profile">
          <div className="header__profile-image">
            <img src={header_picture} alt="Deepak Prajapati" />
          </div>
          <div className="header__profile-text">
            <h1>Deepak Prajapati</h1>
            <h2 className="typing-text">
              {displayedText}
              <span className="typing-cursor">|</span>
            </h2>
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
