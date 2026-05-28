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
          I'm a full-stack software engineer and UC Berkeley CS graduate with production experience across the stack — from React dashboards and Django APIs to ML pipelines, real-time data infrastructure, and cloud deployment.
        </p>
        <p>
          I enjoy building systems that connect complex backend logic to clean, intuitive user experiences. Recent work includes an AI-powered music journaling platform with DistilRoBERTa emotion classification and Redis-cached Spotify recommendations, a real-time IoT monitoring pipeline with Kafka and Grafana, and LLM-powered data tooling at an automotive data company.
        </p>
        <p>
          Outside of work I swim competitively and read about machine learning systems design.
        </p>
      </section>

      {/* Row 3: Skills Section */}
      <section className="info-section">
        <h2>Skills</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Languages</h3>
            <ul className="skills-list">
              {["Python","Java","JavaScript","TypeScript","SQL","C/C++","Ruby","Arduino C++"]
                .map(item => <li key={item} className="skill-badge">{item}</li>)}
            </ul>
          </div>

          <div className="skill-card">
            <h3>Frontend & Backend</h3>
            <ul className="skills-list">
              {["React","Django","Flask","Node.js","TailwindCSS","HTMX","Celery","Redis","PostgreSQL","Ruby on Rails","Docker","REST APIs"]
                .map(item => <li key={item} className="skill-badge">{item}</li>)}
            </ul>
          </div>

          <div className="skill-card">
            <h3>AI / ML</h3>
            <ul className="skills-list">
              {["Hugging Face Transformers","PyTorch","Embeddings","NLP","LLM Workflows","OpenAI API","Gemini API"]
                .map(item => <li key={item} className="skill-badge">{item}</li>)}
            </ul>
          </div>

          <div className="skill-card">
            <h3>Data & Infra</h3>
            <ul className="skills-list">
              {["ELK Stack","Kafka","InfluxDB","Grafana","AWS (EC2, S3, VPC)","Nginx","MQTT","Docker"]
                .map(item => <li key={item} className="skill-badge">{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InfoPage;
