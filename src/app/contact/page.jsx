"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ContactUs from '@/componets/ContactUs/ContactUs';

const ContactPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    companyName: '',
    contactName: '',
    phoneNumber: '',
    description: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        name: formData.contactName,
        email: formData.email,
        phone: formData.phoneNumber,
        companyName: formData.companyName,
        description: formData.description
      }
      
      const response = await fetch('https://dev.api.prolegion.com/api/v1/hiringrequest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (compatible; HireTalent/1.0)',
        },
        body: JSON.stringify(payload),
        mode: 'cors',
        credentials: 'omit',
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setFormData({
            email: '',
            companyName: '',
            contactName: '',
            phoneNumber: '',
            description: ''
          });
          router.push('/');
        }, 1000);
      } else {
        console.error('API Response Error:', response.status, response.statusText);
        alert('Error submitting contact form. Please try again.');
      }
    } catch (error) {
      console.error('Network Error Details:', error);
      
      // More specific error handling for mobile devices
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        alert('Network connection error. Please check your internet connection and try again.');
      } else if (error.name === 'AbortError') {
        alert('Request was cancelled. Please try again.');
      } else {
        alert('Network error. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-blue-25">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-cyan-900 py-16 px-4 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-white rounded-full"></div>
          <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in touch
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Complete the form below and a Flexpert representative will reach out to you shortly. 
            For immediate assistance, please contact our support team or reach out to our customer service.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Form Container */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
            <div className='mt-2'>
              <ContactUs formData={formData} updateFormData={updateFormData} />
            </div>
            <div className="mt-6">
              <button
                onClick={handleSubmit}
                disabled={!formData.email || !formData.companyName || !formData.contactName || !formData.phoneNumber}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform ${
                  formData.email && formData.companyName && formData.contactName && formData.phoneNumber
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 cursor-pointer'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

       

     
    </div>
  );
};

export default ContactPage;
