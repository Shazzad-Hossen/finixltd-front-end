import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

const MainLayout = () => {
    const [theme, setTheme] = React.useState(() => {
        if (typeof window === 'undefined') {
            return 'dark';
        }

        const storedTheme = window.localStorage.getItem('theme');
        if (storedTheme === 'light' || storedTheme === 'dark') {
            return storedTheme;
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    React.useEffect(() => {
        const root = document.documentElement;
        root.setAttribute('data-theme', theme);
        root.style.colorScheme = theme;
        window.localStorage.setItem('theme', theme);
    }, [theme]);

    const handleThemeToggle = () => {
        setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <div className="min-h-screen bg-background text-text-white">
            <Header theme={theme} onThemeToggle={handleThemeToggle} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;