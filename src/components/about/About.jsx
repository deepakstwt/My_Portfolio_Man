import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile3.jpg";
import { FaCode, FaMobileAlt, FaRocket } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";

const About = () => {
  return (
    <section id="about" className="about__section">
      {/* Decorative Elements */}
      <div className="about__bg-text">ABOUT</div>
      <div className="about__decoration about__decoration--1"></div>
      <div className="about__decoration about__decoration--2"></div>
      
      <div className="container">
        {/* Section Header */}
        <div className="about__header">
          <span className="about__label">
            <HiOutlineSparkles className="about__label-icon" />
            Get to know me
          </span>
          <h2 className="about__title">
            Crafting Digital
            <span className="about__title-highlight"> Experiences</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="about__main">
          {/* Profile Section */}
          <div className="about__profile">
            <div className="about__profile-wrapper">
              <div className="about__profile-image">
                <img src={profile_picture} alt="Deepak Prajapati" />
                <div className="about__profile-overlay"></div>
              </div>
              <div className="about__profile-badge">
                <span className="about__badge-dot"></span>
                Open to Work
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">3+</span>
                <span className="about__stat-label">Internships</span>
              </div>
              <div className="about__stat-divider"></div>
              <div className="about__stat">
                <span className="about__stat-number">8.57</span>
                <span className="about__stat-label">CGPA</span>
              </div>
              <div className="about__stat-divider"></div>
              <div className="about__stat">
                <span className="about__stat-number">7+</span>
                <span className="about__stat-label">Projects</span>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="about__story">
            <div className="about__intro">
              <p className="about__intro-text">
                Hey there! I'm <strong>Deepak Prajapati</strong>, a passionate 
                <span className="about__highlight"> Software Developer</span> who 
                transforms ideas into elegant digital solutions.
              </p>
            </div>

            <div className="about__narrative">
              <p>
                Currently pursuing B.Tech in Computer Science at <strong>Galgotias University</strong>, 
                I've had the privilege to work with <strong>Infosys</strong> as a 
                <em> Software Developer Intern - iOS</em>, where I crafted secure applications 
                using Swift & SwiftUI, achieving <span className="about__metric">95% test coverage</span> in Agile sprints.
          </p>
          <p>
                I also worked with <strong>Main Flow Services and Technologies Pvt. Ltd.</strong> as a 
                <em> Full Stack Developer</em>, building robust web applications with MERN stack and 
                integrating AI-powered chatbot functionality using OpenAI GPT-4.
          </p>
          <p>
                My journey spans from building AI-powered platforms like <em>Skilio</em> and 
                <em> GitAid</em> to creating healthcare apps that make a real difference. 
                I've optimized performance by <span className="about__metric">35%</span> and 
                reduced login friction by <span className="about__metric">40%</span> through 
                innovative solutions.
              </p>
            </div>

            {/* Expertise Cards */}
            <div className="about__expertise">
              <div className="about__expertise-card">
                <div className="about__expertise-icon">
                  <FaMobileAlt />
                </div>
                <div className="about__expertise-content">
                  <h4>iOS Development</h4>
                  <p>Swift, SwiftUI, Firebase, Core Data</p>
                </div>
              </div>
              
              <div className="about__expertise-card">
                <div className="about__expertise-icon">
                  <FaCode />
                </div>
                <div className="about__expertise-content">
                  <h4>Full Stack</h4>
                  <p>MERN Stack, Next.js, TypeScript</p>
                </div>
              </div>
              
              <div className="about__expertise-card">
                <div className="about__expertise-icon">
                  <FaRocket />
                </div>
                <div className="about__expertise-content">
                  <h4>AI Integration</h4>
                  <p>LangChain, RAG, Gemini AI</p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="about__quote">
              <span className="about__quote-mark">"</span>
              I believe great software is born where creativity meets code.
              <span className="about__quote-mark">"</span>
            </blockquote>

            {/* CTA */}
            <div className="about__cta">
              <a href="#contact" className="about__cta-btn about__cta-btn--primary">
                <span>Let's Collaborate</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#portfolio" className="about__cta-btn about__cta-btn--secondary">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
