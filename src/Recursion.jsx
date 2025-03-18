import React from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/Tree.css'; // Import the CSS file for styling
import recursionContent from './recursionContent'; // Import the external content file

const Recursion = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleNext = () => {
    navigate('/tower-of-hanoi'); // Go to the next page (adjust the path if needed)
  };

  return (
    <div className="tree-container">
      <h2 className="title">{recursionContent.title}</h2>

      <p className="intro-text">
        {recursionContent.introText}
      </p>

      {/* Factorial Example Section */}
      <h3 className="subtitle">{recursionContent.factorialExample.subtitle}</h3>
      <pre className="code-block">
        {recursionContent.factorialExample.code}
      </pre>

      <h3 className="subheading">Factorial Using Recursion Output Screen</h3>
      <pre className="output-screen">
        {recursionContent.factorialExample.output}
      </pre>

      <p><strong>Explanation:</strong></p>
      <ul>
        {recursionContent.factorialExample.explanation.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Fibonacci Example Section */}
      <h3 className="subtitle">{recursionContent.fibonacciExample.subtitle}</h3>
      <pre className="code-block">
        {recursionContent.fibonacciExample.code}
      </pre>

      <h3 className="subheading">Fibonacci Series Using Recursion Output Screen</h3>
      <pre className="output-screen">
        {recursionContent.fibonacciExample.output}
      </pre>

      {/* Fibonacci Sum Example Section */}
      <h3 className="subtitle">{recursionContent.fibonacciSumExample.subtitle}</h3>
      <pre className="code-block">
        {recursionContent.fibonacciSumExample.code}
      </pre>

      <h3 className="subheading">Fibonacci Series Using Recursion Output Screen</h3>
      <pre className="output-screen">
        {recursionContent.fibonacciSumExample.output}
      </pre>

      <div className="navigation-buttons">
        <button className="back-button" onClick={handleBack} style={{height : '50px' , width : 'auto'}}>Back</button>
        <button className="next-button" onClick={handleNext} style={{height : '50px' , width : 'auto'}}>Next</button>
      </div>
    </div>
  );
};

export default Recursion;
