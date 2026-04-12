import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { IoArrowBack, IoEyeOffOutline, IoEyeOutline, IoLockClosedOutline, IoMailOutline } from 'react-icons/io5';
import { ACCESS_TOKEN_KEY, api } from '../../utils/apicaller';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '../../redux/reducers/userSlice';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
   const {loading} = useSelector((state) => state.user);
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault();
        setError('');
        dispatch(setLoading(true));
        try {
            const res = await api.post('/api/login', { email, password });
            const token = res?.data?.authorization;
            const user = res?.data?.user;
            if (token && user) {
                localStorage.setItem(ACCESS_TOKEN_KEY, token);
                dispatch(setUser(user));
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Sign in failed');
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <div className="relative flex min-h-[min(720px,calc(100vh-8rem))] flex-col items-center justify-center px-4 py-12 sm:px-6">
            <div
                className="pointer-events-none absolute inset-0 overflow-hidden"
                aria-hidden
            >
                <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-primary-green/8 blur-3xl" />
                <div className="absolute -right-16 bottom-24 h-72 w-72 rounded-full bg-accent-blue/8 blur-3xl" />
            </div>

            <div className="relative w-full max-w-[420px]">
                <Link
                    to="/"
                    className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition hover:text-accent-blue"
                >
                    <IoArrowBack className="h-4 w-4" aria-hidden />
                    Back to website
                </Link>

                <div className="overflow-hidden rounded-2xl border border-border bg-surface/90 shadow-xl shadow-black/15 light:bg-white/95 light:shadow-black/[0.08]">
                    <div className="border-b border-border bg-linear-to-r from-primary-green/10 via-transparent to-accent-blue/10 px-6 py-5 sm:px-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
                            Secure area
                        </p>
                        <h1 className="mt-1 font-heading text-2xl font-semibold tracking-tight text-text-white sm:text-3xl">
                            Admin{' '}
                            <span className="bg-primary-gradient bg-clip-text text-transparent">sign in</span>
                        </h1>
                        <p className="mt-2 text-sm text-text-secondary">
                            Use your authorised FINIX LTD credentials. Sessions should be protected with MFA where
                            available.
                        </p>
                    </div>

                    <form onSubmit={onSubmit} className="px-6 py-6 sm:px-8 sm:py-8" noValidate>
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="admin-email" className="block text-sm font-medium text-text-secondary">
                                    Email address
                                </label>
                                <div className="relative mt-1.5">
                                    <IoMailOutline
                                        className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-text-secondary"
                                        aria-hidden
                                    />
                                    <input
                                        id="admin-email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        inputMode="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-3 text-sm text-text-white outline-none transition placeholder:text-text-secondary/70 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue light:bg-white"
                                        placeholder="you@company.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="admin-password"
                                    className="block text-sm font-medium text-text-secondary"
                                >
                                    Password
                                </label>
                                <div className="relative mt-1.5">
                                    <IoLockClosedOutline
                                        className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-text-secondary"
                                        aria-hidden
                                    />
                                    <input
                                        id="admin-password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        autoComplete="current-password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-10 text-sm text-text-white outline-none transition placeholder:text-text-secondary/70 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue light:bg-white"
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((s) => !s)}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-text-secondary transition hover:bg-background hover:text-text-white light:hover:bg-surface"
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    >
                                        {showPassword ? (
                                            <IoEyeOffOutline className="h-5 w-5" />
                                        ) : (
                                            <IoEyeOutline className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {error ? (
                            <p
                                className="mt-6 rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-center text-sm text-red-200 light:text-red-800"
                                role="alert"
                            >
                                {error}
                            </p>
                        ) : null}

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-8 w-full rounded-full bg-primary-gradient py-3 text-sm font-semibold text-[#0B0F1A] shadow-lg shadow-primary-green/20 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? 'Signing in…' : 'Sign in'}
                        </button>

                        <p className="mt-6 text-center text-xs text-text-secondary">
                            UK Registered Company · Authorised access only
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
