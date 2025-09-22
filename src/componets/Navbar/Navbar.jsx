"use client";
import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Navbar = ({ currentStep = 0, showProgressBar = false, isSubmitted = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getProgressPercentage = () => {
    if (isSubmitted) {
      return 100;
    }
    switch (currentStep) {
      case 0:
        return 30;
      case 1:
        return 60;
      case 2:
        return 90;
      default:
        return 0;
    }
  };
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
            <div className="flex items-center" onClick={() => router.push('/')}>
              <img 
                src="https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/hire-flexpert/image+(1).jpeg" 
                alt="Logo" 
                className="h-8 md:h-12 w-auto object-contain transition-all duration-300 hover:scale-105"
              />
            </div>

            {/* Enquiry Button */}
            <button onClick={()=> router.push('/enquiry')} className="group relative overflow-hidden px-6 py-2.5 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10 flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>Enquiry</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </nav>

      {showProgressBar && (
        <div className="fixed top-16 lg:top-20 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-100">
          <div className="w-full">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-emerald-600 transition-all duration-500 ease-out"
                style={{ width: `${getProgressPercentage()}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;