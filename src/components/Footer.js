import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone, MdCalendarToday, MdCheckBox } from 'react-icons/md';
import logoImg from '../images/logo/logoluxury-CxXvcWr3.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <p className="footer-follow">Follow Us</p>
        <a href="https://www.instagram.com/luxuryconstructionservicesllc/" target="_blank" rel="noopener noreferrer" className="footer-instagram-btn">
          <FaInstagram size={16} /> Instagram
        </a>
      </div>

      <div className="footer-divider" />

      <div className="footer-main">
        <div className="footer-brand">
          <img src={logoImg} alt="Luxury Construction Services" className="footer-logo-img" />
          <p className="footer-tagline">Your trusted partner for home improvement services.</p>
        </div>

        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <div className="footer-contact-item">
            <MdEmail size={16} />
            <a href="mailto:Luxuryconstructionservicesllc@outlook.com" className="footer-link">
              Luxuryconstructionservicesllc@outlook.com
            </a>
          </div>
          <div className="footer-contact-item">
            <MdLocationOn size={16} />
            <a
              href="https://maps.google.com/?q=209+Willow+terrace+Sterling+Va+20164"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              209 Willow terrace Sterling, Va 20164
            </a>
          </div>
          <div className="footer-contact-item">
            <MdPhone size={16} />
            <a href="tel:+17034737795" className="footer-link">
              (703) 473-7795
            </a>
          </div>
          <div className="footer-contact-item">
            <MdCalendarToday size={16} />
            <span>Mon - Sat<br />7:00 AM - 7:00 PM</span>
          </div>
        </div>

        <div className="footer-why">
          <h4>Why Choose Us?</h4>
          <div className="footer-why-item"><MdCheckBox size={18} color="#4CAF50" /><span>Licensed &amp; Insured</span></div>
          <div className="footer-why-item"><MdCheckBox size={18} color="#4CAF50" /><span>Reliable &amp; Timely Service</span></div>
          <div className="footer-why-item"><MdCheckBox size={18} color="#4CAF50" /><span>Competitive Pricing</span></div>
          <div className="footer-why-item"><MdCheckBox size={18} color="#4CAF50" /><span>Quality Work Guaranteed</span></div>
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
