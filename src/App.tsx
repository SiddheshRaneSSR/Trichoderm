import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import { FaCut as Scissors, FaHeart as Heart, FaClock as Clock, FaStar as Star, FaUsers as Users, FaFacebook as Facebook, FaTwitter as Twitter, FaInstagram as Instagram, FaLinkedin as Linkedin, FaMapMarkerAlt as MapPin, FaPhone as Phone, FaEnvelope as Mail, FaTimes as X } from 'react-icons/fa';
import { MdAutoAwesome as Sparkles } from 'react-icons/md';
import './app.css';
import Footer from './components/footer';
import Skin from './components/services/skin';
import Transplant from './components/services/transplant';
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Body from './components/body';

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



    const router  = createBrowserRouter([
      {
        path:"/",
        element:<><Body /> <Footer /></>
      },
      {
        path:"/Transplant",
        element:<><Transplant /> <Footer /></>
      },
      {
        path:"/Skin",
        element:<><Skin /> <Footer /></>
      },
      { 
        path:"*",
        element:<Navigate to="/" />

      }
      
    ])
 

  return (


    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full z-50">
      <div className="containermx-auto max-w-7xl  px-6 py-2 sm:px-6 lg:px-6">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              <a href="#home">Trichoderm Clinic</a>
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
            } absolute top-full left-0 w-screen bg-white z-50 md:static md:block md:w-auto`}
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


    <RouterProvider router={router} />
    
      {/* Footer  <Footer />*/}
     
    </div>


  );
}

export default App;