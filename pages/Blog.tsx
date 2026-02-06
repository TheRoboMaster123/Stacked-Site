
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => (
    <Link to="/blog/article" className="block group">
        <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden bg-gray-200 mb-4">
            <img src="https://picsum.photos/400/225" alt="Blog post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="text-sm text-green-700 font-medium">Lending Ops</div>
        <h3 className="mt-1 text-xl font-semibold text-gray-900 group-hover:text-green-800 transition-colors">The Intake Bottleneck: Why "Missing Docs" Keeps Killing Deals</h3>
        <div className="mt-3 flex items-center gap-3 text-sm text-gray-500">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <span>Stacked Team</span>
            <span>&bull;</span>
            <span>Mar 12, 2026</span>
            <span>&bull;</span>
            <span>6 min read</span>
        </div>
    </Link>
)

const Blog = () => {
  return (
    <div className="bg-[#F5F7F5] text-black">
      <section className="bg-gradient-to-b from-[#0A0F0D] to-[#121f18] pt-20 pb-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-sm font-bold uppercase tracking-wider text-[#D4FF73]">Insights</div>
              <h1 className="text-5xl md:text-6xl font-medium tracking-tight mt-2">Insights for modern lending operations</h1>
              <p className="mt-4 text-lg text-gray-300">Practical guides on intake, documents, routing, integrations, and compliance from our team of lending and tech experts.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-3xl border border-white/20">
              {/* Diagram placeholder */}
              <div className="bg-gray-800 aspect-square rounded-2xl flex items-center justify-center">
                  <p className="text-gray-400">Diagram Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {Array(9).fill(0).map((_, i) => (
            <BlogCard key={i} />
          ))}
        </div>
        <div className="text-center mt-16">
            <button className="bg-gray-800 text-white font-medium py-3 px-6 rounded-full hover:bg-black transition-all duration-300">
                Load More
            </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
