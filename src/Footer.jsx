import React from 'react';
import './Footer.css'; // We will create this file next

// Import the specific icons you want from the 'react-icons/fa' (Font Awesome) set
import { FaInstagram, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Automatically gets the current year

  return (
    <footer className="footer-container">
      <div className="social-icons">
        {/* Each icon is wrapped in a link */}
        <a href="https://www.instagram.com/refined_coaching_aesthetics_/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebookSquare />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTwitterSquare />
        </a>
      </div>
      <p className="footer-text">
        &copy; {currentYear} Refined Aesthetics. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;