import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <button
          onClick={() => handleNavigate('/')}
          className="text-2xl font-bold text-purple-500"
        >
          EDU-PIE GLOBAL
        </button>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-4 items-center">
          <button onClick={() => handleNavigate('/')} className="px-4 py-2 text-black">
            Home
          </button>
          <button onClick={() => handleNavigate('/about')} className="px-4 py-2 text-black">
            About Us
          </button>
          <button onClick={() => handleNavigate('/Programs')} className="px-4 py-2 text-black">
            programs
          </button>
          <button onClick={() => handleNavigate('/contact')} className="px-4 py-2 text-black">
            Contact
          </button>
          <button onClick={() => handleNavigate('/gallery')} className="block px-4 py-2 text-black">
            Gallery
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Toggled State) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <button onClick={() => handleNavigate('/')} className="block px-4 py-2 text-black">
            Home
          </button>
          <button onClick={() => handleNavigate('/about')} className="block px-4 py-2 text-black">
            About Us
          </button>
          <button onClick={() => handleNavigate('/Programs')} className="block px-4 py-2 text-black">
            Services
          </button>
          <button onClick={() => handleNavigate('/contact')} className="block px-4 py-2 text-black">
            Contact
          </button>
          <button onClick={() => handleNavigate('/gallery')} className="block px-4 py-2 text-black">
            Gallery
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
