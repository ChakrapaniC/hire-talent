"use client";
import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Hire‑Talent delivered top‑tier SAP and ERP consultants who understood our landscape on day one. They stabilized core modules, accelerated rollouts, and cut integration rework—fast, dependable, enterprise‑ready.",
      author: "Ajay Sharma",
      position: "CEO",
      company: "Nice Infotech",
      location: "Texas, USA",
      logo: "https://prolegion-assets.s3.ap-south-1.amazonaws.com/new_hire_talentL_logos/NICETECH.png",
      rating: 5,
      logoSize: "h-16 w-48", // Larger for first card
      cardColor: "bg-gradient-to-br from-blue-50 to-indigo-50"
    },
    {
      id: 2,
      quote: "Our web platform got a complete lift—clean code, elegant UI, and brand‑consistent visuals. The developers and designers moved from brief to launch with speed, raising engagement and conversion.",
      author: "Sajal Gupta",
      position: "Managing Director",
      company: "Young Indian Revolution Journals Pvt. Ltd.",
      location: "India",
      logo: "https://prolegion-assets.s3.ap-south-1.amazonaws.com/new_hire_talentL_logos/YIR.png",
      rating: 5,
      logoSize: "h-14 w-40", // Medium for second card
      cardColor: "bg-gradient-to-br from-blue-50 to-indigo-50"
    },
    {
      id: 3,
      quote: "For US hiring needs, Hire‑Talent supplied reliable SAP specialists and full‑stack developers on short notice. Smooth onboarding, strong communication, and measurable delivery across time zones.",
      author: "Himanshu Pathak",
      position: "Co‑founder",
      company: "Vimerse",
      location: "India",
      logo: "https://prolegion-assets.s3.ap-south-1.amazonaws.com/new_hire_talentL_logos/VIMERSE.png",
      rating: 5,
      logoSize: "h-16 w-48", // Larger for third card
      cardColor: "bg-gradient-to-br from-blue-50 to-indigo-50"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className="w-4 h-4 text-yellow-400 fill-current"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="w-full py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped businesses transform their operations with our expert talent solutions
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`${testimonial.cardColor} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100`}
            >
              {/* Quotation Mark Icon - Positioned above text */}
              <div className="mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-base leading-relaxed mb-4 font-medium">
                "{testimonial.quote}"
              </blockquote>

              {/* Star Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Author Info */}
              <div className="mb-4">
                <h4 className="text-lg font-bold text-gray-900">
                  {testimonial.author}
                </h4>
                <p className="text-gray-600 text-sm">
                  {testimonial.position}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonial.location}
                </p>
              </div>

              {/* Company Logo */}
              <div className="pt-4 border-t border-gray-200">
                <div className={`relative ${testimonial.logoSize}`}>
                  <Image
                    src={testimonial.logo}
                    alt={`${testimonial.company} logo`}
                    fill
                    className="object-contain object-left"
                    sizes="192px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
