import React from 'react';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export default function Location() {
  return (
    <section id="location" className="location">
      <div className="location-container">
        <h2>Get In Touch</h2>
        <h3>Find Us</h3>
        <p className="section-subtitle">
          Visit our office in Chellampatty, Tamil Nadu
        </p>

        <div className="location-content">
          <div className="location-info">
            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h4>Office Address</h4>
              <p>Chellampatty,</p>
              <p>Tamil Nadu 625514,</p>
              <p>India</p>
              <a
                href="https://maps.google.com/maps?ll=9.927825,77.889393&z=12&t=m&hl=en-US&gl=US&mapclient=embed&q=Chellampatty%20Tamil%20Nadu%20625514"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="info-card">
              <FaPhone className="info-icon" />
              <h4>Phone</h4>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>

            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <h4>Email</h4>
              <a href="mailto:info@auramaxarchitects.com">info@auramaxarchitects.com</a>
            </div>

            <div className="info-card">
              <FaClock className="info-icon" />
              <h4>Working Hours</h4>
              <p><strong>Mon – Fri</strong></p>
              <p>9:00 AM – 6:00 PM</p>
              <p><strong>Saturday</strong></p>
              <p>9:00 AM – 6:00 PM</p>
              <p><strong>Sunday</strong></p>
              <p>Closed</p>
            </div>
          </div>

          <div className="location-map">
            <iframe
              title="Auramax Office Location"
              src="https://maps.google.com/maps?ll=9.927825,77.889393&z=12&t=m&hl=en-US&gl=US&mapclient=embed&q=Chellampatty%20Tamil%20Nadu%20625514"
              width="100%"
              height="500"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
