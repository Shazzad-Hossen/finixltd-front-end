import React from 'react';
import { PageHeading, PageShell } from '../components/shared/PageShell';
import GlobalExpansionNarrative from '../components/global-expansion/GlobalExpansionNarrative';

const GlobalExpansion = () => {
    return (
        <PageShell>
            <PageHeading
                eyebrow="Strategy"
                title="Global"
                gradientLastWord="expansion"
                description="How FINIX LTD approaches international reach and technology—corporate narrative, not promotional recruitment copy."
            />
            <GlobalExpansionNarrative />
        </PageShell>
    );
};

export default GlobalExpansion;
