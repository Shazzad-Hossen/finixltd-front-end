import React from 'react';

const AboutMissionVision = () => {
    return (
        <section className="mt-12 grid gap-6 sm:grid-cols-2" aria-labelledby="mission-heading">
            <div className="rounded-2xl border border-border bg-background/50 p-6 light:bg-background">
                <h2 id="mission-heading" className="font-heading text-lg font-semibold text-text-white">
                    Mission
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    To provide reliable, professional, and sustainable financial solutions to businesses and
                    individuals.
                </p>
            </div>
            <div className="rounded-2xl border border-border bg-background/50 p-6 light:bg-background">
                <h2 className="font-heading text-lg font-semibold text-text-white">Vision</h2>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    To become a globally recognized financial and technology-driven organization.
                </p>
            </div>
            <div className="sm:col-span-2 rounded-2xl border border-border bg-surface/40 p-6 light:bg-white/80">
                <h2 className="font-heading text-lg font-semibold text-text-white">Values</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                    {['Transparency', 'Stability', 'Long-term growth', 'Professional integrity'].map((v) => (
                        <li
                            key={v}
                            className="rounded-full border border-border bg-background/60 px-3 py-1 text-sm text-text-secondary light:bg-surface"
                        >
                            {v}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default AboutMissionVision;
