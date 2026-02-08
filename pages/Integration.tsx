import React from 'react';
import './Integration.css';

const Integration = () => {
  return (
    <div className="integration-page">
      {/* Hero Section */}
      <section className="integration-hero">
        {/* Dots overlay */}
        <div className="integration-dots"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="integration-badge">
            <img src="/stacked-icon.png" alt="" className="w-8 h-8" />
            <span className="integration-badge-text">Connected Workflows</span>
          </div>

          {/* Title */}
          <h1 className="integration-title">
            Integrate Seamlessly,<br />
            <em>Work Effortlessly.</em>
          </h1>

          {/* Subtitle */}
          <p className="integration-subtitle">
            Connect Stacked with your favorite tools to automate tasks, sync data, and<br />
            keep your entire workflow running in perfect harmony.
          </p>

        </div>
        
        {/* Integration Diagram - positioned absolutely */}
        <div className="integration-diagram">
          <img src="/Elements.png" alt="Integration Elements" />
        </div>
      </section>

      {/* Integration Cards Section */}
      <section className="integration-cards-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Filter Pills & Search */}
          <div className="integration-filters">
            <div className="filter-pills">
              <button className="filter-pill active">All</button>
              <button className="filter-pill">Banking Data</button>
              <button className="filter-pill">CRM</button>
              <button className="filter-pill">Email</button>
              <button className="filter-pill">Document Processing</button>
              <button className="filter-pill">Payments</button>
              <button className="filter-pill">Communications</button>
              <button className="filter-pill">E-Signature</button>
              <button className="filter-pill">Accounting</button>
              <button className="filter-pill">Automation</button>
              <button className="filter-pill">Marketing</button>
              <button className="filter-pill">Team Collaboration</button>
            </div>
            <div className="integration-search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input type="text" placeholder="Search integrations..." />
            </div>
          </div>

          {/* Integration Cards Grid */}
          <div className="integration-grid">
            {/* Plaid */}
            <div className="integration-card">
              <div className="integration-card-logo">
                <span className="text-2xl font-bold text-[#111]">⬡ PLAID</span>
              </div>
              <h3 className="integration-card-name">Plaid</h3>
              <span className="integration-card-tag">Banking Data</span>
              <p className="integration-card-desc">Real-time bank account verification and transaction data.</p>
            </div>

            {/* Salesforce */}
            <div className="integration-card">
              <div className="integration-card-logo">
                <div className="w-12 h-12 bg-[#00A1E0] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">salesforce</span>
                </div>
              </div>
              <h3 className="integration-card-name">Salesforce</h3>
              <span className="integration-card-tag">CRM</span>
              <p className="integration-card-desc">Sync customer data and lead management.</p>
            </div>

            {/* Mailgun */}
            <div className="integration-card">
              <div className="integration-card-logo">
                <span className="text-2xl font-bold text-[#111]">✉ mailgun</span>
              </div>
              <h3 className="integration-card-name">Mailgun</h3>
              <span className="integration-card-tag">Email</span>
              <p className="integration-card-desc">Automated email communications and notifications.</p>
            </div>

            {/* AWS Textract */}
            <div className="integration-card">
              <div className="integration-card-logo">
                <span className="text-2xl font-bold text-[#FF9900]">aws</span>
              </div>
              <h3 className="integration-card-name">AWS Textract</h3>
              <span className="integration-card-tag">Document Processing</span>
              <p className="integration-card-desc">OCR and document data extraction.</p>
            </div>

            {/* Stripe */}
            <div className="integration-card">
              <div className="integration-card-logo">
                <span className="text-3xl font-bold text-[#635BFF]">stripe</span>
              </div>
              <h3 className="integration-card-name">Stripe</h3>
              <span className="integration-card-tag">Payments</span>
              <p className="integration-card-desc">Payment processing and subscription management.</p>
            </div>

            {/* Twilio */}
            <div className="integration-card">
              <div className="integration-card-logo">
                <span className="text-2xl font-bold text-[#F22F46]">⊛ twilio</span>
              </div>
              <h3 className="integration-card-name">Twilio</h3>
              <span className="integration-card-tag">Communications</span>
              <p className="integration-card-desc">SMS notifications and voice communications.</p>
            </div>

            {/* DocuSign */}
            <div className="integration-card">
              <div className="integration-card-logo">
                <span className="text-2xl font-bold text-[#111]">▶ docusign</span>
              </div>
              <h3 className="integration-card-name">DocuSign</h3>
              <span className="integration-card-tag">E-Signature</span>
              <p className="integration-card-desc">Electronic signature and document management.</p>
            </div>

            {/* QuickBooks */}
            <div className="integration-card">
              <div className="integration-card-logo">
                <span className="text-xl font-bold text-[#2CA01C]">⬡ quickbooks</span>
              </div>
              <h3 className="integration-card-name">QuickBooks</h3>
              <span className="integration-card-tag">Accounting</span>
              <p className="integration-card-desc">Financial data sync and accounting integration.</p>
            </div>

            {/* Zapier */}
            <div className="integration-card">
              <div className="integration-card-logo">
                <span className="text-3xl font-bold text-[#FF4A00]">zapier</span>
              </div>
              <h3 className="integration-card-name">Zapier</h3>
              <span className="integration-card-tag">Automation</span>
              <p className="integration-card-desc">Connect with 3,000+ apps via Zapier.</p>
            </div>

            {/* HubSpot */}
            <div className="integration-card">
              <div className="integration-card-logo">
                <span className="text-2xl font-bold text-[#FF7A59]">HubSpot</span>
              </div>
              <h3 className="integration-card-name">HubSpot</h3>
              <span className="integration-card-tag">Marketing</span>
              <p className="integration-card-desc">Marketing automation and lead nurturing.</p>
            </div>

            {/* Meta Ads */}
            <div className="integration-card">
              <div className="integration-card-logo">
                <span className="text-3xl font-bold text-[#0668E1]">∞ Meta</span>
              </div>
              <h3 className="integration-card-name">Meta Ads</h3>
              <span className="integration-card-tag">Marketing</span>
              <p className="integration-card-desc">Facebook & Instagram ad attribution and audience sync.</p>
            </div>

            {/* Slack */}
            <div className="integration-card">
              <div className="integration-card-logo">
                <span className="text-2xl font-bold text-[#4A154B]"># slack</span>
              </div>
              <h3 className="integration-card-name">Slack</h3>
              <span className="integration-card-tag">Team Collaboration</span>
              <p className="integration-card-desc">Real-time notifications and team updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Integration CTA Section */}
      <section className="integration-cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="integration-cta-badge">
            <img src="/stacked-icon.png" alt="" className="w-8 h-8" />
            <span className="integration-cta-badge-text">Integrate and Automate</span>
          </div>

          {/* Title */}
          <h2 className="integration-cta-title">Need a Custom Integration?</h2>

          {/* Subtitle */}
          <p className="integration-cta-subtitle">
            Our API-first architecture makes it easy to build custom integrations.<br />
            Work with our team to connect any system.
          </p>

          {/* Buttons */}
          <div className="integration-cta-buttons">
            <a href="/contact" className="integration-cta-button">
              <span>Contact Sales</span>
              <div className="integration-cta-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#D4FF73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
            <a href="#" className="integration-cta-link">
              View API Docs
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M9 9h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integration;
