import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdPhone, MdMenu, MdClose } from 'react-icons/md';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      <nav className="navbar">
        <div className={`nav-logo-circle ${scrolled ? 'nav-logo-visible' : 'nav-logo-hidden'}`}>
          <div className="nav-logo-icon">🏗</div>
          <div className="nav-logo-text">
            <span>Luxury</span>
            <span>Construction</span>
            <span>Services</span>
          </div>
        </div>

        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'nav-active' : ''}`}>
            Home
          </Link>
          <span className="nav-sep">|</span>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'nav-active' : ''}`}>
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

        <button
          className="hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <MdClose size={26} /> : <MdMenu size={26} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" className={`mobile-menu-link ${location.pathname === '/' ? 'mobile-active' : ''}`}>
            Home
          </Link>
          <Link to="/contact" className={`mobile-menu-link ${location.pathname === '/contact' ? 'mobile-active' : ''}`}>
            Contact
          </Link>
          <a href="tel:7034737795" className="mobile-menu-phone">
            <MdPhone size={16} /> (703) 473-7795
          </a>
          <Link to="/contact" className="mobile-menu-quote">
            Get A Quote ›
          </Link>
        </div>
      )}
    </>
  );
}

export default Navbar;
