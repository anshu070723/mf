import React, { useEffect } from "react";
import './Home.css'; // Importing CSS styles for Home component
import IncomeImg from '../Images/Income.webp' // Importing IncomeImg image
import AOS from 'aos';
const SecondIncomeHomePage = () => { // Functional component for rendering information about second income on the Home page
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <div className='Second_Income_Home_Page_Container'>{/* Container for second income section */}
        <div className='Second_Income_Img_Container'><img src={IncomeImg} alt='Second Income Source' className='Second_Income_Img' data-aos={"fade-left"}/></div>{/* Container for second income image */}
        <div>
            <h2 id='Second_Income_header'>Luxurious Holiday Homes with Second Income Source</h2>{/* Heading for second income section */}
            <br/>
            <p id='Second_Income_perag'>
                Yes you heard right ‘Ab Ghar bhi aur Basar Bhi’. We are offering you assured second income on your Home away from Home with holidays benefit and also we will manage and maintain your property at our own expense.<br/><br/>
                 {/* Description of second income offering */}
                So invest and experience the serenity of Nature in our holiday homes nestled in the mountains of Uttarakhand and earn at the same time.
            </p>{/* Additional information */}
        </div>
    </div>
  );
}

export default SecondIncomeHomePage; // Exporting SecondIncomeHomePage component as default
