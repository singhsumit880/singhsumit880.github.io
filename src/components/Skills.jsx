import React from 'react';
import './Skills.css';
import { Settings, ShieldCheck, Cpu, Code2, Database, TerminalSquare } from 'lucide-react';

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
                    <span className="bullet">&gt;</span> {skill}
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
