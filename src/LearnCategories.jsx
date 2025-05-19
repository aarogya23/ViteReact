import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './assets/LearnCategories.css'; // Importing external CSS file
import Footer from './component/Footer';

// Import images for each category
import dsaImage from './assets/dsa.png';
import frontendImage from './assets/frontend.jpg';
import backendImage from './assets/backend.jpg';
import uiuxImage from './assets/ui.jpg';import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './assets/LearnCategories.css'; // Importing external CSS file
import Footer from './component/Footer';

// Import images for each category
import dsaImage from './assets/dsa.png';
import frontendImage from './assets/frontend.jpg';
import backendImage from './assets/backend.jpg';
import uiuxImage from './assets/ui.jpg';
import aiMlImage from './assets/aiml.jpg';
import databaseImage from './assets/database.jpg';

const LearnCategories = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Array of topics with their details
  const topics = [
    {
      name: 'Data Structures & Algorithms',
      description: 'Master essential algorithms and data structures to solve complex problems and ace coding interviews.',
      image: dsaImage,
      link: '/home'
    },
    {
      name: 'Frontend Development',
      description: 'Learn the core concepts of web development, including HTML, CSS, JavaScript, and modern frontend frameworks like React.',
      image: frontendImage,
      link: '/frontend'
    },
    {
      name: 'Backend Development',
      description: 'Explore server-side development with technologies like Servlet, SpringBoot, databases, and API creation.',
      image: backendImage,
      link: '/backend'
    },
    {
      name: 'UI/UX Design',
      description: 'Understand the principles of user interface and experience design to create intuitive and visually appealing websites and apps.',
      image: uiuxImage,
      link: '/home'
    },
    {
      name: 'AI/ML',
      description: 'Dive into Artificial Intelligence and Machine Learning concepts to build smart applications using data-driven approaches.',
      image: aiMlImage,
      link: '/random-fact'
    },
    {
      name: 'Database',
      description: 'Learn the fundamentals of database systems, including SQL, NoSQL, and how to manage data in modern applications.',
      image: databaseImage,
      link: '/database'
    }
  ];

  // Filter topics based on search query
  const filteredTopics = topics.filter(topic =>
    topic.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
  
      <div className="categories-container">
        <h1>Choose Your Learning Path</h1>

        {/* Search box */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for a topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-box"
          />
        </div>

        <div className="scrolling-container">
          <div className="topics-wrapper">
            <div className="topics-container">
              {/* Render filtered topics */}
              {filteredTopics.map((topic, index) => (
                <div className="topic-box" key={index}>
                  <img src={topic.image} alt={topic.name} className="category-image" />
                  <h2>{topic.name}</h2>
                  <div className="hover-text">
                    <p>{topic.description}</p>
                  </div>
                  <Link to={topic.link}>
                    <button className="category-button">Start Learning</button>
                  </Link>
                </div>
              ))}
            </div>

            {/* Duplicate content for seamless scrolling */}
            <div className="topics-container">
              {filteredTopics.map((topic, index) => (
                <div className="topic-box" key={index}>
                  <img src={topic.image} alt={topic.name} className="category-image" />
                  <h2>{topic.name}</h2>
                  <div className="hover-text">
                    <p>{topic.description}</p>
                  </div>
                  <Link to={topic.link}>
                    <button className="category-button">Start Learning</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LearnCategories;
import aiMlImage from './assets/aiml.jpg';
import databaseImage from './assets/database.jpg';

const LearnCategories = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Array of topics with their details
  const topics = [
    {
      name: 'Data Structures & Algorithms',
      description: 'Master essential algorithms and data structures to solve complex problems and ace coding interviews.',
      image: dsaImage,
      link: '/home'
    },
    {
      name: 'Frontend Development',
      description: 'Learn the core concepts of web development, including HTML, CSS, JavaScript, and modern frontend frameworks like React.',
      image: frontendImage,
      link: '/frontend'
    },
    {
      name: 'Backend Development',
      description: 'Explore server-side development with technologies like Servlet, SpringBoot, databases, and API creation.',
      image: backendImage,
      link: '/backend'
    },
    {
      name: 'UI/UX Design',
      description: 'Understand the principles of user interface and experience design to create intuitive and visually appealing websites and apps.',
      image: uiuxImage,
      link: '/home'
    },
    {
      name: 'AI/ML',
      description: 'Dive into Artificial Intelligence and Machine Learning concepts to build smart applications using data-driven approaches.',
      image: aiMlImage,
      link: '/random-fact'
    },
    {
      name: 'Database',
      description: 'Learn the fundamentals of database systems, including SQL, NoSQL, and how to manage data in modern applications.',
      image: databaseImage,
      link: '/database'
    }
  ];

  // Filter topics based on search query
  const filteredTopics = topics.filter(topic =>
    topic.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
  
      <div className="categories-container">
        <h1>Choose Your Learning Path</h1>

        {/* Search box */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for a topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-box"
          />
        </div>

        <div className="scrolling-container">
          <div className="topics-wrapper">
            <div className="topics-container">
              {/* Render filtered topics */}
              {filteredTopics.map((topic, index) => (
                <div className="topic-box" key={index}>
                  <img src={topic.image} alt={topic.name} className="category-image" />
                  <h2>{topic.name}</h2>
                  <div className="hover-text">
                    <p>{topic.description}</p>
                  </div>
                  <Link to={topic.link}>
                    <button className="category-button">Start Learning</button>
                  </Link>
                </div>
              ))}
            </div>

            {/* Duplicate content for seamless scrolling */}
            <div className="topics-container">
              {filteredTopics.map((topic, index) => (
                <div className="topic-box" key={index}>
                  <img src={topic.image} alt={topic.name} className="category-image" />
                  <h2>{topic.name}</h2>
                  <div className="hover-text">
                    <p>{topic.description}</p>
                  </div>
                  <Link to={topic.link}>
                    <button className="category-button">Start Learning</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LearnCategories;
