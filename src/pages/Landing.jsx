import React from 'react';
import Hero from '../components/landing/Hero';
import TrustHighlights from '../components/landing/TrustHighlights';
import AboutSnapshot from '../components/landing/AboutSnapshot';
import ServicesAndOverview from '../components/landing/ServicesAndOverview';
import AIExpansionSection from '../components/landing/AIExpansionSection';
import CTA from '../components/landing/CTA';

const Landing = () => {
    return (
        <>
        <Hero />
        <TrustHighlights />
        <AboutSnapshot />
        <ServicesAndOverview />
        <AIExpansionSection />
        <CTA />
        </>
    );
};

export default Landing;