import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    category: 'Lending Ops',
    title: 'The Intake Bottleneck: Why "Missing Docs" Keeps Killing Deals',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop',
    date: 'Mar 12, 2026',
    readTime: '6 min read'
  },
  {
    id: 2,
    category: 'Lending Ops',
    title: 'From Chaos to Clarity: The Story Behind Stacked',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    date: 'Mar 12, 2026',
    readTime: '6 min read'
  },
  {
    id: 3,
    category: 'Lending Ops',
    title: 'Review Time Isn\'t the Problem Queue Time Is',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
    date: 'Mar 12, 2026',
    readTime: '6 min read'
  },
  {
    id: 4,
    category: 'AI in Ops',
    title: 'AI That Actually Helps: Where Automation Saves Time',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
    date: 'Mar 12, 2026',
    readTime: '6 min read'
  },
  {
    id: 5,
    category: 'Lending Ops',
    title: 'A Cleaner Application Pack: What to Collect Upfront',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
    date: 'Mar 12, 2026',
    readTime: '6 min read'
  },
  {
    id: 6,
    category: 'Integrations',
    title: 'Integration Strategy: Start Small, Prove Value, Then Expand',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
    date: 'Mar 12, 2026',
    readTime: '6 min read'
  },
  {
    id: 7,
    category: 'Partnerships',
    title: 'Broker to Lender Handoffs: How to Reduce Follow Ups',
    image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&h=400&fit=crop',
    date: 'Mar 12, 2026',
    readTime: '6 min read'
  },
  {
    id: 8,
    category: 'Security',
    title: 'Lending Data Basics: Access, Audit Trails, and Practical Previsioning',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    date: 'Mar 12, 2026',
    readTime: '6 min read'
  },
  {
    id: 9,
    category: 'Security',
    title: 'Lending Data Basics: Access, Audit Trails, and Practical Previsioning',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
    date: 'Mar 12, 2026',
    readTime: '6 min read'
  }
];

const filters = ['All', 'Lending Ops', 'Product', 'Integrations', 'Security', 'Partnerships'];

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <div className="blog-hero-text">
            <div className="blog-hero-label">Insights</div>
            <h1 className="blog-hero-title">Insights for modern lending operations</h1>
            <p className="blog-hero-subtitle">
              Practical guides on intake, documents, routing, integrations, and compliance from our team of lending and tech experts.
            </p>
          </div>
          <div className="blog-hero-diagram">
            <img src="/blog-diagram.png" alt="Stacked workflow diagram" />
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section className="blog-posts">
        <div className="blog-posts-container">
          {/* Filter Pills */}
          <div className="blog-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`blog-filter ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Blog Cards Grid */}
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <Link to="/blog/article" key={post.id} className="blog-card">
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <span className="blog-card-category">{post.category}</span>
                <h3 className="blog-card-title">{post.title}</h3>
                <div className="blog-card-meta">
                  <div className="blog-card-author">
                    <div className="blog-card-author-icon">
                      <img src="/stacked-icon.png" alt="" />
                    </div>
                    <span>Stacked Team</span>
                  </div>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="blog-load-more">
            <button className="blog-load-more-btn">
              Load more
              <img src="/stacked-icon.png" alt="" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
