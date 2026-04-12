import React from 'react';
import { Link } from 'react-router';

/** Replace with your live Finix AI Bot marketing or app URL when available. */
export const FINIX_AI_BOT_EXTERNAL_URL = 'https://finixaibot.com';

const FinixAIBotBridge = () => {
    return (
        <div className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-8 light:bg-white/90">
            <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
                FINIX AI BOT is a technology-driven extension focusing on automation-oriented workflows and global
                financial participation for users who choose to engage with the platform. It represents FINIX LTD&apos;s
                move toward innovation—combining corporate finance discipline with artificial intelligence in a
                product-led context.
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
                The platform is aimed at a global user base; features, eligibility, and risks depend on product terms
                and jurisdiction. Nothing on this corporate site constitutes an offer, investment advice, or a promise
                of profit.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                    href={FINIX_AI_BOT_EXTERNAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-primary-gradient px-8 py-3 text-sm font-semibold text-[#0B0F1A] shadow-lg shadow-primary-green/20 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue"
                >
                    Visit Finix AI Bot website
                </a>
                <Link
                    to="/compliance"
                    className="text-center text-sm font-semibold text-accent-blue hover:text-primary-green sm:text-left"
                >
                    Read risk disclosure &amp; legal notices
                </Link>
            </div>
        </div>
    );
};

export default FinixAIBotBridge;
