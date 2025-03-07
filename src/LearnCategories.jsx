import React from 'react';
import { Link } from 'react-router-dom';
import './assets/LearnCategories.css'; // Importing external CSS file

const LearnCategories = () => {
  return (
    <div className="categories-container">
      <h1>Choose Your Learning Path</h1>
      
      <div className="topics-container">
        {/* DSA Box */}
        <div className="topic-box">
          <h2>Data Structures & Algorithms</h2>
          <p>Master essential algorithms and data structures to solve complex problems and ace coding interviews.</p>
          <Link to="/home">
            <button className="category-button">Start Learning</button>
          </Link>
        </div>

        {/* Frontend Box */}
        <div className="topic-box">
          <h2>Frontend Development</h2>
          <p>Learn the core concepts of web development, including HTML, CSS, JavaScript, and modern frontend frameworks like React.</p>
          <Link to="/frontend">
            <button className="category-button">Start Learning</button>
          </Link>
        </div>

        {/* Backend Box */}
        <div className="topic-box">
          <h2>Backend Development</h2>
          <p>Explore server-side development with technologies like Servlet, SpringBoot, databases, and API creation.</p>
          <Link to="/backend">
            <button className="category-button">Start Learning</button>
          </Link>
        </div>
      </div>

      <div className="topics-container">
        {/* UI/UX Box */}
        <div className="topic-box">
          <h2>UI/UX Design</h2>
          <p>Understand the principles of user interface and experience design to create intuitive and visually appealing websites and apps.</p>
          <Link to="/home">
            <button className="category-button">Start Learning</button>
          </Link>
        </div>

        {/* AI/ML Box */}
        <div className="topic-box">
          <h2>AI/ML</h2>
          <p>Dive into Artificial Intelligence and Machine Learning concepts to build smart applications using data-driven approaches.</p>
          <Link to="/frontend">
            <button className="category-button">Start Learning</button>
          </Link>
        </div>

        {/* Database Box */}
        <div className="topic-box">
          <h2>Database</h2>
          <p>Learn the fundamentals of database systems, including SQL, NoSQL, and how to manage data in modern applications.</p>
          <Link to="/backend">
            <button className="category-button">Start Learning</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearnCategories;
