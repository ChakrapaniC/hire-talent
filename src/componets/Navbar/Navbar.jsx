"use client";
import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out mb-8 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5' 
          : 'bg-transparent'
      }`}>
        <div className="w-full mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/hire-flexpert/image+(1).jpeg" 
                alt="Logo" 
                className="h-8 md:h-12 w-auto object-contain transition-all duration-300 hover:scale-105"
              />
            </div>

            {/* Enquiry Button */}
            <button className="group relative overflow-hidden px-6 py-2.5 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10 flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>Enquiry</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;