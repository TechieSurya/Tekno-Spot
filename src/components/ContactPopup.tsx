import { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from '../app/firebaseConfig';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup = ({ isOpen, onClose }: ContactPopupProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: '',
    message: ''
  });

  const services = [
    'Web Design',
    'Web Development',
    'App Development',
    'E-Commerce Website',
    'SEO Services',
    'Social Media Marketing',
    'Content Marketing',
    'PPC Advertising',
    'Branding & Design',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
     try {
    await addDoc(collection(db, "contactSubmissions"), {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      service: formData.service,
      message: formData.message,
      createdAt: Timestamp.now(),
    });

    alert("Submitted successfully!");
    setFormData({
      name: "",
      email: "",
      mobile: "",
      service: "",
      message: "",
    });
  } catch (err) {
    console.error("Error submitting form:", err);
    alert("Something went wrong!");
  }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur flex items-center justify-center z-50 p-2">
      <div className="bg-white rounded-lg w-full max-w-md relative shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <X size={24} />
        </button>

        {/* Form content */}
        <div className="p-4 md:p-6">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Want to Grow Your Business!
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name field */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />

            {/* Email field */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />

            {/* Mobile field */}
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleInputChange}
              className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />

            {/* Service selection dropdown */}
            <div className="relative">
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white pr-10"
                required
              >
                <option value="">Choose Your Service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
            </div>

            {/* Message field */}
            <textarea
              name="message"
              placeholder="Tell us about your Enquiry"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />

            {/* Disclaimer text */}
            <p className="text-center text-sm text-gray-600 mt-4">
              We will get back to you within 24 hours<br/> <span className='font-semibold'> Reach Us @ +91-76049 21773</span>
            </p>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-brandBlue hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 mt-6"
            >
              Send a Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
