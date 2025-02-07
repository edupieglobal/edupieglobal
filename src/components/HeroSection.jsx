import React from 'react';
import Logo from '../assets/Logo.jpeg'; // Adjust the path if needed
import heroimage from '../assets/heroimage.jpeg';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-8 text-black border-2 border-solid border-gray-800 mx-6 my-20">
      {/* Left Section - Edu-Pie Info */}
      <div className="flex-1 text-black flex items-center justify-center lg:justify-start py-8 lg:py-0 h-auto">
        {/* Content */}
        <div className="relative z-10 text-center lg:text-left px-6 lg:px-12 max-w-lg mx-auto space-y-6">
          <img
            src={Logo}
            alt="Edu-Pie Global"
            className="w-48 h-48 md:w-64 md:h-64 object-cover mb-6 mx-auto lg:mx-0"
          />
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-black">
            EDU-PIE GLOBAL, LLP
          </h1>
          <p className="text-xl sm:text-2xl font-light mb-4 leading-relaxed text-black">
            Planning | Initiation | Evaluation
          </p>
          <p className="text-lg sm:text-xl text-black max-w-2xl mx-auto lg:mx-0">
            We make professionals out of graduates. Our training programs are designed to provide hands-on learning with expert trainers.
          </p>
          
          {/* Tagline */}
          <p className="text-2xl font-semibold text-black mb-6">
            Empowering Skills, Transforming Future!
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex justify-center lg:justify-start gap-6">
            <button
              onClick={() => navigate('/programs')}
              className="bg-purple-500 text-white px-8 py-3 text-xl font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"
              aria-label="Explore Our Programs"
            >
              Explore Our Programs
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-purple-500 text-white px-8 py-3 text-xl font-semibold hover:bg-green-700 transition duration-300 ease-in-out"
              aria-label="Join Us Today"
            >
              Join Us Today
            </button>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="flex-1 mt-8 lg:mt-0 text-center relative">
        {/* Image Container */}
        <div className="relative z-10 w-full h-auto">
          <img
            src={heroimage} // Replace with your image path
            alt="Edu-Pie Global"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
