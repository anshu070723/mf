import Location1 from '../Images/Dehradun.webp'  // Importing image for Dehradun location
import Location2 from '../Images/nathukhan.webp' // Importing image for Nathukhan location
import Location3 from '../Images/ramgarh.webp'   // Importing image for Ramgarh location
import './Home.css';  // Importing CSS file for styling

const LocationImageHomePage = () => {
  return (
    <main>
        <p className="Home_Heading"><ins>Our Locations</ins></p>{/* Heading for the section */}
        <p className='location_prea'>
            We offer ideal locations for your residence that is perfect for enjoying holidays or vacation. Experience the tranquility and beauty of our community, designed for relaxation and leisure.
        </p> {/* Brief description of the locations */}

        <section className="Location_Images_Container">{/* Container for the location images */}
            <div className='Location_img_box'>{/* Box for each location image and name */}
                <img src={Location3} alt="Property In Location" className="Location_Image"/>{/* Image for Ramgarh location */}
                <p className="Location_img_name">Dehradun</p> {/* Name for the location */}
            </div>
            <div className='Location_img_box'>{/* Box for each location image and name */}
                <img src={Location2} alt="Property In Location" className="Location_Image"/>{/* Image for Nathukhan location */}
                <p className="Location_img_name">Nainital</p>{/* Name for the location */}
            </div>
            <div className='Location_img_box'>{/* Box for each location image and name */}
                <img src={Location1} alt="Property In Location" className="Location_Image"/>{/* Image for Dehradun location */}
                <p className="Location_img_name">Rishikesh</p>{/* Name for the location */}
            </div>
        </section>
    </main>
  );
};

export default LocationImageHomePage;  // Exporting the component for use in other parts of the application
