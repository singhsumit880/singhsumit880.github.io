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
import ThemeSelector from './components/ThemeSelector';
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
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <a href="#home" className="footer-logo">&lt;QA.Engineer/&gt;</a>
            <p>&copy; {new Date().getFullYear()} Designed, built, and tested with a QA-first mindset.</p>
            <span>Bangalore, India</span>
          </div>
        </div>
      </footer>
      <ThemeSelector />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

export default App;
