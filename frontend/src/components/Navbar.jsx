// NAvigation on the top of the page. Floats on the top of the page.
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🌾 The Farmhouse Experience</div>
      <ul className="nav-links">
        <li><Link to="#about-us">🌾 About Us</Link></li>
        <li><Link to="#services">Activities</Link></li>
        <li><Link to="#contact">Contact</Link></li>
        <li><Link to="/admin">🌾</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
