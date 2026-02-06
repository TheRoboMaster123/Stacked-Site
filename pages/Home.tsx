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

/* ============================================
   MEET STACKED SECTION - Feature Cards
   ============================================ */

const MeetStackedSection = () => (
    <section className="meet-stacked-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
                <div className="meet-stacked-badge">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0L9.79611 6.20389L16 8L9.79611 9.79611L8 16L6.20389 9.79611L0 8L6.20389 6.20389L8 0Z" fill="#1A332B"/>
                    </svg>
                    <span>Meet Stacked</span>
                </div>
                <h2 className="meet-stacked-title">Built for Smarter Lending Operations</h2>
                <p className="meet-stacked-subtitle">
                    Everything you need to automate workflows, reduce risk, and scale lending efficiently.
                </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="feature-cards-grid">
                {/* Card 1: Reinvent Lending Workflows */}
                <div className="feature-card feature-card-workflows">
                    <h3 className="feature-card-title">Reinvent Lending<br/>Workflows</h3>
                    <p className="feature-card-description">
                        Automate intake, underwriting, and approvals to work faster and fund more clients easily.
                    </p>
                    <div className="feature-card-visual workflows-visual">
                        <div className="stacked-logo-icon">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M35 10H10V35H35V10Z" fill="#1A332B"/>
                                <path d="M70 10H45V35H70V10Z" fill="#1A332B"/>
                                <path d="M35 45H10V70H35V45Z" fill="#1A332B"/>
                                <path d="M70 45H45V70H70V45Z" fill="#D4FF73"/>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Card 2: Real-Time Document Analysis */}
                <div className="feature-card feature-card-documents">
                    <h3 className="feature-card-title">Real-Time Document<br/>Analysis</h3>
                    <p className="feature-card-description">
                        Instantly scan and validate all financial docs with OCR intelligence. Fast, accurate, and complete.
                    </p>
                    <div className="feature-card-visual documents-visual">
                        <div className="document-checklist">
                            <div className="document-item">
                                <div className="document-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#6B7280" strokeWidth="2"/>
                                        <path d="M7 10H17M7 14H17" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </div>
                                <span className="document-label">Bank Statements</span>
                                <svg className="document-check" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 13L9 17L19 7" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="document-item">
                                <div className="document-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="4" y="4" width="16" height="16" rx="2" stroke="#6B7280" strokeWidth="2"/>
                                        <circle cx="12" cy="10" r="3" stroke="#6B7280" strokeWidth="2"/>
                                        <path d="M6 20C6 17.2386 8.68629 15 12 15C15.3137 15 18 17.2386 18 20" stroke="#6B7280" strokeWidth="2"/>
                                    </svg>
                                </div>
                                <span className="document-label">User IDs</span>
                                <svg className="document-check" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 13L9 17L19 7" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="document-item document-item-processing">
                                <div className="document-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <span className="document-label">Tax Documents...</span>
                                <div className="document-spinner">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="document-progress">
                            <div className="progress-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="#D1D5DB" strokeWidth="2"/>
                                    <path d="M12 6V12L16 14" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <span>Analyzing Documents...</span>
                            <div className="progress-bar">
                                <div className="progress-fill"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3: Automatic Agentic AI Follow-Up */}
                <div className="feature-card feature-card-followup">
                    <h3 className="feature-card-title">Automatic Agentic<br/>AI Follow-Up</h3>
                    <p className="feature-card-description">
                        Automatically tracks applications, detects missing info, and triggers smart follow-ups for 100% completion.
                    </p>
                    <div className="feature-card-visual followup-visual">
                        <div className="followup-checklist">
                            <div className="followup-item">
                                <div className="followup-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10" stroke="#6B7280" strokeWidth="2"/>
                                        <path d="M12 6V12L16 14" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </div>
                                <span className="followup-label">Tracking Application</span>
                                <svg className="followup-check" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 13L9 17L19 7" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="followup-item">
                                <div className="followup-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <line x1="12" y1="9" x2="12" y2="13" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
                                        <line x1="12" y1="17" x2="12.01" y2="17" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </div>
                                <span className="followup-label">Detecting Missing Info</span>
                                <svg className="followup-check" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 13L9 17L19 7" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="followup-item followup-item-processing">
                                <div className="followup-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <span className="followup-label">Following Up with Client...</span>
                                <div className="followup-spinner">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="followup-channels">
                            <span className="channels-label">Follow up via:</span>
                            <div className="channels-list">
                                <div className="channel-item">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <polyline points="22,6 12,13 2,6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span>Email</span>
                                </div>
                                <div className="channel-item">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span>SMS</span>
                                </div>
                                <div className="channel-item">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10" stroke="#6B7280" strokeWidth="2"/>
                                        <circle cx="12" cy="12" r="4" stroke="#6B7280" strokeWidth="2"/>
                                        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" stroke="#6B7280" strokeWidth="2"/>
                                        <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" stroke="#6B7280" strokeWidth="2"/>
                                        <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" stroke="#6B7280" strokeWidth="2"/>
                                        <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" stroke="#6B7280" strokeWidth="2"/>
                                    </svg>
                                    <span>Portal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

