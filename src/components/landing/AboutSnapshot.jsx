import React from 'react';
import { Link } from 'react-router';
import { IoArrowForward } from 'react-icons/io5';

const AboutSnapshot = () => {
    return (
        <section
            className="border-b border-border bg-background"
            aria-labelledby="about-snapshot-heading"
        >
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
                    Company overview
                </p>
                <h2
                    id="about-snapshot-heading"
                    className="font-heading text-2xl font-semibold tracking-tight text-text-white sm:text-3xl"
                >
                    About{' '}
                    <span className="bg-primary-gradient bg-clip-text text-transparent">FINIX LTD</span>
                </h2>

                <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg">
                    <p>
                        FINIX LTD is a United Kingdom-based private limited company established in 2017,
                        specializing in financial management, accounting, auditing, and business consultancy.
                    </p>
                    <p>
                        Over the years, the company has built a strong foundation of trust, professionalism,
                        and long-term business stability.
                    </p>
                </div>

                <Link
                    to="/about"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-blue transition hover:gap-3 hover:text-primary-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue"
                >
                    Learn more about the company
                    <IoArrowForward className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
            </div>
        </section>
    );
};

export default AboutSnapshot;
