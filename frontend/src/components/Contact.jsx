//Contact info file
import React from 'react';
import './Contact.scss'; 

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Us</h2>
        
        <p>
          📞 +358 40 123 4567
        </p>
        <p>
          📧 info@farmhouseexperience.components
        </p>
        <p>
          Should you have any questions, please do not hesitate to contact us. We are happy to help you with any inquiries you may have. Below you can also find our location on the map, easily available as Google Maps so you find us when you come to visit!
        </p>
        
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d909.6711568375616!2d25.42480721289419!3d62.87094499628654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468435c79e862125%3A0x94cfa259d5e97b2f!2sSaaripurontie%20436%2C%2043170%20Saarij%C3%A4rvi!5e0!3m2!1sfi!2sfi!4v1747169079400!5m2!1sfi!2sfi"

          width="600" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
