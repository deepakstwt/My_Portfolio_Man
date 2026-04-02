import React, { useState, useEffect, useRef } from "react";
import "./experience.css";
import { 
  SiSwift, SiReact, SiJavascript, SiTypescript, SiPython,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiSupabase,
  SiPostgresql, SiTailwindcss, SiNextdotjs, SiGit, SiJira,
  SiXcode, SiFigma, SiHtml5, SiCss3
} from "react-icons/si";
import { FaJava, FaApple, FaServer, FaTools, FaBrain } from "react-icons/fa";

const skillsData = {
  languages: {
    title: "Languages",
    icon: <FaBrain />,
    skills: [
      { name: "Swift", icon: <SiSwift /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Java", icon: <FaJava /> },
    ]
  },
  frontend: {
    title: "Frontend & Mobile",
    icon: <FaApple />,
    skills: [
      { name: "SwiftUI", icon: <SiSwift /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
    ]
  },
  backend: {
    title: "Backend & Database",
    icon: <FaServer />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Supabase", icon: <SiSupabase /> },
    ]
  },
  tools: {
    title: "Tools & Platforms",
    icon: <FaTools />,
    skills: [
      { name: "Xcode", icon: <SiXcode /> },
      { name: "Git", icon: <SiGit /> },
      { name: "JIRA", icon: <SiJira /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "RAG & LangChain", icon: <FaBrain /> },
    ]
  }
};

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  // Group skills for the hub
  const hubCategories = [
    { key: 'languages', ...skillsData.languages, size: 'large' },
    { key: 'frontend', ...skillsData.frontend, size: 'medium' },
    { key: 'backend', ...skillsData.backend, size: 'medium' },
    { key: 'tools', ...skillsData.tools, size: 'tall' }
  ];

  return (
    <section 
      id="experience" 
      className={`skills-hub ${isVisible ? 'skills-hub--visible' : ''}`} 
      ref={sectionRef}
    >
      {/* Background Schematic */}
      <div className="skills-hub__schematic">
        <div className="skills-hub__grid"></div>
        <div className="skills-hub__circles"></div>
      </div>

      <div className="container skills-hub__container">
        {/* Section Header */}
        <div className="skills-hub__header">
          <div className="skills-hub__label">
            <span className="skills-hub__label-tag">Technical Arsenal</span>
            <span className="skills-hub__label-line"></span>
          </div>
          <h2 className="skills-hub__title">
            Mastery & <span className="skills-hub__title-gradient">Tooling</span>
          </h2>
          <p className="skills-hub__subtitle">
            An overview of the technologies I deploy to architect high-performance digital experiences
          </p>
        </div>

        {/* The Bento Hub */}
        <div className="skills-hub__bento">
          {hubCategories.map((cat, idx) => (
            <div 
              key={cat.key}
              className={`skills-hub__module skills-hub__module--${cat.size}`}
              style={{ '--idx': idx }}
            >
              <div className="skills-hub__module-inner">
                {/* Visual Flair */}
                <div className="skills-hub__module-bg">
                  <div className="skills-hub__pattern"></div>
                </div>
                
                <div className="skills-hub__module-header">
                  <div className="skills-hub__cat-info">
                    <span className="skills-hub__cat-icon">{cat.icon}</span>
                    <h3 className="skills-hub__cat-title">{cat.title}</h3>
                  </div>
                  <span className="skills-hub__cat-count">{cat.skills.length} units</span>
                </div>

                <div className="skills-hub__skill-list">
                  {cat.skills.map((skill, sIdx) => (
                    <div 
                      key={skill.name} 
                      className="skills-hub__skill-tag"
                      style={{ '--sIdx': sIdx }}
                    >
                      <span className="skills-hub__skill-icon">{skill.icon}</span>
                      <span className="skills-hub__skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>

                {/* Technical Label */}
                <div className="skills-hub__blueprint-info">
                  <span className="skills-hub__bp-code">SYS-MOD-{idx + 1}</span>
                  <div className="skills-hub__bp-line"></div>
                </div>
              </div>
            </div>
          ))}

          {/* Central Hub Detail (Static or context aware) */}
          <div className="skills-hub__core">
            <div className="skills-hub__core-sphere">
              <div className="skills-hub__core-ring"></div>
              <div className="skills-hub__core-ring"></div>
              <div className="skills-hub__core-ring"></div>
              <FaBrain className="skills-hub__core-icon" />
            </div>
            <div className="skills-hub__core-text">
              <span className="skills-hub__core-label">System Intelligence</span>
              <span className="skills-hub__core-status">Online // Operational</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Experience;
