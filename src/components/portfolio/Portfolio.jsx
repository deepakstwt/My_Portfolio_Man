import React, { useState, useRef, useEffect } from "react";
import "./portfolio.css";
import IMG2 from "../../assets/Faby.png";
import IMG3 from "../../assets/FleetManagementSystem.jpeg";
import IMG4 from "../../assets/Dash.jpeg";
import IMG5 from "../../assets/Medicheck.png";
import IMG5_2 from "../../assets/Medi1.png";
import IMG5_3 from "../../assets/Medi2.png";
import IMG5_4 from "../../assets/Medi3.png";
import IMG5_5 from "../../assets/Medi4.png";
import IMG6 from "../../assets/NeighbourFit.jpeg";
import IMG7 from "../../assets/Skilio.jpeg";
import IMG8 from "../../assets/GitAid.jpeg";
import IMG8_2 from "../../assets/GitAid2.jpeg";

import { BsArrowRight, BsGithub, BsArrowUpRight } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";

import ProjectModal from "./ProjectModal";

const data = [
  {
    id: 7,
    image: IMG7,
    title: "Skilio",
    subtitle: "AI Resume Builder & Job Platform",
    category: "Full Stack",
    tags: ["React", "Node.js", "MongoDB", "AI"],
    github: "https://github.com/deepakstwt/Skilio",
    demo: "#",
    brief: "AI-powered resume builder with job recommendations, generating 1,000+ resumes and improving match accuracy by 35%.",
    description: "Skilio is an AI-powered resume builder and job platform that helps job seekers create professional resumes and find matching opportunities. Engineered a full-stack resume builder with real-time preview and template support, generating 1,000+ resumes. Built a job recommendation engine using LLM-based skill extraction, improving match accuracy by 35%. Integrated AI-driven resume optimization and keyword suggestions, raising ATS score alignment by 40%.",
    features: [
      "Engineered a full-stack resume builder with real-time preview and template support, generating 1,000+ resumes",
      "Built a job recommendation engine using LLM-based skill extraction, improving match accuracy by 35%",
      "Integrated AI-driven resume optimization and keyword suggestions, raising ATS score alignment by 40%",
      "Designed responsive UI using Tailwind and optimized REST APIs in Node.js/Express, improving user retention"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    challenges: "The main challenge was building an accurate job recommendation engine that could effectively match candidates with opportunities. I solved this by implementing skill extraction algorithms, similarity scoring systems, and ATS optimization techniques to improve both match accuracy and resume quality.",
    learnings: "This project taught me advanced full-stack development patterns, AI integration for resume optimization, and how to build scalable recommendation systems. I gained expertise in ATS compatibility, skill matching algorithms, and creating user-friendly interfaces for complex workflows.",
    featured: true,
    stats: { users: "1K+", accuracy: "35%", ats: "40%" }
  },
  {
    id: 8,
    image: IMG8,
    additionalImages: [IMG8_2],
    title: "GitAid",
    subtitle: "AI-Powered Git Management",
    category: "Full Stack",
    tags: ["Next.js", "TypeScript", "RAG", "AI"],
    github: "https://github.com/deepakstwt/GitAid",
    demo: "#",
    brief: "AI-powered Git management platform with RAG-based semantic code search achieving 98% retrieval accuracy.",
    description: "GitAid is an AI-powered Git management platform that revolutionizes how developers interact with their code repositories. Deployed RAG pipelines for semantic code search using LangChain and pgvector, achieving 98% accuracy in multi-repository retrieval. Built Gemini LLM-powered commit summaries and meeting insights, boosting productivity by 60%. Scaled Next.js + TypeScript APIs using Prisma ORM and tRPC to handle 10k+ requests with 150ms latency.",
    features: [
      "Deployed RAG pipelines for semantic code search using LangChain and pgvector, achieving 98% accuracy in multi-repository retrieval",
      "Built Gemini LLM-powered commit summaries and meeting insights, boosting productivity by 60%",
      "Scaled Next.js + TypeScript APIs using Prisma ORM and tRPC to handle 10k+ requests with 150ms latency",
      "Increased user engagement by 35% through real-time activity tracking and drag-and-drop repository uploads"
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "LangChain", "RAG", "pgvector", "Prisma", "tRPC", "Gemini AI"],
    challenges: "The biggest challenge was implementing RAG-based semantic search with high accuracy across multiple repositories while maintaining low latency. I solved this by using pgvector for efficient vector storage, optimizing LangChain retrieval pipelines, and implementing intelligent caching strategies.",
    learnings: "This project taught me advanced AI/ML integration techniques, vector database optimization, and how to build high-performance full-stack applications. I gained expertise in RAG systems, semantic search, TypeScript best practices, and scaling applications to handle high traffic with minimal latency.",
    featured: true,
    stats: { accuracy: "98%", requests: "10K+", latency: "150ms" }
  },
  {
    id: 2,
    image: IMG2,
    title: "Faby",
    subtitle: "iOS App for Toddlers",
    category: "iOS",
    tags: ["Swift", "SwiftUI", "Firebase"],
    github: "https://drive.google.com/drive/folders/1rPIuF66dQjgbvrY6MzUDEutm2oC1TASt?usp=drive_link",
    demo: "https://drive.google.com/drive/folders/1rPIuF66dQjgbvrY6MzUDEutm2oC1TASt?usp=sharing",
    brief: "iOS app for tracking toddler growth, meals, and vaccination with comprehensive parenting features.",
    description: "Faby is a comprehensive iOS application designed to help parents track and manage their toddler's development, health, and daily activities. The app provides an intuitive interface for monitoring growth milestones, vaccination schedules, meal planning, and developmental progress.",
    features: [
      "GrowTrack: Monitor height, weight, and developmental milestones",
      "VacciAlert: Vaccination schedule reminders and tracking",
      "TodBite: Meal planning and nutrition tracking",
      "Toddler Talk: Communication and language development tools",
      "Photo timeline for growth documentation",
      "Pediatrician appointment scheduling",
      "Data export and sharing with healthcare providers",
      "Offline functionality for critical features"
    ],
    technologies: ["Swift", "SwiftUI", "Firebase", "Supabase", "Core Data", "UserNotifications", "HealthKit", "iOS SDK"],
    challenges: "Implementing secure health data storage while maintaining HIPAA compliance was challenging. I addressed this by using encrypted local storage with Firebase security rules and implementing proper data anonymization techniques.",
    learnings: "This project enhanced my iOS development skills, particularly in health app development, data security, and creating intuitive user interfaces for non-technical users. I also learned about child development tracking requirements and parental app design patterns.",
    stats: { features: "8+", platforms: "iOS" }
  },
  {
    id: 6,
    image: IMG6,
    title: "NeighborFit",
    subtitle: "Neighborhood Discovery Platform",
    category: "Full Stack",
    tags: ["React", "Node.js", "GraphQL", "AI"],
    github: "https://github.com/deepakstwt/NeighborFit",
    demo: "#",
    brief: "AI-powered neighborhood discovery platform serving 1,000+ daily queries with 95% accuracy.",
    description: "Built NeighborFit web application using React.js, Express.js, Node.js, and MongoDB with RESTful APIs and GraphQL, serving 1,000+ daily queries.",
    features: [
      "Secure OAuth 2.0 authentication flow with JWT tokens, reducing user onboarding time by 15%.",
      "AI-powered recommendation engine achieving 95% accuracy for neighborhood discovery and user matching.",
      "Optimized database queries and implemented caching strategies, reducing API response time by 40%.",
      "Modern UI/UX for seamless user experience."
    ],
    technologies: ["React.js", "Express.js", "Node.js", "MongoDB", "RESTful APIs", "GraphQL", "JWT", "OAuth 2.0", "AI"],
    challenges: "Building a scalable recommendation engine and implementing secure authentication while maintaining high performance.",
    learnings: "Learned advanced backend optimization, secure authentication flows, and AI-powered recommendation techniques.",
    stats: { queries: "1K+", accuracy: "95%" }
  },
  {
    id: 5,
    image: IMG5,
    additionalImages: [IMG5_2, IMG5_3, IMG5_4, IMG5_5],
    title: "MediCheck",
    subtitle: "Healthcare Management App",
    category: "iOS",
    tags: ["Swift", "SwiftUI", "HealthKit"],
    github: "https://github.com/deepakstwt/MedicheckM",
    demo: "#",
    brief: "Modern iOS health management app with medication tracking, gamification, and smart notifications.",
    description: "MediCheck is a comprehensive iOS health management application built with SwiftUI that empowers users to take control of their healthcare journey. The app provides an intuitive interface for medication tracking, health monitoring, and fitness management with smart notifications and gamification features.",
    features: [
      "Medicine tracking with expiration date monitoring",
      "Dose scheduling and reminder notifications",
      "Barcode scanning for quick medicine entry",
      "Health status dashboard with visual indicators",
      "Gamified experience with XP points and leaderboards",
      "Missed dose tracking and catch-up reminders",
      "Planned medications and appointment scheduling",
      "Modern SwiftUI interface with dark/light mode support",
      "iPhone and iPad compatibility with responsive design"
    ],
    technologies: ["Swift", "SwiftUI", "Core Data", "UserNotifications", "AVFoundation", "HealthKit", "iOS SDK"],
    challenges: "The main challenge was creating an intuitive medication management system while ensuring HIPAA compliance and data security. I solved this by implementing encrypted local storage, secure notification scheduling, and user-friendly interfaces that don't compromise on functionality.",
    learnings: "This project deepened my understanding of iOS health app development, particularly in notification management, data persistence, and creating engaging user experiences for healthcare applications. I gained expertise in SwiftUI animations, Core Data relationships, and health data privacy requirements.",
    stats: { features: "9+", devices: "iPhone/iPad" }
  },
  {
    id: 3,
    image: IMG3,
    title: "Fleet Master",
    subtitle: "Enterprise Fleet Management",
    category: "iOS",
    tags: ["SwiftUI", "MapKit", "Firebase"],
    github: "https://github.com/deepakstwt/Fleet-Master/tree/Deepak-Dev",
    demo: "#",
    brief: "Enterprise iOS app for comprehensive fleet management with real-time tracking and maintenance scheduling.",
    description: "Fleet Master is an enterprise-grade iOS application designed for comprehensive fleet management. The app enables fleet managers to efficiently track vehicles, assign trips, monitor maintenance schedules, and handle emergency situations with real-time updates and notifications.",
    features: [
      "Real-time vehicle tracking and location monitoring",
      "Trip assignment and route optimization",
      "Maintenance scheduling and logging system",
      "SOS emergency alert system with GPS coordinates",
      "Driver performance analytics and reporting",
      "Fuel consumption tracking and cost analysis",
      "Vehicle inspection checklists and documentation",
      "Push notifications for critical updates",
      "Offline mode for remote area operations"
    ],
    technologies: ["SwiftUI", "Supabase", "Firebase", "MapKit", "Core Location", "UserNotifications", "Core Data", "Charts Framework"],
    challenges: "The biggest challenge was implementing real-time location tracking while optimizing battery usage. I solved this by implementing intelligent location update intervals based on vehicle status and using background app refresh efficiently.",
    learnings: "This project taught me enterprise app development patterns, real-time data synchronization, location-based services optimization, and how to build scalable backend architectures. I also gained experience in fleet management domain knowledge and enterprise security requirements.",
    stats: { tracking: "Real-time", mode: "Offline" }
  },
  {
    id: 4,
    image: IMG4,
    title: "Investor Dashboard",
    subtitle: "Vehicle Registration Analytics",
    category: "Data",
    tags: ["Python", "Streamlit", "Pandas"],
    github: "https://github.com/deepakstwt/InteraDashboard",
    demo: "#",
    brief: "Data-driven analytics platform delivering actionable insights from Indian vehicle registration trends.",
    description: "A comprehensive data analytics platform built with Streamlit that provides deep insights into Indian vehicle registration trends. The dashboard analyzes data across states, manufacturers, and vehicle categories to deliver actionable business intelligence for investors and industry stakeholders.",
    features: [
      "Interactive state-wise vehicle registration analysis",
      "Manufacturer performance and market share tracking",
      "Vehicle category trend analysis and forecasting",
      "Growth rate calculations and volatility indicators",
      "Market share visualization and comparison tools",
      "Data export capabilities for further analysis",
      "Real-time filtering and dynamic chart updates",
      "Comprehensive statistical insights and summaries"
    ],
    technologies: ["Python", "Streamlit", "Pandas", "NumPy", "Plotly", "Matplotlib", "Seaborn", "Data Analysis"],
    challenges: "The main challenge was processing and visualizing large datasets efficiently while maintaining interactive performance. I solved this by implementing optimized data processing pipelines and efficient caching mechanisms for real-time dashboard updates.",
    learnings: "This project enhanced my data science and visualization skills, particularly in building interactive dashboards and deriving meaningful insights from complex datasets. I gained expertise in financial analytics, market trend analysis, and creating user-friendly data presentation interfaces.",
    stats: { type: "Analytics", charts: "Dynamic" }
  }
];

const categories = ["All", "Full Stack", "iOS", "Data"];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
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

  const filteredProjects = activeCategory === "All" 
    ? data 
    : data.filter(project => project.category === activeCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className={`portfolio ${isVisible ? 'portfolio--visible' : ''}`} ref={sectionRef}>
      {/* Floating Tech Stack & Challenges */}
      <div className="portfolio__floating-elements">
        {/* Tech Stack Keywords */}
        {[
          "React", "Node.js", "Swift", "SwiftUI", "Next.js", "TypeScript",
          "MongoDB", "PostgreSQL", "Firebase", "Supabase", "RAG", "LangChain",
          "AI/ML", "Gemini", "pgvector", "Prisma", "tRPC", "Express.js"
        ].map((tech, index) => (
          <span 
            key={`tech-${index}`}
            className="portfolio__float-tech"
            style={{ '--delay': `${index * 0.3}s` }}
          >
            {tech}
          </span>
        ))}
        
        {/* Challenges Keywords */}
        {[
          "Scalability", "Performance", "Real-time", "Security", "Optimization",
          "Vector Search", "Low Latency", "Data Privacy", "HIPAA", "ATS",
          "Recommendation Engine", "Semantic Search", "Caching", "Agile"
        ].map((challenge, index) => (
          <span 
            key={`challenge-${index}`}
            className="portfolio__float-challenge"
            style={{ '--delay': `${index * 0.4}s` }}
          >
            {challenge}
          </span>
        ))}
      </div>

      {/* Section Header */}
      <div className="portfolio__header">
        <div className="portfolio__header-content">
          <span className="portfolio__label">
            <span className="portfolio__label-icon">✦</span>
            Featured Work
          </span>
          <h2 className="portfolio__title">
            Projects I've <span className="portfolio__title-gradient">Built</span>
      </h2>
          <p className="portfolio__subtitle">
            A collection of projects that showcase my expertise in iOS development, 
            full-stack engineering, and AI-powered solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="portfolio__filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`portfolio__filter ${activeCategory === category ? 'portfolio__filter--active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
              {activeCategory === category && <span className="portfolio__filter-count">{filteredProjects.length}</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container portfolio__container">
        {filteredProjects.map((project, index) => (
            <article 
              key={project.id} 
            className={`portfolio__card ${project.featured ? 'portfolio__card--featured' : ''}`}
              onClick={() => handleProjectClick(project)}
            style={{ '--delay': `${index * 0.1}s` }}
            >
            {/* Card Image */}
            <div className="portfolio__card-image">
                <img src={project.image} alt={project.title} />
              <div className="portfolio__card-overlay">
                <span className="portfolio__card-view">
                  View Project <BsArrowUpRight />
                </span>
              </div>
              {project.featured && (
                <span className="portfolio__card-badge">Featured</span>
              )}
            </div>

            {/* Card Content */}
            <div className="portfolio__card-content">
              <div className="portfolio__card-tags">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className="portfolio__card-tag">{tag}</span>
                ))}
              </div>

              <h3 className="portfolio__card-title">{project.title}</h3>
              <p className="portfolio__card-subtitle">{project.subtitle}</p>
              <p className="portfolio__card-brief">{project.brief}</p>

              {/* Card Footer */}
              <div className="portfolio__card-footer">
                  <a 
                    href={project.github} 
                  className="portfolio__card-link"
                    target="_blank" 
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                  {project.github.includes('drive.google.com') ? (
                    <>
                      <HiOutlineExternalLink /> Demo
                    </>
                  ) : (
                    <>
                      <BsGithub /> Code
                    </>
                  )}
                  </a>
                <button className="portfolio__card-btn">
                  Details <BsArrowRight />
                </button>
                </div>
              </div>
            </article>
        ))}
      </div>

      {/* View All CTA */}
      <div className="portfolio__cta">
        <a 
          href="https://github.com/deepakstwt" 
          target="_blank" 
          rel="noreferrer"
          className="portfolio__cta-btn"
        >
          <BsGithub />
          <span>View All on GitHub</span>
          <BsArrowUpRight />
        </a>
      </div>
      
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
};

export default Portfolio;
