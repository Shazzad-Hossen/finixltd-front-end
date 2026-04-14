import { useEffect } from 'react';

const ensureMeta = (attr, key) => {
    const selector = attr === 'name' ? `meta[name="${key}"]` : `meta[property="${key}"]`;
    let element = document.head.querySelector(selector);
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
    }
    return element;
};

const ensureCanonical = () => {
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
    }
    return link;
};

const Seo = ({ title, description, canonical, robots = 'index,follow', image }) => {
    useEffect(() => {
        const fullTitle = title ? `${title} | FINIX LTD` : 'FINIX LTD';
        document.title = fullTitle;

        if (description) {
            ensureMeta('name', 'description').setAttribute('content', description);
        }
        ensureMeta('name', 'robots').setAttribute('content', robots);
        ensureMeta('property', 'og:title').setAttribute('content', fullTitle);
        ensureMeta('property', 'og:description').setAttribute('content', description || '');
        ensureMeta('property', 'og:type').setAttribute('content', 'website');
        ensureMeta('name', 'twitter:card').setAttribute('content', image ? 'summary_large_image' : 'summary');
        ensureMeta('name', 'twitter:title').setAttribute('content', fullTitle);
        ensureMeta('name', 'twitter:description').setAttribute('content', description || '');

        if (canonical) {
            ensureCanonical().setAttribute('href', canonical);
            ensureMeta('property', 'og:url').setAttribute('content', canonical);
        }

        if (image) {
            ensureMeta('property', 'og:image').setAttribute('content', image);
            ensureMeta('name', 'twitter:image').setAttribute('content', image);
        }
    }, [title, description, canonical, robots, image]);

    return null;
};

export default Seo;
