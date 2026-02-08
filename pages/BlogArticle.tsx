import React from 'react';
import { Link } from 'react-router-dom';
import './BlogArticle.css';

const BlogArticle = () => {
  return (
    <div className="blog-article-page">
      {/* Hero Section */}
      <section className="blog-article-hero">
        <div className="blog-article-hero-content">
          <div className="blog-article-hero-text">
            {/* Badge */}
            <div className="blog-article-badge">
              <div className="blog-article-badge-icon">
                <img src="/stacked-icon.png" alt="" />
              </div>
              <span className="blog-article-badge-text">Blogs</span>
            </div>

            <h1 className="blog-article-title">
              From Chaos to Clarity: The Story Behind Stacked
            </h1>

            <p className="blog-article-excerpt">
              We didn't set out to "build a platform." We set out to stop wasting time on the same manual work missing docs, scattered tools, and slow handoffs.
            </p>

            <hr className="blog-article-divider" />

            <div className="blog-article-meta">
              <div className="blog-article-author">
                <div className="blog-article-author-icon">
                  <img src="/stacked-icon.png" alt="" />
                </div>
                <span>Stacked Team</span>
              </div>
              <span>Mar 12, 2026 • 6 min read</span>
            </div>
          </div>

          {/* Diagram */}
          <div className="blog-article-diagram">
            <img src="/blog-diagram.png" alt="Stacked workflow diagram" />
          </div>
        </div>
      </section>

      {/* Article Content Section */}
      <section className="blog-article-body">
        <div className="blog-article-body-container">
          {/* Main Content */}
          <article className="blog-article-main">
            <h2>Intro</h2>
            <p>
              Stacked was founded by <strong>Nathan Hamilton</strong>, <strong>Joe Downie</strong>, and <strong>Brian Kim</strong>.<br />
              Most lending teams aren't short on effort. They're short on clean inputs.
            </p>
            <p>
              Applications arrive incomplete. Documents are scattered. Teams chase the same items repeatedly. Reviews start late, handoffs break, and scaling means adding more people to manage the mess.
            </p>
            <p>
              Stacked started with one question: what would lending operations look like if intake and document work were consistently clean?<br />
              and FinTech.
            </p>
            <p>
              Stacked started with one question: what would lending operations look like if intake and document work were consistently clean?
            </p>

            <h2>The day we realized the problem wasn't underwriting</h2>
            <p>
              The first signal was simple: deals weren't dying because teams couldn't make decisions. Deals were dying because teams couldn't get to a decision.
            </p>
            <p>The work happened before underwriting even began:</p>
            <ul>
              <li>requesting documents again and again</li>
              <li>checking whether files match requirements</li>
              <li>copying details between tools</li>
              <li>updating partners through email threads</li>
              <li>rebuilding the same "application pack" every time</li>
            </ul>
            <p>The process wasn't broken in one place it was broken everywhere.</p>

            <blockquote>
              "Every lending team we met had the same challenge," the founders recall. "Not a lack of effort just a lack of clean inputs. When applications arrive incomplete and documents live across too many tools, the work doesn't move forward. It circulates. We built Stacked to replace that loop with a clear flow from intake to decision."
            </blockquote>

            <h2>The real cost of disconnected tools</h2>
            <p>
              Most teams had a "stack," but it didn't behave like a system. It behaved like a set of tabs.
            </p>
            <p>
              A form tool here. A file folder there. A CRM. A spreadsheet. A shared inbox. Each tool did its part, but nobody owned the full flow. That created predictable pain:
            </p>
            <ul>
              <li>duplicate data entry</li>
              <li>unclear "complete vs incomplete"</li>
              <li>slow starts to review</li>
              <li>handoffs that depended on memory</li>
              <li>no consistent follow up method</li>
            </ul>
            <p>The result: good teams spending time on work that shouldn't exist.</p>

            <h2>What we built first: a cleaner way to collect and package a deal</h2>
            <p>Stacked didn't begin as "AI." It began as structure.</p>
            <p>We focused on two basics:</p>
            <ol>
              <li>Intake that collects the right info the first time</li>
              <li>A consistent application pack that makes review predictable</li>
            </ol>

            <figure>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop" alt="Team collaboration" />
            </figure>

            <p>That meant:</p>
            <ul>
              <li>clear requirements</li>
              <li>fewer optional fields</li>
              <li>the right documents requested upfront</li>
              <li>a repeatable format for packaging a file</li>
            </ul>
            <p>Once intake and packaging improved, something else happened: the rest of the process got easier.</p>

            <h2>A simple timeline of how it came together</h2>
            <p><strong>Phase 1:</strong> Fix intake and document collection</p>
            <p><strong>Phase 2:</strong> Standardize application packs</p>
            <p><strong>Phase 3:</strong> Improve handoffs and workflow visibility</p>
            <p><strong>Phase 4:</strong> Add integrations to fit existing systems</p>
            <p><strong>Phase 5:</strong> Use AI to reduce manual checks and follow-ups</p>
            <p><strong>Phase 6:</strong> Expand routing across partner ecosystems</p>

            <blockquote>
              "We didn't start by trying to reinvent underwriting," the team explains. "We started by fixing what happens before it collecting the right information, validating documents early, and reducing the back and forth that slows everything down. Once intake is consistent, the rest of the workflow stops feeling like a fire drill."
            </blockquote>

            {/* Previous/Next Navigation */}
            <nav className="blog-article-nav">
              <Link to="/blog" className="blog-nav-prev">
                <div className="blog-nav-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="blog-nav-text">
                  <span className="blog-nav-label">Previous</span>
                  <span className="blog-nav-title">The Intake Bottleneck</span>
                </div>
              </Link>
              <Link to="/blog" className="blog-nav-next">
                <div className="blog-nav-text">
                  <span className="blog-nav-label">Next</span>
                  <span className="blog-nav-title">The Intake Bottleneck</span>
                </div>
                <div className="blog-nav-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </nav>
          </article>

          {/* Sidebar */}
          <aside className="blog-article-sidebar">
            {/* Table of Contents */}
            <div className="blog-toc">
              <a href="#" className="blog-toc-item active">Intro</a>
              <a href="#" className="blog-toc-item">The day we realized the problem wasn't underwriting</a>
              <a href="#" className="blog-toc-item">The real cost of disconnected tools</a>
              <a href="#" className="blog-toc-item">What we built first: a cleaner way to collect and package a deal</a>
              <a href="#" className="blog-toc-item">A simple timeline of how it came together</a>
            </div>

            {/* CTA Card */}
            <div className="blog-cta-card">
              <h3>See Stacked in action</h3>
              <p>Walk through intake, documents, workflow, and partner routing based on your current process.</p>
              <a href="#" className="blog-cta-btn">
                <span>Schedule a Demo</span>
                <div className="blog-cta-btn-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            </div>

            {/* Share */}
            <div className="blog-share">
              <p>Share this article</p>
              <div className="blog-share-icons">
                <a href="#" className="blog-share-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="blog-share-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="blog-share-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Blogs Section */}
      <section className="blog-related">
        <div className="blog-related-container">
          {/* Badge */}
          <div className="blog-related-badge">
            <div className="blog-related-badge-icon">
              <img src="/stacked-icon.png" alt="" />
            </div>
            <span className="blog-related-badge-text">More Blogs</span>
          </div>

          <h2 className="blog-related-title">Read Related Blogs</h2>

          <div className="blog-related-grid">
            {/* Card 1 */}
            <Link to="/blog/article" className="blog-related-card">
              <div className="blog-related-card-image">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop" alt="Team meeting" />
              </div>
              <span className="blog-related-card-category">Lending Ops</span>
              <h3 className="blog-related-card-title">The Intake Bottleneck: Why "Missing Docs" Keeps Killing Deals</h3>
              <p className="blog-related-card-meta">Mar 12, 2026 • 6 min read</p>
              <hr className="blog-related-card-divider" />
              <div className="blog-related-card-author">
                <div className="blog-related-card-author-icon">
                  <img src="/stacked-icon.png" alt="" />
                </div>
                <span>Stacked Team</span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link to="/blog/article" className="blog-related-card">
              <div className="blog-related-card-image">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop" alt="Team collaboration" />
              </div>
              <span className="blog-related-card-category">Lending Ops</span>
              <h3 className="blog-related-card-title">A Cleaner Application Pack: What to Collect Upfront</h3>
              <p className="blog-related-card-meta">Mar 12, 2026 • 6 min read</p>
              <hr className="blog-related-card-divider" />
              <div className="blog-related-card-author">
                <div className="blog-related-card-author-icon">
                  <img src="/stacked-icon.png" alt="" />
                </div>
                <span>Stacked Team</span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link to="/blog/article" className="blog-related-card">
              <div className="blog-related-card-image">
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop" alt="Business meeting" />
              </div>
              <span className="blog-related-card-category">Lending Ops</span>
              <h3 className="blog-related-card-title">Review Time Isn't the Problem Queue Time Is</h3>
              <p className="blog-related-card-meta">Nov 16, 2025 • 6 min read</p>
              <hr className="blog-related-card-divider" />
              <div className="blog-related-card-author">
                <div className="blog-related-card-author-icon">
                  <img src="/stacked-icon.png" alt="" />
                </div>
                <span>Stacked Team</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogArticle;
