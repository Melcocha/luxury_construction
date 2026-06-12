import React from 'react';
import './OurStory.css';

function OurStory() {
  return (
    <section className="our-story">
      <div className="story-container">
        <h2 className="story-title">Our Story</h2>

        <p className="story-p dark-p">
          Founded in 2019, our company has proudly served homeowners across Virginia with
          high-quality interior remodeling services. We specialize in transforming bathrooms,
          kitchens, bedrooms, and basements into beautiful, functional spaces that reflect your
          unique style and needs.
        </p>
        <p className="story-p blue-p">
          From concept to completion, we focus on craftsmanship, attention to detail, and
          exceptional customer service. Whether you're looking to update a single room or
          renovate your entire home, we bring experience, reliability, and passion to every
          project.
        </p>
        <p className="story-p dark-p">
          Let us help you reimagine your home—one space at a time.
        </p>

        <div className="story-cards">
          <div className="story-card">
            <div className="card-emoji">💡</div>
            <h3>Our Mission</h3>
            <p>
              To transform houses into dream homes through exceptional craftsmanship,
              creativity, and dedication to quality.
            </p>
          </div>
          <div className="story-card">
            <div className="card-emoji">👁️</div>
            <h3>Our Vision</h3>
            <p>
              To be the trusted leader in home remodeling across Virginia, known for
              innovation, integrity, and excellence.
            </p>
          </div>
          <div className="story-card">
            <div className="card-emoji">🤝</div>
            <h3>Why Choose Us</h3>
            <p>
              Experience, reliability, and a customer-first approach make us the ideal
              partner for your home transformation journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
