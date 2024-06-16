import React, { useState, useEffect } from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";
import './timerform.css';

const TimeForm = () => {
    const [form, setForm] = useState({
        Name: '',
        Phone: '',
        Email: ''
    });

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [isFormVisible, setIsFormVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFormVisible(true);
        }, 30000);

        return () => clearTimeout(timer);
    }, []);

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

    const handleCloseForm = () => {
        setIsFormVisible(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        Object.entries(form).forEach(([key, value]) => {
            formData.append(key, value);
        });
        formData.append("Date", new Date().toISOString().substring(0, 10));

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbwVZZGecYFnjYzf3BMmcZy6_ymAPEowIXDjhxKvrwb0q7P489ZaCvfTgj_HN9KEC0hL/exec", {
                method: "POST",
                body: formData
            });
            if (response.ok) {
                alert('Your Form successfully submitted');
                handleCloseForm();
            } else {
                alert('Form submission failed');
            }
        } catch (error) {
            alert('Your Form successfully submitted');
            handleCloseForm();
        }
    };

    return (
        <div id='Time_container'>
            {isFormVisible && (
                <section className='Time_Form_container'>
                    <div className="Time_page_form_container">
                        <button className="close-button" onClick={handleCloseForm}>
                            <IoCloseCircleSharp />
                        </button>
                        <br />
                        <form onSubmit={handleSubmit}>
                            <p id='Time_page_form_heading'>Contact</p>
                            <input
                                type="hidden"
                                name="Date"
                                value={new Date().toISOString().substring(0, 10)}
                                readOnly
                            />
                            <div className="Time_page_form_input_box">
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
                                    onChange={handleFormContact}
                                    className='Time_page_form_input'
                                />
                            </div>
                            <div className="Time_page_form_input_box">
                                <input
                                    type="tel"
                                    placeholder="Enter Phone"
                                    required
                                    pattern="^\d{10}$"
                                    title="Phone number must be 10 digits"
                                    name='Phone'
                                    value={form.Phone}
                                    onChange={handleFormContact}
                                    className='Time_page_form_input'
                                />
                            </div>
                            <div className="Time_page_form_input_box">
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    required
                                    minLength={10}
                                    maxLength={50}
                                    name='Email'
                                    value={form.Email}
                                    onChange={handleFormContact}
                                    className='Time_page_form_input'
                                />
                            </div>
                            <button className="Time_Form_btn" type="submit" disabled={isButtonDisabled}>Submit</button>
                            <p>
                                Ready for your dream getaway?<br />
                                Contact us today to book your holiday home!
                            </p>
                        </form>
                    </div>
                </section>
            )}
        </div>
    );
}

export default TimeForm;
