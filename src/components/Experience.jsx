import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Senior Quality Engineer",
      company: "Simply Vyapar Apps Private Limited",
      period: "Sept 2023 - Present",
      current: true,
      logo: `${import.meta.env.BASE_URL}vyapar.png`,
      description: "Built repeatable QA systems, automation, and validation workflows for high-impact Vyapar releases.",
      highlights: [
        "Certified multicurrency support across pricing, conversions, formatting, and edge cases; the release shipped with zero production bugs and reached approx. 8% user adoption within a month.",
        "Designed and executed 2000+ test cases across product workflows, improving release coverage across UI, API, database, and application-level validation.",
        "Owned Smart Connect quality from scope analysis to planning, test design, large dataset validation, and final release sign-off.",
        "Led manual and automation coverage for Flyy by Vyapar across login, campaigns, templates, contact imports, brands.live integration, and real-time status tracking.",
        "Architected an end-to-end testing framework using Playwright and TypeScript, reducing test execution time by 60%.",
        "Extended Playwright beyond browser testing to validate Electron desktop workflows, app state, windows, dialogs, and database-backed behavior.",
        "Built DB comparison and inspection utilities that reduced repetitive investigation work for QA, support, tech, and data teams.",
        "Mentored 4 junior QA engineers, improving testing practices and automation adoption across the team."
      ]
    },
    {
      id: 2,
      role: "Assistant System Engineer",
      company: "Tata Consultancy Services (TCS)",
      period: "Dec 2021 - Aug 2023",
      logo: `${import.meta.env.BASE_URL}tcs.png`,
      description: "Improved enterprise release readiness through structured UAT, regression testing, and API validation.",
      highlights: [
        "Delivered 7 release cycles by owning UAT and regression validation with clear test plans, defect summaries, KT documents, and lessons-learned reports.",
        "Validated APIs with Postman and REST Assured across response codes, headers, payloads, and business rules."
      ]
    },
    {
      id: 3,
      role: "Software Engineer (Trainee)",
      company: "CEDCOSS Technologies Private Limited",
      period: "Oct 2020 - Nov 2021",
      logo: `${import.meta.env.BASE_URL}cedcoss.png`,
      description: "Built a strong QA foundation across test design, execution, automation basics, and stakeholder reporting.",
      highlights: [
        "Authored 1000+ Jira test cases covering functional, UI, and regression workflows.",
        "Implemented early UI automation checks with Selenium WebDriver and Java.",
        "Coordinated UAT sessions with stakeholders to improve release readiness."
      ]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">02 - Experience</span>
          <h2>Shipping <span className="italic">release confidence</span> across products and teams.</h2>
        </div>

        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="period-block">
                <span className="period mono">{exp.period}</span>
                {exp.current && <span className="current-badge">Current</span>}
              </div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="company-info">
                    <div className="logo-wrapper">
                      <img src={exp.logo} alt={exp.company} className="company-logo" loading="lazy" />
                    </div>
                    <div>
                      <h3 className="role">{exp.role}</h3>
                      <h4 className="company highlight">{exp.company}</h4>
                    </div>
                  </div>
                </div>

                <p className="description">{exp.description}</p>

                <ul className="highlights-list">
                  {exp.highlights.map((highlight, hidx) => (
                    <li key={hidx}>
                      <span className="highlight-bullet"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
