import React, { useState } from 'react';

function ProgrammingAnswers() {
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchAnswer = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // For demonstration purposes, we're using a free public API
      // In a real app, you might want to use a more specialized API
      const response = await fetch(`https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=${encodeURIComponent(query)}&tagged=${language}&site=stackoverflow`);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Programming Answers</h1>
      
      <form onSubmit={searchAnswer} style={{ marginBottom: '20px' }}>
        <select 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)}
          style={{ padding: '8px', marginRight: '10px' }}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="c#">C#</option>
          <option value="php">PHP</option>
        </select>
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your programming question"
          style={{ padding: '8px', width: '60%', marginRight: '10px' }}
        />
        
        <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#0077cc', color: 'white', border: 'none' }}>
          Search
        </button>
      </form>
      
      {loading && <p>Loading...</p>}
      
      {results && (
        <div>
          <h2>Results</h2>
          {results.items && results.items.length > 0 ? (
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {results.items.slice(0, 5).map(item => (
                <li key={item.question_id} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '4px' }}>
                  <h3>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: '#0077cc', textDecoration: 'none' }}>
                      {item.title}
                    </a>
                  </h3>
                  <div>
                    <span style={{ marginRight: '15px' }}>Score: {item.score}</span>
                    <span style={{ marginRight: '15px' }}>Answers: {item.answer_count}</span>
                    <span>Views: {item.view_count}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No results found. Try a different search term.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ProgrammingAnswers;