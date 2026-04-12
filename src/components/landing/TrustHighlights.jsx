import React from 'react';
import { IoBriefcaseOutline, IoCalendarOutline, IoGlobeOutline, IoShieldCheckmark } from 'react-icons/io5';

const ITEMS = [
    { icon: IoShieldCheckmark, title: 'UK Registered Company' },
    { icon: IoCalendarOutline, title: 'Established 2017' },
    { icon: IoBriefcaseOutline, title: 'Corporate Finance Experts' },
    { icon: IoGlobeOutline, title: 'Global Expansion Ready' },
];

const TrustHighlights = () => {
    return (
        <section
            className="border-b border-border bg-surface/40 backdrop-blur-sm light:bg-surface/80"
            aria-labelledby="trust-highlights-heading"
        >
            <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
                <h2 id="trust-highlights-heading" className="sr-only">
                    Trust highlights
                </h2>
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                    {ITEMS.map(({ icon: Icon, title }) => (
                        <li
                            key={title}
                            className="flex items-center gap-3 rounded-xl border border-border/80 bg-background/40 px-4 py-3.5 sm:py-4 light:border-border light:bg-white/60 light:shadow-sm"
                        >
                            <span
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface/80 text-accent-blue light:bg-surface"
                                aria-hidden
                            >
                                <Icon className="h-5 w-5" />
                            </span>
                            <p className="min-w-0 text-sm font-semibold leading-snug text-text-white">{title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default TrustHighlights;
