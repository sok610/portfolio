import React from 'react';

function ContactPage() {
  return (
    <div className="page-content contact-page-layout">
      <br></br>
      <br></br>
      <br></br>

      <div className="contact-grid">
        {/* Email */}
        <a href="mailto:ssekim.610@gmail.com" className="contact-card">
          <div className="contact-info">
            <h3>Email</h3>
            <p>ssekim.610@gmail.com</p>
          </div>
        </a>
        <br></br>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/ssekim610" target="_blank" rel="noopener noreferrer" className="contact-card">
          <div className="contact-info">
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/ssekim610</p>
          </div>
        </a>
        <br></br>

        {/* GitHub */}
        <a href="https://github.com/sok610" target="_blank" rel="noopener noreferrer" className="contact-card">
          <div className="contact-info">
            <h3>GitHub</h3>
            <p>github.com/sok610</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ContactPage;