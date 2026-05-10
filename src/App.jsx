import React, { Suspense, lazy, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResumeModal from './components/ResumeModal';
import './App.css';

// Lazy load components that are below the fold
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Projects = lazy(() => import('./components/Projects'));
const Achievements = lazy(() => import('./components/Achievements'));
const Contact = lazy(() => import('./components/Contact'));
const ThemeSelector = lazy(() => import('./components/ThemeSelector'));

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
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Achievements />
          <Contact />
        </Suspense>
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
      <Suspense fallback={null}>
        <ThemeSelector />
      </Suspense>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

export default App;
