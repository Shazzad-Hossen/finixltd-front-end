import React from 'react';
import { Link } from 'react-router';
import { IoCheckmarkCircle, IoGlobeOutline, IoRibbonOutline, IoShieldCheckmark } from 'react-icons/io5';

const HERO_BG =
    'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=2400&q=80';

const TRUST_ITEMS = [
    { icon: IoShieldCheckmark, label: 'Registered in United Kingdom' },
    { icon: IoCheckmarkCircle, label: 'Active Company Status' },
    { icon: IoRibbonOutline, label: 'Serving since 2017' },
];

const Hero = () => {
    return (
        <section
            className="relative isolate min-h-[min(92vh,880px)] w-full overflow-hidden border-b border-white/10 bg-[#050912] text-white [color-scheme:dark] light:border-border light:bg-background light:text-text-white light:[color-scheme:light]"
            aria-labelledby="hero-heading"
        >
            <div
                className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${HERO_BG})` }}
                role="presentation"
            />
            <div
                className="absolute inset-0 bg-linear-to-b from-[#050912]/94 via-[#0B0F1A]/78 to-[#050912]/92 light:from-[#f0f3f980] light:via-[#eef1f8FF]/96 light:to-[#f4f6fc80]"
                role="presentation"
            />
            <div
                className="pointer-events-none absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent-blue/10 blur-3xl light:opacity-35"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute -right-1/4 bottom-0 h-80 w-80 rounded-full bg-primary-green/10 blur-3xl light:opacity-35"
                aria-hidden
            />

            <div className="relative mx-auto flex min-h-[min(92vh,880px)] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 sm:py-28">
                <div
                    className="max-w-3xl [animation:hero-enter_0.85s_ease-out_both]"
                    style={{ animationDelay: '40ms' }}
                >
                    <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-300 backdrop-blur-md light:border-border light:bg-white/95 light:text-text-secondary light:shadow-sm">
                        <IoGlobeOutline className="h-3.5 w-3.5 text-accent-blue" aria-hidden />
                        Trusted UK-based financial company
                    </p>

                    <h1
                        id="hero-heading"
                        className="font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl light:text-text-white"
                    >
                        <span className="block bg-primary-gradient bg-clip-text text-transparent drop-shadow-[0_0_36px_rgba(56,227,199,0.22)] light:drop-shadow-[0_5px_2px_rgba(11,15,26,0.08)] light:[-webkit-text-stroke:0.25px_#0B0F1A33] light:[paint-order:stroke_fill]">
                            FINIX LTD
                        </span>
                        <span className="mt-2 block text-2xl font-medium text-slate-300 sm:text-3xl lg:text-[2rem] light:text-text-secondary">
                            Corporate Financial Management Since 2017
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg light:text-text-secondary">
                        A UK-registered financial company delivering professional accounting, consulting, and
                        next-generation fintech solutions.
                    </p>

                    <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
                        {TRUST_ITEMS.map(({ icon: Icon, label }) => (
                            <li key={label} className="flex items-center gap-2 text-sm">
                                <Icon className="h-5 w-5 shrink-0 text-accent-blue" aria-hidden />
                                <span className="text-white/90 light:text-text-white">{label}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                        <Link
                            to="/about"
                            className="inline-flex items-center justify-center rounded-full bg-primary-gradient px-7 py-3 text-sm font-semibold text-[#0B0F1A] shadow-lg shadow-primary-green/25 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue"
                        >
                            Explore Company
                        </Link>
                        <Link
                            to="/#global-expansion"
                            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-accent-blue hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue light:border-border light:bg-white light:text-text-white light:shadow-md light:backdrop-blur-none light:hover:border-accent-blue light:hover:bg-surface"
                        >
                            View Global Expansion
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
