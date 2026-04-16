import React from 'react';
import { Link } from 'react-router';
import { IoArrowForward } from 'react-icons/io5';

const SIC_ITEMS = [
    {
        code: '69201',
        title: 'Accounting and auditing activities',
        description:
            'Professional accounting and audit support to improve financial transparency, reporting quality, and compliance readiness.',
        link: '/sic-69201-accounting-auditing',
    },
    {
        code: '69202',
        title: 'Bookkeeping activities',
        description:
            'Reliable day-to-day bookkeeping processes that keep records accurate, organised, and aligned with operational needs.',
        link: '/sic-69202-bookkeeping',
    },
    {
        code: '70221',
        title: 'Financial management',
        description:
            'Structured financial management support covering planning, controls, and reporting for stable business growth.',
        link: '/sic-70221-financial-management',
    },
    {
        code: '70229',
        title: 'Management consultancy activities other than financial management',
        description:
            'Business consultancy support focused on strategy, operations, and decision-making beyond core financial management.',
        link: '/sic-70229-management-consultancy',
    },
];

const NatureOfBusiness = () => {
    return (
        <section className="border-b border-border bg-background/30" aria-labelledby="nature-of-business-heading">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
                    Company profile
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <h2 id="nature-of-business-heading" className="font-heading text-2xl font-semibold tracking-tight text-text-white sm:text-3xl">
                        Nature of business{' '}
                        <span className="bg-primary-gradient bg-clip-text text-transparent">(SIC)</span>
                    </h2>
                    <p className="max-w-xl text-sm leading-relaxed text-text-secondary sm:text-right">
                        Explore FINIX LTD activities by SIC code and learn more about each business area.
                    </p>
                </div>

                <ul className="mt-10 grid list-none grid-cols-1 gap-5 sm:grid-cols-2">
                    {SIC_ITEMS.map(({ code, title, description, link }) => (
                        <li key={code}>
                            <article className="flex h-full flex-col rounded-2xl border border-border bg-surface/50 p-6 light:bg-white/80">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary">
                                    SIC {code}
                                </p>
                                <h3 className="mt-2 font-heading text-lg font-semibold text-text-white">{title}</h3>
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">{description}</p>
                                <Link
                                    to={link}
                                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-blue transition hover:gap-3 hover:text-primary-green"
                                >
                                    Learn more
                                    <IoArrowForward className="h-4 w-4 shrink-0" aria-hidden />
                                </Link>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default NatureOfBusiness;
