// Importing necessary dependencies and components
import TopSlider from './HomePageTopImgSlider';
import LocationImageHomePage from './LocationImageHomePage';
import SecondIncomeHomePage from './SecondIncomeHomePage';
import ProjectHomePage from './ProjectHomePage';
import BlogsHomePage from './BlogsHomePage';
import './Home.css';
import FrontPage from '../frontpage/FrontPage';
import Fixappoitment from '../Fixappoitment/Fixappoitment';
import TimerForm from '../TimerForm/TimerForm';
import FooterAboveForm from '../FooterAboveForm/FooterAboveForm';
import { Helmet } from "react-helmet";

// Functional component for the Home page
const Home = () => {
  return (
    <>
      {/* Helmet for managing SEO metadata */}
      <Helmet>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>Property in mountain</title>
          
          <meta name="description" content="Experience the ideal weekend break or holiday homes retreat set amidst breathtaking mountains and lush natural surroundings with MountForest. Whether you want the tranquility of nature or the opulence of serviced apartments and luxury villas with spectacular mountain and Himalayan views, MountForest is your ultimate destination to full fill your dreams homes."/>

          <meta name="keywords" content="mountforest, real estate company, service apartment, luxury villas, holiday homes, second homes hills, Himalayan views, properties, property, Second Income Source,property in uttarakhand"/>
          <link rel="canonical" href="https://www.mountforest.in/Home" />
      </Helmet>
      
      {/* Component for the front page */}
      <FrontPage/>
      {/* Component for the top slider */}
      <TopSlider/>
      
      {/* Heading and introductory paragraph */}
      <h1 className='Home_page_Heading'>Mountforest Promoters & Developer</h1>
      <p id='Home_page_Paragraph'>
      Welcome to MountForest, where were define luxury living amidst the breathtaking beauty of the Himalayas. As a leading real estate company, we specialize in offering unparalleled service apartments, luxury villas, holiday homes, and second homes in the serene hills, complemented by majestic Himalayan views.<br/><br/>

At MountForest, we understand the allure of finding the perfect retreat in nature's embrace. Our service apartments epitomize comfort and convenience, providing a seamless blend of modern amenities and rustic charm. Nestled amidst verdant landscapes, each apartment offers a tranquil sanctuary to unwind and rejuvenate. Whether you're a solo traveler, a couple seeking a romantic escape, or a family looking for adventure, our service apartments cater to all your requirements.

For those desiring the epitome of luxury living, our collection of exquisite villas is unparalleled. Boasting lavish interiors, panoramic views, and world-class facilities, our villas redefine opulence in the heart of nature. Each villa is meticulously designed to offer privacy, exclusivity, and a sense of tranquility, creating an idyllic retreat for indulgence and relaxation.
<br/><br/>
Looking for the perfect holiday home or retirement home?<br/>
Look no further than MountForest. Our portfolio features a diverse range of properties, from cozy cottages to spacious estates, each offering a unique experience tailored to your preferences. Whether you envision cozy evenings by the fireplace or adventurous days exploring the surrounding hills, our holiday homes are your gateway to unforgettable experiences.

One of the highlights of our properties is the unparalleled Himalayan views they offer. Imagine waking up to the sight of snow-capped peaks, basking in the golden hues of sunrise, or stargazing under the vast expanse of the night sky. At MountForest, every moment is a masterpiece, with nature's grandeur serving as the backdrop to your extraordinary lifestyle.

As a trusted real estate company, we are committed to exceeding your expectations at every step of your journey. From personalized assistance in property selection to seamless transaction processes, our team of experts is dedicated to ensuring your experience with MountForest is nothing short of exceptional.<br/><br/>

Experience the pinnacle of luxury living amidst the Himalayas with MountForest. Your dream home awaits in this enchanting paradise.
      </p>
      
      {/* Components for fixing appointments and timer form */}
      <Fixappoitment/>
      <TimerForm/>
      
      {/* Components for displaying location image, second income section, project section, and blogs */}
      <LocationImageHomePage/>
      <SecondIncomeHomePage/>
      <ProjectHomePage/>
      <BlogsHomePage/>
      
      {/* Component for footer above form */}
      <FooterAboveForm/>
    </>
  );
};

export default Home;
