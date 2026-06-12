import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';
import './Hero.css';

const carouselImages = [
  'https://picsum.photos/seed/luxreno-a/520/380',
  'https://picsum.photos/seed/luxreno-b/520/380',
  'https://picsum.photos/seed/luxreno-c/520/380',
  'https://picsum.photos/seed/luxreno-d/520/380',
];

function Hero() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + carouselImages.length) % carouselImages.length);
  const next = () =>
    setCurrent((c) => (c + 1) % carouselImages.length);

  return (
    <section className="hero">
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
              <MdArrowBackIos size={14} />
            </button>
            <img
              src={carouselImages[current]}
              alt={`Renovation project ${current + 1}`}
              className="hero-card-img"
            />
            <button className="hero-arrow right-arrow" onClick={next}>
              <MdArrowForwardIos size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
