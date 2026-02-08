import React from 'react';
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

      {/* Article Content */}
      <article className="blog-article-content">
        <h2>Intro</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <figure>
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=450&fit=crop" alt="Team meeting" />
          <figcaption>The early Stacked team mapping out workflows.</figcaption>
        </figure>

        <h2>The day we realized the problem wasn't underwriting</h2>
        <p>
          Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.
        </p>
        <p>
          Donec et ipsum et sapien vehicula nonummy. Suspendisse potenti. Fusce varius urna id quam. Sed neque mi, varius eget, tincidunt nec, suscipit id, libero. In eget purus.
        </p>
      </article>
    </div>
  );
};

export default BlogArticle;
