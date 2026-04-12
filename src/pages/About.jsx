import React from 'react';
import { PageHeading, PageShell } from '../components/shared/PageShell';
import AboutIntro from '../components/about/AboutIntro';
import AboutTimeline from '../components/about/AboutTimeline';
import AboutMissionVision from '../components/about/AboutMissionVision';

const About = () => {
    return (
        <PageShell>
            <PageHeading
                eyebrow="FINIX LTD"
                title="About"
                gradientLastWord="company"
                description="Full company history, growth journey, and corporate mission—professional tone, no promotional hype."
            />
            <AboutIntro />
            <AboutTimeline />
            <AboutMissionVision />
        </PageShell>
    );
};

export default About;
