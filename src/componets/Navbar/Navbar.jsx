"use client";
import React, { useState, useEffect } from 'react';
import { MessageCircle, ChevronDown, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Navbar = ({ currentStep = 0, showProgressBar = false, isSubmitted = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Developers');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const router = useRouter();

  const dropdownData = {
    'Developers': [
      'Software Developer', 'Data Scientist', 'DevOps Engineer', 'QA Engineer',
      'Full-stack Developer', 'Front-end Developer', 'Back-end Developer', 'Mobile App Developer',
      'AI Engineer', 'Machine Learning Engineer', 'Cloud Engineer', 'Security Engineer',
      'Blockchain Developer', 'Game Developer', 'AR/VR Developer', 'IoT Developer',
      'Database Developer', 'API Developer', 'System Administrator', 'Technical Lead'
    ],
    'ERP Consultants': [
      'SAP Consultant', 'Oracle Consultant', 'Microsoft Dynamics Consultant', 'NetSuite Consultant',
      'Salesforce Consultant', 'Workday Consultant', 'ServiceNow Consultant', 'Epicor Consultant',
      'Infor Consultant', 'Sage Consultant', 'Acumatica Consultant', 'Plex Consultant',
      'IFS Consultant', 'Unit4 Consultant', 'Deltek Consultant', 'IFS ERP Consultant',
      'JD Edwards Consultant', 'PeopleSoft Consultant', 'Baan Consultant', 'QAD Consultant'
    ],
    'Enterprise Architects': [
      'Solution Architect', 'Technical Architect', 'Data Architect', 'Security Architect',
      'Cloud Architect', 'Integration Architect', 'Application Architect', 'Infrastructure Architect',
      'Business Architect', 'Information Architect', 'Network Architect', 'Mobile Architect',
      'API Architect', 'Microservices Architect', 'DevOps Architect', 'AI/ML Architect',
      'Blockchain Architect', 'IoT Architect', 'Digital Transformation Architect', 'Enterprise Integration Architect'
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
    ]
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
    setActiveCategory('Developers');
  }, []);

  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

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
        <div className="w-full max-w-[90%] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo and Navigation Group */}
            <div className="flex items-center space-x-16">
              {/* Logo */}
              <div className="flex items-center cursor-pointer" onClick={() => router.push('/')}>
                <img 
                  src="https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/hire-flexpert/image+(1).jpeg" 
                  alt="Logo" 
                  className="h-8 md:h-12 w-auto object-contain transition-all duration-300 hover:scale-105"
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
                <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors duration-200 font-bold cursor-pointer">
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
                                  ? 'bg-purple-100 text-purple-700 border-l-4 border-purple-600'
                                  : 'text-gray-700 hover:bg-gray-100'
                              }`}
                              onClick={() => setActiveCategory(category)}
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
                          {dropdownData[activeCategory]?.map((item, index) => (
                            <button
                              key={index}
                              className="text-left px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-md transition-colors duration-200 cursor-pointer"
                               onClick={() => {
                                 // Navigate to enquiry step 2 with pre-selected service category
                                 setIsDropdownOpen(false);
                                 const serviceId = activeCategory.toLowerCase().replace(/\s+/g, '-');
                                 router.push(`/enquiry?service=${serviceId}`);
                               }}
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Us */}
              <button 
                onClick={() => router.push('/contact')}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-bold cursor-pointer"
              >
                Contact Us
              </button>

              {/* About Us */}
              <button className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-bold cursor-pointer">
                About Us
              </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Enquiry Button */}
            <button onClick={()=> router.push('/enquiry')} className="group relative overflow-hidden px-6 py-2.5 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <span className="relative z-10 flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>Enquiry</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 lg:top-20 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-lg md:hidden">
          <div className="px-6 py-4 space-y-4">
            {/* Hire Talent Mobile Section */}
            <div>
              <button 
                className="flex items-center justify-between w-full text-left text-gray-700 hover:text-purple-600 transition-colors duration-200 font-bold py-2 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>Hire Talent</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {Object.keys(dropdownData).map((category) => (
                    <div key={category} className="space-y-1">
                      <button
                        className="text-left text-sm font-bold text-gray-700 hover:text-purple-600 transition-colors duration-200 cursor-pointer"
                        onClick={() => setActiveCategory(category)}
                      >
                        {category}
                      </button>
                      {activeCategory === category && (
                        <div className="ml-4 grid grid-cols-1 gap-1">
                          {dropdownData[category]?.slice(0, 10).map((item, index) => (
                            <button
                              key={index}
                              className="text-left text-xs text-gray-600 hover:text-purple-600 transition-colors duration-200 py-1 cursor-pointer"
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Us */}
            <button 
              onClick={() => router.push('/contact')}
              className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors duration-200 font-bold py-2 cursor-pointer"
            >
              Contact Us
            </button>

            {/* About Us */}
            <button className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors duration-200 font-bold py-2 cursor-pointer">
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
                className="h-full bg-gradient-to-r from-purple-600 to-violet-600 transition-all duration-500 ease-out"
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