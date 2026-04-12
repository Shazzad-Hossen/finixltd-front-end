import React from 'react';
import ServiceSectionBlock from './ServiceSectionBlock';

const ServicesCorporateGrid = () => {
    return (
        <div className="grid gap-6 lg:grid-cols-2">
            <ServiceSectionBlock title="Corporate finance services">
                <p>
                    FINIX LTD supports organisations with structured finance workflows: planning cycles, management
                    information, and governance-friendly documentation—without speculative or guaranteed-outcome
                    language.
                </p>
            </ServiceSectionBlock>
            <ServiceSectionBlock title="Financial management solutions">
                <p>
                    We provide structured financial planning, analysis, and long-term management solutions suited to
                    operating companies that need clarity and consistency across reporting periods.
                </p>
            </ServiceSectionBlock>
            <ServiceSectionBlock title="Financial management">
                <p>
                    Hands-on support for budgets, cash visibility, and financial controls, aligned with UK corporate
                    expectations and your internal policies.
                </p>
            </ServiceSectionBlock>
            <ServiceSectionBlock title="Accounting &amp; auditing">
                <p>
                    Professional accounting systems and auditing services to support transparency and compliance. Scope
                    and timelines are agreed explicitly for each engagement.
                </p>
            </ServiceSectionBlock>
            <ServiceSectionBlock title="Bookkeeping">
                <p>
                    Accurate record keeping for businesses and financial tracking, designed to keep ledgers orderly and
                    audit-ready.
                </p>
            </ServiceSectionBlock>
            <ServiceSectionBlock title="Finance &amp; business consulting">
                <p>
                    Strategic advisory for business growth and financial optimisation—focused on analysis, options, and
                    execution discipline rather than promises of specific returns.
                </p>
            </ServiceSectionBlock>
        </div>
    );
};

export default ServicesCorporateGrid;
