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
          I am a passionate developer with a love for creating beautiful and functional web applications. My journey in software development is driven by a curiosity to learn new technologies and a desire to solve real-world problems through code.
        </p>
      </section>

      {/* Row 3: Skills Section */}
      <section className="info-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Languages</h3>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>Python</li>
              <li>Java</li>
              <li>HTML & CSS</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Frameworks & Libraries</h3>
            <ul>
              <li>React</li>
              <li>Node.js & Express</li>
              <li>Django</li>
              <li>p5.js</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools & Others</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InfoPage;