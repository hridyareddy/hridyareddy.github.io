import React from 'react';
import { NavLink } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      name: 'Day-Ahead Electric Load Forecasting & Anomaly Detection',
      desc: 'Built a SARIMA-based time-series forecasting model on OPSD data to predict 24-hour ahead electricity demand. Used STL Decomposition and ACF/PACF for optimal model selection with MASE, RMSE, and MAPE evaluation metrics.',
      tags: ['Python', 'SARIMA', 'Time Series', 'Anomaly Detection', 'STL'],
      github: 'https://github.com/hridya-reddy/electric-load-forecasting',
    },
    {
      name: 'AI-Powered Smart Menu & Demand Prediction System',
      desc: 'Designed an intelligent food ordering system with ML-based demand forecasting using classification algorithms. Built a modular Java backend with OOP principles and role-based access control.',
      tags: ['Java', 'Machine Learning', 'Classification', 'OOP', 'Data Pipeline'],
      github: 'https://github.com/hridya-reddy/smart-menu-system',
    },
    {
      name: 'Secure E-Commerce Backend Architecture',
      desc: 'Engineered a type-safe RESTful API using TypeScript and Express.js with JWT authentication, Bcrypt hashing, and Role-Based Access Control. Authored a Postman suite for automated contract verification.',
      tags: ['TypeScript', 'Express.js', 'JWT', 'Bcrypt', 'RBAC', 'REST API'],
      github: 'https://github.com/hridya-reddy/secure-ecommerce-backend',
    },
    {
      name: 'Quantum Safe Email Client using QKD Simulation',
      desc: 'Proposed a quantum-resistant email client leveraging Quantum Key Distribution for secure communication resistant to future cryptographic threats. Submitted as part of Smart India Hackathon (SIH).',
      tags: ['Quantum Computing', 'QKD', 'Cryptography', 'Security', 'SIH'],
      github: 'https://github.com/hridya-reddy/quantum-safe-email',
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

            {/* ✅ FIXED anchor */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-github"
            >
              GITHUB
            </a>
          </div>

          <p className="project-desc">{project.desc}</p>

          <div className="project-tags">
            {project.tags.map((tag, j) => (
              <span className="project-tag" key={j}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}

      <nav className="bottom-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-btn active' : 'nav-btn'
          }
        >
          👤
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? 'nav-btn active' : 'nav-btn'
          }
        >
          💻
        </NavLink>

        <a href="mailto:hridya.komatireddy@gmail.com" className="nav-btn">
          ✉️
        </a>
      </nav>

    </div>
  );
};

export default Projects;