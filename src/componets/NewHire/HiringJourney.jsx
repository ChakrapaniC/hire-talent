"use client";
import React, { useState, useEffect } from 'react';
import { Search, Users, MessageCircle, CheckCircle, Star, Clock, ArrowRight, Zap, Shield, Trophy } from 'lucide-react';

const HiringJourneyFlow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Discover Talent",
      subtitle: "Browse & Filter",
      description: "Search through our curated pool of pre-vetted professionals. Filter by skills, experience, and availability.",
      icon: <Search className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-100",
      stats: "50K+ Experts",
      features: ["AI-Powered Matching", "Skill Verification", "Portfolio Reviews"]
    },
    {
      id: 2,
      title: "Connect Instantly",
      subtitle: "Chat & Interview",
      description: "Connect with candidates through our platform. Conduct video interviews and assess their expertise.",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-100",
      stats: "<2h Response",
      features: ["Video Interviews", "Real-time Chat", "Proposal System"]
    },
    {
      id: 3,
      title: "Secure Hiring",
      subtitle: "Contract & Onboard",
      description: "Finalize terms with smart contracts. Seamless onboarding with project milestones and secure payments.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-100",
      stats: "100% Secure",
      features: ["Smart Contracts", "Milestone Payments", "Legal Protection"]
    },
    {
      id: 4,
      title: "Deliver Excellence",
      subtitle: "Track & Complete",
      description: "Monitor progress with real-time updates. Quality assurance and seamless project completion.",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-100",
      stats: "98.5% Success",
      features: ["Progress Tracking", "Quality Assurance", "Performance Analytics"]
    }
  ];

  const floatingElements = [
    { icon: <Star className="w-4 h-4" />, delay: 0, color: "text-yellow-500" },
    { icon: <Zap className="w-4 h-4" />, delay: 1000, color: "text-blue-500" },
    { icon: <CheckCircle className="w-4 h-4" />, delay: 2000, color: "text-green-500" },
    { icon: <Clock className="w-4 h-4" />, delay: 3000, color: "text-purple-500" },
  ];

  return (
    <div className="py-20 px-6 lg:px-8 bg-purple-25 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-50 rounded-full blur-3xl animate-pulse opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-50 rounded-full blur-3xl animate-pulse opacity-20" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating Elements */}
      {/* {floatingElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.color} animate-bounce`}
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
            animationDelay: `${element.delay}ms`,
            animationDuration: '3s'
          }}
        >
          {element.icon}
        </div>
      ))} */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-violet-100 rounded-full mb-6">
            <Zap className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-gray-700">Streamlined Hiring Process</span>
          </div>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
            Your Journey to Finding the 
            <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 bg-clip-text text-transparent block mt-2">
              Perfect Flexpert
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From discovery to delivery, experience a seamless hiring process designed for modern businesses
          </p>
        </div>

        {/* Journey Flow */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-200 via-violet-200  to-purple-200 transform -translate-y-1/2 z-0">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 via-violet-500  to-purple-600 transition-all duration-1000 ease-out rounded-full"
              style={{ width: `${((activeStep + 1) / 4) * 100}%` }}
            ></div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative group transition-all duration-700 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Step Card */}
                <div className={`${step.bgColor} rounded-3xl p-6 h-full border-2 transition-all duration-500 hover:shadow-2xl hover:scale-105 ${
                  activeStep === index 
                    ? 'border-current shadow-2xl scale-105' 
                    : 'border-transparent hover:border-gray-200'
                }`}>
                  
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      {step.icon}
                    </div>
                    <div className={`text-3xl font-bold opacity-20 transition-opacity duration-300 ${
                      activeStep === index ? 'opacity-40' : 'group-hover:opacity-30'
                    }`}>
                      0{index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {step.title}
                      </h3>
                      <p className={`text-sm font-medium bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        {step.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Stats */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full bg-white/70 text-xs font-semibold text-gray-700 border`}>
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} mr-2`}></div>
                      {step.stats}
                    </div>

                    {/* Features */}
                    <div className="space-y-2 pt-2">
                      {step.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-xs text-gray-600"
                        >
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className={`absolute -right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg ${
                    index === 3 ? 'hidden' : ''
                  }`}>
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>

                </div>

                {/* Mobile Connection Line */}
                {index < 3 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-gray-300 to-gray-200 relative overflow-hidden">
                      <div 
                        className={`absolute top-0 left-0 w-full bg-gradient-to-b ${step.color} transition-all duration-500`}
                        style={{ 
                          height: activeStep > index ? '100%' : '0%',
                          transitionDelay: `${index * 300}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringJourneyFlow;