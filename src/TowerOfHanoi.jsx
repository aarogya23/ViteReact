import React, { useState } from 'react';

function TowerOfHanoi() {
  const [disks, setDisks] = useState(3); // Number of disks
  const [moves, setMoves] = useState([]);
  
  // Function to solve Tower of Hanoi using recursion
  const solveHanoi = (n, source, auxiliary, target) => {
    if (n === 1) {
      setMoves((prevMoves) => [...prevMoves, `Move disk from ${source} to ${target}`]);
      return;
    }
    solveHanoi(n - 1, source, target, auxiliary);
    setMoves((prevMoves) => [...prevMoves, `Move disk from ${source} to ${target}`]);
    solveHanoi(n - 1, auxiliary, source, target);
  };

  const handleSolve = () => {
    setMoves([]);
    solveHanoi(disks, 'A', 'B', 'C');
  };

  return (
    <div>
      <h1>Tower of Hanoi</h1>
      
      {/* Theory Section */}
      <section>
        <h2>Theory</h2>
        <p>
          The Tower of Hanoi is a classic puzzle that involves moving a series of disks from one peg to another, following these rules:
        </p>
        <ul>
          <li>There are three pegs: A (source), B (auxiliary), and C (target).</li>
          <li>There are several disks of different sizes, which are initially stacked in decreasing order on peg A.</li>
          <li>Only one disk can be moved at a time.</li>
          <li>A disk can only be moved to the top of another peg if the disk is smaller than the disk already present on that peg.</li>
        </ul>
        <p>
          The goal of the puzzle is to move all the disks from peg A to peg C, following the rules above. The minimum number of moves required to solve the puzzle with <strong>n</strong> disks is <strong>2^n - 1</strong>.
        </p>
        <p>
          The puzzle can be solved using a recursive algorithm that divides the problem into smaller subproblems:
        </p>
        <ul>
          <li>Move <strong>n-1</strong> disks from peg A to peg B using peg C as auxiliary.</li>
          <li>Move the largest disk from peg A to peg C.</li>
          <li>Move <strong>n-1</strong> disks from peg B to peg C using peg A as auxiliary.</li>
        </ul>
      </section>
      
      {/* Buttons and Moves */}
      <p>Move {disks} disks from Tower A to Tower C using Tower B as auxiliary.</p>
      <button onClick={handleSolve}>Solve Tower of Hanoi</button>
      
      {/* List of Moves */}
      <div>
        <h3>Moves:</h3>
        <ul>
          {moves.map((move, index) => (
            <li key={index}>{move}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TowerOfHanoi;
