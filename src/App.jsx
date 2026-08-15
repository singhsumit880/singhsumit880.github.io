import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResumeModal from './components/ResumeModal';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import FollowingDot from './components/FollowingDot';
import './App.css';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('.section');
      sections.forEach((section) => {
        section.classList.add('reveal-hidden');
        observer.observe(section);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app">
      <FollowingDot />
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <a href="#hero" className="footer-logo">Sumit Singh</a>
            <p>&copy; {new Date().getFullYear()} QA Engineer · SDET</p>
            <span>Bangalore, India</span>
          </div>
        </div>
      </footer>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

export default App;
