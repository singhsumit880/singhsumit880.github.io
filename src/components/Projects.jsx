import React from 'react';
import './Projects.css';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "DB Lens",
      problem: "Mobile QA and debugging often require checking local data, but inspecting SQLite files directly from a device is usually slow and inconvenient.",
      built: "Read-only Android workspace for SQLite database analysis with table browsing, schema inspection, filtering, sorting, SQL query execution, JSON viewing, CSV/Excel import, and data export support.",
      impact: "Helps developers, testers, and analysts validate local data securely on-device during QA, debugging, and customer issue investigation.",
      tags: ["Android", "SQLite", "SQL Console", "Data Analysis"],
      githubUrl: null,
      liveUrl: "https://play.google.com/store/apps/details?id=com.devxsumit.dblens"
    },
    {
      title: "DBCompare 2.0",
      problem: "QA often needs to answer one question fast: what exactly changed between two databases?",
      built: "Database comparison utility with table/data comparison, visual difference inspection, filtering, and date/time handling.",
      impact: "Turns repetitive QA investigation into a faster validation workflow for QA, support, tech, and data teams.",
      tags: ["SQLite", "DB Compare", "QA Tool", "Validation"],
      githubUrl: "https://github.com/singhsumit880/DBCompare2.0",
      liveUrl: null
    },
    {
      title: "Excel Compare",
      problem: "QA and data teams often need spreadsheet comparison without uploading sensitive workbooks to a server.",
      built: "Privacy-first Excel comparison tool that compares workbooks cell-by-cell, highlights added, deleted, and modified data, supports smart filtering, and exports reports to Excel, PDF, and CSV.",
      impact: "Runs 100% client-side, so sensitive spreadsheets stay on the user's machine while validation reports remain easy to share.",
      tags: ["Excel", "Client-Side", "Data Validation", "Reports"],
      githubUrl: "https://github.com/singhsumit880/Excelcompare",
      liveUrl: "https://singhsumit880.github.io/Excelcompare/"
    },
    {
      title: "QA Agent",
      problem: "Traditional automation is brittle when UI structure, locators, and product states keep changing.",
      built: "AI-assisted QA system exploring test planning, UI understanding, locator generation, execution, and adaptive validation.",
      impact: "Moves QA thinking from scripted execution toward goal-driven test planning, execution, validation, and adaptation.",
      tags: ["AI QA", "LLM", "Automation", "Testing"],
      githubUrl: "https://github.com/singhsumit880/qa_agent",
      liveUrl: null
    },
    {
      title: "Playwright + Electron Automation",
      problem: "Desktop apps need automation that understands windows, dialogs, app state, and database-backed behavior.",
      built: "Playwright automation approach for Electron workflows using browser contexts, Chromium internals, reusable architecture, and data assertions.",
      impact: "Expands Playwright beyond browser testing into practical desktop release validation.",
      tags: ["Playwright", "Electron", "TypeScript", "Desktop QA"],
      githubUrl: null,
      liveUrl: null,
      status: "Link coming soon"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">04 - Selected Work</span>
          <h2>Practical QA tools built for <span className="italic">real validation</span>.</h2>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <article key={project.title} className="project-row">
              <span className="project-index mono">{String(index + 1).padStart(2, '0')}</span>
              <div className="project-main">
                <div className="project-heading">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`${project.title} GitHub repository`}>
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`${project.title} external link`}>
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                {project.status && <span className="project-status">{project.status}</span>}
                <div className="project-breakdown">
                  <p><strong>Problem</strong>{project.problem}</p>
                  <p><strong>What I built</strong>{project.built}</p>
                  <p><strong>Impact</strong>{project.impact}</p>
                </div>
                <ul className="project-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        
        <div className="more-projects">
          <a href="https://github.com/singhsumit880/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
