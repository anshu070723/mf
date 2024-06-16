import { useState, useEffect } from 'react'; // Importing useState and useEffect from React
import { BiSolidPhoneCall } from "react-icons/bi"; // Importing phone call icon from react-icons
import { FaWhatsapp } from "react-icons/fa"; // Importing WhatsApp icon from react-icons
import './CallNow.css'; // Importing CSS styles for CallNow component

const CallNow = () => { // Functional component for CallNow button
    const [isButtonVisible, setIsButtonVisible] = useState(false); // State to manage button visibility

    const whatsapp = () => {
        // Optional form visibility toggling logic can be added here
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsButtonVisible(scrollPosition >= 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <a href="tel:7289000959" id='Call_Now_btn' rel='noopener noreferrer' className={isButtonVisible ? 'visible' : ''}>
                <BiSolidPhoneCall />&nbsp;&nbsp;&nbsp;&nbsp;Call Now
            </a>
            <a onClick={whatsapp} href="https://wa.me/917289000959" target="_blank" rel="noopener noreferrer" aria-label="This is Mount Forest WhatsApp" title="Mountforest WhatsApp" className={`whatsapp_icon ${isButtonVisible ? 'visible' : ''}`}>
                <FaWhatsapp />
            </a>
        </>
    );
}

export default CallNow; // Exporting CallNow component as default
