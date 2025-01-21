import React, { useState, useEffect } from 'react';
import { FaCut as Scissors, FaHeart as Heart, FaClock as Clock, FaStar as Star, FaUsers as Users, FaFacebook as Facebook, FaTwitter as Twitter, FaInstagram as Instagram, FaLinkedin as Linkedin, FaMapMarkerAlt as MapPin, FaPhone as Phone, FaEnvelope as Mail, FaTimes as X } from 'react-icons/fa';
import { MdAutoAwesome as Sparkles } from 'react-icons/md';


const images = [
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=1600&q=80',
];

const services = [
  {
    title: 'Hair Treatment',
    description: 'Advanced hair care solutions for all types of hair problems',
    icon: <Scissors className="w-6 h-6" />,
  },
  {
    title: 'Hair Transplant',
    description: 'State-of-the-art hair transplant procedures with natural results',
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: 'Skin Treatment',
    description: 'Comprehensive skincare solutions for radiant, healthy skin',
    icon: <Sparkles className="w-6 h-6" />,
  },
];

const serviceTypes = ['Hair Treatment', 'Hair Transplant', 'Skin Treatment', 'Hair Analysis', 'General Consultation'];

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Here you would typically make an API call to your email service
      // For demonstration, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setTimeout(() => {
        setIsModalOpen(false);
        setFormData({
          name: '',
          phone: '',
          serviceType: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`bg-white shadow-md fixed w-full z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Trichoderm clinic
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-purple-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-600 hover:text-purple-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Slider */}
      <section id="home" className="pt-20">
        <div className="relative h-[600px] overflow-hidden">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
            <div className="container mx-auto px-6 h-full flex items-center">
              <div className="max-w-xl animate-slideIn">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Transform Your Look
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  Experience world-class hair and skin treatments with cutting-edge technology
                </p>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Clock className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Extended Hours</h3>
              <p className="text-gray-600">Flexible scheduling to fit your busy lifestyle</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Star className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Staff</h3>
              <p className="text-gray-600">Highly trained professionals at your service</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
              <p className="text-gray-600">Treatments tailored to your unique needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-semibold text-gray-800">Book Consultation</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Type
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select a service</option>
                  {serviceTypes.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Tell us about your concerns..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-md text-white font-medium transition-colors ${
                  isSubmitting
                    ? 'bg-purple-400 cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-700'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-600 text-center">Thank you! We'll contact you soon.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Trichoderm Centre</h3>
              <p className="text-gray-400">Your trusted partner in hair transplant and skin treatment solutions.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-purple-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-purple-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-purple-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-purple-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-purple-500 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-purple-500 transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-purple-500 transition-colors">Services</a></li>
                <li><a href="#doctors" className="hover:text-purple-500 transition-colors">Our Doctors</a></li>
                <li><a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-500 transition-colors">Hair Transplant</a></li>
                <li><a href="#" className="hover:text-purple-500 transition-colors">Skin Treatment</a></li>
                <li><a href="#" className="hover:text-purple-500 transition-colors">Hair Analysis</a></li>
                <li><a href="#" className="hover:text-purple-500 transition-colors">Consultation</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <span>123 Medical Plaza, Healthcare Street</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>+123 456 7890</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>info@trichoderm.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="w-5 h-5" />
                  <span>Mon - Sat: 9:00 - 18:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 py-4">
            <p className="text-center text-gray-400">&copy; 2024 Trichoderm Centre. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>


  );
}

export default App;