/**
 * Shared fetch wrapper. Use paths like `/api/...` so Vite proxies to the backend in dev.
 */

/** Key used with `localStorage` for the API Bearer token (login sets this). */
export const ACCESS_TOKEN_KEY = 'FINIXLTD_ACCESS_TOKEN';

/**
 * Merge caller headers with Bearer token from localStorage when present.
 */
function mergeAuthHeaders(headerInit) {
    const headers = new Headers(headerInit);
    if (typeof window === 'undefined') {
        return headers;
    }
    const token = window.localStorage.getItem(ACCESS_TOKEN_KEY);
    if (token && !headers.has('Authorization')) {
        headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
}

async function handleResponse(res) {
    if (!res.ok) {
        let detail = res.statusText;
        try {
            const errBody = await res.clone().json();
            detail =
                errBody?.message ??
                errBody?.error ??
                (typeof errBody === 'string' ? errBody : JSON.stringify(errBody));
        } catch {
            try {
                const t = await res.text();
                if (t) detail = t;
            } catch {
                /* ignore */
            }
        }
        throw new Error(detail || `HTTP ${res.status}`);
    }

    if (res.status === 204) return null;

    const text = await res.text();
    if (!text) return null;

    const ct = res.headers.get('content-type') || '';
    if (ct.includes('application/json')) {
        try {
            return JSON.parse(text);
        } catch {
            return text;
        }
    }
    return text;
}

function jsonBody(body, init) {
    const headers = mergeAuthHeaders(init.headers);
    const isJson =
        body != null &&
        typeof body === 'object' &&
        !(body instanceof FormData) &&
        !(body instanceof Blob) &&
        !(body instanceof ArrayBuffer);

    if (isJson && !headers.has('Content-Type')) {
        headers.set('Content-Type', 'application/json');
    }

    return {
        body: isJson ? JSON.stringify(body) : body ?? undefined,
        headers,
    };
}

export const api = {
    get: async (url, init = {}) => {
        const res = await fetch(url, {
            ...init,
            method: 'GET',
            credentials: 'include',
            headers: mergeAuthHeaders(init.headers),
        });
        return handleResponse(res);
    },

    post: async (url, body, init = {}) => {
        const { body: payload, headers } = jsonBody(body, init);
        const res = await fetch(url, {
            ...init,
            method: 'POST',
            credentials: 'include',
            headers,
            body: payload,
        });
        return handleResponse(res);
    },

    patch: async (url, body, init = {}) => {
        const { body: payload, headers } = jsonBody(body, init);
        const res = await fetch(url, {
            ...init,
            method: 'PATCH',
            credentials: 'include',
            headers,
            body: payload,
        });
        return handleResponse(res);
    },

    delete: async (url, init = {}) => {
        const res = await fetch(url, {
            ...init,
            method: 'DELETE',
            credentials: 'include',
            headers: mergeAuthHeaders(init.headers),
        });
        return handleResponse(res);
    },
};
