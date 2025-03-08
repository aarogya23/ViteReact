// src/TowerOfHanoi.js
import React, { useState } from 'react';
import './assets/Tree.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

const TowerOfHanoi = () => {
  const navigate = useNavigate();
  const [steps, setSteps] = useState([]);
  const [diskCount, setDiskCount] = useState(3);  // Default number of disks is 3

  const solveTowerOfHanoi = (n, source, target, auxiliary, moves) => {
    if (n === 1) {
      moves.push(`Move disk 1 from ${source} to ${target}`);
      return;
    }
    solveTowerOfHanoi(n - 1, source, auxiliary, target, moves);
    moves.push(`Move disk ${n} from ${source} to ${target}`);
    solveTowerOfHanoi(n - 1, auxiliary, target, source, moves);
  };

  const startSolution = () => {
    const moves = [];
    solveTowerOfHanoi(diskCount, 'A', 'C', 'B', moves); // A, B, C are the rods
    setSteps(moves);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleNext = () => {
    navigate('/recursion'); // Ensure this path matches the route for recursion.jsx
  };

  return (
    <div className="tree-container">
      <h2 className="title">Tower of Hanoi Problem - Theory and Solution</h2>

      <p className="intro-text">
        The Tower of Hanoi is a classic puzzle that involves moving a set of disks from one rod to another, following a set of rules. The puzzle is used to demonstrate the concept of recursion.
        <br /><br />
        The objective is to move all the disks from the source rod to the destination rod using an auxiliary rod, while following these rules:
      </p>

      <h3 className="subtitle">Rules of the Tower of Hanoi:</h3>
      <ul>
        <li>Only one disk can be moved at a time.</li>
        <li>A disk can only be placed on top of a larger disk or on an empty rod.</li>
        <li>Disks are initially stacked on one rod in decreasing size, with the largest disk at the bottom.</li>
      </ul>

      <h3 className="subheading">Recursive Solution Explanation</h3>
      <p className="solution-text">
        The solution to the Tower of Hanoi problem can be described using recursion:
      </p>
      <ol>
        <li>Move the top \(n-1\) disks from the source rod to the auxiliary rod.</li>
        <li>Move the nth (largest) disk from the source rod to the destination rod.</li>
        <li>Move the \(n-1\) disks from the auxiliary rod to the destination rod.</li>
      </ol>

      {/* Example Code Section */}
      <h3 className="subtitle">Example: Tower of Hanoi Solution (Java)</h3>
      <pre className="code-block">
        {`
public class TowerOfHanoi {

    // Recursive function to solve the Tower of Hanoi problem
    public static void solveTowerOfHanoi(int n, String source, String target, String auxiliary) {
        if (n == 1) {
            System.out.println("Move disk 1 from " + source + " to " + target);
            return;
        }
        solveTowerOfHanoi(n - 1, source, auxiliary, target);
        System.out.println("Move disk " + n + " from " + source + " to " + target);
        solveTowerOfHanoi(n - 1, auxiliary, target, source);
    }

    public static void main(String[] args) {
        int numDisks = 3;
        solveTowerOfHanoi(numDisks, "A", "C", "B"); // A, B, C are the rods
    }
}
        `}
      </pre>

      <h3 className="subheading">Tower of Hanoi Output Screen</h3>
      <pre className="output-screen">
        {`
Move disk 1 from A to C
Move disk 2 from A to B
Move disk 1 from C to B
Move disk 3 from A to C
Move disk 1 from B to A
Move disk 2 from B to C
Move disk 1 from A to C
        `}
      </pre>

      <p><strong>Explanation:</strong></p>
      <ul>
        <li>The function calls itself to move smaller disks between the rods.</li>
        <li>The largest disk is moved only once, and the smaller disks are moved recursively.</li>
      </ul>

      <h3 className="subtitle">Interactive Solution: Set Number of Disks</h3>
      <p>
        You can change the number of disks to see how the solution evolves for different cases. Try different values of disks to understand how the recursion works.
      </p>
      <div className="disk-settings">
        <label>Number of disks: </label>
        <input 
          type="number" 
          value={diskCount} 
          onChange={(e) => setDiskCount(e.target.value)} 
          min="1" 
          style={{ padding: '5px', fontSize: '1rem' }}
        />
        <button 
          onClick={startSolution}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            margin: '10px',
            cursor: 'pointer'
          }}
        >
          Start Solving
        </button>
      </div>

      <h3 className="subtitle">Solution Steps:</h3>
      <div className="steps">
        <ul>
          {steps.length === 0 ? (
            <li>No steps yet. Press "Start Solving" to see the solution.</li>
          ) : (
            steps.map((step, index) => <li key={index}>{step}</li>)
          )}
        </ul>
      </div>

      <div className="navigation-buttons">
        <button className="back-button" onClick={handleBack} style={{ height: '50px', width: 'auto' }}>Back</button>
        <button className="next-button" onClick={handleNext} style={{ height: '50px', width: 'auto' }}>Next</button>
      </div>
    </div>
  );
};

export default TowerOfHanoi;
