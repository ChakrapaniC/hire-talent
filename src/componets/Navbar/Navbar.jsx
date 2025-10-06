"use client";
import React, { useState, useEffect } from 'react';
import { MessageCircle, ChevronDown, Menu, X } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = ({ currentStep = 0, showProgressBar = false, isSubmitted = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('SAP Consultants');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const router = useRouter();
  const pathname = usePathname();
  
  // Check if we're on the enquiry page
  const isOnEnquiryPage = pathname.includes('/enquiry');

  const dropdownData = {
    'SAP Consultants': [
      'SAP FICO Consultant', 'SAP MM Consultant', 'SAP SD Consultant', 'SAP PP Consultant',
      'SAP WM Consultant', 'SAP HR/HCM Consultant', 'SAP BW Consultant', 'SAP BI Consultant',
      'SAP ABAP Developer', 'SAP Basis Consultant', 'SAP Security Consultant', 'SAP GRC Consultant',
      'SAP SuccessFactors Consultant', 'SAP Ariba Consultant', 'SAP Concur Consultant', 'SAP Hybris Consultant',
      'SAP Cloud Platform Consultant', 'SAP S/4HANA Consultant', 'SAP Fiori Consultant', 'SAP Integration Consultant'
    ],
    'Oracle Consultants': [
      'Oracle EBS Consultant', 'Oracle Cloud Consultant', 'Oracle Financial Consultant', 'Oracle Supply Chain Consultant',
      'Oracle HCM Consultant', 'Oracle CX Consultant', 'Oracle Database Consultant', 'Oracle Fusion Consultant',
      'Oracle BI Consultant', 'Oracle APEX Developer', 'Oracle PL/SQL Developer', 'Oracle Forms Developer',
      'Oracle Reports Developer', 'Oracle Workflow Developer', 'Oracle OBIEE Consultant', 'Oracle Hyperion Consultant',
      'Oracle GoldenGate Consultant', 'Oracle Data Integrator', 'Oracle WebLogic Consultant', 'Oracle Identity Manager'
    ],
    'Salesforce': [
      'Salesforce Admin', 'Salesforce Developer', 'Salesforce Consultant', 'Salesforce Architect',
      'Salesforce Marketing Cloud', 'Salesforce Service Cloud', 'Salesforce Commerce Cloud', 'Salesforce Pardot',
      'Salesforce CPQ Consultant', 'Salesforce Field Service', 'Salesforce Einstein Analytics', 'Salesforce Integration Specialist',
      'Salesforce Lightning Developer', 'Salesforce Apex Developer', 'Salesforce LWC Developer', 'Salesforce Flow Developer',
      'Salesforce DevOps Engineer', 'Salesforce Release Manager', 'Salesforce Data Migration Specialist', 'Salesforce Security Specialist'
    ],
    'ERP Consultants': [
      'Microsoft Dynamics Consultant', 'NetSuite Consultant', 'Workday Consultant', 'ServiceNow Consultant',
      'Epicor Consultant', 'Infor Consultant', 'Sage Consultant', 'Acumatica Consultant',
      'Plex Consultant', 'IFS Consultant', 'Unit4 Consultant', 'Deltek Consultant',
      'JD Edwards Consultant', 'PeopleSoft Consultant', 'Baan Consultant', 'QAD Consultant',
      'Syspro Consultant', 'Exact Consultant', 'Xero Consultant', 'QuickBooks Consultant'
    ],
    'Enterprise Architects': [
      'Solution Architect', 'Technical Architect', 'Data Architect', 'Security Architect',
      'Cloud Architect', 'Integration Architect', 'Application Architect', 'Infrastructure Architect',
      'Business Architect', 'Information Architect', 'Network Architect', 'Mobile Architect',
      'API Architect', 'Microservices Architect', 'DevOps Architect', 'AI/ML Architect',
      'Blockchain Architect', 'IoT Architect', 'Digital Transformation Architect', 'Enterprise Integration Architect'
    ],
    'Developers': [
      'Software Developer', 'Data Scientist', 'DevOps Engineer', 'QA Engineer',
      'Full-stack Developer', 'Front-end Developer', 'Back-end Developer', 'Mobile App Developer',
      'AI Engineer', 'Machine Learning Engineer', 'Cloud Engineer', 'Security Engineer',
      'Blockchain Developer', 'Game Developer', 'AR/VR Developer', 'IoT Developer',
      'Database Developer', 'API Developer', 'System Administrator', 'Technical Lead'
    ],
    'Designers': [
      'UI/UX Designer', 'Graphic Designer', 'Web Designer', 'Mobile App Designer',
      'Product Designer', 'Interaction Designer', 'Visual Designer', 'Brand Designer',
      'Motion Graphics Designer', '3D Designer', 'Game Designer', 'Fashion Designer',
      'Interior Designer', 'Industrial Designer', 'User Researcher', 'Design System Designer',
      'Illustrator', 'Photographer', 'Video Editor', 'Creative Director'
    ],
    'Management Consultants': [
      'Strategy Consultant', 'Operations Consultant', 'Digital Transformation Consultant', 'Change Management Consultant',
      'Financial Consultant', 'HR Consultant', 'IT Strategy Consultant', 'Process Improvement Consultant',
      'Risk Management Consultant', 'Supply Chain Consultant', 'Marketing Strategy Consultant', 'Sales Consultant',
      'Business Analyst', 'Project Management Consultant', 'Organizational Development Consultant', 'Performance Consultant',
      'Innovation Consultant', 'Sustainability Consultant', 'M&A Consultant', 'Implementation Consultant'
    ],
    'Marketing Experts': [
      'Digital Marketing Manager', 'SEO Specialist', 'SEM Specialist', 'Social Media Manager',
      'Content Marketing Manager', 'Email Marketing Specialist', 'PPC Specialist', 'Marketing Automation Specialist',
      'Brand Manager', 'Product Marketing Manager', 'Growth Marketing Manager', 'Performance Marketing Manager',
      'Marketing Analyst', 'Marketing Operations Manager', 'Influencer Marketing Manager', 'Affiliate Marketing Manager',
      'Marketing Technology Manager', 'Customer Acquisition Manager', 'Retention Marketing Manager', 'Marketing Director'
    ],
    'Others': []
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsDropdownOpen(false);
    setActiveCategory('SAP Consultants');
  }, []);

  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen) {
        // Check if the click is outside the mobile menu
        const mobileMenu = document.querySelector('[data-mobile-menu]');
        const hamburgerButton = document.querySelector('[data-hamburger-button]');
        
        if (mobileMenu && 
            !mobileMenu.contains(event.target) && 
            hamburgerButton && 
            !hamburgerButton.contains(event.target)) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5' 
          : 'bg-transparent'
      }`}>
        <div className="w-full max-w-[100%] md:max-w-[90%] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo and Navigation Group */}
            <div className="flex items-center space-x-16">
              {/* Logo */}
              <div className="flex items-center cursor-pointer" onClick={() => router.push('/')}>
                <img 
                  src="https://prolegion-assets.s3.ap-south-1.amazonaws.com/FLexpert+Logo.png" 
                  alt="Logo" 
                  className="h-12 md:h-[70px] w-auto object-contain transition-all duration-300 hover:scale-105"
                />
              </div>

              {/* Navigation Items - Desktop */}
              <div className="hidden md:flex items-center space-x-8">
              {/* Hire Talent with Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => {
                  if (dropdownTimeout) {
                    clearTimeout(dropdownTimeout);
                    setDropdownTimeout(null);
                  }
                  setIsDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => {
                    setIsDropdownOpen(false);
                  }, 150); // 150ms delay
                  setDropdownTimeout(timeout);
                }}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-bold cursor-pointer">
                  <span>Hire Talent</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 w-[800px] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                    {/* Invisible bridge to prevent gap */}
                    <div className="absolute -top-1 left-0 right-0 h-1 bg-transparent"></div>
                    <div className="flex">
                      {/* Left Panel - Categories */}
                      <div className="w-1/3 bg-gray-50 p-4">
                        <div className="space-y-1">
                          {Object.keys(dropdownData).map((category) => (
                            <button
                              key={category}
                              className={`w-full text-left px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200 cursor-pointer ${
                                activeCategory === category
                                  ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-600'
                                  : 'text-gray-700 hover:bg-gray-100'
                              }`}
                              onClick={() => {
                                if (category === 'Others') {
                                  setIsDropdownOpen(false);
                                  router.push('/enquiry?service=others&step=1');
                                } else {
                                  setActiveCategory(category);
                                }
                              }}
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Right Panel - Subcategories */}
                      <div className="w-2/3 p-4">
                        <div className="mb-3">
                          <h3 className="text-lg font-semibold text-gray-800">{activeCategory}</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {dropdownData[activeCategory]?.length > 0 ? (
                            dropdownData[activeCategory].map((item, index) => (
                              <button
                                key={index}
                                className="text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors duration-200 cursor-pointer"
                                 onClick={() => {
                                   // Navigate to enquiry step 2 with pre-selected service category
                                   setIsDropdownOpen(false);
                                   const serviceId = activeCategory.toLowerCase().replace(/\s+/g, '-');
                                   router.push(`/enquiry?service=${serviceId}`);
                                 }}
                              >
                                {item}
                              </button>
                            ))
                          ) : (
                            <div className="col-span-2 text-center py-8 text-gray-500">
                              <p className="text-sm">Click on "Others" to proceed directly to enquiry</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Us */}
              <button 
                onClick={() => router.push('/contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-bold cursor-pointer"
              >
                Contact Us
              </button>

              {/* About Us */}
              <button 
                onClick={() => router.push('/about')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-bold cursor-pointer"
              >
                About Us
              </button>
              </div>
            </div>

            {/* Mobile Layout - Hire Talent Button + Hamburger Menu */}
            <div className="flex items-center space-x-2 md:hidden">
              {/* Enquiry Button - Mobile */}
              {!isOnEnquiryPage && (
                <button onClick={()=> router.push('/enquiry')} className="group relative overflow-hidden px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <span className="relative z-10 flex items-center space-x-1.5">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Hire Talent</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              )}

              {/* Mobile Menu Button */}
              <button 
                data-hamburger-button
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop Enquiry Button */}
            {!isOnEnquiryPage && (
              <button onClick={()=> router.push('/enquiry')} className="hidden md:block group relative overflow-hidden px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <span className="relative z-10 flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Hire Talent</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div data-mobile-menu className="fixed top-16 lg:top-20 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-xl md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-6 py-4 space-y-4">
            {/* Hire Talent Mobile Section */}
            <div>
              <button 
                className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 font-bold py-3 px-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>Hire Talent</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="mt-3 bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                  <div className="flex h-80">
                    {/* Left Panel - Categories */}
                    <div className="w-1/3 bg-gray-100 p-3 flex flex-col">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Categories</div>
                      <div className="flex-1 space-y-1 overflow-y-auto">
                        {Object.keys(dropdownData).map((category) => (
                          <button
                            key={category}
                            className={`w-full text-left px-2 py-2 rounded-md text-xs font-semibold transition-all duration-200 cursor-pointer ${
                              activeCategory === category
                                ? 'bg-blue-100 text-blue-700 border-l-2 border-blue-600'
                                : 'text-gray-700 hover:bg-white hover:text-blue-600'
                            }`}
                            onClick={() => {
                              if (category === 'Others') {
                                setIsDropdownOpen(false);
                                setIsMobileMenuOpen(false);
                                router.push('/enquiry?service=others&step=1');
                              } else {
                                setActiveCategory(category);
                              }
                            }}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Right Panel - Job Names */}
                    <div className="w-2/3 p-3 flex flex-col">
                      <div className="mb-2">
                        <h3 className="text-sm font-semibold text-gray-800">{activeCategory}</h3>
                        <div className="text-xs text-gray-500">Available Roles</div>
                      </div>
                      <div 
                        className="flex-1 overflow-y-auto space-y-1 pr-2"
                        style={{
                          scrollbarWidth: 'thin',
                          scrollbarColor: '#9CA3AF #F3F4F6'
                        }}
                        onTouchStart={(e) => e.stopPropagation()}
                        onTouchMove={(e) => e.stopPropagation()}
                        onWheel={(e) => e.stopPropagation()}
                      >
                        <style jsx>{`
                          div::-webkit-scrollbar {
                            width: 6px;
                          }
                          div::-webkit-scrollbar-track {
                            background: #F3F4F6;
                            border-radius: 3px;
                          }
                          div::-webkit-scrollbar-thumb {
                            background: #9CA3AF;
                            border-radius: 3px;
                          }
                          div::-webkit-scrollbar-thumb:hover {
                            background: #6B7280;
                          }
                        `}</style>
                        {dropdownData[activeCategory]?.length > 0 ? (
                          dropdownData[activeCategory].map((item, index) => (
                            <button
                              key={index}
                              className="w-full text-left text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-2 px-2 rounded-md cursor-pointer"
                              onClick={() => {
                                // Navigate to enquiry step 2 with pre-selected service category
                                setIsDropdownOpen(false);
                                setIsMobileMenuOpen(false);
                                const serviceId = activeCategory.toLowerCase().replace(/\s+/g, '-');
                                router.push(`/enquiry?service=${serviceId}`);
                              }}
                            >
                              {item}
                            </button>
                          ))
                        ) : (
                          <div className="text-center py-4 text-gray-500">
                            <p className="text-xs">Click on "Others" to proceed directly to enquiry</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Us */}
            <button 
              onClick={() => {
                router.push('/contact');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 font-bold py-3 px-2 rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              Contact Us
            </button>

            {/* About Us */}
            <button 
              onClick={() => {
                router.push('/about');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 font-bold py-3 px-2 rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              About Us
            </button>
          </div>
        </div>
      )}

      {showProgressBar && (
        <div className="fixed top-16 lg:top-20 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-100">
          <div className="w-full">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500 ease-out"
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