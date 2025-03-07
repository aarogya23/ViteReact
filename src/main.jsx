// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure to import from 'react-dom/client'
import './assets/index.css'; // You can style your app here
import App from './App'; // Importing the main App component

// Create a root element where React will render the app
const root = ReactDOM.createRoot(document.getElementById('root')); // Correct method and 'root' ID
root.render(
  <React.StrictMode>
    <App /> {/* This renders your main App component */}
  </React.StrictMode>
);
