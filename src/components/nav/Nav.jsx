import React, { useState, useEffect } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdTimeline } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { href: "#home", icon: <AiOutlineHome />, label: "Home" },
    { href: "#about", icon: <AiOutlineUser />, label: "About" },
    { href: "#portfolio", icon: <RiServiceLine />, label: "Projects" },
    { href: "#timeline", icon: <MdTimeline />, label: "Timeline" },
    { href: "#experience", icon: <BiBook />, label: "Skills" },
    { href: "#contact", icon: <BiMessageSquareDetail />, label: "Contact" }
  ];

  // Enhanced scroll detection for active state
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveNav(`#${sections[i]}`);
            break;
          }
        }
      }

      if (scrollPosition < 100) {
        setActiveNav("#home");
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced navigation click handler
  const handleNavClick = (href, event) => {
    event.preventDefault();
    setActiveNav(href);
    setIsMobileMenuOpen(false);

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: targetId === 'home' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.nav-mobile')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`nav-desktop ${isExpanded ? 'nav-desktop--expanded' : ''}`}>
        {/* Toggle Button */}
        <button 
          className="nav-toggle"
          onClick={toggleExpanded}
          aria-label={isExpanded ? "Collapse navigation" : "Expand navigation"}
        >
          <HiOutlineMenuAlt2 />
        </button>

        {/* Nav Items */}
        <div className="nav-items">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(item.href, e)}
            className={activeNav === item.href ? "active" : ""}
            data-tooltip={item.label}
          >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
          </a>
        ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="nav-mobile">
        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <h3>Navigation</h3>
              <button 
                className="mobile-menu-close"
                onClick={toggleMobileMenu}
                aria-label="Close navigation menu"
              >
                <HiX />
              </button>
            </div>
            
            <div className="mobile-menu-items">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className={`mobile-menu-item ${activeNav === item.href ? 'active' : ''}`}
                >
                  <span className="mobile-menu-icon">{item.icon}</span>
                  <span className="mobile-menu-label">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Tab Bar (Bottom Navigation) */}
        <div className="mobile-tab-bar">
          {navItems.slice(0, 5).map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(item.href, e)}
              className={`mobile-tab-item ${activeNav === item.href ? 'active' : ''}`}
            >
              <span className="mobile-tab-icon">{item.icon}</span>
              <span className="mobile-tab-label">{item.label}</span>
            </a>
          ))}
          <button 
            className="mobile-tab-more"
            onClick={toggleMobileMenu}
          >
            <span className="mobile-tab-icon">
              {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
            </span>
            <span className="mobile-tab-label">More</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
