import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Footer.scss";
import logo from '../assets/Rent-a-car-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        
        {/* Company Info */}
        <div className="footer__section footer__about">
          <img src={logo} alt="Company Logo" className="footer__logo" />
          <p>
            Your trusted partner in delivering professional solutions with excellence.
            We bring innovation, reliability, and unmatched customer service.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer__section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Locations */}
        <div className="footer__section">
          <h3>Our Locations</h3>
          <ul>
            <li>Lahore, Pakistan</li>
            <li>Karachi, Pakistan</li>
            <li>Islamabad, Pakistan</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer__section">
          <h3>Contact Us</h3>
          <p>📞 +92 300 1234567</p>
          <p>📧 info@yourcompany.com</p>
          <div className="footer__socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
