import React from 'react';
import './FAQ.css';

const FaqItem = ({ question, answer, defaultOpen = false }: { question: string, answer: string, defaultOpen?: boolean }) => (
  <details className="faq-item" open={defaultOpen}>
    <summary>
      <span className="faq-item-question">{question}</span>
      <span className="faq-item-icon">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </summary>
    <div className="faq-item-answer">
      <p>{answer}</p>
    </div>
  </details>
);

const FAQ = () => {
  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="faq-hero-content">
          {/* Badge */}
          <div className="faq-badge">
            <div className="faq-badge-icon">
              <img src="/stacked-icon.png" alt="" />
            </div>
            <span className="faq-badge-text">Help Center</span>
          </div>

          <h1 className="faq-title">Frequently Asked Questions</h1>
          <p className="faq-subtitle">
            Find answers to common questions about Stacked, our<br />
            platform, pricing, and how to get started.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-content">
        <div className="faq-layout">
          {/* Sidebar */}
          <aside className="faq-sidebar">
            <nav>
              <a href="#about" className="active">About Stacked</a>
              <a href="#getting-started">Getting Started</a>
              <a href="#platform">Platform & Features</a>
              <a href="#pricing">Pricing & Billing</a>
              <a href="#security">Security & Compliance</a>
              <a href="#partners">For Partners & Affiliates</a>
            </nav>
          </aside>

          {/* FAQ Items */}
          <div className="faq-main">
            {/* About Stacked */}
            <h2 id="about" className="faq-section-title">About Stacked</h2>
            
            <FaqItem 
              question="What is Stacked?" 
              answer="Stacked provides modern infrastructure and a partner network for lending originations. We help lenders, brokers, and partners work together on a shared workflow to fund businesses more efficiently."
            />
            
            <FaqItem 
              question="Is Stacked a lender?" 
              answer="No, Stacked is not a lender. We provide the infrastructure and partner network that routes applicants to funding sources. All lending decisions are made by our lender partners. We facilitate the connection but do not make credit decisions or fund loans directly."
              defaultOpen={true}
            />

            <FaqItem 
              question="What types of financing does Stacked support?" 
              answer="Stacked supports a wide range of business financing products including term loans, lines of credit, equipment financing, invoice factoring, SBA loans, and merchant cash advances."
            />

            <FaqItem 
              question="Who uses Stacked?" 
              answer="Stacked is used by lenders, brokers, ISOs, and affiliates who want to streamline their lending operations with modern infrastructure and workflow automation."
            />

            {/* Getting Started */}
            <h2 id="getting-started" className="faq-section-title">Getting Started</h2>

            <FaqItem 
              question="How do I get started with Stacked?" 
              answer="Getting started is easy. Schedule a demo with our team, and we'll walk you through the platform and help you set up your account based on your specific needs."
            />

            <FaqItem 
              question="Is there a free trial?" 
              answer="Yes, we offer a free trial period so you can explore the platform and see how it fits your workflow before committing."
            />

            <FaqItem 
              question="How long does implementation take?" 
              answer="Most teams are up and running within 1-2 weeks. Our onboarding team provides hands-on support to ensure a smooth transition."
            />

            <FaqItem 
              question="Do I need technical expertise to use Stacked?" 
              answer="No technical expertise required. Stacked is designed to be intuitive and user-friendly. We also provide training and ongoing support."
            />

            {/* Platform & Features */}
            <h2 id="platform" className="faq-section-title">Platform & Features</h2>

            <FaqItem 
              question="What are Packs?" 
              answer="Packs are modular feature bundles that let you customize Stacked for your specific needs. Each Pack focuses on a key area like intake, documents, automation, or partner routing."
            />

            <FaqItem 
              question="What is Stacked Core?" 
              answer="Stacked Core is the foundation of our platform, providing essential infrastructure for application intake, document management, and workflow orchestration."
            />

            <FaqItem 
              question="What integrations are available?" 
              answer="Stacked integrates with popular CRMs, accounting software, document storage providers, and communication tools. We also offer API access for custom integrations."
            />

            <FaqItem 
              question="Can I white-label the platform?" 
              answer="Yes, Stacked offers white-label options so you can present a branded experience to your clients and partners."
            />

            <FaqItem 
              question="Does Stacked handle document collection and analysis?" 
              answer="Yes, Stacked includes AI-powered document collection, validation, and analysis to streamline the underwriting process and reduce manual work."
            />

            {/* Pricing & Billing */}
            <h2 id="pricing" className="faq-section-title">Pricing & Billing</h2>

            <FaqItem 
              question="How is Stacked priced?" 
              answer="Stacked offers flexible pricing based on your usage and the features you need. Contact our sales team for a customized quote."
            />

            <FaqItem 
              question="Are there long-term contracts?" 
              answer="We offer both monthly and annual plans. Annual plans come with a discount. There are no long-term commitments required to get started."
            />

            <FaqItem 
              question="What payment methods do you accept?" 
              answer="We accept all major credit cards, ACH transfers, and wire transfers for enterprise accounts."
            />

            <FaqItem 
              question="Can I change my plan later?" 
              answer="Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
            />

            {/* Security & Compliance */}
            <h2 id="security" className="faq-section-title">Security & Compliance</h2>

            <FaqItem 
              question="Is my data secure?" 
              answer="Yes, we use industry-standard encryption for data at rest and in transit. Our infrastructure is hosted on secure cloud providers with multiple layers of protection."
            />

            <FaqItem 
              question="Is Stacked SOC 2 certified?" 
              answer="Yes, Stacked is SOC 2 Type II certified, demonstrating our commitment to security, availability, and confidentiality."
            />

            <FaqItem 
              question="How do you handle sensitive financial data?" 
              answer="We follow strict data handling protocols and comply with financial industry regulations. Access to sensitive data is role-based and fully audited."
            />

            <FaqItem 
              question="Do you support GDPR and CCPA?" 
              answer="Yes, Stacked is fully compliant with GDPR and CCPA requirements, giving you and your customers control over personal data."
            />

            {/* For Partners & Affiliates */}
            <h2 id="partners" className="faq-section-title">For Partners & Affiliates</h2>

            <FaqItem 
              question="How does the partner program work?" 
              answer="Our partner program lets you earn commissions by referring businesses to our network. You get access to tracking tools, marketing resources, and dedicated support."
            />

            <FaqItem 
              question="How are commissions calculated and paid?" 
              answer="Commissions are calculated based on funded deal volume. Payments are made monthly via your preferred payment method once you reach the minimum threshold."
            />

            <FaqItem 
              question="What support do partners receive?" 
              answer="Partners receive dedicated account management, training resources, co-marketing opportunities, and priority technical support."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="faq-cta">
        <div className="faq-cta-content">
          {/* Badge */}
          <div className="faq-cta-badge">
            <div className="faq-cta-badge-icon">
              <img src="/stacked-icon.png" alt="" />
            </div>
            <span className="faq-cta-badge-text">Contact</span>
          </div>

          <h2 className="faq-cta-title">Still Have Questions?</h2>
          <p className="faq-cta-subtitle">
            Our team is here to help. Book a demo to get personalized<br />
            answers or contact our support team.
          </p>

          <div className="faq-cta-buttons">
            <a href="#" className="faq-cta-btn-primary">
              <span>Book a Demo</span>
              <div className="faq-cta-btn-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
            <a href="#" className="faq-cta-btn-secondary">
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
