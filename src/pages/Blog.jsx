import React from 'react';

const Blog = () => {
    return (
        <section className="mx-auto max-w-6xl px-6 py-10">
            <div className="rounded-3xl border border-border bg-surface p-8">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-text-secondary">Blog</p>
                <h1 className="mb-4 text-4xl font-bold text-text-white">Insights, updates, and product notes</h1>
                <p className="max-w-2xl text-text-secondary">
                    This placeholder Blog page completes the header navigation and gives you a place to expand into
                    articles or announcements later.
                </p>
            </div>
        </section>
    );
};

export default Blog;