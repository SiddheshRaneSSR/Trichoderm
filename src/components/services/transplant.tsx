import React from "react";
import { FaCheckCircle, FaCalendarAlt, FaUserMd, FaRegSmileBeam } from "react-icons/fa";
import { Link } from "react-router-dom";

const Transplant = () => {
  return (
    <div className="bg-gray-50 min-h-screen m-10 pt-10">
      

      {/* About Hair Transplant */}
      <section id="HTheading" className="container mx-auto py-16 px-6 mb-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 m-8">What is Hair Transplant?</h2>
        <p className="text-gray-600 text-lg text-center mx-auto max-w-3xl">
          A hair transplant is a procedure in which a dermatologist  moves hair from a donor area to a bald or thinning part of the scalp. 
          It’s a safe and effective solution for hair loss and baldness.
        </p>

        <div className="grid md:grid-cols-2 gap-8 m-10">
          {/* Left Content */}
          <div>
            <img 
              src="https://cura.radiantthemes.com/wp-content/uploads/2020/07/07-2.jpg" 
              alt="Hair Transplant Procedure" 
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Why Choose Our Hair Transplant?</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Natural Hair Growth - Restores natural hair with minimal scarring.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Advanced Techniques - FUE and FUT methods available.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Painless & Safe - Performed under local anesthesia.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Long-Lasting Results - No need for continuous maintenance.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="bg-white py-16 m-10">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Before & After</h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-10">
      See the amazing transformation of our patients after undergoing our hair transplant procedure.
    </p>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="flex flex-col items-center">
        <img 
          src="https://cura.radiantthemes.com/wp-content/uploads/2020/07/20-1.jpg" 
          alt="Before Transplant" 
          className="rounded-lg shadow-lg"
        />
        <p className="mt-3 text-gray-700">Before</p>
      </div>
      <div className="flex flex-col items-center">
        <img 
          src="https://cura.radiantthemes.com/wp-content/uploads/2020/07/21-1.jpg" 
          alt="After Transplant" 
          className="rounded-lg shadow-lg"
        />
        <p className="mt-3 text-gray-700">After</p>
      </div>
    </div>
  </div>
</section>


      {/* Call-to-Action (Book Appointment) */}
      <section className="bg-grey-50 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Hair Transformation?</h2>
          <p className="text-lg mb-6">Schedule a **FREE consultation** with our hair transplant specialists today!</p>
          
          <div className="flex justify-center space-x-4">
            
            <Link to="/#why-choose-us" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              <FaCalendarAlt className="inline mr-2" /> Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transplant;
