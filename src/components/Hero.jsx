import React from 'react';
import './Hero.css';
import { BriefcaseBusiness, Download, Github, Linkedin, Mail, Instagram, ArrowRight, MapPin } from 'lucide-react';

const Hero = ({ onOpenResume }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-copy">
            <p className="hero-kicker fade-in">QA ENGINEER / SDET</p>

            <h1 className="hero-title fade-in" style={{ animationDelay: '0.1s' }}>
              Building QA systems that make testing <span className="italic">faster</span>, smarter, and reliable.
            </h1>

            <p className="hero-intro fade-in" style={{ animationDelay: '0.16s' }}>
              QA Engineer / SDET focused on test automation, quality engineering, developer tooling, and AI-assisted testing.
            </p>

            <p className="hero-description fade-in" style={{ animationDelay: '0.2s' }}>
              I work across web, Electron desktop, Android, APIs, databases, and CI/CD - turning repetitive QA work into frameworks, utilities, and smarter validation systems.
            </p>

            <div className="hero-insight fade-in" style={{ animationDelay: '0.22s' }}>
              <span>QA instinct</span>
              <p>Most bugs hide where nobody thinks to look. That is where I like to work.</p>
            </div>

            <div className="hero-meta fade-in" style={{ animationDelay: '0.22s' }}>
              <span><MapPin size={16} /> Bangalore, India</span>
              <span><BriefcaseBusiness size={16} /> Vyapar</span>
              <span>AI-Assisted Testing</span>
            </div>

            <div className="hero-actions fade-in" style={{ animationDelay: '0.3s' }}>
              <a href="#projects" className="btn btn-primary">
                View My Work <ArrowRight size={18} />
              </a>
              <button type="button" className="btn btn-secondary" onClick={onOpenResume}>
                View Resume <Download size={18} />
              </button>
              <div className="social-links">
                <a href="https://github.com/singhsumit880/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub"><Github size={20} /></a>
                <a href="https://linkedin.com/in/singhsumit880" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><Linkedin size={20} /></a>
                <a href="https://www.instagram.com/singh_sumit_880" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="mailto:singhsumit880@gmail.com" className="social-icon" aria-label="Email"><Mail size={20} /></a>
              </div>
            </div>
          </div>

          <div className="hero-portrait fade-in" style={{ animationDelay: '0.18s' }}>
            <div className="hero-image-frame">
              <img
                src={`${import.meta.env.BASE_URL}assets/profile.png`}
                alt="Sumit Singh"
                className="hero-image"
              />
              <div className="photo-badge">
                <div className="label">Focus</div>
                <div className="value">Automation & QA</div>
              </div>
            </div>
          </div>

          <div className="hero-metrics fade-in" style={{ animationDelay: '0.25s' }} aria-label="Professional highlights">
            <div className="hero-metric">
              <span className="metric-value">5<span className="metric-plus">+</span></span>
              <span className="metric-label">Years Experience</span>
            </div>
            <div className="hero-metric">
              <span className="metric-value">20<span className="metric-plus">+</span></span>
              <span className="metric-label">Releases Certified</span>
            </div>
            <div className="hero-metric">
              <span className="metric-value">500<span className="metric-plus">+</span></span>
              <span className="metric-label">Bugs Reported</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
