import React from 'react';

const AdminBlogs = () => {
    return (
        <div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                    <h1 className="font-heading text-xl font-semibold tracking-tight text-text-white">Blogs</h1>
                    <p className="mt-2 text-sm text-text-secondary">
                        Manage blog posts from this area when your API is ready.
                    </p>
                </div>
                <button
                    type="button"
                    className="shrink-0 self-end rounded-full bg-primary-gradient px-5 py-2.5 text-sm font-semibold text-[#0B0F1A] shadow-lg shadow-primary-green/20 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue sm:self-auto"
                >
                    Create
                </button>
            </div>
        </div>
    );
};

export default AdminBlogs;
