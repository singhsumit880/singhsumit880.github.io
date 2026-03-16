import React from 'react';
import './Education.css';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      institution: "Dr. A.P.J. Abdul Kalam Technical University",
      period: "2016 - 2020",
      grade: "8.1 CGPA",
      details: "Focused on Networking, Microprocessors, Software Engineering, Data Structures, and Quality Assurance."
    }
    // Add more if needed
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <h2>Academic <span className="highlight">Foundation</span>.</h2>
        </div>

        <div className="education-grid">
          {education.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="edu-icon-wrapper">
                <GraduationCap size={40} className="edu-icon" />
              </div>
              <div className="edu-content">
                <div className="edu-header">
                  <h3 className="degree">{edu.degree}</h3>
                  <span className="period mono">{edu.period}</span>
                </div>
                <h4 className="institution highlight">{edu.institution}</h4>
                <p className="grade mono">{edu.grade}</p>
                <p className="details">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
