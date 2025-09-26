"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();

  const jobCategories = {
    'Developers': [
      'Software Developer', 'Data Scientist', 'DevOps Engineer', 'QA Engineer',
      'Full-stack Developer', 'Front-end Developer', 'Back-end Developer', 'Mobile App Developer',
      'AI Engineer', 'Machine Learning Engineer', 'Cloud Engineer', 'Security Engineer'
    ],
    'ERP Consultants': [
      'SAP Consultant', 'Oracle Consultant', 'Microsoft Dynamics Consultant', 'NetSuite Consultant',
      'Salesforce Consultant', 'Workday Consultant', 'ServiceNow Consultant', 'Epicor Consultant'
    ],
    'Enterprise Architects': [
      'Solution Architect', 'Technical Architect', 'Data Architect', 'Security Architect',
      'Cloud Architect', 'Integration Architect', 'Application Architect', 'Infrastructure Architect'
    ],
    'Designers': [
      'UI/UX Designer', 'Graphic Designer', 'Web Designer', 'Mobile App Designer',
      'Product Designer', 'Interaction Designer', 'Visual Designer', 'Brand Designer'
    ],
    'Management Consultants': [
      'Strategy Consultant', 'Operations Consultant', 'Digital Transformation Consultant', 'Change Management Consultant',
      'Financial Consultant', 'HR Consultant', 'IT Strategy Consultant', 'Process Improvement Consultant'
    ],
    'Marketing Experts': [
      'Digital Marketing Manager', 'SEO Specialist', 'SEM Specialist', 'Social Media Manager',
      'Content Marketing Manager', 'Email Marketing Specialist', 'PPC Specialist', 'Marketing Automation Specialist'
    ]
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-16">
        
        {/* Job Categories Section - Top */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(jobCategories).map(([category, jobs]) => (
              <div key={category} className="group">
                <h4 className="text-lg font-semibold text-purple-400 mb-3 border-b border-purple-900 pb-2 group-hover:text-purple-300 transition-colors duration-200">
                  {category}
                </h4>
                <ul className="space-y-1">
                  {jobs.slice(0, 4).map((job, index) => (
                    <li key={index} className="text-sm text-gray-400">
                      {job}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Logo and Navigation Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
          {/* Logo and Motto Section */}
          <div className="flex items-center space-x-4 mb-6 lg:mb-0">
            {/* Logo */}
            <div className="flex items-center cursor-pointer group" onClick={() => router.push('/')}>
              <img 
                src="https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/hire-flexpert/image+(1).jpeg" 
                alt="Flexpert Logo" 
                className="h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            
            {/* Vertical Line */}
            <div className="hidden lg:block w-px h-8 bg-gray-600"></div>
            
            {/* Motto */}
            <div>
              <p className="text-base font-medium text-gray-300">
                Expertise, whenever you need it
              </p>
            </div>
          </div>

          {/* Main Navigation Links */}
          <div className="flex flex-wrap items-center justify-center space-x-8">
            <button 
              onClick={() => router.push('/enquiry')}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium cursor-pointer"
            >
              Hire Talent
            </button>
            <button 
              onClick={() => router.push('/contact')}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium cursor-pointer"
            >
              Contact Us
            </button>
            <button className="text-gray-300 hover:text-white transition-colors duration-200 font-medium cursor-pointer">
              About Us
            </button>
          </div>
        </div>

        {/* Bottom Section - Centered */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © 2024 Flexpert. All rights reserved.
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="cursor-pointer hover:text-white transition-colors duration-200">
                Privacy Policy
              </span>
              <span className="cursor-pointer hover:text-white transition-colors duration-200">
                Terms of Service
              </span>
              <span className="cursor-pointer hover:text-white transition-colors duration-200">
                Accessibility
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;