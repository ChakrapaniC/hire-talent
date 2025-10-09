"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const FreelancerHero = () => {
  const router = useRouter();
  const [visibleTooltipIndex, setVisibleTooltipIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);
  const animationRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const updateVisibleTooltip = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const rotationDegrees = ((elapsed / 40000) * 360) % 360;
      
      let tooltipIndex = -1;
      
      for (let i = 0; i < 8; i++) {
        const baseAngle = i * 45; 
        const currentAngle = (baseAngle + rotationDegrees) % 360;
        const screenAngle = (currentAngle + 90) % 360;
        
        if (isMobile) {
          // Mobile: Show tooltip when avatar is at 11-12 o'clock position (330-360 degrees)
          if (screenAngle >= 330 || screenAngle < 30) {
            tooltipIndex = i;
            break;
          }
        } else {
          // Desktop: Show tooltip at 8-9 o'clock position (240-270 degrees)
          if (screenAngle >= 240 && screenAngle < 270) {
            tooltipIndex = i;
            break;
          }
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
  }, [isMobile]);

  const freelancers = [
    {
      id: 1,
      name: "Priya Sharma",
      designation: "Senior UI/UX Designer",
      rating: 5.0,
      projects: 127,
      image: "https://prolegion-assets.s3.ap-south-1.amazonaws.com/Indian_Professionals/Indian_prof_lady_1.jpg",
      color: "from-blue-300 to-blue-400",
      expertise: "Product Design"
    },
    {
      id: 2,
      name: "Arjun Patel",
      designation: "Lead Full Stack Developer",
      rating: 4.9,
      projects: 89,
      image: "https://prolegion-assets.s3.ap-south-1.amazonaws.com/Indian_Professionals/Indian_prof_man_1.jpg",
      color: "from-cyan-300 to-cyan-400",
      expertise: "React & Node.js"
    },
    {
      id: 3,
      name: "Kavya Reddy",
      designation: "Growth Marketing Strategist",
      rating: 5.0,
      projects: 156,
      image: "https://prolegion-assets.s3.ap-south-1.amazonaws.com/Indian_Professionals/Indian_prof_lady_2.jpg",
      color: "from-blue-300 to-cyan-400",
      expertise: "Digital Growth"
    },
    {
      id: 4,
      name: "Rajesh Kumar",
      designation: "Senior Data Scientist",
      rating: 4.8,
      projects: 173,
      image: "https://prolegion-assets.s3.ap-south-1.amazonaws.com/Indian_Professionals/Indian_prof_man_2.jpg",
      color: "from-cyan-300 to-blue-400",
      expertise: "ML & Analytics"
    },
    {
      id: 5,
      name: "Ananya Gupta",
      designation: "Brand Content Strategist",
      rating: 4.9,
      projects: 112,
      image: "https://prolegion-assets.s3.ap-south-1.amazonaws.com/Indian_Professionals/Indian_prof_lady_3.jpg",
      color: "from-blue-300 to-blue-500",
      expertise: "Content Strategy"
    },
    {
      id: 6,
      name: "Vikram Singh",
      designation: "Creative Design Director",
      rating: 5.0,
      projects: 104,
      image: "https://prolegion-assets.s3.ap-south-1.amazonaws.com/Indian_Professionals/Indian_prof_man_3.jpg",
      color: "from-cyan-300 to-cyan-500",
      expertise: "Brand Design"
    },
    {
      id: 7,
      name: "Amit Joshi",
      designation: "DevOps Architect",
      rating: 4.8,
      projects: 67,
      image: "https://prolegion-assets.s3.ap-south-1.amazonaws.com/Indian_Professionals/Indian_prof_man_4.jpg",
      color: "from-blue-300 to-cyan-500",
      expertise: "Cloud Infrastructure"
    },
    {
      id: 8,
      name: "Rohit Agarwal",
      designation: "Mobile App Developer",
      rating: 4.9,
      projects: 98,
      image: "https://prolegion-assets.s3.ap-south-1.amazonaws.com/Indian_Professionals/Indian_prof_man_5.jpg",
      color: "from-cyan-300 to-blue-500",
      expertise: "iOS & Android"
    }
  ];

  return (
    <div className="py-12 bg-blue-25 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-cyan-50 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.5) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }}></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between max-w-[90%]">
        {/* Enhanced Left Content - First on Mobile */}
        <div className="flex-1 max-w-2xl lg:pr-8 w-full lg:order-1 order-1">
          <div className="space-y-6 lg:space-y-10">
            {/* Enhanced Heading */}
            <div className="space-y-2 text-center lg:text-left">
              <h1 className="text-2xl md:text-[2.7rem] font-bold leading-snug tracking-tight">
                <p className="text-gray-800">Hire <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">Top Experts</span>
                </p>
                
                <span className="text-gray-800 block text-2xl md:text-[2.6rem] font-bold">
                  Whenever you need it
                </span>
              </h1>
              
              <p className="text-base lg:text-[1.3rem] text-slate-600 leading-relaxed max-w-xl font-light mx-auto lg:mx-0">
              Empower your projects with top-tier ERP and architecture experts — available instantly on an hourly, monthly, or project basis.
              </p>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-0">
              <div className="group">
                <div className="text-xl lg:text-4xl font-bold bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  50K+
                </div>
                <div className="text-slate-600 text-xs lg:text-sm font-medium mt-1">Expert Freelancers</div>
                <div className="w-full h-1 bg-gradient-to-r from-blue-200 to-transparent rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="group">
                <div className="text-xl lg:text-4xl font-bold bg-gradient-to-br from-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                  98.5%
                </div>
                <div className="text-slate-600 text-xs lg:text-sm font-medium mt-1">Success Rate</div>
                <div className="w-full h-1 bg-gradient-to-r from-cyan-200 to-transparent rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="group">
                <div className="text-xl lg:text-4xl font-bold bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  &lt;12h
                </div>
                <div className="text-slate-600 text-xs lg:text-sm font-medium mt-1">Avg. Response</div>
                <div className="w-full h-1 bg-gradient-to-r from-blue-200 to-transparent rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 pt-2">
              <button onClick={() => router.push('/enquiry')} className="group px-6 lg:px-10 py-3 lg:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer text-sm lg:text-base">
                <span className="flex items-center space-x-2">
                  <span>Hire Talent</span>
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Rotating Freelancer Circle - Second on Mobile */}
        <div className="flex-1 flex justify-center lg:justify-end items-center mt-32 lg:mt-0 w-full lg:order-2 order-2">
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px]">
            {/* Central Professional Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-800 to-cyan-900 rounded-full shadow-2xl flex items-center justify-center border-2 lg:border-4 border-white z-10">
              <div className="text-center">
                <div className="text-white text-xs sm:text-sm lg:text-lg font-bold">HIRE</div>
                <div className="text-blue-300 text-[10px] sm:text-xs font-medium">FLEXPERT</div>
              </div>
            </div>

            {/* Rotating Orbit Rings */}
            <div className="absolute inset-0 border border-black rounded-full"></div>
            <div className="absolute inset-4 lg:inset-8 border border-black rounded-full"></div>
            <div className="absolute inset-8 lg:inset-16 border border-black rounded-full"></div>

            {/* Enhanced Rotating Circle */}
            <div className="absolute inset-0 animate-spin" style={{animationDuration: '40s'}}>
              {freelancers.map((freelancer, index) => {
                const angle = (index * 45) * (Math.PI / 180);
                const radius = isMobile ? 110 : 190;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                // Check if this specific avatar should show tooltip
                const showTooltip = visibleTooltipIndex === index;
                
                return (
                  <div
                    key={freelancer.id}
                    className="absolute w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 transform -translate-x-1/2 -translate-y-1/2"
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
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br ${freelancer.color} p-[2px] lg:p-1 shadow-2xl transition-all duration-500 border lg:border-2 border-white`}>
                        <div className="w-full h-full rounded-full overflow-hidden">
                          <img 
                            src={freelancer.image} 
                            alt={freelancer.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Desktop Tooltip - Always at 9 o'clock (left side) */}
                      <div 
                        className={`hidden lg:block absolute right-full top-1/2 transform -translate-y-1/2 mr-2 transition-all duration-300 pointer-events-none ${
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
                          <div className="mt-1 text-xs text-blue-600 font-medium">{freelancer.expertise}</div>
                        </div>
                        {/* Arrow pointing right to profile */}
                        <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-white/95"></div>
                      </div>

                      {/* Mobile Tooltip - At 12 o'clock (top) */}
                      <div 
                        className={`lg:hidden absolute left-1/2 bottom-full transform -translate-x-1/2 mb-2 transition-all duration-300 pointer-events-none ${
                          showTooltip ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}
                        style={{zIndex: 9999}}
                      >
                        <div className="bg-white/95 backdrop-blur-lg rounded-lg px-3 py-2 shadow-2xl border border-slate-200 whitespace-nowrap min-w-[140px] sm:min-w-[160px]">
                          <div className="text-gray-800 font-bold text-xs sm:text-sm">{freelancer.name}</div>
                          <div className="text-slate-600 text-[10px] sm:text-xs font-medium">{freelancer.designation}</div>
                          <div className="flex items-center justify-between mt-1">
                            <div className="flex items-center space-x-1">
                              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                              </svg>
                              <span className="text-[10px] sm:text-xs font-semibold text-gray-700">{freelancer.rating}</span>
                            </div>
                            <span className="text-[10px] sm:text-xs text-slate-500">{freelancer.projects} proj</span>
                          </div>
                          <div className="mt-1 text-[10px] sm:text-xs text-blue-600 font-medium">{freelancer.expertise}</div>
                        </div>
                        {/* Arrow pointing down to profile */}
                        <div className="absolute left-1/2 top-full transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/95"></div>
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
                  r={isMobile ? "110" : "190"}
                  fill="none"
                  stroke="url(#professionalGradient)"
                  strokeWidth="1"
                  strokeDasharray="8 8"
                />
                {/* Inner orbit */}
                <circle
                  cx="250"
                  cy="250"
                  r={isMobile ? "85" : "150"}
                  fill="none"
                  stroke="url(#professionalGradient)"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                  opacity="0.5"
                />
                <defs>
                  <linearGradient id="professionalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#123dbd', stopOpacity: 0.6}} />
                    <stop offset="50%" style={{stopColor: '#00bafa', stopOpacity: 0.6}} />
                    <stop offset="100%" style={{stopColor: '#0539a6', stopOpacity: 0.6}} />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Professional Glow Effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 lg:w-40 lg:h-40 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerHero;