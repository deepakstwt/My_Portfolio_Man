import React from 'react';
import Modal from '../common/Modal';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="modal__header">
        <h2 className="modal__title">{project.title}</h2>
        <p className="modal__subtitle">{project.category}</p>
      </div>

      <img 
        src={project.image} 
        alt={project.title} 
        className="modal__image"
      />

      <div className="modal__section">
        <h3>Project Overview</h3>
        <p>{project.description}</p>
      </div>

      <div className="modal__section">
        <h3>Key Features</h3>
        <ul className="modal__features">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="modal__section">
        <h3>Technologies Used</h3>
        <div className="modal__tech-stack">
          {project.technologies.map((tech, index) => (
            <span key={index} className="modal__tech-tag">{tech}</span>
          ))}
        </div>
      </div>

      {project.challenges && (
        <div className="modal__section">
          <h3>Challenges & Solutions</h3>
          <p>{project.challenges}</p>
        </div>
      )}

      {project.learnings && (
        <div className="modal__section">
          <h3>What I Learned</h3>
          <p>{project.learnings}</p>
        </div>
      )}

      <div className="modal__links">
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="modal__link modal__link--secondary"
        >
          View Code
        </a>
        {project.demo && project.demo !== "#" && (
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="modal__link modal__link--primary"
          >
            Live Demo
          </a>
        )}
      </div>
    </Modal>
  );
};

export default ProjectModal; 