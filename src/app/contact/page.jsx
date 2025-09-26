"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ContactUs from '@/componets/ContactUs/ContactUs';
import Navbar from '@/componets/Navbar/Navbar';

const ContactPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    companyName: '',
    contactName: '',
    phoneNumber: ''
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
        companyName: formData.companyName
      }
      
      const response = await fetch('https://dev.api.prolegion.com/api/v1/hiringrequest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setFormData({
            email: '',
            companyName: '',
            contactName: '',
            phoneNumber: ''
          });
          router.push('/');
        }, 1000);
      } else {
        alert('Error submitting contact form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-purple-25 pt-20 flex items-center justify-center">
      <Navbar />
      <div className="w-full max-w-2xl mx-auto px-4">
        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
          {/* Contact Us heading inside the form */}
          <div className="mb-6">
            <div className="text-xl md:text-2xl font-bold text-gray-700 text-center">
              Contact Us
            </div>
          </div>
          
          <div className='mt-2'>
            <ContactUs formData={formData} updateFormData={updateFormData} />
          </div>
          <div className="mt-6">
            <button
              onClick={handleSubmit}
              disabled={!formData.email || !formData.companyName || !formData.contactName || !formData.phoneNumber}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform ${
                formData.email && formData.companyName && formData.contactName && formData.phoneNumber
                  ? 'bg-gradient-to-r from-purple-600 to-violet-600 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 cursor-pointer'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
