import React, { useEffect, useState } from 'react';
import './ThemeSelector.css';
import { Moon, Sun } from 'lucide-react';

const applyMode = (mode) => {
  document.documentElement.classList.toggle('dark-mode', mode === 'dark');
  document.documentElement.classList.toggle('light-mode', mode === 'light');
};

const ThemeSelector = () => {
  const [mode, setMode] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem('qa-portfolio-mode') === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    applyMode(mode);
  }, [mode]);

  const toggleMode = () => {
    const nextMode = mode === 'dark' ? 'light' : 'dark';
    setMode(nextMode);
    localStorage.setItem('qa-portfolio-mode', nextMode);
    applyMode(nextMode);
  };

  const isDarkMode = mode === 'dark';

  return (
    <div className="theme-toggle-container">
      <button
        className="theme-toggle-btn"
        onClick={toggleMode}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDarkMode ? 'Light mode' : 'Dark mode'}
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
};

export default ThemeSelector;
