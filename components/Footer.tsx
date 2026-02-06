import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <svg width="160" height="32" viewBox="0 0 160 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.791 12.807C13.701 12.807 11.612 12.807 9.522 12.807C9.522 10.917 9.414 8.844 9.522 6.98C9.691 4.087 11.945 1.703 14.829 1.396C14.967 1.381 15.727 1.321 15.776 1.396C15.802 5.198 15.795 9.008 15.791 12.81V12.807Z" fill="#D4FF73"/>
    <path d="M9.522 12.807C9.522 14.854 9.522 16.905 9.522 18.952L9.578 19.072H15.742L15.799 18.952C15.799 16.905 15.799 14.854 15.799 12.807C17.705 12.807 19.824 12.687 21.7 12.807C24.887 13.009 27.456 15.864 27.216 19.072H15.799C15.78 21.108 15.844 23.147 15.765 25.179C15.443 28.301 12.675 30.673 9.53 30.483V19.072L3.452 19.038C1.546 18.843 -0.177 17.743 -1.124 16.085C-1.701 15.078 -1.937 13.963 -1.926 12.807C1.89 12.807 5.71 12.807 9.53 12.807H9.522Z" fill="#D4FF73"/>
    <text x="30" y="22" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="500" fill="#D4FF73">stacked</text>
  </svg>
);

const FooterLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
    <Link to={to} className="text-gray-400 hover:text-white transition-colors duration-300">{children}</Link>
)

const SocialIcon = ({ children }: { children: React.ReactNode }) => (
    <a href="#" className="w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
        {children}
    </a>
)

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0A0F0D] to-[#1A2F23] text-white pt-24 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="text-[250px] md:text-[400px] font-bold text-white/5 select-none -translate-y-1/4">
                stacked
            </div>
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-1">
                <Link to="/">
                  <Logo />
                </Link>
                <p className="text-gray-400 mt-4 text-sm">Modern Infrastructure for Lending Originations</p>
                <form className="mt-6">
                    <label htmlFor="newsletter" className="text-sm font-medium">Subscribe to Our Newsletter</label>
                    <div className="flex items-center mt-2">
                        <input id="newsletter" type="email" placeholder="Email address..." className="bg-white/10 border border-white/20 rounded-l-full py-2 px-4 w-full text-sm placeholder-gray-400 focus:ring-2 focus:ring-[#D4FF73] focus:outline-none" />
                        <button type="submit" className="bg-[#D4FF73] text-[#0A0F0D] rounded-r-full py-2 px-4 flex-shrink-0 font-medium hover:bg-opacity-90 transition-colors duration-300">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>

            <div className="md:ml-auto">
                <h3 className="font-semibold text-white">Solutions</h3>
                {/* FIX: Added children to FooterLink components to fix missing property errors. */}
                <ul className="mt-4 space-y-3">
                    <li><FooterLink to="#">Lenders</FooterLink></li>
                    <li><FooterLink to="#">Brokers</FooterLink></li>
                    <li><FooterLink to="/partners">Partners</FooterLink></li>
                </ul>
            </div>

            <div>
                <h3 className="font-semibold text-white">Products</h3>
                {/* FIX: Added children to FooterLink components to fix missing property errors. */}
                <ul className="mt-4 space-y-3">
                    <li><FooterLink to="#">Packs</FooterLink></li>
                    <li><FooterLink to="#">AI Agents</FooterLink></li>
                    <li><FooterLink to="/integrations">Integrations</FooterLink></li>
                    <li><FooterLink to="#">Security</FooterLink></li>
                </ul>
            </div>

            <div>
                <h3 className="font-semibold text-white">Company</h3>
                {/* FIX: Added children to FooterLink components to fix missing property errors. */}
                <ul className="mt-4 space-y-3">
                    <li><FooterLink to="/about">About</FooterLink></li>
                    <li><FooterLink to="/contact">Contact</FooterLink></li>
                    <li><FooterLink to="/blog">Blog</FooterLink></li>
                    <li><FooterLink to="/faq">FAQ</FooterLink></li>
                </ul>
            </div>

            <div>
                <h3 className="font-semibold text-white">Legal</h3>
                {/* FIX: Added children to FooterLink components to fix missing property errors. */}
                <ul className="mt-4 space-y-3">
                    <li><FooterLink to="/privacy">Privacy</FooterLink></li>
                    <li><FooterLink to="/terms">Terms</FooterLink></li>
                    <li><FooterLink to="#">Security</FooterLink></li>
                </ul>
            </div>

        </div>

        <div className="mt-16 border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                    {/* FIX: Added SVG icon children to SocialIcon components to fix missing property errors. */}
                    <SocialIcon>
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M10.125 1.25a8.875 8.875 0 100 17.75 8.875 8.875 0 000-17.75zM12.5 10a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/></svg>
                    </SocialIcon>
                    <SocialIcon>
                         <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M10.125 1.25a8.875 8.875 0 100 17.75 8.875 8.875 0 000-17.75zM12.5 10a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/></svg>
                    </SocialIcon>
                    <SocialIcon>
                         <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M10.125 1.25a8.875 8.875 0 100 17.75 8.875 8.875 0 000-17.75zM12.5 10a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/></svg>
                    </SocialIcon>
                     <SocialIcon>
                         <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M10.125 1.25a8.875 8.875 0 100 17.75 8.875 8.875 0 000-17.75zM12.5 10a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/></svg>
                    </SocialIcon>
                </div>
                <div className="w-full sm:w-auto text-center sm:text-left bg-gray-800/50 px-4 py-2 rounded-lg text-sm text-gray-400">
                    Stacked is not a lender. We provide the infrastructure and partner network that routes applicants to funding sources.
                </div>
            </div>
            <div className="text-center text-gray-500 text-sm mt-8">
                &copy; 2026 Stacked. All rights reserved.
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;