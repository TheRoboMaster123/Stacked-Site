
import React from 'react';
import { Link } from 'react-router-dom';

const DemoForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F0D] via-[#1A2F23] to-[#0A0F0D] flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        <div className="grid md:grid-cols-2">
          {/* Left Panel */}
          <div className="p-10 bg-black/20">
            <div className="text-lg font-bold text-[#D4FF73]">✦ stacked</div>
            <h1 className="mt-6 text-3xl font-semibold text-white">See how Stacked can transform your lending operations in just 30 minutes.</h1>
            <ul className="mt-6 space-y-3 text-gray-300">
              <li className="flex items-start"><span className="text-[#D4FF73] mr-2 mt-1">✓</span> See the platform in action with your use case</li>
              <li className="flex items-start"><span className="text-[#D4FF73] mr-2 mt-1">✓</span> Get answers to all your questions</li>
              <li className="flex items-start"><span className="text-[#D4FF73] mr-2 mt-1">✓</span> Discuss custom requirements and integrations</li>
              <li className="flex items-start"><span className="text-[#D4FF73] mr-2 mt-1">✓</span> Learn about pricing and implementation timeline</li>
            </ul>
            <div className="mt-8 p-6 bg-black/30 border border-white/10 rounded-2xl">
              <h2 className="font-semibold text-white">What to expect</h2>
              <ul className="mt-4 space-y-3 text-gray-400 text-sm">
                <li>30-minute personalized demo</li>
                <li>Live Q&A with our product team</li>
                <li>Custom implementation roadmap</li>
                <li>No pressure, just information</li>
              </ul>
            </div>
          </div>
          {/* Right Panel */}
          <div className="p-10 bg-white text-black">
            <Link to="/demo-booking" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black">
              &lt; Back
            </Link>
            <h2 className="text-xl font-semibold mt-4">Enter Details</h2>
             <form className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
                <input type="text" id="name" defaultValue="John Smith" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                <input type="email" id="email" placeholder="Enter your email address" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company/Organization</label>
                <input type="text" id="company" placeholder="Your company/organization name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
              </div>
              <div>
                <label htmlFor="info" className="block text-sm font-medium text-gray-700">Please share anything that will help prepare for our meeting.</label>
                <textarea id="info" rows={3} placeholder="Enter anything that will help..." className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"></textarea>
              </div>
               <p className="text-xs text-gray-500">By proceeding, you confirm that you have read and agree to Calendly's <a href="#" className="underline">Terms of Use</a> and <a href="#" className="underline">Privacy Notice</a>.</p>
              <button type="submit" className="w-full bg-gray-800 text-white font-medium py-3 px-6 rounded-full hover:bg-black transition-all duration-300 flex items-center justify-center gap-2">
                Schedule A Demo
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoForm;
