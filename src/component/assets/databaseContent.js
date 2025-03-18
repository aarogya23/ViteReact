const databaseContent = {
  title: "Database Topics",
  intro: "A database is an organized collection of data that can be easily accessed, managed, and updated. Databases are typically used to store, manipulate, and retrieve data for various applications, including web applications, enterprise systems, and more.",

  operations: [
    { name: "Insert (DML)", description: "Adds data into the database." },
    { name: "Update (DML)", description: "Modifies existing data in the database." },
    { name: "Delete (DML)", description: "Removes data from the database." },
    { name: "Select (DQL)", description: "Retrieves data from the database." },
    { name: "Create (DDL)", description: "Defines a new table, view, or other database object." },
    { name: "Alter (DDL)", description: "Modifies an existing database object." },
    { name: "Drop (DDL)", description: "Removes a database object (table, view, etc.)." }
  ],

  queries: {
    ddl: {
      description: "Data Definition Language (DDL) includes commands that define the structure of a database.",
      examples: `
-- Create a new table
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
DROP TABLE Customers;`
    },
    dml: {
      description: "Data Manipulation Language (DML) includes commands that manipulate the data within tables.",
      examples: `
-- Insert data into the table
INSERT INTO Customers (CustomerID, FirstName, LastName, Email)
VALUES (1, 'John', 'Doe', 'john.doe@example.com');

-- Update data in the table
UPDATE Customers
SET Email = 'john.doe@newdomain.com'
WHERE CustomerID = 1;

-- Delete data from the table
DELETE FROM Customers
WHERE CustomerID = 1;`
    },
    dql: {
      description: "Data Query Language (DQL) includes the command to retrieve data from the database.",
      examples: `
-- Select all customers
SELECT * FROM Customers;

-- Select specific columns (FirstName, LastName)
SELECT FirstName, LastName FROM Customers;

-- Select customers with a specific condition
SELECT * FROM Customers
WHERE LastName = 'Doe';`
    }
  }
};

export default databaseContent;
