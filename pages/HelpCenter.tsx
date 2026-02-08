import React from 'react';
import { Link } from 'react-router-dom';
import './HelpCenter.css';

const HelpCenter = () => {
  return (
    <div className="help-page">
      {/* Hero Section */}
      <section className="help-hero">
        <div className="help-hero-content">
          {/* Badge */}
          <div className="help-badge">
            <div className="help-badge-icon">
              <img src="/stacked-icon.png" alt="" />
            </div>
            <span className="help-badge-text">Help Center</span>
          </div>

          <h1 className="help-title">How can we help?</h1>

          {/* Search Box */}
          <div className="help-search">
            <input 
              type="search" 
              placeholder="Search..." 
              className="help-search-input"
            />
            <button className="help-search-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="help-content">
        <div className="help-content-container">
          {/* Popular Section */}
          <h2 className="help-section-title">Popular</h2>
          <div className="help-cards-grid">
            {/* Quickstart Guide */}
            <Link to="/help/quickstart" className="help-card">
              <div className="help-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="help-card-divider"></div>
              <h3 className="help-card-title">Quickstart Guide</h3>
              <p className="help-card-desc">Set up your workspace, create an intake link, and publish your first workflow in minutes.</p>
            </Link>

            {/* Build an Application Pack */}
            <Link to="/help/application-pack" className="help-card">
              <div className="help-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="help-card-divider"></div>
              <h3 className="help-card-title">Build an Application Pack</h3>
              <p className="help-card-desc">Standardize required fields and documents so every file arrives review-ready.</p>
            </Link>

            {/* Document Checks - Highlighted */}
            <Link to="/help/document-checks" className="help-card help-card-highlight">
              <div className="help-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="help-card-divider"></div>
              <h3 className="help-card-title">Document Checks</h3>
              <p className="help-card-desc">Extract key details, validate completeness, and reduce "missing docs" follow-ups.</p>
            </Link>

            {/* Integrations Overview */}
            <Link to="/help/integrations" className="help-card">
              <div className="help-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="help-card-divider"></div>
              <h3 className="help-card-title">Integrations Overview</h3>
              <p className="help-card-desc">Connect Stacked to your LOS, CRM, KYC, and data providers without replacing your stack.</p>
            </Link>
          </div>

          {/* Stacked basics Section */}
          <h2 className="help-section-title">Stacked basics</h2>
          <div className="help-cards-grid">
            {/* Intake & Links */}
            <Link to="/help/intake" className="help-card">
              <div className="help-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="help-card-divider"></div>
              <h3 className="help-card-title">Intake & Links</h3>
              <p className="help-card-desc">Create forms, set required fields, manage uploads, and share a branded intake link.</p>
            </Link>

            {/* Workflow Stages */}
            <Link to="/help/workflow" className="help-card">
              <div className="help-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="help-card-divider"></div>
              <h3 className="help-card-title">Workflow Stages</h3>
              <p className="help-card-desc">Define steps, owners, and statuses to keep applications moving with clear handoffs.</p>
            </Link>

            {/* Partner Routing */}
            <Link to="/help/routing" className="help-card">
              <div className="help-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="help-card-divider"></div>
              <h3 className="help-card-title">Partner Routing</h3>
              <p className="help-card-desc">Route applications to the right funding path using simple rules and transparent statuses.</p>
            </Link>

            {/* Roles & Permissions */}
            <Link to="/help/roles" className="help-card">
              <div className="help-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="help-card-divider"></div>
              <h3 className="help-card-title">Roles & Permissions</h3>
              <p className="help-card-desc">Control who can view, edit, and approve built for sensitive lending workflows.</p>
            </Link>

            {/* AI Agents */}
            <Link to="/help/ai-agents" className="help-card">
              <div className="help-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="help-card-divider"></div>
              <h3 className="help-card-title">AI Agents</h3>
              <p className="help-card-desc">Configure smart follow-ups and document assistance without adding complexity.</p>
            </Link>

            {/* Webhooks & Events */}
            <Link to="/help/webhooks" className="help-card">
              <div className="help-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="help-card-divider"></div>
              <h3 className="help-card-title">Webhooks & Events</h3>
              <p className="help-card-desc">Send updates to your systems when application status or documents change.</p>
            </Link>

            {/* Troubleshooting */}
            <Link to="/help/troubleshooting" className="help-card">
              <div className="help-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="help-card-divider"></div>
              <h3 className="help-card-title">Troubleshooting</h3>
              <p className="help-card-desc">Fix common issues like upload errors, incomplete packs, and routing exceptions.</p>
            </Link>

            {/* Security & Data */}
            <Link to="/help/security" className="help-card">
              <div className="help-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="help-card-divider"></div>
              <h3 className="help-card-title">Security & Data</h3>
              <p className="help-card-desc">Learn how data is handled, how access is logged, and how to report issues.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
