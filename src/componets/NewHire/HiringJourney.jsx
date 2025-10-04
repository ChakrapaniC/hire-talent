"use client";
import { useRouter } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';

const HiringJourneyFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);
  const router = useRouter();

  const steps = [
    {
      number: 1,
      title: "Submit Talent Inquiry",
      description: "Tell us about your project requirements and we'll match you with the perfect talent for your needs."
    },
    {
      number: 2,
      title: "Talk to One of Our Industry Experts",
      description: "An expert on our team will work with you to understand your goals, technical needs, and team dynamics."
    },
    {
      number: 3,
      title: "Work With Hand-Selected Talent",
      description: "Within days, we'll introduce you to the right talent for your project. Average time to match is under 24 hours."
    },
    {
      number: 4,
      title: "The Right Fit, Guaranteed",
      description: "Work with your new team member on a trial basis (pay only if satisfied), ensuring you hire the right people for the job."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      setCurrentStep(0);
      const timer = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < steps.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      }, 800);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <div ref={componentRef} className="w-full max-w-[87.5%] mx-auto pb-10 pt-12 bg-white">
      <div className="text-center mb-16">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-700 mb-4">Hiring Made Easy</h1>
      </div>

      <div className="hidden lg:block">
        <div className="relative">
          <div className="flex justify-between items-start relative">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center w-64 relative z-10">
                {/* Step Circle */}
                <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center text-xl font-semibold transition-all duration-500 ease-in-out ${
                  index <= currentStep 
                    ? 'border-blue-500 bg-blue-50 text-blue-600 transform scale-105' 
                    : 'border-gray-300 bg-white text-gray-400 transform scale-95'
                }`}>
                  {step.number}
                </div>
                
                <div className={`text-center mt-8 transition-all duration-500 ease-in-out ${
                  index <= currentStep ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                }`}>
                  <div className="min-h-[3rem] flex items-center justify-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-700 leading-tight">{step.title}</h3>
                  </div>
                  <div className="min-h-[5rem] flex items-start justify-center">
                    <p className="text-gray-500 text-base leading-relaxed max-w-full">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute top-8 left-0 right-0">
            {[0, 1, 2].map((index) => (
              <div 
                key={index} 
                className="absolute flex items-center"
                style={{
                  left: `${12.5 + (index * 25)}%`,
                  width: '20%',
                  height: '2px'
                }}
              >
                <div className={`h-0.5 bg-blue-500 transition-all duration-500 ease-in-out ${
                  index < currentStep ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`} 
                style={{ transformOrigin: 'left' }}></div>
                <div className={`transition-all duration-500 ease-in-out ${
                  index < currentStep ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-75'
                }`}
                style={{
                  width: '0',
                  height: '0',
                  borderLeft: '8px solid rgb(59 130 246)',
                  borderTop: '5px solid transparent',
                  borderBottom: '5px solid transparent',
                  marginLeft: '-1px'
                }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center text-xl font-semibold transition-all duration-500 ease-in-out ${
                index <= currentStep 
                  ? 'border-blue-500 bg-blue-50 text-blue-600' 
                  : 'border-gray-300 bg-white text-gray-400'
              }`}>
                {step.number}
              </div>
              
              <div className={`text-center mt-6 transition-all duration-500 ease-in-out ${
                index <= currentStep ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
              }`}>
                <div className="min-h-[3rem] flex items-center justify-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-700 leading-tight">{step.title}</h3>
                </div>
                <div className="min-h-[5rem] flex items-start justify-center">
                  <p className="text-gray-500 text-base leading-relaxed max-w-full">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className={`mt-6 w-px h-12 bg-blue-500 transition-all duration-500 ease-in-out ${
                  index < currentStep ? 'opacity-100 transform scale-y-100' : 'opacity-0 transform scale-y-0'
                }`}
                style={{ transformOrigin: 'top' }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HiringJourneyFlow;