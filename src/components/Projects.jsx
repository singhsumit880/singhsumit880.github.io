import React from 'react';
import './Projects.css';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "DB Lens",
      description: "Android app published on Google Play, built to make database inspection and validation easier from a mobile workflow.",
      tags: ["Android", "Google Play", "Mobile App", "Database"],
      githubUrl: null,
      liveUrl: "https://play.google.com/store/apps/details?id=com.devxsumit.dblens"
    },
    {
      title: "DBCompare 2.0",
      description: "Database comparison utility for validating differences across datasets and supporting faster QA verification workflows.",
      tags: ["Database", "QA Tool", "Validation", "Utility"],
      githubUrl: "https://github.com/singhsumit880/DBCompare2.0",
      liveUrl: null
    },
    {
      title: "QA Agent",
      description: "Automation-focused QA assistant project designed to support testing workflows, validation tasks, and quality engineering productivity.",
      tags: ["QA", "Automation", "Agent", "Testing"],
      githubUrl: "https://github.com/singhsumit880/qa_agent",
      liveUrl: null
    },
    {
      title: "Playwright API & UI Framework",
      description: "A robust, scalable test automation framework built with Playwright and TypeScript incorporating the Page Object Model, custom reporters, and parallel execution.",
      tags: ["Playwright", "TypeScript", "Allure", "GitHub Actions"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <h2>Featured <span className="highlight">Projects</span>.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card-inner">
                <div className="project-header">
                  <FolderGit2 className="project-folder" size={36} />
                  <div className="project-links">
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="project-link" aria-label="GitHub Repository">
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="project-link" aria-label="External Link">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
              </div>
              
              <div className="project-footer">
                <ul className="project-tags mono">
                  {project.tags.map((tag, tidx) => (
                    <li key={tidx}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="more-projects">
          <a href="#" className="btn btn-primary mono">View GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
