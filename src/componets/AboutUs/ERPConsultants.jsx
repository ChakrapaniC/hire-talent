"use client";
import React, { useState, useEffect } from 'react';
import { Building2, BarChart3, Users, Settings, TrendingUp, Shield, Zap, Award, CheckCircle, ArrowRight, Globe, Target } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ERPConsultants = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const erpServices = [
    {
      id: 1,
      title: "ERP Implementation",
      description: "End-to-end ERP system deployment with seamless integration and training",
      icon: <Building2 className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      features: ["System Analysis", "Custom Configuration", "Data Migration", "User Training", "Go-Live Support"],
      duration: "3-12 Months",
      successRate: "98%"
    },
    {
      id: 2,
      title: "Business Process Optimization",
      description: "Streamline operations and improve efficiency through process redesign",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      features: ["Process Mapping", "Gap Analysis", "Workflow Design", "KPI Development", "Change Management"],
      duration: "2-6 Months",
      successRate: "95%"
    },
    {
      id: 3,
      title: "Digital Transformation",
      description: "Modernize business operations with cutting-edge technology solutions",
      icon: <Zap className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      features: ["Cloud Migration", "Automation", "Integration", "Analytics", "Mobile Solutions"],
      duration: "6-18 Months",
      successRate: "92%"
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      icon: <Building2 className="w-6 h-6" />,
      projects: "150+",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Healthcare",
      icon: <Shield className="w-6 h-6" />,
      projects: "120+",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Retail",
      icon: <Users className="w-6 h-6" />,
      projects: "200+",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Finance",
      icon: <BarChart3 className="w-6 h-6" />,
      projects: "100+",
      color: "from-purple-500 to-violet-500"
    },
    {
      name: "Education",
      icon: <Award className="w-6 h-6" />,
      projects: "80+",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Government",
      icon: <Globe className="w-6 h-6" />,
      projects: "60+",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const successMetrics = [
    {
      metric: "ERP Consultants",
      value: "2,500+",
      icon: <Users className="w-6 h-6" />,
      description: "Certified professionals"
    },
    {
      metric: "Projects Completed",
      value: "1,200+",
      icon: <CheckCircle className="w-6 h-6" />,
      description: "Successful implementations"
    },
    {
      metric: "Client Satisfaction",
      value: "97%",
      icon: <Award className="w-6 h-6" />,
      description: "Repeat business rate"
    },
    {
      metric: "ROI Improvement",
      value: "250%",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Average client ROI"
    }
  ];


  return (
    <div className="py-20 px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Business Elements */}
        <div className="absolute top-20 right-10 text-indigo-200 opacity-30 animate-bounce">
          <Building2 className="w-6 h-6" />
        </div>
        <div className="absolute top-40 left-20 text-blue-200 opacity-30 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <BarChart3 className="w-5 h-5" />
        </div>
        <div className="absolute bottom-20 left-1/4 text-purple-200 opacity-30 animate-bounce" style={{ animationDelay: '1s' }}>
          <Settings className="w-4 h-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full mb-6">
            <Building2 className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-gray-700">Enterprise Solutions</span>
          </div>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
            Expert <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">ERP Consultants</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business operations with experienced ERP consultants who deliver enterprise-grade solutions, streamline processes, and drive digital transformation
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {successMetrics.map((metric, index) => (
            <div
              key={index}
              className={`bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl mb-4 text-white">
                {metric.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {metric.value}
              </div>
              <div className="text-gray-600 text-sm font-medium mb-1">
                {metric.metric}
              </div>
              <div className="text-xs text-gray-500">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* ERP Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {erpServices.map((service, index) => (
            <div
              key={service.id}
              className={`${service.bgColor} rounded-3xl p-8 border-2 transition-all duration-700 border-indigo-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {service.successRate} Success Rate
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0 text-indigo-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between pt-4 border-t border-white/50">
                <div className="text-center">
                  <div className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                    {service.duration}
                  </div>
                  <div className="text-xs text-gray-600">Duration</div>
                </div>
                <div className="flex items-center text-indigo-600">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industries Served */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Industries <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">We Serve</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized expertise across diverse industries with tailored ERP solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${industry.color} rounded-xl mb-4 text-white`}>
                  {industry.icon}
                </div>
                <div className="text-lg font-bold text-gray-800 mb-1">
                  {industry.name}
                </div>
                <div className="text-sm text-gray-600">
                  {industry.projects} Projects
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6">
              Partner with our ERP experts and unlock the full potential of your business operations with proven enterprise solutions
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => router.push('/enquiry?service=erp-consultants')}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Hire ERP Consultants
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ERPConsultants;
