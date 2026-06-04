import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <h1>Auramax</h1>
          <p>Architects</p>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <button onClick={() => scrollToSection('home')}>Home</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('about')}>About</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('services')}>Services</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('projects')}>Projects</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('location')}>Location</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
