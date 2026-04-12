import React from 'react';

const sizeClasses = {
    sm: 'h-6 w-6 border-2',
    md: 'h-10 w-10 border-2',
    lg: 'h-14 w-14 border-[3px]',
};

const Loading = ({ className = '', fullScreen = false, message, size = 'md' }) => {
    const ring = sizeClasses[size] ?? sizeClasses.md;

    return (
        <div
            className={[
                'flex flex-col items-center justify-center gap-3',
                fullScreen
                    ? 'fixed inset-0 z-50 bg-background/75 backdrop-blur-[2px]'
                    : 'min-h-[8rem] w-full py-8',
                className,
            ]
                .filter(Boolean)
                .join(' ')}
            role="status"
            aria-live="polite"
            aria-busy="true"
        >
            <div
                className={[
                    'animate-spin rounded-full border-border border-t-primary-green border-r-accent-blue',
                    ring,
                ].join(' ')}
                aria-hidden
            />
            {message ? (
                <p className="max-w-xs text-center text-sm text-text-secondary">{message}</p>
            ) : (
                <span className="sr-only">Loading</span>
            )}
        </div>
    );
};

export default Loading;
