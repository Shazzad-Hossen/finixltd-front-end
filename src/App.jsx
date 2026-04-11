import React from 'react';

const App = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 inline-block rounded-full border border-border bg-surface px-3 py-1 text-xs uppercase tracking-wider text-text-secondary">
            Dummy Layout
          </p>
          <h2 className="mb-4 text-4xl font-bold leading-tight text-text-white">
            Bold financial experiences with <span className="text-primary-gold">clarity</span> and speed
          </h2>
          <p className="mb-6 text-text-secondary">
            This sample section uses your custom Tailwind color tokens to demonstrate hierarchy, contrast, and brand direction.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-lg bg-primary-gold px-5 py-2.5 text-sm font-semibold text-background transition hover:brightness-105">
              Explore Services
            </button>
            <button className="rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text-white transition hover:border-accent-blue">
              Book a Demo
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6 shadow-xl shadow-black/20">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-text-secondary">Performance Snapshot</p>
            <span className="rounded-full bg-accent-blue/20 px-2.5 py-1 text-xs font-medium text-accent-blue">+12.4%</span>
          </div>
          <div className="space-y-4">
            <div>
              <p className="mb-1 text-xs text-text-secondary">Revenue</p>
              <div className="h-2 rounded-full bg-background">
                <div className="h-2 w-3/4 rounded-full bg-primary-gold" />
              </div>
            </div>
            <div>
              <p className="mb-1 text-xs text-text-secondary">Retention</p>
              <div className="h-2 rounded-full bg-background">
                <div className="h-2 w-2/3 rounded-full bg-accent-blue" />
              </div>
            </div>
            <div>
              <p className="mb-1 text-xs text-text-secondary">Satisfaction</p>
              <div className="h-2 rounded-full bg-background">
                <div className="h-2 w-5/6 rounded-full bg-text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          { title: 'Secure Infrastructure', tone: 'text-primary-gold' },
          { title: 'Smart Automation', tone: 'text-accent-blue' },
          { title: 'Human Support', tone: 'text-text-white' },
        ].map((item) => (
          <article key={item.title} className="rounded-xl border border-border bg-surface p-5">
            <h3 className={`mb-2 text-lg font-semibold ${item.tone}`}>{item.title}</h3>
            <p className="text-sm text-text-secondary">
              Placeholder copy to showcase card styling with your palette applied through Tailwind utility classes.
            </p>
          </article>
        ))}
      </section>
    </section>
  );
};

export default App;