import React from 'react';
import './About.css';

const About = () => (
  <div id="about" className="about">
    <img src="./images/About.png" alt="About UCIT.Shop" className="feature-image" />
    <div className="about-text">
      <h2>About UCIT.Shop</h2>
      <div className="mission-vision">
        <div className="mission">
          <h3>OUR MISSION</h3>
          <p>At UCIT.Shop, we strive to empower digital artists and creators by providing a dynamic platform that bridges the gap between innovative blockchain technology and mainstream adoption.</p>
        </div>
        <div className="vision">
          <h3>OUR VISION</h3>
          <p>To be the leading marketplace for NFTs and meme coins on Solana, fostering a community of creators and collectors who are passionate about the future of digital assets.</p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
