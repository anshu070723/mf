// Components/NotFound/NotFound.js
import React from 'react'; // Importing React library
import { NavLink } from 'react-router-dom'; // Importing NavLink component from react-router-dom
import './NotFound.css'; // Importing CSS styles for NotFound component

const NotFound = () => { /* Functional component for displaying 404 - Page Not Found*/
  return (
    <div className="not-found"> {/* Main container with class name "not-found" */}
      <h1>404 - Page Not Found</h1> {/* Heading for page not found */}
      <p>Sorry, the page you are looking for does not exist.</p> {/* Message for page not found */}
      <NavLink to="/Home" className="home-link">Go to Home</NavLink> {/* Link to Home page using NavLink */}
    </div>
  );
};

export default NotFound;/* Exporting NotFound component as default*/
