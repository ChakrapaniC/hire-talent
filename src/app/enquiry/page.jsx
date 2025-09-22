"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, CheckCircle, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ServiceSelection from '@/componets/enquiry-flow/ServiceSelection';
import TimeCommitment from '@/componets/enquiry-flow/TimeCommitment';
import ContactDetails from '@/componets/enquiry-flow/ContactDetails';

const EnquiryFlow = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const prevFormDataRef = useRef({
    serviceType: '',
    timeCommitment: ''
  });
  const [formData, setFormData] = useState({
    serviceType: '',
    timeCommitment: '',
    email: '',
    companyName: '',
    contactName: '',
    phoneNumber: '',
    timezone: '',
    countryCode: ''
  });

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  useEffect(() => {
    const prevFormData = prevFormDataRef.current;
    if (currentStep === 0 &&
      formData.serviceType !== '' &&
      formData.serviceType !== prevFormData.serviceType) {
      setTimeout(() => {
        setCurrentStep(1);
      }, 500);
    }
    if (currentStep === 1 &&
      formData.timeCommitment !== '' &&
      formData.timeCommitment !== prevFormData.timeCommitment) {
      setTimeout(() => {
        setCurrentStep(2);
      }, 500);
    }
    prevFormDataRef.current = {
      serviceType: formData.serviceType,
      timeCommitment: formData.timeCommitment
    };
  }, [formData.serviceType, formData.timeCommitment, currentStep]);

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        name: formData.contactName,
        email: formData.email,
        phone: formData.phoneNumber,
        companyName: formData.companyName,
        interested_in: formData.serviceType,
        workType: formData.timeCommitment,
        skills: [],
        timezone: formData.timezone,
        countryCode: formData.countryCode
      }
      const response = await fetch('https://dev.api.prolegion.com/api/v1/hiringrequest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setFormData({
          serviceType: '',
          timeCommitment: '',
          email: '',
          companyName: '',
          contactName: '',
          phoneNumber: ''
        });
        router.push('/');
      } else {
        alert('Error submitting enquiry. Please try again.', formData);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error. Please try again.');
    }
  };

  const getStepValidation = (step, formData) => {
    switch (step) {
      case 0:
        return formData.serviceType !== '';
      case 1:
        return formData.timeCommitment !== '';
      case 2:
        return formData.email !== '' &&
          formData.companyName !== '' &&
          formData.contactName !== '' &&
          formData.phoneNumber !== '';
      default:
        return false;
    }
  };

  const steps = [
    {
      title: "Who would you like to hire?",
      subtitle: "STEP 1",
      component: <ServiceSelection formData={formData} updateFormData={updateFormData} />
    },
    {
      title: "What level of time commitment will you require?",
      subtitle: "STEP 2",
      component: <TimeCommitment formData={formData} updateFormData={updateFormData} />
    },
    {
      title: "Let's streamline your workforce",
      subtitle: "SUCCESS!",
      component: <ContactDetails formData={formData} updateFormData={updateFormData} />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/20 pt-20">
      <div className="max-w-4xl mx-auto p-5">
        {/* Back to Home Button */}
        <div className="mb-6">
          <button
            onClick={() => router.push('/')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-center mb-8">
          {[0, 1, 2].map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${currentStep >= step
                  ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white'
                  : 'bg-gray-200 text-gray-500'
                }`}>
                {currentStep > step ? <CheckCircle className="w-5 h-5" /> : step + 1}
              </div>
              {index < 2 && (
                <div className={`w-20 h-1 mx-2 rounded-full ${currentStep > step ? 'bg-gradient-to-r from-blue-600 to-emerald-600' : 'bg-gray-200'
                  }`} />
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-5 md:p-7">
          <div className="mb-6">
            <div className='flex gap-1'>
              {currentStep > 0 ? (<button
                onClick={handleBack}
                className="mr-3 w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center shadow-sm"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>) : (<div></div>)}
              <div className="text-sm text-gray-400 font-medium mt-3">{steps[currentStep].subtitle}</div>
            </div>
            <h1 className="text-xl md:text-2xl mt-4 font-bold text-gray-900">
              {steps[currentStep].title}
            </h1>
          </div>

          {steps[currentStep].component}

          <div className="flex justify-between mt-8">
            {currentStep < 2 ? (
              <div>
              </div>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!getStepValidation(currentStep, formData)}
                className={`flex items-center space-x-2 px-8 py-3 rounded-xl font-semibold transition-all ${getStepValidation(currentStep, formData)
                    ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
              >
                <span>Submit Enquiry</span>
                <CheckCircle className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryFlow;