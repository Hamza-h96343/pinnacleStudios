import React, { useState } from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import './ContactUsPage.css';
import { ReactComponent as PhoneIcon } from '../assets/phoneIcon.svg';
import { ReactComponent as MailIcon } from '../assets/mailIcon.svg';

const ContactUsPage = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [company, setCompany] = useState("")
    const [number, setNumber] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            name,
            email,
            company,
            number,
            message
        }
        
        fetch('https://pinnaclestudios.onrender.com/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }).then((response) => response.text()).then((data) => {
            console.log(data); // Email sent successfully
            // Handle success, e.g., show a success message to the user
        }).catch((error) => {
            console.error(error); // Error sending email
            // Handle error, e.g., show an error message to the user
        });

        setName("")
        setNumber("")
        setEmail("")
        setCompany("")
        setMessage("")
    }

    return (
        <div className="App">
            <div className="App-header">
                <Navbar />
                <section className='ContactUsPage-section'>
                    <div className="ContactUsPage-container">
                        <div className="ContactUsPage-content">
                            <div className="container">
                                <div className="gradient-bg">
                                    <h1>Contact Us</h1>
                                    <div className="contact-info">
                                        <div className="email-info">
                                            <div className="icon">
                                                <MailIcon />
                                            </div>
                                            <h1>info@pinnaclestudios.co</h1>
                                        </div>
                                        <div className="phone-info">
                                            <div className="icon">
                                                <PhoneIcon />
                                            </div>
                                            <h1>+1 (408) 384 8602</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="white-bg"></div>
                                <div className="form-wrapper">
                                    <h1 className='contact-us-form-heading'>Let's book a free 30 minutes consultation to learn more about your project</h1>
                                    <form className="form" method='POST' onSubmit={handleSubmit}>
                                        <div className="top-part">
                                            <input type="text" name="name" id="name" placeholder="Name" value={name} required onChange={(e) => {setName(e.target.value)}}/>
                                            <input type="text" name="email" id="email"  placeholder="Email" value={email} required onChange={(e) => {setEmail(e.target.value)}}/>
                                        </div>
                                        <div className="bot-part">
                                            <input type="text" name="company" id="company" placeholder="Company" value={company} required onChange={(e) => {setCompany(e.target.value)}}/>
                                            <input type="text" name='number' id='number' placeholder='Number' value={number} required onChange={(e) => {setNumber(e.target.value)}}/>
                                        </div>
                                        <textarea name="message" id='Message' placeholder='Message' value={message} required onChange={(e) => {setMessage(e.target.value)}}></textarea> 
                                        <button type="submit">Book Free Consultation</button> 
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
};

export default ContactUsPage;
