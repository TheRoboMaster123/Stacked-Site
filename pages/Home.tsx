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

/* ============================================
   WHY STACKED SECTION
   ============================================ */

const WhyStackedSection = () => (
    <section className="why-stacked-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="why-stacked-grid">
                {/* Left Side - Content */}
                <div className="why-stacked-content">
                    {/* Section Header */}
                    <div className="why-stacked-badge">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L9.79611 6.20389L16 8L9.79611 9.79611L8 16L6.20389 9.79611L0 8L6.20389 6.20389L8 0Z" fill="#D4FF73"/>
                        </svg>
                        <span>Why Stacked?</span>
                    </div>
                    <h2 className="why-stacked-title">
                        Unified AI Infrastructure<br/>for Lending
                    </h2>
                    <p className="why-stacked-subtitle">
                        Legacy systems slow you down. Stacked moves in real time.
                    </p>

                    {/* Feature Cards Grid */}
                    <div className="why-features-grid">
                        {/* Card 1: Modular by Design */}
                        <div className="why-feature-card">
                            <div className="why-feature-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="12 2 2 7 12 12 22 7 12 2" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <polyline points="2 17 12 22 22 17" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <polyline points="2 12 12 17 22 12" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3 className="why-feature-title">Modular by<br/>Design</h3>
                            <p className="why-feature-description">Start with one pack, expand as you grow.</p>
                        </div>

                        {/* Card 2: Seamlessly Integrated */}
                        <div className="why-feature-card">
                            <div className="why-feature-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3 className="why-feature-title">Seamlessly<br/>Integrated</h3>
                            <p className="why-feature-description">Works with your CRM, LOS, and data tools.</p>
                        </div>

                        {/* Card 3: AI-Assisted, Not AI-Dependent */}
                        <div className="why-feature-card">
                            <div className="why-feature-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="11" width="18" height="11" rx="2" stroke="#374151" strokeWidth="2"/>
                                    <circle cx="12" cy="16" r="1" fill="#374151"/>
                                    <path d="M7 11V7a5 5 0 0110 0v4" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <h3 className="why-feature-title">AI-Assisted, Not<br/>AI-Dependent</h3>
                            <p className="why-feature-description">AI enhances every step during your process.</p>
                        </div>

                        {/* Card 4: Built for Speed and Scale */}
                        <div className="why-feature-card">
                            <div className="why-feature-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3 className="why-feature-title">Built for Speed<br/>and Scale</h3>
                            <p className="why-feature-description">Multi-tenant, SOC2-ready infrastructure.</p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Visual Diagram */}
                <div className="why-stacked-visual">
                    <div className="integration-diagram">
                        {/* Connection Lines SVG */}
                        <svg className="connection-lines" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Lines from center to nodes */}
                            <path d="M200 200 L120 80" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4"/>
                            <path d="M200 200 L320 100" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4"/>
                            <path d="M200 200 L350 200" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4"/>
                            <path d="M200 200 L320 300" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4"/>
                            <path d="M200 200 L120 320" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4"/>
                        </svg>

                        {/* Center Logo */}
                        <div className="diagram-center">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8V24M8 16H24" stroke="#1A332B" strokeWidth="3" strokeLinecap="round"/>
                            </svg>
                        </div>

                        {/* Floating Nodes */}
                        <div className="diagram-node node-1">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="12 2 2 7 12 12 22 7 12 2" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <polyline points="2 17 12 22 22 17" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <polyline points="2 12 12 17 22 12" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className="diagram-node node-2">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className="diagram-node node-3">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="11" width="18" height="11" rx="2" stroke="#9CA3AF" strokeWidth="2"/>
                                <path d="M7 11V7a5 5 0 0110 0v4" stroke="#9CA3AF" strokeWidth="2"/>
                            </svg>
                        </div>
                        <div className="diagram-node node-4">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className="diagram-node node-5">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="3" stroke="#9CA3AF" strokeWidth="2"/>
                                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="#9CA3AF" strokeWidth="2"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

/* ============================================
   STACKED CORE SECTION
   ============================================ */

