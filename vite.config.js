import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/**
 * Proxies browser requests from `/api/*` to your backend so the Network tab shows
 * the dev server origin (e.g. localhost:5173) instead of the real API host.
 *
 * Use relative URLs in the app, e.g. `fetch('/api/users')` or `baseURL: '/api'`.
 * `.env`: `VITE_SERVER_URL=http://localhost:4044/api` → proxy target origin is `http://localhost:4044`.
 */
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    const serverUrl = env.VITE_SERVER_URL || 'http://localhost:4044/api';

    let proxyTarget = env.VITE_PROXY_TARGET;
    if (!proxyTarget) {
        try {
            const normalized = serverUrl.includes('://') ? serverUrl : `http://${serverUrl}`;
            proxyTarget = new URL(normalized).origin;
        } catch {
            proxyTarget = 'http://localhost:4044';
        }
    }

    const apiProxy = {
        '/api': {
            target: proxyTarget,
            changeOrigin: true,
            secure: env.VITE_PROXY_SECURE !== 'false',
        },
    };

    return {
        plugins: [react(), tailwindcss()],
        server: {
            proxy: { ...apiProxy },
        },
        preview: {
            proxy: { ...apiProxy },
        },
    };
});
