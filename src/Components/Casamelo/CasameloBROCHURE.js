import React, { useState, useEffect } from 'react';
import { TfiClose } from 'react-icons/tfi';
import './casamelo.css';
import Pdf from '../Images/CasaMeloBrochure.pdf';

const CasameloBROCHURE = ({ show, onClose }) => {
  const brochureUrl = Pdf; // Use the imported PDF file

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

  const handleFormContact = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Download the PDF file
    const link = document.createElement('a');
    link.href = brochureUrl;
    link.download = 'CasaMeloBrochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Submit form data to the Google script
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("Date", new Date().toISOString().substring(0, 10));

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyyUkASVVuvX6JxY6b54bsFr2mxrtCBW26ByVr1N69dkpe78WnoLDqdB-JJg25SdR8/exec", {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        alert('Your Form successfully submitted');
        onClose();
      } else {
        alert('Form submission failed');
      }
    } catch (error) {
      alert('Your Form successfully submitted');
      onClose();
    }
  };

  if (!show) return null;

  return (
    <div className="Get_Price_Form_popup_overlay">
      <div className="Get_Price_Form_popup_container">
        <button className="Get_Price_Form_popup_close_btn" onClick={onClose} aria-label="Close Form"><TfiClose /></button>
        <div className="Get_Price_Form_popup_content">
          <center><b>REQUEST A BROCHURE</b></center>
          <hr />
          <div>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="Date" value={new Date().toISOString().substring(0, 10)} readOnly />
              <div className="Get_Price_Form_input_box">
                <input
                  type="text"
                  name="Name"
                  placeholder="Enter Name"
                  required
                  minLength={3}
                  maxLength={30}
                  pattern="^[a-zA-Z\s]*$"
                  title="Only letters and spaces allowed"
                  value={form.Name}
                  onChange={handleFormContact}
                  className='Time_page_form_input'
                />
              </div>
              <div className="Get_Price_Form_input_box">
                <input
                  type="tel"
                  name="Phone"
                  placeholder="Enter Phone"
                  required
                  pattern="^\d{10}$"
                  title="Phone number must be 10 digits"
                  value={form.Phone}
                  onChange={handleFormContact}
                  className='Time_page_form_input'
                />
              </div>
              <div className="Get_Price_Form_input_box">
                <input
                  type="email"
                  name="Email"
                  placeholder="Enter Email"
                  required
                  minLength={10}
                  maxLength={50}
                  value={form.Email}
                  onChange={handleFormContact}
                  className='Time_page_form_input'
                />
              </div>
              <button id='Get_Price_Form_btn' type="submit" disabled={isButtonDisabled}>Submit</button>
              <br /><br />
              <p>Fill the form for getting updated price list.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasameloBROCHURE;
