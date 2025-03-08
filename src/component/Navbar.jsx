import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../logo.png'; // Assuming you have a logo image

const Navbar = () => {
  // Get the current location
  const location = useLocation();

  // Check if the current route is '/home', '/contact', '/about', '/learn-categories', '/tree', or '/tower-of-hanoi'
  const isHomePage = location.pathname === '/home';
  const isContactPage = location.pathname === '/contact';
  const isAboutPage = location.pathname === '/about';
  const isLearnPage = location.pathname === '/learn-categories';
  const isTreePage = location.pathname === '/tree'; // Check if it's the /tree page
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';
  const isRecursionPage = location.pathname === '/recursion';
  const isTowerOfHanoiPage = location.pathname === '/tower-of-hanoi'; // Check if it's the /tower-of-hanoi page

  return (
    <div>
      <div className="navbar">
        {/* Logo Section */}
        <div className="logo">
          <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto' }} />
        </div>

        {/* Search Bar */}
        <div className="search">
          <input type="text" placeholder="Search..." style={{ padding: '8px', fontSize: '16px' }} />
        </div>

        {/* Navigation Links */}
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/learn-categories" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          {/* Login Links */}
          <div className="nav-container">
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          </div>
        </ul>
      </div>

      {/* Conditionally render the "Start Your Coding Journey" Section */}
      {/* Only render it if the current page is not Home, About, Contact, Learn, Tree, or Tower of Hanoi */}
      {!isHomePage && !isContactPage && !isAboutPage && !isLearnPage && !isTreePage && !isLoginPage && !isRegisterPage && !isRecursionPage && !isTowerOfHanoiPage && (
        <div className="start-coding-journey" style={{marginTop : '150px'}}>
          <h2>Start Your Coding Journey</h2>
          <Link to="/learn-categories">
            <div className="button-container">
              <button className="category-button" style={{ marginTop: '-40rem', height: '50px', width: 'auto' }}>Start Learning</button>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
