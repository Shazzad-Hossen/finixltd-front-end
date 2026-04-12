import React from 'react';
import { Link } from 'react-router';
import { IoArrowForward, IoHardwareChipOutline } from 'react-icons/io5';

const AIExpansionSection = () => {
    return (
        <section
            id="global-expansion"
            className="scroll-mt-24 border-b border-border bg-background"
            aria-labelledby="ai-expansion-heading"
        >
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,340px)] lg:items-center lg:gap-12">
                    <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
                            Global expansion
                        </p>
                        <h2
                            id="ai-expansion-heading"
                            className="font-heading text-2xl font-semibold tracking-tight text-text-white sm:text-3xl"
                        >
                            AI-driven fintech &{' '}
                            <span className="bg-primary-gradient bg-clip-text text-transparent">Finix AI Bot</span>
                        </h2>
                        <p className="mt-3 text-base font-medium text-accent-blue sm:text-lg">
                            Our next-generation fintech innovation
                        </p>
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
                            As part of its forward-looking strategy, FINIX LTD has expanded into financial technology
                            through advanced AI-driven systems, creating new global opportunities.{' '}
                            <span className="text-text-white/90">
                                Finix AI Bot is introduced below as a brief preview of that direction.
                            </span>
                        </p>
                        <Link
                            to="/global-expansion"
                            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-blue transition hover:gap-3 hover:text-primary-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue"
                        >
                            Explore global strategy &amp; innovation
                            <IoArrowForward className="h-4 w-4 shrink-0" aria-hidden />
                        </Link>
                    </div>

                    <aside
                        className="relative overflow-hidden rounded-2xl border border-border bg-surface/80 p-6 shadow-sm light:bg-white/90"
                        aria-label="Finix AI Bot preview"
                    >
                        <div
                            className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary-green/15 blur-2xl"
                            aria-hidden
                        />
                        <div
                            className="pointer-events-none absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-accent-blue/15 blur-2xl"
                            aria-hidden
                        />
                        <div className="relative flex flex-col items-center text-center">
                            <span
                                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background/80 text-accent-blue"
                                aria-hidden
                            >
                                <IoHardwareChipOutline className="h-8 w-8" />
                            </span>
                            <p className="mt-4 font-heading text-lg font-semibold text-text-white">Finix AI Bot</p>
                            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                                Technology-driven fintech extension, aligned with FINIX LTD&apos;s corporate standards.
                            </p>
                            <p className="mt-4 text-xs font-medium uppercase tracking-wider text-text-secondary">
                                Preview
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default AIExpansionSection;
