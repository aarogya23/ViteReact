import React from 'react';
import './assets/Footer.css'; // You can create a separate CSS for Footer styling
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p style={{color :'white'}}>&copy; 2025 LearnPath. All rights reserved.</p>
        <p className="footer-description">
          LearnPath is your go-to platform for student-centered learning, offering the best resources for your educational journey.
        </p>
        <div className="footer-links">
          <a href="/terms">Terms of Service</a> | 
          <a href="/privacy">Privacy Policy</a> | 
          <a href="/contact">Contact Us</a>
        </div>
        <div className="footer-socials">
          <a href="https://www.facebook.com/profile.php?id=100077660132210" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://github.com/aarogya23" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/aarogyathapa2/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
