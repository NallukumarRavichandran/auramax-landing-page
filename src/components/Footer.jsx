import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Auramax</h3>
          <p>Architects</p>
          <p>Design & Build excellence. Creating innovative and durable structures since 2017.</p>
          <div className="social-icons">
            <a href="#facebook" aria-label="Facebook"><FaFacebook /></a>
            <a href="#instagram" aria-label="Instagram"><FaInstagram /></a>
            <a href="#linkedin" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#twitter" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Architectural Design</a></li>
            <li><a href="#services">Construction</a></li>
            <li><a href="#services">Interior Design</a></li>
            <li><a href="#services">Consultation</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2026 Auramax Architects | Design & Build</p>
        <p>Powered by Auramax Architects</p>
      </div>
    </footer>
  );
}
