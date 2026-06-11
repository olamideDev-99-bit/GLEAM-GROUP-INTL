import { Link } from 'react-router-dom';
import { FaArrowRight, FaUsers, FaLightbulb, FaChartLine, FaRocket, FaLinkedin, FaTwitter, FaEnvelope, FaGem } from 'react-icons/fa';
import { AssistantTL, CeativeDirector, group, HR, ProjectManager, StrategicManager, TL } from '../assets/images';

const About = () => {
    const teamMembers = [
        {
            name: "Adora John-Bro",
            position: "HR",
            description: "Adora is the visionary behind GLEAM GROUP. With a bold mix of creativity, spiritual clarity, and strategy, she leads the team in shaping exceptional brand experiences.",
            image: HR,
            linkedin: "#",
            twitter: "#",
            email: "#"
        },
        {
            name: "Joy Erhuwu John",
            position: "Project manager",
            description: "Joy ensures structure and alignment across teams and timelines. With a calm and strategic presence, she oversees operations across our client projects, internal systems, and cross-city teams.",
            image: ProjectManager,
            linkedin: "#",
            twitter: "#",
            email: "#"
        },
        {
            name: "Hadasa Arinze",
            position: "Team Lead manager",
            description: "Hadasa leads the creative content process across client accounts with a deep understanding of digital communication. She guides teams to produce content that is both strategic and story-driven.",
            image: TL,
            linkedin: "#",
            twitter: "#",
            email: "#"
        },
        {
            name: "Grace Yika Maikano",
            position: "Ceative director",
            description: "Grace supports the structure and growth of our team by managing recruitment, onboarding, and HR systems across the network. She ensures every team member feels equipped and informed.",
            image: CeativeDirector,
            linkedin: "#",
            twitter: "#",
            email: "#"
        },
        {
            name: "Grace Yika Maikano",
            position: "Strategic manager",
            description: "Grace supports the structure and growth of our team by managing recruitment, onboarding, and HR systems across the network. She ensures every team member feels equipped and informed.",
            image: StrategicManager,
            linkedin: "#",
            twitter: "#",
            email: "#"
        },

        {
            name: "Grace Yika Maikano",
            position: "Assistant Team Lead Manager",
            description: "Grace supports the structure and growth of our team by managing recruitment, onboarding, and HR systems across the network. She ensures every team member feels equipped and informed.",
            image: AssistantTL,
            linkedin: "#",
            twitter: "#",
            email: "#"
        },
    ];

    const values = [
        {
            icon: FaGem,
            title: "Intentional Excellence",
            description: "We believe extraordinary outcomes are never accidental. Every strategy, experience, and interaction should reflect precision, purpose, and an unwavering commitment to quality."
        },
        {
            icon: FaUsers,
            title: "Human-Centered Hospitality",
            description: "Hospitality begins and ends with people. We cultivate meaningful connections, prioritize empathy, and design experiences that inspire trust, loyalty, and belonging."
        },
        {
            icon: FaLightbulb,
            title: "Bold Creativity",
            description: "We challenge convention through imaginative thinking and purposeful storytelling, transforming ideas into experiences that captivate, resonate, and leave a lasting impression."
        },
        {
            icon: FaChartLine,
            title: "Growth with Structure",
            description: "Lasting success requires more than ambition. Through strategic clarity, operational discipline, and intentional systems, we help brands scale with confidence and consistency."
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section
                className="relative text-white py-20 bg-cover bg-center bg-no-repeat h-[80vh] flex items-center "
                style={{
                    backgroundImage: `url(${group})`,
                }}
            >
                <div className="absolute inset-0 bg-linear-to-r from-[rgba(0,0,0,0.85)] to-[rgba(0,0,0,0.85)]"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            About <span className="text-[#0BD0C7]">Us</span>
                        </h1>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto">
                            Empowering Brands and Creators Through Strategy, Storytelling, and Execution
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                                Our Story
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Gleam was founded on a simple belief: hospitality has the power to leave a lasting mark.
                            </p>
                            <p className="text-gray-600 mb-4">
                                What began as a vision to help brands communicate more effectively has evolved into a mission to transform the way hospitality businesses grow, operate, and create experiences. We saw an industry filled with potential—yet often constrained by fragmented strategies, inconsistent execution, and untapped opportunities.
                            </p>
                            <p className="text-gray-600 mb-4">
                                So, we chose to do things differently.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Today, Gleam partners with ambitious hospitality brands to build stronger foundations, elevate guest experiences, and unlock sustainable growth. Through strategic thinking, creative excellence, and operational intelligence, we help businesses move beyond transactions to create meaningful connections.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Because the brands that shape the future of hospitality are not built by chance.
                            </p>
                            <p className="text-gray-600">
                                They are built with intention.
                            </p>
                        </div>
                        <div>
                            <img
                                src="https://i.pinimg.com/736x/ac/c5/7d/acc57d1a6ad3fa2dc815308e26194190.jpg"
                                alt="Our Story"
                                className="rounded-2xl shadow-xl w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Core Belief Section */}
            <section className="py-20 bg-[#0c6478] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Belief</h2>
                    <div className="w-24 h-1 bg-[#0BD0C7] mx-auto mb-8"></div>
                    <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light">
                        We believe hospitality is one of the most powerful expressions of human connection and that every experience, when crafted with intention, has the potential to inspire loyalty, create distinction, and leave a lasting mark.
                    </p>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                        Our Values
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                                <div className="bg-[#0BD0C7]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="text-[#0BD0C7] text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet The Team Section - Card Layout */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
                        Meet The Team
                    </h2>
                    <div className="w-24 h-1 bg-[#0BD0C7] mx-auto mb-12"></div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-[#0c6478]/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0c6478] mb-1">{member.name}</h3>
                                    <p className="text-[#0BD0C7] font-semibold text-sm mb-3">{member.position}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {member.description}
                                    </p>
                                    <div className="flex space-x-3 pt-2 border-t border-gray-100">
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-[#0BD0C7] transition-colors duration-300"
                                        >
                                            <FaLinkedin className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={member.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-[#0BD0C7] transition-colors duration-300"
                                        >
                                            <FaTwitter className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={member.email}
                                            className="text-gray-400 hover:text-[#0BD0C7] transition-colors duration-300"
                                        >
                                            <FaEnvelope className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Our Team Section */}
            <section className="py-20 bg-linear-to-r from-[#0c6478] to-[#0BD0C7] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
                    <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
                    <p className="text-xl mb-6 max-w-2xl mx-auto">
                        We are always growing. If you are passionate about creating, structuring, and digital
                        storytelling, you may be a great fit for our team.
                    </p>
                    <Link
                        to="/careers"
                        className="inline-flex items-center space-x-2 bg-white text-[#0c6478] px-8 py-3 rounded-full font-semibold hover:bg-[#0BD0C7] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        <span>Apply to Join Us</span>
                        <FaArrowRight />
                    </Link>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                        Ready to Work With Us?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
                        Let's bring your brand vision to life with strategy, creativity, and purpose.
                    </p>
                    <Link
                        to="/discovery-call"
                        className="inline-block bg-[#0BD0C7] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0c6478] transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Book a Discovery Call
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;