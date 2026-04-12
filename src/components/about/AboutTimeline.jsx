import React from 'react';

const STEPS = [
    { period: '2017', title: 'Company incorporated', detail: 'FINIX LTD registered in the United Kingdom.' },
    {
        period: '2018–2020',
        title: 'Operations & consulting growth',
        detail: 'Core financial operations and consulting engagements expanded with repeat corporate clients.',
    },
    {
        period: '2021–2023',
        title: 'Broader service footprint',
        detail: 'Accounting, audit support, and management consultancy delivered across a wider set of business needs.',
    },
    { period: '2024', title: 'Operational stability', detail: 'Continued focus on process quality and long-term relationships.' },
    {
        period: '2025',
        title: 'Fintech & AI integration',
        detail: 'Structured exploration of AI-driven tools—including Finix AI Bot—as a technology extension of the firm.',
    },
];

const AboutTimeline = () => {
    return (
        <section className="mt-12" aria-labelledby="about-timeline-heading">
            <h2 id="about-timeline-heading" className="font-heading text-xl font-semibold text-text-white sm:text-2xl">
                History &amp; growth journey
            </h2>
            <ol className="relative mt-8 space-y-8 border-l border-border pl-6 sm:pl-8">
                {STEPS.map(({ period, title, detail }) => (
                    <li key={period} className="relative">
                        <span
                            className="absolute -left-[calc(0.5rem+1px)] top-1.5 flex h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background bg-primary-green sm:-left-[calc(1rem+1px)]"
                            aria-hidden
                        />
                        <p className="text-sm font-semibold uppercase tracking-wider text-accent-blue">{period}</p>
                        <p className="mt-1 font-medium text-text-white">{title}</p>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary">{detail}</p>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default AboutTimeline;
