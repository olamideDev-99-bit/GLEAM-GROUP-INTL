import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaPhoneAlt, FaEnvelope, FaRegCommentDots, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import API_BASE from '../lib/api';

const Careers = () => {
    const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '', note: '' });
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setStatus('submitting');

        try {
            const res = await fetch(`${API_BASE}/applications`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                throw new Error(data.message || 'Submission failed. Please try again.');
            }

            setStatus('success');
            setForm({ firstName: '', lastName: '', phone: '', email: '', note: '' });
        } catch (err) {
            setStatus('error');
            setError(err.message || 'Could not reach the server. Please try again later.');
        }
    };

    return (
        <div className="pt-20 min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-linear-to-r from-[#0c6478] to-[#0BD0C7] text-white py-16 md:py-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Us Now</h1>
                    <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Passionate about hospitality, creativity, and storytelling? Drop your
                        details below and our team will reach out to you.
                    </p>
                </div>
            </section>

            {/* Form */}
            <section className="py-16">
                <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                        {status === 'success' ? (
                            <div className="text-center py-6">
                                <FaCheckCircle className="text-[#0BD0C7] text-6xl mx-auto mb-5" />
                                <h2 className="text-2xl font-bold text-[#0c6478] mb-3">
                                    Thank you!
                                </h2>
                                <p className="text-gray-600 mb-8">
                                    Your details have been received. Our team will get in touch
                                    with you soon.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="bg-[#0BD0C7] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0c6478] transition-all duration-300 cursor-pointer"
                                    >
                                        Submit another
                                    </button>
                                    <Link
                                        to="/about"
                                        className="border border-[#0c6478] text-[#0c6478] px-6 py-3 rounded-full font-semibold hover:bg-[#0c6478] hover:text-white transition-all duration-300"
                                    >
                                        Back to About
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-2xl font-bold text-[#0c6478] mb-2 text-center">
                                    Tell us about you
                                </h2>
                                <p className="text-gray-500 text-center mb-8">
                                    It only takes a minute.
                                </p>

                                {status === 'error' && (
                                    <div className="mb-6 rounded-lg bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* First & last name */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                                                First name
                                            </label>
                                            <div className="relative">
                                                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                                <input
                                                    id="firstName"
                                                    name="firstName"
                                                    type="text"
                                                    required
                                                    value={form.firstName}
                                                    onChange={handleChange}
                                                    placeholder="e.g. Jane"
                                                    className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#0BD0C7] focus:ring-2 focus:ring-[#0BD0C7]/30 outline-none transition"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Last name
                                            </label>
                                            <div className="relative">
                                                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                                <input
                                                    id="lastName"
                                                    name="lastName"
                                                    type="text"
                                                    required
                                                    value={form.lastName}
                                                    onChange={handleChange}
                                                    placeholder="e.g. Doe"
                                                    className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#0BD0C7] focus:ring-2 focus:ring-[#0BD0C7]/30 outline-none transition"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contact number */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Contact number
                                        </label>
                                        <div className="relative">
                                            <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                required
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder="e.g. 0801 234 5678"
                                                className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#0BD0C7] focus:ring-2 focus:ring-[#0BD0C7]/30 outline-none transition"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email address
                                        </label>
                                        <div className="relative">
                                            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="e.g. jane@example.com"
                                                className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#0BD0C7] focus:ring-2 focus:ring-[#0BD0C7]/30 outline-none transition"
                                            />
                                        </div>
                                    </div>

                                    {/* Note (optional) */}
                                    <div>
                                        <label htmlFor="note" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Note <span className="font-normal text-gray-400">(optional)</span>
                                        </label>
                                        <div className="relative">
                                            <FaRegCommentDots className="absolute left-4 top-4 text-gray-400" />
                                            <textarea
                                                id="note"
                                                name="note"
                                                rows={4}
                                                value={form.note}
                                                onChange={handleChange}
                                                placeholder="Tell us a little about yourself or why you'd like to join."
                                                className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#0BD0C7] focus:ring-2 focus:ring-[#0BD0C7]/30 outline-none transition resize-y"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full inline-flex items-center justify-center space-x-2 bg-[#0BD0C7] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0c6478] transition-all duration-300 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                                    >
                                        <span>{status === 'submitting' ? 'Submitting…' : 'Submit'}</span>
                                        {status !== 'submitting' && <FaArrowRight />}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
