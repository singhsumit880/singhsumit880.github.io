import React from 'react';
import './Skills.css';
import { Code2, Cpu, Database, Settings, ShieldCheck, TerminalSquare } from 'lucide-react';

const simpleIcon = (slug, color) => `https://cdn.simpleicons.org/${slug}/${color}`;
const devIcon = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;

const skillMeta = {
  "Selenium WebDriver": { icon: simpleIcon('selenium', '43B02A') },
  "Appium": { icon: simpleIcon('appium', 'EE376D') },
  "Playwright": { icon: devIcon('playwright/playwright-original.svg') },
  "TestNG": { label: 'TNG' },
  "JUnit": { icon: simpleIcon('junit5', '25A162') },
  "Cucumber": { icon: simpleIcon('cucumber', '23D96C') },
  "Postman": { icon: simpleIcon('postman', 'FF6C37') },
  "REST Assured": { label: 'RA' },
  "JMeter": { icon: simpleIcon('apachejmeter', 'D22128') },
  "Burp Suite": { icon: simpleIcon('burpsuite', 'FF6633') },
  "Java": { icon: simpleIcon('openjdk', '000000') },
  "Python": { icon: simpleIcon('python', '3776AB') },
  "JavaScript": { icon: simpleIcon('javascript', 'F7DF1E') },
  "TypeScript": { icon: simpleIcon('typescript', '3178C6') },
  "SQL": { label: 'SQL' },
  "Jenkins": { icon: simpleIcon('jenkins', 'D24939') },
  "GitHub Actions": { icon: simpleIcon('githubactions', '2088FF') },
  "Docker": { icon: simpleIcon('docker', '2496ED') },
  "AWS": { icon: devIcon('amazonwebservices/amazonwebservices-original-wordmark.svg') },
  "MySQL": { icon: simpleIcon('mysql', '4479A1') },
  "MongoDB": { icon: simpleIcon('mongodb', '47A248') },
  "Git": { icon: simpleIcon('git', 'F05032') },
  "GitHub": { icon: simpleIcon('github', '181717') },
};

const SkillIcon = ({ skill }) => {
  const meta = skillMeta[skill];

  if (meta?.icon) {
    return (
      <span className="skill-item-icon" aria-hidden="true">
        <img src={meta.icon} alt="" loading="lazy" />
      </span>
    );
  }

  return (
    <span className="skill-item-icon skill-item-text-icon" aria-hidden="true">
      {meta?.label || skill.slice(0, 2).toUpperCase()}
    </span>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Test Automation",
      icon: <Settings size={20} />,
      skills: ["Selenium WebDriver", "Appium", "Playwright"]
    },
    {
      title: "Frameworks & Tools",
      icon: <ShieldCheck size={20} />,
      skills: ["TestNG", "JUnit", "Cucumber"]
    },
    {
      title: "API & Performance",
      icon: <Cpu size={20} />,
      skills: ["Postman", "REST Assured", "JMeter", "Burp Suite"]
    },
    {
      title: "Languages",
      icon: <Code2 size={20} />,
      skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"]
    },
    {
      title: "CI/CD & DevOps",
      icon: <TerminalSquare size={20} />,
      skills: ["Jenkins", "GitHub Actions", "Docker", "AWS"]
    },
    {
      title: "Database & Others",
      icon: <Database size={20} />,
      skills: ["MySQL", "MongoDB", "Git", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <h2>Technical <span className="highlight">Arsenal</span>.</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-card">
              <div className="skill-category-header">
                <div className="skill-icon">{category.icon}</div>
                <h3 className="skill-title">{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, kidx) => (
                  <li key={kidx} className="skill-item mono">
                    <SkillIcon skill={skill} />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
