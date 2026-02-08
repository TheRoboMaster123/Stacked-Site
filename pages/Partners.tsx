import React from 'react';
import './Partners.css';

const Partners = () => {
  return (
    <div className="partners-page">
      {/* Hero Section */}
      <section className="partners-hero">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="partners-badge">
            <img src="/stacked-icon.png" alt="" className="w-8 h-8" />
            <span className="partners-badge-text">Collaborate. Promote. Earn together.</span>
          </div>

          {/* Title */}
          <h1 className="partners-title">
            Turn Your Communities Into<br />
            <span className="partners-title-muted">Funded Business Owners.</span>
          </h1>

          {/* Subtitle */}
          <p className="partners-subtitle">
            Without selling. Without lenders. Without operations. Stacked lets you launch your own branded business-financing portal. Powered by institutional-grade lending infrastructure. You bring the audience. We handle everything else.
          </p>

          {/* Buttons */}
          <div className="partners-buttons">
            <a href="/contact" className="partners-cta-button">
              <span>Become A Partner</span>
              <div className="partners-cta-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1A332B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
            <a href="#how-it-works" className="partners-link">
              See How It Works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="partners-trust-banner">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="trust-items">
            <div className="trust-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
              </svg>
              <span>Built for business-purpose financing only</span>
            </div>
            <div className="trust-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/>
              </svg>
              <span>Trusted by lenders & enterprise partners</span>
            </div>
            <div className="trust-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>No consumer debt. No payday. No gimmicks.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Section */}
      <section className="partners-affiliate-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="affiliate-badge">
            <img src="/stacked-icon.png" alt="" className="w-8 h-8" />
            <span className="affiliate-badge-text">Grow Together</span>
          </div>

          {/* Title */}
          <h2 className="affiliate-title">
            <span className="muted">This isn't Affiliate Marketing.</span><br />
            <span className="muted">It's A New </span>
            <span className="highlight">Lending Economy, Built Together.</span>
          </h2>

          {/* Subtitle */}
          <p className="affiliate-subtitle">
            Most affiliate programs ask you to promote their product. Stacked is different.
          </p>
        </div>

        {/* White Card */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="affiliate-card">
            <div className="affiliate-card-content">
              {/* We give you */}
              <div className="affiliate-column">
                <h3>We give you:</h3>
                <ul className="check-list">
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A332B" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Your own branded application
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A332B" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Your own tracking
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A332B" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Your own audience experience
                  </li>
                </ul>
              </div>

              {/* Behind the scenes */}
              <div className="affiliate-column">
                <h3>Behind the scenes, Stacked runs:</h3>
                <ul className="icon-list">
                  <li>
                    <span className="list-icon">⚙️</span>
                    The application
                  </li>
                  <li>
                    <span className="list-icon">📋</span>
                    The qualification logic
                  </li>
                  <li>
                    <span className="list-icon">🔀</span>
                    The lender routing
                  </li>
                  <li>
                    <span className="list-icon">⚡</span>
                    The deal execution
                  </li>
                  <li>
                    <span className="list-icon">💰</span>
                    The payout tracking
                  </li>
                </ul>
              </div>

              {/* Image */}
              <div className="affiliate-image">
                <img src="/This isnt affiliate.png" alt="Affiliate Network" />
              </div>
            </div>

            {/* Bottom text */}
            <p className="affiliate-bottom-text">
              You never sell loans. You never talk to lenders. You never touch operations.<br />
              You simply connect your audience to capital — correctly.
            </p>
          </div>
        </div>
      </section>

      {/* Built for Partners Section */}
      <section className="partners-built-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="built-badge">
            <img src="/stacked-icon.png" alt="" className="w-8 h-8" />
            <span className="built-badge-text">How It Works</span>
          </div>

          {/* Title */}
          <h2 className="built-title">Built for Partners, Designed for Growth.</h2>

          {/* Subtitle */}
          <p className="built-subtitle">
            A seamless flow from lead to loan. Transparent, automated, and built around your success.
          </p>

          {/* Cards Grid */}
          <div className="built-cards">
            <div className="built-card">
              <div className="built-card-image">
                <img src="/built for partners/You get a link.png" alt="You get a link" />
              </div>
              <h3>You get a link</h3>
              <p>A branded financing portal under your name.</p>
            </div>

            <div className="built-card">
              <div className="built-card-image">
                <img src="/built for partners/Your audience applies.png" alt="Your audience applies" />
              </div>
              <h3>Your audience applies</h3>
              <p>Business owners apply directly. mobile-friendly, guided, compliant.</p>
            </div>

            <div className="built-card">
              <div className="built-card-image">
                <img src="/built for partners/Stacked handles it all.png" alt="Stacked handles it all" />
              </div>
              <h3>Stacked handles it all</h3>
              <p>AI qualification, bank analysis, lender matching, submissions, offers.</p>
            </div>

            <div className="built-card">
              <div className="built-card-image">
                <img src="/built for partners/You earn on funded deals.png" alt="You earn on funded deals" />
              </div>
              <h3>You earn on funded deals</h3>
              <p>You get paid when deals fund, with full transparency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Become A Partner Section */}
      <section className="partners-why-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="why-partner-badge">
            <img src="/stacked-icon.png" alt="" className="w-8 h-8" />
            <span className="why-partner-badge-text">Why Become A Partner?</span>
          </div>

          {/* Title */}
          <h2 className="why-partner-title">
            Why This Earns More Than<br />Traditional Programs
          </h2>

          {/* Subtitle */}
          <p className="why-partner-subtitle">
            One funded deal can outperform months of consumer-finance referrals.
          </p>

          {/* Content Grid */}
          <div className="why-partner-grid">
            {/* Left - 2x2 Cards */}
            <div className="why-partner-cards">
              <div className="why-partner-card">
                <div className="why-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A332B" strokeWidth="1.5">
                    <path d="M21 5H3M21 12H3M21 19H3"/>
                    <circle cx="17" cy="5" r="2"/>
                    <circle cx="7" cy="12" r="2"/>
                    <circle cx="17" cy="19" r="2"/>
                  </svg>
                </div>
                <h3>Earn on Funded Deals</h3>
                <p>You're not earning on clicks, you earn on funded SMB deals.</p>
              </div>

              <div className="why-partner-card">
                <div className="why-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A332B" strokeWidth="1.5">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                    <polyline points="17 6 23 6 23 12"/>
                  </svg>
                </div>
                <h3>Bigger Deals, Bigger Pay</h3>
                <p>Business financing deals are larger than consumer products.</p>
              </div>

              <div className="why-partner-card">
                <div className="why-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A332B" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <h3>Results-Based Rewards</h3>
                <p>Payouts are tied to outcomes, not traffic volume.</p>
              </div>

              <div className="why-partner-card">
                <div className="why-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A332B" strokeWidth="1.5">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </div>
                <h3>Long-Term Earnings</h3>
                <p>One piece of content can generate revenue for years.</p>
              </div>
            </div>

            {/* Right - Earnings Chart */}
            <div className="why-partner-chart">
              <img src="/Earnings overview.png" alt="Earnings Overview" />
            </div>
          </div>
        </div>
      </section>

      {/* Estimate Payouts Section */}
      <section className="partners-payouts-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="payouts-header">
            {/* Badge */}
            <div className="payouts-badge">
              <img src="/stacked-icon.png" alt="" className="w-8 h-8" />
              <span className="payouts-badge-text">Potential Earnings</span>
            </div>

            {/* Title */}
            <h2 className="payouts-title">Estimate Your Payouts</h2>

            {/* Subtitle */}
            <p className="payouts-subtitle">What Origination Partners earn on funded business deals</p>
          </div>

          {/* Content Grid */}
          <div className="payouts-grid">
            {/* Left - Text */}
            <div className="payouts-text">
              <p className="payouts-paragraph">
                Origination Partners earn <strong>a percentage of funded business deals.</strong><br />
                Not clicks, not traffic.
              </p>
              <p className="payouts-paragraph">
                Typical partner earnings range from <strong>0.5% to 1.0% of funded amounts,</strong><br />
                depending on volume and partnership tier.
              </p>
            </div>

            {/* Right - Table */}
            <div className="payouts-table-wrapper">
              <table className="payouts-table">
                <thead>
                  <tr>
                    <th>Funded Deal Amount</th>
                    <th>0.5% Earnings</th>
                    <th>1.0% Earnings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>$50,000</td>
                    <td>$250</td>
                    <td>$500</td>
                  </tr>
                  <tr>
                    <td>$100,000</td>
                    <td>$500</td>
                    <td>$1,000</td>
                  </tr>
                  <tr>
                    <td>$500,000</td>
                    <td>$2,500</td>
                    <td>$5,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="payouts-disclaimer">
            Examples only. Earnings depend on approvals and funding.<br />
            Business-purpose financing only.
          </p>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="partners-who-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="who-header">
            {/* Badge */}
            <div className="who-badge">
              <img src="/stacked-icon.png" alt="" className="w-8 h-8" />
              <span className="who-badge-text">Who It's For</span>
            </div>

            {/* Title */}
            <h2 className="who-title">Built for Partners Who Add Real Value</h2>

            {/* Subtitle */}
            <p className="who-subtitle">
              From creators to advisors to communities, turn your influence and trust into lasting revenue.
            </p>
          </div>

          {/* Cards */}
          <div className="who-cards">
            {/* Creators */}
            <div className="who-card">
              <h3>Creators</h3>
              <ul>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A332B" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Monetize evergreen content
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A332B" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Simple CTAs
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A332B" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  No selling, no courses
                </li>
              </ul>
              <div className="who-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1A332B" strokeWidth="1.5">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
            </div>

            {/* CPAs & Advisors */}
            <div className="who-card">
              <h3>CPAs & Advisors</h3>
              <ul>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A332B" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Help clients access capital
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A332B" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Stay advisory-first
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A332B" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Earn on outcomes
                </li>
              </ul>
              <div className="who-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1A332B" strokeWidth="1.5">
                  <path d="M7 11L12 6L17 11M7 17L12 12L17 17"/>
                </svg>
              </div>
            </div>

            {/* Communities */}
            <div className="who-card">
              <h3>Communities</h3>
              <ul>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A332B" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  One trusted resource
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A332B" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Scales without admin work
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A332B" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Clear value to members
                </li>
              </ul>
              <div className="who-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1A332B" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="partners-cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="partners-cta-badge">
            <img src="/stacked-icon.png" alt="" className="w-8 h-8" />
            <span className="partners-cta-badge-text">Partner with Stacked</span>
          </div>

          {/* Title */}
          <h2 className="partners-cta-title">
            Ready to Turn Your Audience<br />Into Revenue?
          </h2>

          {/* Subtitle */}
          <p className="partners-cta-subtitle">
            Join partners who are earning on funded business deals, not clicks.
          </p>

          {/* Buttons */}
          <div className="partners-cta-buttons">
            <a href="/contact" className="partners-cta-btn">
              <span>Become A Partner</span>
              <div className="partners-cta-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#D4FF73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
            <a href="#how-it-works" className="partners-cta-link">
              See How It Works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
