import React, { useEffect, useState } from 'react';
import './Hero.css';
import { Terminal, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "Breaking code so users don't have to.";

  useEffect(() => {
    if (isTyping && text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 75); // Slightly slower for readability and performance
      return () => clearTimeout(timeout);
    } else if (isTyping && text.length === fullText.length) {
      const timeout = setTimeout(() => setIsTyping(false), 500); // Pause before blinking
      return () => clearTimeout(timeout);
    }
  }, [text, isTyping, fullText]);

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="terminal-header mono">
            <span className="terminal-icon"><Terminal size={16} /></span>
            <span className="terminal-title">sumit@qa_engineer: ~</span>
          </div>

          <h1 className="hero-title fade-in">
            Hi, I'm <span className="highlight">Sumit</span>.
          </h1>

          <h2 className="hero-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
            QA Engineer & SDET
          </h2>

          <div className="terminal-body mono fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="prompt">$&gt;</span> {text}
            <span className={`cursor ${!isTyping ? 'blink' : ''}`}>_</span>
          </div>

          <p className="hero-description fade-in" style={{ animationDelay: '0.6s' }}>
            I specialize in building robust test automation frameworks,
            ensuring software quality, and streamlining CI/CD pipelines.
            Passionate about shifting left and delivering flawless user experiences.
          </p>

          <div className="hero-actions fade-in" style={{ animationDelay: '0.8s' }}>
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="https://github.com/singhsumit880/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Visit my GitHub profile"><Github size={24} /></a>
            <a href="https://linkedin.com/in/singhsumit880" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Connect with me on LinkedIn"><Linkedin size={24} /></a>
            <a href="https://www.instagram.com/singh_sumit_880" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Follow me on Instagram"><Instagram size={24} /></a>
            <a href="mailto:singhsumit880@gmail.com" className="social-link" aria-label="Send me an email"><Mail size={24} /></a>
          </div>
        </div>
      </div>

      {/* Abstract background elements */}
      <div className="bg-element globe"></div>
      <div className="bg-element lines"></div>
    </section>
  );
};

export default Hero;
