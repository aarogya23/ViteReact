// src/DSAMCQs.js
import React, { useState } from 'react';
import './assets/Tree.css'; // Use the same CSS for styling or customize it

const DSAMCQs = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState('');

  const questions = [
    {
      question: 'What is the time complexity of Quick Sort in the average case?',
      options: ['O(n)', 'O(n^2)', 'O(n log n)', 'O(log n)'],
      correctAnswer: 'O(n log n)'
    },
    {
      question: 'Which of the following is the most efficient way to search for an element in a sorted array?',
      options: ['Linear Search', 'Binary Search', 'Jump Search', 'Exponential Search'],
      correctAnswer: 'Binary Search'
    },
    {
      question: 'What is the space complexity of merge sort?',
      options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'],
      correctAnswer: 'O(n)'
    },
    // Add more questions as needed
  ];

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      setFeedback('Please select an answer.');
    } else {
      const currentQuestion = questions[0]; // For now, we are only checking the first question
      if (selectedAnswer === currentQuestion.correctAnswer) {
        setFeedback('Correct Answer!');
      } else {
        setFeedback(`Incorrect! The correct answer is ${currentQuestion.correctAnswer}.`);
      }
    }
  };

  return (
    <div className="tree-container">
      <h2 className="title">Data Structures and Algorithms - MCQ Quiz</h2>

      <p className="intro-text">
        Test your knowledge of Data Structures and Algorithms by answering the following questions. Select the correct option and get feedback.
      </p>

      {/* Display questions */}
      {questions.map((question, index) => (
        <div key={index} className="question-container">
          <h3>{question.question}</h3>
          <ul className="options-list">
            {question.options.map((option, idx) => (
              <li key={idx}>
                <label>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    onChange={() => setSelectedAnswer(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Display feedback */}
      <div className="feedback">
        {feedback && <p>{feedback}</p>}
      </div>

      <div className="navigation-buttons">
        <button
          onClick={handleSubmit}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            margin: '10px',
            cursor: 'pointer'
          }}
        >
          Submit Answer
        </button>
      </div>
    </div>
  );
};

export default DSAMCQs;
