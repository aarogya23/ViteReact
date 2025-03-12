import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const topics = [
  "Trending Now", "Data Structures", "Algorithms", "System Design",
  "Foundational Courses", "Data Science", "Practice Problem", "Python",
  "Machine Learning", "Data Science Using Python", "Django", "DevOps",
  "JavaScript", "Java", "C", "C++"
];

const Home = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += direction === "left" ? -200 : 200;
    }
  };

  const subnav = (topic) => {
    // Convert topic to lowercase and replace spaces with dashes
    const route = `/topics/${topic.toLowerCase().replace(/ /g, "-")}`;
    navigate(route);
  };

  return (
    <div className="topics-wrapper">
      <button className="scroll-btn left" onClick={() => scroll("left")}>{"<"}</button>
      
      <div className="topics-container" ref={scrollRef}>
        {topics.map((topic, index) => (
          <span 
            key={index} 
            className="topic-item" 
            onClick={() => handleNavigation(topic)}
          >
            {topic}
          </span>
        ))}
      </div>

      <button className="scroll-btn right" onClick={() => scroll("right")}>{">"}</button>
    </div>
  );
};

export default subnav;
