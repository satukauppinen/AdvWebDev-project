//Banner component, just a picture
import React from 'react';
import logoImage from '../assets/logo.png'; 
import './Banner.css'; 

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