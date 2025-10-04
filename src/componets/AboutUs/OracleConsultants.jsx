"use client";
import React, { useState, useEffect } from 'react';
import { Palette, PenTool, Camera, Layers, Brush, Sparkles, Award, Users, Heart, Eye, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

const OracleConsultants = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const oracleCategories = [
    {
      id: 1,
      title: "Oracle EBS",
      description: "Complete Oracle E-Business Suite implementation and optimization solutions",
      icon: <Layers className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      services: ["Financials", "Supply Chain", "Manufacturing", "HRMS", "CRM"],
      portfolio: [
        { type: "Financial Implementation", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop" },
        { type: "SCM Optimization", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" }
      ],
    },
    {
      id: 2,
      title: "Oracle Cloud",
      description: "Cloud-first solutions with Oracle Cloud Infrastructure and applications",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      services: ["Fusion Apps", "OCI", "Autonomous DB", "Cloud Migration", "Integration"],
      portfolio: [
        { type: "Cloud Migration", image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop" },
        { type: "Fusion Implementation", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" }
      ],
    },
    {
      id: 3,
      title: "Oracle Database",
      description: "Enterprise database solutions and performance optimization",
      icon: <PenTool className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      services: ["Database Design", "Performance Tuning", "Backup Recovery", "Security", "Upgrades"],
      portfolio: [
        { type: "Database Optimization", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop" },
        { type: "Data Migration", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" }
      ],
    }
  ];


  const processSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Comprehensive analysis of your current Oracle environment",
      icon: <Eye className="w-6 h-6" />
    },
    {
      step: "02", 
      title: "Design & Architecture",
      description: "Creating optimal Oracle solutions for your business needs",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Implementation & Integration",
      description: "Seamless deployment with minimal business disruption",
      icon: <Brush className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Support & Optimization",
      description: "Ongoing maintenance and performance enhancement",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <div className="py-20 px-6 lg:px-8 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Design Elements */}
        <div className="absolute top-20 right-10 text-pink-200 opacity-30 animate-bounce">
          <Palette className="w-6 h-6" />
        </div>
        <div className="absolute top-40 left-20 text-purple-200 opacity-30 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <Brush className="w-5 h-5" />
        </div>
        <div className="absolute bottom-20 right-1/4 text-rose-200 opacity-30 animate-bounce" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-4 h-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-6">
            <Palette className="w-4 h-4 text-pink-600" />
            <span className="text-sm font-semibold text-gray-700">Oracle Solutions Studio</span>
          </div>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
            Expert <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">Oracle Consultants</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your enterprise with Oracle experts who bring deep technical knowledge, strategic insight, and proven implementation expertise to every Oracle project
          </p>
        </div>

        {/* Oracle Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {oracleCategories.map((category, index) => (
            <div
              key={category.id}
              className={`${category.bgColor} rounded-3xl p-6 border-2 transition-all duration-700 border-pink-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                {category.description}
              </p>

              {/* Services */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {category.services.slice(0, 3).map((service, serviceIndex) => (
                    <span
                      key={serviceIndex}
                      className="px-2 py-1 text-white text-xs font-medium rounded-full bg-gradient-to-r from-pink-500 to-rose-500"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Portfolio Preview */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {category.portfolio.map((item, itemIndex) => (
                  <div key={itemIndex} className="relative overflow-hidden rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.type}
                      className="w-full h-20 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="text-white text-xs font-medium">{item.type}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Implementation Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Our <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Implementation Process</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures every Oracle project delivers exceptional results and business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }} 
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl mb-4 text-white">
                  {step.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>


        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Optimize Your Oracle Environment?
            </h3>
            <p className="text-gray-600 mb-6">
              Let our Oracle experts transform your enterprise systems with cutting-edge solutions and proven methodologies
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => router.push('/enquiry?service=oracle-consultants')}
                className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Hire Oracle Consultants
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OracleConsultants;
