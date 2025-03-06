import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import { FaCut as Scissors, FaHeart as Heart, FaClock as Clock, FaStar as Star, FaUsers as Users, FaFacebook as Facebook, FaTwitter as Twitter, FaInstagram as Instagram, FaLinkedin as Linkedin, FaMapMarkerAlt as MapPin, FaPhone as Phone, FaEnvelope as Mail, FaTimes as X } from 'react-icons/fa';
import { MdAutoAwesome as Sparkles } from 'react-icons/md';
import '../app.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import call from './../public/images/call.png'
const Body = () => {

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
        link: "/transplant#HTheading",
      },
      {
        title: 'Hair Transplant',
        description: 'State-of-the-art hair transplant procedures with natural results',
        icon: <Heart className="w-6 h-6" />,
        link: "/transplant#HTheading",
      },
      {
        title: 'Skin Treatment',
        description: 'Comprehensive skincare solutions for radiant, healthy skin',
        icon: <Sparkles className="w-6 h-6" />,
        link: "/skin#STheading",
      },
    ];
    
    const serviceTypes = ['Hair Treatment', 'Hair Transplant', 'Skin Treatment', 'Hair Analysis', 'General Consultation'];
    



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
      
    
        // const scrollCarousel = (direction: string) => {
        //   const container = document.getElementById('carousel');
        //   if (container) {  // Check if the container is not null
        //     const scrollAmount = container.scrollWidth / 4; // Adjust scroll amount
        //     if (direction === 'left') {
        //       container.scrollLeft -= scrollAmount;
        //     } else {
        //       container.scrollLeft += scrollAmount;
        //     }
        //   }
        // };
    
    
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
    
    
        // const [items, setItems] = useState([
        //   { src: 'https://cura.radiantthemes.com/wp-content/uploads/2020/07/20-1.jpg', text: 'Cleaning' },
        //   { src: 'https://cura.radiantthemes.com/wp-content/uploads/2020/07/08-1-1.jpg', text: 'Acne Scanning' },
        //   { src: 'https://cura.radiantthemes.com/wp-content/uploads/2020/07/07-2.jpg', text: 'Face perfection' },
        //   { src: 'https://cura.radiantthemes.com/wp-content/uploads/2020/07/06-2.jpg', text: 'Hair Treatment' },
        //   { src: 'https://cura.radiantthemes.com/wp-content/uploads/2020/07/21-1.jpg', text: 'Hair moisturizing' },
        // ]);
      
        const carouselRef = useRef() as MutableRefObject<HTMLDivElement>;
      
        // Scroll the carousel in either direction
        const scrollCarousel = (direction: string) => {
          const container = carouselRef.current;
          const scrollAmount = 300; // Adjust this as needed
          
          if (direction === 'left') {
            container.scrollLeft -= scrollAmount;
          } else {
            container.scrollLeft += scrollAmount;
          }
        };
      
        // Function to detect when to reset scroll position to create infinite effect
        // const handleInfiniteScroll = () => {
        //   const container = carouselRef.current;
          
        //   if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        //     // Reset scroll position to simulate infinite scroll
        //     container.scrollLeft = 0;
        //   }
        // };
      
        // useEffect(() => {
        //   const container = carouselRef.current;
        //   container.addEventListener('scroll', handleInfiniteScroll);
      
        //   return () => {
        //     container.removeEventListener('scroll', handleInfiniteScroll);
        //   };
        // }, []);
    
        const scrollContainerRef = useRef<HTMLDivElement>(null);
        const [items, setItems] = useState([
          { src: 'https://cura.radiantthemes.com/wp-content/uploads/2020/07/20-1.jpg', text: 'Cleaning' },
          { src: 'https://cura.radiantthemes.com/wp-content/uploads/2020/07/08-1-1.jpg', text: 'Acne Scanning' },
          { src: 'https://cura.radiantthemes.com/wp-content/uploads/2020/07/07-2.jpg', text: 'Face perfection' },
          { src: 'https://cura.radiantthemes.com/wp-content/uploads/2020/07/06-2.jpg', text: 'Hair Treatment' },
          { src: 'https://cura.radiantthemes.com/wp-content/uploads/2020/07/21-1.jpg', text: 'Hair moisturizing' },
        ]);
      
        useEffect(() => {
          const scrollContainer = scrollContainerRef.current;
      
          if (!scrollContainer) return;
      
          const handleScroll = () => {
            if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
              // When scrolled to the end, reset the scroll position to the beginning
              scrollContainer.scrollLeft = 0;
            }
          };
      
          scrollContainer.addEventListener('scroll', handleScroll);
      
          return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
          };
        }, [])
    
    
  return (
    
      <>

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
      <section className="bg-white">
       
       <div className="overflow-x-hidden bg-gray-100 py-8">
       <div className="w-full py-8">
       <h2 className="text-3xl font-bold text-center mb-6">Improve looks</h2>
       <h4 className="text-3xl font-bold text-center mb-6">Discover the new you</h4>

       <div className="overflow-x-hidden bg-gray-100 py-8">
       <div
         ref={scrollContainerRef}
         className="flex space-x-4 overflow-x-auto scrollbar-hide"
         style={{ scrollBehavior: 'smooth' }}
       >
         {items.map((item, index) => (
           <div
             key={index}
             className="flex-shrink-0 w-64 h-80 bg-white rounded-lg shadow-md overflow-hidden relative"
           >
             <img
               src={item.src}
               alt={item.text}
               className="w-full h-full object-cover"
             />
             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
               {item.text}
             </div>
           </div>
         ))}
         {/* Duplicate items to create the infinite scroll effect */}
         {items.map((item, index) => (
           <div
             key={`duplicate-${index}`}
             className="flex-shrink-0 w-64 h-80 bg-white rounded-lg shadow-md overflow-hidden relative"
           >
             <img
               src={item.src}
               alt={item.text}
               className="w-full h-full object-cover"
             />
             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
               {item.text}
             </div>
           </div>
         ))}
       </div>
     </div>
     </div>
     </div>
   </section> 



   <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <HashLink 
              smooth
              to={service.link} // ✅ Navigate to the correct section
              key={index}
              className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </HashLink>
          ))}
        </div>
      </div>
    </section>


      {/* Experience Statistics */}
      <div className="bg-white w-full flex flex-wrap md:flex-nowrap justify-center md:justify-around items-center text-gray-700 text-xl p-6">
  <div className="hover-div text-center w-full sm:w-1/2 md:w-auto px-4">
    1226 <br />
    <hr className="h-px my-3 bg-blue-200 hover-line" />
    Non-Surgical
  </div>
  <div className="hover-div text-center w-full sm:w-1/2 md:w-auto px-4">
    358 <br />
    <hr className="h-px my-3 bg-blue-200 hover-line" />
    Hair Transplant
  </div>
  <div className="hover-div text-center w-full sm:w-1/2 md:w-auto px-4">
    1532 <br />
    <hr className="h-px my-3 bg-blue-200 hover-line" />
    Hair Treatment
  </div>
  <div className="hover-div text-center w-full sm:w-1/2 md:w-auto px-4">
    2664 <br />
    <hr className="h-px my-3 bg-blue-200 hover-line" />
    Consultation
  </div>
