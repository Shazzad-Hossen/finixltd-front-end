import React from 'react';
import { PageHeading, PageShell } from '../components/shared/PageShell';

const Blogs = () => {
    return (
        <PageShell>
            <PageHeading
                eyebrow="Insights"
                title="Blog"
                description="Company news and articles will appear here. This section is ready for your content strategy."
            />
            <p className="max-w-2xl text-text-secondary">
                There are no published posts yet. Replace this page with your CMS or markdown-driven blog when ready.
            </p>
        </PageShell>
    );
};

export default Blogs;
