//Banner component, just a picture
import React from 'react';
import logoImage from '../assets/logo.png'; // Path to your logo image
import './Banner.css'; // Optional: style as you like

const Banner = () => {
  return (
    <section id="banner" className="banner">
        <div className="logo">
            <img src={logoImage} alt="Farmhouse Logo" />
        </div>
      
    </section>
  );
};

export default Banner;