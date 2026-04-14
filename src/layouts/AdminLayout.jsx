import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdSunny } from 'react-icons/io';
import {
    IoClose,
    IoDocumentTextOutline,
    IoGridOutline,
    IoLogOutOutline,
    IoMenu,
    IoMoon,
} from 'react-icons/io5';
import Login from '../pages/admin/Login';
import { setLoading, setUser } from '../redux/reducers/userSlice';
import { ACCESS_TOKEN_KEY, api } from '../utils/apicaller';
import Loading from '../components/shared/Loading';
import logo from '../assets/logo.svg';

const navLinkClass = ({ isActive }) =>
    [
        'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition',
        isActive
            ? 'bg-primary-green/12 text-text-white ring-1 ring-accent-blue/35'
            : 'text-text-secondary hover:bg-background hover:text-text-white',
    ].join(' ');

const AdminLayout = () => {
    const {user, loading} = useSelector((state) => state.user);
    console.log(loading)
    const dispatch = useDispatch();
    const [theme, setTheme] = useState(() => {
        if (typeof window === 'undefined') {
            return 'dark';
        }

        const storedTheme = window.localStorage.getItem('theme');
        if (storedTheme === 'light' || storedTheme === 'dark') {
            return storedTheme;
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const checkAuth = async () => {
        console.log('checkAuth')
        dispatch(setLoading(true));

        try {
            const res = await api.get('/api/me');
            if(res.data)
                dispatch(setUser(res.data));
        } catch (err) {
            console.log(err)
        } finally {
            dispatch(setLoading(false));
        }
   

    }

    useEffect(()=>{
        checkAuth();
       

    },[]);

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute('data-theme', theme);
        root.style.colorScheme = theme;
        window.localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 1024px)');
        const onChange = () => {
            if (mq.matches) setSidebarOpen(false);
        };
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, []);

    useEffect(() => {
        if (!sidebarOpen) return undefined;
        const onKey = (e) => {
            if (e.key === 'Escape') setSidebarOpen(false);
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [sidebarOpen]);

    useEffect(() => {
        if (!sidebarOpen) return undefined;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = prev;
        };
    }, [sidebarOpen]);

    const handleThemeToggle = () => {
        setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
    };

    const closeSidebar = () => setSidebarOpen(false);

   

    const navigate = useNavigate();

    const handleSignOut = () => {
        closeSidebar();
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        dispatch(setUser(null));
        navigate('/time-admin', { replace: true });
    };
    if(loading) return <Loading fullScreen={true} />;

    else if (!user) return <Login />;

    return (
        <div className="flex min-h-screen bg-background text-text-white">
            {sidebarOpen ? (
                <button
                    type="button"
                    className="fixed inset-0 z-30 bg-black/50 backdrop-blur-[1px] transition-opacity lg:hidden"
                    aria-label="Close menu"
                    onClick={closeSidebar}
                />
            ) : null}

            <aside
                className={[
                    'fixed inset-y-0 left-0 z-40 flex w-[min(17rem,85vw)] flex-col border-r border-border bg-surface/95 transition-transform duration-200 ease-out light:bg-white',
                    'lg:static lg:z-auto lg:w-60 lg:shrink-0 lg:translate-x-0',
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
                ].join(' ')}
            >
                <div className="flex items-center justify-between border-b border-border px-4 py-4 lg:py-5">
                    <div>
                        <img src={logo} alt="Finix Logo" className="h-[30px]" />
                    </div>
                    <button
                        type="button"
                        className="rounded-lg p-2 text-text-secondary transition hover:bg-background hover:text-text-white lg:hidden"
                        aria-label="Close menu"
                        onClick={closeSidebar}
                    >
                        <IoClose className="h-5 w-5" />
                    </button>
                </div>

                <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3" aria-label="Admin navigation">
                    <NavLink to="/time-admin" end className={navLinkClass} onClick={closeSidebar}>
                        <IoGridOutline className="h-5 w-5 shrink-0 opacity-90" aria-hidden />
                        Dashboard
                    </NavLink>
                    <NavLink to="/time-admin/blogs" className={navLinkClass} onClick={closeSidebar}>
                        <IoDocumentTextOutline className="h-5 w-5 shrink-0 opacity-90" aria-hidden />
                        Blogs
                    </NavLink>
                </nav>

                <div className="border-t border-border p-3">
                    <button
                        type="button"
                        onClick={handleSignOut}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-text-secondary transition hover:bg-red-500/10 hover:text-red-300 light:hover:text-red-700"
                    >
                        <IoLogOutOutline className="h-5 w-5 shrink-0" aria-hidden />
                        Sign out
                    </button>
                </div>
            </aside>

            <div className="flex min-w-0 flex-1 flex-col lg:min-h-screen">
                <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border bg-surface/80 px-3 backdrop-blur-sm sm:px-4 lg:px-6 light:bg-white/90">
                    <button
                        type="button"
                        className="inline-flex shrink-0 rounded-lg border border-border bg-background p-2 text-text-white transition hover:border-accent-blue lg:hidden"
                        aria-label="Open menu"
                        aria-expanded={sidebarOpen}
                        onClick={() => setSidebarOpen(true)}
                    >
                        <IoMenu className="h-5 w-5" />
                    </button>

                    <div className="min-w-0 flex flex-1 items-center justify-end gap-2 sm:gap-3">
                        <button
                            type="button"
                            onClick={handleThemeToggle}
                            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                            className="shrink-0 rounded-full border border-border bg-background px-2 py-2 text-sm font-medium text-text-white transition hover:border-accent-blue"
                        >
                            {theme === 'dark' ? <IoMoon /> : <IoMdSunny />}
                        </button>

                        <span
                            className="min-w-0 truncate text-right text-xs text-text-secondary sm:text-sm"
                            title={user.email}
                        >
                            <span className="hidden text-text-secondary/80 sm:inline">Signed in as </span>
                            <span className="font-medium text-text-white">{user.email}</span>
                        </span>
                    </div>
                </header>

                <main className=" overflow-y-auto py-4 px-4 md:px-6 lg:px-8  h-[calc(100vh-60px)]">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
