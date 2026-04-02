import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import { FaPlay } from "react-icons/fa";

const Header = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
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

  const roles = ["Full Stack Developer", "iOS Developer", "AI/ML Enthusiast"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <header id="home" ref={heroRef} className={`hero ${isLoaded ? 'hero--loaded' : ''} ${isExpanded ? 'hero--expanded' : ''}`}>
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

      {/* Floating AI/ML Keywords - More subtle */}
      <div className="hero__floating-words">
        <span className="hero__float-word hero__float-word--1">AI</span>
        <span className="hero__float-word hero__float-word--2">ML</span>
        <span className="hero__float-word hero__float-word--3">GenAI</span>
        <span className="hero__float-word hero__float-word--4">LLM</span>
        <span className="hero__float-word hero__float-word--5">RAG</span>
        <span className="hero__float-word hero__float-word--6">NLP</span>
        <span className="hero__float-word hero__float-word--7">GPT</span>
        <span className="hero__float-word hero__float-word--8">Neural</span>
      </div>

      <div className="container hero__container">
        {/* Status Badge */}
        <div className="hero__status glass-card">
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

          {/* Interactive Toggle */}
          <button 
            className={`hero__reveal-btn glass-card ${isExpanded ? 'hero__reveal-btn--active' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? "Show Less" : "Show More Details"}
          >
            <span className="hero__reveal-label">
              {isExpanded ? "Simplify" : "Explore Identity"}
            </span>
            <span className="hero__reveal-icon">
              {isExpanded ? "−" : "+"}
            </span>
          </button>

          {/* Hidden/Revealed Content */}
          <div className={`hero__identity-reveal ${isExpanded ? 'hero__identity-reveal--open' : ''}`}>
            <div className="hero__reveal-inner">
              <div className="hero__main-role">
                <span className="hero__role-primary">Software Developer</span>
              </div>

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

              <div className="hero__cta">

                <a href="#portfolio" className="hero__btn hero__btn--primary">
                  <span className="hero__btn-text">View My Work</span>
                  <span className="hero__btn-icon"><FaPlay /></span>
                </a>
                <a 
                  href="/Deepak_Prajapati.pdf" 
                  download="Deepak_Prajapati_Resume.pdf"
                  className="hero__btn hero__btn--secondary"
                >
                  <span className="hero__btn-text">Resume</span>
                  <svg className="hero__btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M19 12l-7 7-7-7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>




      </div>
    </header>
  );
};

export default Header;
