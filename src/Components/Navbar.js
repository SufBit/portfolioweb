import React from 'react';
import './Navbar.css'; // Import your CSS file for styling


const NavigationBar = () => {
  // const openResume = () => {
  //   window.open('/SufyanResume24.pdf', '_blank');
  // };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="name">Sufyan Arshad</span>
      </div>
      <div className="navbar-center logo-container">
        <img src="./portfolioweb/a-line.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="/SufyanResume24.pdf" target="_blank">Resume</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
