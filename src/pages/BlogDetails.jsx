import React, { useEffect, useMemo, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import ReactMarkdown from 'react-markdown';
import { useNavigate, useParams } from 'react-router';
import Loading from '../components/shared/Loading';
import { PageShell } from '../components/shared/PageShell';
import { api } from '../utils/apicaller';
import Seo from '../components/shared/Seo';

const markdownPreviewClass =
    'max-w-none rounded-xl border border-border bg-surface p-5 text-text-white light:bg-white ' +
    '[&_h1]:mb-3 [&_h1]:mt-6 [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:first:mt-0 ' +
    '[&_h2]:mb-3 [&_h2]:mt-5 [&_h2]:text-2xl [&_h2]:font-semibold ' +
    '[&_h3]:mb-2 [&_h3]:mt-4 [&_h3]:text-xl [&_h3]:font-semibold ' +
    '[&_p]:mb-3 [&_p]:leading-7 ' +
    '[&_ul]:mb-3 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6 ' +
    '[&_ol]:mb-3 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-6 ' +
    '[&_blockquote]:my-4 [&_blockquote]:border-l-4 [&_blockquote]:border-primary-green/60 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-text-secondary ' +
    '[&_a]:text-accent-blue [&_a]:underline ' +
    '[&_code]:rounded [&_code]:bg-background [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm ' +
    '[&_pre]:my-4 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-border [&_pre]:bg-background [&_pre]:p-3 ' +
    '[&_img]:my-4 [&_img]:rounded-lg [&_img]:border [&_img]:border-border ' +
    '[&_hr]:my-5 [&_hr]:border-border';

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const loadBlog = async () => {
        if (!id) return;
        setLoading(true);
        setError('');
        try {
            const res = await api.get(`/api/blog/${id}`);
            setBlog(res?.data ?? res ?? null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load blog');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadBlog();
    }, [id]);

    const formattedDate = useMemo(() => {
        const value = blog?.createdAt ?? blog?.created_at;
        if (!value) return '';
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return '';
        return new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        }).format(date);
    }, [blog]);

    if (loading) {
        return (
            <PageShell>
                <Seo title="Blog Details" description="Loading FINIX LTD blog post." canonical={`https://finixltd.uk/blogs/${id}`} />
                <Loading message="Loading blog..." />
            </PageShell>
        );
    }

    return (
        <PageShell>
            <Seo
                title={blog?.title || 'Blog Details'}
                description={blog?.shortDescription || 'Read insights and updates from FINIX LTD.'}
                canonical={`https://finixltd.uk/blogs/${id}`}
                image={blog?.thumbnail}
            />
            <div className="mb-5">
                <button
                    type="button"
                    onClick={() => navigate('/blogs')}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-text-secondary transition hover:text-text-white"
                >
                    <IoArrowBack className="h-4 w-4" aria-hidden />
                    Back to blogs
                </button>
            </div>

            {error ? (
                <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200 light:text-red-700">
                    {error}
                </p>
            ) : null}

            {!error && blog ? (
                <article className="space-y-5">
                    <header className="space-y-3">
                        <h1 className="font-heading text-2xl font-semibold tracking-tight text-text-white sm:text-3xl">
                            {blog?.title ?? 'Untitled blog'}
                        </h1>
                        {formattedDate ? <p className="text-sm text-text-secondary">{formattedDate}</p> : null}
                    </header>

                    {blog?.thumbnail ? (
                        <div className="overflow-hidden rounded-2xl border border-border bg-surface">
                            <img
                                src={blog.thumbnail}
                                alt={blog?.title || 'Blog thumbnail'}
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    ) : null}

        

                    <div className={markdownPreviewClass}>
                        <ReactMarkdown>{blog?.content ?? 'No content available.'}</ReactMarkdown>
                    </div>
                </article>
            ) : null}
        </PageShell>
    );
};

export default BlogDetails;