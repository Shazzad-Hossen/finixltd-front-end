import React from 'react';

const Contact = () => {
    return (
        <section className="mx-auto max-w-6xl px-6 py-10">
            <div className="grid gap-6 rounded-3xl border border-border bg-surface p-8 md:grid-cols-2 md:items-center">
                <div>
                    <p className="mb-3 text-sm uppercase tracking-[0.2em] text-text-secondary">Contact</p>
                    <h1 className="mb-4 text-4xl font-bold text-text-white">Talk to our team</h1>
                    <p className="max-w-xl text-text-secondary">
                        This placeholder Contact page gives the header link a working destination and keeps the same
                        visual system used on the landing page.
                    </p>
                </div>

                <div className="space-y-4 rounded-2xl border border-border bg-background p-6">
                    <div>
                        <p className="text-sm text-text-secondary">Email</p>
                        <p className="text-lg font-medium text-text-white">hello@finixltd.uk</p>
                    </div>
                    <div>
                        <p className="text-sm text-text-secondary">Phone</p>
                        <p className="text-lg font-medium text-text-white">+44 20 0000 0000</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;