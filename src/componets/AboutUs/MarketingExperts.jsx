"use client";
import React, { useState, useEffect } from 'react';
import { Megaphone, TrendingUp, Target, BarChart3, Users, Globe, Zap, Award, ArrowUpRight, Share2, Search, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';

const MarketingExperts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const marketingServices = [
    {
      id: 1,
      title: "Digital Marketing",
      description: "Comprehensive online marketing strategies that drive growth and engagement",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      strategies: ["SEO Optimization", "Content Marketing", "Social Media", "PPC Campaigns"],
      results: "300% ROI Average",
      clients: "500+ Businesses"
    },
    {
      id: 2,
      title: "Growth Marketing",
      description: "Data-driven strategies focused on sustainable business growth and scaling",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      strategies: ["Funnel Optimization", "A/B Testing", "Conversion Rate", "User Acquisition", "Retention"],
      results: "250% Growth Rate",
      clients: "200+ Startups"
    },
    {
      id: 3,
      title: "Brand Marketing",
      description: "Building strong brand presence and market positioning for long-term success",
      icon: <Target className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      strategies: ["Brand Strategy", "Market Research", "Competitive Analysis", "Brand Positioning", "PR"],
      results: "400% Brand Awareness",
      clients: "300+ Brands"
    },
    {
      id: 4,
      title: "Performance Marketing",
      description: "Results-focused campaigns that deliver measurable outcomes and ROI",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      strategies: ["Analytics & Tracking", "Campaign Optimization", "ROI Analysis", "Attribution"],
      results: "180% ROAS Average",
      clients: "400+ Campaigns"
    }
  ];


  const marketingStats = [
    { label: "Marketing Experts", value: "8,500+", icon: <Users className="w-6 h-6" /> },
    { label: "Campaigns Launched", value: "15,000+", icon: <Megaphone className="w-6 h-6" /> },
    { label: "Average ROI", value: "280%", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "Client Success Rate", value: "96%", icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <div className="py-20 px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-indigo-50 to-violet-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-100 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Marketing Elements */}
        <div className="absolute top-20 left-10 text-purple-200 opacity-30 animate-bounce">
          <Target className="w-5 h-5" />
        </div>
        <div className="absolute top-40 right-20 text-violet-200 opacity-30 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <BarChart3 className="w-4 h-4" />
        </div>
        <div className="absolute bottom-20 right-1/4 text-indigo-200 opacity-30 animate-bounce" style={{ animationDelay: '1s' }}>
          <TrendingUp className="w-6 h-6" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-violet-100 rounded-full mb-6">
            <Megaphone className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-gray-700">Growth Marketing Agency</span>
          </div>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
            Expert <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">Marketing Professionals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accelerate your business growth with data-driven marketing strategies from industry experts who deliver measurable results and sustainable ROI
          </p>
        </div>

        {/* Marketing Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {marketingStats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl mb-4 text-white">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Marketing Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {marketingServices.map((service, index) => (
            <div
              key={service.id}
              className={`${service.bgColor} rounded-3xl p-8 border-2 transition-all duration-700 border-purple-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Strategies</h4>
                <div className="flex flex-wrap gap-2">
                  {service.strategies.map((strategy, strategyIndex) => (
                    <span
                      key={strategyIndex}
                      className="px-3 py-1 text-white text-xs font-medium rounded-full bg-gradient-to-r from-purple-500 to-violet-500"
                    >
                      {strategy}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="flex items-center justify-between pt-4 border-t border-white/50">
                <div className="text-center">
                  <div className="text-lg font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                    {service.results}
                  </div>
                  <div className="text-xs text-gray-600">Average Results</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                    {service.clients}
                  </div>
                  <div className="text-xs text-gray-600">Served</div>
                </div>
                <div className="flex items-center text-purple-600">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Marketing Tools */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Marketing <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Tools & Platforms</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Google Analytics", icon: <BarChart3 className="w-8 h-8" /> },
              { name: "Facebook Ads", icon: <Target className="w-8 h-8" /> },
              { name: "SEO Tools", icon: <Search className="w-8 h-8" /> },
              { name: "Email Marketing", icon: <Mail className="w-8 h-8" /> },
              { name: "Social Media", icon: <Share2 className="w-8 h-8" /> },
              { name: "Campaign Tracking", icon: <TrendingUp className="w-8 h-8" /> }
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-purple-600 mb-2 flex justify-center">
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
              Ready to Accelerate Your Growth?
            </h3>
            <p className="text-gray-600 mb-6">
              Partner with our marketing experts and transform your business with proven strategies that deliver real results
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => router.push('/enquiry?service=marketing-experts')}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-xl shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Hire Marketing Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingExperts;
