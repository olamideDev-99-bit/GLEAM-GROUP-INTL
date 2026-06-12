import { Link } from 'react-router-dom';
import { FaArrowRight, FaClock, FaChartLine, FaUsers, FaLightbulb, FaVideo, FaChalkboardTeacher, FaCube } from 'react-icons/fa';
import { group } from '../assets/images';
import { FaGroupArrowsRotate } from 'react-icons/fa6';

const Home = () => {
    // What We Offer data
    const offerings = [
        {
            icon: FaChartLine,
            title: "Strategic Growth Advisory",
            description: "Growth frameworks, market positioning, and business intelligence designed to unlock new opportunities and accelerate performance."
        },
        {
            icon: FaCube,
            title: "Brand Experience Architecture",
            description: "Designing cohesive brand experiences that strengthen perception, deepen engagement, and leave lasting impressions."
        },
        {
            icon: FaLightbulb,
            title: "Creative Intelligence & Storytelling",
            description: "Transforming ideas into compelling narratives and visual experiences that capture attention and inspire action."
        },
        {
            icon: FaChalkboardTeacher,
            title: "Leadership Development & Academy",
            description: "Equipping hospitality professionals with the skills, mindset, and expertise required to deliver excellence consistently."
        }
    ];

    // Services/Pricing data
    const services = [
        {
            title: "Discovery Call",
            duration: "25 min",
            price: "Free",
            priceLabel: "Free",
            buttonText: "Book Now",
            link: "/book/discovery-call",
            image: "https://i.pinimg.com/736x/0d/d8/67/0dd8679d83fbfa635ec96b9d019ed95d.jpg"
        },
        {
            title: "1-on-1 SMM Mentorship",
            duration: "1 hr",
            price: "₦50,000",
            buttonText: "Request to Book",
            link: "/book/mentorship",
            image: "https://i.pinimg.com/1200x/87/7a/2f/877a2f42ff08e2536d7c29c71036db85.jpg"
        },
        {
            title: "Brand Growth & Development",
            duration: "1 hr 30 min",
            price: "₦40,000",
            buttonText: "Request to Book",
            link: "/book/brand-consultation",
            image: "https://i.pinimg.com/736x/7e/6f/e3/7e6fe3488b60391e6c9f8b3d7ba382f9.jpg"
        },
        {
            title: "Social/Digital Strategy",
            duration: "1 hr 20 min",
            price: "₦20,000",
            buttonText: "Request to Book",
            link: "/book/strategy",
            image: "https://i.pinimg.com/1200x/df/81/ff/df81ff756d7b232bf5e54a82e9fb3243.jpg"
        },
        {
            title: "Marketing & Performance",
            duration: "2 hr",
            price: "₦40,000",
            buttonText: "Request to Book",
            link: "/book/marketing",
            image: "https://i.pinimg.com/736x/fd/51/50/fd515007f2f92de868516ea503897c91.jpg"
        },
        {
            title: "Personalized Training Workshop",
            duration: "4 hr",
            price: "₦250,000",
            buttonText: "Request to Book",
            link: "/book/training",
            image: "https://i.pinimg.com/736x/9d/e4/1d/9de41d6e269715f2d8355c7e192bf744.jpg"
        }
    ];

    // Client logos data
    const clients = [
        { name: "CeBIH", logo: "https://i.pinimg.com/736x/ac/c5/7d/acc57d1a6ad3fa2dc815308e26194190.jpg" },
        { name: "OFansUp", logo: "https://i.pinimg.com/736x/ac/c5/7d/acc57d1a6ad3fa2dc815308e26194190.jpg" },
        { name: "BEAUTY BY AD", logo: "https://i.pinimg.com/736x/ac/c5/7d/acc57d1a6ad3fa2dc815308e26194190.jpg" },
        { name: "+ More", logo: null, icon: FaUsers }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section
                className="relative text-white py-12 md:py-20 bg-cover bg-center bg-no-repeat min-h-[60vh] md:min-h-[80vh] flex items-center"
                style={{
                    backgroundImage: `url(${group})`,
                }}
            >
                <div className="absolute inset-0 bg-linear-to-r from-[rgba(0,0,0,0.85)] to-[rgba(0,0,0,0.85)]"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            GLEAM GROUP: <br />
                            <span className="text-[#0BD0C7]">Empowering African Brands</span>
                        </h1>
                        <p className="text-lg md:text-xl mb-8">
                            Looking for a creative and digital partner to take your brand to new heights?
                            GLEAM GROUP is here to help.
                        </p>
                        <Link
                            to="/discovery-call"
                            className="inline-block bg-white text-[#0c6478] px-8 py-3 rounded-full font-semibold hover:bg-[#0BD0C7] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Book a Discovery Call →
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div>
                            <img
                                src="https://i.pinimg.com/1200x/b0/27/c8/b027c8733b8f76a71be88d7ff7189bea.jpg"
                                alt="About GLEAM GROUP"
                                className="rounded-2xl shadow-xl w-full"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                                We Build Hospitality Brands That Leave a Mark.
                            </h2>
                            <p className="text-gray-600 mb-2">
                                In a world saturated with choices, attention is fleeting and loyalty is earned.
                            </p>
                            <p className="text-gray-600 mb-2">
                                Gleam helps hospitality businesses transcend transactions and create experiences that resonate long after the visit ends. Through strategic insight, elevated creative execution, and operational refinement, we help brands become more visible, more desirable, and more unforgettable.
                            </p>
                            <p className="text-gray-600 mb-2">
                                We don't chase trends. We build systems that last. Because excellence isn't a moment it's the standard.
                            </p>
                            <p className="text-gray-600 mb-2">
                                We build brands with gravity.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <FaChartLine className="text-[#0BD0C7] text-xl" />
                                    <span>Strategy</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FaLightbulb className="text-[#0BD0C7] text-xl" />
                                    <span>Experience</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FaGroupArrowsRotate className="text-[#0BD0C7] text-xl" />
                                    <span>Growth</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Creative Network Section */}
            <section className="py-12 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                                Our Creative Network
                            </h2>
                            <p className="text-gray-600 mb-4">
                                As a leading creative company, GLEAM GROUP empowers brands, creators,
                                and organizations with the tools and expertise they need to thrive in today's
                                digital landscape.
                            </p>
                            <p className="text-gray-600 mb-4">
                                We deliver complete solutions across strategy, branding, and content production,
                                creating work that inspires real connection.
                            </p>
                            <p className="text-gray-600">
                                Our team is made up of creative thinkers, digital experts, and storytellers who
                                bring precision and purpose to every project.
                            </p>
                        </div>
                        <div>
                            <img
                                src="https://i.pinimg.com/1200x/fd/eb/05/fdeb05d593ba1a0d490a3b2a950204a8.jpg"
                                alt="Creative Network Team"
                                className="rounded-2xl shadow-xl w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                        Excellence Across Every Touchpoint
                    </h2>
                    <p className=' text-center text-gray-600 mb-12 '>
                        The most memorable hospitality brands are built through hundreds of intentional moments. At Gleam, we combine strategy, creativity, operational intelligence, and professional development to help brands deliver exceptional experiences, inspire loyalty, and achieve sustainable growth.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {offerings.map((item, index) => (
                                <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="bg-[#0BD0C7]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                        <item.icon className="text-[#0BD0C7] text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            <img
                                src="https://i.pinimg.com/1200x/b0/20/b1/b020b149caf10d5dc8d67b77bc931d7a.jpg"
                                alt="Our Services"
                                className="rounded-2xl shadow-xl w-full h-64 md:h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* The Akademy Section */}
            <section className="py-12 md:py-20 bg-[#0c6478] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Those Who Intend to Lead</h2>
                            <p className="text-xl mb-6">
                                The Gleam Academy was created for ambitious professionals, visionary entrepreneurs, and future industry leaders who understand that excellence is a discipline not an accident.
                            </p>
                            <p className="text-lg mb-8">
                                Through practical learning, industry insights, and performance driven training, we help individuals and teams develop the skills, mindset, and confidence required to thrive in modern hospitality.
                            </p>
                            <Link
                                to="/"
                                className="inline-flex items-center space-x-2 bg-[#0BD0C7] text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#0c6478] transition-all duration-300"
                            >
                                <span>LEARN MORE</span>
                                <FaArrowRight />
                            </Link>
                        </div>
                        <div>
                            <img
                                src="https://i.pinimg.com/1200x/c5/93/99/c59399c94e777710163f3ed0695d858d.jpg"
                                alt="The Akademy Learning"
                                className="rounded-2xl shadow-2xl w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

  

            {/* Services/Pricing Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                            Our Services & Pricing
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Choose the perfect package for your needs. All consultations are tailored to your specific goals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-shadow">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <div className="flex items-center space-x-2 text-gray-600 mb-4">
                                    <FaClock className="text-[#0BD0C7]" />
                                    <span>{service.duration}</span>
                                </div>
                                <p className="text-2xl font-bold text-[#0c6478] mb-4">{service.price}</p>
                                <Link
                                    to={service.link}
                                    className="block text-center bg-[#0BD0C7] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#0c6478] transition-colors"
                                >
                                    {service.buttonText}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Work With Us Section */}
            <section className="py-12 md:py-20 bg-linear-to-r from-[#0c6478] to-[#0BD0C7] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something Remarkable</h2>
                            <div className="w-24 h-1 bg-white mb-8"></div>
                            <p className="text-lg mb-4">
                                Every extraordinary hospitality brand begins with a decision—the decision to pursue excellence, challenge convention, and create experiences that leave a lasting impression.
                            </p>
                            <p className="text-lg mb-4">
                                Whether you're refining an existing brand, preparing for your next phase of growth, or reimagining what hospitality can look like, Gleam is ready to partner with you.
                            </p>
                            <p className="text-lg mb-4">
                                Together, we'll transform ideas into experiences, ambition into strategy, and potential into measurable impact.
                            </p>
                            <p className="text-lg mb-4">
                                The future of your brand deserves intentionality, expertise, and a partner committed to seeing you thrive.
                            </p>
                            <p className="text-lg font-semibold mb-8">
                                Let's build something remarkable.
                            </p>
                            <Link
                                to="/"
                                className="inline-block bg-white text-[#0c6478] px-8 py-3 rounded-full font-semibold hover:bg-[#0BD0C7] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                Schedule a Discovery Session →
                            </Link>
                        </div>
                        <div>
                            <img
                                src="https://i.pinimg.com/1200x/ac/cd/cf/accdcf02196d6f80bc18412885981619.jpg"
                                alt="Work With Us"
                                className="rounded-2xl shadow-2xl w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                        The Future of Your Brand Starts Here
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
                        Extraordinary brands are not built by chance. They are shaped by vision, refined through strategy, and sustained through intentional execution.
                    </p>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
                        Whether you're launching something new or reimagining what's possible, Gleam exists to help you create experiences that inspire loyalty, command attention, and leave a lasting impression.
                    </p>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
                        Let's build something remarkable together.
                    </p>
                    <Link
                        to=""
                        className="inline-block bg-[#0BD0C7] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0c6478] transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Start the Conversation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;