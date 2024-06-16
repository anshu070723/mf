// MasterPlanPopup.js

import React from 'react'; // Importing React
import { TfiClose } from 'react-icons/tfi'; // Importing close icon component from react-icons/tfi
import './casamelo.css'; // Importing CSS file for custom styles
import plan1 from '../Images/plan1.webp'; // Importing master plan images
import plan2 from '../Images/plan2.webp';
import plan3 from '../Images/plan3.webp';
import plan4 from '../Images/plan4.webp';
import plan5 from '../Images/plan5.webp';

// Functional component for the Master Plan Popup
const MasterPlanPopup = ({ show, onClose }) => {
  // Rendering null if show prop is false
  if (!show) return null;

  return (
    // Popup overlay container
    <div className="popup-overlay">
      {/* Popup container */}
      <div className="popup-container">
        {/* Close button */}
        <span className="popup-close-btn" onClick={onClose}><TfiClose /></span>
        {/* Popup content */}
        <div className="popup-content">
          <h1>Master Plan Images</h1> {/* Title */}
          <hr/>
          <br/>
          <p>This is CasaMelo's future master plan as seen in a 3D model.</p> {/* Description */}
          <div>
            {/* Displaying master plan images */}
            <img src={plan1} alt='Casmelo' className='Master_Plan_img'/>
            <img src={plan2} alt='Casmelo' className='Master_Plan_img'/>
            <img src={plan3} alt='Casmelo' className='Master_Plan_img'/>
            <img src={plan4} alt='Casmelo' className='Master_Plan_img'/>
            <img src={plan5} alt='Casmelo' className='Master_Plan_img'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterPlanPopup; // Exporting the component
