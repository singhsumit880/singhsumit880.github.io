import React from 'react';
import './Projects.css';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Playwright API & UI Framework",
      description: "A robust, scalable test automation framework built with Playwright and TypeScript incorporating the Page Object Model, custom reporters, and parallel execution.",
      tags: ["Playwright", "TypeScript", "Allure", "GitHub Actions"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Chaos Monkey Simulator",
      description: "Custom Python script to simulate random network failures and latency to test application resilience and degraded states during automated suites.",
      tags: ["Python", "Docker", "Bash", "Testing"],
      githubUrl: "#",
      liveUrl: null
    },
    {
      title: "Selenium Grid Cloud Integrator",
      description: "A tool to dynamically spin up Selenium Grid nodes in AWS EC2 based on test queue size, optimizing testing costs by 40%.",
      tags: ["Java", "AWS", "Terraform", "Selenium"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Visual Regression Action",
      description: "A GitHub Action that performs pixel-by-pixel visual comparisons of UI components using pixelmatch and posts a comment with visual diffs on PRs.",
      tags: ["JavaScript", "CI/CD", "Jest", "pixelmatch"],
      githubUrl: "#",
      liveUrl: null
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
