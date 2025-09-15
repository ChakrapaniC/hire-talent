"use client";
import React from 'react';

const FreelancerHero = () => {
  const freelancers = [
    {
      id: 1,
      name: "Sarah Chen",
      designation: "Senior UI/UX Designer",
      rating: 5.0,
      projects: 127,
      image: "https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/hire-talent/anil-sharma-NvzyEHQwbqk-unsplash.jpg",
      color: "from-blue-400 to-blue-500",
      expertise: "Product Design"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      designation: "Lead Full Stack Developer",
      rating: 4.9,
      projects: 89,
      image: "https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/hire-talent/ofspace-llc-mIgJpximElQ-unsplash.jpg",
      color: "from-emerald-400 to-emerald-500",
      expertise: "React & Node.js"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      designation: "Growth Marketing Strategist",
      rating: 5.0,
      projects: 156,
      image:  "https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/hire-talent/omid-ghobadi-s1E1pAwMqcM-unsplash.jpg",
      color: "from-cyan-400 to-cyan-500",
      expertise: "Digital Growth"
    },
    {
      id: 4,
      name: "David Kim",
      designation: "Senior Data Scientist",
      rating: 4.8,
      projects: 73,
      image: "https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/hire-talent/iqrar-ijaz-unBFfpXufgQ-unsplash.jpg",
      color: "from-teal-400 to-teal-500",
      expertise: "ML & Analytics"
    },
    {
      id: 5,
      name: "Priya Sharma",
      designation: "Brand Content Strategist",
      rating: 4.9,
      projects: 192,
      image: "https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/hire-talent/mausam-majhi-VUGBcg9ZHBI-unsplash.jpg",
      color: "from-indigo-400 to-blue-500",
      expertise: "Content Strategy"
    },
    {
      id: 6,
      name: "Alex Thompson",
      designation: "Creative Design Director",
      rating: 5.0,
      projects: 104,
      image: "https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/hire-talent/levi-meir-clancy-idWg2hqChAQ-unsplash.jpg",
      color: "from-green-400 to-emerald-500",
      expertise: "Brand Design"
    },
    {
      id: 7,
      name: "Lisa Wang",
      designation: "DevOps Architect",
      rating: 4.8,
      projects: 67,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
      color: "from-sky-400 to-blue-500",
      expertise: "Cloud Infrastructure"
    },
    {
      id: 8,
      name: "James Mitchell",
      designation: "Mobile App Developer",
      rating: 4.9,
      projects: 98,
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
      color: "from-teal-400 to-green-500",
      expertise: "iOS & Android"
    }
  ];

  return (
    <div className="min-h-screen pt-6 md:pt-14 bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-emerald-100 to-transparent rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-br from-cyan-100 to-transparent rounded-full blur-3xl opacity-40"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.5) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }}></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 h-screen flex items-center justify-between max-w-7xl">
        {/* Enhanced Left Content */}
        <div className="flex-1 max-w-2xl pr-8">
          <div className="space-y-10">
           
            {/* Enhanced Heading */}
            <div className="space-y-6">
              <h1 className="text-2xl md:text-5xl  font-bold leading-tight tracking-tight">
                <p className="text-slate-900 mb-2">Hire <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent"> FLEXPERTS </span>
                </p>
                
                <span className="text-slate-800 block text-2xl md:text-5xl font-bold">
                  Expertise , Whenever You Need It
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-xl font-light">
                Access a pool of pre-vetted developers, designers, project managers, marketers, and finance experts, ready to jump in when you need them. Whether hourly, monthly, or project-based
              </p>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-6">
              <div className=" group">
                <div className="text-2xl md:text-4xl font-bold bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  50K+
                </div>
                <div className="text-slate-600 text-sm font-medium mt-1">Expert Freelancers</div>
                <div className="w-full h-1 bg-gradient-to-r from-blue-200 to-transparent rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="group">
                <div className="text-2xl md:text-4xl font-bold bg-gradient-to-br from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                  98.5%
                </div>
                <div className="text-slate-600 text-sm font-medium mt-1">Success Rate</div>
                <div className="w-full h-1 bg-gradient-to-r from-emerald-200 to-transparent rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="group">
                <div className="text-2xl lg:text-4xl font-bold bg-gradient-to-br from-cyan-600 to-cyan-700 bg-clip-text text-transparent">
                  &lt;12h
                </div>
                <div className="text-slate-600 text-sm font-medium mt-1">Avg. Response</div>
                <div className="w-full h-1 bg-gradient-to-r from-cyan-200 to-transparent rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex items-center space-x-4 pt-6">
              <button className="group px-10 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl hover:shadow-blue-500/20">
                <span className="flex items-center space-x-2">
                  <span>Find Elite Talent</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              {/* <button className="px-10 py-4 bg-white text-slate-700 font-semibold rounded-2xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                View Success Stories
              </button> */}
            </div>
          </div>
        </div>

        {/* Enhanced Rotating Freelancer Circle */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-[500px] h-[500px]">
            {/* Central Professional Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full shadow-2xl flex items-center justify-center border-4 border-white">
              <div className="text-center">
                <div className="text-white text-lg font-bold">HIRE</div>
                <div className="text-blue-300 text-xs font-medium">FLEXPERT</div>
              </div>
            </div>

            {/* Rotating Orbit Rings */}
            <div className="absolute inset-0 border border-black rounded-full "></div>
            <div className="absolute inset-8 border border-black rounded-full "></div>
            <div className="absolute inset-16 border border-black rounded-full "></div>

            {/* Enhanced Rotating Circle */}
            <div className="absolute inset-0 animate-spin" style={{animationDuration: '40s'}}>
              {freelancers.map((freelancer, index) => {
                const angle = (index * 45) * (Math.PI / 180); // 45 degrees apart for 8 freelancers
                const radius = 190;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <div
                    key={freelancer.id}
                    className="absolute w-24 h-24 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                  >
                    {/* Enhanced Freelancer Card */}
                    <div className="relative group cursor-pointer">
                      {/* Profile Container */}
                      <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${freelancer.color} p-1 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110 border-2 border-white`}>
                        <div className="w-full h-full rounded-full overflow-hidden animate-spin" style={{animationDuration: '40s', animationDirection: 'reverse'}}>
                          <img 
                            src={freelancer.image} 
                            alt={freelancer.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      </div>
                      
                      {/* Enhanced Professional Tooltip */}
                      <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                        <div className="bg-white/95 backdrop-blur-lg rounded-xl px-4 py-3 shadow-2xl border border-slate-200 whitespace-nowrap min-w-48">
                          <div className="text-slate-800 font-bold text-sm">{freelancer.name}</div>
                          <div className="text-slate-600 text-xs font-medium">{freelancer.designation}</div>
                        </div>
                        {/* Enhanced Arrow */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-white/95"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Connecting Lines and Effects */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full animate-spin opacity-30" style={{animationDuration: '40s'}} viewBox="0 0 500 500">
                {/* Outer orbit */}
                <circle
                  cx="250"
                  cy="250"
                  r="190"
                  fill="none"
                  stroke="url(#professionalGradient)"
                  strokeWidth="1"
                  strokeDasharray="8 8"
                />
                {/* Inner orbit */}
                <circle
                  cx="250"
                  cy="250"
                  r="150"
                  fill="none"
                  stroke="url(#professionalGradient)"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                  opacity="0.5"
                />
                <defs>
                  <linearGradient id="professionalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#2563eb', stopOpacity: 0.6}} />
                    <stop offset="50%" style={{stopColor: '#10b981', stopOpacity: 0.6}} />
                    <stop offset="100%" style={{stopColor: '#06b6d4', stopOpacity: 0.6}} />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Professional Glow Effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerHero;