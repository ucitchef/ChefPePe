import React from 'react';
import './CpepeSection.css';

const CpepeSection = () => (
  <div id="cpepeSection" className="cpepe-section">
    <img src="./images/PepeLogo.jpg" alt="Chef Pepe" className="cpepe-image" />
    <div className="cpepe-text">
      <h3>CPEPE Contract Address</h3>
      <p>We're thrilled to introduce Chef Pepe <strong className="highlight">(CPEPE)</strong>, the first meme coin launched on <strong className="highlight">UCIT.Shop</strong></p>
      <h4>Address:</h4>
      <p className="contract-address">
        <a href="https://pump.fun/9wAX3eYxAuRHsqgZC9LATE22CwVkPbAb62Thwd7Cqj7n" target="_blank" rel="noopener noreferrer">
          9wAX3eYxAuRHsqgZC9LATE22CwVkPbAb62Thwd7Cqj7n
        </a>
      </p>
    </div>
  </div>
);

export default CpepeSection;