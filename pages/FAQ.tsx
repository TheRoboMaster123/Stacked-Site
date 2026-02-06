
import React from 'react';

const FaqItem = ({ question, children }: { question: string, children: React.ReactNode }) => (
    <details className="group border-b border-gray-200 py-4">
        <summary className="flex justify-between items-center cursor-pointer list-none">
            <span className="font-medium text-gray-900 group-hover:text-green-700">{question}</span>
            <span className="text-gray-500 transform transition-transform duration-300 group-open:rotate-45">
                 <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            </span>
        </summary>
        <div className="mt-4 text-gray-600">
            {children}
        </div>
    </details>
)

const FAQ = () => {
  return (
    <div className="bg-[#F5F7F5] text-black">
      <section className="pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight">Frequently Asked Questions</h1>
          <p className="mt-6 text-lg text-gray-600">Find answers to common questions about Stacked, our platform, and our services.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            <aside className="hidden lg:block">
                <nav className="space-y-2">
                    <a href="#about" className="block font-medium text-green-700">About Stacked</a>
                    <a href="#getting-started" className="block text-gray-600 hover:text-black">Getting Started</a>
                    {/* more links */}
                </nav>
            </aside>
            <div className="lg:col-span-3">
                <h2 id="about" className="text-2xl font-semibold mb-4">About Stacked</h2>
                {/* FIX: Added children to FaqItem components to fix missing property errors. */}
                <FaqItem question="What is Stacked?">
                   <p>Stacked provides modern infrastructure and a partner network for lending originations. We help lenders, brokers, and partners work together on a shared workflow to fund businesses more efficiently.</p>
                </FaqItem>
                <FaqItem question="Is Stacked a lender?">
                   <p>No, Stacked is not a lender. We provide the technology platform that connects businesses seeking funding with our network of lending partners.</p>
                </FaqItem>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
