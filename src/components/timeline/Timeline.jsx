import React, { useState, useEffect, useRef } from 'react';
import './timeline.css';
import { FaBriefcase, FaGraduationCap, FaCode, FaRocket, FaMobile, FaChartBar, FaHeartbeat, FaLaptopCode } from 'react-icons/fa';

const timelineData = [
  {
    id: 1,
    year: '2022',
    title: 'Started Computer Science Journey',
    company: 'Galgotias University',
    type: 'education',
    icon: <FaGraduationCap />,
    description: 'Began my B.Tech in Computer Science at Galgotias University, Greater Noida. Achieved excellent academic performance with CGPA 8.57/10.',
    skills: ['Java', 'JavaScript', 'Data Structures', 'Algorithms', 'Problem Solving'],
    achievements: [
      'Maintained CGPA of 8.57/10',
      'Mastered programming fundamentals',
      'Built strong foundation in computer science',
      'Developed problem-solving skills'
    ]
  },
  {
    id: 2,
    year: '2023',
    title: 'Frontend Web Development Intern',
    company: 'Motion Cut Video Studio',
    type: 'work',
    icon: <FaCode />,
    description: 'Worked as Frontend Web Development Intern at Motion Cut Video Studio, Lucknow. Designed responsive web dashboards and optimized performance.',
    skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'UI/UX Design'],
    achievements: [
      'Reduced page load time by 35%',
      'Created reusable UI components',
      'Improved development efficiency by 25%',
      'Implemented secure form validation'
    ]
  },
  {
    id: 3,
    year: '2024',
    title: 'AI-Powered Project Development',
    company: 'Personal Projects',
    type: 'project',
    icon: <FaRocket />,
    description: 'Developed AInteraView - an AI-powered interview preparation platform with voice interviews and real-time feedback using cutting-edge technologies.',
    skills: ['Next.js', 'Firebase', 'Tailwind CSS', 'Vapi AI', 'Google Gemini', 'Zod'],
    achievements: [
      'Built AI-powered interview platform',
      'Implemented voice AI integration',
      'Created real-time feedback system',
      'Developed secure authentication'
    ]
  },
  {
    id: 3,
    year: '2024',
    title: 'MERN Stack Development Intern',
    company: 'Main Flow Services and Technologies Pvt. Ltd.',
    type: 'work',
    icon: <FaLaptopCode />,
    description: 'Worked as MERN Stack Development Intern at Main Flow Services and Technologies, Greater Noida. Developed full-stack applications and integrated AI chatbot functionality.',
    skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'OpenAI GPT-4', 'Agile', 'Full-Stack Development'],
    achievements: [
      'Improved user experience by 30% through full-stack development',
      'Enhanced user interaction by 25% with OpenAI GPT-4 chatbot',
      'Achieved 95% project completion rate in Agile environment',
      'Reduced development time by 20% through efficient collaboration',
      'Improved team productivity by 25% with technical solutions'
    ]
  },
  {
    id: 4,
    year: '2024',
    title: 'AI-Powered Project Development',
    company: 'Personal Projects',
    type: 'project',
    icon: <FaRocket />,
    description: 'Developed AInteraView - an AI-powered interview preparation platform with voice interviews and real-time feedback using cutting-edge technologies.',
    skills: ['Next.js', 'Firebase', 'Tailwind CSS', 'Vapi AI', 'Google Gemini', 'Zod'],
    achievements: [
      'Built AI-powered interview platform',
      'Implemented voice AI integration',
      'Created real-time feedback system',
      'Developed secure authentication'
    ]
  },
  {
    id: 5,
    year: '2024',
    title: 'Data Analytics Dashboard',
    company: 'Personal Project',
    type: 'project',
    icon: <FaChartBar />,
    description: 'Built Vehicle Registration Investor Dashboard - a comprehensive data analytics platform using Streamlit for analyzing Indian vehicle registration trends with actionable business intelligence.',
    skills: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Plotly', 'Matplotlib', 'Data Analysis'],
    achievements: [
      'Processed large datasets efficiently',
      'Created interactive visualizations',
      'Implemented real-time filtering',
      'Built comprehensive market analysis tools'
    ]
  },
  {
    id: 6,
    year: '2024',
    title: 'iOS App Development Projects',
    company: 'Personal & Team Projects',
    type: 'project',
    icon: <FaMobile />,
    description: 'Developed comprehensive iOS applications including Faby (toddler tracking app) and Fleet Management System with advanced features and real-world functionality.',
    skills: ['Swift', 'SwiftUI', 'Firebase', 'Supabase', 'MapKit', 'EventKit', 'Jira'],
    achievements: [
      'Built Faby - iOS app for toddler growth tracking',
      'Developed Fleet Management System with role-based access',
      'Implemented real-time notifications and SOS alerts',
      'Used Agile methodology with Jira for project management'
    ]
  },
  {
    id: 7,
    year: '2025',
    title: 'Healthcare App Development',
    company: 'Personal Project',
    type: 'project',
    icon: <FaHeartbeat />,
    description: 'Created MediCheck - a modern iOS healthcare management application with SwiftUI for medication tracking, health monitoring, and fitness management with gamification features.',
    skills: ['Swift', 'SwiftUI', 'Core Data', 'UserNotifications', 'HealthKit', 'AVFoundation'],
    achievements: [
      'Built comprehensive medicine tracking system',
      'Implemented barcode scanning functionality',
      'Created gamified user experience with XP system',
      'Achieved HIPAA compliance for health data'
    ]
  },
  {
    id: 8,
    year: 'Mar-Apr 2025',
    title: 'iOS Developer Intern',
    company: 'Infosys Campus, Mysore',
    type: 'work',
    icon: <FaBriefcase />,
    description: 'Completed iOS Developer Internship at Infosys Campus, Mysore. Developed secure iOS applications using Swift and SwiftUI with industry-standard protocols.',
    skills: ['Swift', 'SwiftUI', 'Firebase', 'Supabase', 'MapKit', 'EventKit', 'Xcode'],
    achievements: [
      'Developed secure iOS applications',
      'Reduced login friction by 40%',
      'Implemented real-time monitoring',
      'Achieved 95% test coverage in Agile environment'
    ]
  }
];

