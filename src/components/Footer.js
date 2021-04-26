import React from 'react';
import './styles/Footer.css';
import { Link } from 'react-router-dom';




const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='footer-col'>
                        <Link to='/' style={{textDecoration: 'none'}}><h2>Punto-Prog &nbsp; <i className="fas fa-laptop-code"></i></h2></Link>
                        <h5>Your solution is here!</h5>
                        <h5>Punto-Prog &copy;{new Date().getFullYear()}</h5>
                    </div>
                    <div className='footer-col'>
                        <h3>Pages</h3>
                        <ul>
                            <li><Link to='/' className='link'>Home</Link><br/></li>
                            <li><Link to='/services' className='link'>Services</Link><br/></li>
                            <li><Link to='/contact' className='link'>Contact</Link><br/></li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h3>Contact</h3>
                        <h4>Mar del Plata, Bs. As., Argentina</h4>
                        <h4>+5492234556677</h4>
                        <h4>Bolivar 2200</h4>
                    </div>
                    <div className='footer-col'>
                        <h3>Social Media</h3>
                        <div className='social-links'>
                            <Link to='/' className='socialLink'><i className="fab fa-instagram"></i></Link>
                            <Link to='/' className='socialLink'><i className="fab fa-facebook-square"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
