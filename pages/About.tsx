
import React from 'react';

const About = () => {
  return (
    <div className="bg-[#F5F7F5] text-black">
       <section className="bg-white pt-20 pb-24 text-center text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight">Built by Industry Veterans and Relentless Builders</h1>
          <p className="mt-6 text-lg text-gray-600">We're a team of lending experts and technologists who have built, scaled, and exited FinTech and SaaS companies.</p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-4xl font-semibold tracking-tight">The Minds Behind Stacked</h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {['Nathan Hamilton', 'Joe Downie', 'Brian Kim'].map(name => (
                <div key={name} className="text-center">
                    <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full mb-4"></div>
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <p className="text-gray-500">Co-Founder</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default About;
