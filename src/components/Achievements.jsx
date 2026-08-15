import React, { useState } from 'react';
import './Achievements.css';
import { Trophy, Award, Star, Quote } from 'lucide-react';

const Achievements = () => {
  const [expandedAppreciations, setExpandedAppreciations] = useState({});

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

  const appreciations = [
    {
      title: "Multicurrency Support",
      recognizedBy: "Himanshu Saraswat, Engineering Manager",
      theme: "Zero Production Bugs",
      quote: `Huge appreciation for the Sumit on Multicurrency Support! :currency_exchange: This feature had deep, complex impact - pricing, conversions, formatting, edge cases galore - and it needed rigorous testing to get right. You caught what mattered, before it ever reached users.
Result? Zero production bugs since launch. :raised_hands: That's the mark of sharp, thorough testing and real attention to detail. Thank you for holding the bar high - amazing work! :rocket::clap:`
    },
    {
      title: "Smart Connect Quality Ownership",
      recognizedBy: "Manohar Mahapatra",
      theme: "Ownership / Impact Testing",
      quote: `Sumit has been instrumental in ensuring the quality of Smart Connect, showing strong ownership from understanding the scope to creating high-level plans and detailed test cases. His collaboration with Jithin enabled early testing and thorough validation with large datasets.

He emphasizes full impact testing when major changes occur, reflecting his deep customer empathy and commitment to quality. With final refinements like fit and finish, session merging, and Mac build stabilization ahead, his high standards will continue to shape the project's success.

Congratulations, Sumit - your dedication and attention to detail have been invaluable!`
    },
    {
      title: "Driving QA Excellence in Flyy by Vyapar",
      recognizedBy: "Manohar Mahapatra",
      theme: "Manual + Automation QA",
      quote: `Sumit Singh - Driving QA Excellence in Flyy by Vyapar
Sumit led both manual and automation testing for Flyy by Vyapar with diligence and depth. He introduced Playwright for automation and drove end-to-end test coverage - across multi-device, concurrency, load, and DB validations. From login (app + WhatsApp) to campaign creation/execution (desktop & mobile), template flows, contact imports, brands.live integration, and real-time status tracking - he ensured high quality across all modules. His structured test planning, proactive bug detection, and collaborative mindset made him a cornerstone of the QA success.
Your leadership in QA made a huge impact, Sumit. 🚀👏`
    },
    {
      title: "Going Above & Beyond",
      recognizedBy: "Anuj Kumar, Principal Engineer",
      theme: "Ownership / Reliability",
      quote: `Sumit, I am proud to nominate you for the Going Above & Beyond award. Your dedication to quality, ownership, and doing the right thing even when it is hard has made a real difference to our team. You consistently dig into complex issues, find root causes, and follow through until they are fully resolved, not just patched.

I especially appreciate how you proactively anticipate risks, support others without being asked, and stay calm and focused under pressure. Your work has directly improved our product stability and our confidence in every release.

Thank you for always stepping up, for your reliability, and for the quiet leadership you show every day. I am genuinely grateful to have you as a teammate.`
    },
    {
      title: "DB Compare Utility",
      recognizedBy: "Himanshu Saraswat, Engineering Manager",
      theme: "Innovation",
      quote: `#Innovation
Congratulations, Sumit, for completing the task of developing the application to compare Vyapar databases, and that too on just a single request! Your innovative approach and technical expertise have resulted in a highly efficient and user-friendly solution. This accomplishment showcases your ability to tackle complex challenges easily and reflects your dedication and responsiveness. Keep up the outstanding work!`
    },
    {
      title: "Database Comparison Impact",
      recognizedBy: "Sudeep Gangadharan, Director of Engineering",
      theme: "Innovation Icon",
      quote: `Hey Sumit, we are really amazed by the activity you published. It will greatly help in comparing Databases and help in identifying issues in our customers DB much faster.
This exe will be of great help while resolving customer issues for our support, tech and data teams.
Your innovative ideas and hard work have brought a positive impact and I believe this truly embodies the values of this award. #InnovationIconAward #RecognizingTalent`
    }
  ];

  const toggleAppreciation = (title) => {
    setExpandedAppreciations((current) => ({
      ...current,
      [title]: !current[title]
    }));
  };

  const highlightTerms = [
    "Smart Connect",
    "strong ownership",
    "large datasets",
    "full impact testing",
    "customer empathy",
    "high standards",
    "attention to detail",
    "Flyy by Vyapar",
    "Playwright",
    "end-to-end test coverage",
    "proactive bug detection",
    "QA success",
    "Going Above & Beyond",
    "root causes",
    "product stability",
    "confidence in every release",
    "Multicurrency Support",
    "Zero production bugs",
    "rigorous testing",
    "DB Compare Utility",
    "innovative approach",
    "technical expertise",
    "Databases",
    "positive impact"
  ];

  const highlightPattern = new RegExp(`(${highlightTerms
    .sort((a, b) => b.length - a.length)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')})`, 'gi');

  const appreciationEmojis = {
    "Multicurrency Support": "💱",
    "Smart Connect Quality Ownership": "🎯",
    "Driving QA Excellence in Flyy by Vyapar": "🚀",
    "Going Above & Beyond": "⭐",
    "DB Compare Utility": "💡",
    "Database Comparison Impact": "⚡"
  };

  const renderHighlightedQuote = (quote) => (
    quote.split(highlightPattern).map((part, index) => (
      highlightTerms.some((term) => term.toLowerCase() === part.toLowerCase())
        ? <mark key={`${part}-${index}`} className="quote-highlight">{part}</mark>
        : part
    ))
  );

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">05 - Recognition</span>
          <h2>Recognition for <span className="italic">quality ownership</span>, product impact, and engineering trust.</h2>
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

        <div className="appreciation-section">
          <div className="appreciation-header">
            <span className="section-eyebrow">Vyapar Appreciations</span>
            <h3>Words from leaders and teammates.</h3>
          </div>

          <div className="appreciation-grid">
            {appreciations.map((item) => (
              <article key={item.title} className="appreciation-card">
                <div className="appreciation-icon">
                  <Quote size={18} />
                </div>
                <div className="appreciation-meta">
                  <span>{item.theme}</span>
                  <strong>Recognized by {item.recognizedBy}</strong>
                </div>
                <h4>{item.title}</h4>
                <div className={expandedAppreciations[item.title] ? 'appreciation-copy expanded' : 'appreciation-copy'}>
                  <p className="appreciation-message">
                    <span className="appreciation-message-emoji" aria-hidden="true">{appreciationEmojis[item.title]}</span>
                    {renderHighlightedQuote(item.quote)}
                  </p>
                </div>
                <button
                  type="button"
                  className="appreciation-toggle"
                  onClick={() => toggleAppreciation(item.title)}
                  aria-expanded={Boolean(expandedAppreciations[item.title])}
                >
                  {expandedAppreciations[item.title] ? 'Show less' : 'Read full appreciation'}
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
