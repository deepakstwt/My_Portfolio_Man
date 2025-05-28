import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";
import { BsLinkedin } from "react-icons/bs";
import { FaCheckCircle, FaExclamationTriangle, FaSpinner } from "react-icons/fa";
import emailjsConfig from './emailjs-config';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  // Real-time validation rules
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (!/^[a-zA-Z\s]+$/.test(value)) return 'Name can only contain letters and spaces';
        return '';
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        if (value.trim().length > 500) return 'Message must be less than 500 characters';
        return '';
      
      default:
        return '';
    }
  };

  // Handle input changes with real-time validation
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // Handle input blur (when user leaves field)
  const handleInputBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  // Validate entire form
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      const result = await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form.current,
        emailjsConfig.publicKey
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setTouched({});
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get field validation status
  const getFieldStatus = (fieldName) => {
    if (!touched[fieldName]) return '';
    return errors[fieldName] ? 'invalid' : 'valid';
  };

  return (
    <section id="contact">
      <h5 className="section-subtitle">GET IN TOUCH</h5>
      <h2 className="section-title">Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__card">
          <div className="contact__card-content">
            <BsLinkedin className="contact__icon" />
            <h3>LinkedIn</h3>
            <h4>Deep Prajapati</h4>
            <a 
              href="https://www.linkedin.com/in/deepak-prajapati123/" 
              target="_blank" 
              rel="noreferrer"
              className="contact__link"
            >
              Send a message
            </a>
          </div>
        </div>

        <div className="contact__form-wrapper">
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="status-message success-message">
              <FaCheckCircle className="status-icon" />
              <div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="status-message error-message">
              <FaExclamationTriangle className="status-icon" />
              <div>
                <h3>Failed to Send Message</h3>
                <p>Something went wrong. Please try again or contact me directly.</p>
              </div>
            </div>
          )}

          {/* Contact Form */}
          <form ref={form} onSubmit={handleSubmit} className="contact__form">
            <div className="form__group">
              <label htmlFor="name">Your Full Name</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  placeholder="Enter your name"
                  className={`form-input ${getFieldStatus('name')}`}
                  disabled={isSubmitting}
                />
                <div className="validation-icon">
                  {getFieldStatus('name') === 'valid' && <FaCheckCircle className="valid-icon" />}
                  {getFieldStatus('name') === 'invalid' && <FaExclamationTriangle className="invalid-icon" />}
                </div>
              </div>
              {touched.name && errors.name && (
                <span className="error-text">{errors.name}</span>
              )}
            </div>

            <div className="form__group">
              <label htmlFor="email">Your Email</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  placeholder="Enter your email"
                  className={`form-input ${getFieldStatus('email')}`}
                  disabled={isSubmitting}
                />
                <div className="validation-icon">
                  {getFieldStatus('email') === 'valid' && <FaCheckCircle className="valid-icon" />}
                  {getFieldStatus('email') === 'invalid' && <FaExclamationTriangle className="invalid-icon" />}
                </div>
              </div>
              {touched.email && errors.email && (
                <span className="error-text">{errors.email}</span>
              )}
            </div>

            <div className="form__group">
              <label htmlFor="message">Your Message</label>
              <div className="input-wrapper">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  rows="7"
                  placeholder="Write your message here..."
                  className={`form-input ${getFieldStatus('message')}`}
                  disabled={isSubmitting}
                ></textarea>
                <div className="validation-icon textarea-icon">
                  {getFieldStatus('message') === 'valid' && <FaCheckCircle className="valid-icon" />}
                  {getFieldStatus('message') === 'invalid' && <FaExclamationTriangle className="invalid-icon" />}
                </div>
              </div>
              {touched.message && errors.message && (
                <span className="error-text">{errors.message}</span>
              )}
              <div className="character-count">
                {formData.message.length}/500 characters
              </div>
            </div>

            <button 
              type="submit" 
              className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting || Object.keys(errors).some(key => errors[key])}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="spinner" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
