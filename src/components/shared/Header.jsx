import React, { useEffect, useRef, useState } from 'react';
import { IoMdSunny } from 'react-icons/io';
import { IoChevronDown, IoClose, IoMenu, IoMoon } from 'react-icons/io5';
import { NavLink, useLocation } from 'react-router';

/** Shown inline on desktop (md+). Blog stays visible per requirements. */
const DESKTOP_PRIMARY_LINKS = [
    { to: '/', end: true, label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/company-details', label: 'Company' },
    { to: '/services', label: 'Services' },
   
    
];

/** Shown inside the “More” dropdown on desktop. */
const DESKTOP_MORE_LINKS = [
    { to: '/blogs', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
    { to: '/directors', label: 'Directors' },
    { to: '/global-expansion', label: 'Global' },
    { to: '/finix-ai-bot', label: 'FinixAI Bot' },
    { to: '/compliance', label: 'Legal' },
];

/** Full list for the burger menu (unchanged pattern: every route listed). */
const MOBILE_NAV_LINKS = [
    { to: '/', end: true, label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/blogs', label: 'Blog' },
    { to: '/company-details', label: 'Company' },
    { to: '/directors', label: 'Directors' },
    { to: '/global-expansion', label: 'Global' },
    { to: '/finix-ai-bot', label: 'AI Bot' },
    { to: '/compliance', label: 'Legal' },
    { to: '/contact', label: 'Contact' },
];

const Header = ({ theme, onThemeToggle }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);
    const moreWrapRef = useRef(null);
    const location = useLocation();

    const moreSectionActive = DESKTOP_MORE_LINKS.some(
        ({ to }) => location.pathname === to || (to !== '/' && location.pathname.startsWith(`${to}/`)),
    );

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 768px)');
        const onChange = () => {
            if (mq.matches) setMenuOpen(false);
        };
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, []);

    useEffect(() => {
        if (!moreOpen) return undefined;
        const onDocMouseDown = (e) => {
            if (moreWrapRef.current && !moreWrapRef.current.contains(e.target)) {
                setMoreOpen(false);
            }
        };
        const onKey = (e) => {
            if (e.key === 'Escape') setMoreOpen(false);
        };
        document.addEventListener('mousedown', onDocMouseDown);
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('mousedown', onDocMouseDown);
            document.removeEventListener('keydown', onKey);
        };
    }, [moreOpen]);

    const navLinkClassName = ({ isActive }) =>
        [
            'rounded-full px-2.5 py-1.5 text-xs font-medium transition sm:px-3 sm:py-2 sm:text-sm',
            isActive ? 'bg-primary-gradient bg-clip-text text-transparent' : 'text-text-secondary hover:text-text-white',
        ].join(' ');

    const mobileNavLinkClassName = ({ isActive }) =>
        [
            'block w-full rounded-lg px-4 py-3 text-base font-medium transition',
            isActive ? 'bg-primary-gradient bg-clip-text text-transparent' : 'text-text-secondary hover:bg-background hover:text-text-white',
        ].join(' ');

    const dropdownLinkClassName = ({ isActive }) =>
        [
            'block rounded-lg px-3 py-2.5 text-sm font-medium transition',
            isActive ? 'bg-primary-gradient bg-clip-text text-transparent' : 'text-text-secondary hover:bg-background hover:text-text-white',
        ].join(' ');

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between gap-4">
                    <NavLink to="/" className="min-w-0 shrink text-left" end>
                        <p className="text-xl font-semibold tracking-wide text-transparent bg-clip-text bg-primary-gradient sm:text-2xl">
                            FINIX LTD
                        </p>
                        <p className="truncate text-xs text-text-secondary">
                            UK corporate finance · Established 2017
                        </p>
                    </NavLink>

                    <nav
                        className="relative hidden flex-1 flex-wrap items-center justify-center gap-x-1 gap-y-1 md:flex lg:gap-x-0.5"
                        aria-label="Main"
                    >
                        {DESKTOP_PRIMARY_LINKS.map(({ to, end, label }) => (
                            <NavLink
                                key={to}
                                to={to}
                                end={end}
                                className={navLinkClassName}
                                onClick={() => setMoreOpen(false)}
                            >
                                {label}
                            </NavLink>
                        ))}

                        <div className="relative" ref={moreWrapRef}>
                            <button
                                type="button"
                                className={[
                                    'inline-flex items-center gap-0.5 rounded-full px-2.5 py-1.5 text-xs font-medium transition sm:px-3 sm:py-2 sm:text-sm',
                                    moreOpen || moreSectionActive
                                        ? 'text-text-white'
                                        : 'text-text-secondary hover:text-text-white',
                                ].join(' ')}
                                aria-expanded={moreOpen}
                                aria-haspopup="true"
                                aria-controls="desktop-more-menu"
                                id="desktop-more-trigger"
                                onClick={() => setMoreOpen((o) => !o)}
                            >
                                More
                                <IoChevronDown
                                    className={['h-4 w-4 transition', moreOpen ? 'rotate-180' : ''].join(' ')}
                                    aria-hidden
                                />
                            </button>

                            <div
                                id="desktop-more-menu"
                                role="menu"
                                aria-labelledby="desktop-more-trigger"
                                className={[
                                    'absolute right-0 top-full z-50 mt-2 min-w-[13rem] rounded-xl border border-border bg-surface py-2 shadow-lg shadow-black/20 light:bg-white light:shadow-black/10',
                                    moreOpen ? 'block' : 'hidden',
                                ].join(' ')}
                            >
                                <nav className="flex flex-col px-1" aria-label="More">
                                    {DESKTOP_MORE_LINKS.map(({ to, end, label }) => (
                                        <NavLink
                                            key={to}
                                            to={to}
                                            end={end}
                                            role="menuitem"
                                            className={dropdownLinkClassName}
                                            onClick={() => setMoreOpen(false)}
                                        >
                                            {label}
                                        </NavLink>
                                    ))}
                                </nav>
                            </div>
                        </div>
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
                        {MOBILE_NAV_LINKS.map(({ to, end, label }) => (
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
