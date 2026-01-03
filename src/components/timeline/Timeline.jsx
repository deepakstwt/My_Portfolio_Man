import React, { useState, useEffect, useRef } from 'react';
import './timeline.css';
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaRocket, 
  FaLaptopCode,
  FaApple,
  FaChartLine
} from 'react-icons/fa';
import { BsArrowRight, BsCheckCircleFill } from 'react-icons/bs';
import { HiOutlineExternalLink } from 'react-icons/hi';

const timelineData = [
  {
    id: 1,
    year: '2022',
    month: 'Aug',
    title: 'B.Tech in Computer Science',
    organization: 'Galgotias University',
    location: 'Greater Noida, India',
    type: 'education',
    icon: <FaGraduationCap />,
    description: 'Started my journey in Computer Science with a focus on building strong fundamentals in programming and software development.',
    highlights: [
      'CGPA: 8.57/10',
      'Core: Data Structures & Algorithms',
      'Languages: Java, JavaScript, Python'
    ],
    color: '#10b981'
  },
  {
    id: 2,
    year: '2023',
    month: 'Jun - Aug',
    title: 'Frontend Development Intern',
    organization: 'Motion Cut Video Studio',
    location: 'Lucknow, India',
    type: 'work',
    icon: <FaLaptopCode />,
    description: 'Designed and developed responsive web dashboards, optimizing performance and user experience.',
    highlights: [
      '35% faster page load times',
      'Built reusable UI components',
      '25% improved dev efficiency'
    ],
    color: '#6366f1'
  },
  {
    id: 3,
    year: '2024',
    month: 'Jan - Mar',
    title: 'Full Stack Developer Intern',
    organization: 'Main Flow Services & Technologies',
    location: 'Greater Noida, India',
    type: 'work',
    icon: <FaRocket />,
    description: 'Developed full-stack applications and integrated AI chatbot functionality using OpenAI GPT-4.',
    highlights: [
      '30% improved user experience',
      'GPT-4 chatbot integration',
      '95% project completion rate'
    ],
    color: '#8b5cf6'
  },
  {
    id: 4,
    year: '2024',
    month: 'Throughout',
    title: 'iOS & Full Stack Projects',
    organization: 'Personal & Team Projects',
    location: 'Remote',
    type: 'project',
    icon: <FaApple />,
    description: 'Built production-ready applications including Faby, Fleet Management System, GitAid, and Skilio.',
    highlights: [
      '7+ projects delivered',
      'Swift, SwiftUI, React, Next.js',
      'AI/ML integrations'
    ],
    color: '#06b6d4'
  },
  {
    id: 5,
    year: '2025',
    month: 'Mar - Apr',
    title: 'Software Developer Intern - iOS',
    organization: 'Infosys',
    location: 'Mysore, India',
    type: 'work',
    icon: <FaBriefcase />,
    description: 'Developed secure iOS applications using Swift and SwiftUI with industry-standard protocols at Infosys Campus.',
    highlights: [
      '40% reduced login friction',
      '95% test coverage',
      'Enterprise-grade security'
    ],
    color: '#f59e0b',
    completed: true
  },
  {
    id: 6,
    year: '2026',
    month: 'Expected',
    title: 'B.Tech Graduation',
    organization: 'Galgotias University',
    location: 'Greater Noida, India',
    type: 'education',
    icon: <FaGraduationCap />,
    description: 'Expected graduation with Bachelor of Technology in Computer Science.',
    highlights: [
      'Target: CGPA 8.5+',
      'Full Stack Developer',
      'iOS Specialist'
    ],
    color: '#10b981',
    upcoming: true
  }
];

const TimelineCard = ({ item, index, isVisible }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`timeline__card ${isVisible ? 'timeline__card--visible' : ''} ${item.completed ? 'timeline__card--completed' : ''} ${item.upcoming ? 'timeline__card--upcoming' : ''}`}
      style={{ '--delay': `${index * 0.15}s`, '--accent': item.color }}
    >
      {/* Timeline Node */}
      <div className="timeline__node">
        <div className="timeline__node-icon" style={{ background: item.color }}>
          {item.icon}
        </div>
        <div className="timeline__node-line"></div>
        </div>
        
      {/* Card Content */}
      <div className="timeline__card-content">
        {/* Date Badge */}
        <div className="timeline__date">
          <span className="timeline__year">{item.year}</span>
          <span className="timeline__month">{item.month}</span>
          </div>
          
        {/* Header */}
        <div className="timeline__header">
          <h3 className="timeline__title">{item.title}</h3>
          <div className="timeline__meta">
            <span className="timeline__org">{item.organization}</span>
            <span className="timeline__location">{item.location}</span>
          </div>
          </div>
          
        {/* Description */}
        <p className="timeline__description">{item.description}</p>
          
        {/* Highlights */}
        <div className="timeline__highlights">
          {item.highlights.map((highlight, idx) => (
            <div key={idx} className="timeline__highlight">
              <BsCheckCircleFill className="timeline__highlight-icon" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        {/* Status Badge */}
        {item.completed && (
          <div className="timeline__status timeline__status--completed">
            <BsCheckCircleFill />
            Completed
          </div>
        )}
        {item.upcoming && (
          <div className="timeline__status timeline__status--upcoming">
            <FaChartLine />
            Upcoming
      </div>
        )}
      </div>
    </div>
  );
};

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'work', label: 'Experience' },
    { key: 'education', label: 'Education' },
    { key: 'project', label: 'Projects' }
  ];

  const filteredData = activeFilter === 'all' 
    ? timelineData 
    : timelineData.filter(item => item.type === activeFilter);

  return (
    <section id="timeline" className={`timeline ${isVisible ? 'timeline--visible' : ''}`} ref={timelineRef}>
      {/* Section Header */}
      <div className="timeline__section-header">
        <span className="timeline__label">
          <span className="timeline__label-icon">⚡</span>
          Career Journey
        </span>
        <h2 className="timeline__section-title">
          My <span className="timeline__section-gradient">Timeline</span>
        </h2>
        <p className="timeline__section-subtitle">
          A chronicle of my professional growth, from academic beginnings to industry experience
        </p>

        {/* Filters */}
        <div className="timeline__filters">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`timeline__filter ${activeFilter === filter.key ? 'timeline__filter--active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Container */}
      <div className="container timeline__container">
        <div className="timeline__track">
          {filteredData.map((item, index) => (
            <TimelineCard 
              key={item.id}
              item={item}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Summary Stats */}
        <div className="timeline__stats">
          <div className="timeline__stat">
            <span className="timeline__stat-number">3+</span>
            <span className="timeline__stat-label">Internships</span>
          </div>
          <div className="timeline__stat-divider"></div>
          <div className="timeline__stat">
            <span className="timeline__stat-number">7+</span>
            <span className="timeline__stat-label">Projects</span>
          </div>
          <div className="timeline__stat-divider"></div>
          <div className="timeline__stat">
            <span className="timeline__stat-number">2+</span>
            <span className="timeline__stat-label">Years Coding</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline; 
