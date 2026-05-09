import React, { useEffect, useState } from 'react';
import './ThemeSelector.css';
import { Moon, Sun } from 'lucide-react';

const themes = [
  {
    name: 'Crimson',
    primary: '#ef0d33',
    secondary: '#ff6b82',
    glow: 'rgba(239, 13, 51, 0.34)',
    faded: 'rgba(239, 13, 51, 0.11)',
  },
  {
    name: 'Cobalt',
    primary: '#3b82f6',
    secondary: '#67e8f9',
    glow: 'rgba(59, 130, 246, 0.34)',
    faded: 'rgba(59, 130, 246, 0.11)',
  },
  {
    name: 'Emerald',
    primary: '#10b981',
    secondary: '#7dd3fc',
    glow: 'rgba(16, 185, 129, 0.34)',
    faded: 'rgba(16, 185, 129, 0.11)',
  },
  {
    name: 'Amber',
    primary: '#f59e0b',
    secondary: '#fb7185',
    glow: 'rgba(245, 158, 11, 0.34)',
    faded: 'rgba(245, 158, 11, 0.12)',
  },
  {
    name: 'Violet',
    primary: '#8b5cf6',
    secondary: '#f472b6',
    glow: 'rgba(139, 92, 246, 0.34)',
    faded: 'rgba(139, 92, 246, 0.11)',
  },
];

const rgbaWithAlpha = (rgba, alpha) => rgba.replace(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)/, `rgba($1, $2, $3, ${alpha})`);

const applyTheme = (theme, mode = 'dark') => {
  const root = document.documentElement;
  const isLight = mode === 'light';
  const glow = isLight ? rgbaWithAlpha(theme.glow, 0.22) : theme.glow;
  const faded = isLight ? rgbaWithAlpha(theme.faded, 0.08) : theme.faded;

  root.style.setProperty('--accent-color', theme.primary);
  root.style.setProperty('--accent-secondary', theme.secondary);
  root.style.setProperty('--accent-color-glow', glow);
  root.style.setProperty('--accent-color-faded', faded);
  root.style.setProperty('--accent-primary-container', theme.secondary);
  root.style.setProperty('--gradient-primary', `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`);
  root.style.setProperty('--gradient-text', `linear-gradient(135deg, var(--text-primary) 0%, ${theme.primary} 100%)`);
  root.style.setProperty('--gradient-text-qa', `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 55%, var(--text-primary) 100%)`);
  root.style.setProperty('--gradient-text-vibe', `linear-gradient(135deg, var(--text-primary) 0%, ${theme.secondary} 100%)`);
};

const ThemeSelector = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    const savedMode = localStorage.getItem('qa-portfolio-mode');
    const mode = savedMode === 'light' ? 'light' : 'dark';
    window.__qaPortfolioTheme = randomTheme;
    applyTheme(randomTheme, mode);

    if (savedMode === 'light') {
      document.documentElement.classList.add('light-mode');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.remove('light-mode');
      setIsDarkMode(true);
    }
  }, []);

  const toggleMode = () => {
    const nextIsDark = !isDarkMode;
    setIsDarkMode(nextIsDark);

    if (nextIsDark) {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('qa-portfolio-mode', 'dark');
      applyTheme(window.__qaPortfolioTheme || themes[0], 'dark');
    } else {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('qa-portfolio-mode', 'light');
      applyTheme(window.__qaPortfolioTheme || themes[0], 'light');
    }
  };

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
