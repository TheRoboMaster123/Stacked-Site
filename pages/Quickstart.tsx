import React from 'react';
import { Link } from 'react-router-dom';
import './Quickstart.css';

const Quickstart = () => {
  return (
    <div className="quickstart-page">
      <div className="quickstart-container">
        {/* Main Content */}
        <article className="quickstart-main">
          <h1 className="quickstart-title">Quickstart Guide</h1>
          <p className="quickstart-intro">
            Set up your workspace, create your first intake workflow, and publish a review-ready Application Pack.
          </p>

          <h2>What you'll set up</h2>
          <p>By the end of this guide, you will have:</p>
          <ul>
            <li>A Stacked workspace with your team invited</li>
            <li>One intake link (form + uploads)</li>
            <li>One Application Pack (requirements + validation)</li>
            <li>A basic workflow (stages + owners)</li>
            <li>An optional first integration connection</li>
          </ul>

          <h2>Before you begin</h2>
          <p>You'll need:</p>
          <ul>
            <li>Your company name and a workspace owner</li>
            <li>A simple list of required intake fields (basic borrower + business info)</li>
            <li>A list of required documents for one product/program (start with one)</li>
            <li>The names of internal reviewers (who owns which stage)</li>
          </ul>

          <h2>Step 1: Create your workspace</h2>
          <ol>
            <li>Sign in and create your Workspace</li>
            <li>Set your workspace name and default preferences</li>
            <li>Confirm your primary contact email for notifications</li>
          </ol>
          <p className="quickstart-tip">
            <strong>Tip:</strong> Use a workspace name your team recognizes (e.g., "Stacked – Lending Ops").
          </p>

          <h2>Step 2: Invite your team and set roles</h2>
          <p>Invite the core team first:</p>
          <ul>
            <li><strong>Admin:</strong> config + integrations + permissions</li>
            <li><strong>Ops:</strong> manages applications and workflows</li>
            <li><strong>Reviewer:</strong> reviews packs and adds decisions/notes</li>
            <li><strong>Partner user (optional):</strong> limited visibility for routing updates</li>
          </ul>
          <p className="quickstart-best-practice">
            <strong>Best practice:</strong> Start with fewer admins. Add roles as your workflow becomes stable.
          </p>

          <h2>Common setup mistakes (and quick fixes)</h2>
          
          <p><strong>1) The pack never becomes "Complete"</strong></p>
          <p>Check required docs and file type rules.</p>

          <p><strong>2) Too many required fields</strong></p>
          <p>Shorten intake. Move "nice-to-have" questions to later stages.</p>

          <p><strong>3) Workflow stages feel unclear</strong></p>
          <p>Rename stages to reflect actions, not departments (e.g., "Ready for Review," not "Ops Team").</p>

          <p><strong>4) Partner routing feels premature</strong></p>
          <p>Start with internal review flow first. Add routing once packs are consistently complete.</p>

          {/* Video Embed */}
          <div className="quickstart-video">
            <img 
              src="https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&h=450&fit=crop" 
              alt="Video thumbnail"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
            />
            <div className="quickstart-video-overlay">
              <div className="quickstart-video-logo">
                <img src="/stacked-icon.png" alt="" />
                stacked
              </div>
              <div className="quickstart-video-play">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div className="quickstart-video-title">Intro to Stacked</div>
            </div>
          </div>

          <h2>Next steps</h2>
          <p>Choose one path:</p>
          
          <p><strong>Continue setup</strong></p>
          <ul>
            <li>Create a second Application Pack for another product/program</li>
            <li>Add routing rules for partner matching</li>
            <li>Invite partner users with limited permissions</li>
          </ul>

          <p><strong>Learn more</strong></p>
          <ul>
            <li>Document checks and validation</li>
            <li>Roles and permissions</li>
            <li>Integration rollout strategy</li>
            <li>Partner routing basics</li>
          </ul>

          {/* Navigation */}
          <nav className="quickstart-nav">
            <Link to="/help/document-checks" className="quickstart-nav-prev">
              <div className="quickstart-nav-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="quickstart-nav-text">
                <span className="quickstart-nav-label">Previous</span>
                <span className="quickstart-nav-title">Document Checks</span>
              </div>
            </Link>
            <Link to="/help/application-pack" className="quickstart-nav-next">
              <div className="quickstart-nav-text">
                <span className="quickstart-nav-label">Next</span>
                <span className="quickstart-nav-title">Build an Application Pack</span>
              </div>
              <div className="quickstart-nav-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          </nav>
        </article>

        {/* Sidebar */}
        <aside className="quickstart-sidebar">
          <nav className="quickstart-toc">
            <a href="#" className="quickstart-toc-item active">What you'll set up</a>
            <a href="#" className="quickstart-toc-item">Before you begin</a>
            <a href="#" className="quickstart-toc-item">Create your workspace</a>
            <a href="#" className="quickstart-toc-item">Invite your team and set roles</a>
            <a href="#" className="quickstart-toc-item">Common setup mistakes (and quick fixes)</a>
            <a href="#" className="quickstart-toc-item">Next steps</a>
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default Quickstart;
