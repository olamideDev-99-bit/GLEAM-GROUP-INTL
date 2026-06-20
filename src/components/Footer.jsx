import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
    ];

    const legalLinks = [
        { name: 'Terms & Conditions', path: '#' },
        { name: 'Privacy Policy', path: '#' },
    ];

    return (
        <footer className="bg-[#0c6478] text-white mt-auto">
            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-[#0BD0C7]">Contact</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 group">
                                <FaPhone className="text-[#0BD0C7] group-hover:scale-110 transition-transform" />
                                <a href="tel:+2347056619999" className="hover:text-[#0BD0C7] transition-colors">
                                    07056619999
                                </a>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-start space-x-3 group">
                                    <FaEnvelope className="text-[#0BD0C7] mt-1 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <p className="text-sm text-white/80">Inquiries:</p>
                                        <a href="mailto:Info@gleamgroupint.com" className="hover:text-[#0BD0C7] transition-colors break-all">
                                           Info@gleamgroupint.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 group">
                                <FaMapMarkerAlt className="text-[#0BD0C7] mt-1 group-hover:scale-110 transition-transform" />
                                <p className="text-sm leading-relaxed">
                                    5 Idowu Martins Street<br />
                                    VI Lagos, Nigeria.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-[#0BD0C7]">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="hover:text-[#0BD0C7] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-[#0BD0C7]">Legal</h3>
                        <ul className="space-y-2">
                            {legalLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="hover:text-[#0BD0C7] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-[#0BD0C7]">Follow</h3>
                        <p className="text-sm mb-4 text-white/80">
                            Stay up to date with the latest news and program offerings from GLEAM GROUP.
                        </p>

                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#0BD0C7] focus:ring-1 focus:ring-[#0BD0C7] transition-all"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#0BD0C7] hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl"
                            >
                                SUBSCRIBE
                            </button>
                        </form>

                        {/* Social Icons */}
                        <div className="flex justify-center space-x-4 mt-6">
                            <a
                                href="https://x.com/Gleamgroupint"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 p-2 rounded-full hover:bg-[#0BD0C7] transition-all duration-300 hover:scale-110"
                                aria-label="Twitter"
                            >
                                <FaTwitter className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/gleam_groupint?igsh=OG5oY2FmNTRnMnhx&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 p-2 rounded-full hover:bg-[#0BD0C7] transition-all duration-300 hover:scale-110"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/60">
                    <p>&copy; {new Date().getFullYear()} Gleam Group International. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;