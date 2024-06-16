import React, { useEffect, useState } from 'react'; // Importing useEffect and useState hooks from React
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"; // Importing icons from react-icons library
import './casamelo.css'; // Importing CSS styles for Home component
import CasameloAppartment1 from '../Images/casa-APARTMENTS1.webp'; // Importing images
import CasameloAppartment2 from '../Images/casa-APARTMENTS2.webp';
import CasameloAppartment3 from '../Images/casa_Melo_floor2.webp';

const TopImgSliderHomePage = () => { // Functional component for rendering top image slider on the Home page
  const [currentIndexTopImgSliderHomePage, setCurrentIndexTopImgSliderHomePage] = useState(0); // State for current slide index
  const [sliderImages] = useState([ /* Data for slider images */
    { _id: 1, src: CasameloAppartment1 },
    { _id: 2, src: CasameloAppartment2 },
    { _id: 3, src: CasameloAppartment3 },
  ]);

  useEffect(() => { // Effect to change slide automatically every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndexTopImgSliderHomePage((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [sliderImages]);

  const nextSlideTopImgSliderHomePage = () => { // Function to move to next slide
    setCurrentIndexTopImgSliderHomePage((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  const prevSlideTopImgSliderHomePage = () => { // Function to move to previous slide
    setCurrentIndexTopImgSliderHomePage((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <div className='casaMelo_Service_Appartment_Img_Slider'>{/* Container for top image slider */}
      {sliderImages.length > 0 && ( /* Checking if slider images are available */
        <div className='slider'>{/* Slider component */}
          <button className='nav-button left' onClick={prevSlideTopImgSliderHomePage}><FaAngleDoubleLeft /></button>{/* Button to move to previous slide */}
          <img 
            src={sliderImages[currentIndexTopImgSliderHomePage].src} 
            alt="SliderImage" 
            className='Home_page_image_size' 
          />{/* Image for current slide */}
          <button className='nav-button right' onClick={nextSlideTopImgSliderHomePage}><FaAngleDoubleRight /></button>{/* Button to move to next slide */}
          <div className='radio-buttons'>{/* Radio buttons for each slide */}
            {sliderImages.map((ImgSliderHome, index) => ( // Mapping through slider images
              <span 
                key={ImgSliderHome._id} 
                className={`radio-button ${index === currentIndexTopImgSliderHomePage ? 'active' : ''}`} 
                onClick={() => setCurrentIndexTopImgSliderHomePage(index)}
              /> /* Individual radio button */
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TopImgSliderHomePage; // Exporting TopImgSliderHomePage component as default
