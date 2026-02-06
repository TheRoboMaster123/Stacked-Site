
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Badge = ({ children, icon }: { children: React.ReactNode, icon?: React.ReactNode }) => (
    <div className="inline-flex items-center gap-2 text-sm font-medium text-[#D4FF73] bg-[#D4FF73]/10 border border-[#D4FF73]/20 rounded-full px-4 py-1.5">
        {icon}
        {children}
    </div>
);

const HeroSection = () => (
    <section className="hero-section">
        <svg
            width="1440"
            height="561"
            viewBox="0 0 1440 561"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 0,
                pointerEvents: 'none'
            }}
            >
            <defs>
                <filter id="filter0_f_glow" x="-100" y="0" width="1640" height="1640" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur"/>
                </filter>
                <radialGradient id="paint0_radial_glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(720 820) rotate(90) scale(620)">
                <stop offset="0.9" stopColor="white" stopOpacity="0"/>
                <stop offset="1" stopColor="white" stopOpacity="0.1"/>
                </radialGradient>
            </defs>
            <g filter="url(#filter0_f_glow)">
                <circle cx="720" cy="820" r="620" fill="#E1FCAD"/>
            </g>
            <circle opacity="0.4" cx="720" cy="820" r="620" fill="url(#paint0_radial_glow)"/>
            <circle opacity="0.3" cx="720" cy="820" r="676.5" stroke="white" strokeDasharray="4 8"/>
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Badge icon={<span>✦</span>}>
                Fast, Accurate, and Automated Lending
            </Badge>

            <h1 className="mt-6 text-5xl md:text-7xl font-medium tracking-tighter leading-tight">
                <span className="text-white">Modern Infrastructure for</span><br />
                <span className="text-gray-400">Lending Originations</span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
                Intake, bank analysis, decisioning, routing, submissions, partner distribution on one system. A Vertical AI Originations Network, where partners and communities originate, and lenders fund, on one shared workflow.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/demo-booking" className="bg-[#D4FF73] text-[#0A0F0D] font-medium py-3 px-6 rounded-full hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2 text-lg">
                    Book a Demo
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
                <a href="#" className="text-white font-medium hover:text-gray-300 flex items-center gap-2 text-lg transition-colors">
                    Request Sandbox Access ✦
                </a>
            </div>

            <div className="workflow-diagram">
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div>
                        <p className="text-lg text-white font-medium">Packs interlock.</p>
                        <p className="text-gray-400">Data flows end-to-end.</p>
                    </div>
                </div>

                {/* Workflow Cards */}
                <WorkflowCard title="Intake" position="bottom-0 left-0 -translate-x-1/4 translate-y-1/4" />
                <WorkflowCard title="Analysis" position="top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" />
                <WorkflowCard title="Decide" position="top-0 left-1/2 -translate-x-1/2 -translate-y-1/4" />
                <WorkflowCard title="Route" position="top-1/2 right-0 translate-x-1/2 -translate-y-1/2" />
                <WorkflowCard title="Fund" position="bottom-0 right-0 translate-x-1/4 translate-y-1/4" />
            </div>
        </div>
    </section>
);

const WorkflowCard = ({ title, position }: { title: string, position: string }) => (
    <div className={`workflow-card ${position}`}>
        <div className="w-10 h-10 bg-gray-900/50 rounded-lg flex items-center justify-center mb-2">
            {/* Placeholder Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#D4FF73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h3 className="text-white font-medium text-sm">{title}</h3>
    </div>
);

const Home = () => {
    return (
        <div>
            <HeroSection />
            
            {/* Placeholder for other sections */}
            <section className="py-24 bg-[#F5F7F5] text-black text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-semibold">More Sections Coming Soon...</h2>
                    <p className="mt-4 text-lg text-gray-600">This is a placeholder for sections like Features, Testimonials, etc.</p>
                     <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 border border-gray-200 rounded-2xl">
                            <h3 className="text-2xl font-semibold">Reinvent Lending Workflows</h3>
                            <p className="mt-2 text-gray-600">Automate intake, underwriting, and approvals to work faster and fund more clients easily.</p>
                        </div>
                        <div className="p-8 border border-gray-200 rounded-2xl">
                            <h3 className="text-2xl font-semibold">Real-Time Document Analysis</h3>
                            <p className="mt-2 text-gray-600">Instantly scan and validate all financial docs with OCR intelligence. Fast, accurate, and complete.</p>
                        </div>
                        <div className="p-8 border border-gray-200 rounded-2xl">
                            <h3 className="text-2xl font-semibold">Automatic Agentic AI Follow-Up</h3>
                            <p className="mt-2 text-gray-600">Automatically tracks applications, detects missing info, and triggers smart follow-ups for 100% completion.</p>
                        </div>
                    </div>
                </div>
            </section>

             <section className="py-24 bg-[#0A0F0D] text-white text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-semibold">From Intake to Funding</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Each Pack Powers a Step in the Lending Journey</p>
                </div>
            </section>
        </div>
    );
};

export default Home;