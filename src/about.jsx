// src/About.js
import React from 'react';
import './assets/About.css'; // Import CSS for styling
import myImage from './image4.jpg'; // Import your image file (make sure to place the image in the src folder)

const About = () => {
  return (
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
            In my free time, I love exploring new tech trends and playing Games. I am always looking to expand my knowledge and improve my programming 
            abilities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