</div>



  

      
      {/*How it works- Steps */}
      <section id="how-it-works" className="py-20 bg-gray-50">
  <div className="container mx-auto px-6">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold">How It Works</h2>
      <h3 className="text-xl text-gray-600">Simple Steps to Get Beautiful Skin</h3>
    </div>

    {/* Content Grid */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left: Steps Section */}
      <div className="space-y-6">
        {[
          { title: "Make A Decision", desc: "Define your goals and explore our expert solutions tailored to your needs. We\’re here to guide you every step of the way." },
          { title: "Schedule An Appointment", desc: "Book a free consultation at your convenience. Our experts provide insights and a clear roadmap to achieve your transformation." },
          { title: "Transformation Completed", desc: "Experience seamless service and lasting results. Join countless satisfied clients who have successfully transformed with us!" },
        ].map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex items-start gap-4"
          >
            <span className="flex items-center justify-center w-10 h-10 min-w-10 min-h-10 text-white bg-purple-300 rounded-full text-lg font-semibold">
              {index + 1}
            </span>
            <div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Image Section */}
      <div className="relative">
        {/* Background Decoration */}
        <img
          src="https://cura.radiantthemes.com/wp-content/uploads/2020/06/img-03.png"
          alt="Decorative Background"
          className="absolute -top-8 left-10 w-3/4 opacity-80 -z-10"
        />
        {/* Main Image */}
        <div className="relative">
          <img
            src="https://cura.radiantthemes.com/wp-content/uploads/2020/06/img02.jpg"
            alt="Background"
            className="absolute top-0 left-0 w-full h-auto -z-10"
          />
          <img
            src="https://cura.radiantthemes.com/wp-content/uploads/2020/06/img01.jpg"
            alt="Main"
            className="w-4/5 ml-auto rounded-xl shadow-lg"
          />
          <img
            src="https://cura.radiantthemes.com/wp-content/uploads/2020/06/img-06.png"
            alt="Overlay"
            className="absolute bottom-0 left-100 w-1/3"
            id="leaf"
          />
        </div>
      </div>
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
        <section id="why-choose-us" className="py-20 bg-gray-50 m-10">
  <div className="grid mx-auto px-6">

    {/* Content Grid: Side by Side */}
    <div className="grid md:grid-cols-3 gap-12 items-center">
      {/* Left: Images Section */}
      <div className="flex flex-col items-center md:items-start">
        <img
          src="https://cura.radiantthemes.com/wp-content/uploads/2020/07/2.png"
          alt="Experience Image"
          className="w-4/5 mb-6"
        />
        <img
          src={call}
          alt="Call Our Clinic"
          className="w-2/5 w-[350px] h-[50px]"
        />
      </div>

      {/* Right: Text + Form Section */}
        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-lg font-semibold text-purple-600">Why Choose Us</p>
          <h3 className="text-2xl font-bold">Why Clients Choose Our Clinic</h3>
          <p className="mt-2 text-gray-600">
          At our clinic, we combine expertise with personalized care to deliver exceptional results. With advanced treatments, experienced specialists, and a client-first approach, we ensure a seamless and comfortable experience. From consultation to transformation, we prioritize your well-being, making us a trusted choice for thousands seeking quality care.
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-4 rounded-xl shadow-lg p-5">
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
              isSubmitting ? 'bg-purple-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'
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
        </section>
</>
  )
}

export default Body
