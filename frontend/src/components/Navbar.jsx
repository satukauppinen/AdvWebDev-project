// NAvigation on the top of the page. Floats on the top of the page.
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
    <a href="#" className="logo">🌾 The Farmhouse Experience</a>
      <ul className="nav-links">
        <li><a href="#about-us">🌾 About Us</a></li> 
        <li><a href="#contact">Contact</a></li> 
        <li><a href="#services">Activities</a></li> 
        
        <li><Link to="/admin">🌾</Link></li> 
      </ul>
    </nav>
  );
};

export default NavBar;