const TimelineItem = ({ item, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const getTypeColor = (type) => {
    switch (type) {
      case 'education': return 'var(--color-success)';
      case 'work': return 'var(--color-primary)';
      case 'project': return 'var(--color-secondary)';
      default: return 'var(--color-primary)';
    }
  };

  return (
    <div 
      className={`timeline-item ${isVisible ? 'animate' : ''}`}
      style={{ animationDelay: `${index * 0.2}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="timeline-content">
        <div 
          className="timeline-marker"
          style={{ backgroundColor: getTypeColor(item.type) }}
        >
          {item.icon}
        </div>
        
        <div className={`timeline-card ${isHovered ? 'hovered' : ''}`}>
          <div className="timeline-header">
            <div className="timeline-year">{item.year}</div>
            <h3 className="timeline-title">{item.title}</h3>
            <h4 className="timeline-company">{item.company}</h4>
          </div>
          
          <p className="timeline-description">{item.description}</p>
          
          <div className="timeline-skills">
            {item.skills.map((skill, idx) => (
              <span key={idx} className="skill-tag">{skill}</span>
            ))}
          </div>
          
          <button 
            className="timeline-toggle"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Hide Details' : 'View Achievements'}
          </button>
          
          {showDetails && (
            <div className="timeline-details">
              <h5>Key Achievements:</h5>
              <ul>
                {item.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      <div className="timeline-progress">
        <div 
          className="progress-line"
          style={{ 
            backgroundColor: getTypeColor(item.type),
            animationDelay: `${index * 0.3}s`
          }}
        />
      </div>
    </div>
  );
};

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <section id="timeline" ref={timelineRef}>
      <h5>My Professional Journey</h5>
      <h2>Career Timeline</h2>
      
      <div className="container timeline__container">
        <div className="timeline-wrapper">
          {timelineData.map((item, index) => (
            <TimelineItem 
              key={item.id}
              item={item}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline; 