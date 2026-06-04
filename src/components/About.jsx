import React from 'react';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2>About Us</h2>
          <h3>Who We Are</h3>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h4>9+ Years of Experience</h4>
            <p className="highlight-text">
              "Quality construction is not an option — it is our responsibility."
            </p>
            <p>
              At the core of our work is honesty, quality, and responsibility. With 9 years of 
              experience, we deliver safe, reliable, and well-engineered construction projects. 
              Every structure is executed with precision, using quality materials and modern methods. 
              Our mission is to build lasting structures and long-term trust with every client.
            </p>
            <p>
              We are a team of skilled architects, designers, and construction professionals committed 
              to creating innovative and durable structures. With years of experience in the industry, 
              we deliver projects that combine functionality, aesthetics, and structural integrity.
            </p>

            <div className="about-mission-vision">
              <div className="mission">
                <h5>Our Mission</h5>
                <p>
                  To design and build high-quality spaces that enhance lifestyles, support businesses, 
                  and stand the test of time.
                </p>
              </div>
              <div className="vision">
                <h5>Our Vision</h5>
                <p>
                  To become a trusted leader in architecture and construction by delivering innovative, 
                  sustainable, and client-focused solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <p>Design & Build Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
