import React from 'react';
import { Link } from 'react-router';

const CTA = () => {
    return (
        <section className="bg-background pb-12 pt-4 sm:pb-16 sm:pt-6" aria-labelledby="landing-cta-heading">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/70 px-6 py-10 shadow-sm sm:px-10 sm:py-12 light:bg-white/90 light:shadow-md">
                    <div
                        className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-primary-green/10 blur-3xl"
                        aria-hidden
                    />
                    <div
                        className="pointer-events-none absolute -bottom-20 left-1/4 h-44 w-44 rounded-full bg-accent-blue/10 blur-3xl"
                        aria-hidden
                    />

                    <div className="relative max-w-2xl">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
                            Take the next step
                        </p>
                        <h2
                            id="landing-cta-heading"
                            className="font-heading text-2xl font-semibold tracking-tight text-text-white sm:text-3xl"
                        >
                            Explore our{' '}
                            <span className="bg-primary-gradient bg-clip-text text-transparent">
                                company &amp; innovation
                            </span>
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
                            Explore our company structure, services, and global innovation.
                        </p>
                    </div>

                    <div className="relative mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                        <Link
                            to="/about"
                            className="inline-flex items-center justify-center rounded-full bg-primary-gradient px-7 py-3 text-sm font-semibold text-[#0B0F1A] shadow-lg shadow-primary-green/20 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue"
                        >
                            About Company
                        </Link>
                        <Link
                            to="/#global-expansion"
                            className="inline-flex items-center justify-center rounded-full border border-primary-green/40 bg-background/60 px-7 py-3 text-sm font-semibold text-text-white backdrop-blur-sm transition hover:border-accent-blue hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue light:border-border light:bg-surface light:shadow-sm light:hover:border-accent-blue"
                        >
                            Global Opportunity
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
