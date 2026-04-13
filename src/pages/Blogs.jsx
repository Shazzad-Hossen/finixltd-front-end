import React, { useEffect, useState } from 'react';
import { PageHeading, PageShell } from '../components/shared/PageShell';
import Loading from '../components/shared/Loading';
import { api } from '../utils/apicaller';
import { useNavigate } from 'react-router';

const BLOGS_ENDPOINT = '/api/blogs';
const PAGE_LIMIT = 9;

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageInput, setPageInput] = useState('1');
    const [hasPrevPage, setHasPrevPage] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);
    const navigate = useNavigate();

    const loadBlogs = async (targetPage = 1) => {
        setLoading(true);
        setError('');
        try {
            const res = await api.get(`${BLOGS_ENDPOINT}?page=${targetPage}&limit=${PAGE_LIMIT}`);
            const payload = res?.data ?? res ?? {};
            const docs = Array.isArray(payload?.docs) ? payload.docs : [];
            const currentPage = Number(payload?.page) || targetPage;
            const computedTotalPages = Math.max(1, Number(payload?.totalPages) || 1);

            setBlogs(docs);
            setPage(currentPage);
            setTotalPages(computedTotalPages);
            setPageInput(String(currentPage));
            setHasPrevPage(Boolean(payload?.hasPrevPage ?? currentPage > 1));
            setHasNextPage(Boolean(payload?.hasNextPage ?? currentPage < computedTotalPages));
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load blogs');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadBlogs(1);
    }, []);

    const handlePrevPage = () => {
        if (loading || !hasPrevPage) return;
        loadBlogs(page - 1);
    };

    const handleNextPage = () => {
        if (loading || !hasNextPage) return;
        loadBlogs(page + 1);
    };

    const handleGoToPage = () => {
        const requested = Number.parseInt(pageInput, 10);
        if (Number.isNaN(requested)) return;
        const clampedPage = Math.min(Math.max(requested, 1), totalPages);
        loadBlogs(clampedPage);
    };

    const formatDateTime = (value) => {
        if (!value) return 'N/A';
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return 'N/A';
        return new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        }).format(date);
    };

    const truncate = (text, max = 140) => {
        const source = String(text ?? '').trim();
        if (!source) return 'No content available.';
        if (source.length <= max) return source;
        return `${source.slice(0, max).trimEnd()}...`;
    };

    return (
        <PageShell>
            <PageHeading
                eyebrow="Insights"
                title="Blog"
                description="Company news and articles from FINIX LTD."
            />

            {loading ? <Loading message="Loading blog posts..." /> : null}

            {!loading && error ? (
                <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200 light:text-red-700">
                    {error}
                </p>
            ) : null}

            {!loading && !error ? (
                <>
                    {blogs.length ? (
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {blogs.map((blog) => (
                                <article
                                    key={blog?._id ?? blog?.id ?? blog?.slug}
                                    className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm cursor-pointer"
                                    onClick={() => navigate(`/blogs/${blog?._id ?? blog?.id}`)}
                                >
                                    <div className="aspect-[16/9] w-full overflow-hidden bg-background">
                                        {blog?.thumbnail || blog?.thumbnailUrl ? (
                                            <img
                                                src={blog.thumbnail || blog.thumbnailUrl}
                                                alt={blog?.title || 'Blog thumbnail'}
                                                className="h-full w-full object-cover"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center text-sm text-text-secondary">
                                                No image
                                            </div>
                                        )}
                                    </div>
                                    <div className="space-y-2 p-4">
                                        <h2 className="font-heading text-lg font-semibold leading-tight text-text-white">
                                            {blog?.title ?? 'Untitled blog'}
                                        </h2>
                                        <p className="text-xs text-text-secondary">
                                            {formatDateTime(blog?.createdAt ?? blog?.created_at)}
                                        </p>
                                        <p className="text-sm leading-6 text-text-secondary">
                                            {truncate(blog?.shortDescription || blog?.content, 145)}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <p className="rounded-lg border border-border bg-surface px-4 py-8 text-center text-sm text-text-secondary">
                            No published blogs yet.
                        </p>
                    )}

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-surface px-3 py-3 sm:px-4">
                        <p className="text-sm text-text-secondary">
                            Page <span className="font-semibold text-text-white">{page}</span> of{' '}
                            <span className="font-semibold text-text-white">{totalPages}</span>
                        </p>

                        <div className="flex flex-wrap items-center gap-2">
                            <button
                                type="button"
                                onClick={handlePrevPage}
                                disabled={loading || !hasPrevPage}
                                className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-text-secondary transition hover:border-accent-blue hover:text-text-white disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Prev
                            </button>
                            <button
                                type="button"
                                onClick={handleNextPage}
                                disabled={loading || !hasNextPage}
                                className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-text-secondary transition hover:border-accent-blue hover:text-text-white disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Next
                            </button>
                            <input
                                type="number"
                                min="1"
                                max={totalPages}
                                value={pageInput}
                                onChange={(e) => setPageInput(e.target.value)}
                                className="w-20 rounded-lg border border-border bg-background px-2 py-1.5 text-sm text-text-white outline-none transition focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
                                aria-label="Page number"
                            />
                            <button
                                type="button"
                                onClick={handleGoToPage}
                                disabled={loading}
                                className="rounded-lg bg-primary-gradient px-3 py-1.5 text-sm font-semibold text-[#0B0F1A] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Go
                            </button>
                        </div>
                    </div>
                </>
            ) : null}
        </PageShell>
    );
};

export default Blogs;
