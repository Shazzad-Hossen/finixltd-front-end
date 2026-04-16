import React from 'react';
import { PageHeading, PageShell } from '../components/shared/PageShell';

const SicAccountingAuditing = () => {
    return (
        <PageShell>
            <PageHeading
                eyebrow="Nature of business"
                title="SIC 69201"
                gradientLastWord="Accounting and auditing activities"
                description="This SIC category covers accounting and auditing activities delivered with a focus on compliance, reporting quality, and decision-ready financial information."
            />
            <div className="max-w-3xl space-y-6 text-sm leading-relaxed text-text-secondary sm:text-base">
                <p>
                    This SIC code is listed in the UK Standard Industrial Classification (SIC 2007) and is commonly used
                    when a company carries out professional accounting and auditing work.
                </p>

                <section>
                    <h2 className="mb-2 font-heading text-lg font-semibold text-text-white">What this code covers</h2>
                    <ul className="list-disc space-y-1 pl-5">
                        <li>Preparation and presentation of accounts.</li>
                        <li>Audit-related review and assurance-style activities.</li>
                        <li>Financial statement and reporting support for businesses.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="mb-2 font-heading text-lg font-semibold text-text-white">How FINIX applies it</h2>
                    <p>
                        FINIX LTD uses this category to describe accounting and auditing service lines that support
                        transparent reporting, better controls, and decision-ready financial information.
                    </p>
                </section>

                <section className="rounded-xl border border-border bg-surface/40 p-4">
                    <h2 className="mb-2 font-heading text-base font-semibold text-text-white">Official source</h2>
                    <p>
                        UK SIC descriptions are published by GOV.UK/ONS and used by Companies House filings.
                    </p>
                    <a
                        href="https://resources.companieshouse.gov.uk/sic/"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-block font-medium text-accent-blue hover:underline"
                    >
                        View SIC code guidance on GOV.UK resources
                    </a>
                </section>
            </div>
        </PageShell>
    );
};

export default SicAccountingAuditing;
