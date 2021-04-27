import React from 'react';
import '../styles/Contact.css';
import Form from '../Form';

const Contact = () => {
    return (
        <div className='container-contact'>
            <div className='banner-container'>
                <img src="images/email-photo.jpg" className="banner-img" alt="Banner-Img"/>
                <h1><i>Contact us</i></h1>
            </div>
            <div className='container-form'>
                <Form /> 
            </div>
        </div>
    )
}

export default Contact;