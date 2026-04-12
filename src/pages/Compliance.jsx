import React from 'react';
import { PageHeading, PageShell } from '../components/shared/PageShell';
import ComplianceArticles from '../components/compliance/ComplianceArticles';

const Compliance = () => {
    return (
        <PageShell>
            <PageHeading
                eyebrow="Governance"
                title="Compliance &"
                gradientLastWord="legal"
                description="High-level notices for website use, privacy, and risk. Formal legal documents should be provided by your counsel where required."
            />
            <nav className="mb-8 flex flex-wrap gap-3 text-sm" aria-label="On this page">
                <a href="#terms" className="text-accent-blue hover:underline">
                    Terms
                </a>
                <span className="text-text-secondary" aria-hidden>
                    ·
                </span>
                <a href="#privacy" className="text-accent-blue hover:underline">
                    Privacy
                </a>
                <span className="text-text-secondary" aria-hidden>
                    ·
                </span>
                <a href="#risk" className="text-accent-blue hover:underline">
                    Risk disclosure
                </a>
            </nav>
            <ComplianceArticles />
        </PageShell>
    );
};

export default Compliance;
