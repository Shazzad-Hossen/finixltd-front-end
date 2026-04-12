import React from 'react';
import { PageHeading, PageShell } from '../components/shared/PageShell';
import DirectorsList from '../components/directors/DirectorsList';

const Directors = () => {
    return (
        <PageShell>
            <PageHeading
                eyebrow="Governance"
                title="Leadership &"
                gradientLastWord="directors"
                description="Director profiles are provided to support transparency. Information is presented in a concise, professional format."
            />
            <DirectorsList />
        </PageShell>
    );
};

export default Directors;
