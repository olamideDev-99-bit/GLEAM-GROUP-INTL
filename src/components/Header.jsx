import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navigation = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { 
            name: 'More', 
            path: '#',
            children: [
                { name: 'Events', path: '/events' },
                { name: 'Category', path: '/category' },
            ]
        },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg'
                : 'bg-white shadow-md'
                }`}
        >
            <nav className="px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo Section - Left */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="flex items-center">
                            {/* GLEAM GROUP Logo */}
                            <div className="border-r-2 border-[#0BD0C7] pr-4 mr-4 transition-all group-hover:border-[#0c6478]">
                                <div className="flex flex-col justify-center items-center">
                                    <img src="GLEAM-Logo.png" alt="GLEAM GROUP" className="md:w-10 w-8 md:h-10 h-8 object-cover mb-2" />
                                    <span className="text-xs text-gray-500 -mt-1">GLEAM GROUP</span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation - Centered */}
                    <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
                        {navigation.map((item) => (
                            item.children ? (
                                <div key={item.name} className="relative group">
                                    <button
                                        className="flex items-center text-gray-700 hover:text-[#0BD0C7] font-medium transition-colors duration-300"
                                    >
                                        {item.name}
                                        <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                                    </button>
                                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        <div className="py-2">
                                            {item.children.map((child) => (
                                                <NavLink
                                                    key={child.name}
                                                    to={child.path}
                                                    className={({ isActive }) =>
                                                        `block px-4 py-2 text-sm transition-colors duration-300 ${isActive
                                                            ? 'text-[#0BD0C7] bg-gray-50'
                                                            : 'text-gray-700 hover:text-[#0BD0C7] hover:bg-gray-50'
                                                        }`
                                                    }
                                                >
                                                    {child.name}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `font-medium transition-colors duration-300 ${isActive
                                            ? 'text-[#0BD0C7] border-b-2 border-[#0BD0C7] pb-1'
                                            : 'text-gray-700 hover:text-[#0BD0C7]'
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            )
                        ))}
                    </div>

                    {/* Social Media Icons & CTA - Right (Desktop only) */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {/* Social Media Icons */}
                        <a
                            href="https://instagram.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-[#0BD0C7] transition-all duration-300 hover:scale-110"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="w-5 h-5" />
                        </a>
                        <a
                            href="https://x.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-[#0BD0C7] transition-all duration-300 hover:scale-110"
                            aria-label="X (Twitter)"
                        >
                            <FaXTwitter className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-100 animate-fade-in">
                        {navigation.map((item) => (
                            item.children ? (
                                <div key={item.name} className="block">
                                    <button
                                        onClick={() => setMoreOpen(!moreOpen)}
                                        className="w-full flex items-center justify-between px-4 py-3 font-medium rounded-lg text-gray-700 hover:text-[#0BD0C7] hover:bg-gray-50 transition-colors duration-300"
                                    >
                                        {item.name}
                                        <ChevronDown className={`w-5 h-5 transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {moreOpen && (
                                        <div className="pl-8 pr-4 py-2 space-y-1">
                                            {item.children.map((child) => (
                                                <NavLink
                                                    key={child.name}
                                                    to={child.path}
                                                    className={({ isActive }) =>
                                                        `block px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${isActive
                                                            ? 'bg-[#0BD0C7]/10 text-[#0BD0C7]'
                                                            : 'text-gray-600 hover:text-[#0BD0C7] hover:bg-gray-50'
                                                        }`
                                                    }
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {child.name}
                                                </NavLink>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `block px-4 py-3 font-medium rounded-lg transition-colors duration-300 ${isActive
                                            ? 'bg-[#0BD0C7]/10 text-[#0BD0C7]'
                                            : 'text-gray-700 hover:text-[#0BD0C7] hover:bg-gray-50'
                                        }`
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </NavLink>
                            )
                        ))}
                        
                        {/* Mobile Social Media Icons */}
                        <div className="px-4 pt-6 pb-4">
                            <div className="flex justify-center space-x-8">
                                <a
                                    href="https://instagram.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-[#0BD0C7] transition-all duration-300 hover:scale-110"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram className="w-7 h-7" />
                                </a>
                                <a
                                    href="https://x.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-[#0BD0C7] transition-all duration-300 hover:scale-110"
                                    aria-label="X (Twitter)"
                                >
                                    <FaXTwitter className="w-7 h-7" />
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;