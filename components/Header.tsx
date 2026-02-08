import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Logo = () => (
  <svg width="160" height="32" viewBox="0 0 160 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.791 12.807C13.701 12.807 11.612 12.807 9.522 12.807C9.522 10.917 9.414 8.844 9.522 6.98C9.691 4.087 11.945 1.703 14.829 1.396C14.967 1.381 15.727 1.321 15.776 1.396C15.802 5.198 15.795 9.008 15.791 12.81V12.807Z" fill="#D4FF73"/>
    <path d="M9.522 12.807C9.522 14.854 9.522 16.905 9.522 18.952L9.578 19.072H15.742L15.799 18.952C15.799 16.905 15.799 14.854 15.799 12.807C17.705 12.807 19.824 12.687 21.7 12.807C24.887 13.009 27.456 15.864 27.216 19.072H15.799C15.78 21.108 15.844 23.147 15.765 25.179C15.443 28.301 12.675 30.673 9.53 30.483V19.072L3.452 19.038C1.546 18.843 -0.177 17.743 -1.124 16.085C-1.701 15.078 -1.937 13.963 -1.926 12.807C1.89 12.807 5.71 12.807 9.53 12.807H9.522Z" fill="#D4FF73"/>
    <text x="30" y="22" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="500" fill="#D4FF73">stacked</text>
  </svg>
);

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        
        <nav className="nav">
          <Link to="#" className="nav-item has-dropdown">Products</Link>
          <Link to="#" className="nav-item has-dropdown">Solutions</Link>
          <Link to="#" className="nav-item has-dropdown">AI Agents</Link>
          <Link to="/integrations" className="nav-item">Integration</Link>
          <Link to="#" className="nav-item has-dropdown">Pricing</Link>
        </nav>
        
        <Link to="/contact" className="contact-button">
          <span className="contact-button-text">Contact Us</span>
          <div className="contact-button-arrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1A332B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;