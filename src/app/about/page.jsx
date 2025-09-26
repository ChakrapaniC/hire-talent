"use client";
import React, { useState, useRef, useEffect } from 'react';
import FreelancerDomains from '@/componets/NewHire/FreelanceDomain';
import HiringJourneyFlow from '@/componets/NewHire/HiringJourney';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const findFlexpertRef = useRef(null);
  const journeyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', 
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === findFlexpertRef.current) {
            setActiveTab(0);
          } else if (entry.target === journeyRef.current) {
            setActiveTab(1);
          }
        }
      });
    }, observerOptions);

    if (findFlexpertRef.current) {
      observer.observe(findFlexpertRef.current);
    }
    if (journeyRef.current) {
      observer.observe(journeyRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    
    if (tabIndex === 0 && findFlexpertRef.current) {
      const elementTop = findFlexpertRef.current.offsetTop;
      const navbarHeight = window.innerWidth >= 1024 ? 80 : 64; 
      window.scrollTo({
        top: elementTop - navbarHeight,
        behavior: 'smooth'
      });
    } else if (tabIndex === 1 && journeyRef.current) {
      const elementTop = journeyRef.current.offsetTop;
      const navbarHeight = window.innerWidth >= 1024 ? 80 : 64;
      window.scrollTo({
        top: elementTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - 60-70% of viewport height */}
      <div 
        className="relative flex items-center justify-center"
        style={{
          height: '60vh',
          backgroundImage: `url('https://prolegion-assets.s3.ap-south-1.amazonaws.com/AboutUs_Background/AboutUs_Background/AboutUs_Bg2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-orange-400">Flexpert</span>
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              We bridge exceptional talent with forward-thinking companies, 
              creating powerful partnerships that drive innovation and success.
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation - Fast transition between overlapping and sticky states */}
      <div className={`transition-all duration-75 ease-out ${
        isScrolled 
          ? 'bg-white border-b border-gray-200 sticky top-16 lg:top-20 z-40' 
          : 'relative -mt-8 z-50'
      }`}>
        <div className={`transition-all duration-75 ease-out ${
          isScrolled 
            ? 'w-full px-6 pt-4' 
            : 'max-w-7xl mx-auto px-6'
        }`}>
          <div className={`transition-all duration-75 ease-out ${
            isScrolled 
              ? 'flex justify-center space-x-8' 
              : 'bg-white border border-gray-200 rounded-lg shadow-lg'
          }`}>
            <div className={`transition-all duration-75 ease-out ${
              isScrolled 
                ? 'flex justify-center space-x-8' 
                : 'flex justify-center space-x-8 pt-4'
            }`}>
              <button
                onClick={() => handleTabClick(0)}
                className={`pb-3 px-1 text-lg font-semibold transition-all duration-300 border-b-4 ${
                  activeTab === 0
                    ? 'text-purple-600 border-purple-600'
                    : 'text-gray-600 border-transparent hover:text-purple-500'
                }`}
              >
                Find Talent
              </button>
              <button
                onClick={() => handleTabClick(1)}
                className={`pb-3 px-1 text-lg font-semibold transition-all duration-300 border-b-4 ${
                  activeTab === 1
                    ? 'text-purple-600 border-purple-600'
                    : 'text-gray-600 border-transparent hover:text-purple-500'
                }`}
              >
                Hiring Journey
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-purple-25">
        {/* Tab 1: Find Your Flexpert */}
        <div ref={findFlexpertRef}>
          <FreelancerDomains />
        </div>

        {/* Tab 2: Your Journey to Finding the Perfect Flexpert */}
        <div ref={journeyRef}>
          <HiringJourneyFlow />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
