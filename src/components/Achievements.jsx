import React from 'react';
import './Achievements.css';
import { Trophy, Award, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Star Performer",
      organization: "Simply Vyapar Apps Private Limited",
      date: "2025",
      icon: <Trophy size={24} />,
      description: "Recognized for DB Compare Utility & Exceptional contribution to the Playwright automation framework."
    },
    {
      id: 2,
      title: "Best QA Contribution",
      organization: "Tata Consultancy Services",
      date: "2022",
      icon: <Award size={24} />,
      description: "Awarded for streamlining UAT processes and reducing regression cycles."
    },
    {
      id: 3,
      title: "Zonal Level Robo Race Winner",
      organization: "Robo Race",
      date: "2018",
      icon: <Star size={24} />,
      description: "Won 1st prize in Zonal Level Robo Race."
    }
  ];

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <div className="section-header">
          <h2>Notable <span className="highlight">Achievements</span>.</h2>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="achievement-card">
              <div className="achievement-icon-wrapper">
                {achievement.icon}
              </div>
              <div className="achievement-content">
                <span className="achievement-date mono">{achievement.date}</span>
                <h3 className="achievement-title">{achievement.title}</h3>
                <h4 className="achievement-org highlight">{achievement.organization}</h4>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