const StackedCoreSection = () => (
    <section className="stacked-core-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-8">
                <div className="core-badge">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0L9.79611 6.20389L16 8L9.79611 9.79611L8 16L6.20389 9.79611L0 8L6.20389 6.20389L8 0Z" fill="#D4FF73"/>
                    </svg>
                    <span>Stacked Core</span>
                </div>
                <h2 className="core-title">
                    Meet Stacked Core,<br/>The Orchestration Layer
                </h2>
                <p className="core-subtitle">
                    The orchestration layer that runs every Pack.
                </p>
            </div>

            {/* Orbital Diagram */}
            <div className="core-orbital-container">
                {/* Glow Effect */}
                <div className="core-glow"></div>
                
                {/* Dotted Orbit Circle */}
                <svg className="orbit-circle" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="140" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 6"/>
                </svg>

                {/* Center Core */}
                <div className="core-center">
                    <span>Core</span>
                </div>

                {/* Orbital Nodes */}
                <div className="orbital-node node-perceive">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="3" stroke="#6B7280" strokeWidth="2"/>
                    </svg>
                    <span>Perceive</span>
                </div>

                <div className="orbital-node node-reason">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Reason</span>
                </div>

                <div className="orbital-node node-act">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Act</span>
                </div>

                <div className="orbital-node node-learn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="7" height="7" rx="1" stroke="#6B7280" strokeWidth="2"/>
                        <rect x="14" y="3" width="7" height="7" rx="1" stroke="#6B7280" strokeWidth="2"/>
                        <rect x="3" y="14" width="7" height="7" rx="1" stroke="#6B7280" strokeWidth="2"/>
                        <rect x="14" y="14" width="7" height="7" rx="1" stroke="#6B7280" strokeWidth="2"/>
                    </svg>
                    <span>Learn</span>
                </div>
            </div>

            {/* Description */}
            <p className="core-description">
                Stacked Core is the intelligence layer connecting all Stacked Packs. It perceives, reasons, and acts across your data. Ensuring every document, application, and decision flows without friction.
            </p>

            {/* Feature Items */}
            <div className="core-features">
                <div className="core-feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#6B7280" strokeWidth="2"/>
                        <path d="M7 10h10M7 14h10" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span>Understands document and bank data instantly</span>
                </div>
                <div className="core-feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="#6B7280" strokeWidth="2"/>
                        <rect x="9" y="3" width="6" height="4" rx="1" stroke="#6B7280" strokeWidth="2"/>
                        <path d="M9 12l2 2 4-4" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Applies context-aware qualification logic</span>
                </div>
                <div className="core-feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="5" r="3" stroke="#6B7280" strokeWidth="2"/>
                        <circle cx="6" cy="12" r="3" stroke="#6B7280" strokeWidth="2"/>
                        <circle cx="18" cy="19" r="3" stroke="#6B7280" strokeWidth="2"/>
                        <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" stroke="#6B7280" strokeWidth="2"/>
                    </svg>
                    <span>Automates routing and communication across teams</span>
                </div>
                <div className="core-feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 6l-9.5 9.5-5-5L1 18" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 6h6v6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Improves continuously with every submission outcome</span>
                </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
                <Link to="/core" className="core-cta-btn">
                    <span className="core-cta-text">See How Stacked Core Works</span>
                    <span className="core-cta-arrow">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1A332B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </Link>
            </div>
        </div>
    </section>
);

/* ============================================
   RESULTS SECTION
   ============================================ */

const ResultsSection = () => (
    <section className="results-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="results-grid">
                {/* Left Card - Title */}
                <div className="results-title-card">
                    <h2>The Results Speak for Themselves</h2>
                </div>

                {/* Right Card - Stats */}
                <div className="results-stats-card">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-value">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#D4FF73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>40%</span>
                            </div>
                            <p className="stat-label">Higher Completion Rate</p>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#D4FF73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>3x</span>
                            </div>
                            <p className="stat-label">Approval Lift</p>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 7L17 17M17 17H7M17 17V7" stroke="#D4FF73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>90%</span>
                            </div>
                            <p className="stat-label">Less Manual Work</p>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 7L17 17M17 17H7M17 17V7" stroke="#D4FF73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>80%</span>
                            </div>
                            <p className="stat-label">Fewer Support Calls</p>
                        </div>
                    </div>
                    <p className="stats-footnote">Based on internal pilot data, last 90 days.</p>
                </div>
            </div>
        </div>
    </section>
);

/* ============================================
   TESTIMONIALS SECTION
   ============================================ */

const TestimonialsSection = () => (
    <section className="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
                <div className="testimonials-header-badge">
                    <img src="/stacked-icon.png" alt="Stacked" className="testimonials-badge-icon" />
                    <div className="testimonials-badge-pill">
                        <span>Testimonials</span>
                    </div>
                </div>
                <h2 className="testimonials-title">Trusted by Modern Lenders</h2>
                <p className="testimonials-subtitle">See what modern lenders are saying about Stacked.</p>
            </div>

            {/* Testimonials Image */}
            <div className="testimonials-image">
                <img src="/testimonials-cards.png" alt="Customer testimonials" />
            </div>
        </div>
    </section>
);

/* ============================================
   CTA SECTION
   ============================================ */

const CTASection = () => (
    <section className="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge */}
            <div className="cta-badge">
                <img src="/stacked-icon.png" alt="Stacked" className="cta-badge-icon" />
                <div className="cta-badge-pill">
                    <span>Try Stacked Today</span>
                </div>
            </div>

            {/* Heading */}
            <h2 className="cta-title">Ready to Build Your Agentic Stack?</h2>

            {/* Subtitle */}
            <p className="cta-subtitle">
                Start with the Core Pack or add Agents for intelligent oversight. The choice is yours. Join modern lenders and brokers building with the Agentic OS.
            </p>

            {/* CTA Button */}
            <a href="#" className="cta-book-btn">
                <div className="cta-book-text">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="4" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M2 8H18" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M6 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M14 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span>Book A Call</span>
                </div>
                <div className="cta-book-arrow">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13L13 1M13 1H1M13 1V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </a>
        </div>
    </section>
);

const Home = () => {
    return (
        <div>
            <HeroSection />
            <MeetStackedSection />
            <PacksSection />
            <WhyStackedSection />
            <StackedCoreSection />
            <ResultsSection />
            <TestimonialsSection />
            <CTASection />
        </div>
    );
};

export default Home;
