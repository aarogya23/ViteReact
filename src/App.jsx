import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import pages/components
import Home from './home.jsx';
import About from './about.jsx';
import Contact from './Contact.jsx';
import Navbar from './component/Navbar.jsx'; // Import the Navbar component
import LearnCategories from './LearnCategories.jsx';
import Tree from './Tree'; // Import the Tree component
import Login from './Login.jsx'; // Import the Login component
import Recursion from "./Recursion";
import TowerOfHanoi from './TowerOfHanoi';
import Database from './Database';
import DSAMCQs from './DSAMCQs';  // The new MCQ page
import RandomFactPage from './RandomFactPage .jsx'; // Import the new FrontEnd component
import ProgrammingAnswers from './ProgrammingAnswers';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Use the Navbar component */}
        <Navbar />

        {/* Routes configuration */}
        <div className="content">
          <Routes>
            {/* Define the routes for each page */}
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/learn-categories" element={<LearnCategories />} />
            <Route path="/tree" element={<Tree />} />
          
            <Route path="/login" element={<Login />} /> {/* Login page */}
            <Route path="/recursion" element={<Recursion />} /> {/* Recursion page */}
            <Route path="/tower-of-hanoi" element={<TowerOfHanoi />} />
            <Route path="/database" element={<Database />} /> 
            <Route path="/mcq" element={<DSAMCQs />} />  {/* New route for MCQs */}
            <Route path="/random-fact" element={<RandomFactPage />} /> {/* Add this new route */}
            <Route path="/programming-answers" element={<ProgrammingAnswers />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
