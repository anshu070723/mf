import './about.css' // Importing the CSS file for styling
import {Helmet} from "react-helmet";
import BgAbout from '../Images/BgAbout.webp'
import FooterAboveForm from '../FooterAboveForm/FooterAboveForm'
function About(){
    return(
        <main>
            <Helmet>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>About Us | MountForest | Real Estate</title>
                <meta name="description" content="Mountforest Promoters & Developer is a real estate and construction consulting company we specialize in catering luxurious mountain properties and holiday homes with excellent services and quality results to clients."/>
                <meta name="keywords" content="mountforest, real estate company, service apartment, luxury villas, holiday homes, second homes hills, Himalayan views, properties, property, Second Income Source"/>
                <link rel="canonical" href="https://www.mountforest.in/About Us" />
            </Helmet>
            {/* This is about Container started */}
            <div className='Web_About_Container'>
                {/* Mapping over the fetched data to display images */}
                <img src={BgAbout} alt='Property In Mountforest' className='about_background_image'/>
                {/* Start MountForest's About Us heading and its description. */}
                <h1 id='Web_About_heading'>About Us</h1>
                <br/>
                <p id="Web_About_Paragraph">
                    {/* The description of the company */}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Mountforest Promoters & Developer</b> is a real estate and construction consulting company we specialize in catering luxurious mountain properties and holiday homes with excellent services and quality results to clients. We specialize in the development of properties in mountains, as well as in the management of existing assets. Our team of experienced professionals is trained to assess and identify key areas for improvement in order to maximize benefits. We stay up to date on the latest industry trends and regulations in order to provide the most comprehensive services possible.
                    <br/><br/>
                    We are leading construction consulting firm that is committed to helping in develop and manage projects and properties with decades of experience in the industry, we have the expertise and resources to handle the most complex projects and provide the highest quality of services. Our team of professionals is dedicated to providing our clients with the best possible solutions for their mountain properties.
                    <br/><br/>
                    We understand that every person has different mindset, so our team works closely with our clients to understand their unique needs and goals. Our goal is to create the most efficient and effective solutions for each client. We are committed to providing the best customer service and always strive to exceed their expectations.
                    <br/><br/>
                    At Mountforest Promoters & Developer, we pride ourselves on offering tailored solutions to meet the needs of each and every client. We are dedicated to providing personal attention and open communication throughout the entire process. Our team is committed to meeting your needs and exceeding your expectations. We invite you to contact us today and learn more about how can we help you to find your mountain property with serene view.<b>WE FULFILL EVERY DESIRE OF HEART.</b>
                </p> 
            </div>
            <FooterAboveForm/>
        </main>
    )
}

export default About; // Exporting the About component as the default export
