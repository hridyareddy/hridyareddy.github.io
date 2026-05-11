import React from 'react';
import { NavLink } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      name: 'Vellum Health',
      desc: 'Developed a healthcare platform to improve digital healthcare accessibility and patient engagement. Implemented responsive interfaces and interactive healthcare workflows for easy user interaction. Optimized frontend performance and cross-platform compatibility.',
      tags: ['React', 'Node.js', 'Express.js', 'Tailwind CSS'],
    },
    {
      name: 'Smart Tutoring Platform',
      desc: 'Built a website where university students can find tutors, book sessions, and chat in real time. Added secure login with different access levels for students and tutors. Included a recommendation engine that suggests what to learn next.',
      tags: ['React', 'Node.js', 'Express.js', 'JWT', 'Real-time Chat'],
    },
    {
      name: 'Day-Ahead Electric Load Forecasting',
      desc: 'Developed a forecasting system to predict next-day electricity demand using historical power consumption data. Implemented anomaly detection techniques to identify unusual patterns and improve prediction accuracy.',
      tags: ['Python', 'Time Series', 'Anomaly Detection', 'Data Analysis'],
    },
  ];

  return (
    <div className="page">
      <div className="projects-hero">
        <p className="hero-role">My Work</p>
        <h1 className="projects-hero-title">
          Pro<span>jects</span>
        </h1>
      </div>

      {projects.map((project, i) => (
        <div className="project-card" key={i}>
          <div className="project-top">
            <h2 className="project-name">{project.name}</h2>
          </div>
          <p className="project-desc">{project.desc}</p>
          <div className="project-tags">
            {project.tags.map((tag, j) => (
              <span className="project-tag" key={j}>{tag}</span>
            ))}
          </div>
        </div>
      ))}

      <nav className="bottom-nav">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'}>👤</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'}>💻</NavLink>
      </nav>
    </div>
  );
};

export default Projects;
