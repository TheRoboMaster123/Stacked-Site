
import React from 'react';
import { Link } from 'react-router-dom';

const HelpCard = ({ title, description }: { title: string, description: string }) => (
    <Link to="/help/quickstart" className="block p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
    </Link>
)

const HelpCenter = () => {
  return (
    <div className="bg-[#F5F7F5] text-black">
      <section className="pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight">How can we help?</h1>
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
                <input type="search" placeholder="Search..." className="w-full py-3 pl-4 pr-12 text-lg bg-white border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:outline-none" />
                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-semibold mb-6">Popular</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <HelpCard title="Quickstart Guide" description="Set up your workspace, create an intake link, and publish your first workflow." />
            <HelpCard title="Build an Application Pack" description="Standardize required fields and documents so every file arrives lender-ready." />
            <div className="bg-[#D4FF73] p-6 rounded-2xl">
                <h3 className="font-semibold text-lg text-black">Document Checks</h3>
                <p className="mt-2 text-sm text-gray-800">Extract key data points, validate completeness, and reduce chasing for missing info.</p>
            </div>
            <HelpCard title="Integrations Overview" description="Connect Stacked to your LOS, CRM, KYC, and data providers without needing a dev team." />
        </div>
        <h2 className="text-2xl font-semibold mt-16 mb-6">Stacked Basics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             <HelpCard title="Intake & Links" description="Create forms, set required docs, and share a branded intake link." />
             <HelpCard title="Workflow Stages" description="Define steps, owners, and SLA's to keep applications moving with clear handoffs." />
             <HelpCard title="Partner Routing" description="Route applications to the right partners with customizable rules and transparent statuses." />
             <HelpCard title="Roles & Permissions" description="Control who can view, edit, and action data for sensitive lending workflows." />
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
