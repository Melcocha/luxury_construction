import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import {
  MdEmail,
  MdLocationOn,
  MdPhone,
  MdCalendarToday,
  MdCheckBox,
} from 'react-icons/md';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <p className="footer-follow">Follow Us</p>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-instagram-btn"
        >
          <FaInstagram size={16} />
          Instagram
        </a>
      </div>

      <div className="footer-divider" />

      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">🏗</div>
            <div className="footer-logo-text">
              <span>Luxury</span>
              <span>Construction</span>
              <span>Services</span>
            </div>
          </div>
          <p className="footer-tagline">Your trusted partner for home improvement services.</p>
        </div>

        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <div className="footer-contact-item">
            <MdEmail size={16} />
            <span>Luxuryconstructionservicesllc@outlook.com</span>
          </div>
          <div className="footer-contact-item">
            <MdLocationOn size={16} />
            <span>209 Willow terrace Sterling ,Va 20164</span>
          </div>
          <div className="footer-contact-item">
            <MdPhone size={16} />
            <span>(703) 473-7795</span>
          </div>
          <div className="footer-contact-item">
            <MdCalendarToday size={16} />
            <span>Mon - Sat<br />7:00 AM - 7:00 PM</span>
          </div>
        </div>

        <div className="footer-why">
          <h4>Why Choose Us?</h4>
          <div className="footer-why-item">
            <MdCheckBox size={18} color="#4CAF50" />
            <span>Licensed &amp; Insured</span>
          </div>
          <div className="footer-why-item">
            <MdCheckBox size={18} color="#4CAF50" />
            <span>Reliable &amp; Timely Service</span>
          </div>
          <div className="footer-why-item">
            <MdCheckBox size={18} color="#4CAF50" />
            <span>Competitive Pricing</span>
          </div>
          <div className="footer-why-item">
            <MdCheckBox size={18} color="#4CAF50" />
            <span>Quality Work Guaranteed</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Luxury Construction Service. All rights reserved.</p>
        <p className="footer-powered">Powered by: Arias Defense Component LLC</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <span>|</span>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
