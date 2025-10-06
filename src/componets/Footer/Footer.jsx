"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();

  const jobCategories = {
    'SAP Consultants': [
      'SAP FICO Consultant', 'SAP MM Consultant', 'SAP SD Consultant', 'SAP S/4HANA Consultant',
      'SAP Basis Consultant', 'SAP ABAP Developer', 'SAP BI Consultant', 'SAP Fiori Consultant'
    ],
    'Oracle Consultants': [
      'Oracle EBS Consultant', 'Oracle Cloud Consultant', 'Oracle Fusion Consultant', 'Oracle Database Consultant',
      'Oracle BI Consultant', 'Oracle APEX Developer', 'Oracle PL/SQL Developer', 'Oracle OBIEE Consultant'
    ],
    'Salesforce': [
      'Salesforce Admin', 'Salesforce Developer', 'Salesforce Architect', 'Salesforce Marketing Cloud',
      'Salesforce Service Cloud', 'Salesforce CPQ Consultant', 'Salesforce Lightning Developer', 'Salesforce Apex Developer'
    ],
    'ERP Consultants': [
      'Microsoft Dynamics Consultant', 'NetSuite Consultant', 'Workday Consultant', 'ServiceNow Consultant',
      'Epicor Consultant', 'Infor Consultant', 'Sage Consultant', 'Acumatica Consultant'
    ],
    'Enterprise Architects': [
      'Solution Architect', 'Technical Architect', 'Data Architect', 'Security Architect',
      'Cloud Architect', 'Integration Architect', 'Application Architect', 'Infrastructure Architect'
    ],
    'Developers': [
      'Software Developer', 'Data Scientist', 'DevOps Engineer', 'QA Engineer',
      'Full-stack Developer', 'Front-end Developer', 'Back-end Developer', 'Mobile App Developer'
    ]
  };

  // Map categories to service parameters (same as navbar)
  const getServiceId = (category) => {
    return category.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="w-full max-w-[90%] mx-auto px-6 lg:px-8 py-16">
        
        {/* Job Categories Section - Top */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(jobCategories).map(([category, jobs]) => (
              <div key={category} className="group">
                <h4 className="text-lg font-semibold text-blue-400 mb-3 border-b border-blue-900 pb-2 group-hover:text-blue-300 transition-colors duration-200">
                  {category}
                </h4>
                <ul className="space-y-1">
                  {jobs.slice(0, 4).map((job, index) => (
                    <li key={index}>
                      <button
                        onClick={() => router.push(`/enquiry?service=${getServiceId(category)}`)}
                        className="text-sm text-gray-400 hover:text-blue-400 hover:underline transition-all duration-200 cursor-pointer text-left"
                      >
                        {job}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-700 mb-3"></div>

        {/* Logo and Navigation Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-3">
          {/* Logo and Motto Section */}
          <div className="flex items-center space-x-4 mb-6 lg:mb-0">
            {/* Logo */}
            <div className="flex items-center cursor-pointer group" onClick={() => router.push('/')}>
              <img 
                src="https://prolegion-assets.s3.ap-south-1.amazonaws.com/FLexpert+Logo.png" 
                alt="Flexpert Logo" 
                className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            
            {/* Vertical Line */}
            <div className="hidden lg:block w-px h-8 bg-gray-600"></div>
            
            {/* Motto */}
            <div>
              <p className="text-xs md:text-base font-medium text-gray-300">
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