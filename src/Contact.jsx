import React from "react";
import "./ContactPage.css"; // Import CSS file
import contactImage from "./contact.jpg"; // Import the image
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'; // Import necessary icons

const ContactPage = () => {
  return (
    <div className="contact-container">
      {/* Fullscreen Header Section */}
      <div className="header">
        <div className="header-content">
          <h2>Get in touch</h2>
          <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us.</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="contact-cards">
          {/* GitHub Section */}
          <div className="contact-card">
            <div className="icon"><FaGithub /></div>
            <h3>Learn from Git</h3>
            <p>
              Interested in my React project? Check out my GitHub for more.
            </p>
            <a href="https://github.com/aarogya23/ViteReact" target="_blank" rel="noopener noreferrer" className="github-link">
              Check out my GitHub projects
            </a>
            <a href="https://github.com/aarogya23" className="global-numbers">
              View all projects
            </a>
          </div>

          {/* Customer Support Section */}
          <div className="contact-card">
            <div className="icon">💬</div>
            <h3>Contact Customer Support</h3>
            <p>
              Sometimes you need a little help from your friends. Or a support
              rep. Don't worry... we're here for you.
            </p>
            <button className="support-button">Contact Support</button>
          </div>

          {/* Facebook Section */}
          <div className="contact-card">
            <div className="icon"><FaFacebook /></div>
            <h3>Follow us on Facebook</h3>
            <p>
              Stay connected and follow us for updates, news, and more.
            </p>
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="social-link">
              Visit our Facebook page
            </a>
          </div>

          {/* Instagram Section */}
          <div className="contact-card">
            <div className="icon"><FaInstagram /></div>
            <h3>Follow us on Instagram</h3>
            <p>
              Want to see our latest photos? Follow us on Instagram!
            </p>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
              Visit our Instagram profile
            </a>
          </div>

        </div>

        {/* Image beside Contact Section */}
        <div className="contact-image">
          <img src={contactImage} alt="Customer Support" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
