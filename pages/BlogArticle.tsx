
import React from 'react';

const BlogArticle = () => {
  return (
    <div className="bg-white text-black py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose lg:prose-xl max-w-none">
          <header className="text-center mb-12">
            <p className="text-green-600 font-semibold">Lending Ops</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mt-2">From Chaos to Clarity: The Story Behind Stacked</h1>
            <p className="mt-4 text-lg text-gray-500">How our founders' lending operations experience led to building the platform.</p>
            <p className="mt-4 text-sm text-gray-400">By Stacked Team • May 12, 2026 • 7 min read</p>
          </header>
          
          <h2>Intro</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <figure className="my-10">
            <img src="https://picsum.photos/800/450" alt="Team meeting" className="rounded-2xl" />
            <figcaption className="text-center text-sm text-gray-500 mt-2">The early Stacked team mapping out workflows.</figcaption>
          </figure>
          <h2>The day we realized the problem wasn't underwriting</h2>
          <p>
            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.
          </p>
        </article>
      </div>
    </div>
  );
};

export default BlogArticle;
