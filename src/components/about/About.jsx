import React, { useId, useState } from "react";
import "./about.css";
import profile_picture from "../../assets/profile3.jpg";
import { FaCode, FaMobileAlt, FaRocket } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const detailsId = useId();

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

            <div className="about__body">
              <p className="about__lead">
                I build production-ready apps across iOS + full stack—focused on performance, clean UI, and real outcomes.
              </p>

              <ul className="about__bullets">
                <li>
                  <strong>iOS Intern @ Infosys</strong> — improved API reliability and cut response time by <span className="about__metric">30%</span>.
                </li>
                <li>
                  <strong>AI Intern @ Dislapharm</strong> — anomaly detection + automated pipelines (datasets: <span className="about__metric">5k+</span> records).
                </li>
                <li>
                  <strong>Full Stack Intern @ Main Flow</strong> — shipped REST APIs + LLM automation; reduced manual effort by <span className="about__metric">40%</span>.
                </li>
              </ul>

              <button
                type="button"
                className="about__more"
                aria-expanded={showMore}
                aria-controls={detailsId}
                onClick={() => setShowMore((v) => !v)}
              >
                {showMore ? "Show less" : "Read more"}
              </button>

              <div
                id={detailsId}
                className={`about__more-content ${showMore ? "about__more-content--open" : ""}`}
                aria-hidden={!showMore}
              >
                <div className="about__more-inner">
                  <p>
                    Currently pursuing B.Tech in Computer Science at <strong>Galgotias University</strong>. I enjoy working end-to-end—from
                    architecture to UI polish—and I love building products that feel fast, modern, and reliable.
                  </p>
                  <p>
                    My journey spans from AI-powered platforms like <em>Skilio</em> and <em>GitAid</em> to healthcare apps that make a real
                    difference. I’m always exploring better DX, smoother UX, and practical AI integrations.
                  </p>
                </div>
              </div>
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

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
