
import React from 'react';

const Privacy = () => {
  return (
    <div className="bg-white text-black py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose lg:prose-lg max-w-none">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Privacy Policy</h1>
            <p className="mt-4 text-lg text-gray-500">Last updated: January 15, 2026</p>
          </header>
          
          <h3>1. Information We Collect</h3>
          <p>We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include your name, email address, phone number, and other contact or identifying information you choose to provide.</p>
          
          <h3>2. How We Use Your Information</h3>
          <p>We may use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services;</li>
            <li>Process transactions and send you related information;</li>
            <li>Communicate with you about products, services, offers, and events;</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
          </ul>

          <h3>3. How We Share Your Information</h3>
          <p>We may share your information as follows or as otherwise described in this Privacy Policy:</p>
          <ul>
            <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf;</li>
            <li>In response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law or legal process.</li>
          </ul>
        </article>
      </div>
    </div>
  );
};

export default Privacy;
