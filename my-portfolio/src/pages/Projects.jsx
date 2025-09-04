import React, { useState, useRef } from 'react';

import soundlogVideo from "../assets/videos/SoundlogVideo.mov";
import pacmanVideo from "../assets/videos/PacmanVideo.mov";
import bplustreeVideo from "../assets/videos/PacmanVideo.mov";
import miniblogVideo from "../assets/videos/MiniBlogVideo.mov";
import minimovielog from "../assets/videos/PacmanVideo.mov";

const projectsData = [
  {
    id: 1,
    title: 'Soundlog',
    videoUrl: soundlogVideo,
    description: 'Soundlog is a full-stack social journaling web application that lets users express emotions through journal entries and music. Users can share their moods, discover songs that resonate with them, and interact with friends through comments, likes, and follows.',
    detailsLink: '#',
    githubLink: 'https://github.com/sok610/soundlog',
  },
  {
    id: 2,
    title: 'AI Pacman Agent',
    videoUrl: pacmanVideo,
    description: 'Implementation of Pacman game using AI techniques such as DFS, A* Search, Q-learning, Minimax, and more.',
    detailsLink: 'https://inst.eecs.berkeley.edu/~cs188/fa24/projects/',
    githubLink: '#',
  },
  {
    id: 3,
    title: "B+ Tree",
    videoUrl: bplustreeVideo,
    description: 'A high-performance relational database from scratch in Java.',
    detailsLink: 'https://cs186.gitbook.io/project/assignments/proj2',
    githubLink: '#',    
  },
  {
    id: 4,
    title: 'Mini Blog',
    videoUrl: miniblogVideo,
    description: 'A minimalist blogging platform built with Django and Tailwind CSS.',
    detailsLink: '#',
    githubLink: 'https://github.com/sok610/mini-blog',    
  },
  {
    id: 5,
    title: 'Mini Movie Log',
    videoUrl: pacmanVideo,
    description: 'A full-stack movie journaling web application built with Node.js, Express.js, MongoDB, and Tailwind CSS. Users can write, view, edit, delete, and search movie reviews with star ratings, filter reviews by rating, and enjoy a responsive interface with a clean UI.',
    detailsLink: '#',
    githubLink: 'https://github.com/sok610/minimovielog',    
  },
];


function ProjectsPage() {
  const [activeProjectId, setActiveProjectId] = useState(1);
  const activeProject = projectsData.find(p => p.id === activeProjectId);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoControl = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying); // 재생 상태를 반전시킴
  };
  // --- 여기까지 추가 ---

  return (
    <div className="page-content project-tab-view">
      <div className="project-tabs">
        {projectsData.map((project) => (
          <button
            key={project.id}
            className={`tab-button ${project.id === activeProjectId ? 'active' : ''}`}
            onClick={() => {
              setActiveProjectId(project.id);
              setIsPlaying(false);
            }}
          >
            {project.id === activeProjectId ? '•' : project.id}
          </button>
        ))}
      </div>

      <div className="project-content">
        {activeProject && (
          <div className="project-item">
            <div className="project-media">
              <video 
                ref={videoRef}
                src={activeProject.videoUrl} 
                loop 
                muted 
                playsInline
                key={activeProject.videoUrl}
              />
              <div className="video-overlay" onClick={handleVideoControl}>
                {!isPlaying && <div className="play-button">▶</div>}
              </div>
            </div>
            
            <div className="project-info-overlay">
              <h2>{activeProject.title}</h2>
              <p>{activeProject.description}</p>
              <div className="project-links">
                {activeProject.detailsLink && activeProject.detailsLink !== '#' && (
                   <a href={activeProject.detailsLink} target="_blank" rel="noopener noreferrer">
                      🔗 View Details
                   </a>
                )}
                {activeProject.githubLink && activeProject.githubLink !== '#' && (
                  <a href={activeProject.githubLink} target="_blank" rel="noopener noreferrer">
                    💻 GitHub Repository
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsPage;