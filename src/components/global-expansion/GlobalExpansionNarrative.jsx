import React from 'react';
import { Link } from 'react-router';

const GlobalExpansionNarrative = () => {
    return (
        <div className="space-y-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            <p>
                With evolving financial markets and technology, FINIX LTD has expanded into global fintech solutions in
                a measured, corporate manner—prioritising integration, oversight, and the same professional standards
                applied to traditional accounting and advisory work.
            </p>
            <p>
                Technology integration is treated as infrastructure: secure processes, clear accountability, and
                alignment with regulatory and commercial realities. This includes the development of AI-based financial
                systems intended to operate in modern digital markets.
            </p>
            <p className="text-text-white/90">
                Finix AI Bot is part of that roadmap: a separate technology surface for eligible users, described in
                full on the{' '}
                <Link to="/finix-ai-bot" className="font-medium text-accent-blue underline-offset-2 hover:underline">
                    Finix AI Bot connection page
                </Link>
                —presented without recruitment-style or income-guarantee messaging.
            </p>
        </div>
    );
};

export default GlobalExpansionNarrative;
