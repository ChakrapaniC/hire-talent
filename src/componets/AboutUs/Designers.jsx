"use client";
import React, { useState, useEffect } from 'react';
import { Palette, PenTool, Camera, Layers, Brush, Sparkles, Award, Users, Star, Heart, Eye, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Designers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const designCategories = [
    {
      id: 1,
      title: "UI/UX Design",
      description: "User-centered design solutions that create exceptional digital experiences",
      icon: <Layers className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      services: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing"],
      portfolio: [
        { type: "Mobile App", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop" },
        { type: "Web Dashboard", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" }
      ],
      stats: "800+ Projects"
    },
    {
      id: 2,
      title: "Brand Identity",
      description: "Comprehensive branding solutions that tell your unique story",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      services: ["Logo Design", "Brand Guidelines", "Visual Identity", "Color Theory", "Typography"],
      portfolio: [
        { type: "Logo Design", image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop" },
        { type: "Brand Package", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop" }
      ],
      stats: "500+ Brands"
    },
    {
      id: 3,
      title: "Graphic Design",
      description: "Visual communication that captivates and converts your audience",
      icon: <PenTool className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      services: ["Print Design", "Digital Graphics", "Illustrations", "Infographics", "Packaging"],
      portfolio: [
        { type: "Marketing Materials", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop" },
        { type: "Social Media", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=300&fit=crop" }
      ],
      stats: "1200+ Designs"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager, TechCorp",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      text: "The UI/UX design completely transformed our user experience. Engagement increased by 300%!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, StartupXYZ",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      text: "Our brand identity now perfectly represents our vision. Professional, creative, and memorable.",
      rating: 5
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discover & Research",
      description: "Understanding your brand, audience, and objectives",
      icon: <Eye className="w-6 h-6" />
    },
    {
      step: "02", 
      title: "Ideate & Concept",
      description: "Brainstorming creative solutions and design concepts",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Design & Iterate",
      description: "Creating refined designs with continuous feedback",
      icon: <Brush className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Deliver & Launch",
      description: "Final delivery with assets and implementation support",
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
            <span className="text-sm font-semibold text-gray-700">Creative Design Studio</span>
          </div>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
            Award-Winning <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">Designers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your ideas into stunning visual experiences with our talented designers who bring creativity, strategy, and technical excellence to every project
          </p>
        </div>

        {/* Design Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {designCategories.map((category, index) => (
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
                  <p className="text-sm text-gray-600">
                    {category.stats}
                  </p>
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

              {/* Stats */}
              <div className="flex items-center justify-between pt-3 border-t border-white/50">
                <div className="flex items-center text-pink-600">
                  <Star className="w-4 h-4 fill-current mr-1" />
                  <span className="text-sm font-semibold">4.9</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Heart className="w-4 h-4 mr-1" />
                  <span className="text-sm">95%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Design Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Our <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Design Process</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures every design project delivers exceptional results
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
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl mb-4 text-white">
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

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              What Our <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Create Something Beautiful?
            </h3>
            <p className="text-gray-600 mb-6">
              Let our talented designers bring your vision to life with creativity, strategy, and technical excellence
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => router.push('/enquiry?service=designers')}
                className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Hire Designers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designers;
