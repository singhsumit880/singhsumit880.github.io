import React from 'react';
import './About.css';
import { Bot, GitBranch, ShieldCheck, Workflow } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Workflow size={24} className="stat-icon" />,
      value: "E2E",
      label: "Automation Architecture"
    },
    {
      icon: <ShieldCheck size={24} className="stat-icon" />,
      value: "API",
      label: "Data & Contract Validation"
    },
    {
      icon: <Bot size={24} className="stat-icon" />,
      value: "AI",
      label: "QA Agent Workflows"
    },
    {
      icon: <GitBranch size={24} className="stat-icon" />,
      value: "CI",
      label: "Pipeline Quality Gates"
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <h2>About <span className="highlight">Me</span>.</h2>
        </div>

        <div className="about-content">
          <div className="about-image-container fade-in">
            <div className="about-image-wrapper">
              <img src={`${import.meta.env.BASE_URL}assets/profile.png`} alt="Sumit Singh" className="profile-image" loading="lazy" />
              <div className="profile-caption">
                <span>Sumit Singh</span>
                <small>QA Engineer & SDET</small>
              </div>
            </div>
          </div>

          <div className="about-text fade-in" style={{ animationDelay: '0.2s' }}>
            <p>
              I am a dedicated Quality Assurance Engineer and Software Development Engineer in Test (SDET)
              with a passion for breaking things gracefully. My core philosophy is that quality isn't
              an afterthought—it's an integral part of the development lifecycle.
            </p>
            <p>
              By combining analytical thinking with automated testing strategies, I help teams deliver
              robust, scalable, and flawless software. From writing comprehensive end-to-end tests to
              optimizing CI/CD pipelines, my goal is to accelerate delivery without compromising stability.
            </p>

            <div className="about-philosophy mono">
              &gt; "Quality is not an act, it is a habit."
            </div>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon-wrapper">
                  {stat.icon}
                </div>
                <div className="stat-info">
                  <h3 className="stat-value mono">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