/* ============================================
   PACKS SECTION - Zigzag Layout
   ============================================ */

const PacksSection = () => (
    <section className="packs-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
                <div className="packs-badge">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0L9.79611 6.20389L16 8L9.79611 9.79611L8 16L6.20389 9.79611L0 8L6.20389 6.20389L8 0Z" fill="#D4FF73"/>
                    </svg>
                    <span>Packs</span>
                </div>
                <h2 className="packs-title">
                    <span className="text-[#D4FF73]">From Intake to Funding,</span>{' '}
                    <span className="text-gray-400">Each Pack<br/>Powers a Step in the Lending Journey</span>
                </h2>
                <p className="packs-subtitle">
                    Stacked is modular by design. Each Pack automates a layer of your lending operation. And together, they form your complete agentic ecosystem.
                </p>
            </div>

            {/* Packs Timeline */}
            <div className="packs-timeline">
                {/* Vertical Line */}
                <div className="timeline-line"></div>

                {/* Pack 1: Application Pack - Left */}
                <div className="pack-row pack-row-left">
                    <div className="pack-card">
                        <div className="pack-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="3" width="7" height="7" rx="1" stroke="#1A332B" strokeWidth="2"/>
                                <rect x="14" y="3" width="7" height="7" rx="1" stroke="#1A332B" strokeWidth="2"/>
                                <rect x="3" y="14" width="7" height="7" rx="1" stroke="#1A332B" strokeWidth="2"/>
                                <rect x="14" y="14" width="7" height="7" rx="1" stroke="#1A332B" strokeWidth="2"/>
                            </svg>
                        </div>
                        <h3 className="pack-title">Application Pack</h3>
                        <p className="pack-description">Smart forms, intake routing, real-time validation.</p>
                    </div>
                    <div className="pack-label-container">
                        <div className="pack-dot"></div>
                        <span className="pack-label">Application Intake</span>
                    </div>
                </div>

                {/* Pack 2: Automation Pack - Right */}
                <div className="pack-row pack-row-right">
                    <div className="pack-label-container">
                        <span className="pack-label">Document & Bank Analysis</span>
                        <div className="pack-dot"></div>
                    </div>
                    <div className="pack-card">
                        <div className="pack-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="3" stroke="#1A332B" strokeWidth="2"/>
                                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="#1A332B" strokeWidth="2"/>
                            </svg>
                        </div>
                        <h3 className="pack-title">Automation Pack</h3>
                        <p className="pack-description">OCR parsing, Plaid integration, financial summaries.</p>
                    </div>
                </div>

                {/* Pack 3: Decisioning Pack - Left */}
                <div className="pack-row pack-row-left">
                    <div className="pack-card">
                        <div className="pack-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" stroke="#1A332B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <rect x="8" y="2" width="8" height="4" rx="1" stroke="#1A332B" strokeWidth="2"/>
                                <path d="M9 12l2 2 4-4" stroke="#1A332B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h3 className="pack-title">Decisioning Pack</h3>
                        <p className="pack-description">Rule engine, scorecards, AI-assisted decision support.</p>
                    </div>
                    <div className="pack-label-container">
                        <div className="pack-dot"></div>
                        <span className="pack-label">Qualification & Decision</span>
                    </div>
                </div>

                {/* Pack 4: Affiliate Pack - Right */}
                <div className="pack-row pack-row-right">
                    <div className="pack-label-container">
                        <span className="pack-label">Partner Management</span>
                        <div className="pack-dot"></div>
                    </div>
                    <div className="pack-card">
                        <div className="pack-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#1A332B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="9" cy="7" r="4" stroke="#1A332B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#1A332B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h3 className="pack-title">Affiliate Pack</h3>
                        <p className="pack-description">Referral analytics, commission automation.</p>
                    </div>
                </div>

                {/* Pack 5: Integration Pack - Left */}
                <div className="pack-row pack-row-left">
                    <div className="pack-card">
                        <div className="pack-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="12 2 2 7 12 12 22 7 12 2" stroke="#1A332B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <polyline points="2 17 12 22 22 17" stroke="#1A332B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <polyline points="2 12 12 17 22 12" stroke="#1A332B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h3 className="pack-title">Integration Pack</h3>
                        <p className="pack-description">APIs, Salesforce sync, webhooks, ActiveCampaign automation.</p>
                    </div>
                    <div className="pack-label-container">
                        <div className="pack-dot"></div>
                        <span className="pack-label">Connectivity</span>
                    </div>
                </div>
            </div>

            {/* Explore Packs Button */}
            <div className="text-center mt-16">
                <Link to="/packs" className="explore-packs-btn">
                    Explore Packs
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
            </div>
        </div>
    </section>
);

const Home = () => {
    return (
        <div>
            <HeroSection />
            <MeetStackedSection />
            <PacksSection />
        </div>
    );
};

export default Home;
