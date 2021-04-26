import React from 'react';
import { Button } from './Button';
import './styles/HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>Your solution is here</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button 
                    className='btns' 
                    buttonStyle='btn--primary' 
                    buttonSize='btn--large'
                >
                    SEE THE PROJECTS <i className="fas fa-chevron-right"></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
