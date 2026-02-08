import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="privacy-hero-content">
          {/* Badge */}
          <div className="privacy-badge">
            <div className="privacy-badge-icon">
              <img src="/stacked-icon.png" alt="" />
            </div>
            <span className="privacy-badge-text">Privacy Policy</span>
          </div>

          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-subtitle">
            Stacked, Inc. ("Stacked," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <article className="privacy-content">
        <p className="privacy-updated">Last Updated: January 15, 2026</p>

        <h2>1. Information We Collect</h2>
        
        <h4>Information You Provide</h4>
        <p><strong>Account Information:</strong> Name, email address, phone number, and company details when you register</p>
        <p><strong>Business Information:</strong> Business name, EIN, address, revenue data, and other information submitted through applications</p>
        <p><strong>Financial Data:</strong> Bank statements, financial documents, and transaction data connected via Plaid or uploaded directly</p>
        <p><strong>Communications:</strong> Messages, support requests, and correspondence with our team</p>

        <h4>Information Collected Automatically</h4>
        <p><strong>Usage Data:</strong> Pages visited, features used, time spent, and interaction patterns</p>
        <p><strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers</p>
        <p><strong>Cookies:</strong> Session cookies for authentication and analytics cookies for service improvement</p>

        <h2>2. How We Use Your Information</h2>
        <p><strong>Service Delivery:</strong> Processing applications, connecting you with lenders, and facilitating funding</p>
        <p><strong>Platform Operations:</strong> Authentication, security monitoring, and system maintenance</p>
        <p><strong>Communications:</strong> Sending transaction updates, service announcements, and support responses</p>
        <p><strong>Analytics:</strong> Understanding usage patterns to improve our platform and services</p>
        <p><strong>Compliance:</strong> Meeting legal obligations, preventing fraud, and enforcing our terms</p>

        <h2>3. How We Share Your Information</h2>
        <p><strong>Lender Partners:</strong> Application data is shared with lenders in our network to facilitate funding decisions (with your consent)</p>
        <p><strong>Service Providers:</strong> Third-party vendors who assist with hosting, analytics, payment processing, and communications</p>
        <p><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights and safety</p>
        <p><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</p>

        <h2>4. Your Rights Under GDPR (European Users)</h2>
        <p>If you are located in the European Economic Area (EEA), you have the following rights under the General Data Protection Regulation (GDPR):</p>
        <p><strong>Right of Access:</strong> Request a copy of the personal data we hold about you</p>
        <p><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</p>
        <p><strong>Right to Erasure:</strong> Request deletion of your personal data ("right to be forgotten")</p>
        <p><strong>Right to Restrict Processing:</strong> Request limitation of how we use your data</p>
        <p><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</p>
        <p><strong>Right to Object:</strong> Object to processing based on legitimate interests or direct marketing</p>
        <p><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</p>
        <p><strong>Legal Basis for Processing:</strong> We process your data based on: (a) your consent, (b) contractual necessity, (c) legal obligations, or (d) our legitimate business interests.</p>
        <p>To exercise these rights, contact us at <a href="mailto:privacy@growstacked.com">privacy@growstacked.com</a>.</p>

        <h2>5. Your Rights Under CCPA (California Residents)</h2>
        <p>If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):</p>
        <p><strong>Right to Know:</strong> Request disclosure of the categories and specific pieces of personal information we've collected</p>
        <p><strong>Right to Delete:</strong> Request deletion of your personal information, subject to certain exceptions</p>
        <p><strong>Right to Opt-Out:</strong> Opt out of the "sale" of personal information (note: we do not sell personal information)</p>
        <p><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights</p>
        <p><strong>Categories of Information Collected:</strong> Identifiers, commercial information, financial information, internet activity, and professional information.</p>
        <p>To submit a request, contact us at <a href="mailto:privacy@growstacked.com">privacy@growstacked.com</a> or call us. We will verify your identity before processing your request.</p>

        <h2>6. Financial Data Handling (GLBA)</h2>
        <p>As a platform facilitating financial services, we comply with the Gramm-Leach-Bliley Act (GLBA) requirements:</p>
        <p><strong>Safeguards Rule:</strong> We maintain appropriate security measures to protect financial information</p>
        <p><strong>Limited Sharing:</strong> Financial information is shared only with lenders you've authorized to receive your application</p>
        <p><strong>Opt-Out Rights:</strong> You may opt out of certain information sharing by contacting us</p>

        <h2>7. Data Retention</h2>
        <p>We retain your information for:</p>
        <p><strong>Active Accounts:</strong> As long as your account remains active and for a reasonable period thereafter</p>
        <p><strong>Legal Requirements:</strong> As required by law (e.g., 7 years for tax-related records)</p>
        <p><strong>Dispute Resolution:</strong> As necessary to resolve disputes and enforce agreements</p>

        <h2>8. Data Security</h2>
        <p>We implement robust security measures including:</p>
        <ul>
          <li>AES-256 encryption for sensitive data at rest</li>
          <li>TLS 1.2+ encryption for all data in transit</li>
          <li>Role-based access controls and multi-tenant isolation</li>
          <li>Regular security audits and penetration testing</li>
          <li>SOC 2-aligned security practices</li>
        </ul>
        <p>For more details, see our <a href="/security">Security page</a>.</p>

        <h2>9. International Data Transfers</h2>
        <p>Your information may be transferred to and processed in the United States, where our servers are located. If you are located outside the United States, we ensure appropriate safeguards are in place, including Standard Contractual Clauses approved by the European Commission for transfers from the EEA.</p>

        <h2>10. Contact Us</h2>
        <p>For questions about this Privacy Policy or to exercise your rights:</p>
        <p><strong>Email:</strong> <a href="mailto:privacy@growstacked.com">privacy@growstacked.com</a></p>
        <p><strong>Mail:</strong> Stacked, Inc., Attn: Privacy Team</p>
        <p>We will respond to your request within 30 days (or sooner as required by applicable law).</p>

        <blockquote className="privacy-changes">
          <h4>Changes to This Policy</h4>
          <p>We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.</p>
        </blockquote>
      </article>
    </div>
  );
};

export default Privacy;
