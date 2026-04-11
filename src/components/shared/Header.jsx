import React from 'react';
import { IoMdSunny } from 'react-icons/io';
import { IoMoon } from 'react-icons/io5';
import { NavLink } from 'react-router';

const Header = ({ theme, onThemeToggle }) => {
    const navLinkClassName = ({ isActive }) =>
        [
            'rounded-full px-3 py-2 text-sm font-medium transition',
            isActive ? 'bg-primary-gradient bg-clip-text text-transparent' : 'text-text-secondary hover:text-text-white',
        ].join(' ');

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="text-2xl font-semibold tracking-wide text-transparent bg-clip-text bg-primary-gradient">Finix Ltd</p>
                    <p className="text-xs text-text-secondary">Finance platform concept</p>
                </div>

                <nav className="flex flex-wrap items-center gap-2">
                    <NavLink to="/" end className={navLinkClassName}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={navLinkClassName}>
                        About
                    </NavLink>
                    <NavLink to="/contact" className={navLinkClassName}>
                        Contact
                    </NavLink>
                    <NavLink to="/blog" className={navLinkClassName}>
                        Blog
                    </NavLink>
                </nav>

                <div className="flex items-center gap-3 self-start md:self-auto">
                    <button
                        type="button"
                        onClick={onThemeToggle}
                        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        className="rounded-full border border-border bg-background px-2 py-2 text-sm font-medium text-text-white transition hover:border-accent-blue"
                    >
                        {theme === 'dark' ? <IoMoon /> : <IoMdSunny />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;