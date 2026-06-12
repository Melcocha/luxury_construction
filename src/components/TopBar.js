import React from 'react';
import { MdLocationOn, MdAccessTime } from 'react-icons/md';
import './TopBar.css';

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-logo">
        <div className="tb-logo-circle">
          <div className="tb-logo-icon">🏗</div>
          <div className="tb-logo-text">
            <span>Luxury</span>
            <span>Construction</span>
            <span>Services</span>
          </div>
        </div>
      </div>
      <div className="topbar-promo">
        Save an additional <strong>$200</strong> when you request a quote online
      </div>
      <div className="topbar-info">
        <div className="tb-info-item">
          <div className="tb-info-circle">
            <MdLocationOn size={18} />
          </div>
          <div className="tb-info-text">
            <span className="tb-info-label">Location</span>
            <span className="tb-info-value">209 Willow terrace Sterling ,Va 20164</span>
          </div>
        </div>
        <div className="tb-info-item">
          <div className="tb-info-circle">
            <MdAccessTime size={18} />
          </div>
          <div className="tb-info-text">
            <span className="tb-info-label">Monday - Saturday</span>
            <span className="tb-info-value">7:00 AM - 7:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
