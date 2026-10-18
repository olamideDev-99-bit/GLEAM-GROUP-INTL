import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaUsers,
  FaLightbulb,
  FaChartLine,
  FaRocket,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaGem,
} from "react-icons/fa";
import ContactModal from "../components/ContactModal";
import {
  AssistantTL,
  CeativeDirector,
  group,
  HR,
  ProjectManager,
  sad,
  StrategicManager,
  TL,
} from "../assets/images";

const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const truncateText = (text, wordLimit = 30) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const teamMembers = [
    {
      name: "Olamide Adejare",
      position: "Creative director",
      description: `Olamide leads the creative vision and brand expression for Gleam Group Int’l, shaping how hospitality brands look, feel, and connect with their audiences. He specializes in translating business strategy into compelling visual narratives, immersive brand systems, and design languages that resonate with guests and drive commercial value. His creative philosophy centers on clarity, emotion, and distinction. By aligning design with purpose, he ensures every touchpoint, from digital platforms to physical spaces, communicates a brand’s story with intention and leaves a lasting impression. At Gleam, Olamide bridges aesthetics and strategy, turning abstract ideas into tangible brand assets that elevate perception and performance. He works closely with clients to craft identities that are not only beautiful but functional, scalable, and rooted in the realities of hospitality operations. For him, great design in hospitality is more than decoration. It is direction, differentiation, and the silent language that makes guests feel something before a word is spoken.`,
      image: CeativeDirector,
      linkedin:
        "https://www.linkedin.com/in/olamide-adejare-3a74bb332?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      email: "Info@olamideofficial.com",
    },
    {
      name: "ISIEKWENE SANDRA NKEM ",
      position: "Team Lead manager",
      description: `Leads hospitality teams within GLEAM-GROUP, ensuring service excellence is clearly defined and consistently delivered across every guest interaction. She operates at the intersection of people and performance, guiding teams with clarity, discipline, and alignment to translate hospitality standards into seamless, intentional guest experiences. Within GLEAM, she contributes to strengthening service culture across client establishments, improving operational flow, and ensuring teams are structured for consistency and excellence in delivery. Her approach is driven by a genuine love for hospitality: the energy of service, the precision of execution, and the fulfillment of a well crafted guest experience. For her, leading teams is not only a responsibility but a meaningful expression of structure, people, and shared excellence. As part of GLEAM’s collective of hospitality specialists, she helps bridge strategy and execution, turning ideas into measurable impact across hospitality brands. For her, hospitality is not just service; it is experience, designed and delivered with intention.`,
      image: sad,
      linkedin:
        "https://www.linkedin.com/in/isiekwene-sandra-09165a26b?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      email: "Sandnkemtessy@gmail.com",
    },
    {
      name: "Tobechukwu Uroh",
      position: "Strategic manager",
      description: `Tobechukwu Uroh is responsible for shaping the strategic direction and growth initiatives of Gleam. Passionate about the future of hospitality, he specializes in identifying opportunities, building scalable systems, and developing frameworks that enable brands to thrive in an increasingly competitive landscape. His leadership philosophy is rooted in intentionality, innovation, and excellence. By bridging creative vision with operational discipline, he helps transform ambitious ideas into meaningful outcomes that drive both business performance and exceptional guest experiences. Through Gleam, Tobechukwu is committed to helping hospitality brands build with clarity, lead with purpose, and leave a lasting mark on the people they serve.`,
      image: StrategicManager,
      linkedin:
        "https://www.linkedin.com/in/tobechukwu-uroh-640bb1414?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      email: "atillasemail76@gmail.com",
    },
    {
      name: "Oladimeji Adams",
      position: "Project manager",
      description: ` Oladimeji plays a key role in driving structure, coordination, and execution across Gleam Group International, helping translate the firm’s ideas and strategic direction into clearlydefined projects, actionable plans, and measurable outcomes. From the early stages of Gleam, Oladimeji has been part of the journey of transforming a
vision into a growing professional firm with greater structure, clarity, and direction. His
contribution spans projects, people, timelines, deliverables, and priorities, ensuring that
ideas move beyond discussions and into meaningful execution. As Project Manager, he operates at the intersection of strategy and implementation,
translating objectives into practical workflows and ensuring that teams remain aligned
throughout the project lifecycle. He brings structure to complex initiatives, establishes
priorities, monitors progress, coordinates responsibilities, and helps identify challenges
before they become obstacles to delivery.
His approach to project management is built around ownership, accountability, communication, adaptability, and consistency. He understands that successful project
delivery is not simply about meeting deadlines. It is about ensuring that everyone involved understands the objective, their responsibility, and the standard expected from the final
outcome. At Gleam, Oladimeji has played an important role in coordinating and supporting initiatives
across the firm, including training programmes, content development, brand activities,
strategic projects, and other business priorities. His role helps maintain the connection
between what Gleam sets out to achieve and what needs to happen to bring those
objectives to life.
Working within a growing firm requires the ability to adapt quickly. Priorities evolve, new
opportunities emerge, and challenges often require immediate solutions. Oladimeji
approaches these situations with a practical and solution driven mindset, remaining focused
on maintaining momentum while keeping the broader vision in sight.
His role extends beyond managing individual projects. It involves helping create the structure
through which ideas can be developed, teams can collaborate effectively, responsibilities can
remain clear, and execution can consistently reflect the standards of the firm.
For Oladimeji, project management is about creating the bridge between intention and
action. It is about taking an idea, giving it structure, establishing direction, assigning
responsibility, and ensuring that it continues to move until it becomes a tangible result.
His journey with Gleam reflects the growth that comes from building alongside a firm from its
early stages. Being involved from the beginning has given him a deeper understanding of
Gleam’s vision, its evolving capabilities, the demands of its projects, and the standards it
continues to establish within the hospitality industry.
Through this experience, Oladimeji continues to develop as a professional who understands
that meaningful growth requires more than ambitious ideas. It requires disciplined execution,
strong coordination, clear communication, and people willing to take ownership of moving
the vision forward.
At Gleam, he represents an important part of that execution, helping ensure that strategy
has structure, structure creates movement, and movement leads to results.
For him, great project management is not simply about getting things done.
It is about getting the right things done, by the right people, at the right time, and in a way
that moves the firm closer to where it intends to be.`,
      image: ProjectManager,
      linkedin: "https://www.linkedin.com/in/oladimeji-adams-87077424b",
      email: "oladimejiadams9066@gmail.com",
    },
    {
      name: "Franca Imene Oghenevwaire",
      position: "Human Resources",
      description: `Franca Imene leads the Human Resources function at GLEAM, with a focus on building the people, structures, and culture that support the company's growth.
      With experience across Human Resources, HR Administration, Internal Control, Management, Executive Support, and Customer Service, she brings a well-rounded understanding of people management, business operations, and organizational structure.
      At GLEAM, her focus is on establishing a strong HR foundation through effective recruitment, employee development, performance management, clear policies, structured processes, and a positive workplace culture.
      As GLEAM grows, Franca aims to build a people-first HR function that combines accountability with support, structure with flexibility, and performance with professional growth.
      Her goal is to ensure that GLEAM attracts the right talent, develops its people, and creates a culture where individuals understand their value and are equipped to contribute meaningfully to the company's success.
      Her approach is simple: build the right people, create the right structure, and develop a culture that allows both the people and the business to grow.`,
      image: HR,
      linkedin:
        "https://www.linkedin.com/in/franca-imene-62a201318?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      email: "Francaimene@gmail.com",
    },
    // {
    //     name: "Rachael Osikoya",
    //     position: "Assistant Team Lead Manager",
    //     description: `Rachael Osikoya is a dynamic Hospitality and Administrative Professional specializing in executive support, stakeholder management, and team development. As an Assistant Team Leader, she drives operational efficiency by coordinating priorities, supporting leadership, and developing high-performing teams. Recognized for her professionalism, strategic thinking, and commitment to service excellence, she consistently delivers exceptional value to clients, stakeholders, and organizations.`,
    //     image: AssistantTL,
    //     linkedin: "https://www.linkedin.com/in/rachaelosikoya22?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    //     email: "rachaelosikoya@gmail.com"
    // },
  ];

  const values = [
    {
      icon: FaGem,
      title: "Intentional Excellence",
      description:
        "We believe extraordinary outcomes are never accidental. Every strategy, experience, and interaction should reflect precision, purpose, and an unwavering commitment to quality.",
    },
    {
      icon: FaUsers,
      title: "Human-Centered Hospitality",
      description:
        "Hospitality begins and ends with people. We cultivate meaningful connections, prioritize empathy, and design experiences that inspire trust, loyalty, and belonging.",
    },
    {
      icon: FaLightbulb,
      title: "Bold Creativity",
      description:
        "We challenge convention through imaginative thinking and purposeful storytelling, transforming ideas into experiences that captivate, resonate, and leave a lasting impression.",
    },
    {
      icon: FaChartLine,
      title: "Growth with Structure",
      description:
        "Lasting success requires more than ambition. Through strategic clarity, operational discipline, and intentional systems, we help brands scale with confidence and consistency.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        className="relative text-white py-12 md:py-20 bg-cover bg-top bg-no-repeat min-h-[60vh] md:min-h-screen flex items-center "
        style={{
          backgroundImage: `url(${group})`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.8)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-[#0BD0C7]">Us</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Empowering Brands and Creators Through Strategy, Storytelling, and
              Execution
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
                Gleam was founded on a simple belief: hospitality has the power
                to leave a lasting mark.
              </p>
              <p className="text-gray-600 mb-4">
                What began as a vision to help brands communicate more
                effectively has evolved into a mission to transform the way
                hospitality businesses grow, operate, and create experiences. We
                saw an industry filled with potential—yet often constrained by
                fragmented strategies, inconsistent execution, and untapped
                opportunities.
              </p>
              <p className="text-gray-600 mb-4">
                So, we chose to do things differently.
              </p>
              <p className="text-gray-600 mb-4">
                Today, Gleam partners with ambitious hospitality brands to build
                stronger foundations, elevate guest experiences, and unlock
                sustainable growth. Through strategic thinking, creative
                excellence, and operational intelligence, we help businesses
                move beyond transactions to create meaningful connections.
              </p>
              <p className="text-gray-600 mb-4">
                Because the brands that shape the future of hospitality are not
                built by chance.
              </p>
              <p className="text-gray-600">They are built with intention.</p>
            </div>
            <div>
              <img
                src={group}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Core Belief
          </h2>
          <div className="w-24 h-1 bg-[#0BD0C7] mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light">
            We believe hospitality is one of the most powerful expressions of
            human connection and that every experience, when crafted with
            intention, has the potential to inspire loyalty, create distinction,
            and leave a lasting mark.
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
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="bg-[#0BD0C7]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-[#0BD0C7] text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {value.title}
                </h3>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square md:aspect-auto md:h-64 object-cover object-top transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0c6478]/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0c6478] mb-1 uppercase">
                    {member.name}
                  </h3>
                  <p className="text-[#0BD0C7] font-semibold text-sm mb-3 capitalize">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {truncateText(member.description, 40)}
                    {member.description.split(" ").length > 40 && (
                      <button
                        onClick={() => setSelectedMember(member)}
                        className="text-[#0BD0C7] hover:text-[#0c6478] font-semibold ml-1 inline focus:outline-none"
                      >
                        Read more
                      </button>
                    )}
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
                      href={`mailto:${member.email}`}
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
            We are always growing. If you are passionate about creating,
            structuring, and digital storytelling, you may be a great fit for
            our team.
          </p>
          <Link
            to="/careers"
            className="inline-flex items-center space-x-2 bg-white text-[#0c6478] px-8 py-3 rounded-full font-semibold hover:bg-[#0BD0C7] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>Join Us Now</span>
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
            Let's bring your brand vision to life with strategy, creativity, and
            purpose.
          </p>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="inline-block bg-[#0BD0C7] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0c6478] transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
          >
            Book a Discovery Call
          </button>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className="flex flex-col md:flex-row gap-6 items-start mt-2">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full md:w-48 aspect-square md:aspect-auto md:h-48 rounded-xl object-cover object-top shadow-md"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#0c6478] mb-1 uppercase">
                  {selectedMember.name}
                </h3>
                <p className="text-[#0BD0C7] font-semibold mb-4 capitalize">
                  {selectedMember.position}
                </p>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {selectedMember.description}
                </p>
                <div className="flex space-x-4 pt-4 mt-4 border-t border-gray-100">
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#0BD0C7] transition-colors"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="text-gray-400 hover:text-[#0BD0C7] transition-colors"
                  >
                    <FaEnvelope className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

export default About;
