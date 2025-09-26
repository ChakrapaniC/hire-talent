"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const FreelancerHero = () => {
  const router = useRouter();
  const [visibleTooltipIndex, setVisibleTooltipIndex] = useState(-1);
  const animationRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    const updateVisibleTooltip = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const rotationDegrees = ((elapsed / 40000) * 360) % 360;
      
      let tooltipIndex = -1;
      
      for (let i = 0; i < 8; i++) {
        const baseAngle = i * 45; 
        const currentAngle = (baseAngle + rotationDegrees) % 360;
        
        const screenAngle = (currentAngle + 90) % 360;
        
        if (screenAngle >= 240 && screenAngle < 270) {
          tooltipIndex = i;
          break; // Only one tooltip at a time
        }
      }
      
      setVisibleTooltipIndex(tooltipIndex);
      animationRef.current = requestAnimationFrame(updateVisibleTooltip);
    };
    
    updateVisibleTooltip();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const freelancers = [
    {
      id: 1,
      name: "Sarah Chen",
      designation: "Senior UI/UX Designer",
      rating: 5.0,
      projects: 127,
      image: "https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/hire-talent/anil-sharma-NvzyEHQwbqk-unsplash.jpg",
      color: "from-purple-300 to-purple-400",
      expertise: "Product Design"
    },
    {
      id: 2,
      name: "Jatin Singh",
      designation: "Lead Full Stack Developer",
      rating: 4.9,
      projects: 89,
      image: "https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/hire-talent/ofspace-llc-mIgJpximElQ-unsplash.jpg",
      color: "from-violet-300 to-violet-400",
      expertise: "React & Node.js"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      designation: "Growth Marketing Strategist",
      rating: 5.0,
      projects: 156,
      image: "https://prolegion-assets.s3.ap-south-1.amazonaws.com/Professionals_images/Professional_2.jpg",
      color: "from-purple-300 to-violet-400",
      expertise: "Digital Growth"
    },
    {
      id: 4,
      name: "David Kim",
      designation: "Senior Data Scientist",
      rating: 4.8,
      projects: 173,
      image: "https://prolegion-assets.s3.ap-south-1.amazonaws.com/Professionals_images/Professional_1.jpg",
      color: "from-violet-300 to-purple-400",
      expertise: "ML & Analytics"
    },
    {
      id: 5,
      name: "Priya Sharma",
      designation: "Brand Content Strategist",
      rating: 4.9,
      projects: 112,
      image: "https://prolegion-assets.s3.ap-south-1.amazonaws.com/Assets/hire-talent/mausam-majhi-VUGBcg9ZHBI-unsplash.jpg",
      color: "from-purple-300 to-purple-500",
      expertise: "Content Strategy"
    },
    {
      id: 6,
      name: "Alex Thompson",
      designation: "Creative Design Director",
      rating: 5.0,
      projects: 104,
      image: "https://prolegion-assets.s3.ap-south-1.amazonaws.com/Professionals_images/Professional_3.jpg",
      color: "from-violet-300 to-violet-500",
      expertise: "Brand Design"
    },
    {
      id: 7,
      name: "Lisa Wang",
      designation: "DevOps Architect",
      rating: 4.8,
      projects: 67,
      image: "https://prolegion-assets.s3.ap-south-1.amazonaws.com/Professionals_images/Professional_4.jpg",
      color: "from-purple-300 to-violet-500",
      expertise: "Cloud Infrastructure"
    },
    {
      id: 8,
      name: "James Mitchell",
      designation: "Mobile App Developer",
      rating: 4.9,
      projects: 98,
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
      color: "from-violet-300 to-purple-500",
      expertise: "iOS & Android"
    }
  ];

  return (
    <div className="min-h-screen pt-6 md:pt-14 bg-purple-25 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-violet-50 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-50 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.5) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }}></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 h-screen flex items-center justify-between max-w-[90%]">
        {/* Enhanced Left Content */}
        <div className="flex-1 max-w-2xl pr-8">
          <div className="space-y-10">
            {/* Enhanced Heading */}
            <div className="space-y-2">
              <h1 className="text-2xl md:text-[2.7rem] font-bold leading-snug tracking-tight">
                <p className="text-gray-800">Hire <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 bg-clip-text text-transparent">FLEXPERTS</span>
                </p>
                
                <span className="text-gray-800 block text-2xl md:text-[2.6rem] font-bold">
                  Expertise, Whenever You Need It
                </span>
              </h1>
              
              <p className="text-xl lg:text-[1.3rem] text-slate-600 leading-relaxed max-w-xl font-light">
                Access a pool of pre-vetted developers, designers, project managers, marketers, and finance experts, ready to jump in when you need them. Whether hourly, monthly, or project-based
              </p>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-0">
              <div className="group">
                <div className="text-2xl md:text-4xl font-bold bg-gradient-to-br from-purple-600 to-purple-700 bg-clip-text text-transparent">
                  50K+
                </div>
                <div className="text-slate-600 text-sm font-medium mt-1">Expert Freelancers</div>
                <div className="w-full h-1 bg-gradient-to-r from-purple-200 to-transparent rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="group">
                <div className="text-2xl md:text-4xl font-bold bg-gradient-to-br from-violet-600 to-violet-700 bg-clip-text text-transparent">
                  98.5%
                </div>
                <div className="text-slate-600 text-sm font-medium mt-1">Success Rate</div>
                <div className="w-full h-1 bg-gradient-to-r from-violet-200 to-transparent rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="group">
                <div className="text-2xl lg:text-4xl font-bold bg-gradient-to-br from-purple-600 to-violet-700 bg-clip-text text-transparent">
                  &lt;12h
                </div>
                <div className="text-slate-600 text-sm font-medium mt-1">Avg. Response</div>
                <div className="w-full h-1 bg-gradient-to-r from-purple-200 to-transparent rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex items-center space-x-4 pt-2">
              <button onClick={() => router.push('/enquiry')} className="group px-10 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer">
                <span className="flex items-center space-x-2">
                  <span>Find Elite Talent</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Rotating Freelancer Circle */}
        <div className="flex-1 flex justify-end items-center">
          <div className="relative w-[500px] h-[500px]">
            {/* Central Professional Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-purple-800 to-violet-900 rounded-full shadow-2xl flex items-center justify-center border-4 border-white z-10">
              <div className="text-center">
                <div className="text-white text-lg font-bold">HIRE</div>
                <div className="text-purple-300 text-xs font-medium">FLEXPERT</div>
              </div>
            </div>

            {/* Rotating Orbit Rings */}
            <div className="absolute inset-0 border border-black rounded-full"></div>
            <div className="absolute inset-8 border border-black rounded-full"></div>
            <div className="absolute inset-16 border border-black rounded-full"></div>

            {/* Enhanced Rotating Circle */}
            <div className="absolute inset-0 animate-spin" style={{animationDuration: '40s'}}>
              {freelancers.map((freelancer, index) => {
                const angle = (index * 45) * (Math.PI / 180);
                const radius = 190;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                // Check if this specific avatar should show tooltip
                const showTooltip = visibleTooltipIndex === index;
                
                return (
                  <div
                    key={freelancer.id}
                    className="absolute w-24 h-24 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                  >
                    {/* Enhanced Freelancer Card with Counter-rotation */}
                    <div 
                      className="relative group animate-spin" 
                      style={{animationDuration: '40s', animationDirection: 'reverse'}}
                    >
                      {/* Profile Container */}
                      <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${freelancer.color} p-1 shadow-2xl transition-all duration-500 border-2 border-white`}>
                        <div className="w-full h-full rounded-full overflow-hidden">
                          <img 
                            src={freelancer.image} 
                            alt={freelancer.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Automatic Tooltip - Always at 9 o'clock (left side) */}
                      <div 
                        className={`absolute right-full top-1/2 transform -translate-y-1/2 mr-2 transition-all duration-300 pointer-events-none ${
                          showTooltip ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}
                        style={{zIndex: 9999}}
                      >
                        <div className="bg-white/95 backdrop-blur-lg rounded-xl px-4 py-3 shadow-2xl border border-slate-200 whitespace-nowrap min-w-48">
                          <div className="text-gray-800 font-bold text-sm">{freelancer.name}</div>
                          <div className="text-slate-600 text-xs font-medium">{freelancer.designation}</div>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center space-x-1">
                              <svg className="w-3 h-3 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                              </svg>
                              <span className="text-xs font-semibold text-gray-700">{freelancer.rating}</span>
                            </div>
                            <span className="text-xs text-slate-500">{freelancer.projects} projects</span>
                          </div>
                          <div className="mt-1 text-xs text-purple-600 font-medium">{freelancer.expertise}</div>
                        </div>
                        {/* Arrow pointing right to profile */}
                        <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-white/95"></div>
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
                    <stop offset="0%" style={{stopColor: '#9333ea', stopOpacity: 0.6}} />
                    <stop offset="50%" style={{stopColor: '#8b5cf6', stopOpacity: 0.6}} />
                    <stop offset="100%" style={{stopColor: '#7c3aed', stopOpacity: 0.6}} />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Professional Glow Effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerHero;