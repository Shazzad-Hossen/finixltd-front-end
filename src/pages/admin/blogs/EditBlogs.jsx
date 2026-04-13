import React, { useEffect, useMemo, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import ReactMarkdown from 'react-markdown';
import { useNavigate, useParams } from 'react-router';
import Loading from '../../../components/shared/Loading';
import { api } from '../../../utils/apicaller';

const markdownPreviewClass =
    'max-w-none rounded-xl border border-border bg-background p-4 text-text-white light:bg-white ' +
    '[&_h1]:mb-3 [&_h1]:mt-6 [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:first:mt-0 ' +
    '[&_h2]:mb-3 [&_h2]:mt-5 [&_h2]:text-2xl [&_h2]:font-semibold ' +
    '[&_h3]:mb-2 [&_h3]:mt-4 [&_h3]:text-xl [&_h3]:font-semibold ' +
    '[&_p]:mb-3 [&_p]:leading-7 ' +
    '[&_ul]:mb-3 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6 ' +
    '[&_ol]:mb-3 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-6 ' +
    '[&_blockquote]:my-4 [&_blockquote]:border-l-4 [&_blockquote]:border-primary-green/60 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-text-secondary ' +
    '[&_a]:text-accent-blue [&_a]:underline ' +
    '[&_code]:rounded [&_code]:bg-surface [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm ' +
    '[&_pre]:my-4 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-border [&_pre]:bg-surface [&_pre]:p-3 ' +
    '[&_img]:my-4 [&_img]:rounded-lg [&_img]:border [&_img]:border-border ' +
    '[&_hr]:my-5 [&_hr]:border-border';

const EditBlogs = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [thumbnailUrl, setThumbnailUrl] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [error, setError] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const canSave = Boolean(isEditing && title.trim() && thumbnailUrl.trim() && content.trim() && !saving);
    const previewContent = useMemo(() => content.trim() || '_Nothing to preview yet._', [content]);

    const loadBlog = async () => {
        if (!id) return;
        setLoading(true);
        setError('');
        try {
            const res = await api.get(`/api/blog/${id}`);
            const blog = res?.data ?? res ?? {};
            setTitle(blog?.title ?? '');
            setThumbnailUrl(blog?.thumbnail ?? blog?.thumbnailUrl ?? '');
            setShortDescription(blog?.shortDescription ?? '');
            setContent(blog?.content ?? '');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load blog');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadBlog();
    }, [id]);

    const handleSave = async (e) => {
        e.preventDefault();
        if (!id || !canSave) return;

        setSaving(true);
        setError('');
        try {
            await api.patch(`/api/blog/${id}`, {
                title,
                thumbnail: thumbnailUrl,
                shortDescription: shortDescription.trim() || undefined,
                content,
            });
            setIsEditing(false);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to update blog');
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async () => {
        if (!id || deleting) return;
        setDeleting(true);
        setError('');
        try {
            await api.delete(`/api/blog/${id}`);
            navigate('/time-admin/blogs', { replace: true });
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to delete blog');
        } finally {
            setDeleting(false);
            setShowDeleteModal(false);
        }
    };

    if (loading) {
        return <Loading message="Loading blog..." size="sm" />;
    }

    return (
        <div className="mx-auto w-full max-w-5xl">
            <div className="mb-5 flex items-center justify-between gap-3">
                <button
                    type="button"
                    onClick={() => navigate('/time-admin/blogs')}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-text-secondary transition hover:text-text-white"
                >
                    <IoArrowBack className="h-4 w-4" aria-hidden />
                    Back
                </button>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={() => setIsEditing((prev) => !prev)}
                        className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-text-secondary transition hover:border-accent-blue hover:text-text-white"
                    >
                        {isEditing ? 'Preview mode' : 'Edit'}
                    </button>
                    {isEditing ? (
                        <button
                            type="submit"
                            form="edit-blog-form"
                            disabled={!canSave}
                            className="rounded-full bg-primary-gradient px-6 py-2 text-sm font-semibold text-[#0B0F1A] shadow-lg shadow-primary-green/20 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {saving ? 'Saving...' : 'Save'}
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={() => setShowDeleteModal(true)}
                            className="rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-200 transition hover:bg-red-500/20 light:text-red-700"
                        >
                            Delete
                        </button>
                    )}
                </div>
            </div>

            <form id="edit-blog-form" onSubmit={handleSave} className="space-y-5">
                <div className="rounded-2xl border border-border bg-surface p-4 sm:p-6">
                    <div className="grid gap-5 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <label htmlFor="blog-title" className="block text-sm font-medium text-text-secondary">
                                Blog title
                            </label>
                            <input
                                id="blog-title"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text-white outline-none transition placeholder:text-text-secondary/70 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue disabled:cursor-not-allowed disabled:opacity-70"
                                disabled={!isEditing}
                                required
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="blog-thumbnail" className="block text-sm font-medium text-text-secondary">
                                Blog thumbnail URL
                            </label>
                            <input
                                id="blog-thumbnail"
                                type="url"
                                value={thumbnailUrl}
                                onChange={(e) => setThumbnailUrl(e.target.value)}
                                className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text-white outline-none transition placeholder:text-text-secondary/70 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue disabled:cursor-not-allowed disabled:opacity-70"
                                disabled={!isEditing}
                                required
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="blog-short-desc" className="block text-sm font-medium text-text-secondary">
                                Short description (optional)
                            </label>
                            <textarea
                                id="blog-short-desc"
                                value={shortDescription}
                                onChange={(e) => setShortDescription(e.target.value)}
                                rows={3}
                                className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text-white outline-none transition placeholder:text-text-secondary/70 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue disabled:cursor-not-allowed disabled:opacity-70"
                                disabled={!isEditing}
                                placeholder="A short summary shown in blog lists..."
                            />
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-border bg-surface p-4 sm:p-6">
                    <div className="mb-4 flex items-center justify-between gap-3">
                        <label htmlFor="blog-content" className="text-sm font-medium text-text-secondary">
                            Content (Markdown)
                        </label>
                        <p className="text-xs text-text-secondary">{isEditing ? 'Editing enabled' : 'Preview mode'}</p>
                    </div>

                    {isEditing ? (
                        <textarea
                            id="blog-content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            rows={16}
                            className="w-full rounded-xl border border-border bg-background px-3 py-3 font-mono text-sm text-text-white outline-none transition placeholder:text-text-secondary/70 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
                            required
                        />
                    ) : (
                        <div className={markdownPreviewClass}>
                            <ReactMarkdown>{previewContent}</ReactMarkdown>
                        </div>
                    )}
                </div>

                {error ? (
                    <p
                        className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200 light:text-red-700"
                        role="alert"
                    >
                        {error}
                    </p>
                ) : null}

            </form>

            {showDeleteModal ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4">
                    <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-5 shadow-xl">
                        <h3 className="font-heading text-lg font-semibold text-text-white">Delete blog?</h3>
                        <p className="mt-2 text-sm text-text-secondary">
                            This will permanently delete this blog and cannot be undone.
                        </p>
                        <div className="mt-5 flex justify-end gap-2">
                            <button
                                type="button"
                                onClick={() => setShowDeleteModal(false)}
                                disabled={deleting}
                                className="rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-text-secondary transition hover:border-accent-blue hover:text-text-white disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={handleDelete}
                                disabled={deleting}
                                className="rounded-lg border border-red-500/40 bg-red-500/15 px-3 py-2 text-sm font-medium text-red-200 transition hover:bg-red-500/25 disabled:cursor-not-allowed disabled:opacity-60 light:text-red-700"
                            >
                                {deleting ? 'Deleting...' : 'Delete'}
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default EditBlogs;