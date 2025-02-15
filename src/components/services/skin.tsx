import React from "react";
import { FaCheckCircle, FaCalendarAlt, FaUserMd, FaRegSmileBeam } from "react-icons/fa";
import { Link } from "react-router-dom";

const Skin = () => {
  return (
    <div className="bg-gray-50 min-h-screen m-10 pt-10">
      

      {/* About Skin Treatment */}
      <section id="STheading" className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What is Skin Treatment?</h2>
        <p className="text-gray-600 text-lg text-center mx-auto max-w-3xl">
          Our advanced skin treatments help improve skin health, texture, and appearance. 
          Whether you’re looking to treat acne, pigmentation, aging, or simply rejuvenate your skin, 
          we offer customized solutions tailored to your needs.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Left Content */}
          <div>
            <img 
              src="https://cura.radiantthemes.com/wp-content/uploads/2020/07/08-1-1.jpg" 
              alt="Skin Treatment Procedure" 
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Why Choose Our Skin Treatments?</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Acne & Scar Removal - Say goodbye to stubborn acne scars.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Anti-Aging Solutions - Reduce wrinkles and fine lines.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Skin Brightening - Get a glowing and even skin tone.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Non-Invasive & Safe - No downtime, minimal discomfort.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="bg-white py-16">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Before & After</h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-10">
      Witness the dramatic skin transformations our clients have achieved with our specialized treatments.
    </p>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="flex flex-col items-center">
        <img 
          src="https://cura.radiantthemes.com/wp-content/uploads/2020/07/06-2.jpg" 
          alt="Before Skin Treatment" 
          className="rounded-lg shadow-lg"
        />
        <p className="mt-3 text-gray-700">Before</p>
      </div>
      <div className="flex flex-col items-center">
        <img 
          src="https://cura.radiantthemes.com/wp-content/uploads/2020/07/07-2.jpg" 
          alt="After Skin Treatment" 
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
          <h2 className="text-3xl font-bold mb-4">Ready for Your Skin Transformation?</h2>
          <p className="text-lg mb-6">Schedule a consultation with our Skin treatment specialists today!</p>
          
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

export default Skin;
