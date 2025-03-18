import React from 'react';
import { useNavigate } from 'react-router-dom';
import databaseContent from './databaseContent'; // Import the content file

const Database = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/next-page');
  };

  return (
    <div className="database-container" style={{ padding: '10px' }}>
      <h2 className="title">{databaseContent.title}</h2>

      <h3 className="subheading">Database</h3>
      <p className="intro-text">{databaseContent.intro}</p>

      <h3 className="subheading">Database Operations</h3>
      <ul className="operation-list">
        {databaseContent.operations.map((operation, index) => (
          <li key={index}>
            <strong>{operation.name}:</strong> {operation.description}
          </li>
        ))}
      </ul>

      <h3 className="subheading">SQL Queries Example</h3>

      <h4 className="subheading">DDL Queries</h4>
      <p className="code-description">{databaseContent.queries.ddl.description}</p>
      <pre className="code-block">{databaseContent.queries.ddl.examples}</pre>

      <h4 className="subheading">DML Queries</h4>
      <p className="code-description">{databaseContent.queries.dml.description}</p>
      <pre className="code-block">{databaseContent.queries.dml.examples}</pre>

      <h4 className="subheading">DQL Queries</h4>
      <p className="code-description">{databaseContent.queries.dql.description}</p>
      <pre className="code-block">{databaseContent.queries.dql.examples}</pre>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button className="back-button" style={{ height: '50px', width: 'auto' }}>Back</button>
        <button className="next-button" onClick={handleNext} style={{ height: '50px', width: 'auto' }}>Next</button>
      </div>
    </div>
  );
};

export default Database;
