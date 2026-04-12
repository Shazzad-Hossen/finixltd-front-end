import React from 'react';

const DirectorCard = ({ name, role, nationality, appointed }) => {
    const initials = name
        .split(' ')
        .map((p) => p[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

    return (
        <article className="flex flex-col rounded-2xl border border-border bg-surface/60 p-6 light:bg-white/90 sm:flex-row sm:gap-6">
            <div
                className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-primary-green/25 to-accent-blue/25 font-heading text-xl font-semibold text-text-white"
                aria-hidden
            >
                {initials}
            </div>
            <div className="mt-4 min-w-0 sm:mt-0">
                <h2 className="font-heading text-xl font-semibold text-text-white">{name}</h2>
                <p className="mt-1 text-sm font-medium text-accent-blue">{role}</p>
                <dl className="mt-4 space-y-2 text-sm">
                    <div className="flex flex-wrap gap-x-2">
                        <dt className="text-text-secondary">Nationality</dt>
                        <dd className="font-medium text-text-white">{nationality}</dd>
                    </div>
                    <div className="flex flex-wrap gap-x-2">
                        <dt className="text-text-secondary">Appointed</dt>
                        <dd className="font-medium text-text-white">{appointed}</dd>
                    </div>
                </dl>
            </div>
        </article>
    );
};

export default DirectorCard;
