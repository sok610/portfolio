import React from 'react';
import profilePic from "../assets/images/ProfilePic.JPG";

function InfoPage() {
  return (
    <div className="page-content info-page-layout">
      {/* Row 1: Profile Picture */}
      <div className="info-profile-picture-container">
        <img src={profilePic} alt="Songeun Kim's profile" className="profile-picture" />
      </div>

      {/* Row 2: About Me Section */}
      <section className="info-section">
        <h2>About Me</h2>
        <p>
          I'm a Computer Science graduate from UC Berkeley with a passion for building intelligent systems that bridge the gap between AI research and real-world applications. My work spans from optimizing recommendation engines with 95% latency reduction to implementing advanced AI algorithms like Q-learning and particle filters.
        </p>
        <p>
          What drives me is the intersection of machine learning and user experience—whether that's creating emotion-driven music recommendations through NLP or building robust database systems that power enterprise applications. I believe in meticulous documentation, clean code architecture, and the power of data-driven optimization to create software that not only works but truly enhances people's lives.
        </p>
        <p>
          Currently, I'm exploring how AI can make software more intuitive and accessible, with hands-on experience in everything from geospatial data processing to social platform development. When I'm not coding, you'll find me swimming laps or diving into the latest LLM and machine learning books.
        </p>
      </section>

      {/* Row 3: Skills Section */}
      <section className="info-section">
        <h2>Skills</h2>

        <div className="skills-grid">
          {/* Languages */}
          <div className="skill-card">
            <h3>Languages</h3>
            <ul className="skills-list">
              {[
                "Python","Java","C/C++","JavaScript","TypeScript","SQL","HTML/CSS"
              ].map(item => <li key={item} className="skill-badge">{item}</li>)}
            </ul>
          </div>

          {/* Frameworks / Libraries */}
          <div className="skill-card">
            <h3>Frameworks / Libraries</h3>
            <ul className="skills-list">
              {[
                "Django","Node.js","Express.js","React"
              ].map(item => <li key={item} className="skill-badge">{item}</li>)}
            </ul>
          </div>

          {/* Databases */}
          <div className="skill-card">
            <h3>Databases</h3>
            <ul className="skills-list">
              {[
                "MySQL","PostgreSQL","MongoDB Atlas"
              ].map(item => <li key={item} className="skill-badge">{item}</li>)}
            </ul>
          </div>

          {/* Cloud / DevOps */}
          <div className="skill-card">
            <h3>Cloud / DevOps</h3>
            <ul className="skills-list">
              {[
                "AWS (EC2, S3, VPC)","GCP","Nginx","Gunicorn","Heroku","Render"
              ].map(item => <li key={item} className="skill-badge">{item}</li>)}
            </ul>
          </div>

          {/* Developer Tools */}
          <div className="skill-card">
            <h3>Developer Tools</h3>
            <ul className="skills-list">
              {[
                "Git","Unix/Linux","REST API Design","Agile","Docker",
                "Google APIs","Spotify API","Visual Studio"
              ].map(item => <li key={item} className="skill-badge">{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InfoPage;
