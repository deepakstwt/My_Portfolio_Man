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
      className={`contact ${isVisible ? 'contact--visible' : ''}`}
      ref={sectionRef}
    >
      {/* Background Elements */}
      <div className="contact__bg">
        <div className="contact__bg-gradient"></div>
        <div className="contact__bg-grid"></div>
      </div>

      <div className="container contact__wrapper">
        {/* Section Header */}
        <div className="contact__header">
          <span className="contact__label">
            <span className="contact__label-icon">💬</span>
            Get In Touch
          </span>
          <h2 className="contact__title">
            Let's Work <span className="contact__title-gradient">Together</span>
          </h2>
          <p className="contact__subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>

        {/* Main Content */}
        <div className="contact__content">
          {/* Left Side - Contact Info */}
          <div className="contact__info">
            <div className="contact__info-header">
              <h3>Contact Information</h3>
              <p>Feel free to reach out through any of these platforms</p>
            </div>

            {/* Contact Methods */}
            <div className="contact__methods">
              {contactMethods.map((method, index) => (
                <a 
                  key={index}
                  href={method.link}
              target="_blank" 
              rel="noreferrer"
                  className="contact__method"
                  style={{ '--delay': `${index * 0.1}s`, '--accent': method.color }}
                >
                  <div className="contact__method-icon">
                    {method.icon}
                  </div>
                  <div className="contact__method-info">
                    <span className="contact__method-title">{method.title}</span>
                    <span className="contact__method-value">{method.value}</span>
                  </div>
                  <span className="contact__method-action">
                    {method.action} <BsArrowRight />
                  </span>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="contact__location">
              <HiOutlineLocationMarker />
              <span>Greater Noida, India</span>
            </div>

            {/* Availability Badge */}
            <div className="contact__availability">
              <span className="contact__availability-dot"></span>
              <span>Available for freelance & full-time opportunities</span>
          </div>
        </div>

          {/* Right Side - Contact Form */}
          <div className="contact__form-container">
          {/* Status Messages */}
          {submitStatus === 'success' && (
              <div className="contact__status contact__status--success">
                <FaCheckCircle />
              <div>
                  <h4>Message Sent!</h4>
                  <p>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
              <div className="contact__status contact__status--error">
                <FaExclamationTriangle />
              <div>
                  <h4>Failed to Send</h4>
                  <p>Please try again or contact me directly.</p>
              </div>
            </div>
          )}

            {/* Form */}
          <form ref={form} onSubmit={handleSubmit} className="contact__form">
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                    placeholder="John Doe"
                    className={`contact__input ${getFieldStatus('name')}`}
                  disabled={isSubmitting}
                />
              {touched.name && errors.name && (
                    <span className="contact__error">{errors.name}</span>
              )}
            </div>

                <div className="contact__form-group">
              <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                    placeholder="john@example.com"
                    className={`contact__input ${getFieldStatus('email')}`}
                  disabled={isSubmitting}
                />
                  {touched.email && errors.email && (
                    <span className="contact__error">{errors.email}</span>
                  )}
                </div>
            </div>

              <div className="contact__form-group">
              <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  rows="5"
                  placeholder="Tell me about your project..."
                  className={`contact__input contact__textarea ${getFieldStatus('message')}`}
                  disabled={isSubmitting}
                ></textarea>
              {touched.message && errors.message && (
                  <span className="contact__error">{errors.message}</span>
              )}
            </div>

            <button 
              type="submit" 
                className={`contact__submit ${isSubmitting ? 'contact__submit--loading' : ''}`}
                disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                    <FaSpinner className="contact__spinner" />
                  Sending...
                </>
              ) : (
                  <>
                    Send Message
                    <BsSend />
                  </>
              )}
            </button>
          </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
