import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile3.jpg";
import { FaCode, FaMobileAlt, FaRocket } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about-v2">
      {/* Dynamic Background Elements */}
      <div className="about-v2__bg-pattern"></div>
      <div className="about-v2__glow about-v2__glow--1"></div>
      <div className="about-v2__glow about-v2__glow--2"></div>
      
      <div className="container about-v2__container">
        {/* Header Section: Large, Bold, Minimal */}
        <header className="about-v2__header">
          <div className="about-v2__eyebrow">
            <span className="about-v2__eyebrow-line"></span>
            <span className="about-v2__eyebrow-text">THE IDENTITY</span>
          </div>
          <h2 className="about-v2__heading">
            Engineering <span className="about-v2__accent">Impact</span> Through 
            <br /> Precise Technical Artistry.
          </h2>
        </header>

        {/* Hero Content: Asymmetrical Layout */}
        <div className="about-v2__hero">
          <div className="about-v2__image-wrapper">
            <div className="about-v2__image-container">
              <img src={profile_picture} alt="Deepak Prajapati" className="about-v2__profile-img" />
              <div className="about-v2__image-overlay"></div>
              <div className="about-v2__frame-accent about-v2__frame-accent--tl"></div>
              <div className="about-v2__frame-accent about-v2__frame-accent--br"></div>
            </div>
            <div className="about-v2__availability">
              <span className="about-v2__pulse"></span>
              <span className="about-v2__availability-text">AVAILABLE FOR COLLABORATION</span>
            </div>
          </div>

          <div className="about-v2__content">
            <div className="about-v2__bio">
              <p className="about-v2__bio-lead">
                I am <span className="about-v2__name-highlight">Deepak Prajapati</span>, 
                a Software Engineer dedicated to the synthesis of 
                <span className="about-v2__bio-tag">Systems Intelligence</span> and 
                <span className="about-v2__bio-tag">Refined UI</span>.
              </p>
              <p className="about-v2__bio-body">
                With a background in **iOS Engineering at Infosys** and **AI Innovation**, 
                I architect production-grade systems that bridge the gap between complex 
                logic and human-centric design. My focus is on creating **zero-latency**, 
                **scalable architectures** that solve real-world problems.
              </p>
            </div>

            <div className="about-v2__quick-stats">
              <div className="about-v2__stat-item">
                <span className="about-v2__stat-num">03</span>
                <span className="about-v2__stat-label">Internships</span>
              </div>
              <div className="about-v2__stat-item">
                <span className="about-v2__stat-num">07+</span>
                <span className="about-v2__stat-label">Major Projects</span>
              </div>
              <div className="about-v2__stat-item">
                <span className="about-v2__stat-num">8.5</span>
                <span className="about-v2__stat-label">System GPA</span>
              </div>
            </div>
          </div>
        </div>

        {/* The Core Capabilities: Modern Bento Design */}
        <div className="about-v2__capabilities">
          <div className="about-v2__cap-card about-v2__cap-card--large">
            <div className="about-v2__cap-icon"><FaMobileAlt /></div>
            <div className="about-v2__cap-info">
              <h3>iOS Intelligence</h3>
              <p>Specializing in high-performance SwiftUI development, CoreData integration, and bridging mobile power with modern backend systems.</p>
              <div className="about-v2__cap-tags">
                <span>Swift</span><span>SwiftUI</span><span>Combine</span>
              </div>
            </div>
          </div>

          <div className="about-v2__cap-card">
            <div className="about-v2__cap-icon"><FaCode /></div>
            <div className="about-v2__cap-info">
              <h3>Full-Stack Architecture</h3>
              <p>Engineering scalable MERN and Next.js systems with TypeScript precision.</p>
              <div className="about-v2__cap-tags">
                <span>Next.js</span><span>TypeScript</span><span>Node.js</span>
              </div>
            </div>
          </div>

          <div className="about-v2__cap-card">
            <div className="about-v2__cap-icon"><FaRocket /></div>
            <div className="about-v2__cap-info">
              <h3>AI Integration</h3>
              <p>Deploying RAG pipelines and LLM automation to drive data-driven innovation.</p>
              <div className="about-v2__cap-tags">
                <span>LangChain</span><span>VectorDB</span><span>Gemini</span>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Highlights: Editorial Style */}
        <div className="about-v2__impact">
          <div className="about-v2__impact-header">
            <h3>Strategic Milestones</h3>
            <span className="about-v2__divider"></span>
          </div>
          <div className="about-v2__impact-list">
            <div className="about-v2__impact-item">
              <span className="about-v2__impact-idx">01</span>
              <div className="about-v2__impact-text">
                <strong>Infosys Engineering:</strong> Optimized iOS API reliability by **30%** via strategic refactoring.
              </div>
            </div>
            <div className="about-v2__impact-item">
              <span className="about-v2__impact-idx">02</span>
              <div className="about-v2__impact-text">
                <strong>Dislapharm AI:</strong> Architected anomaly detection for **5,000+** production records.
              </div>
            </div>
            <div className="about-v2__impact-item">
              <span className="about-v2__impact-idx">03</span>
              <div className="about-v2__impact-text">
                <strong>Process Automation:</strong> Reduced manual technical overhead by **40%** through LLM-driven pipelines.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

