import { Link } from 'react-router-dom';
import {
    FaArrowRight,
    FaChartLine,
    FaInstagram,
    FaVideo,
    FaGraduationCap,
    FaCalendarAlt,
    FaSearch,
    FaCommentDots,
    FaLightbulb
} from 'react-icons/fa';
import { CeativeDirector, group, StrategicManager } from '../assets/images';

const Services = () => {
    const services = [
        {
            id: "strategy",
            title: "TKGN STRATEGY",
            subtitle: "Lead with Strategy",
            description: "Everything starts with clarity. TKGN Strategy works with founders, marketing teams, and growing businesses to develop clear brand positioning, launch plans, and marketing strategy that fuels long-term growth.",
            icon: FaChartLine,
            bgColor: "from-[#0c6478] to-[#0BD0C7]",
            image: StrategicManager,
            offerings: [
                "Brand Strategy and Positioning",
                "Digital Campaign and Launch Planning",
                "Marketing Funnels and Audience Planning",
                "Brand Messaging and Voice Development",
                "Business Strategy and Monetization Mapping",
                "Pitch Decks and Investor Communication",
                "Market Research and Target Audience Clarity",
                "Strategy Workshops and Intensives"
            ],
            ctaText: "Schedule A Discovery Call To Begin",
            ctaLink: "/discovery-call"
        },
        {
            id: "brands",
            title: "TKGN BRANDS",
            subtitle: "Build a Consistent Digital Presence",
            description: "TKGN Brands manages your day-to-day digital identity. From social media platforms to personal brands, we help you stay visible, structured, and relevant — all while growing your audience and aligning with your business goals.",
            icon: FaInstagram,
            bgColor: "from-[#0BD0C7] to-[#0c6478]",
            image: CeativeDirector,
            offerings: [
                "Social Media Management",
                "Monthly Content Planning and Strategy",
                "Caption Writing and Hashtag Optimization",
                "Instagram and TikTok Feed Layouts",
                "Community Engagement",
                "Brand Voice Development",
                "Content Calendar Management",
                "Analytics and Reporting"
            ],
            ctaText: "Activate Windows",
            ctaLink: "/contact"
        },
        {
            id: "studios",
            title: "TKGN STUDIOS",
            subtitle: "Create Content That Moves People",
            description: "TKGN Studios is our in-house production team that creates visual content for brands that want to show up with clarity, professionalism, and relevance. We shoot in Abuja and Lagos, delivering digital-first visuals that fuel social media campaigns and product launches.",
            icon: FaVideo,
            bgColor: "from-[#0c6478] to-[#0BD0C7]",
            image: "https://i.pinimg.com/736x/8e/7e/4e/8e7e4e0e9b5c2e0e9e0e9e0e9e0e9e0e.jpg",
            offerings: [
                "Beats and Shortform Video Production",
                "Lifestyle and Product Photography",
                "Behind-the-Scenes and Campaign Coverage",
                "Onsite Content Creation (Floor or Camera)",
                "Video Editing and Motion Design",
                "Creative Direction and Styling Support",
                "Production Scheduling and Team Coordination",
                "Post-Production and Color Grading"
            ],
            ctaText: "Learn More About Our Studio",
            ctaLink: "https://www.tkgnstudios.com"
        },
        {
            id: "akademy",
            title: "THE AKADEMY",
            subtitle: "Learn the Skills. Launch the Career.",
            description: "The Akademy is our learning hub for digital creatives, brand managers, and entrepreneurs. Whether you're managing your own platforms or growing your creative career, our on-demand courses give you the skills and confidence to succeed.",
            icon: FaGraduationCap,
            bgColor: "from-[#0BD0C7] to-[#0c6478]",
            image: "https://i.pinimg.com/736x/0d/3e/4f/0d3e4f0e9b5c2e0e9e0e9e0e9e0e9e0e.jpg",
            offerings: [
                "Social Media Management",
                "Content Creation and Strategy",
                "Instagram Feed Planning",
                "Digital Marketing Fundamentals",
                "Personal Brand Development",
                "Creative Strategy",
                "Analytics and Insights",
                "Portfolio Building"
            ],
            ctaText: "Go to The Akademy",
            ctaLink: "/akademy"
        }
    ];

    const consultationFeatures = [
        {
            icon: FaSearch,
            title: "Audit your existing content or brand strategy"
        },
        {
            icon: FaCalendarAlt,
            title: "Review upcoming campaigns or launches"
        },
        {
            icon: FaCommentDots,
            title: "Troubleshoot social media or edit issues"
        },
        {
            icon: FaLightbulb,
            title: "Get expert input to guide your internal teams"
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section
                className="relative text-white py-20 bg-cover bg-center bg-no-repeat h-[80vh] flex items-center"
                style={{
                    backgroundImage: `url(${group})`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.85)] to-[rgba(0,0,0,0.85)]"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Our <span className="text-[#0BD0C7]">Services</span>
                        </h1>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto">
                            Creative Solutions. Strategic Execution.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                            Full-Service Creative Company
                        </h2>
                        <p className="text-gray-600 mb-6">
                            We are a full-service creative company offering brand strategy, social media management,
                            digital marketing, and visual production for brands that want to grow with excellence.
                        </p>
                        <p className="text-gray-600 mb-8">
                            At The KJGold Network, we bring tailored packages, deep insights, and purposeful storytelling
                            to simplify the digital experience for our clients. Whether you need strategic planning or
                            creative development, The KJGold Network is your trusted partner for digital growth.
                        </p>
                        <Link
                            to="/discovery-call"
                            className="inline-flex items-center space-x-2 bg-[#0BD0C7] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0c6478] transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            <span>Book a Discovery Call</span>
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Sections */}
            {services.map((service, index) => (
                <section key={service.id} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${service.bgColor} text-white px-4 py-2 rounded-full mb-6`}>
                                    <service.icon className="w-5 h-5" />
                                    <span className="text-sm font-semibold">{service.title}</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                                    {service.subtitle}
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold mb-4 text-[#0c6478]">What We Offer:</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {service.offerings.map((offering, idx) => (
                                            <div key={idx} className="flex items-center space-x-2">
                                                <div className="w-1.5 h-1.5 bg-[#0BD0C7] rounded-full"></div>
                                                <span className="text-gray-600 text-sm">{offering}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <Link
                                    to={service.ctaLink}
                                    className="inline-flex items-center space-x-2 text-[#0BD0C7] font-semibold hover:text-[#0c6478] transition-colors group"
                                >
                                    <span>{service.ctaText}</span>
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                <div className="bg-gradient-to-br from-[#0c6478]/10 to-[#0BD0C7]/10 rounded-2xl p-4">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Consultation Calls Section */}
            <section className="py-20 bg-[#0c6478] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Consultation Calls</h2>
                        <div className="w-24 h-1 bg-[#0BD0C7] mx-auto mb-6"></div>
                        <p className="text-xl max-w-3xl mx-auto">
                            Need Expert Support Without a Full Retainer?
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg mb-6">
                                Sometimes, you don't need a full creative team — you just need to speak to someone who
                                understands your vision to truly build. Our consultation sessions are built for founders,
                                marketing heads, or creatives who need strategic input on their brand, platform, or
                                campaign direction.
                            </p>
                            <h3 className="text-2xl font-bold mb-4">Who Is This For?</h3>
                            <div className="space-y-3">
                                {consultationFeatures.map((feature, idx) => (
                                    <div key={idx} className="flex items-center space-x-3">
                                        <feature.icon className="text-[#0BD0C7] text-xl" />
                                        <span>{feature.title}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8">
                                <Link
                                    to="/discovery-call"
                                    className="inline-flex items-center space-x-2 bg-[#0BD0C7] text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#0c6478] transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    <span>Book a Consultation Call</span>
                                    <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                                <div className="text-center">
                                    <FaCalendarAlt className="text-[#0BD0C7] text-5xl mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold mb-2">Get Expert Input</h3>
                                    <p className="text-white/80">
                                        You get focused, expert advice — without committing to full execution.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
                        Let's work together to bring your brand vision to life with strategy, creativity, and purpose.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/discovery-call"
                            className="inline-block bg-[#0BD0C7] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0c6478] transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Book a Discovery Call
                        </Link>
                        <Link
                            to="/akademy"
                            className="inline-block border-2 border-[#0BD0C7] text-[#0BD0C7] px-8 py-3 rounded-full font-semibold hover:bg-[#0BD0C7] hover:text-white transition-all duration-300"
                        >
                            Explore The Akademy
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;