import React from 'react';

const ServiceSectionBlock = ({ title, children }) => {
    return (
        <section className="rounded-2xl border border-border bg-surface/50 p-6 light:bg-white/90 sm:p-8">
            <h2 className="font-heading text-lg font-semibold text-text-white sm:text-xl">{title}</h2>
            <div className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">{children}</div>
        </section>
    );
};

export default ServiceSectionBlock;
