import React, { useState, useEffect } from 'react';
import './ThemeSelector.css';
import { Sun, Moon } from 'lucide-react';

export const themes = [
  { name: 'Neon Green', color: '#00ff88', glow: 'rgba(0, 255, 136, 0.2)', faded: 'rgba(0, 255, 136, 0.1)' },
  { name: 'Cyber Blue', color: '#00f0ff', glow: 'rgba(0, 240, 255, 0.2)', faded: 'rgba(0, 240, 255, 0.1)' },
  { name: 'Hacker Purple', color: '#b026ff', glow: 'rgba(176, 38, 255, 0.2)', faded: 'rgba(176, 38, 255, 0.1)' },
  { name: 'Sunset Orange', color: '#ff6b00', glow: 'rgba(255, 107, 0, 0.2)', faded: 'rgba(255, 107, 0, 0.1)' },
  { name: 'Crimson Red', color: '#ff003c', glow: 'rgba(255, 0, 60, 0.2)', faded: 'rgba(255, 0, 60, 0.1)' },
];

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // 1. Apply Random Accent Color on every refresh
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    const root = document.documentElement;
    root.style.setProperty('--accent-color', randomTheme.color);
    root.style.setProperty('--accent-color-glow', randomTheme.glow);
    root.style.setProperty('--accent-color-faded', randomTheme.faded);

    // 2. Clear title or set it to the random theme name in console for curiosity
    console.log(`%c Theme: ${randomTheme.name} `, `background: ${randomTheme.color}; color: #000; font-weight: bold;`);

    // 3. Load saved Dark/Light preference
    const savedMode = localStorage.getItem('qa-portfolio-mode');
    if (savedMode === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.add('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('qa-portfolio-mode', 'dark');
    } else {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('qa-portfolio-mode', 'light');
    }
  };

  return (
    <div className="theme-toggle-container">
      <button 
        className="theme-toggle-btn" 
        onClick={toggleTheme}
        aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        title={isDarkMode ? "Light Mode" : "Dark Mode"}
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
};

export default ThemeToggle;

