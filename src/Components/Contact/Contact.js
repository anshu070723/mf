import React, { useState, useEffect } from 'react'; // Importing React hooks for state and effect management
import { ImLocation2 } from "react-icons/im"; // Importing location icon from react-icons
import { PiPhoneCallFill } from "react-icons/pi"; // Importing phone icon from react-icons
import { TbMailOpenedFilled } from "react-icons/tb"; // Importing email icon from react-icons
import './contact.css'; // Importing CSS file for styling
import { Helmet } from "react-helmet";
import AOS from 'aos';
const Contact = () => {
  const [form, setForm] = useState({
    Name: '',
    Phone: '',
    Email: ''
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const allFieldsFilled = Object.values(form).every(field => field.trim() !== '');
    setIsButtonDisabled(!allFieldsFilled);
  }, [form]);

  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitContact = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("Date", new Date().toISOString().substring(0, 10));

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxOBg4SX2a7am5fybf5qNAfmMmmsDgwiZk2nZ_jxh_N-5hBTLAX7yH7MY1_YMSkhjU/exec", {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        alert('Your Form successfully submitted');
        setForm({ Name: '', Phone: '', Email: '' });
      } else {
        alert('Form submission failed');
      }
    } catch (error) {
      alert('Your Form successfully submitted');
    }
  };

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Contact Us | MountForest | Real Estate</title>
        <meta name="description" content="Contact Us Mountforest Promoters & Developer is a real estate and construction consulting company" />
        <meta name="keywords" content="mountforest, real estate company, service apartment, luxury villas, holiday homes, second homes hills, Himalayan views, properties, property, Second Income Source" />
        <link rel="canonical" href="https://www.mountforest.in/Contact Us" />
      </Helmet>
      <section className='contact_page_container'>
        <div id='contact_page_container_background_box'>
          <div className="contact_page_info_container" data-aos={"fade-right"}>
            <table>
              <tbody>
                <tr>
                  <td className="contact_page_icon"><ImLocation2 aria-label="Location Icon" /></td>
                  <td>
                    <b className="contact_page_info">Address</b>
                    <p className="contact_page_info">D-13, 4th floor, Sector 3, Noida Uttar Pradesh 201301</p>
                  </td>
                </tr>
                <tr>
                  <td className="contact_page_icon"><PiPhoneCallFill aria-label="Phone Icon" /></td>
                  <td>
                    <b className="contact_page_info">Phone</b>
                    <p className="contact_page_info">0120-4124076,<br />+91 7289000959</p>
                  </td>
                </tr>
                <tr>
                  <td className="contact_page_icon"><TbMailOpenedFilled aria-label="Email Icon" /></td>
                  <td>
                    <b className="contact_page_info">Email</b>
                    <p className="contact_page_info">Query@mountforest.in</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="contact_page_form_container" data-aos={"fade-left"}>
            <form onSubmit={handleSubmitContact}>
              <h1 id='contact_page_heading'>Contact</h1>
              <input
                type="hidden"
                name="Date"
                value={new Date().toISOString().substring(0, 10)}
                readOnly
              />
              <div className="contact_page_form_input_box">
                <input
                  type="text"
                  placeholder="Enter Name"
                  required
                  minLength={3}
                  maxLength={30}
                  name='Name'
                  pattern="^[a-zA-Z\s]*$"
                  title="Only letters and spaces allowed"
                  value={form.Name}
                  onChange={handleFormChange}
                />
              </div>
              <div className="contact_page_form_input_box">
                <input
                  type="tel"
                  placeholder="Enter Phone"
                  required
                  pattern="^\d{10}$"
                  title="Phone number must be 10 digits"
                  name='Phone'
                  value={form.Phone}
                  onChange={handleFormChange}
                />
              </div>
              <div className="contact_page_form_input_box">
                <input
                  type="email"
                  placeholder="Enter Email"
                  required
                  minLength={10}
                  maxLength={50}
                  name='Email'
                  value={form.Email}
                  onChange={handleFormChange}
                />
              </div>
              <button className="contact_page_btn" type="submit" disabled={isButtonDisabled}>Submit</button>
              <p>Your escape to paradise starts with contact us now!</p>
            </form>
          </div>
        </div>
      </section>
      <embed
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.237297314034!2d77.30112617134519!3d28.582992754344932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce459c07192ab%3A0x159daf20d07f9e94!2sMountForest!5e0!3m2!1sen!2sin!4v1717226493948!5m2!1sen!2sin"
        title="MountForest"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className='contact_map'
      />
    </>
  );
}

export default Contact; // Exporting the component for use in other parts of the application
