import React from 'react';
import '../styles/Services.css';

const Footer = () => {
    return (
        <div className='container-services'>
            <div className='banner-container-services'>
                <img src="images/coding-photo.jpg" className="banner-img-services" alt="Banner-Img"/>
                <h1><i>Services</i></h1>
            </div>
            <div className='web-works'>
                <h1>Web</h1>
            </div>
            <div className='mobile-works'>
                <h1>Mobile</h1>
            </div>
        </div>
    )
}

export default Footer;