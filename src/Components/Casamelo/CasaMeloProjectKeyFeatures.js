import React from 'react';
import Container from 'react-bootstrap/Container'; // Importing Container component from react-bootstrap for layout
import Row from 'react-bootstrap/Row'; // Importing Row component from react-bootstrap for layout
import Col from 'react-bootstrap/Col'; // Importing Col component from react-bootstrap for layout
import Features1 from '../Images/key-project1.webp'; // Importing images for each feature
import Features2 from '../Images/key-project2.webp';
import Features3 from '../Images/key-project11.webp';
import Features4 from '../Images/key-project4.webp';
import Features5 from '../Images/key-project5.webp';
import Features6 from '../Images/key-project6.webp';
import Features7 from '../Images/key-project7.webp';
import Features8 from '../Images/key-project8.webp';
import Features9 from '../Images/key-project9.webp';
import Features10 from '../Images/key-project10.webp';
import Features11 from '../Images/key-project3.webp';
import Features12 from '../Images/key-project12.webp';
import './casamelo.css'; // Import the CSS file for custom styles

// Array of feature objects containing image source and feature name
const features = [
  { img: Features1, name: 'PROTECTED ELEVATOR' },
  { img: Features2, name: '300 MTR AWAY MARKET' },
  { img: Features3, name: 'SNOW FALL' },
  { img: Features4, name: 'HIMALAYAN VIEW' },
  { img: Features5, name: 'ORCHARDS' },
  { img: Features6, name: 'MAINTENANCE ON SITE' },
  { img: Features7, name: 'COVERED CAR PARKING' },
  { img: Features8, name: '24 HOURS SECURITY' },
  { img: Features9, name: 'RESTAURANT' },
  { img: Features10, name: 'CLUB HOUSE' },
  { img: Features11, name: 'WATER HARVESTING' },
  { img: Features12, name: ['EARTHQUAKE RESISTANT', 'RCC STRUCTURE'] }
];

const CasaMeloProjectKeyFeatures = () => {
  return (
    <Container fluid className="p-3"> {/* Using a fluid container with padding for spacing */}
      <Row>
        {features.map((feature, index) => ( // Mapping through features array to create a Col for each feature
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={index}> {/* Responsive column settings */}
            <div className="feature-item text-center"> {/* Centering text and image */}
              <img 
                src={feature.img} 
                alt={Array.isArray(feature.name) ? feature.name.join(' ') : feature.name} 
                className="CasaMelo_Project_Key_Features_Img img-fluid" 
              /> {/* Displaying feature image */}
              <p className="Key_Features_Name mt-2">
                {Array.isArray(feature.name) 
                  ? feature.name.map((line, lineIndex) => ( // Handling multiline feature names
                      <React.Fragment key={lineIndex}>
                        {line}
                        {lineIndex < feature.name.length - 1 && <br />} {/* Adding line breaks for multiline names */}
                      </React.Fragment>
                    ))
                  : feature.name // Displaying single line feature name
                }
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CasaMeloProjectKeyFeatures; // Exporting the component for use in other parts of the application
