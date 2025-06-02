import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import useHomeVisibility from "../../hooks/useHomeVisibility";

const Footer = () => {
  const isHomeActive = useHomeVisibility();

  return (
    <footer>
      {/* eslint-disable-next-line */}
      <a href="#" className="footer__logo">
        Deep Prajapati
      </a>
      <ul className="permalinks">
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {isHomeActive && (
        <div className="footer__socials">
          <a href="mailto:deepakprajapatiproplus@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/deepak-prajapati123/" target="_blank" rel="noreferrer">
            <BsLinkedin />
          </a>
          <a href="https://github.com/deepakstwt" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      )}
      <div className="footer__copyright">
        <small>&copy; Deepak Prajapati. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
