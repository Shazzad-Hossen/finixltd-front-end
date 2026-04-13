import React, { useMemo, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router';
import { api } from '../../../utils/apicaller';

const CreateBlog = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [thumbnailUrl, setThumbnailUrl] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');
    const [showPreview, setShowPreview] = useState(false);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');

    const canSave = Boolean(title.trim() && thumbnailUrl.trim() && content.trim() && !saving);
    const previewContent = useMemo(() => content.trim() || '_Nothing to preview yet._', [content]);

    const handleSave = async (e) => {
        e.preventDefault();
        if (!canSave) return;

        setError('');
        setSaving(true);
        try {
            await api.post('/api/blog', {
                title,
                thumbnail: thumbnailUrl,
                shortDescription: shortDescription.trim() || undefined,
                content,
            });
            navigate(-1);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to create blog');
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="mx-auto w-full max-w-5xl">
            <button
                type="button"
                onClick={() => navigate('/time-admin/blogs')}
                className="mb-5 inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-text-secondary transition hover:text-text-white"
            >
                <IoArrowBack className="h-4 w-4" aria-hidden />
                Back
            </button>

            <form onSubmit={handleSave} className="space-y-5">
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
                                placeholder="Enter blog title"
                                className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text-white outline-none transition placeholder:text-text-secondary/70 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
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
                                placeholder="https://example.com/image.jpg"
                                className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text-white outline-none transition placeholder:text-text-secondary/70 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
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
                                placeholder="A short summary shown in blog lists..."
                                className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text-white outline-none transition placeholder:text-text-secondary/70 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
                            />
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-border bg-surface p-4 sm:p-6">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                        <label htmlFor="blog-content" className="text-sm font-medium text-text-secondary">
                            Content (Markdown)
                        </label>

                        <button
                            type="button"
                            onClick={() => setShowPreview((prev) => !prev)}
                            className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-text-secondary transition hover:border-accent-blue hover:text-text-white"
                        >
                            {showPreview ? 'Edit Markdown' : 'Preview Markdown'}
                        </button>
                    </div>

                    {showPreview ? (
                        <div
                            className="
                                max-w-none rounded-xl border border-border bg-background p-4 text-text-white light:bg-white
                                [&_h1]:mb-3 [&_h1]:mt-6 [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:first:mt-0
                                [&_h2]:mb-3 [&_h2]:mt-5 [&_h2]:text-2xl [&_h2]:font-semibold
                                [&_h3]:mb-2 [&_h3]:mt-4 [&_h3]:text-xl [&_h3]:font-semibold
                                [&_p]:mb-3 [&_p]:leading-7
                                [&_ul]:mb-3 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6
                                [&_ol]:mb-3 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-6
                                [&_blockquote]:my-4 [&_blockquote]:border-l-4 [&_blockquote]:border-primary-green/60 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-text-secondary
                                [&_a]:text-accent-blue [&_a]:underline
                                [&_code]:rounded [&_code]:bg-surface [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm
                                [&_pre]:my-4 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-border [&_pre]:bg-surface [&_pre]:p-3
                                [&_img]:my-4 [&_img]:rounded-lg [&_img]:border [&_img]:border-border
                                [&_hr]:my-5 [&_hr]:border-border
                            "
                        >
                            <ReactMarkdown>{previewContent}</ReactMarkdown>
                        </div>
                    ) : (
                        <textarea
                            id="blog-content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            rows={16}
                            placeholder="# Start writing your post..."
                            className="w-full rounded-xl border border-border bg-background px-3 py-3 font-mono text-sm text-text-white outline-none transition placeholder:text-text-secondary/70 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
                            required
                        />
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

                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={!canSave}
                        className="rounded-full bg-primary-gradient px-6 py-2.5 text-sm font-semibold text-[#0B0F1A] shadow-lg shadow-primary-green/20 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {saving ? 'Saving...' : 'Save'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateBlog;