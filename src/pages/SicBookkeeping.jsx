import React from 'react';
import { PageHeading, PageShell } from '../components/shared/PageShell';

const SicBookkeeping = () => {
    return (
        <PageShell>
            <PageHeading
                eyebrow="Nature of business"
                title="SIC 69202"
                gradientLastWord="Bookkeeping activities"
                description="This SIC category focuses on day-to-day bookkeeping operations that support accurate records, reporting consistency, and healthy financial controls."
            />
            <div className="max-w-3xl space-y-6 text-sm leading-relaxed text-text-secondary sm:text-base">
                <p>
                    SIC 69202 is used in the UK SIC 2007 list for businesses whose primary work includes bookkeeping
                    activities and related record maintenance.
                </p>

                <section>
                    <h2 className="mb-2 font-heading text-lg font-semibold text-text-white">What this code covers</h2>
                    <ul className="list-disc space-y-1 pl-5">
                        <li>Routine transaction recording and ledger upkeep.</li>
                        <li>Bookkeeping records that support accounting outputs.</li>
                        <li>Day-to-day financial record organisation and accuracy.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="mb-2 font-heading text-lg font-semibold text-text-white">How FINIX applies it</h2>
                    <p>
                        FINIX LTD uses this category for bookkeeping-focused services that improve record quality, reporting
                        consistency, and internal finance process discipline.
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

export default SicBookkeeping;
