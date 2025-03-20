import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './assets/logo.png'; // Assuming you have a logo image
import './style.css'; // Importing the CSS file

const Navbar = () => {
  const location = useLocation();

  // State to handle mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // List of paths to exclude from rendering the "Start Your Coding Journey" section
  const excludePaths = [
    '/home', '/contact', '/about', '/learn-categories', '/tree', 
    '/login', '/register', '/recursion', '/tower-of-hanoi', 
    '/database', '/mcq', '/random-fact', '/programming-answers'
  ];

  // Check if the current pathname is in the excludePaths array
  const isExcludedPage = excludePaths.includes(location.pathname);

  return (
    <div>
      <div className="navbar">
        {/* Logo Section */}
        <div className="logo">
          <img src={logo} alt="Logo" style={{ width: '150px', height: 'auto' }} />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Search Bar */}
        <div className="search">
          <input type="text" placeholder="Search..." style={{ padding: '8px', fontSize: '16px' }} />
        </div>

        {/* Navigation Links */}
        <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link to="/learn-categories" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/programming-answers" className="nav-link">Questions</Link>
          </li>
          
          <div className="nav-container">
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          </div>
        </ul>
      </div>

      {/* Conditionally render the "Start Your Coding Journey" Section */}
      {!isExcludedPage && (
        <div>
          <div className="start-coding-journey" style={{ marginTop: '150px' }}>
            <h2>Start Your Coding Journey</h2>
            <Link to="/learn-categories">
              <div className="button-container">
                <button className="category-button" style={{ marginTop: '-40rem', height: '50px', width: 'auto' }}>Start Learning</button>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
