import React from 'react';
import Hero from '../components/landing/Hero';
import TrustHighlights from '../components/landing/TrustHighlights';
import AboutSnapshot from '../components/landing/AboutSnapshot';
import ServicesAndOverview from '../components/landing/ServicesAndOverview';
import NatureOfBusiness from '../components/landing/NatureOfBusiness';

import CTA from '../components/landing/CTA';

const Landing = () => {
    return (
        <>
        <Hero />
        <TrustHighlights />
        <AboutSnapshot />
        <ServicesAndOverview />
        <NatureOfBusiness />
        <CTA />
        </>
    );
};

export default Landing;