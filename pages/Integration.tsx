
import React from 'react';

const Integration = () => {
  return (
    <div className="bg-[#F5F7F5] text-black">
      <section className="bg-gradient-to-b from-[#0A0F0D] to-[#121f18] pt-20 pb-24 text-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight">Integrate Seamlessly, Work Effortlessly.</h1>
          <p className="mt-6 text-lg text-gray-300">Stacked is built with the modern lending stack in mind. Sync data, automate actions, and keep your entire workflow humming in perfect harmony.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array(12).fill(0).map((_, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="h-10 mb-4 flex items-center">
                {/* Placeholder for logo */}
                <div className="w-24 h-8 bg-gray-200 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Integration {i + 1}</h3>
              <p className="mt-2 text-gray-600">A brief description of the integration and its purpose within the lending workflow.</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-20">
          <h2 className="text-4xl font-semibold tracking-tight">Need a Custom Integration?</h2>
          <p className="mt-4 text-lg text-gray-600">Our platform is extensible. Work with our team to connect any system.</p>
          <div className="mt-8 flex justify-center items-center gap-6">
            <a href="#" className="bg-[#0A0F0D] text-white font-medium py-3 px-6 rounded-full hover:bg-black/80 transition-all duration-300">
                Contact Sales
            </a>
            <a href="#" className="text-gray-700 font-medium hover:text-black">
                View API Docs &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
