
import React from 'react';

const Terms = () => {
  return (
    <div className="bg-white text-black py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose lg:prose-lg max-w-none">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Terms of Service</h1>
            <p className="mt-4 text-lg text-gray-500">Last updated: January 15, 2026</p>
          </header>
          
          <h3>1. Acceptance of Terms</h3>
          <p>By accessing or using the services provided by Stacked ("we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our services.</p>
          
          <h3>2. Description of Services</h3>
          <p>Stacked provides a technology platform to facilitate connections between businesses seeking funding and a network of lenders and funding partners. We are not a direct lender and do not make credit decisions.</p>

          <h3>3. Account Responsibilities</h3>
          <p>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>
        </article>
      </div>
    </div>
  );
};

export default Terms;
