import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Custom CSS for the app
import App from './App'; // Main App component
import { BrowserRouter } from 'react-router-dom'; // Router for managing routes
import reportWebVitals from './reportWebVitals'; // Performance measurement utility

const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component into the root element
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

// Optional: Measure performance in your app
// Pass a function to log results or send to an analytics endpoint
reportWebVitals();
