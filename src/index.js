// Import the React library, which is necessary to create React components
import React from 'react';

// Import the ReactDOM library, which is used to interact with the DOM
import ReactDOM from 'react-dom/client';

// Import the main App component from the local file './App'
import App from './App';

// Find the root DOM node with the id 'MountForest' and create a root React node
const root = ReactDOM.createRoot(document.getElementById('MountForest'));

// Render the App component inside the root React node
root.render(
  <>
    {/* The App component is rendered here. The empty fragment (<></>) is a shorthand for <React.Fragment> */}
    <App/>
  </>
);
