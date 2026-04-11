import React, { useEffect, useState } from 'react';
import { IoMdSunny } from 'react-icons/io';
import { IoClose, IoMenu, IoMoon } from 'react-icons/io5';
import { NavLink } from 'react-router';

const NAV_LINKS = [
    { to: '/', end: true, label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/blog', label: 'Blog' },
];

const Header = ({ theme, onThemeToggle }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 768px)');
        const onChange = () => {
            if (mq.matches) setMenuOpen(false);
        };
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, []);

    const navLinkClassName = ({ isActive }) =>
        [
            'rounded-full px-3 py-2 text-sm font-medium transition',
            isActive ? 'bg-primary-gradient bg-clip-text text-transparent' : 'text-text-secondary hover:text-text-white',
        ].join(' ');

    const mobileNavLinkClassName = ({ isActive }) =>
        [
            'block w-full rounded-lg px-4 py-3 text-base font-medium transition',
            isActive ? 'bg-primary-gradient bg-clip-text text-transparent' : 'text-text-secondary hover:bg-background hover:text-text-white',
        ].join(' ');

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                        <p className="text-xl font-semibold tracking-wide text-transparent bg-clip-text bg-primary-gradient sm:text-2xl">
                            Finix Ltd
                        </p>
                        <p className="truncate text-xs text-text-secondary">Finance platform concept</p>
                    </div>

                    <nav className="hidden flex-1 flex-wrap items-center justify-center gap-2 md:flex" aria-label="Main">
                        {NAV_LINKS.map(({ to, end, label }) => (
                            <NavLink key={to} to={to} end={end} className={navLinkClassName}>
                                {label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="flex shrink-0 items-center gap-2">
                        <button
                            type="button"
                            onClick={onThemeToggle}
                            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                            className="rounded-full border border-border bg-background px-2 py-2 text-sm font-medium text-text-white transition hover:border-accent-blue"
                        >
                            {theme === 'dark' ? <IoMoon /> : <IoMdSunny />}
                        </button>

                        <button
                            type="button"
                            className="inline-flex rounded-full border border-border bg-background p-2 text-text-white transition hover:border-accent-blue md:hidden"
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-nav"
                            onClick={() => setMenuOpen((open) => !open)}
                        >
                            {menuOpen ? <IoClose className="h-5 w-5" /> : <IoMenu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                <div
                    id="mobile-nav"
                    className={['md:hidden', menuOpen ? 'border-t border-border' : 'hidden'].join(' ')}
                >
                    <nav className="flex flex-col gap-1 py-4" aria-label="Mobile main">
                        {NAV_LINKS.map(({ to, end, label }) => (
                            <NavLink
                                key={to}
                                to={to}
                                end={end}
                                className={mobileNavLinkClassName}
                                onClick={() => setMenuOpen(false)}
                            >
                                {label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
