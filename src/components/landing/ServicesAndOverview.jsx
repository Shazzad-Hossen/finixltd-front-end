import React from 'react';
import { Link } from 'react-router';
import {
    IoArrowForward,
    IoCalculatorOutline,
    IoChatbubbleEllipsesOutline,
    IoDocumentTextOutline,
    IoStatsChartOutline,
} from 'react-icons/io5';

const SERVICES = [
    {
        icon: IoStatsChartOutline,
        title: 'Financial Management',
        description:
            'Structured financial planning, reporting, and ongoing management support for sustainable operations.',
    },
    {
        icon: IoDocumentTextOutline,
        title: 'Accounting & Auditing',
        description:
            'Professional accounting and auditing aligned with transparency, compliance, and clear record-keeping.',
    },
    {
        icon: IoCalculatorOutline,
        title: 'Bookkeeping',
        description:
            'Accurate day-to-day bookkeeping so your financial position stays organised and up to date.',
    },
    {
        icon: IoChatbubbleEllipsesOutline,
        title: 'Business Consultancy',
        description:
            'Practical advisory on financial and business decisions to support measured, long-term growth.',
    },
];

const ServicesAndOverview = () => {
    return (
        <section
            className="border-b border-border bg-surface/30 backdrop-blur-sm light:bg-surface/60"
            aria-labelledby="services-overview-heading"
        >
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
                    What we deliver
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <h2
                        id="services-overview-heading"
                        className="font-heading text-2xl font-semibold tracking-tight text-text-white sm:text-3xl"
                    >
                        Services{' '}
                        <span className="bg-primary-gradient bg-clip-text text-transparent">overview</span>
                    </h2>
                    <p className="max-w-xl text-sm leading-relaxed text-text-secondary sm:text-right">
                        Core corporate finance capabilities offered with a professional, compliance-first approach.
                    </p>
                </div>

                <ul className="mt-10 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                    {SERVICES.map(({ icon: Icon, title, description }) => (
                        <li key={title}>
                            <article className="group flex h-full flex-col rounded-2xl border border-border bg-background/70 p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-accent-blue hover:shadow-md hover:shadow-black/10 light:bg-white/80 light:hover:border-accent-blue light:hover:shadow-black/[0.06]">
                                <div
                                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface/90 text-accent-blue transition group-hover:border-primary-green/35 group-hover:text-primary-green"
                                    aria-hidden
                                >
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="font-heading text-lg font-semibold text-text-white">{title}</h3>
                                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                                    {description}
                                </p>
                            </article>
                        </li>
                    ))}
                </ul>

                <Link
                    to="/services"
                    className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-accent-blue transition hover:gap-3 hover:text-primary-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue"
                >
                    View services detail
                    <IoArrowForward className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
            </div>
        </section>
    );
};

export default ServicesAndOverview;
