import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css';
import { FaLocationDot, FaYoutube } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsTelephoneForwardFill, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import FooterLogo from '../Images/logo.webp';
import AOS from 'aos';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <>
      <Container fluid className='Footer_container'>
        <Row>
          <Col lg={6} md={12}>
            <Row>
              <Col lg={5} md={12}>
                <center><img src={FooterLogo} alt='MountForest Logo' className='Footer_logo' data-aos={"fade-right"} /></center>
              </Col>
              <Col lg={7} md={12}>
                <div id='Footer_logo_side_Name'>Mountforest Promoters & Developer (OPC) Pvt. Ltd</div>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className='Footer_logo_bottom_About'>
                  We invite you to contact us today and learn more about how we can help you to find your mountain property with a serene view. WE FULFILL EVERY DESIRE OF HEART.
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg={2} md={6} sm={12}>
            <ul>
              <li><b className='footer_text'>Quick Links</b></li>
              <li className='footer_text'><a href='/Home' className='footer_text'>Home</a></li>
              <li className='footer_text'><a href='/Blog' className='footer_text'>Blogs</a></li>
              <li className='footer_text'><a href='/Gallery' className='footer_text'>Gallery</a></li>
              <li className='footer_text'><a href='/About' className='footer_text'>About Us</a></li>
            </ul>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <ul>
              <li><b className='footer_text'>Get In Touch with us</b></li>
              <li className='Footer_Get_In_Touch'>
                <span><FaLocationDot /></span>
                <address className='footer_text'>D-13, 4th floor, Sector 3, Noida Uttar Pradesh 201301</address>
              </li>
              <li className='Footer_Get_In_Touch'>
                <span><BsTelephoneForwardFill /></span>
                <p className='footer_text'>
                  <a href="tel:0120 4124076" className='footer_text'>0120-4124076</a>,<br />
                  <a href='tel:7289000959' className='footer_text'>+91 7289000959</a>
                </p>
              </li>
              <li className='Footer_Get_In_Touch'>
                <span className="footer_icon_get_touch"><HiOutlineMailOpen /></span>
                <a href="mailto:query@mountforest.in" title="Mountforest Email" aria-label="The Mountforest mail id" className='footer_text'>query@mountforest.in</a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <ul id='Footer_Soical_Icon_container'>
              <li><a target="_blank" title="facebook" rel="noopener noreferrer" aria-label="The Mountforest facebook icon link" href="https://www.facebook.com/mountforestpromoters"><BsFacebook /></a></li>
              <li><a target="_blank" title="instagram" rel="noopener noreferrer" aria-label="The Mountforest instagram icon link" href="https://www.instagram.com/mount_forest_homes/"><AiFillInstagram /></a></li>
              <li><a target="_blank" title="linkedin" rel="noopener noreferrer" aria-label="The Mountforest linkedin icon link" href="https://www.linkedin.com/company/mountforest-promoters-developer-opc-pvt-ltd/"><FaLinkedin /></a></li>
              <li><a target="_blank" title="youtube" rel="noopener noreferrer" aria-label="The Mountforest youtube icon link" href="https://www.youtube.com/@Mountforest_Promoters"><FaYoutube /></a></li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p className='footer_Copyright'>
              &#169; Copyright 2023 - 2025 www.mountforest.in. All rights reserved. Developed by Mountforest.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
