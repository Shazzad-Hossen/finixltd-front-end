import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-border bg-surface/70">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-text-secondary sm:flex-row sm:items-center sm:justify-between">
                <p>Built with Tailwind colors for both light and dark themes.</p>
                <p>Finix Ltd UI concept</p>
            </div>
        </footer>
    );
};

export default Footer;