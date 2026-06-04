import React from 'react';
import { FaPencilRuler, FaHardHat, FaPaintBrush } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <FaPencilRuler />,
      title: 'Architectural Design',
      description:
        'We create creative, practical, and modern architectural designs tailored to your needs, budget, and lifestyle.',
    },
    {
      id: 2,
      icon: <FaHardHat />,
      title: 'Construction',
      description:
        'From foundation to finishing, we manage complete construction projects with quality workmanship and strict safety standards.',
    },
    {
      id: 3,
      icon: <FaPaintBrush />,
      title: 'Interior Design',
      description:
        'Our interior solutions focus on comfort, functionality, and style, creating spaces that reflect your personality.',
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2>Our Services</h2>
        <p className="section-subtitle">
          Comprehensive solutions for every stage of your project — from concept to completion.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h3>Looking for Stress-Free Residential Construction Solutions?</h3>
          <p>Our Experts Can Help!</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
}
