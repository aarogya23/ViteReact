import React, { useState, useEffect } from 'react';
import { BiBorderRadius } from 'react-icons/bi';

const RandomFactPage = () => {
  const [randomFact, setRandomFact] = useState(''); // State to store random fact
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  // Fetch random fact from API
  const fetchRandomFact = async () => {
    setLoading(true); // Set loading to true before fetching
    setError(null); // Reset error state
    try {
      const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
      const data = await response.json();
      setRandomFact(data.text); // Set the random fact
      setLoading(false); // Set loading to false after the fact is fetched
    } catch (error) {
      console.error('Error fetching random fact:', error);
      setError('Failed to load fact. Please try again later.');
      setLoading(false);
    }
  };

  // Fetch the random fact when the component is mounted
  useEffect(() => {
    fetchRandomFact();
  }, []); // Empty array ensures this runs only once after the component mounts

  return (
    <div className="random-fact-page">
      <h2>Random Fact</h2>
      {loading ? (
        <p>Loading fact...</p> // Show loading text while fetching
      ) : error ? (
        <p>{error}</p> // Display error message if there was an issue fetching the fact
      ) : (
        <p>{randomFact}</p> // Show the fetched random fact
      )}

      {/* Button to generate a new random fact */}
      <button onClick={fetchRandomFact} style={buttonStyle}>
        Generate
      </button>
    </div>
  );
};

// Styling
const buttonStyle ={
    marginTop : '20px',
    backgroundColor : '#007bff',
    color :'white',
    border:'none',
    padding :'10px 20px',
    borderRadius: '5px',
    cursor :'pointer',
    fontSize :'16px',
};

export default RandomFactPage;
