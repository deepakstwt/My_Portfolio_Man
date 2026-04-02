import React, { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";
import { BsLinkedin, BsGithub, BsArrowRight, BsSend } from "react-icons/bs";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaCheckCircle, FaExclamationTriangle, FaSpinner } from "react-icons/fa";
import emailjsConfig from './emailjs-config';

const Contact = () => {
  const form = useRef();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleInputBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_name: 'Deepak Prajapati'
      };

      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setTouched({});
      setTimeout(() => setSubmitStatus(null), 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldStatus = (fieldName) => {
    if (!touched[fieldName]) return '';
    return errors[fieldName] ? 'invalid' : 'valid';
  };

  const contactMethods = [
    {
      icon: <HiOutlineMail />,
      title: "Email",
      value: "deepakprajapatiproplus@gmail.com",
      link: "mailto:deepakprajapatiproplus@gmail.com",
      action: "Send Email",
      color: "#6366f1"
    },
    {
      icon: <BsLinkedin />,
      title: "LinkedIn",
      value: "Deepak Prajapati",
      link: "https://www.linkedin.com/in/deepak-prajapati123/",
      action: "Connect",
      color: "#0077b5"
    },
    {
      icon: <BsGithub />,
      title: "GitHub",
      value: "@deepakstwt",
      link: "https://github.com/deepakstwt",
      action: "Follow",
      color: "#333"
    }
  ];

  return (
    <section 
      id="contact" 
      className={`contact-hub ${isVisible ? 'contact-hub--visible' : ''}`}
      ref={sectionRef}
    >
      {/* Background Elements */}
      <div className="contact-hub__bg">
        <div className="contact-hub__void">
          <div className="contact-hub__grid"></div>
        </div>
        <div className="contact-hub__particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="contact-hub__shard"></div>
          ))}
        </div>
      </div>

      <div className="container contact-hub__wrapper">
        {/* Section Header */}
        <div className="contact-hub__header">
          <div className="contact-hub__label">
            <span className="contact-hub__label-tag">Communication Link</span>
            <span className="contact-hub__label-line"></span>
          </div>
          <h2 className="contact-hub__title">
            Let's Architect <span className="contact-hub__title-gradient">Together</span>
          </h2>
          <p className="contact-hub__subtitle">
            Initiate a high-performance collaboration. My systems are operational and ready for your project directives.
          </p>
        </div>

        {/* Main Content Hub */}
        <div className="contact-hub__content">
          {/* Animated Core Pilot (The 'Cartoon' / Technical Character) */}
          <div className="contact-hub__pilot-wrap">
            <div className="contact-hub__pilot">
              <div className="contact-hub__pilot-head">
                <div className="contact-hub__pilot-visor">
                  <div className="contact-hub__pilot-eye"></div>
                  <div className="contact-hub__pilot-eye"></div>
                </div>
              </div>
              <div className="contact-hub__pilot-body">
                <div className="contact-hub__pilot-core"></div>
              </div>
              <div className="contact-hub__pilot-signals">
                <div className="contact-hub__signal"></div>
                <div className="contact-hub__signal"></div>
                <div className="contact-hub__signal"></div>
              </div>
            </div>
            <div className="contact-hub__pilot-stats">
              <span className="contact-hub__stat">ACT_MODE: COMM_READY</span>
              <span className="contact-hub__stat">LOC: 28.47°N 77.50°E</span>
            </div>
          </div>

          {/* Contact Module (The 3D Card) */}
          <div className="contact-hub__module">
            {/* Contact Methods (Quick Links) */}
            <div className="contact-hub__sidebar">
              {contactMethods.map((method, index) => (
                <a 
                  key={index}
                  href={method.link}
                  target="_blank" 
                  rel="noreferrer"
                  className="contact-hub__method"
                  style={{ '--delay': `${index * 0.1}s`, '--accent': method.color }}
                  title={method.title}
                >
                  <span className="contact-hub__method-icon">{method.icon}</span>
                </a>
              ))}
            </div>

            {/* Form Interface */}
            <div className="contact-hub__form-wrap">
              {submitStatus && (
                <div className={`contact-hub__status contact-hub__status--${submitStatus}`}>
                  <div className="contact-hub__status-icon">
                    {submitStatus === 'success' ? <FaCheckCircle /> : <FaExclamationTriangle />}
                  </div>
                  <div className="contact-hub__status-text">
                    <h4>{submitStatus === 'success' ? 'Transmission Successful' : 'Transmission Failure'}</h4>
                    <p>{submitStatus === 'success' ? 'Your data packet has been received.' : 'Packet loss detected. Please retry.'}</p>
                  </div>
                </div>
              )}

              <form ref={form} onSubmit={handleSubmit} className="contact-hub__form">
                <div className="contact-hub__form-grid">
                  <div className="contact-hub__form-group">
                    <label className="contact-hub__bp-code">USER_ID</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      placeholder="Ident Name"
                      className={`contact-hub__input ${getFieldStatus('name')}`}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="contact-hub__form-group">
                    <label className="contact-hub__bp-code">COMM_CHANNEL</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      placeholder="Access Email"
                      className={`contact-hub__input ${getFieldStatus('email')}`}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="contact-hub__form-group">
                  <label className="contact-hub__bp-code">TRANS_DATA</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    rows="4"
                    placeholder="Enter project directives..."
                    className={`contact-hub__input contact-hub__textarea ${getFieldStatus('message')}`}
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`contact-hub__submit ${isSubmitting ? 'contact-hub__submit--loading' : ''}`}
                  disabled={isSubmitting}
                >
                  <div className="contact-hub__submit-inner">
                    {isSubmitting ? (
                      <FaSpinner className="contact-hub__spinner" />
                    ) : (
                      <>
                        <span className="contact-hub__submit-text">Launch Transmission</span>
                        <BsSend className="contact-hub__submit-icon" />
                      </>
                    )}
                  </div>
                  <div className="contact-hub__submit-glow"></div>
                </button>
              </form>
            </div>

            {/* Blueprint Decorative Accents */}
            <div className="contact-hub__bp-accents">
              <div className="contact-hub__bp-corner"></div>
              <div className="contact-hub__bp-corner"></div>
              <div className="contact-hub__bp-corner"></div>
              <div className="contact-hub__bp-corner"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
