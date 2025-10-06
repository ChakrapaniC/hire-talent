"use client";
import React, { useState, useEffect } from 'react';
import { Megaphone, TrendingUp, Target, BarChart3, Globe, Zap, Share2, Search, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Salesforce = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const salesforceServices = [
    {
      id: 1,
      title: "Salesforce Implementation",
      description: "Complete Salesforce setup and configuration for your business needs",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      strategies: ["Sales Cloud", "Service Cloud", "Marketing Cloud", "Custom Apps"],
    },
    {
      id: 2,
      title: "Salesforce Development",
      description: "Custom development and integration solutions on Salesforce platform",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      strategies: ["Apex Development", "Lightning Components", "Visualforce", "API Integration"],
    },
    {
      id: 3,
      title: "Salesforce Analytics",
      description: "Business intelligence and reporting solutions with Einstein Analytics",
      icon: <Target className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      strategies: ["Einstein Analytics", "Reports & Dashboards", "Data Visualization", "Predictive Analytics"],
    },
    {
      id: 4,
      title: "Salesforce Consulting",
      description: "Strategic guidance and best practices for Salesforce optimization",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      strategies: ["Process Optimization", "User Training", "Governance", "Best Practices"],
    }
  ];



  return (
    <div className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Marketing Elements */}
        <div className="absolute top-20 left-10 text-blue-200 opacity-30 animate-bounce">
          <Target className="w-5 h-5" />
        </div>
        <div className="absolute top-40 right-20 text-cyan-200 opacity-30 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <BarChart3 className="w-4 h-4" />
        </div>
        <div className="absolute bottom-20 right-1/4 text-blue-200 opacity-30 animate-bounce" style={{ animationDelay: '1s' }}>
          <TrendingUp className="w-6 h-6" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-6">
            <Megaphone className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">Salesforce Excellence</span>
          </div>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
            Expert <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">Salesforce Professionals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accelerate your business growth with certified Salesforce experts who deliver custom solutions, seamless integrations, and measurable results
          </p>
        </div>


        {/* Salesforce Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {salesforceServices.map((service, index) => (
            <div
              key={service.id}
              className={`${service.bgColor} rounded-3xl p-8 border-2 transition-all duration-700 border-blue-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="text-2xl font-bold opacity-20">
                  0{index + 1}
                </div>
              </div>

              {/* Strategies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Services</h4>
                <div className="flex flex-wrap gap-2">
                  {service.strategies.map((strategy, strategyIndex) => (
                    <span
                      key={strategyIndex}
                      className="px-3 py-1 text-white text-xs font-medium rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                    >
                      {strategy}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>


        {/* Salesforce Tools */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Salesforce <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Solutions & Tools</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Sales Cloud", icon: <BarChart3 className="w-8 h-8" /> },
              { name: "Service Cloud", icon: <Target className="w-8 h-8" /> },
              { name: "Marketing Cloud", icon: <Search className="w-8 h-8" /> },
              { name: "Commerce Cloud", icon: <Mail className="w-8 h-8" /> },
              { name: "Einstein Analytics", icon: <Share2 className="w-8 h-8" /> },
              { name: "Platform Development", icon: <TrendingUp className="w-8 h-8" /> }
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-blue-600 mb-2 flex justify-center">
                  {tool.icon}
                </div>
                <div className="text-sm font-medium text-gray-700">
                  {tool.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Salesforce Experience?
            </h3>
            <p className="text-gray-600 mb-6">
              Partner with our Salesforce experts and unlock the full potential of your CRM with custom solutions and best practices
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => router.push('/enquiry?service=salesforce')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Hire Salesforce Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salesforce;
