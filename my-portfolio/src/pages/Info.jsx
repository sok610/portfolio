import React from 'react';
import profilePic from "../assets/images/ProfilePic.png";

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
          I am a passionate developer with a love for creating beautiful and functional web applications.
          My journey in software development is driven by a curiosity to learn new technologies and a desire
          to solve real-world problems through code.
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
