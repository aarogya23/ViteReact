import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Database = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNext = () => {
    navigate('/next-page'); // Navigate to the next page (replace with actual route)
  };

  return (
    <div className="database-container">
      <h2 className="title">Database Topics</h2>

      {/* Database Section */}
      <h3 className="subheading">Database</h3>
      <p className="intro-text">
        A database is an organized collection of data that can be easily accessed, managed, and updated. Databases are typically used to store, manipulate, and retrieve data for various applications, including web applications, enterprise systems, and more.
      </p>

      <h3 className="subheading">Database Operations</h3>
      <ul className="operation-list">
        <li><strong>Insert (DML):</strong> Adds data into the database.</li>
        <li><strong>Update (DML):</strong> Modifies existing data in the database.</li>
        <li><strong>Delete (DML):</strong> Removes data from the database.</li>
        <li><strong>Select (DQL):</strong> Retrieves data from the database.</li>
        <li><strong>Create (DDL):</strong> Defines a new table, view, or other database object.</li>
        <li><strong>Alter (DDL):</strong> Modifies an existing database object.</li>
        <li><strong>Drop (DDL):</strong> Removes a database object (table, view, etc.).</li>
      </ul>

      <h3 className="subheading">SQL Queries Example</h3>
      <p className="code-description">Here are some SQL queries categorized by DDL, DML, and DQL operations:</p>

      {/* DDL Queries */}
      <h4 className="subheading">DDL Queries</h4>
      <p className="code-description">Data Definition Language (DDL) includes commands that define the structure of a database. Examples:</p>
      <pre className="code-block">
        {`-- Create a new table
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    FirstName NVARCHAR(50),
    LastName NVARCHAR(50),
    Email NVARCHAR(100)
);

-- Alter an existing table (add a new column)
ALTER TABLE Customers
ADD PhoneNumber NVARCHAR(15);

-- Drop a table
DROP TABLE Customers;`}
      </pre>

      <h4 className="subheading">DDL Output</h4>
      <pre className="output-screen">
        {`-- After executing CREATE TABLE, the table "Customers" is created.
-- After executing ALTER TABLE, a new column "PhoneNumber" is added to the "Customers" table.
-- After executing DROP TABLE, the "Customers" table is removed from the database.`}
      </pre>

      {/* DML Queries */}
      <h4 className="subheading">DML Queries</h4>
      <p className="code-description">Data Manipulation Language (DML) includes commands that manipulate the data within tables. Examples:</p>
      <pre className="code-block">
        {`-- Insert data into the table
INSERT INTO Customers (CustomerID, FirstName, LastName, Email)
VALUES (1, 'John', 'Doe', 'john.doe@example.com');

-- Update data in the table
UPDATE Customers
SET Email = 'john.doe@newdomain.com'
WHERE CustomerID = 1;

-- Delete data from the table
DELETE FROM Customers
WHERE CustomerID = 1;`}
      </pre>

      <h4 className="subheading">DML Output</h4>
      <pre className="output-screen">
        {`-- After executing INSERT, the data "John Doe" is added to the "Customers" table.
-- After executing UPDATE, "John Doe" has their email updated to "john.doe@newdomain.com".
-- After executing DELETE, "John Doe" is removed from the "Customers" table.`}
      </pre>

      {/* DQL Queries */}
      <h4 className="subheading">DQL Queries</h4>
      <p className="code-description">Data Query Language (DQL) includes the command to retrieve data from the database. Example:</p>
      <pre className="code-block">
        {`-- Select all customers
SELECT * FROM Customers;

-- Select specific columns (FirstName, LastName)
SELECT FirstName, LastName FROM Customers;

-- Select customers with a specific condition
SELECT * FROM Customers
WHERE LastName = 'Doe';`}
      </pre>

      <h4 className="subheading">DQL Output</h4>
      <pre className="output-screen">
        {`-- After executing SELECT *, all customer records are retrieved.
-- After executing SELECT FirstName, LastName, only first and last names are retrieved for each customer.
-- After executing SELECT with WHERE clause, only the customer(s) with the last name 'Doe' are retrieved.`}
      </pre>

      {/* Buttons at the Bottom */}
      <div className="navigation-buttons">
        <button className="back-button" style={{height: '50px', width: 'auto'}}>Back</button>
        <button className="next-button" onClick={handleNext} style={{height: '50px', width: 'auto'}}>Next</button> {/* Add onClick handler */}
      </div>
    </div>
  );
};

export default Database;
