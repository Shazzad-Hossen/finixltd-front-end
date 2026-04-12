import React from 'react';

export const PageShell = ({ children, className = '' }) => (
    <div className={`mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 ${className}`}>{children}</div>
);

export const PageHeading = ({ eyebrow, title, gradientLastWord, description }) => (
    <header className="mb-10 max-w-3xl">
        {eyebrow ? (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">{eyebrow}</p>
        ) : null}
        <h1 className="font-heading text-3xl font-semibold tracking-tight text-text-white sm:text-4xl">
            {gradientLastWord ? (
                <>
                    {title}{' '}
                    <span className="bg-primary-gradient bg-clip-text text-transparent">{gradientLastWord}</span>
                </>
            ) : (
                title
            )}
        </h1>
        {description ? <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">{description}</p> : null}
    </header>
);
