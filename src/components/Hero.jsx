import React, { useState, useEffect } from 'react';
import './Hero.css';
import { Github, Linkedin, Mail, Instagram, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const titles = ["QA Engineer.", "Vibe Coder."];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTypingSpeed(2000); // Wait before deleting
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(300); // Pause before re-typing
      }
    };

    let timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge fade-in">
            <span>Welcome To My World</span>
          </div>

          <h1 className="hero-title fade-in" style={{ animationDelay: '0.1s' }}>
            Hi, I'm <span className="text-gradient">Sumit</span>
            <br />
            <span className={loopNum % 2 === 0 ? "text-gradient-qa" : "text-gradient-vibe"}>
              {text}
            </span>
            <span className="cursor-blink">|</span>
          </h1>

          <p className="hero-description fade-in" style={{ animationDelay: '0.2s' }}>
            I specialize in building robust test automation frameworks, ensuring software quality, and streamlining CI/CD pipelines. Passionate about shifting left and delivering flawless user experiences.
          </p>

          <div className="hero-actions fade-in" style={{ animationDelay: '0.3s' }}>
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <div className="social-links">
              <a href="https://github.com/singhsumit880/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub"><Github size={20} /></a>
              <a href="https://linkedin.com/in/singhsumit880" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="https://www.instagram.com/singh_sumit_880" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="mailto:singhsumit880@gmail.com" className="social-icon" aria-label="Email"><Mail size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="hero-image-container">
             <div className="glow-circle"></div>
             <div className="avatar-placeholder">
               <span className="text-gradient">S</span>
             </div>
          </div>
        </div>
      </div>

      {/* Abstract background elements */}
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
    </section>
  );
};

export default Hero;
