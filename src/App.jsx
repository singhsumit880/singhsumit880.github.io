import React, { Suspense, lazy, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

// Lazy load components that are below the fold
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Projects = lazy(() => import('./components/Projects'));
const Achievements = lazy(() => import('./components/Achievements'));
const Contact = lazy(() => import('./components/Contact'));
const ThemeToggle = lazy(() => import('./components/ThemeSelector'));

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    // Set initial state and observe
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('.section');
      sections.forEach((section) => {
        section.classList.add('reveal-hidden');
        observer.observe(section);
      });
    }, 100); // small delay to ensure components are mounted

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
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
      <footer className="footer mono">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} QA.Engineer. &gt; Built with React ⚛️ | Enhanced with AI 🤖 | Tested with curiosity 🧪.</p>
        </div>
      </footer>
      <Suspense fallback={null}>
        <ThemeToggle />
      </Suspense>
    </div>
  );
}

export default App;
