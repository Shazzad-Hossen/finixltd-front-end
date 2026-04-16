import React from 'react';
import { PageHeading, PageShell } from '../components/shared/PageShell';

const SicFinancialManagement = () => {
    return (
        <PageShell>
            <PageHeading
                eyebrow="Nature of business"
                title="SIC 70221"
                gradientLastWord="Financial management"
                description="This SIC category covers financial management activities that help businesses plan, monitor, and improve financial performance."
            />
            <div className="max-w-3xl space-y-6 text-sm leading-relaxed text-text-secondary sm:text-base">
                <p>
                    SIC 70221 is part of the UK SIC 2007 framework and is generally used for companies delivering financial
                    management consultancy and advisory services.
                </p>

                <section>
                    <h2 className="mb-2 font-heading text-lg font-semibold text-text-white">What this code covers</h2>
                    <ul className="list-disc space-y-1 pl-5">
                        <li>Financial planning, budgeting, and performance management support.</li>
                        <li>Cashflow and management information review for better control.</li>
                        <li>Financial decision support for business leadership teams.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="mb-2 font-heading text-lg font-semibold text-text-white">How FINIX applies it</h2>
                    <p>
                        FINIX LTD uses this category for services focused on improving financial governance, management
                        reporting, and practical decision-making across corporate operations.
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

export default SicFinancialManagement;
