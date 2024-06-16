import { useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import './fixappoitment.css';

const Fixappoitment = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    const [form, setForm] = useState({
        Name: '',
        Phone: '',
        Email: '',
        Date: '',
        Time: ''
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

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    const FixappoitmentgetTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition >= 300) {
                setIsButtonVisible(true);
            } else {
                setIsButtonVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        Object.entries(form).forEach(([key, value]) => {
            formData.append(key, value);
        });
        formData.append("Date", new Date().toISOString().substring(0, 10));

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbyFHEZIR4-iSKfsoIRPHPoy_C2gwuuf1M5ycpndvHjPhMgRQ0INWbODZiyIarBq5hPv/exec", {
                method: "POST",
                body: formData
            });
            if (response.ok) {
                alert('Your Form successfully submitted');
                setForm({
                    Name: '',
                    Phone: '',
                    Email: '',
                    Date: '',
                    Time: ''
                });
                setIsFormVisible(false);
            } else {
                alert('Form submission failed');
            }
        } catch (error) {
            alert('Your Form successfully submitted');
        }
    };

    return (
        <>
            {isButtonVisible && (
                <button className='fix' onClick={toggleFormVisibility}>Fix an appointment</button>
            )}

            {isFormVisible && (
                <>
                    <div className="overlay" onClick={toggleFormVisibility}></div>
                    <section className='Fix_appoitnment_container'>
                        <form className="Fix_appoitnment_form" onSubmit={handleSubmit}>
                            <span className="Fix_appoitnment_close_btn" onClick={toggleFormVisibility}><TfiClose /></span>
                            <center><b>Fix an appointment</b></center>
                            <br/>
                            <input
                                type="hidden"
                                name="Date"
                                value={new Date().toISOString().substring(0, 10)}
                                readOnly
                            />
                            <div className='Fix_appoitnment_input_box'>
                                <input
                                    type='text'
                                    placeholder='Enter Name'
                                    name="Name"
                                    pattern="^[a-zA-Z\s]*$"
                                    title="Only letters and spaces allowed"
                                    value={form.Name}
                                    required
                                    minLength={3}
                                    maxLength={30}
                                    className='Fix_appoitnment_input'
                                    onChange={handleFormContact}
                                />
                            </div>
                            <div className='Fix_appoitnment_input_box'>
                                <input
                                    type='tel'
                                    placeholder='Enter Phone'
                                    name="Phone"
                                    pattern="^\d{10}$"
                                    title="Phone number must be 10 digits"
                                    value={form.Phone}
                                    required
                                    minLength={10}
                                    maxLength={10}
                                    className='Fix_appoitnment_input'
                                    onChange={handleFormContact}
                                />
                            </div>
                            <div className='Fix_appoitnment_input_box'>
                                <input
                                    type='email'
                                    placeholder='Enter Email'
                                    name="Email"
                                    value={form.Email}
                                    required
                                    minLength={10}
                                    maxLength={50}
                                    className='Fix_appoitnment_input'
                                    onChange={handleFormContact}
                                />
                            </div>
                            <div className='Fix_appoitnment_input_box'>
                                <input
                                    type='date'
                                    name="Date"
                                    required
                                    min={FixappoitmentgetTodayDate()}
                                    className='Fix_appoitnment_input'
                                    onChange={handleFormContact}
                                />
                            </div>
                            <div className='Fix_appoitnment_input_box'>
                                <select
                                    name='Time'
                                    required
                                    className='Fix_appoitnment_input'
                                    onChange={handleFormContact}
                                >
                                    <option value="">Preferred Time</option>
                                    <option value="9:30 AM - 10:30 AM">9:30 AM - 10:30 AM</option>
                                    <option value="11:00 AM - 1:00 PM">11:00 AM - 1:00 PM</option>
                                    <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
                                    <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
                                    <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
                                    <option value="6:00 PM - 7:00 PM">6:00 PM - 7:00 PM</option>
                                </select>
                            </div>
                            <div className='Fix_appoitnment_btn_box'>
                                <button
                                    type="submit"
                                    className="Fix_appoitnment_btn"
                                    disabled={isButtonDisabled}
                                >
                                    BOOK NOW
                                </button>
                            </div>
                            <br/>
                            <p>Fill the form & let connect with our project expert.</p>
                        </form>
                    </section>
                </>
            )}
        </>
    );
}

export default Fixappoitment;
