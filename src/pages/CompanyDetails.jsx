import React from 'react';
import { PageHeading, PageShell } from '../components/shared/PageShell';
import CompanyDetailsTable from '../components/company-details/CompanyDetailsTable';
import CompanyTrustBadges from '../components/company-details/CompanyTrustBadges';

const CompanyDetails = () => {
    return (
        <PageShell>
            <PageHeading
                eyebrow="Trust & registry"
                title="Company"
                gradientLastWord="details"
                description="Official company information is presented for transparency. Always verify filings via UK Companies House for authoritative records."
            />
            <CompanyDetailsTable />
            <CompanyTrustBadges />
        </PageShell>
    );
};

export default CompanyDetails;
