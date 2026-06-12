import React, { useState, useRef, useCallback } from 'react';
import './BeforeAfter.css';

const BEFORE_IMG = 'https://picsum.photos/seed/before-constr/600/500';
const AFTER_IMG = 'https://picsum.photos/seed/after-marble/600/500';

function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const updateSlider = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e) => {
    if (isDragging.current) updateSlider(e.clientX);
  };

  const handleTouchMove = (e) => {
    updateSlider(e.touches[0].clientX);
  };

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
          <img src={AFTER_IMG} alt="After renovation" className="ba-img ba-after" />
          <div
            className="ba-before-clip"
            style={{ width: `${sliderPos}%` }}
          >
            <img src={BEFORE_IMG} alt="Before renovation" className="ba-img ba-before" />
          </div>
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
          <div className="ba-text-bubble"></div>
          <h3>House Remodeling Transformation</h3>
          <p>
            Discover how we turn outdated spaces into{' '}
            <a href="/contact">stunning modern homes</a>. Slide to see the transformation —
            we manage everything{' '}
            <a href="/contact">from concept to completion</a>, delivering results that
            consistently exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;
