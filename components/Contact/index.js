"use client";

import {useState} from "react";
import "./index.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    alert("Thank you! Our team will contact you soon.");

    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <section
      className="contact-section"
      id="contact"
      data-aos="fade-up"
    >
      <div className="container contact-container">

      <div className="contact-left">

<span className="section-tag">
  Contact Us
</span>

<h2>
  Ready to Upskill Your Team?
</h2>

<p>
  Connect with our enterprise learning experts and build customized
  learning solutions for your organization.
</p>

<div className="contact-info">

  <div className="info-card">

    <h4>📧 Email</h4>

    <span>enterprise@accredian.com</span>

  </div>

  <div className="info-card">

    <h4>📞 Phone</h4>

    <span>+91 98765 43210</span>

  </div>

  <div className="info-card">

    <h4>📍 Location</h4>

    <span>Bangalore, India</span>

  </div>

</div>

</div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Tell us about your learning requirements..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Book Free Demo
          </button>

        </form>

      </div>
    </section>
  );
}