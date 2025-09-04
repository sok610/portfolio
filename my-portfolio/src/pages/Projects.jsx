import React from 'react';

import soundlogVideo from "../assets/videos/SoundlogVideo.mov"
import pacmanVideo from "../assets/videos/PacmanVideo.mov"
import bplustreeVideo from "../assets/videos/PacmanVideo.mov"
import miniblogVideo from "../assets/videos/MiniBlogVideo.mov"
import minimovielogVideo from "../assets/videos/PacmanVideo.mov"

const projectsData = [
  {
    id: 1,
    title: 'Soundlog',
    videoUrl: soundlogVideo,
    description: 'Soundlog is a full-stack social journaling web application that lets users express emotions through journal entries and music. Users can share their moods, discover songs that resonate with them, and interact with friends through comments, likes, and follows.',
    detailsLink: '',
    githubLink: 'https://github.com/sok610/soundlog',
  },
  {
    id: 2,
    title: 'AI Pacman Agent',
    videoUrl: pacmanVideo,
    description: 'Implementation of Pacman game using AI techniques such as DFS, A* Search, Q-learning, Minimax, and more.',
    detailsLink: 'https://inst.eecs.berkeley.edu/~cs188/fa24/projects/',
    githubLink: '',
  },
  {
    id: 3,
    title: 'B+ Tree',
    videoUrl: bplustreeVideo,
    description: 'A high-performance relational database from scratch in Java.',
    detailsLink: 'https://cs186.gitbook.io/project/assignments/proj2',
    githubLink: '',    
  },
  {
    id: 4,
    title: 'Mini Blog',
    videoUrl: miniblogVideo,
    description: 'A minimalist blogging platform built with Django and Tailwind CSS.',
    detailsLink: '',
    githubLink: 'https://github.com/sok610/mini-blog',    
  },
  {
    id: 5,
    title: 'Mini Movie Log',
    videoUrl: minimovielogVideo,
    description: 'A full-stack movie journaling web application built with Node.js, Express.js, MongoDB, and Tailwind CSS. Users can write, view, edit, delete, and search movie reviews with star ratings, filter reviews by rating, and enjoy a responsive interface with a clean UI.',
    detailsLink: '',
    githubLink: 'https://github.com/sok610/minimovielog',    
  },
];

function ProjectsPage() {
  return (
    <div className="page-content">
      <div className="projects-list">
        {/* Loop through the projectsData array to render each project */}
        {projectsData.map((project) => (
          <div key={project.id} className="project-item">
            {/* First row: Video and description */}
            <div className="project-main">
              <div className="project-media">
                <video 
                  src={project.videoUrl} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  key={project.videoUrl} // Add key to re-render video on change
                />
              </div>
              <div className="project-description">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>

            {/* Second row: Links */}
            <div className="project-links">
              <a href={project.detailsLink} target="_blank" rel="noopener noreferrer">
                🔗 View Details
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                💻 GitHub Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;