import React, { useState, useEffect, useRef } from 'react';
import './skills.css';

const skillsData = {
  frontend: [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'SwiftUI', level: 80 },
    { name: 'Tailwind CSS', level: 85 }
  ],
  backend: [
    { name: 'Node.js', level: 75 },
    { name: 'Firebase', level: 80 },
    { name: 'Supabase', level: 75 },
    { name: 'REST APIs', level: 85 },
    { name: 'Database Design', level: 70 }
  ],
  tools: [
    { name: 'Git/GitHub', level: 90 },
    { name: 'VS Code', level: 95 },
    { name: 'Xcode', level: 85 },
    { name: 'Figma', level: 70 },
    { name: 'Vercel/Netlify', level: 80 }
  ]
};

const ProgressBar = ({ skill, index, isVisible }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, index * 200); // Stagger animation

      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, index]);

  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{animatedLevel}%</span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ 
            width: `${animatedLevel}%`,
            transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </div>
    </div>
  );
};

const CircularProgress = ({ skill, index, isVisible }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, index * 150);

      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, index]);

  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedLevel / 100) * circumference;

  return (
    <div className="circular-progress">
      <svg className="circular-svg" width="120" height="120">
        <circle
          className="circular-bg"
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="var(--color-primary-variant)"
          strokeWidth="8"
          opacity="0.3"
        />
        <circle
          className="circular-fill"
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: 'stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: 'rotate(-90deg)',
            transformOrigin: '60px 60px'
          }}
        />
      </svg>
      <div className="circular-content">
        <span className="circular-percentage">{animatedLevel}%</span>
        <span className="circular-label">{skill.name}</span>
      </div>
    </div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" ref={skillsRef}>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container skills__container">
        {/* Frontend Skills */}
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            {skillsData.frontend.map((skill, index) => (
              <ProgressBar 
                key={skill.name} 
                skill={skill} 
                index={index} 
                isVisible={isVisible} 
              />
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            {skillsData.backend.map((skill, index) => (
              <ProgressBar 
                key={skill.name} 
                skill={skill} 
                index={index} 
                isVisible={isVisible} 
              />
            ))}
          </div>
        </div>

        {/* Tools & Technologies - Circular Progress */}
        <div className="skills__tools">
          <h3>Tools & Technologies</h3>
          <div className="skills__circular">
            {skillsData.tools.map((skill, index) => (
              <CircularProgress 
                key={skill.name} 
                skill={skill} 
                index={index} 
                isVisible={isVisible} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 