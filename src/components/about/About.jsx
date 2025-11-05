import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile3.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile_picture} alt="Deepak" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                iOS Developer Intern
              </small> <br />
              <small>
                Frontend Web Dev Intern
              </small> <br />
              <small>
                Full Stack Developer Intern
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                B.Tech Computer Science
                <br />
                CGPA: 8.57/10
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                5+ Major Projects
                <br />
                iOS & Full Stack Apps
              </small>
            </article>
          </div>
          <p>
            I'm a passionate iOS Developer and Full Stack Developer currently pursuing B.Tech in Computer Science 
            at Galgotias University with a CGPA of 8.57/10. I have completed internships as an iOS Developer at 
            Infosys Campus, Mysore (Mar-Apr 2025), where I developed secure iOS applications using Swift and SwiftUI, 
            implementing industry-standard protocols and achieving 95% test coverage in an Agile environment. I also 
            completed a Full Stack Development Internship at Main Flow Services and Technologies Pvt. Ltd. (Nov-Dec 2024), 
            building modern full-stack web applications.
          </p>
          <p>
            My technical expertise spans across iOS development with Swift, SwiftUI, Firebase, and Supabase, 
            as well as full-stack web development using the MERN stack (MongoDB, Express.js, React.js, Node.js). 
            I've successfully built comprehensive applications including AInteraView (AI-powered interview platform), 
            Faby (iOS app for toddler tracking), Fleet Management System, Vehicle Registration Dashboard, and 
            MediCheck healthcare platform with real-time monitoring and role-based access control.
          </p>
          <p>
            With hands-on experience in both mobile and web development, I'm skilled in creating responsive 
            applications, implementing secure authentication systems, and optimizing performance. I've reduced 
            page load times by 35% and login friction by 40% through code optimization and modern development techniques. 
            I thrive in collaborative environments and am passionate about leveraging cutting-edge technologies to 
            solve real-world problems and create meaningful user experiences.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
