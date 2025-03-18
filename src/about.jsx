import React from 'react';
import './assets/About.css'; // Import CSS for styling
import brandImage from './assets/brand.png'; // Import your brand image
import myImage from './assets/image4.jpg'; // Import your main image
import reactImage from './assets/react.jpeg'; // Import your React-related image
import Footer from './component/Footer';
import aboutContent from './aboutContent';  // Import the external aboutContent file

const About = () => {
  return (
    <div>
      {/* About Us Section */}
      <div className="about-us-container">
        <h2>{aboutContent.title}</h2>
        <div className="about-us-content">
          <div className="about-us-text">
            <p>{aboutContent.intro1}</p>
            <p>{aboutContent.intro2}</p>
            <p>{aboutContent.intro3}</p>
          </div>
          <img className="about-us-image" src={brandImage} alt="Brand Logo" />
        </div>
      </div>

      {/* About Me Section */}
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <img className="about-image" src={myImage} alt={aboutContent.aboutMe.name} />
          <div className="about-text">
            <p dangerouslySetInnerHTML={{ __html: aboutContent.aboutMe.introduction }} />
            <p>{aboutContent.aboutMe.hobby}</p>
            <p>{aboutContent.aboutMe.skills}</p>
            <p>{aboutContent.aboutMe.contact}</p>
            <a href={aboutContent.aboutMe.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
              {aboutContent.aboutMe.githubText}
            </a>
          </div>
        </div>
        
        {/* React Section with Image on the Right */}
        <div className="react-section">
          <h3 style={{ textAlign: 'left' }}>{aboutContent.reactSection.title}</h3>
          <div className="react-content">
            <div className="react-text">
              <p>{aboutContent.reactSection.content1}</p>
              <p>{aboutContent.reactSection.content2}</p>
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
