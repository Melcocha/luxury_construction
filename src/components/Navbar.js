import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdPhone } from 'react-icons/md';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-logo-circle">
        <div className="nav-logo-icon">🏗</div>
        <div className="nav-logo-text">
          <span>Luxury</span>
          <span>Construction</span>
          <span>Services</span>
        </div>
      </div>

      <div className="nav-links">
        <Link
          to="/"
          className={`nav-link ${location.pathname === '/' ? 'nav-active' : ''}`}
        >
          Home
        </Link>
        <span className="nav-sep">|</span>
        <Link
          to="/contact"
          className={`nav-link ${location.pathname === '/contact' ? 'nav-active' : ''}`}
        >
          Contact
        </Link>
      </div>

      <div className="nav-actions">
        <div className="nav-phone">
          <div className="nav-phone-circle">
            <MdPhone size={17} />
          </div>
          <span className="nav-phone-num">(703) 473-7795</span>
        </div>
        <Link to="/contact" className="nav-quote-btn">
          Get A Quote <span className="nav-arrow">›</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
