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
                3+ Years
              </small> <br />
              <small>
                Professional Experience
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                Computer Science
                <br />
                Bachelor's Degree
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                25+ Completed
                <br />
                Projects
              </small>
            </article>
          </div>
          <p>
            I'm a dedicated Software Developer with expertise in building responsive web applications 
            and modern user interfaces. My technical stack includes JavaScript, React.js, Node.js, 
            and various frontend and backend technologies. I'm passionate about creating 
            clean, efficient, and scalable code to deliver exceptional user experiences.
          </p>
          <p>
            With a strong foundation in computer science principles and a keen eye for detail, 
            I approach each project with a focus on producing high-quality solutions that 
            meet business requirements and exceed user expectations. I enjoy collaborating 
            with cross-functional teams and continuously learning new technologies to 
            enhance my development skills.
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
