"use client";
import React, { useState, useEffect, useRef, useCallback, Suspense } from 'react';
import { ArrowLeft, CheckCircle, ChevronRight } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import ServiceSelection from '@/componets/enquiry-flow/ServiceSelection';
import TimeCommitment from '@/componets/enquiry-flow/TimeCommitment';
import ContactDetails from '@/componets/enquiry-flow/ContactDetails';
import Navbar from '@/componets/Navbar/Navbar';

const EnquiryFlowWithSearchParams = ({ onServiceParamChange }) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      onServiceParamChange(serviceParam);
    }
  }, [searchParams, onServiceParamChange]);

  return null; 
};

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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleServiceParamChange = useCallback((serviceParam) => {
    setFormData(prev => ({
      ...prev,
      serviceType: serviceParam
    }));
    
    setCurrentStep(1);
  }, []);

  const updateFormData = (field, value) => {
    const prevValue = formData[field];
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // If clicking on already selected option, manually advance to next step
    if (prevValue === value && value !== '') {
      if (field === 'serviceType' && currentStep === 0) {
        setTimeout(() => {
          setCurrentStep(1);
        }, 500);
      } else if (field === 'timeCommitment' && currentStep === 1) {
        setTimeout(() => {
          setCurrentStep(2);
        }, 500);
      }
    }
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
        setIsSubmitted(true);
        // Show 100% progress bar for a moment before redirecting
        setTimeout(() => {
          setFormData({
            serviceType: '',
            timeCommitment: '',
            email: '',
            companyName: '',
            contactName: '',
            phoneNumber: ''
          });
          router.push('/');
        }, 1000);
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
    <div className="min-h-screen bg-blue-25 pt-20">
      <Suspense fallback={<div>Loading...</div>}>
        <EnquiryFlowWithSearchParams onServiceParamChange={handleServiceParamChange} />
      </Suspense>
      <Navbar currentStep={currentStep} showProgressBar={true} isSubmitted={isSubmitted} />
      <div className="max-w-[90%] md:max-w-[54%] mx-auto px-1 py-4">
        {/* Back to Home Button */}
        {/* <div className="mb-6">
          <button
            onClick={() => router.push('/')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
        </div> */}

        <div className="px-1 py-1 md:px-7 md:py-4">
          <div className="mb-5">
            <div className='flex gap-1'>
              {currentStep > 0 ? (              <button
                onClick={handleBack}
                className="mr-3 w-9 h-9 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center shadow-sm cursor-pointer"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>) : (<div></div>)}
              <div className="text-[14px] text-gray-400 font-medium mt-3">{steps[currentStep].subtitle}</div>
            </div>
            <div className="text-xl md:text-3xl mt-[20px] ml-1 font-bold text-gray-700">
              {steps[currentStep].title}
            </div>
          </div>
          <div className='mt-2'>
          {steps[currentStep].component}
          </div>
          <div className="mt-8">
            {currentStep < 2 ? (
              <div>
              </div>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!getStepValidation(currentStep, formData)}
                className={`flex items-center justify-center w-full space-x-2 px-8 py-2 rounded-xl font-semibold transition-all cursor-pointer ${getStepValidation(currentStep, formData)
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105'
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