import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; 
import '../styles/header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="#" className='logo-sub-container'>
          <img src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg" alt="Chrome Logo" />
          <span>chrome</span>
        </a>
       
      </div>
      <nav>
        <ul className="nav-list">
          <li><a href="#home" >Home</a></li>
          <li><a href="#browser">The Browser by Google</a></li>
          <li className="dropdown">
            <a href="#features">Features <FaChevronDown /></a>
            <ul className="dropdown-menu">
              <li><a href="#overview">Overview</a></li>
              <li><a href="#address-bar">Google Address Bar</a></li>
              <li><a href="#password-check">Password Check</a></li>
              <li><a href="#devices">Use Across Devices</a></li>
              <li><a href="#dark-mode">Dark Mode</a></li>
              <li><a href="#tabs">Tabs</a></li>
              <li><a href="#articles">Articles for You</a></li>
              <li><a href="#extensions">Extensions</a></li>
            </ul>
          </li>
          <li><a href="#safety">Safety</a></li>
          <li className="dropdown">
            <a href="#support">Support <FaChevronDown /></a>
            <ul className="dropdown-menu">
              <li><a href="#helpful-tips">Helpful Tips for Chrome</a></li>
              <li><a href="#support-center">Support</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
