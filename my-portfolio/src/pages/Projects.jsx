import React, { useState, useRef, useEffect } from 'react';

import soundlogVideo from "../assets/videos/SoundlogVideo.mov";
import pacmanVideo from "../assets/videos/PacmanVideo.mov";
import bplustreeImage from "../assets/images/BPlusTree.png";
import miniblogVideo from "../assets/videos/MiniBlogVideo.mov";
import minimovielog from "../assets/videos/MiniMovieLogVideo.mov";

const projectsData = [
  {
    id: 1,
    title: 'Soundlog',
    mediaType: 'video',
    mediaUrl: soundlogVideo,
    description: 'Soundlog is a full-stack social journaling web application that lets users express emotions through journal entries and music. Users can share their moods, discover songs that resonate with them, and interact with friends through comments, likes, and follows.',
    detailsLink: '#',
    githubLink: 'https://github.com/sok610/soundlog',
  },
  {
    id: 2,
    title: 'AI Pacman Agent',
    mediaType: 'video',
    mediaUrl: pacmanVideo,
    description: 'Implementation of Pacman game using AI techniques such as DFS, A* Search, Q-learning, Minimax, and more.',
    detailsLink: 'https://inst.eecs.berkeley.edu/~cs188/fa24/projects/',
    githubLink: '#',
  },
  {
    id: 3,
    title: "B+ Tree",
    mediaType: 'image',
    mediaUrl: bplustreeImage,
    description: 'A high-performance relational database from scratch in Java.',
    detailsLink: 'https://cs186.gitbook.io/project/assignments/proj2',
    githubLink: '#',    
  },
  {
    id: 4,
    title: 'Mini Blog',
    mediaType: 'video',
    mediaUrl: miniblogVideo,
    description: 'A minimalist blogging platform built with Django and Tailwind CSS.',
    detailsLink: '#',
    githubLink: 'https://github.com/sok610/mini-blog',    
  },
  {
    id: 5,
    title: 'Mini Movie Log',
    mediaType: 'video',
    mediaUrl: minimovielog,
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
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);

  const handleVideoControl = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Handle video loading states
  const handleVideoLoadStart = () => {
    setIsVideoLoading(true);
    setIsVideoLoaded(false);
  };

  const handleVideoCanPlay = () => {
    setIsVideoLoaded(true);
    setIsVideoLoading(false);
  };

  const handleVideoError = () => {
    setIsVideoLoading(false);
    console.error('Video failed to load');
  };

  // Reset video state when switching projects
  useEffect(() => {
    setIsVideoLoaded(false);
    setIsVideoLoading(false);
    setIsPlaying(false);
  }, [activeProjectId]);

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
              {activeProject.mediaType === 'video' ? (
                <>
                  <video 
                    ref={videoRef}
                    src={activeProject.mediaUrl} 
                    loop 
                    muted 
                    playsInline
                    preload="metadata"
                    key={activeProject.mediaUrl}
                    onLoadStart={handleVideoLoadStart}
                    onCanPlay={handleVideoCanPlay}
                    onError={handleVideoError}
                    style={{ opacity: isVideoLoaded ? 1 : 0 }}
                  />
                  {isVideoLoading && (
                    <div className="video-loading">
                      <div className="loading-spinner"></div>
                      <p>Loading video...</p>
                    </div>
                  )}
                  <div className="video-overlay" onClick={handleVideoControl}>
                    {!isPlaying && isVideoLoaded && <div className="play-button">▶</div>}
                  </div>
                </>
              ) : (
                <img 
                  src={activeProject.mediaUrl} 
                  alt={activeProject.title}
                  key={activeProject.mediaUrl}
                  loading="lazy"
                />
              )}
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