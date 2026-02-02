import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/Rent-a-car-logo.png';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
  <img src={logo} alt="Rent A Car Logo" className="logo-img" />
</Link>


        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          </li>
          <li className={`nav-item ${isActive('/about-us') ? 'active' : ''}`}>
            <Link to="/about-us" className="nav-link" onClick={closeMenu}>About us</Link>
          </li>
          
           <li className={`nav-item ${isActive('/faq') ? 'active' : ''}`}> 
            <Link to="/faq" className="nav-link" onClick={closeMenu}>FAQ</Link>
          </li>
          <li className={`nav-item ${isActive('/cars') ? 'active' : ''}`}>
            <Link to="/cars" className="nav-link" onClick={closeMenu}>Cars</Link>
          </li>
          
          <li className={`nav-item ${isActive('/contact') ? 'active' : ''}`}>
            <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
          </li>
         <li className="">
            <Link to="/book" className="book-now" onClick={closeMenu}>
            Book Now
            </Link>
         </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
