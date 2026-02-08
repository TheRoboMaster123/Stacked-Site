import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="about-badge">
            <img src="/stacked-icon.png" alt="" className="w-8 h-8" />
            <span className="about-badge-text">About us</span>
          </div>

          {/* Title */}
          <h1 className="about-title">
            Built by Industry Veterans<br />
            <span className="about-title-muted">and Relentless Builders</span>
          </h1>

          {/* Subtitle */}
          <p className="about-subtitle">
            We've lived the pain of legacy lending systems. So we built the solution.
          </p>
        </div>

        {/* Images */}
        <div className="about-images">
          <img src="/Industry Veterans.png" alt="Industry Veterans" />
        </div>
      </section>

      {/* Founders Section */}
      <section className="about-founders">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="founders-header">
            <div className="founders-header-left">
              {/* Badge */}
              <div className="founders-badge">
                <img src="/stacked-icon.png" alt="" className="w-6 h-6" />
                <span className="founders-badge-text">The Founders</span>
              </div>
              <h2 className="founders-title">
                The Minds<br />Behind Stacked
              </h2>
            </div>
            <div className="founders-header-right">
              <p>
                Stacked was founded by <strong>Nathan Hamilton</strong>, <strong>Joe Downie</strong>, and <strong>Brian Kim</strong>. Entrepreneurs and technologists who have built across eCommerce, SaaS, and FinTech.
              </p>
            </div>
          </div>

          {/* Founders Cards */}
          <div className="founders-cards">
            {/* Nathan Hamilton */}
            <div className="founder-card">
              <div className="founder-image">
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop" alt="Nathan Hamilton" />
              </div>
              <div className="founder-info">
                <div>
                  <h3>Nathan Hamilton</h3>
                  <p>Full-Stack Architecture &<br />AI Engineering</p>
                </div>
                <a href="#" className="linkedin-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Joe Downie */}
            <div className="founder-card">
              <div className="founder-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" alt="Joe Downie" />
              </div>
              <div className="founder-info">
                <div>
                  <h3>Joe Downie</h3>
                  <p>Backend &<br />Infrastructure</p>
                </div>
                <a href="#" className="linkedin-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Brian Kim */}
            <div className="founder-card">
              <div className="founder-image">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop" alt="Brian Kim" />
              </div>
              <div className="founder-info">
                <div>
                  <h3>Brian Kim</h3>
                  <p>SMB Community &<br />Industry Partnerships</p>
                </div>
                <a href="#" className="linkedin-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="about-mission">
        <div className="mission-icon">
          <img src="/stacked-icon.png" alt="" />
        </div>
        <p className="mission-text">
          <span className="mission-dark">We've experienced the chaos of disconnected tools and built a modular system to fix it.</span>
          {' '}
          <span className="mission-grey">Stacked combines real world industry experience with technical precision to deliver AI-assisted automation that scales with any lender ecosystem.</span>
        </p>
      </section>

      {/* Philosophy Section */}
      <section className="about-philosophy">
        <div className="philosophy-container">
          {/* Left Card */}
          <div className="philosophy-left">
            <div className="philosophy-badge">
              <img src="/stacked-icon.png" alt="" className="philosophy-badge-icon" />
              <span className="philosophy-badge-text">Our Philosophy</span>
            </div>
            <h2 className="philosophy-title">
              Built on Experience,<br />
              <span className="philosophy-title-muted">Powered by Innovation</span>
            </h2>
            <p className="philosophy-subtitle">
              Real industry experience meets modern technology. We build modular, scalable systems that adapt to your infrastructure — no rip-and-replace required.
            </p>
          </div>

          {/* Right Card */}
          <div className="philosophy-right">
            <img src="/built on experience.png" alt="Built on experience workflow" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="values-header">
          {/* Badge */}
          <div className="values-badge">
            <div className="values-badge-icon">
              <img src="/stacked-icon.png" alt="" />
            </div>
            <span className="values-badge-text">Our Values</span>
          </div>

          <h2 className="values-title">Guided by What Matters Most</h2>
          <p className="values-subtitle">
            Our values shape every decision we make. From how we build technology to how we partner with clients. Integrity, collaboration, and long-term impact drive everything we do.
          </p>
        </div>

        <div className="values-cards">
          {/* Customer First */}
          <div className="value-card">
            <h3>Customer First</h3>
            <p>Solve real operator pain points</p>
            <div className="value-icon">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#1A332B" strokeWidth="2">
                <path d="M20 24C20 17.373 25.373 12 32 12C38.627 12 44 17.373 44 24V28" strokeLinecap="round"/>
                <path d="M16 28H20V44H16C14.895 44 14 43.105 14 42V30C14 28.895 14.895 28 16 28Z"/>
                <path d="M44 28H48C49.105 28 50 28.895 50 30V42C50 43.105 49.105 44 48 44H44V28Z"/>
                <path d="M44 44V46C44 49.314 41.314 52 38 52H34"/>
                <circle cx="32" cy="52" r="4"/>
              </svg>
            </div>
          </div>

          {/* Innovation */}
          <div className="value-card">
            <h3>Innovation</h3>
            <p>AI and modularity drive our design</p>
            <div className="value-icon">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#1A332B" strokeWidth="2">
                <path d="M32 8C23.163 8 16 15.163 16 24C16 30.627 20.373 36.227 26.5 38.5V44C26.5 45.105 27.395 46 28.5 46H35.5C36.605 46 37.5 45.105 37.5 44V38.5C43.627 36.227 48 30.627 48 24C48 15.163 40.837 8 32 8Z" strokeLinecap="round"/>
                <path d="M28 50H36" strokeLinecap="round"/>
                <path d="M28 54H36" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Partnership */}
          <div className="value-card">
            <h3>Partnership</h3>
            <p>We win when our clients do</p>
            <div className="value-icon">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#1A332B" strokeWidth="2">
                <circle cx="32" cy="32" r="24"/>
                <path d="M32 8C32 8 24 20 24 32C24 44 32 56 32 56" strokeLinecap="round"/>
                <path d="M32 8C32 8 40 20 40 32C40 44 32 56 32 56" strokeLinecap="round"/>
                <path d="M10 24H54" strokeLinecap="round"/>
                <path d="M8 32H56" strokeLinecap="round"/>
                <path d="M10 40H54" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-cta-content">
          {/* Badge */}
          <div className="about-cta-badge">
            <div className="about-cta-badge-icon">
              <img src="/stacked-icon.png" alt="" />
            </div>
            <span className="about-cta-badge-text">Try Stacked Today</span>
          </div>

          <h2 className="about-cta-title">Join Us in Modernizing Lending</h2>
          <p className="about-cta-subtitle">
            Join lenders and brokers who are modernizing their operations with<br />
            modular AI-assisted automation.
          </p>

          <div className="about-cta-buttons">
            <a href="#" className="about-cta-btn-primary">
              <span>Start Free Trial</span>
              <div className="about-cta-btn-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
            <a href="#" className="about-cta-btn-secondary">
              <span>Schedule Demo</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
