import React, { useState, useEffect } from 'react';
import './footeraboveform.css';

const FooterAboveForm = () => {
    const [form, setForm] = useState({
        Name: '',
        Phone: '',
        Email: '',
        Message: ''
    });

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        const allFieldsFilled = Object.values(form).every(field => field.trim() !== '');
        setIsButtonDisabled(!allFieldsFilled);
    }, [form]);

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        Object.entries(form).forEach(([key, value]) => {
            formData.append(key, value);
        });
        formData.append("Date", new Date().toISOString().substring(0, 10));

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbzGmsr4lf4clHWpzim061MC48WKtQfzmEsiS3muCXiIm0mUNrCYVcQ5pEVeoW65hDcK/exec", {
                method: "POST",
                body: formData
            });
            if (response.ok) {
                alert('Your Form successfully submitted');
                setForm({ Name: '', Phone: '', Email: '', Message: '' });
            } else {
                alert('Form submission failed');
            }
        } catch (error) {
            alert('Your Form successfully submitted');
        }
    };

    return (
        <main className='Footer_Above_container'>
            <div className='Footer_From_Description'>
                <h3>Contact Us</h3>
                <br/>
                <p>If you have any questions, concerns, or feedback, please let us know. Our team will review your message and get back to you as soon as possible. We value your input and strive to provide excellent service.</p>
            </div>
            <section id='Footer_Above_From_container'>
                <form onSubmit={handleSubmit} className='Footer_Above_From_box'>
                    <input
                        type="hidden"
                        name="Date"
                        value={new Date().toISOString().substring(0, 10)}
                        readOnly
                    />
                    <div className='Footer_Above_From_input'>
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
                            onChange={handleInputChange}
                            className='Footer_Above_input'
                        />
                    </div>
                    <div className='Footer_Above_From_input'>
                        <input
                            type="tel"
                            placeholder="Enter Phone"
                            required
                            pattern="^\d{10}$"
                            title="Phone number must be 10 digits"
                            name='Phone'
                            value={form.Phone}
                            onChange={handleInputChange}
                            className='Footer_Above_input'
                        />
                    </div>
                    <div className='Footer_Above_From_input'>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            required
                            minLength={10}
                            maxLength={50}
                            name='Email'
                            value={form.Email}
                            onChange={handleInputChange}
                            className='Footer_Above_input'
                        />
                    </div>
                    <div className='Footer_Above_From_textarea'>
                        <textarea
                            placeholder="Enter Message..."
                            required
                            minLength={3}
                            maxLength={500}
                            name='Message'
                            value={form.Message}
                            onChange={handleInputChange}
                            className='Footer_Above_textarea'
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isButtonDisabled}
                        id='Footer_Above_Contcat_Submit_but'
                    >
                        Submit
                    </button>
                </form>
            </section>
        </main>
    );
}

export default FooterAboveForm;
