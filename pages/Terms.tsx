import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="terms-hero-content">
          {/* Badge */}
          <div className="terms-badge">
            <div className="terms-badge-icon">
              <img src="/stacked-icon.png" alt="" />
            </div>
            <span className="terms-badge-text">Terms of Service</span>
          </div>

          <h1 className="terms-title">Terms of Service</h1>
          <p className="terms-subtitle">
            These Terms of Service ("Terms") govern your access to and use of Stacked, Inc.'s ("Stacked," "we," "us," or "our") platform, website, and services. By accessing or using our services, you agree to be bound by these Terms.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <article className="terms-content">
        <p className="terms-updated">Last Updated: January 15, 2026</p>

        {/* Important Notice */}
        <div className="terms-notice">
          <div className="terms-notice-icon">⚠</div>
          <div className="terms-notice-content">
            <h4>Important Notice</h4>
            <p><strong>Stacked is not a lender.</strong> We provide technology infrastructure and a partner network that connects businesses with funding sources. All lending decisions are made by our lender partners. Our platform is for <strong>business-purpose financing only</strong>.</p>
          </div>
        </div>

        <h2>1. Acceptance of Terms</h2>
        <p>By creating an account or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our <a href="/privacy">Privacy Policy</a>.</p>
        <p>If you are using our services on behalf of a business or organization, you represent that you have authority to bind that entity to these Terms, and "you" refers to both you individually and that entity.</p>

        <h2>2. Description of Services</h2>
        <p>Stacked provides:</p>
        <p><strong>Application Infrastructure:</strong> Tools for collecting, validating, and processing business funding applications</p>
        <p><strong>Document Analysis:</strong> AI-powered analysis of financial documents and bank statements</p>
        <p><strong>Routing & Matching:</strong> Technology to connect applicants with appropriate lender partners</p>
        <p><strong>Partner Tools:</strong> Portals and analytics for brokers, affiliates, and referral partners</p>
        <p><strong>Integration Services:</strong> APIs and connectors to third-party services</p>
        <p>We reserve the right to modify, suspend, or discontinue any part of our services at any time with reasonable notice.</p>

        <h2>3. Account Responsibilities</h2>
        <h4>Registration</h4>
        <p>You must provide accurate, complete, and current information when creating an account. You are responsible for maintaining the confidentiality of your account credentials.</p>
        
        <h4>Eligibility</h4>
        <ul>
          <li>You must be at least 18 years old</li>
          <li>You must have authority to enter into binding contracts</li>
          <li>You must not be prohibited from using our services under applicable law</li>
          <li>For business accounts, the business must be validly organized and in good standing</li>
        </ul>

        <h4>Account Security</h4>
        <p>You are responsible for all activities that occur under your account. Notify us immediately at <a href="mailto:security@growstacked.com">security@growstacked.com</a> if you suspect unauthorized access.</p>

        <h2>4. Prohibited Uses</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Submit false, misleading, or fraudulent information</li>
          <li>Use the platform for consumer (personal, family, household) financing purposes</li>
          <li>Violate any applicable laws, regulations, or third-party rights</li>
          <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
          <li>Interfere with or disrupt the integrity or performance of our services</li>
          <li>Reverse engineer, decompile, or attempt to extract source code</li>
          <li>Use automated systems (bots, scrapers) without our written permission</li>
          <li>Resell, redistribute, or sublicense our services without authorization</li>
        </ul>

        <h2>5. Fees and Payment</h2>
        <h4>Subscription Fees</h4>
        <p>Some features require a paid subscription. Fees are billed in advance on a monthly or annual basis. Current pricing is available at <a href="/pricing">stacked.com/pricing</a>.</p>

        <h4>Usage-Based Fees</h4>
        <p>Certain services (e.g., per-application fees, API calls) are billed based on usage. Usage fees are billed monthly in arrears.</p>

        <h4>Payment Terms</h4>
        <ul>
          <li>All fees are non-refundable unless otherwise stated</li>
          <li>We may change pricing with 30 days' notice</li>
          <li>Overdue amounts may incur late fees and interest</li>
          <li>We reserve the right to suspend access for non-payment</li>
        </ul>

        <h2>6. Intellectual Property</h2>
        <h4>Our Property</h4>
        <p>The Stacked platform, including all software, content, trademarks, and intellectual property, is owned by Stacked, Inc. You receive a limited, non-exclusive, non-transferable license to use our services in accordance with these Terms.</p>

        <h4>Your Content</h4>
        <p>You retain ownership of data and content you submit. By using our services, you grant us a license to process, store, and transmit your content as necessary to provide our services and as described in our Privacy Policy.</p>

        <h2>7. Disclaimers</h2>
        <p className="terms-disclaimer"><strong>AS-IS BASIS:</strong> OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
        <p className="terms-disclaimer"><strong>NO LENDING GUARANTEES:</strong> WE DO NOT GUARANTEE THAT YOU WILL RECEIVE FUNDING OR BE APPROVED BY ANY LENDER. FUNDING DECISIONS ARE MADE SOLELY BY OUR LENDER PARTNERS.</p>
        <p className="terms-disclaimer"><strong>THIRD-PARTY SERVICES:</strong> WE ARE NOT RESPONSIBLE FOR THIRD-PARTY SERVICES, INCLUDING LENDER PARTNERS, PAYMENT PROCESSORS, OR INTEGRATION PROVIDERS.</p>

        <h2>8. Limitation of Liability</h2>
        <p className="terms-disclaimer">TO THE MAXIMUM EXTENT PERMITTED BY LAW, STACKED SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES.</p>
        <p className="terms-disclaimer">OUR TOTAL LIABILITY FOR ALL CLAIMS ARISING FROM YOUR USE OF OUR SERVICES SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US IN THE 12 MONTHS PRIOR TO THE CLAIM, OR (B) $100.</p>

        <h2>9. Indemnification</h2>
        <p>You agree to indemnify and hold harmless Stacked and its officers, directors, employees, and agents from any claims, damages, losses, and expenses (including reasonable attorneys' fees) arising from: (a) your use of our services, (b) your violation of these Terms, (c) your violation of any third-party rights, or (d) any content you submit through our platform.</p>

        <h2>10. Termination</h2>
        <p><strong>By You:</strong> You may terminate your account at any time by contacting us. Termination does not relieve you of obligations incurred prior to termination.</p>
        <p><strong>By Us:</strong> We may suspend or terminate your access immediately if you violate these Terms, engage in fraudulent activity, or for any other reason with reasonable notice.</p>
        <p><strong>Effect of Termination:</strong> Upon termination, your right to use our services ceases immediately. Sections 6-11 survive termination.</p>

        <h2>11. Dispute Resolution</h2>
        <h4>Governing Law</h4>
        <p>These Terms are governed by the laws of the State of Delaware, without regard to conflict of law principles.</p>

        <h4>Arbitration</h4>
        <p>Any disputes arising from these Terms shall be resolved through binding arbitration in accordance with the American Arbitration Association rules. The arbitration shall take place in Delaware.</p>

        <h4>Class Action Waiver</h4>
        <p>You agree to resolve disputes on an individual basis and waive any right to participate in class action lawsuits or class-wide arbitration.</p>

        <h2>12. Contact Us</h2>
        <p>For questions about these Terms:</p>
        <p><strong>Email:</strong> <a href="mailto:privacy@growstacked.com">privacy@growstacked.com</a></p>
        <p><strong>Mail:</strong> Stacked, Inc., Attn: Privacy Team</p>

        <blockquote className="terms-changes">
          <h4>Changes to These Terms</h4>
          <p>We may update these Terms from time to time. We will notify you of material changes by posting the updated Terms on this page and, where appropriate, by email. Your continued use of our services after changes constitutes acceptance of the updated Terms.</p>
        </blockquote>
      </article>
    </div>
  );
};

export default Terms;
