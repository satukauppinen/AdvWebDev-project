//Info about the farm 
import React from 'react';
import farmImage from '../assets/farm.jpg'; // Path to your background image
import './AboutUs.css'; // Optional: style as you like

const AboutUs = () => {
  return (
    <section id="about-us" className="about-section" style={{ backgroundImage: `url(${farmImage})` }}>
      
      
      <div className="content-box">
        <h2>About Us</h2>
        <p>
          Welcome to Green Meadow Farm! Nestled in the countryside, we offer a unique experience
          where you can reconnect with nature, enjoy outdoor adventures, and learn about
          sustainable farming. Whether you're looking to relax, get your hands dirty, or just have
          fun with friends and family, we’ve got something for everyone.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;