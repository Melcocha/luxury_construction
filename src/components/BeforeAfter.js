import React, { useState, useRef, useCallback } from 'react';
import beforeImg from '../images/slide/antes.jpg';
import afterImg from '../images/slide/despues.jpg';
import './BeforeAfter.css';

function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const updateSlider = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = (e) => { e.preventDefault(); isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e) => { if (isDragging.current) updateSlider(e.clientX); };
  const handleTouchMove = (e) => { e.preventDefault(); updateSlider(e.touches[0].clientX); };

  return (
    <section className="ba-section">
      <div className="ba-inner">
        <div
          className="ba-container"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
        >
          {/* After (always full width behind) */}
          <img src={afterImg} alt="After renovation" className="ba-img ba-after" />

          {/* Before (clipped from the right via clip-path — fully responsive) */}
          <img
            src={beforeImg}
            alt="Before renovation"
            className="ba-img ba-before"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          />

          {/* Divider handle */}
          <div
            className="ba-divider"
            style={{ left: `${sliderPos}%` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            <div className="ba-handle">
              <span>‹</span>
              <span>›</span>
            </div>
          </div>
        </div>

        <div className="ba-text">
          <div className="ba-text-bubble" />
          <h3>House Remodeling Transformation</h3>
          <p>
            Discover how we turn outdated spaces into{' '}
            <a href="/contact">stunning modern homes</a>. Slide to see the
            transformation — we manage everything{' '}
            <a href="/contact">from concept to completion</a>, delivering results
            that consistently exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;
