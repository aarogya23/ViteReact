// src/About.js
import React from 'react';
import './assets/About.css'; // Import CSS for styling
import myImage from './image4.jpg'; // Import your main image
import reactImage from './react.jpeg'; // Import your React-related image
import Footer from './component/Footer';

const About = () => {
  return (
    <div>
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <img className="about-image" src={myImage} alt="Aarogya Thapa" />
          <div className="about-text">
            <p>
              My name is <strong>Aarogya Thapa</strong>. I am a 3rd semester student pursuing a
              Bachelor's in Information and Communication Technology (BICT) at Virinchi College. 
              I am passionate about learning new technologies, coding, and solving problems. 
              I enjoy working on projects that challenge my skills and help me grow as a developer.
            </p>
            <p>
              In my free time, I love exploring new tech trends and playing games. I am always looking to expand my knowledge and improve my programming 
              abilities.
            </p>
            <p>
              I'm currently working on improving my skills in web development, particularly in React and Node.js, and I also have a strong interest in machine learning and data science.
            </p>
            <p>
              If you want to get in touch, feel free to reach out to me through my social media profiles or email. I'm always open to new opportunities, collaborations, and learning experiences.
            </p>
            <a href="https://github.com/aarogya23" target="_blank" rel="noopener noreferrer" className="github-link">
              Check out my GitHub projects
            </a>
          </div>
        </div>
        
        {/* New React Section with Image on the Right */}
        <div className="react-section">
          <h3 style={{textAlign : 'left'}}>Why i choose React ?</h3>
          <div className="react-content">
            <div className="react-text">
              <p>
                React is a popular JavaScript library for building user interfaces, primarily for single-page applications. 
                It allows developers to create fast, interactive UIs by breaking them down into reusable components. 
                React's virtual DOM ensures efficient rendering and improves performance by only updating parts of the UI that change. 
                It is maintained by Facebook and has a large, active community.
              </p>
              <p>
                I have been learning React and have found it to be a powerful tool for creating dynamic and responsive web applications. 
                Its component-based architecture and ability to manage state effectively have made it a key part of my web development skill set. 
                I'm excited to continue exploring React's features and capabilities as I work on more complex projects.
              </p>
            </div>
            <img className="react-image" src={reactImage} alt="React Logo" />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default About;
