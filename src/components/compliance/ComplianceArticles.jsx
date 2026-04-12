import React from 'react';

const SECTIONS = [
    {
        id: 'terms',
        title: 'Terms of use',
        body: (
            <>
                <p>
                    This website provides general information about FINIX LTD and related initiatives. By using the site,
                    you agree not to rely on it as legal, tax, or investment advice. Engagements for professional
                    services require separate written agreements.
                </p>
                <p className="mt-3">
                    We may update these terms; continued use after changes constitutes acceptance. For service-specific
                    terms, refer to your contract or engagement letter.
                </p>
            </>
        ),
    },
    {
        id: 'privacy',
        title: 'Privacy policy',
        body: (
            <>
                <p>
                    We process personal data only where necessary to respond to enquiries, deliver contracted services,
                    or meet legal obligations. Data is handled with appropriate technical and organisational measures.
                </p>
                <p className="mt-3">
                    You may request access or correction of your personal data subject to applicable law. Contact details
                    are on the Contact page.
                </p>
            </>
        ),
    },
    {
        id: 'risk',
        title: 'Risk disclosure',
        body: (
            <>
                <p>
                    Financial and technology activities involve risk. Past performance is not a reliable indicator of
                    future results. No content on this site guarantees returns or eliminates the possibility of loss.
                </p>
                <p className="mt-3">
                    Products such as Finix AI Bot may involve market, operational, and technology risks. Users should
                    read all platform documentation and seek independent advice where appropriate.
                </p>
            </>
        ),
    },
];

const ComplianceArticles = () => {
    return (
        <div className="space-y-10">
            {SECTIONS.map(({ id, title, body }) => (
                <article
                    key={id}
                    id={id}
                    className="scroll-mt-28 rounded-2xl border border-border bg-surface/50 p-6 sm:p-8 light:bg-white/90"
                >
                    <h2 className="font-heading text-xl font-semibold text-text-white">{title}</h2>
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-text-secondary sm:text-base">{body}</div>
                </article>
            ))}
        </div>
    );
};

export default ComplianceArticles;
