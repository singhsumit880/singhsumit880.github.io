import React from 'react';
import './Skills.css';
import { Code2, Cpu, Database, Layers, SearchCheck, Settings, Smartphone, TerminalSquare, Wrench } from 'lucide-react';

const Skills = () => {
  const qaTableGroups = [
    {
      title: "Testing Types",
      icon: <SearchCheck size={20} />,
      items: [
        "Manual Testing",
        "Functional",
        "Regression",
        "Exploratory",
        "API Testing",
        "Database Testing",
        "Cross-Browser",
        "UI/UX",
        "Responsive",
        "Security",
        "Electron Testing",
        "AI Driven Testing"
      ]
    },
    {
      title: "Automation Systems",
      icon: <Settings size={20} />,
      items: [
        "Playwright",
        "TypeScript",
        "Page Object Model",
        "Parallel Execution",
        "Custom Reporting",
        "CI/CD Integration"
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: <Code2 size={20} />,
      items: [
        "Jira",
        "Chrome DevTools",
        "Git",
        "GitHub",
        "TestNG",
        "JUnit",
        "Cucumber"
      ]
    },
    {
      title: "API, Performance & Security",
      icon: <Cpu size={20} />,
      items: [
        "Postman",
        "REST Assured",
        "JMeter",
        "Burp Suite",
        "Contract Validation",
        "Load Testing"
      ]
    },
    {
      title: "Languages",
      icon: <Database size={20} />,
      items: [
        "Python",
        "TypeScript",
        "JavaScript",
        "Java",
        "SQL"
      ]
    },
    {
      title: "DevOps / CI/CD",
      icon: <TerminalSquare size={20} />,
      items: [
        "Jenkins",
        "GitHub Actions",
        "Docker",
        "AWS",
        "CI/CD Basics"
      ]
    },
    {
      title: "QA Tooling",
      icon: <Wrench size={20} />,
      items: [
        "DB Compare",
        "DB Inspection",
        "Excel Compare",
        "Test Utilities",
        "Validation Helpers",
        "Bug Reports"
      ]
    },
    {
      title: "Methodologies",
      icon: <Layers size={20} />,
      items: [
        "Agile",
        "Scrum",
        "SDLC",
        "STLC",
        "Test Design",
        "Defect Mgmt",
        "QA/QC"
      ]
    },
    {
      title: "Domains",
      icon: <Smartphone size={20} />,
      items: [
        "FinTech",
        "BFSI",
        "E-Commerce",
        "WordPress",
        "WooCommerce",
        "Retail / Inventory"
      ]
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">03 - Technical Arsenal</span>
          <h2>Everything I bring to the <span className="italic">QA table</span>.</h2>
        </div>

        <div className="qa-table-grid">
          {qaTableGroups.map((group) => (
            <div key={group.title} className="qa-table-card">
              <div className="qa-table-heading">
                <span className="skill-icon">{group.icon}</span>
                <h3>{group.title}</h3>
              </div>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
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
