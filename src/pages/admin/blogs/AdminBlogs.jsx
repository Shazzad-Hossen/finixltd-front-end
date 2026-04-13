import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Loading from '../../../components/shared/Loading';
import { api } from '../../../utils/apicaller';

const BLOGS_ENDPOINT = '/api/blogs';

const AdminBlogs = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageInput, setPageInput] = useState('1');
    const [hasPrevPage, setHasPrevPage] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [deletingId, setDeletingId] = useState('');
    const [blogToDelete, setBlogToDelete] = useState(null);

    const loadBlogs = async (targetPage = 1) => {
        setLoading(true);
        setError('');
        try {
            const res = await api.get(`${BLOGS_ENDPOINT}?page=${targetPage}&limit=10`);
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

    const handleGoToPage = () => {
        const requested = Number.parseInt(pageInput, 10);
        if (Number.isNaN(requested)) return;
        const clampedPage = Math.min(Math.max(requested, 1), totalPages);
        loadBlogs(clampedPage);
    };

    const handlePrevPage = () => {
        if (loading || !hasPrevPage) return;
        loadBlogs(page - 1);
    };

    const handleNextPage = () => {
        if (loading || !hasNextPage) return;
        loadBlogs(page + 1);
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

    const confirmDeleteBlog = async () => {
        const id = blogToDelete?._id ?? blogToDelete?.id;
        if (!id || deletingId) return;
        setDeletingId(id);
        setError('');
        try {
            await api.delete(`/api/blog/${id}`);
            const nextPage = blogs.length === 1 && page > 1 ? page - 1 : page;
            await loadBlogs(nextPage);
            setBlogToDelete(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to delete blog');
        } finally {
            setDeletingId('');
        }
    };

    return (
        <div className="space-y-5">
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
                    onClick={() => navigate('/time-admin/blogs/create')}
                >
                    Create
                </button>
            </div>

            {loading ? (
                <Loading message="Loading blogs..." size="sm" />
            ) : error ? (
                <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200 light:text-red-700">
                    {error}
                </p>
            ) : (
                <>
                    <div className="overflow-hidden rounded-2xl border border-border bg-surface">
                        {blogs.length ? (
                            <div className="divide-y divide-border">
                                {blogs.map((blog) => (
                                    <article
                                        key={blog?._id ?? blog?.id ?? blog?.slug}
                                        className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-[88px_minmax(0,1fr)] lg:grid-cols-[88px_minmax(0,1fr)_180px_220px] lg:items-center"
                                    >
                                        <div className="h-16 w-20 overflow-hidden rounded-lg border border-border bg-background">
                                            {blog?.thumbnail ? (
                                                <img
                                                    src={blog.thumbnail}
                                                    alt={blog?.title || 'Blog thumbnail'}
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-full w-full items-center justify-center text-[11px] text-text-secondary">
                                                    No image
                                                </div>
                                            )}
                                        </div>

                                        <div className="min-w-0">
                                            <h2 className="truncate font-heading text-base capitalize text-text-white/80">
                                                {blog?.title ?? 'Untitled blog'}
                                            </h2>
                                            <p className="mt-1 truncate text-sm text-text-secondary">
                                                {blog?.shortDescription || 'No short description'}
                                            </p>
                                        </div>

                                        <p className="text-sm text-text-secondary">
                                            {formatDateTime(blog?.createdAt ?? blog?.created_at)}
                                        </p>

                                        <div className="flex flex-wrap items-center gap-2">
                                            
                                            <button
                                                type="button"
                                                onClick={() => navigate(`${blog._id}`)}
                                                className="rounded-lg border border-border bg-background px-3 py-2 text-xs font-medium text-text-secondary transition hover:border-accent-blue hover:text-text-white"
                                            >
                                                View /Edit
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setBlogToDelete(blog)}
                                                disabled={Boolean(deletingId)}
                                                className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-200 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-60 light:text-red-700"
                                            >
                                                {deletingId === (blog?._id ?? blog?.id) ? 'Deleting...' : 'Delete'}
                                            </button>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <p className="px-4 py-8 text-center text-sm text-text-secondary">No blogs found.</p>
                        )}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-surface px-3 py-3 sm:px-4">
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
            )}

            {blogToDelete ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4">
                    <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-5 shadow-xl">
                        <h3 className="font-heading text-lg font-semibold text-text-white">Delete blog?</h3>
                        <p className="mt-2 text-sm text-text-secondary">
                            You are about to delete{' '}
                            <span className="font-medium text-text-white">
                                {blogToDelete?.title ?? 'this blog'}
                            </span>
                            . This action cannot be undone.
                        </p>

                        <div className="mt-5 flex justify-end gap-2">
                            <button
                                type="button"
                                onClick={() => setBlogToDelete(null)}
                                disabled={Boolean(deletingId)}
                                className="rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-text-secondary transition hover:border-accent-blue hover:text-text-white disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={confirmDeleteBlog}
                                disabled={Boolean(deletingId)}
                                className="rounded-lg border border-red-500/40 bg-red-500/15 px-3 py-2 text-sm font-medium text-red-200 transition hover:bg-red-500/25 disabled:cursor-not-allowed disabled:opacity-60 light:text-red-700"
                            >
                                {deletingId ? 'Deleting...' : 'Delete'}
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default AdminBlogs;
