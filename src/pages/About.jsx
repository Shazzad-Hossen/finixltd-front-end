import React from 'react';

const About = () => {
    return (
        <section className="mx-auto max-w-6xl px-6 py-10">
            <div className="rounded-3xl border border-border bg-surface p-8">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-text-secondary">About</p>
                <h1 className="mb-4 text-4xl font-bold text-text-white">Built to make finance feel clear</h1>
                <p className="max-w-2xl text-text-secondary">
                    This is a placeholder About page using the same Tailwind theme tokens, so the header navigation
                    has a real destination and the design stays consistent across the app.
                </p>
            </div>
        </section>
    );
};

export default About;