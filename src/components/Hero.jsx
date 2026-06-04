import React from 'react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Welcome to Auramax</h1>
        <p>"It is my privilege to welcome you to Auramax."</p>
        <p className="hero-description">
          For over 9 years, we have been transforming visions into architectural masterpieces. 
          Every project we undertake is a testament to our commitment to quality, innovation, 
          and the trust you place in us.
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={scrollToContact}>
            Get in Touch
          </button>
          <button className="btn btn-secondary">Learn More</button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <h3>9+</h3>
            <p>Years</p>
          </div>
          <div className="stat">
            <h3>120+</h3>
            <p>Projects</p>
          </div>
          <div className="stat">
            <h3>95%</h3>
            <p>Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
