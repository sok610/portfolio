import React from 'react';
import FireworksSketch from '../components/FireworksSketch';

function HomePage() {
  return (
    <div className="home-page-layout">
      <div className="sketch-container">
        <FireworksSketch />
      </div>

      <div className="home-intro-text">
        <p>A developer who enjoys</p>
        <p>learning new technologies</p>
        <p>and solving problems</p>
        <p>through code.</p>
      </div>
    </div>
  );
}

export default HomePage;