import React, { useState, useEffect, useRef } from 'react';
import { FaCut as Scissors, FaHeart as Heart, FaClock as Clock, FaStar as Star, FaUsers as Users, FaFacebook as Facebook, FaTwitter as Twitter, FaInstagram as Instagram, FaLinkedin as Linkedin, FaMapMarkerAlt as MapPin, FaPhone as Phone, FaEnvelope as Mail, FaTimes as X } from 'react-icons/fa';
import { MdAutoAwesome as Sparkles } from 'react-icons/md';
import './app.css';


const images = [
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1600&q=80',
  '//cura.radiantthemes.com/wp-content/uploads/revslider/slider-24/banner02-img.png?auto=format&fit=crop&w=1600&q=80',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const { name, phone, serviceType, message } = formData;
    const body=`${message}\n\nService: ${serviceType}\nPhone: ${phone}\nName: ${name}`
    
    // Build the mailto URL
    const mailtoURL = `mailto:info@trichoderm.com?subject=${encodeURIComponent(
      serviceType
    )}&body=${encodeURIComponent(
    `${body}`
  )}`;
  
    // Open the mailto link
    window.open(mailtoURL, "_blank");
  
    // Close modal and reset form after triggering mailto
    setIsModalOpen(false);
    setFormData({
      name: "",
      phone: "",
      serviceType: "",
      message: "",
    });
  };
  

    const scrollCarousel = (direction: string) => {
      const container = document.getElementById('carousel');
      if (container) {  // Check if the container is not null
        const scrollAmount = container.scrollWidth / 4; // Adjust scroll amount
        if (direction === 'left') {
          container.scrollLeft -= scrollAmount;
        } else {
          container.scrollLeft += scrollAmount;
        }
      }
    };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

    const [isheaderVisible, setIsheaderVisible] = useState(true); // For sticky header animation
    const [menuOpen, setMenuOpen] = useState(false); // For hamburger menu

    const [dropdownOpen, setDropdownOpen] = useState(false);


    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

  
    // const ImageCarousel = (direction: string) => {
    //   const carouselRef = useRef<HTMLDivElement>(null);
    
    //   // Duplicate items for infinite scroll
    //   const images = [
    //     { src: 'https://cura.radiantthemes.com/wp-content/uploads/2020/07/20-1.jpg', text: 'Cleaning' },
    //     { src: 'https://cura.radiantthemes.com/wp-content/uploads/2020/07/08-1-1.jpg', text: 'Acne Scanning' },
    //     { src: 'https://cura.radiantthemes.com/wp-content/uploads/2020/07/07-2.jpg', text: 'Face perfection' },
    //     { src: 'https://cura.radiantthemes.com/wp-content/uploads/2020/07/06-2.jpg', text: 'Hair Treatment' },
    //     { src: 'https://cura.radiantthemes.com/wp-content/uploads/2020/07/21-1.jpg', text: 'Hair moisturizing' },
    //   ];
    //   const duplicatedImages = [...images, ...images]; // Duplicate array for seamless scrolling
    
    //   const scrollCarousel = (direction: string) => {
    //     const container = carouselRef.current;
    //     if (!container) return;
    
    //     const scrollAmount = container.clientWidth;
    //     if (direction === 'left') {
    //       container.scrollLeft -= scrollAmount;
    //       if (container.scrollLeft <= 0) {
    //         container.scrollLeft = container.scrollWidth / 2;
    //       }
    //     } else {
    //       container.scrollLeft += scrollAmount;
    //       if (container.scrollLeft >= container.scrollWidth / 2) {
    //         container.scrollLeft = 0;
    //       }
    //     }
    //   };
    
    //   useEffect(() => {
    //     const container = carouselRef.current;
    //     if (!container) return;
    
    //     const handleScroll = () => {
    //       // Reset scroll position for infinite scroll illusion
    //       if (container.scrollLeft >= container.scrollWidth / 2) {
    //         container.scrollLeft = 0;
    //       } else if (container.scrollLeft <= 0) {
    //         container.scrollLeft = container.scrollWidth / 2;
    //       }
    //     };
    
    //     container.addEventListener('scroll', handleScroll);
    
    //     return () => {
    //       container.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);


    // }
 

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full z-50">
      <div className="containermx-auto max-w-7xl  px-6 py-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Trichoderm Clinic
            </span>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-700 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-dropdown"
            aria-expanded={menuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12" // "X" icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                }
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav
            className={`${
              menuOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full bg-white z-50 md:static md:block md:w-auto`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col p-4 space-y-4 md:space-y-0 md:flex-row md:space-x-8">
              <li>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-gray-900"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block text-gray-700 hover:text-gray-900"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block text-gray-700 hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
            </ul>
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
                  Experience world-className hair and skin treatments with cutting-edge technology
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


      {/* Improve look section */}
      <section className='bg-white'>
      <div className="w-full py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Improve looks</h2>
        <h4 className="text-3xl font-bold text-center mb-6">Discover the new you</h4>

        <div className="relative flex items-center justify-center">
          
          

          <button type="button" onClick={() => scrollCarousel('left')} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>

          <div
            id="carousel"
            className="flex space-x-4 overflow-x-hidden scrollbar-hide px-6"
          >
            {[
              { src: 'https://cura.radiantthemes.com/wp-content/uploads/2020/07/20-1.jpg', text: 'Cleaning' },
              { src: 'https://cura.radiantthemes.com/wp-content/uploads/2020/07/08-1-1.jpg', text: 'Acne Scanning' },
              { src: 'https://cura.radiantthemes.com/wp-content/uploads/2020/07/07-2.jpg', text: 'Face perfection' },
              { src: 'https://cura.radiantthemes.com/wp-content/uploads/2020/07/06-2.jpg', text: 'Hair Treatment' },
              { src: 'https://cura.radiantthemes.com/wp-content/uploads/2020/07/21-1.jpg', text: 'Hair moisturizing' },
            ].map((item, index) => (
              <div
                key={index}
                className="imgcontainer min-w-[300px] flex flex-col items-center bg-white shadow-lg rounded-lg"
              >
                <img
                  src={item.src}
                  alt={`Image ${index + 1}`}
                  className="rounded-t-lg w-full object-cover h-78"
                />
                <div className="imgcentered p-4 text-center text-sm font-medium text-white-700">
                  {item.text}
                </div>
              </div>
            ))}
          </div>

          

          <button type="button" onClick={() => scrollCarousel('right')} className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
        </div>
      </div>
    </section>
         






      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
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


      {/* Expirience Statistics */}
      <div className="bg-white  flex justify-around algin-items:center text-grey-50 text-xl">

    <div className="ml-60 mt-10 hover-div ">
      2501 <br></br>
      <hr className="h-px my-3 bg-blue-200 hover-line"></hr>

       Non-Surgical
    </div>
    <div className=" mt-10 mb-10  hover-div ">
      2501 <br></br>
            <hr className="h-px my-3 bg-blue-200 hover-line"></hr>
 
      Hair Trasnplant
    </div>
    <div className=" mt-10 mb-10  hover-div ">
      2501 <br></br>
            <hr className="h-px my-3 bg-blue-200 hover-line"></hr>

      Hair Treatment
    </div>
    <div className="mr-60 mt-10 mb-10  hover-div ">
      2501 <br></br> 
            <hr className="h-px my-3 bg-blue-200 hover-line"></hr>

      Consultation
    </div>

      </div>

  

      
      {/*How it works- Steps */}
    <section className="flex flex-row items-center gap-8 p-8 bg-gray-50">
    {/* Left Section: Text and Boxes */}
    <div className="w-1/2 space-y-6">
    {/* Headings */}
    <div>
      <h2 className="text-3xl font-bold">How It Works</h2>
      <h3 className="text-xl text-gray-600">Simple Step to Get Beautiful Skin</h3>
    </div>
    {/* Steps */}
    <div className="space-y-4" >
      <div className="flex items-start gap-4 p-4 bg-white rounded-lg" id='steps'>
        <span className="flex items-center justify-center w-8 h-8 text-white bg-[#9333EA] rounded-full">1</span>
        <div>
          <h4 className="font-semibold">Make A Decision</h4>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4 p-4 bg-white rounded-lg" id='steps'>
        <span className="flex items-center justify-center w-8 h-8 text-white bg-[#9333EA] rounded-full">2</span>
        <div>
          <h4 className="font-semibold">Schedule An Appointment</h4>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4 p-4 bg-white rounded-lg" id='steps'>
        <span className="flex items-center justify-center w-8 h-8 text-white bg-[#9333EA] rounded-full">3</span>
        <div>
          <h4 className="font-semibold">Transformation Completed</h4>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
    </div>

    {/* Right Section: Images */}
    <div className="relative w-1/2">
    <div className="absolute -top-8 left-10 text-pink-500 font-semibold">
    <img
        src="https://cura.radiantthemes.com/wp-content/uploads/2020/06/img-03.png"
        alt="Background"
        className="absolute top-0 left-0 w-full h-auto -z-10"
      />
    </div>
    <div className="relative">
      <img
        src="https://cura.radiantthemes.com/wp-content/uploads/2020/06/img02.jpg"
        alt="Background"
        className="absolute top-0 left-0 w-full h-auto -z-10"
      />
      <img
        src="https://cura.radiantthemes.com/wp-content/uploads/2020/06/img01.jpg"
        alt="Main"
        className="w-4/5 ml-auto"
      />
      <img
        src="https://cura.radiantthemes.com/wp-content/uploads/2020/06/img-06.png"
        alt="Overlay"
        className="absolute bottom-0 left-100 w-1/3" 
        id="leaf"
      />
    </div>
    </div>
    </section>

      
      

      {/* Features Section */}
      <section id='about' className="py-20 bg-white" >
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

      {/* Book appointment*/}
      <div className="flex justify-around items-center space-x-6">

        <div className='flex justify-around items-center space-x-6 m-40'>
           {/* First Column */}
              <div className="flex-1 ml-20 mr-0">
                <img
                  src="https://cura.radiantthemes.com/wp-content/uploads/2020/07/2.png"
                  alt="exp image"
                  className="mb-4"
                />
                <img
                  src="https://cura.radiantthemes.com/wp-content/uploads/2020/07/call-our-clinic.png"
                  alt="call our clinic"
                />
              </div>

              {/* Second Column */}
              <div className="flex-1 ml-0 text-left">
                <div className="text-lg font-semibold">Why Choose Us</div>
                <br />
                <h3 className="text-2xl font-bold">Why Clients Choose Our Clinic</h3>
                <p className="mt-2 text-gray-600">
                  Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation. ullamco laboris nisi ut aliquip ex ea commodo.
                </p>
                <br />
                <p className="text-gray-600">
                  Consequat auteirure dolor in reprehenderit in voluptate velit esse cillum dolore.
                </p>
              </div>

              {/* Third Column */}
              <div className="flex-1  mr-30">
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
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
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
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
                    <label
                      htmlFor="serviceType"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
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
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
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
                    <p className="text-green-600 text-center">
                      Thank you! We'll contact you soon.
                    </p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-red-600 text-center">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </div>
        </div>
 


      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 ">
        <div className="container mx-auto px-6 py-12 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Trichoderm Centre</h3>
              <p className="text-gray-400">Your trusted partner in hair transplant and skin treatment solutions.</p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/no1dermadoc/" className="hover:text-purple-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/trichoderm.centre/#" className="hover:text-purple-500 transition-colors">
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
              <ul className="space-y-2 bg-transparent">
                <li><a href="#home" className="hover:text-purple-500 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-purple-500 transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-purple-500 transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Services</h3>
              <ul className="space-y-2 bg-transparent ">
                <li><a href="#" className="hover:text-purple-500 transition-colors">Hair Transplant</a></li>
                <li><a href="#" className="hover:text-purple-500 transition-colors">Skin Treatment</a></li>
                <li><a href="#" className="hover:text-purple-500 transition-colors">Hair Analysis</a></li>
                <li><a href="#" className="hover:text-purple-500 transition-colors">Consultation</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Contact Info</h3>
              <ul className="space-y-3 bg-transparent">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <span>Flat No AC, G-2, Ground Floor, Barde Complex, Katol Road, Friends Colony, Nagpur - 440013 (Behind Smart Point, Near Prime Fitness Gym)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>08511278315</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>info@trichoderm.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="w-5 h-5" />
                  <span>Mon - Sat: 11:00 am - 7:00 pm</span>
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