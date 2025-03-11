// src/About.js
import React from 'react';
import './assets/About.css'; // Import CSS for styling
import myImage from './image4.jpg'; // Import your main image
import Footer from './component/Footer';
 // Example project image 2

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
      
      
    </div>
    <Footer />
    </div>
  );
}

export default About;
