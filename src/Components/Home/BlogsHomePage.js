import Container from 'react-bootstrap/Container'; // Importing Container component from react-bootstrap
import Row from 'react-bootstrap/Row'; // Importing Row component from react-bootstrap
import Col from 'react-bootstrap/Col'; // Importing Col component from react-bootstrap
import './Home.css'; // Importing CSS styles for Home component
import { NavLink } from 'react-router-dom'; // Importing NavLink component from react-router-dom
import Blog from '../Images/image1.webp';

const BlogsHomePage = () => { // Functional component for rendering blog items on the home page
  return (
    <> {/* Fragment wrapper*/}
      <p className="Home_Heading">Blogs</p>{/* Heading for blogs section */}
      <Container>{/* Bootstrap container */}
        <Row>{/* Bootstrap row */}
          <Col xxl={4} xl={4} lg={4} md={6} sm={8}>{/* Bootstrap column for blog item */}
            <div className='Blog_Container'>{/* Container for individual blog item */}
              <img src={Blog} alt='Blog' className='Blog_img img-fluid'/>{/* Image for blog item */}
              <div className='Blog_Container_Info'>{/* Container for blog item information */}
                <b>Service Apartments</b>{/* Title of blog item */}
                <br/><br/>
                <p>
                  The 1BHK apartments at Mount Forest are a sanctuary of comfort and convenience, providing all the amenities you need for a relaxing stay.
                </p>{/* Description of blog item */}
                <button className='Blog_btns'>
                  <NavLink to='/FirstBlog' className='Blog_link'>Read More...</NavLink>
                </button>{/* Button to read more with NavLink */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <center>
        <button className='Home_Blog_btns'>More...</button>
      </center>{/* Button to view more blogs with NavLink */}
    </>
  )
}

export default BlogsHomePage; // Exporting BlogsHomePage component as default
