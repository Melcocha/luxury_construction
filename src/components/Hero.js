import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import heroBg from '../images/video/Diseño sin título.mp4';
import './Hero.css';

const carouselImages = [
  require('../images/bath/1-3jmRTu8u.jpg'),
  require('../images/kitchen/15-Cka7-PMh.jpg'),
  require('../images/room/17-DylWcybW.jpg'),
  require('../images/living/28-BrRE1MBd.jpg'),
];

function Hero() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + carouselImages.length) % carouselImages.length);
  const next = () => setCurrent((c) => (c + 1) % carouselImages.length);

  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        src={heroBg}
      />
      <div className="hero-bg-overlay">
        <div className="hero-inner">
          <div className="hero-text-box">
            <h1>Were Renovation<br />Meets Inspiration</h1>
            <p>
              We turn your remodeling ideas into beautiful spaces—<br />
              crafted with precision, care, and passion.
            </p>
            <Link to="/contact" className="hero-cta-btn">
              Free Estimate <span>›</span>
            </Link>
          </div>

          <div className="hero-card">
            <button className="hero-arrow left-arrow" onClick={prev}>
              <MdChevronLeft size={22} />
            </button>
            <img
              src={carouselImages[current]}
              alt={`Renovation project ${current + 1}`}
              className="hero-card-img"
            />
            <button className="hero-arrow right-arrow" onClick={next}>
              <MdChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
