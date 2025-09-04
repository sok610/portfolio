import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';


import HomePage from './pages/Home';
import InfoPage from './pages/Info';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="portfolio-container">
        <div className="main-content-box">
          <div className="left-column">
            <header className="portfolio-header">
              <Link to="/" className="header-link">
                <h1>Songeun Kim</h1>
                <p className="subtitle">Developer</p>
              </Link>
            </header>
            <nav className="vertical-nav">
              <ul>
                <li>
                  <NavLink to="/">
                    {({ isActive }) => (isActive ? '•' : 'Home')}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/info">
                    {({ isActive }) => (isActive ? '•' : 'Info')}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects">
                    {({ isActive }) => (isActive ? '•' : 'Projects')}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">
                    {({ isActive }) => (isActive ? '•' : 'Contact')}
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <main className="right-column">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/info" element={<InfoPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;