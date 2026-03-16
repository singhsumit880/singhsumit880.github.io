import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Senior Quality Engineer",
      company: "Simply Vyapar Apps Private Limited",
      period: "Sept 2023 - Present",
      logo: "/vyapar.png",
      description: "Leading verification activities and test automation.",
      highlights: [
        "Architected an end-to-end testing framework using Playwright and TypeScript, reducing test execution time by 60%.",
        "Implemented continuous testing in GitHub Actions, catching 45% more bugs before staging deployment.",
        "Mentored 4 junior QA engineers in test automation best practices.",
        "Created an API testing suite with Postman and Newman for 50+ microservices."
      ]
    },
    {
      id: 2,
      role: "Assistant System Engineer",
      company: "Tata Consultancy Services (TCS)",
      period: "Dec 2021 - Aug 2023",
      logo: "/tcs.png",
      description: "Delivering solid releases with UAT and regression testing.",
      highlights: [
        "Created various project specific valuable assets such as knowledge transfer documents, test plan, defect summary reports and lessons learnt documents, successfully delivering 7 releases involving UAT and regression testing.",
        "Conducted API testing using Postman and REST Assured, validating response codes, headers, and payloads."
      ]
    },
    {
      id: 3,
      role: "Software Engineer (Trainee)",
      company: "CEDCOSS Technologies Private Limited",
      period: "Oct 2020 - Nov 2021",
      logo: "/cedcoss.png",
      description: "QA documentation, testing, and stakeholder reporting.",
      highlights: [
        "Authored over 1000 detailed test cases in Jira.",
        "Started implementing basic automated UI tests with Selenium WebDriver (Java).",
        "Coordinated UAT sessions with key stakeholders before major releases."
      ]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <h2>Engineering <span className="highlight">History</span>.</h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>

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
                  <span className="period mono">{exp.period}</span>
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
