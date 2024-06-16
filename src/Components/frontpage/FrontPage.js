import React, { useEffect } from 'react';
import FrontIMg from '../Images/logo.webp';
import './frontpage.css'; // Ensure you import the CSS file

const FrontPage = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.front-page').style.display = 'none';
    }, 3000); // Hide after 20 seconds (20000 milliseconds)

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <main>
      <div className="front-page">
        <div className="image-container">
          <img src={FrontIMg} alt="Logo" className="Mountforest"/>
        </div>
      </div>
    </main>
  );
};

export default FrontPage;
