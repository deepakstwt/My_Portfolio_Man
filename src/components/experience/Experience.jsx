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

  const allSkills = Object.values(skillsData).flatMap(cat => cat.skills);

  return (
    <section 
      id="experience" 
      className={`skills ${isVisible ? 'skills--visible' : ''}`} 
      ref={sectionRef}
    >
      {/* Section Header */}
      <div className="skills__header">
        <span className="skills__label">
          <span className="skills__label-icon">🛠</span>
          Technical Expertise
        </span>
        <h2 className="skills__title">
          Skills & <span className="skills__title-gradient">Technologies</span>
        </h2>
        <p className="skills__subtitle">
          Technologies I work with to bring ideas to life
        </p>
      </div>

      {/* Skills Grid */}
      <div className="container skills__container">
        {Object.entries(skillsData).map(([key, category], catIndex) => (
          <div 
            key={key} 
            className="skills__category"
            style={{ '--delay': `${catIndex * 0.1}s` }}
          >
            <div className="skills__category-header">
              <span className="skills__category-icon">{category.icon}</span>
              <h3 className="skills__category-title">{category.title}</h3>
            </div>
            <div className="skills__category-items">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skill.name} 
                  className="skills__item"
                  style={{ '--skill-delay': `${(catIndex * 0.1) + (skillIndex * 0.05)}s` }}
                >
                  <span className="skills__item-icon">{skill.icon}</span>
                  <span className="skills__item-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* All Skills Cloud */}
      <div className="skills__cloud">
        <p className="skills__cloud-label">Full Stack</p>
        <div className="skills__cloud-items">
          {allSkills.map((skill, index) => (
            <span 
              key={skill.name} 
              className="skills__cloud-item"
              style={{ '--cloud-delay': `${index * 0.03}s` }}
            >
              {skill.icon}
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
