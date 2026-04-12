import React from 'react';
import { Link } from 'react-router';

const FOOTER_LINKS = {
    Company: [
        { to: '/about', label: 'About' },
        { to: '/company-details', label: 'Company details' },
        { to: '/directors', label: 'Directors' },
    ],
    Services: [
        { to: '/services', label: 'Services' },
        { to: '/global-expansion', label: 'Global expansion' },
        { to: '/finix-ai-bot', label: 'Finix AI Bot' },
    ],
    Legal: [
        { to: '/compliance', label: 'Compliance & legal' },
        { to: '/compliance#terms', label: 'Terms of use' },
        { to: '/compliance#privacy', label: 'Privacy policy' },
        { to: '/compliance#risk', label: 'Risk disclosure' },
    ],
};

const Footer = () => {
    return (
        <footer className="border-t border-border bg-surface/80 light:bg-surface/90">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
                    <div className="sm:col-span-2 lg:col-span-3">
                        <Link
                            to="/"
                            className="inline-block font-heading text-lg font-semibold text-transparent bg-clip-text bg-primary-gradient"
                        >
                            FINIX LTD
                        </Link>
                        <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-secondary">
                            UK Registered Company · Established in 2017 · Corporate financial expertise.
                        </p>
                    </div>
                    {Object.entries(FOOTER_LINKS).map(([title, links]) => (
                        <div key={title} className="lg:col-span-2">
                            <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">{title}</p>
                            <ul className="mt-4 space-y-2 text-sm">
                                {links.map(({ to, label }) => (
                                    <li key={to + label}>
                                        <Link
                                            to={to}
                                            className="text-text-secondary transition hover:text-accent-blue"
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="sm:col-span-2 lg:col-span-3">
                        <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">Contact</p>
                        <address className="mt-4 space-y-2 not-italic text-sm text-text-secondary">
                            <p>
                                30 Edison Court, Warple Way
                                <br />
                                London, W3 7HJ, UK
                            </p>
                            <a
                                href="mailto:support@finixltd.uk"
                                className="inline-block font-medium text-accent-blue hover:text-primary-green"
                            >
                                support@finixltd.uk
                            </a>
                            <p className="pt-2">
                                <Link to="/contact" className="font-medium text-accent-blue hover:text-primary-green">
                                    Contact form →
                                </Link>
                            </p>
                        </address>
                    </div>
                </div>
                <div className="mt-10 flex flex-col gap-2 border-t border-border pt-8 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} FINIX LTD. All rights reserved.</p>
                    <p>Companies House no. 10556457 · Active company</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
