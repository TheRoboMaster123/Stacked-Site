
import React from 'react';
import { Link } from 'react-router-dom';

const DemoBooking = () => {
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
            <h2 className="text-xl font-semibold">Select Date & Time</h2>
            <div className="mt-6">
                {/* Calendar UI Placeholder */}
                <div className="text-center font-medium mb-4">January 2026</div>
                <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-500 mb-2">
                    <div>SUN</div><div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center">
                    {Array(31).fill(0).map((_, i) => (
                        <div key={i} className={`p-2 rounded-full cursor-pointer ${i + 1 === 8 ? 'bg-black text-white' : 'hover:bg-gray-200'}`}>{i + 1}</div>
                    ))}
                </div>
            </div>
             <div className="mt-6">
                 {/* Time Slot UI Placeholder */}
                <div className="border border-black rounded-md p-2 text-center cursor-pointer">11:00 AM</div>
                 {Array(5).fill(0).map((_, i) => (
                    <div key={i} className="border border-gray-300 rounded-md p-2 text-center cursor-pointer mt-2 hover:border-black">{`11:30 AM`}</div>
                 ))}
             </div>
             <Link to="/demo-form" className="mt-6 w-full bg-gray-800 text-white font-medium py-3 px-6 rounded-full hover:bg-black transition-all duration-300 flex items-center justify-center gap-2">
                 Next
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoBooking;
