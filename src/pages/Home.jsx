import React from 'react';
import { NavLink } from 'react-router-dom';
import profile from '../assets/profile.jpg';

const Home = () => {
  const skills = [
    'Python', 'Java', 'C', 'SQL',
    'React', 'Node.js', 'Express', 'Flask',
    'Streamlit', 'TypeScript', 'SARIMA',
    'Time Series', 'Classification', 'REST API',
    'OOP', 'DSA', 'JWT', 'Git',
  ];

  return (
    <div className="page">

      <div className="hero-card">
        <div className="profile-pic-wrap">

          <img src={profile} alt="profile" className="profile-img" />

          {/* ✅ UPDATED ID */}
          <span className="student-badge">STUDENT ID: SE23UARI066</span>
        </div>

        <div className="hero-info">
          <h1 className="hero-name">
            Hridya Reddy
            <span>Komatireddy</span>
          </h1>

          <p className="hero-role">AI Student & Developer</p>

          <div className="hero-contacts">
            <span className="hero-contact-item">
              <span className="contact-icon">📞</span>
              +91 9000431117
            </span>

            <span className="hero-contact-item">
              <span className="contact-icon">📍</span>
              Hyderabad, India
            </span>

            <span className="hero-contact-item">
              <span className="contact-icon">✉️</span>
              hridya.komatireddy@gmail.com
            </span>
          </div>
        </div>
      </div>

      <div className="two-col">
        <div className="info-card">
          <h2 className="card-title teal">About Me</h2>
          <p className="about-text">
            I am a B.Tech student specializing in Artificial Intelligence
            at Mahindra University. I enjoy building intelligent systems —
            from time-series forecasting models to quantum-safe security
            solutions. My goal is to explore how AI can solve real-world
            problems at the intersection of ML, security, and software
            engineering.
          </p>
        </div>

        <div className="info-card">
          <h2 className="card-title pink">Education</h2>

          <div className="edu-item">
            <div className="edu-icon">🎓</div>
            <div>
              <div className="edu-name">B.Tech in Artificial Intelligence</div>
              <div className="edu-sub">Mahindra University | GPA: 7.16/10</div>
            </div>
          </div>

          <div className="edu-item">
            <div className="edu-icon">🏫</div>
            <div>
              <div className="edu-name">Intermediate</div>
              <div className="edu-sub">Page Junior College | 91.1%</div>
            </div>
          </div>

          <div className="edu-item">
            <div className="edu-icon">📚</div>
            <div>
              <div className="edu-name">10th Grade</div>
              <div className="edu-sub">St. Ann's High School | 89%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="info-card" style={{ marginBottom: '20px' }}>
        <h2 className="card-title blue">Technical Skills</h2>
        <div className="skills-wrap">
          {skills.map((skill, i) => (
            <span className="skill-chip" key={i}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="info-card">
        <h2 className="card-title yellow">Certifications</h2>
        {[
          'Machine Learning — GeeksForGeeks',
          'Deep Learning Specialization — DeepLearning.AI',
          'AI for Everyone — DeepLearning.AI',
        ].map((cert, i) => (
          <div className="cert-item" key={i}>
            <span className="cert-dot"></span>
            {cert}
          </div>
        ))}
      </div>

      <nav className="bottom-nav">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'}>👤</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'}>💻</NavLink>
        <a href="mailto:hridya.komatireddy@gmail.com" className="nav-btn">✉️</a>
      </nav>

    </div>
  );
};

export default Home;