import React from 'react';
import './Navbar.css'; // Import your CSS file for styling


const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="name">Sufyan Arshad</span>
      </div>
      <div className="navbar-center">
        <img src="/a-line.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="/">Resume</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
