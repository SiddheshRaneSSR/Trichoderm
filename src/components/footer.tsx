import { ReactNode } from "react";
import { FaCut as Scissors, FaHeart as Heart, FaClock as Clock, FaStar as Star, FaUsers as Users, FaFacebook as Facebook, FaTwitter as Twitter, FaInstagram as Instagram, FaLinkedin as Linkedin, FaMapMarkerAlt as MapPin, FaPhone as Phone, FaEnvelope as Mail, FaTimes as X } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';





const Footer = () => {


  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/Skin");
    setTimeout(() => {
      const element = document.getElementById("STheading");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // Small delay to allow navigation
  };

    return(

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
              <h3 className="text-xl font-semibold text-white">Explore</h3>
              <ul className="space-y-2 bg-transparent">
                <li><HashLink smooth to="/" className="hover:text-purple-500 transition-colors">Home</HashLink></li>
                <li><HashLink smooth to="#about" className="hover:text-purple-500 transition-colors">About</HashLink></li>
                <li><HashLink smooth to="#services" className="hover:text-purple-500 transition-colors">Services</HashLink></li>
                <li><HashLink smooth to="#contact" className="hover:text-purple-500 transition-colors">Contact</HashLink></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Services</h3>
              <ul className="space-y-2 bg-transparent ">
                <li><HashLink smooth to="/transplant/#HTheading" className="hover:text-purple-500 transition-colors">Hair Transplant</HashLink></li>
                <li><HashLink smooth to="/skin/#STheading" className="hover:text-purple-500 transition-colors">Skin Treatment</HashLink></li>
                <li><Link to="#" className="hover:text-purple-500 transition-colors">Hair Analysis</Link></li>
                <li><Link to="#" className="hover:text-purple-500 transition-colors">Consultation</Link></li>
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
  );
};

export default Footer;
