import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-top">
        <h3 className="footer-logo">UCIT.SHOP</h3>
        <div className="social-links">
          <a href="https://www.facebook.com/profile.php?id=61559820970241&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://x.com/chefpepe001" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com/channel/UC9NyMA6pwhJnCnsF4YeOwEA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.instagram.com/chefpepe001/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#what">What To Do</a>
          <a href="#cpepeSection">Chef Pepe Token</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 ucit.shop | Developed by <a href="https://greatcommission.me" target="_blank" rel="noopener noreferrer">Great Commission</a></p>
      </div>
    </div>
  </footer>
);

export default Footer;