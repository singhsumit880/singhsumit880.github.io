import React from 'react';
import './About.css';
import { Target, Search, Zap, CheckCircle2 } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Target size={24} className="stat-icon" />,
      value: "5+",
      label: "Years Experience"
    },
    {
      icon: <Search size={24} className="stat-icon" />,
      value: "500+",
      label: "Bugs Prevented"
    },
    {
      icon: <CheckCircle2 size={24} className="stat-icon" />,
      value: "20+",
      label: "Releases Certified"
    },
    {
      icon: <Zap size={24} className="stat-icon" />,
      value: "99%",
      label: "Test Coverage"
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
              <img src="/assets/profile.png" alt="Sumit" className="profile-image" loading="lazy" />
              <div className="image-backdrop"></div>
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
