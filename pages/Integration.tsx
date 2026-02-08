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

          {/* Integration Diagram */}
          <div className="integration-diagram">
            <img src="/Elements.png" alt="Integration Elements" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Integration Cards Section */}
      <section className="integration-cards-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Salesforce', desc: 'Sync leads and customer data seamlessly.' },
              { name: 'AWS', desc: 'Cloud infrastructure and storage solutions.' },
              { name: 'Stripe', desc: 'Payment processing and financial tools.' },
              { name: 'Slack', desc: 'Team notifications and workflow alerts.' },
              { name: 'Meta', desc: 'Social integrations and advertising.' },
              { name: 'Zapier', desc: 'Connect with thousands of apps.' },
            ].map((integration, i) => (
              <div key={i} className="integration-card">
                <div className="h-10 mb-4 flex items-center">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{integration.name}</h3>
                <p className="mt-2 text-gray-600">{integration.desc}</p>
              </div>
            ))}
          </div>

          {/* Custom Integration CTA */}
          <div className="text-center mt-20">
            <h2 className="text-4xl font-semibold tracking-tight text-[#1A332B]">Need a Custom Integration?</h2>
            <p className="mt-4 text-lg text-gray-600">Our platform is extensible. Work with our team to connect any system.</p>
            <div className="mt-8 flex justify-center items-center gap-6">
              <a href="#" className="bg-[#1A332B] text-white font-medium py-3 px-6 rounded-full hover:bg-black/80 transition-all duration-300">
                Contact Sales
              </a>
              <a href="#" className="text-gray-700 font-medium hover:text-black">
                View API Docs →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integration;
