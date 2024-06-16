import React, { useEffect } from "react";
import { FaCircle } from "react-icons/fa"; // Importing the FaCircle icon from react-icons library
import './casamelo.css'; // Importing CSS file for styling
import BEDROOMS from '../Images/casa_Melo_Bedroom.webp'; // Importing image for bedrooms
import SUPERAREA from '../Images/casa_Melo_Area.webp'; // Importing image for super area
import BATHS from '../Images/casa_Melo_Shower.webp'; // Importing image for baths
import CARPARKING from '../Images/casa_Melo_Car.webp'; // Importing image for car parking
import POSSESSIONDATE from '../Images/casa_Melo_Date.webp'; // Importing image for possession date
import AOS from 'aos';
const CasaMeloLineMove = () => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <center> {/* Centering the content */}
      <ul id="CasaMelo_Line_Move_Container"> {/* Container for the list of items */}
        {/* Each list item represents a feature of the property */}
        <li data-aos={"fade-right"}>
          <img src={BEDROOMS} alt='' className="CasaMelo_Line_Move_img" /> {/* Bedroom image */}
          <br />BEDROOMS<br /> {/* Text label */}
          <span className='CasaMelo_Line_Move_Circle'><FaCircle /></span> {/* Circle icon */}
          <br className='CasaMelo_Line_Move_Circle' />
          <span>3</span> {/* Number of bedrooms */}
        </li>
        <li data-aos={"fade-right"}>
          <img src={SUPERAREA} alt='' className="CasaMelo_Line_Move_img" /> {/* Super area image */}
          <br />SUPER AREA<br /> {/* Text label */}
          <span className='CasaMelo_Line_Move_Circle'><FaCircle /></span> {/* Circle icon */}
          <br className='CasaMelo_Line_Move_Circle' />
          <span>2700 sq. ft.</span> {/* Size of the super area */}
        </li>
        <li data-aos={"fade-right"}>
          <img src={BATHS} alt='' className="CasaMelo_Line_Move_img" /> {/* Baths image */}
          <br />BATHS<br /> {/* Text label */}
          <span className='CasaMelo_Line_Move_Circle'><FaCircle /></span> {/* Circle icon */}
          <br className='CasaMelo_Line_Move_Circle' />
          <span>4</span> {/* Number of baths */}
        </li>
        <li data-aos={"fade-right"}>
          <img src={CARPARKING} alt='' className="CasaMelo_Line_Move_img" /> {/* Car parking image */}
          <br />CAR PARKING<br /> {/* Text label */}
          <span className='CasaMelo_Line_Move_Circle'><FaCircle /></span> {/* Circle icon */}
          <br className='CasaMelo_Line_Move_Circle' />
          <span>1 (Covered)</span> {/* Car parking details */}
        </li>
        <li data-aos={"fade-right"}>
          <img src={POSSESSIONDATE} alt='' className="CasaMelo_Line_Move_img" /> {/* Possession date image */}
          <br />POSSESSION DATE<br /> {/* Text label */}
          <span className='CasaMelo_Line_Move_Circle'><FaCircle /></span> {/* Circle icon */}
          <br className='CasaMelo_Line_Move_Circle' />
          <span>DEC-2024</span> {/* Possession date */}
        </li>
      </ul>
      <div id='CasaMelo_Line_Move'></div> {/* Additional div for any extra content or styling */}
    </center>
  );
}

export default CasaMeloLineMove; // Exporting the component for use in other parts of the application
