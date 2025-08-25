import React, { useState } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/AInteraView.jpeg";
import IMG2 from "../../assets/Faby.jpeg";
import IMG3 from "../../assets/FleetManagementSystem.jpeg";
import IMG4 from "../../assets/Dash.jpeg";
import ProjectModal from "./ProjectModal";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "AInteraView - AI-powered Interview Platform",
    category: "Full Stack Web Application",
    github: "https://github.com/deepakstwt/AInteraView",
    demo: "#",
    brief: "An AI-powered job interview preparation platform featuring realistic voice interviews and instant feedback.",
    description: "AInteraView is a comprehensive AI-powered interview preparation platform that revolutionizes how candidates prepare for job interviews. The platform provides realistic voice-based interview simulations with instant AI feedback, helping users improve their interview skills in a safe, controlled environment.",
    features: [
      "Real-time voice-based AI interviews using Vapi AI integration",
      "Instant feedback and scoring based on Google Gemini AI analysis",
      "Multiple interview categories (Technical, HR, Behavioral)",
      "Progress tracking and performance analytics",
      "Responsive design for all devices",
      "User authentication and profile management",
      "Interview history and detailed reports"
    ],
    technologies: ["Next.js", "React", "Firebase", "Tailwind CSS", "Vapi AI", "Google Gemini", "shadcn/ui", "JavaScript", "Vercel"],
    challenges: "The main challenge was integrating multiple AI services (Vapi for voice and Gemini for analysis) while maintaining real-time performance. I solved this by implementing efficient API calls, proper error handling, and optimizing the data flow between services.",
    learnings: "This project taught me advanced AI integration techniques, real-time data processing, and how to create seamless user experiences with complex backend systems. I also gained expertise in voice AI technologies and natural language processing."
  },
  {
    id: 2,
    image: IMG2,
    title: "Faby - iOS App for Toddlers",
    category: "iOS Mobile Application",
    github: "https://testflight.apple.com/join/5WQytTZW",
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
    learnings: "This project enhanced my iOS development skills, particularly in health app development, data security, and creating intuitive user interfaces for non-technical users. I also learned about child development tracking requirements and parental app design patterns."
  },
  {
    id: 3,
    image: IMG3,
    title: "Fleet Management System - iOS App",
    category: "iOS Enterprise Application",
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
    learnings: "This project taught me enterprise app development patterns, real-time data synchronization, location-based services optimization, and how to build scalable backend architectures. I also gained experience in fleet management domain knowledge and enterprise security requirements."
  },
  {
    id: 4,
    image: IMG4,
    title: "Vehicle Registration Investor Dashboard",
    category: "Data Analytics Web Application",
    github: "https://github.com/deepakstwt/InteraDashboard",
    demo: "#",
    brief: "Data-driven Streamlit platform delivering actionable insights from Indian vehicle registration trends with growth analysis and market intelligence.",
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
    learnings: "This project enhanced my data science and visualization skills, particularly in building interactive dashboards and deriving meaningful insights from complex datasets. I gained expertise in financial analytics, market trend analysis, and creating user-friendly data presentation interfaces."
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map((project) => {
          return (
            <article 
              key={project.id} 
              className="portfolio__item"
              onClick={() => handleProjectClick(project)}
            >
              <div className="portfolio__item-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="portfolio__content">
                <h3>{project.title}</h3>
                <p className="portfolio__item-brief">{project.brief}</p>
                <div className="portfolio__item-cta">
                  <a 
                    href={project.github} 
                    className="btn" 
                    target="_blank" 
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.github.includes('testflight.apple.com') ? 'TestFlight' : 'GitHub'}
                  </a>
                </div>
              </div>
            </article>
          );
        })}
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
