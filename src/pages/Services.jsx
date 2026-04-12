import React from 'react';
import { PageHeading, PageShell } from '../components/shared/PageShell';
import ServicesCorporateGrid from '../components/services/ServicesCorporateGrid';

const Services = () => {
    return (
        <PageShell>
            <PageHeading
                eyebrow="What we offer"
                title="Corporate"
                gradientLastWord="services"
                description="Consultancy-style overview of FINIX LTD service lines. Specific scope is defined in each client engagement."
            />
            <ServicesCorporateGrid />
        </PageShell>
    );
};

export default Services;
