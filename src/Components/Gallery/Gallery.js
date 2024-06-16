import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GalleryImg1 from '../Images/GalleryImg1.webp';
import GalleryImg2 from '../Images/GalleryImg2.webp';
import GalleryImg3 from '../Images/GalleryImg3.webp';
import GalleryImg4 from '../Images/GalleryImg4.webp';
import GalleryImg5 from '../Images/GalleryImg5.webp';
import GalleryImg6 from '../Images/GalleryImg6.webp';
import GalleryImg7 from '../Images/GalleryImg7.webp';
import GalleryImg8 from '../Images/GalleryImg8.webp';
import GalleryImg9 from '../Images/GalleryImg9.webp';
import GalleryImg10 from '../Images/GalleryImg10.webp';
import GalleryImg11 from '../Images/GalleryImg11.webp';
import GalleryImg12 from '../Images/GalleryImg12.webp';
import './Gallery.css';
import Fixappoitment from '../Fixappoitment/Fixappoitment';
import FooterAboveForm from '../FooterAboveForm/FooterAboveForm'
import { Helmet } from "react-helmet";

const images = [
  GalleryImg1, GalleryImg2, GalleryImg3, GalleryImg4, GalleryImg5, GalleryImg6,
  GalleryImg7, GalleryImg8, GalleryImg9, GalleryImg10, GalleryImg11, GalleryImg12
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = (e) => {
    if (e.target.classList.contains('modal')) {
      setSelectedImage(null);
    }
  };

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Mountforest Gallery | Real Estate</title>
        <meta name="description" content="Experience the ideal weekend break or holiday homes retreat set amidst breathtaking mountains and lush natural surroundings with MountForest. Whether you want the tranquility of nature or the opulence of serviced apartments and luxury villas with spectacular mountain and Himalayan views, MountForest is your ultimate destination to full fill your dreams homes."/> 
        <meta name="keywords" content="mountforest, real estate company, service apartment, luxury villas, holiday homes, second homes hills, Himalayan views, properties, property, Second Income Source, Property in uttarakhand" />
        <link rel="canonical" href="https://www.mountforest.in/Gallery" />
      </Helmet>
      <h1 className='gallery_header'>Construction Work In Progress</h1>
      <p className='gallery_prea'>
        Welcome growth Partners, Here you can track the progress of our ongoing construction. We regularly upload images to give you a visual update on how far our work has progressed. Stay informed and watch as our projects take shape, step by step. Your interest and support are greatly appreciated as we strive to complete our work efficiently and effectively. Feel free to check back often for the latest updates and milestones. Thank you for following our journey and being a part of Mount Forest's growth and development.
      </p>
      <Container>
        <Row>
          {images.map((image, index) => (
            <Col key={index} xxxl={4} xxl={4} xl={4} lg={4} md={6} sm={6} xs={12} className="gallery_col">
              <div className='Gallery_Container' onClick={() => handleImageClick(image)}>
                <img src={image} alt={`Property in Mountforest, April 2024`} className="Gallery_imgs" />
                <p className='Gallery_imgs_date'>April-2024</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={() => setSelectedImage(null)}>&times;</span>
          <img className="modal-content" src={selectedImage} alt="Full Screen" />
        </div>
      )}
      <Fixappoitment />
      <FooterAboveForm/>
    </main>
  );
};

export default Gallery;
