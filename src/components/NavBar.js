import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import { FaTelegram, FaTwitter } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();

  // Determine if we are on any recipe page
  const isOnRecipePage = location.pathname === '/chicken-recipe' ||
                         location.pathname === '/deserts-recipe' ||
                         location.pathname === '/appetizers-recipe' ||
                         location.pathname === '/drinks-recipe';

  return (
    <nav className="navbar">
      <div className="social-links">
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
          <FaTelegram />
        </a>
        <a href="https://x.com/we_vest" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          {isOnRecipePage ? (
            <RouterLink to="/" smooth={true} duration={500}>Home</RouterLink>
          ) : (
            <Link to="home" smooth={true} duration={500}>Home</Link>
          )}
        </li>
        <li className="nav-item">
          {isOnRecipePage ? (
            <RouterLink to="/" smooth={true} duration={500}>About</RouterLink>
          ) : (
            <Link to="about" smooth={true} duration={500}>About</Link>
          )}
        </li>
        <li className="nav-item">
          {isOnRecipePage ? (
            <RouterLink to="/" smooth={true} duration={500}>What To Do</RouterLink>
          ) : (
            <Link to="what" smooth={true} duration={500}>What To Do</Link>
          )}
        </li>
        <li className="nav-item">
          {isOnRecipePage ? (
            <RouterLink to="/" smooth={true} duration={500}>Chef Pepe Token</RouterLink>
          ) : (
            <Link to="cpepeSection" smooth={true} duration={500}>Chef Pepe Token</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;