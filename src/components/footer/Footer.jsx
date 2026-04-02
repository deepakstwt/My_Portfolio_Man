import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub, BsArrowUp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#experience" },
    { name: "Projects", href: "#portfolio" },
    { name: "Timeline", href: "#timeline" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <HiOutlineMail />, href: "mailto:deepakprajapatiproplus@gmail.com", label: "Email" },
    { icon: <BsLinkedin />, href: "https://www.linkedin.com/in/deepak-prajapati123/", label: "LinkedIn" },
    { icon: <BsGithub />, href: "https://github.com/deepakstwt", label: "GitHub" },
    { icon: <FaXTwitter />, href: "https://twitter.com/deepakstwt", label: "Twitter" },
  ];

  return (
    <footer className="footer-void">
      {/* Perspective Background Elements */}
      <div className="footer-void__bg">
        <div className="footer-void__grid"></div>
        <div className="footer-void__haze"></div>
        <div className="footer-void__name-watermark">DEEPAK</div>
      </div>

      <div className="container footer-void__wrapper">
        {/* Main Interface Hub */}
        <div className="footer-void__content">
          {/* Brand & Mission Terminal */}
          <div className="footer-void__brand">
            <div className="footer-void__logo-wrap">
              <a href="#home" className="footer-void__logo">
                DEEPAK<span className="footer-void__logo-dot">.</span>
              </a>
            </div>
            <p className="footer-void__mission">
              Synthesizing complex engineering with high-impact creative vision. 
              Architecting the next generation of digital tools since 2018.
            </p>
            
            {/* Holographic Nav Link */}
            <div className="footer-void__status-terminal">
              <div className="footer-void__status-scan"></div>
              <div className="footer-void__status-inner">
                <span className="footer-void__status-dot"></span>
                <span className="footer-void__status-text">COMM_LINK: OPERATIONAL</span>
                <span className="footer-void__status-ident">SYS_REF: IND-91</span>
              </div>
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="footer-void__matrix">
            <div className="footer-void__nav-group">
              <span className="footer-void__nav-label">Direct Nav</span>
              <nav className="footer-void__nav">
                {navLinks.map((link, index) => (
                  <a key={index} href={link.href} className="footer-void__nav-link">
                    <span className="footer-void__nav-idx">0{index + 1}</span>
                    <span className="footer-void__nav-name">{link.name}</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="footer-void__nav-group">
              <span className="footer-void__nav-label">Connection Hub</span>
              <div className="footer-void__socials">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noreferrer"
                    className="footer-void__social"
                    aria-label={social.label}
                  >
                    <span className="footer-void__social-icon">{social.icon}</span>
                    <span className="footer-void__social-label">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Bottom Bar */}
        <div className="footer-void__bottom">
          <div className="footer-void__meta">
            <span className="footer-void__meta-ident">DEV_ENV: MAC_MACHO_OS</span>
            <span className="footer-void__meta-dot">•</span>
            <span className="footer-void__meta-loc">GREATER_NOIDA // 28.47°N 77.50°E</span>
          </div>

          <div className="footer-void__copyright">
            <span className="footer-void__copy-year">©{currentYear}</span>
            <span className="footer-void__copy-line"></span>
            <span className="footer-void__copy-text">DEEPAK PRAJAPATI</span>
          </div>

          <button 
            className="footer-void__back-top"
            onClick={scrollToTop}
            aria-label="Re-Initialize"
          >
            <div className="footer-void__bt-inner">
              <BsArrowUp className="footer-void__bt-icon" />
              <span className="footer-void__bt-text">TOP_OF_STACK</span>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
