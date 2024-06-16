import React, { useEffect } from "react";
import { FaCircle } from "react-icons/fa"; // Importing FaCircle icon from react-icons library
import './casamelo.css'; // Importing CSS file for styling
import AOS from 'aos';
const CasaMeloLineMove = () => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <center> {/* Centering the content */}
      <ul id="CasaMelo_Line_Move_Container"> {/* Container for the list of locations */}
        {/* Each list item represents a location and its distance */}
        <li data-aos={"fade-right"}>
          <br className="locatin_br"/> {/* Line break for spacing */}
          <b>Mukteshwar</b> {/* Location name */}
          <br/>
          <span className='CasaMelo_Line_Move_Circle'><FaCircle /></span> {/* Circle icon */}
          <br className='CasaMelo_Line_Move_Circle'/>
          <span>(20 KMs)</span> {/* Distance from the location */}
        </li>
        <li data-aos={"fade-right"}>
          <b>Bhimtal /<br className="locatin_br"/> Bhowali</b> {/* Location names */}
          <br/>
          <span className='CasaMelo_Line_Move_Circle'><FaCircle /></span> {/* Circle icon */}
          <br className='CasaMelo_Line_Move_Circle'/>
          <span>(30 Kms)</span> {/* Distance from the location */}
        </li>
        <li data-aos={"fade-right"}>
          <b>Nainital /<br className="locatin_br"/> Almora</b> {/* Location names */}
          <br/>
          <span className='CasaMelo_Line_Move_Circle'><FaCircle /></span> {/* Circle icon */}
          <br className='CasaMelo_Line_Move_Circle'/>
          <span>(45 Kms)</span> {/* Distance from the location */}
        </li>
        <li data-aos={"fade-right"}>
          <b>Haldwani /<br className="locatin_br"/> Kathgodam</b> {/* Location names */}
          <br/>
          <span className='CasaMelo_Line_Move_Circle'><FaCircle /></span> {/* Circle icon */}
          <br className='CasaMelo_Line_Move_Circle'/>
          <span>(60 Kms)</span> {/* Distance from the location */}
        </li>
        <li data-aos={"fade-right"}>
          <br className="locatin_br"/> {/* Line break for spacing */}
          <b>Delhi NCR</b> {/* Location name */}
          <br/>
          <span className='CasaMelo_Line_Move_Circle'><FaCircle /></span> {/* Circle icon */}
          <br className='CasaMelo_Line_Move_Circle'/>
          <span>(330 Kms)</span> {/* Distance from the location */}
        </li>
      </ul>
      <div id='CasaMelo_Line_Move'></div> {/* Additional div for any extra content or styling */}
    </center>
  )
}

export default CasaMeloLineMove; // Exporting the component for use in other parts of the application
