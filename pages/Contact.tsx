import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="contact-badge">
            <img src="/stacked-icon.png" alt="" className="w-8 h-8" />
            <span className="contact-badge-text">Contact us</span>
          </div>

          {/* Title */}
          <h1 className="contact-title">Get in Touch</h1>

          {/* Subtitle */}
          <p className="contact-subtitle">
            We're here to help. Reach out and let's talk about how Stacked<br />
            can transform your business.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="contact-grid">
            {/* Left Side */}
            <div className="contact-left">
              <h2 className="contact-connect-title">Let's<br />Connect</h2>
              <p className="contact-connect-subtitle">
                Whether you're curious about features, a demo, or partnership opportunities, we're here to help you find the right solution.
              </p>

              {/* Contact Info Cards */}
              <div className="contact-info-list">
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A332B" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-info-label">Email</p>
                    <p className="contact-info-value">hello@stacked.com</p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A332B" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-info-label">Phone</p>
                    <p className="contact-info-value">1-800-STACKED</p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A332B" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-info-label">Office</p>
                    <p className="contact-info-value">123 Innovation Drive San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="quick-actions">
                <h3 className="quick-actions-title">Quick Actions</h3>
                <a href="#" className="quick-action-btn primary">
                  <div className="quick-action-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </div>
                  <span>Start Free Trial</span>
                </a>
                <a href="/demo-booking" className="quick-action-btn secondary">
                  <div className="quick-action-icon secondary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A332B" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </div>
                  <span>Schedule Demo</span>
                </a>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="contact-form-card">
              <h3 className="contact-form-title">Send us a message</h3>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="full-name">Full name</label>
                  <input type="text" id="full-name" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" id="email" placeholder="example@email.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" placeholder="Company Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={5} placeholder="Tell us about your needs..."></textarea>
                </div>
                <button type="submit" className="contact-submit-btn">
                  <span>Send Message</span>
                  <div className="contact-submit-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4FF73" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
