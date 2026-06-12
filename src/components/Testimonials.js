import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote:
      '"Excellent service from start to finish. Our bathroom renovation exceeded all expectations. Highly recommended!"',
    name: 'Michael Smith',
    role: 'Client',
  },
  {
    quote:
      '"They truly understood my vision and delivered beyond what I imagined. Great communication and attention to detail."',
    name: 'Sophia Lee',
    role: 'Customer',
  },
  {
    quote:
      '"Professional and timely. The renovation process was seamless and the results are stunning."',
    name: 'James Anderson',
    role: 'Homeowner',
  },
  {
    quote:
      '"Luxury Construction Services remodeled our home with professionalism, fair pricing, and smart solutions that saved us money without sacrificing quality."',
    name: 'Leticia Larancuent',
    role: 'Homeowner',
  },
];

const allItems = [...testimonials, ...testimonials];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonials-viewport">
        <div className="testimonials-track">
          {allItems.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p className="t-quote">{t.quote}</p>
              <p className="t-name">{t.name}</p>
              <p className="t-role">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
