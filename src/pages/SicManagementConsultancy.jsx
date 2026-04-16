import React from 'react';
import { PageHeading, PageShell } from '../components/shared/PageShell';

const SicManagementConsultancy = () => {
    return (
        <PageShell>
            <PageHeading
                eyebrow="Nature of business"
                title="SIC 70229"
                gradientLastWord="Management consultancy activities other than financial management"
                description="This SIC category covers broader management consultancy services outside direct financial management activities."
            />
            <div className="max-w-3xl space-y-6 text-sm leading-relaxed text-text-secondary sm:text-base">
                <p>
                    SIC 70229 is part of the UK SIC 2007 framework and is generally used for management consultancy
                    activities that are outside direct financial management.
                </p>

                <section>
                    <h2 className="mb-2 font-heading text-lg font-semibold text-text-white">What this code covers</h2>
                    <ul className="list-disc space-y-1 pl-5">
                        <li>General management consultancy and business advisory activity.</li>
                        <li>Operational, strategic, and organisational improvement work.</li>
                        <li>Consultancy assignments not classified as financial management.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="mb-2 font-heading text-lg font-semibold text-text-white">How FINIX applies it</h2>
                    <p>
                        FINIX LTD uses this code for broader consultancy services that support business strategy,
                        implementation, and operational effectiveness.
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

export default SicManagementConsultancy;
