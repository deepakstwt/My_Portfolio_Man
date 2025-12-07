import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import { BsLinkedin, BsGithub, BsArrowDownShort } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaPlay } from "react-icons/fa";

const Header = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const roles = ["iOS Developer", "Full Stack Developer", "Open Source Contributor"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <header id="home" ref={heroRef} className={`hero ${isLoaded ? 'hero--loaded' : ''}`}>
      {/* Animated Background */}
      <div className="hero__bg">
        <div className="hero__grid"></div>
        <div 
          className="hero__gradient"
          style={{
            '--mouse-x': `${mousePosition.x}%`,
            '--mouse-y': `${mousePosition.y}%`,
          }}
        ></div>
        <div className="hero__noise"></div>
        <div className="hero__glow hero__glow--1"></div>
        <div className="hero__glow hero__glow--2"></div>
        <div className="hero__glow hero__glow--3"></div>
      </div>


      <div className="container hero__container">
        {/* Status Badge */}
        <div className="hero__status">
          <span className="hero__status-dot"></span>
          <span>Available for opportunities</span>
        </div>

        {/* Main Content */}
        <div className="hero__content">
          <div className="hero__intro">
            <span className="hero__greeting">Hello, I'm</span>
          </div>

          <h1 className="hero__name">
            <span className="hero__name-line">
              <span className="hero__name-text">Deepak</span>
            </span>
            <span className="hero__name-line">
              <span className="hero__name-text hero__name-text--gradient">Prajapati</span>
            </span>
          </h1>

          {/* Main Role */}
          <div className="hero__main-role">
            <span className="hero__role-primary">Software Developer</span>
          </div>

          {/* Role Carousel */}
          <div className="hero__role-wrapper">
            <div className="hero__role-carousel">
              {roles.map((role, index) => (
                <span 
                  key={role}
                  className={`hero__role ${index === currentRole ? 'hero__role--active' : ''}`}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          <p className="hero__description">
            Building exceptional <strong>iOS applications</strong> and{" "}
            <strong>full-stack platforms</strong> that merge beautiful design 
            with powerful functionality. Currently transforming ideas into 
            reality at <em className="hero__location">Greater Noida, India</em>.
          </p>

          {/* CTA Buttons */}
          <div className="hero__cta">
            <a href="#portfolio" className="hero__btn hero__btn--primary">
              <span className="hero__btn-text">View My Work</span>
              <span className="hero__btn-icon">
                <FaPlay />
              </span>
            </a>
            <a 
              href="/Deepak_Prajapati.pdf" 
              download="Deepak_Prajapati_Resume.pdf"
              className="hero__btn hero__btn--secondary"
            >
              <span className="hero__btn-text">Download CV</span>
              <svg className="hero__btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero__socials">
            <span className="hero__socials-label">Connect with me</span>
            <div className="hero__socials-links">
              <a 
                href="mailto:deepakprajapatiproplus@gmail.com" 
                target="_blank" 
                rel="noreferrer"
                className="hero__social"
                aria-label="Email"
              >
                <HiOutlineMail />
              </a>
              <a 
                href="https://www.linkedin.com/in/deepak-prajapati123/" 
                target="_blank" 
                rel="noreferrer"
                className="hero__social"
                aria-label="LinkedIn"
              >
                <BsLinkedin />
              </a>
              <a 
                href="https://github.com/deepakstwt" 
                target="_blank" 
                rel="noreferrer"
                className="hero__social"
                aria-label="GitHub"
              >
                <BsGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">7+</span>
            <span className="hero__stat-label">Projects</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">3+</span>
            <span className="hero__stat-label">Internships</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">2+</span>
            <span className="hero__stat-label">Years</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a href="#about" className="hero__scroll">
          <span className="hero__scroll-text">Scroll</span>
          <div className="hero__scroll-icon">
            <BsArrowDownShort />
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
