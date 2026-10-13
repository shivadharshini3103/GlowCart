
import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">

    
      <section className="contact-hero">
        <p className="contact-label">WE'RE HERE FOR YOU</p>

        <h1>Let's Talk <span>Skincare.</span></h1>

        <p>
          Have a question or need help choosing your products?
          We'd love to hear from you.
        </p>
      </section>

  
      <section className="contact-container">

        <div className="contact-info">
          <p className="contact-label">GET IN TOUCH</p>

          <h2>We'd love to hear from you.</h2>

          <p className="contact-description">
            Whether you need product information or help with
            your order, our team is here to help.
          </p>

          <div className="contact-detail">
            <div className="contact-icon">✉</div>
            <div>
              <h3>Email Us</h3>
              <p>support@glowcart.com</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon">◷</div>
            <div>
              <h3>Support Hours</h3>
              <p>Monday – Saturday</p>
              <p>9:00 AM – 6:00 PM</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon">♡</div>
            <div>
              <h3>Customer Care</h3>
              <p>We're happy to help with your skincare journey.</p>
            </div>
          </div>
        </div>

      
        <div className="contact-form-card">
          <h2>Send us a message</h2>

          <p className="form-description">
            Fill in the details below and let us know how we can help.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="contact-field">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Write your message here..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {success && (
              <p className="contact-success">{success}</p>
            )}

            <button type="submit" className="contact-submit">
              Send Message <span>→</span>
            </button>

          </form>
        </div>

      </section>

   
      <section className="contact-bottom">
        <h2>A little care goes a long way.</h2>
        <p>Thank you for making GlowCart part of your skincare routine.</p>
      </section>

    </div>
  );
}

export default Contact;
