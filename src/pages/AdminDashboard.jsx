import { useState, useEffect, useCallback } from 'react';
import { FaLock, FaSignOutAlt, FaTrashAlt, FaSyncAlt, FaInbox } from 'react-icons/fa';
import API_BASE from '../lib/api';

const TOKEN_KEY = 'gleam_admin_token';

// Small helpers to read/write the saved token without crashing if storage is blocked.
const readToken = () => {
    try {
        return localStorage.getItem(TOKEN_KEY) || '';
    } catch {
        return '';
    }
};
const saveToken = (t) => {
    try {
        localStorage.setItem(TOKEN_KEY, t);
    } catch { /* ignore */ }
};
const clearToken = () => {
    try {
        localStorage.removeItem(TOKEN_KEY);
    } catch { /* ignore */ }
};

const AdminDashboard = () => {
    const [token, setToken] = useState(readToken);
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loggingIn, setLoggingIn] = useState(false);

    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const logout = useCallback(() => {
        clearToken();
        setToken('');
        setApplications([]);
    }, []);

    const loadApplications = useCallback(async () => {
        if (!token) return;
        setLoading(true);
        setError('');
        try {
            const res = await fetch(`${API_BASE}/applications`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (res.status === 401) {
                logout();
                return;
            }
            const data = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(data.message || 'Could not load applications.');
            setApplications(data.applications || []);
        } catch (err) {
            setError(err.message || 'Could not reach the server.');
        } finally {
            setLoading(false);
        }
    }, [token, logout]);

    useEffect(() => {
        loadApplications();
    }, [loadApplications]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginError('');
        setLoggingIn(true);
        try {
            const res = await fetch(`${API_BASE}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(data.message || 'Login failed.');
            saveToken(data.token);
            setToken(data.token);
            setPassword('');
        } catch (err) {
            setLoginError(err.message || 'Could not reach the server.');
        } finally {
            setLoggingIn(false);
        }
    };

    const toggleStatus = async (app) => {
        const next = app.status === 'new' ? 'reviewed' : 'new';
        try {
            const res = await fetch(`${API_BASE}/applications/${app._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ status: next }),
            });
            if (res.status === 401) return logout();
            if (!res.ok) throw new Error();
            setApplications((prev) =>
                prev.map((a) => (a._id === app._id ? { ...a, status: next } : a))
            );
        } catch {
            setError('Could not update status.');
        }
    };

    const remove = async (app) => {
        if (!window.confirm(`Delete the application from "${app.firstName} ${app.lastName}"? This cannot be undone.`)) {
            return;
        }
        try {
            const res = await fetch(`${API_BASE}/applications/${app._id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}` },
            });
            if (res.status === 401) return logout();
            if (!res.ok) throw new Error();
            setApplications((prev) => prev.filter((a) => a._id !== app._id));
        } catch {
            setError('Could not delete the application.');
        }
    };

    const formatDate = (iso) => {
        if (!iso) return '';
        try {
            return new Date(iso).toLocaleString();
        } catch {
            return iso;
        }
    };

    // ---- Login screen ----
    if (!token) {
        return (
            <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center px-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">
                    <div className="w-16 h-16 bg-[#0c6478]/10 text-[#0c6478] rounded-full flex items-center justify-center mx-auto mb-5">
                        <FaLock className="text-2xl" />
                    </div>
                    <h1 className="text-2xl font-bold text-[#0c6478] text-center mb-1">
                        Admin Login
                    </h1>
                    <p className="text-gray-500 text-center text-sm mb-6">
                        Enter the admin password to view applications.
                    </p>

                    {loginError && (
                        <div className="mb-4 rounded-lg bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
                            {loginError}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            required
                            autoFocus
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0BD0C7] focus:ring-2 focus:ring-[#0BD0C7]/30 outline-none transition"
                        />
                        <button
                            type="submit"
                            disabled={loggingIn}
                            className="w-full bg-[#0BD0C7] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0c6478] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                        >
                            {loggingIn ? 'Signing in…' : 'Sign in'}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // ---- Dashboard ----
    const newCount = applications.filter((a) => a.status === 'new').length;

    return (
        <div className="pt-20 min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-[#0c6478]">Applications</h1>
                        <p className="text-gray-500 mt-1">
                            {applications.length} total
                            {newCount > 0 && (
                                <span className="ml-2 inline-block bg-[#0BD0C7]/15 text-[#0c6478] text-xs font-semibold px-2.5 py-1 rounded-full">
                                    {newCount} new
                                </span>
                            )}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={loadApplications}
                            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition cursor-pointer"
                        >
                            <FaSyncAlt className={loading ? 'animate-spin' : ''} /> Refresh
                        </button>
                        <button
                            onClick={logout}
                            className="inline-flex items-center gap-2 bg-[#0c6478] text-white px-4 py-2 rounded-full font-medium hover:bg-[#0BD0C7] transition cursor-pointer"
                        >
                            <FaSignOutAlt /> Log out
                        </button>
                    </div>
                </div>

                {error && (
                    <div className="mb-6 rounded-lg bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
                        {error}
                    </div>
                )}

                {/* Content */}
                {loading && applications.length === 0 ? (
                    <div className="text-center text-gray-500 py-20">Loading applications…</div>
                ) : applications.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-sm py-20 text-center">
                        <FaInbox className="text-gray-300 text-5xl mx-auto mb-4" />
                        <p className="text-gray-500">No applications yet.</p>
                    </div>
                ) : (
                    <>
                        {/* Table (desktop) */}
                        <div className="hidden md:block bg-white rounded-2xl shadow-sm overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wide">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold">Name</th>
                                        <th className="px-6 py-4 font-semibold">Contact number</th>
                                        <th className="px-6 py-4 font-semibold">Email</th>
                                        <th className="px-6 py-4 font-semibold">Note</th>
                                        <th className="px-6 py-4 font-semibold">Submitted</th>
                                        <th className="px-6 py-4 font-semibold">Status</th>
                                        <th className="px-6 py-4 font-semibold text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {applications.map((app) => (
                                        <tr key={app._id} className="hover:bg-gray-50/70">
                                            <td className="px-6 py-4 font-medium text-gray-900">{app.firstName} {app.lastName}</td>
                                            <td className="px-6 py-4 text-gray-700">
                                                <a href={`tel:${app.phone}`} className="hover:text-[#0BD0C7]">{app.phone}</a>
                                            </td>
                                            <td className="px-6 py-4 text-gray-700">
                                                <a href={`mailto:${app.email}`} className="hover:text-[#0BD0C7]">{app.email}</a>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600 text-sm max-w-xs whitespace-pre-wrap break-words">
                                                {app.note ? app.note : <span className="text-gray-300">—</span>}
                                            </td>
                                            <td className="px-6 py-4 text-gray-500 text-sm">{formatDate(app.createdAt)}</td>
                                            <td className="px-6 py-4">
                                                <button
                                                    onClick={() => toggleStatus(app)}
                                                    className={`text-xs font-semibold px-3 py-1 rounded-full transition cursor-pointer ${
                                                        app.status === 'new'
                                                            ? 'bg-[#0BD0C7]/15 text-[#0c6478] hover:bg-[#0BD0C7]/25'
                                                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                                    }`}
                                                    title="Click to toggle"
                                                >
                                                    {app.status === 'new' ? 'New' : 'Reviewed'}
                                                </button>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button
                                                    onClick={() => remove(app)}
                                                    className="text-gray-400 hover:text-red-600 transition p-2 cursor-pointer"
                                                    title="Delete"
                                                >
                                                    <FaTrashAlt />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Cards (mobile) */}
                        <div className="md:hidden space-y-4">
                            {applications.map((app) => (
                                <div key={app._id} className="bg-white rounded-xl shadow-sm p-5">
                                    <div className="flex items-start justify-between">
                                        <h3 className="font-bold text-gray-900">{app.firstName} {app.lastName}</h3>
                                        <button
                                            onClick={() => toggleStatus(app)}
                                            className={`text-xs font-semibold px-3 py-1 rounded-full cursor-pointer ${
                                                app.status === 'new'
                                                    ? 'bg-[#0BD0C7]/15 text-[#0c6478]'
                                                    : 'bg-gray-100 text-gray-500'
                                            }`}
                                        >
                                            {app.status === 'new' ? 'New' : 'Reviewed'}
                                        </button>
                                    </div>
                                    <div className="mt-3 space-y-1 text-sm">
                                        <p><span className="text-gray-400">Phone: </span>
                                            <a href={`tel:${app.phone}`} className="text-gray-700">{app.phone}</a></p>
                                        <p><span className="text-gray-400">Email: </span>
                                            <a href={`mailto:${app.email}`} className="text-gray-700 break-all">{app.email}</a></p>
                                        {app.note && (
                                            <p><span className="text-gray-400">Note: </span>
                                                <span className="text-gray-700 whitespace-pre-wrap break-words">{app.note}</span></p>
                                        )}
                                        <p className="text-gray-400 text-xs pt-1">{formatDate(app.createdAt)}</p>
                                    </div>
                                    <div className="mt-4 text-right">
                                        <button
                                            onClick={() => remove(app)}
                                            className="inline-flex items-center gap-2 text-red-600 text-sm font-medium cursor-pointer"
                                        >
                                            <FaTrashAlt /> Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
