import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workspaceRoot = path.resolve(__dirname, '..');

const SITE_URL = (process.env.SITE_URL || 'https://finixltd.uk').replace(/\/+$/, '');
const BLOGS_API_URL = process.env.SITEMAP_BLOGS_API_URL || `${SITE_URL}/api/blogs`;
const PAGE_SIZE = Number.parseInt(process.env.SITEMAP_BLOGS_LIMIT || '100', 10);

const staticRoutes = [
    { path: '/', changefreq: 'weekly', priority: '1.0' },
    { path: '/about', changefreq: 'monthly', priority: '0.8' },
    { path: '/company-details', changefreq: 'monthly', priority: '0.8' },
    { path: '/directors', changefreq: 'monthly', priority: '0.7' },
    { path: '/services', changefreq: 'weekly', priority: '0.9' },
    { path: '/global-expansion', changefreq: 'monthly', priority: '0.7' },
    { path: '/finix-ai-bot', changefreq: 'weekly', priority: '0.7' },
    { path: '/compliance', changefreq: 'monthly', priority: '0.6' },
    { path: '/contact', changefreq: 'monthly', priority: '0.8' },
    { path: '/blogs', changefreq: 'daily', priority: '0.9' },
];

const escapeXml = (value) =>
    String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&apos;');

const toIsoDate = (value) => {
    if (!value) return null;
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return null;
    return d.toISOString();
};

const fetchAllBlogs = async () => {
    const blogUrls = [];
    let page = 1;
    let totalPages = 1;

    while (page <= totalPages) {
        const url = new URL(BLOGS_API_URL);
        url.searchParams.set('page', String(page));
        url.searchParams.set('limit', String(PAGE_SIZE));

        const res = await fetch(url.toString(), {
            method: 'GET',
            headers: { Accept: 'application/json' },
        });

        if (!res.ok) {
            throw new Error(`Failed fetching blogs for sitemap (HTTP ${res.status})`);
        }

        const payload = await res.json();
        const data = payload?.data ?? payload ?? {};
        const docs = Array.isArray(data?.docs) ? data.docs : [];
        totalPages = Number(data?.totalPages) || 1;

        for (const blog of docs) {
            const id = blog?._id ?? blog?.id;
            if (!id) continue;
            blogUrls.push({
                path: `/blogs/${id}`,
                changefreq: 'weekly',
                priority: '0.8',
                lastmod: toIsoDate(blog?.createdAt ?? blog?.created_at),
            });
        }
        page += 1;
    }

    return blogUrls;
};

const buildSitemapXml = (items) => {
    const body = items
        .map(({ path: routePath, changefreq, priority, lastmod }) => {
            const loc = `${SITE_URL}${routePath}`;
            return [
                '  <url>',
                `    <loc>${escapeXml(loc)}</loc>`,
                lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
                `    <changefreq>${changefreq}</changefreq>`,
                `    <priority>${priority}</priority>`,
                '  </url>',
            ]
                .filter(Boolean)
                .join('\n');
        })
        .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
};

const run = async () => {
    let dynamicBlogRoutes = [];
    try {
        dynamicBlogRoutes = await fetchAllBlogs();
        console.log(`[sitemap] Added ${dynamicBlogRoutes.length} blog URL(s) from API.`);
    } catch (err) {
        console.warn(`[sitemap] Blog fetch failed, continuing with static routes only: ${err.message}`);
    }

    const xml = buildSitemapXml([...staticRoutes, ...dynamicBlogRoutes]);
    const publicDir = path.join(workspaceRoot, 'public');
    await mkdir(publicDir, { recursive: true });
    await writeFile(path.join(publicDir, 'sitemap.xml'), xml, 'utf8');
    console.log('[sitemap] Wrote public/sitemap.xml');
};

run().catch((err) => {
    console.error(`[sitemap] Failed: ${err.message}`);
    process.exit(1);
});
