// CasaMelo.js
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './casamelo.css';
import CasaMeloLineMove from './CasaMeloLineMove';
import casameloLocationimg from '../Images//CasameloLocationImg.webp';
import CasameloImgSliderTop from './CasameloImgSliderTop';
import CasaMeloVillaImgSlider from './CasaMeloVillaImgSlider';
import CasameloAppartmentImgSlider from './CasameloAppartmentImgSlider';
import CasaMeloLocationLineMove from './CasaMeloLocationLineMove';
import CasaMeloProjectKeyFeatures from './CasaMeloProjectKeyFeatures';
import { NavLink } from 'react-router-dom';
import CasmeloGetPriceForm from './CasmeloGetPriceForm';
import MasterPlanPopup from './MasterPlanPopup';
import CasameloBrochure from './CasameloBROCHURE';
import Fixappoitment from '../Fixappoitment/Fixappoitment';
import TimerForm from '../TimerForm/TimerForm';
import FooterAboveForm from '../FooterAboveForm/FooterAboveForm'
import {Helmet} from "react-helmet";
const CasaMelo = () => {
  const [isMasterPlanPopupVisible, setIsMasterPlanPopupVisible] = useState(false);
  const [isCasmeloGetPriceForm, setIsCasmeloGetPriceForm]= useState(false);
  const [isCasameloBrochure, setIsCasameloBrochure]= useState(false);
  const toggleMasterPlanPopup = () => {
    setIsMasterPlanPopupVisible(!isMasterPlanPopupVisible);
  };

  const toggleCasmeloGetPriceForm = () => {
    setIsCasmeloGetPriceForm(!isCasmeloGetPriceForm);
  };

  const toggleCasameloBrochure = () => {
    setIsCasameloBrochure(!isCasameloBrochure);
  };

  return (
    <>
      <Helmet>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Casa Melo - MountForest |3 BHK DUPLEX VILLAS & 1 BHK SERVICE APARTMENTS | Real Estate</title>
        <meta name="description" content="Welcome to Casa Melo, your gateway to luxury living in Uttarakhand. Explore our exquisite selection of service apartments, luxury villas, and holiday homes, perfect for second homes or investment opportunities in the serene hills of Mukteshwar and Nathuakhan. Discover the allure of mountain living with our premium properties, tailored to meet your every need. Whether you're seeking retirement homes or a second income source, we offer the perfect solution amidst the natural beauty of Uttarakhand. With competitive property rates and a focus on luxury, Casa Melo is your trusted partner for buying property in Uttarakhand. Contact us today to find your dream home in the mountains or explore our luxury properties near Ramgarh. Your mountain retreat awaits with Casa Melo."/>
        <meta name="keywords" content="casa melo, mountforest, real estate company, service 1 bhk apartment, luxury 3 bhk villas, holiday homes, second homes,property in uttarakhand, buy property in uttarakhand, property rate in uttarakhand, luxury property in uttarakhand, property for sale, luxury properties, Retirement Homes, property in Mukteshwar, buy property in Mukteshwar, property rate in Mukteshwar, luxury property in Mukteshwar, property in nathuakhan, buy property in nathuakhan, property rate in nathuakhan, luxury property in nathuakhan, Home in Mountain, Second Income Source, property near by Ramgarh"/>
        <link rel="canonical" href="https://www.mountforest.in/Casa Melo" />
      </Helmet>
      <CasameloImgSliderTop />
      <main id='Casmelo_container'>
        <h1 className='casaMelo_All_heading'>Casa Melo</h1>
        <p>
          The name ‘Casa Melo’ means a beautiful home near apple tree. As the name suggests, In the peaceful hills of Kumaon, Uttarakhand at 6500 ft. above sea level, Casa Melo brings to you cozy and luxurious 3 BHK villas and spacious 1 BHK Service apartments, with all the modern comforts. surrounded by Himalayan fruit orchards of apples, pears, peaches, plums, and apricots. Whether you're looking for a holiday getaway, a retiremen spot or considering an investment opportunity, Casa Melo is an excellent choice with conveniently located on the state highway, it offers an easy escape into the arms of nature.
        </p>

        <section className='CasaMelo_Section_Container'>
            <div id='casaMelo_Duplex_Villas_Img_Slider'>
                <CasaMeloVillaImgSlider />
            </div>
          <div>
            <h2 className='casaMelo_All_heading'>3 BHK DUPLEX VILLAS</h2>
            <p>
              Discover the epitome of luxury living in this stunning villa nestled in the serene mountains. Our Villas are spaciously designed on a plot area of 300 sq. yards, Each villa is spacious, ensuring your safety and providing breathtaking views of the Himalayas, sunshine, and greenery. , the nearest metro city, our villas and apartments are your perfect escape from the busy city life. Here, you can enjoy calm surroundings, pleasant weather, and beautiful views throughout the year— a perfect break from the hectic city life.
            </p>
          </div>
        </section>

        <CasaMeloLineMove />

        <section className='CasaMelo_Section_Container'>
          <div id='casaMelo_Service_Appartment_Img_Slider'>
            <CasameloAppartmentImgSlider/>
          </div>
          <div>
            <h2 className='casaMelo_All_heading'>1 BHK SERVICE APARTMENTS</h2>
            <p>
              We chose service apartments because of space and comfortable living. Our Service apartments are safe and secure and keeping you away from crowd where you can get easy access from the elevator and modern amenities. The property gives just the right amount of sunshine and panoramic himalayan views where you can enjoy in all weather season and snowfall days.
            </p>
          </div>
        </section>

        <CasaMeloLineMove />

        <section className='CasaMelo_Section_Container'>
          <h3 className='casaMelo_All_heading'>STRATEGIC LOCATION</h3>
          <center>
            <img src={casameloLocationimg} alt='' className='casameloLocationIMg' />
          </center>
        </section>

        <CasaMeloLocationLineMove />

        <section className='CasaMelo_Section_Container'>
          <h4 className='casaMelo_All_heading'>PROJECT KEY FEATURES</h4>

          <CasaMeloProjectKeyFeatures />
        </section>
      </main>

      <Fixappoitment/>
      <TimerForm/>

      <section className='casaMelo_bottom_All_btn'>
        <Container>
          <Row>
            <Col xxxl={3} xxl={3} xl={3} lg={3} md={6} sm={12} className='casamelo_bottom_btn'>
              <button className='casamelo_bottom_four_btn' onClick={toggleCasmeloGetPriceForm}>GET PRICE</button>
              <CasmeloGetPriceForm show={isCasmeloGetPriceForm} onClose={toggleCasmeloGetPriceForm} />
            </Col>
            <Col xxxl={3} xxl={3} xl={3} lg={3} md={6} sm={12} className='casamelo_bottom_btn'>
              <button className='casamelo_bottom_four_btn' onClick={toggleMasterPlanPopup}>MASTER PLAN</button>
              <MasterPlanPopup show={isMasterPlanPopupVisible} onClose={toggleMasterPlanPopup} />
            </Col>
            <Col xxxl={3} xxl={3} xl={3} lg={3} md={6} sm={12} className='casamelo_bottom_btn'>
              <button className='casamelo_bottom_four_btn' onClick={toggleCasameloBrochure}>REQUEST A BROCHURE</button>
              <CasameloBrochure show={isCasameloBrochure} onClose={toggleCasameloBrochure} />

            </Col>
            <Col xxxl={3} xxl={3} xl={3} lg={3} md={6} sm={12} className='casamelo_bottom_btn'>
              <NavLink to='/TECHSPECIFICATIONS' className='casamelo_bottom_four_btn'>TECH SPECIFICATIONS</NavLink>
            </Col>
          </Row>
        </Container>
      </section>

      <FooterAboveForm/>
    </>
  );
}

export default CasaMelo;
