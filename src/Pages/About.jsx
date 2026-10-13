
import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">

     
      <section className="about-hero">
        <p className="about-label">WELCOME TO GLOWCART</p>

        <h1>
          Your Skin Deserves
          <br />
          <span>Something Beautiful.</span>
        </h1>

        <p className="about-intro">
          Discover skincare that celebrates your natural beauty.
          At GlowCart, we believe healthy skin starts with
          the right care, confidence, and consistency.
        </p>

        <a href="#our-story" className="about-button">
          Discover Our Story
        </a>
      </section>

     
      <section className="about-story" id="our-story">
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=900&q=80"
            alt="Skincare products and natural ingredients"
          />
        </div>

        <div className="story-content">
          <p className="about-label">OUR STORY</p>

          <h2>Beauty begins with caring for yourself.</h2>

          <p>
            GlowCart was created to make skincare shopping
            simple, enjoyable, and accessible. We bring
            together everyday skincare essentials to help
            you build a routine that works for you.
          </p>

          <p>
            Whether you are starting your skincare journey
            or updating your routine, we are here to help
            you find products that fit your needs.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="values-heading">
          <p className="about-label">WHAT WE BELIEVE IN</p>
          <h2>Our Values</h2>
          <p>Little things that make your skincare journey special.</p>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <span>✿</span>
            <h3>Self Care</h3>
            <p>
              Skincare is more than a routine.
              It is time dedicated to yourself.
            </p>
          </div>

          <div className="value-card">
            <span>♡</span>
            <h3>Made Simple</h3>
            <p>
              Discover everyday essentials without
              making skincare complicated.
            </p>
          </div>

          <div className="value-card">
            <span>❋</span>
            <h3>Natural Confidence</h3>
            <p>
              Celebrate your unique skin and feel
              confident in your own beauty.
            </p>
          </div>
        </div>
      </section>

     
      <section className="about-banner">
        <h2>Your glow, your journey.</h2>
        <p>Make every day a little more beautiful with GlowCart.</p>
      </section>

    </div>
  );
}

export default About;