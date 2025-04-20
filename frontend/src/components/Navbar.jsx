import React from 'react';
import './NavBar.css'; // Optional: style as you like

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🌾 The Farmhouse Experience</div>
      <ul className="nav-links">
        <li><a href="#about-us">🌾 About Us</a></li>
        <li><a href="#services">Activities</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="/admin">🌾</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;