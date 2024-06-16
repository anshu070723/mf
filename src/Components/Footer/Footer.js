import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container'; // Importing Container component from react-bootstrap
import Row from 'react-bootstrap/Row'; // Importing Row component from react-bootstrap
import Col from 'react-bootstrap/Col'; // Importing Col component from react-bootstrap
import './footer.css'; // Importing CSS styles for footer component
import { FaLocationDot, FaYoutube } from "react-icons/fa6"; // Importing icons from react-icons library
import { HiOutlineMailOpen } from "react-icons/hi"; // Importing icons from react-icons library
import { BsTelephoneForwardFill, BsFacebook } from "react-icons/bs"; // Importing icons from react-icons library
import { AiFillInstagram } from "react-icons/ai"; // Importing icons from react-icons library
import { FaLinkedin } from "react-icons/fa"; // Importing icons from react-icons library
import FooterLogo from '../Images/logo.webp'; // Importing footer logo image
import AOS from 'aos';
const Footer = () => { // Functional component for rendering footer section
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <> {/* Fragment wrapper */}
      <Container fluid className='Footer_container'>{/* Container for footer section */}
        <Row>{/* Row for footer content */}
          <Col lg={6} md={12}>{/* Column for footer logo and company information */}
            <Row>{/* Nested row for footer logo and company name */}
              <Col lg={5} md={12}> {/* Column for footer logo */}
                <center><img src={FooterLogo} alt='MountForest Logo' className='Footer_logo' data-aos={"fade-right"} /></center>{/* Footer logo */}
              </Col>
              <Col lg={7} md={12}>{/* Column for company name */}
                <div id='Footer_logo_side_Name'>Mountforest Promoters & Developer (OPC) Pvt. Ltd</div>{/* Company name */}
              </Col>
            </Row>
            <Row>{/* Nested row for company description */}
              <Col>{/* Column for company description */}
                <p className='Footer_logo_bottom_About'>{/* Company description */}
                  We invite you to contact us today and learn more about how can we help you to find your mountain property with serene view. WE FULFILL EVERY DESIRE OF HEART.
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg={2} md={6} sm={12}>{/* Column for quick links */}
            <ul>{/* Unordered list for quick links */}
              <li><b className='footer_text'>Quick Links</b></li>{/* Quick Links heading */}
              <li className='footer_text'><a href='/Home' className='footer_text'>Home</a></li>{/* Home link */}
              <li className='footer_text'><a href='/Blog' className='footer_text'>Blogs</a></li>{/* Blogs link */}
              <li className='footer_text'><a href='/Gallery' className='footer_text'>Gallery</a></li>{/* Gallery link */}
              <li className='footer_text'><a href='/About' className='footer_text'>About Us</a></li>{/* About Us link */}
            </ul>
          </Col>
          <Col lg={4} md={6} sm={12}>{/* Column for contact information */}
            <ul>{/* Unordered list for contact information */}
              <li><b className='footer_text'>Get In Touch with us</b></li>{/* Contact heading */}
              <li className='Footer_Get_In_Touch'>
                <span><FaLocationDot/></span>
                <address className='footer_text'>D-13, 4th floor, Sector 3, Noida Uttar Pradesh 201301</address>
              </li>{/* Location */}
              <li className='Footer_Get_In_Touch'>
                <span><BsTelephoneForwardFill/></span>
                <p className='footer_text'>
                  <a href="tel:0120 4124076" className='footer_text'>0120-4124076</a>,<br/>
                  <a href='tel:7289000959' className='footer_text'>+91 7289000959</a>
                </p>
              </li>{/* Phone number */}
              <li className='Footer_Get_In_Touch'>
                <span className="footer_icon_get_touch"><HiOutlineMailOpen/></span>
                <a href="mailto:ayush347@gmail.com" title="Mountforest Email" aria-label="The Mountforest mail id" className='footer_text'>Query@mountforest.in</a>
              </li>{/* Email */}
            </ul>
          </Col>
        </Row>
        <hr/>{/* Horizontal line separator */}
        <Row>{/* Row for social media icons */}
          <Col>{/* Column for social media icons */}
            <ul id='Footer_Soical_Icon_container'>{/* Unordered list for social media icons */}
              <li><a target="_blank" title="facebook" aria-label="The Mountforest facebook icon link" href="https://www.facebook.com/mountforestpromoters"><BsFacebook/></a></li>{/* Facebook icon */}
              <li><a target="_blank" title="instagram" aria-label="The Mountforest instagram icon link" href="https://www.instagram.com/mount_forest_homes/"><AiFillInstagram/></a></li>{/* Instagram icon */}
              <li><a target="_blank" title="linkedin" aria-label="The Mountforest linkedin icon link" href="https://www.linkedin.com/company/mountforest-promoters-developer-opc-pvt-ltd/"><FaLinkedin/></a></li>{/* LinkedIn icon */}
              <li><a target="_blank" title="youtube" aria-label="The Mountforest youtube icon link" href="https://www.youtube.com/@Mountforest_Promoters"><FaYoutube/></a></li>{/* YouTube icon */}
            </ul>
          </Col>
        </Row> 
        <hr/>{/* Horizontal line separator */}
        <Row>{/* Row for copyright information */}
          <Col>{/* Column for copyright information */}
            <p className='footer_Copyright'>{/* Copyright text */}
              &#169; Copyright 2023 - 2025 www.mountforest.in. All rights reserved. Developed by Mountforest.
            </p>
          </Col>
        </Row> 
      </Container>
    </>
  )
}
export default Footer; // Exporting Footer component as default
