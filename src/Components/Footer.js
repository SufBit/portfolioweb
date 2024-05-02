import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import LinkedIn icon from react-icons library
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#DA291C' }}>
      <div className="footer-content">
        <div className="linkedin-icon">
          {/* LinkedIn icon with link to your LinkedIn profile */}
          <a href="https://www.linkedin.com/in/sufyan-arshad99/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/SufBit" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </div>
        <div className="website-info">
          {/* Text indicating that the website was made in React */}
          Thank You for visiting my website! Connect with me on LinkedIn by clicking the button above
        </div>
        <p>This website was made in React</p>
      </div>
    </footer>
  );
};

export default Footer;
