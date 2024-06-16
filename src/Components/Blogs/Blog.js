import Container from 'react-bootstrap/Container'; // Importing Container component from react-bootstrap
import Row from 'react-bootstrap/Row'; // Importing Row component from react-bootstrap
import Col from 'react-bootstrap/Col'; // Importing Col component from react-bootstrap
import { NavLink } from 'react-router-dom'; // Importing NavLink from react-router-dom for navigation
import './Blog.css'; // Importing CSS file for styling
import Fixappoitment from '../Fixappoitment/Fixappoitment'; // Importing Fixappoitment component
import FooterAboveForm from '../FooterAboveForm/FooterAboveForm'; // Importing FooterAboveForm component
import BlogImg1 from '../Images/image1.webp'; // Importing blog image
import { Helmet } from "react-helmet"; // Importing Helmet for managing document head

const Blog = () => {
  return (
    <>
      <Container>
        <Helmet>
          <meta charset="utf-8"/> 
           {/* Setting character set for the document */}
          <meta name="viewport" content="width=device-width, initial-scale=1"/> 
           {/* Setting viewport for responsive design */}
          <title>Blog | Mountforest Promoters & Developer | Luxurious Homes | Real Estate</title> {/* Setting the document title */}
          <meta name="description" content="Discover your dream home with Mount Forest, your trusted partner in India's vibrant property market. From luxurious apartments in mountain, we offer a diverse range of properties tailored to your needs and preferences. Our experienced team of professionals guides you through every step of the buying process, ensuring a seamless and rewarding experience. Explore our portfolio today and embark on your journey towards finding the perfect home in India."/>
           {/* Setting the meta description for SEO */}
          <meta name="keywords" content="Mount Forest,real estate,blog"/>
           {/* Setting the meta keywords for SEO */}
          <link rel="canonical" href="https://www.mountforest.in/Blog" />
           {/* Setting the canonical link for the page */}
        </Helmet>
        <Row>
          <Col xxxl={4} xxl={4} xl={4} lg={4} md={6} sm={6}>{/* Defining a column with responsive grid spans */}
            <div className='Blog_Container'>
              <img src={BlogImg1} alt='1BHK Service Apartments' className='Blog_img'/>{/* Displaying the blog image */}
              <div className='Blog_Container_Infor'>
                <b>1BHK Service Apartments</b>{/* Blog title */}
                <br/><br/>
                <p>
                  The 1BHK apartments at Mount Forest are a sanctuary of comfort and convenience, providing all the amenities you need for a relaxing stay.
                </p>{/* Blog description */}
                <button className='Blog_btns'>
                  <NavLink to='/FirstBlog' className='Blog_link'>Read More...</NavLink>{/* "Read More" button with navigation link */}
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Fixappoitment/>{/* Rendering the Fixappoitment component   */}
      <FooterAboveForm/>{/* Rendering the FooterAboveForm component */}
    </>
  )
}

export default Blog; // Exporting the Blog component for use in other parts of the application
