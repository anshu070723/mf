import Container from 'react-bootstrap/Container'; // Importing Container component from react-bootstrap
import Row from 'react-bootstrap/Row'; // Importing Row component from react-bootstrap
import Col from 'react-bootstrap/Col'; // Importing Col component from react-bootstrap
import CasaMelo from '../Images/casaMelo.webp'
import { NavLink } from 'react-router-dom'; 
import './Home.css';
const ProjectHomePage = () => {
  return (
    <>
      <p className="Home_Heading">Project</p>{/* Heading for project section */}
      <div className="Project_Container">{/* Container for project items */}
        <div className='Home_Page_Project_Container'>{/* Container for individual project item */}
            <div className='Home_Page_Project_img_Container'>{/* Container for project image */}
              <img src={CasaMelo} alt="Casa Melo" className='Home_Page_Project_img' />{/* Project image */}
            </div>
            <Container>{/* Bootstrap container for project details */}
                <Row>{/* Bootstrap row for project location */}
                  <Col>Location</Col>:{/* Column for label */}
                  <Col>Nathuakhan, Nainital (UK)</Col>{/* Column for location */}
                </Row>
                <Row>{/* Bootstrap row for project typology */}
                    <Col>Typology</Col>:{/* Column for label */}
                    <Col>Villas & Service Apartments</Col>{/* Column for typology */}
                </Row>
                <Row>{/* Bootstrap row for project status */}
                    <Col>Status</Col>:{/* Column for label */}
                    <Col>Under Construction</Col>{/* Column for status */}
                </Row>
                <Row>{/* Bootstrap row for "Know More" button */}
                  <Col><button className='Home_Page_Project_link'><NavLink to='/CasaMelo' className='CasaMelo_navlink'>Know More</NavLink></button></Col>{/* Button with NavLink */}
                </Row>
            </Container>
        </div>
      </div>
    </>
  );
};

export default ProjectHomePage;
