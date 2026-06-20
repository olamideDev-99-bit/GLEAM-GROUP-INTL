import { FaPhoneAlt, FaEnvelope, FaTimes } from 'react-icons/fa';

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" 
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-2xl max-w-sm w-full p-8 relative shadow-2xl transform transition-all text-center" 
                onClick={e => e.stopPropagation()}
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
                    aria-label="Close modal"
                >
                    <FaTimes />
                </button>
                <h3 className="text-2xl font-bold text-[#0c6478] mb-6">Get in Touch</h3>
                <div className="flex justify-center space-x-8">
                    <a href="tel:07056619999" className="flex flex-col items-center group">
                        <div className="w-16 h-16 bg-[#0BD0C7]/10 text-[#0BD0C7] group-hover:bg-[#0BD0C7] group-hover:text-white rounded-full flex items-center justify-center transition-all duration-300 mb-3 shadow-sm group-hover:shadow-md">
                            <FaPhoneAlt className="text-2xl" />
                        </div>
                        <span className="text-gray-700 font-medium group-hover:text-[#0BD0C7] transition-colors">Call Us</span>
                    </a>
                    <a href="mailto:Info@gleamgroupint.com" className="flex flex-col items-center group">
                        <div className="w-16 h-16 bg-[#0c6478]/10 text-[#0c6478] group-hover:bg-[#0c6478] group-hover:text-white rounded-full flex items-center justify-center transition-all duration-300 mb-3 shadow-sm group-hover:shadow-md">
                            <FaEnvelope className="text-2xl" />
                        </div>
                        <span className="text-gray-700 font-medium group-hover:text-[#0c6478] transition-colors">Email Us</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
