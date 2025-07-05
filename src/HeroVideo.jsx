// src/components/HeroVideo.jsx

import React from 'react';
import './HeroVideo.css'; // We'll create this file next
import heroVideo from './assets/HeroVideo.MOV'; // Import the video

const HeroVideo = () => {
  return (
    <div className="hero-container">
      <video className="hero-video" src={heroVideo} autoPlay loop muted playsInline />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Refined Aesthetics</h1>
        <p>Forge Your Ideal Physique</p>
      </div>
    </div>
  );
};

export default HeroVideo;