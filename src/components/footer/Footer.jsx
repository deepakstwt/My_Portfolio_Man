import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub, BsArrowUp, BsHeart } from "react-icons/bs";
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
    <footer className="footer">
      {/* Top Gradient Line */}
      <div className="footer__gradient-line"></div>

      <div className="container footer__container">
        {/* Main Footer Content */}
        <div className="footer__main">
          {/* Brand Section */}
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <span className="footer__logo-text">Deepak</span>
              <span className="footer__logo-dot">.</span>
            </a>
            <p className="footer__tagline">
              Software Developer crafting elegant digital solutions with iOS & Full Stack expertise.
            </p>
            {/* Social Links */}
        <div className="footer__socials">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className="footer__social"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__links">
            <h4 className="footer__links-title">Quick Links</h4>
            <nav className="footer__nav">
              {navLinks.map((link, index) => (
                <a key={index} href={link.href} className="footer__nav-link">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="footer__contact">
            <h4 className="footer__links-title">Get In Touch</h4>
            <div className="footer__contact-items">
              <a href="mailto:deepakprajapatiproplus@gmail.com" className="footer__contact-item">
                <HiOutlineMail />
                <span>deepakprajapatiproplus@gmail.com</span>
              </a>
              <p className="footer__contact-item">
                <span>📍</span>
                <span>Greater Noida, India</span>
              </p>
            </div>
            {/* Status Badge */}
            <div className="footer__status">
              <span className="footer__status-dot"></span>
              <span>Available for opportunities</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider"></div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Deepak Prajapati. Crafted with <BsHeart className="footer__heart" /> in India
          </p>
          
          {/* Back to Top */}
          <button 
            className="footer__back-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <BsArrowUp />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
