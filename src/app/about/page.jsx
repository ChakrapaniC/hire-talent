"use client";
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Developers from '@/componets/AboutUs/Developers';
import Designers from '@/componets/AboutUs/Designers';
import MarketingExperts from '@/componets/AboutUs/MarketingExperts';
import ERPConsultants from '@/componets/AboutUs/ERPConsultants';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  
  const developersRef = useRef(null);
  const designersRef = useRef(null);
  const marketingRef = useRef(null);
  const erpRef = useRef(null);
  const isManualScrollRef = useRef(false);
  const lastUserInteractionRef = useRef(0);

  // Debounced scroll detection
  useEffect(() => {
    let scrollEndTimeout;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Only detect user scrolling if it's been more than 1.5s since last manual interaction
      const timeSinceLastInteraction = Date.now() - lastUserInteractionRef.current;
      if (timeSinceLastInteraction > 1500) {
        setIsUserScrolling(true);
        
        // Clear existing timeout
        if (scrollEndTimeout) {
          clearTimeout(scrollEndTimeout);
        }
        
        // Set new timeout to detect scroll end
        scrollEndTimeout = setTimeout(() => {
          setIsUserScrolling(false);
        }, 150); // Debounce scroll end detection
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollEndTimeout) {
        clearTimeout(scrollEndTimeout);
      }
    };
  }, []);

  // Get section refs array
  const getSectionRefs = useCallback(() => [
    { ref: developersRef, index: 0 },
    { ref: designersRef, index: 1 },
    { ref: marketingRef, index: 2 },
    { ref: erpRef, index: 3 }
  ], []);

  // Calculate which section should be active based on scroll position
  const calculateActiveSection = useCallback(() => {
    const navbarHeight = window.innerWidth >= 1024 ? 80 : 64;
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const sections = getSectionRefs();
    
    let bestMatch = { index: 0, score: -Infinity };
    
    sections.forEach(({ ref, index }) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const elementTop = rect.top + scrollTop;
        const elementHeight = rect.height;
        const elementCenter = elementTop + elementHeight / 2;
        const viewportCenter = scrollTop + windowHeight / 2;
        
        // Calculate score based on how close the element center is to viewport center
        // and how much of the element is visible
        const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
        const visibilityScore = Math.max(0, Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top)) / windowHeight;
        const centerScore = Math.max(0, windowHeight - distanceFromCenter) / windowHeight;
        
        const totalScore = (visibilityScore * 0.6) + (centerScore * 0.4);
        
        if (totalScore > bestMatch.score) {
          bestMatch = { index, score: totalScore };
        }
      }
    });
    
    return bestMatch.index;
  }, [getSectionRefs]);

  // Intersection Observer for automatic tab detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0]
    };

    const observer = new IntersectionObserver((entries) => {
      // Don't update if user recently clicked a tab or is currently scrolling manually
      const timeSinceLastInteraction = Date.now() - lastUserInteractionRef.current;
      if (timeSinceLastInteraction < 1000 || isManualScrollRef.current) {
        return;
      }

      // Only update during natural user scrolling
      if (isUserScrolling) {
        const newActiveSection = calculateActiveSection();
        if (newActiveSection !== activeTab) {
          setActiveTab(newActiveSection);
        }
      }
    }, observerOptions);

    // Observe all sections
    const sections = getSectionRefs();
    sections.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [activeTab, isUserScrolling, calculateActiveSection, getSectionRefs]);

  // Handle manual tab clicks
  const handleTabClick = (tabIndex) => {
    // Immediately update the active tab
    setActiveTab(tabIndex);
    
    // Record the interaction time
    lastUserInteractionRef.current = Date.now();
    isManualScrollRef.current = true;
    
    // Stop user scrolling detection
    setIsUserScrolling(false);
    
    const navbarHeight = window.innerWidth >= 1024 ? 80 : 64;
    const sections = getSectionRefs();
    const targetSection = sections.find(section => section.index === tabIndex);
    
    if (targetSection && targetSection.ref.current) {
      const elementTop = targetSection.ref.current.offsetTop;
      
      // Smooth scroll to target
      window.scrollTo({
        top: elementTop - navbarHeight,
        behavior: 'smooth'
      });

      // Clear any existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Re-enable automatic detection after scroll completes
      const newTimeout = setTimeout(() => {
        isManualScrollRef.current = false;
        setIsUserScrolling(false);
        
        // Double-check that we're at the right section after scroll
        setTimeout(() => {
          const currentActiveSection = calculateActiveSection();
          if (currentActiveSection !== tabIndex) {
            setActiveTab(currentActiveSection);
          }
        }, 100);
      }, 1200); // Slightly longer to ensure scroll completion
      
      setScrollTimeout(newTimeout);
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

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
          : 'absolute w-[100%] mx-auto -mt-8 z-50'
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
                className={`pb-3 px-1 text-lg font-semibold transition-all duration-300 border-b-4 cursor-pointer ${
                  activeTab === 0
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-600 border-transparent hover:text-blue-500'
                }`}
              >
                Developers
              </button>
              <button
                onClick={() => handleTabClick(1)}
                className={`pb-3 px-1 text-lg font-semibold transition-all duration-300 border-b-4 cursor-pointer ${
                  activeTab === 1
                    ? 'text-pink-600 border-pink-600'
                    : 'text-gray-600 border-transparent hover:text-pink-500'
                }`}
              >
                Designers
              </button>
              <button
                onClick={() => handleTabClick(2)}
                className={`pb-3 px-1 text-lg font-semibold transition-all duration-300 border-b-4 cursor-pointer ${
                  activeTab === 2
                    ? 'text-purple-600 border-purple-600'
                    : 'text-gray-600 border-transparent hover:text-purple-500'
                }`}
              >
                Marketing Experts
              </button>
              <button
                onClick={() => handleTabClick(3)}
                className={`pb-3 px-1 text-lg font-semibold transition-all duration-300 border-b-4 cursor-pointer ${
                  activeTab === 3
                    ? 'text-indigo-600 border-indigo-600'
                    : 'text-gray-600 border-transparent hover:text-indigo-500'
                }`}
              >
                ERP Consultants
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-blue-25">
        {/* Tab 1: Developers */}
        <div ref={developersRef}>
          <Developers />
        </div>

        {/* Tab 2: Designers */}
        <div ref={designersRef}>
          <Designers />
        </div>

        {/* Tab 3: Marketing Experts */}
        <div ref={marketingRef}>
          <MarketingExperts />
        </div>

        {/* Tab 4: ERP Consultants */}
        <div ref={erpRef}>
          <ERPConsultants />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;