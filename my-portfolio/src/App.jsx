import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import './App.css';

import HomePage from './pages/Home';
import InfoPage from './pages/Info';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';

function Shell() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
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
              <li><NavLink to="/">{({ isActive }) => (isActive ? '•' : 'Home')}</NavLink></li>
              <li><NavLink to="/info">{({ isActive }) => (isActive ? '•' : 'Info')}</NavLink></li>
              <li><NavLink to="/projects">{({ isActive }) => (isActive ? '•' : 'Projects')}</NavLink></li>
              <li><NavLink to="/contact">{({ isActive }) => (isActive ? '•' : 'Contact')}</NavLink></li>
            </ul>
          </nav>
        </div>

        <main className={`right-column ${isHome ? "with-grid" : ""}`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}

export default App;
