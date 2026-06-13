import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    renovationType: '',
    details: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Quote request submitted! We will contact you shortly.');
    setForm({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      renovationType: '',
      details: '',
    });
  };

  return (
    <main className="contact-page">
      <div className="contact-card">
        <h2 className="contact-title">Request a Home Renovation Quote</h2>
        <p className="contact-subtitle">
          Fill out the form below to contact us and receive a free quote for your home renovation.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Your full name"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your phone number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Project address"
              value={form.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="renovationType">Type of Renovation</label>
            <input
              id="renovationType"
              name="renovationType"
              type="text"
              placeholder="e.g., Kitchen, Bathroom, Full House"
              value={form.renovationType}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="details">Project Details</label>
            <textarea
              id="details"
              name="details"
              placeholder="Describe your renovation project..."
              rows={5}
              value={form.details}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contact-submit-btn">
            Send Quote Request
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
