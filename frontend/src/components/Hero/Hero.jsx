import React from 'react';
import './Hero.css';
import handIcon from '../assets/hand_icon.png';
import arrowIcon from '../assets/arrow.png';
import heroImage from '../assets/hero_image.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-left">
                <h2>New Arrivals Only</h2>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={handIcon} alt='Hand Icon' />
                </div>
                <p>collections</p>
                <p>for everyone</p>
                <div className="hero-latest-btn">
                    <span>Latest Collection</span>
                    <img src={arrowIcon} alt='Arrow Icon' />
                </div>
            </div>
            <div className="hero-right">
                <img src={heroImage} alt='Hero' />
            </div>
        </section>
    );
}

export default Hero;
