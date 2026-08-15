import React from 'react';
import './About.css';
import { BriefcaseBusiness, Database, MapPin, Workflow } from 'lucide-react';

const About = () => {
  const quickFacts = [
    {
      label: "Current Role",
      value: "Senior Quality Engineer at Vyapar",
      icon: <BriefcaseBusiness size={20} />
    },
    {
      label: "Location",
      value: "Bangalore, India",
      icon: <MapPin size={20} />
    },
    {
      label: "Core Focus",
      value: "Automation, QA tooling, release confidence",
      icon: <Workflow size={20} />
    },
    {
      label: "Validation Layer",
      value: "UI, API, database, Electron, Android",
      icon: <Database size={20} />
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">01 - About</span>
          <h2>I do not just write test cases. I build <span className="italic">systems</span> that improve testing.</h2>
        </div>

        <div className="about-content">
          <div className="about-text fade-in" style={{ animationDelay: '0.2s' }}>
            <p>
              I work at the intersection of software testing, automation, developer tools, databases, and AI.
              My focus is making QA faster, more repeatable, and more engineering-driven.
            </p>
            <p>
              I currently work at Vyapar as a Senior Quality Engineer, across product testing, Playwright automation, Electron desktop workflows,
              database validation, internal QA tooling, and AI-powered approaches for complex validation work.
            </p>
            <p>
              My default question is simple: if a problem repeats, can we build a tool or automation system that
              solves it permanently?
            </p>

            <div className="about-tagline">
              "Quality is not an act, it is a habit."
            </div>

          </div>

          <div className="about-side">
            <div className="quick-facts" aria-label="Quick facts">
              <div className="about-panel-heading">
                <span className="section-eyebrow">Quick Facts</span>
              </div>
              {quickFacts.map((fact) => (
                <div key={fact.label} className="fact-row">
                  <div className="fact-icon">
                    {fact.icon}
                  </div>
                  <div>
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
