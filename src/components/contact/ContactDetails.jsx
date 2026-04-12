import React from 'react';

const ContactDetails = () => {
    return (
        <div className="rounded-2xl border border-border bg-surface/60 p-6 light:bg-white/90 sm:p-8">
            <h2 className="font-heading text-lg font-semibold text-text-white">UK office</h2>
            <address className="mt-4 not-italic text-sm leading-relaxed text-text-secondary">
                FINIX LTD
                <br />
                30 Edison Court, Warple Way
                <br />
                London, W3 7HJ
                <br />
                United Kingdom
            </address>
            <div className="mt-6 border-t border-border pt-6">
                <p className="text-sm text-text-secondary">Email support</p>
                <a
                    href="mailto:support@finixltd.uk"
                    className="mt-1 inline-block font-medium text-accent-blue hover:text-primary-green"
                >
                    support@finixltd.uk
                </a>
            </div>
            <p className="mt-6 text-xs text-text-secondary">
                UK Registered Company · Established in 2017 · Corporate financial expertise
            </p>
        </div>
    );
};

export default ContactDetails;
