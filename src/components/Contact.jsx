import React, { useState } from 'react';
import './Contact.css';
import { Mail, MapPin, Linkedin, Github, Twitter, CheckCircle2, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx8HP0C2oghWaDsq9nd_EuzXirKr109qlJSVi6rJSwOuRnWAbgEhAAxjmoY2alwrIU_/exec";

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Use URLSearchParams for cross-origin compatibility with Apps Script
      const formBody = new URLSearchParams();
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('message', formData.message);

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody,
      });

      // Since mode: 'no-cors' doesn't allow reading the response, we assume success if no error is thrown
      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Reset form

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus('error');
    }
  };
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Get In <span className="highlight">Touch</span>.</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-title">Let's build reliable software together.</h3>
            <p className="contact-description">
              Whether you need to set up an automation framework from scratch,
              optimize your CI/CD pipelines, or just want to discuss the latest in testing,
              my inbox is always open.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <Mail className="contact-icon" size={20} />
                <a href="mailto:singhsumit880@gmail.com">singhsumit880@gmail.com</a>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" size={20} />
                <span>Bangalore, India</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon mono" style={{ fontSize: '1.2rem' }}>&#9742;</span>
                <a href="tel:+919839457182">+91-9839457182</a>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/singhsumit880/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub"><Github size={20} /></a>
              <a href="https://linkedin.com/in/singhsumit880" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="https://www.instagram.com/singh_sumit_880" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram"><Instagram size={20} /></a>
            </div>
          </div>

          <div className="contact-form-container">
            {status === 'success' ? (
              <div className="success-message fade-in">
                <CheckCircle2 size={48} className="success-icon" />
                <h3 className="mono">Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="mono">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="mono">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="mono">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi, I'd like to talk about..."
                    required
                    disabled={status === 'submitting'}
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="error-message">
                    There was an error sending your message. Please try again or email me directly.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary submit-btn mono"
                  disabled={status === 'submitting'}
                >
                  <span className="bullet">&gt;</span>
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
