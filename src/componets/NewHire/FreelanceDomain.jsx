"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Palette, Code, PenTool, Type, Briefcase, Megaphone } from "lucide-react";

const FreelancerDomains = () => {
    const domains = [
        {
            id: 1,
            title: "Web Design",
            description: "Crafts engaging, user-friendly websites.",
            bgColor: "bg-blue-100",
            icon: <Palette className="w-8 h-8 text-blue-600" />,
            services: ["Landing Page", "Portfolio", "Business Website", "E-commerce"]
        },
        {
            id: 2,
            title: "Graphic Design",
            description: "Creates impactful visuals and branding.",
            bgColor: "bg-orange-100",
            icon: <PenTool className="w-8 h-8 text-orange-600" />,
            services: ["Packaging", "Brand Identity", "Illustrations", "Logo"]
        },
        {
            id: 3,
            title: "Developers",
            description: "Builds functional and scalable solutions.",
            bgColor: "bg-purple-100",
            icon: <Code className="w-8 h-8 text-purple-600" />,
            services: ["Web Apps", "Mobile Apps", "APIs", "Database"]
        },
        {
            id: 4,
            title: "Copywriting",
            description: "Delivers persuasive and creative content.",
            bgColor: "bg-green-100",
            icon: <Type className="w-8 h-8 text-green-600" />,
            services: ["Blog Posts", "Ad Copies", "Sales Pages", "Slogans"]
        },
        {
            id: 5,
            title: "Business Consulting",
            description: "Helps optimize strategy and operations.",
            bgColor: "bg-teal-100",
            icon: <Briefcase className="w-8 h-8 text-teal-600" />,
            services: ["Strategy", "Market Research", "Finance", "Operations"]
        },
        {
            id: 6,
            title: "Digital Marketing",
            description: "Drives growth through online campaigns.",
            bgColor: "bg-pink-100",
            icon: <Megaphone className="w-8 h-8 text-pink-600" />,
            services: ["SEO", "Social Media", "Email Marketing", "PPC Ads"]
        }
    ];


    return (
        <div className="py-20 px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
                        Find Your <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">Flexpert</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover talented professionals across various domains to bring your projects to life
                    </p>
                </div>

                {/* Domain Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {domains.map((domain) => (
                        <div
                            key={domain.id}
                            className={`${domain.bgColor} rounded-3xl py-8 px-4 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group relative overflow-hidden flex flex-col h-full`}
                        >
                            {/* Card Content */}
                            <div className="relative z-10 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 mb-4 w-full">
                                    {domain.icon}
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {domain.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-gray-700 text-base mb-6 leading-relaxed">
                                    {domain.description}
                                </p>

                                {/* Services Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {domain.services.map((service, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-white/70 backdrop-blur-sm text-gray-800 text-sm font-medium rounded-full border border-white/40 hover:bg-white/90 transition-colors duration-200"
                                        >
                                            {service}
                                        </span>
                                    ))}
                                </div>

                                {/* Push Explore button to bottom */}
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-gray-900 font-semibold text-lg">
                                        Explore
                                    </span>
                                    <div className="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center group-hover:bg-white/80 transition-all duration-300 group-hover:scale-110">
                                        <ArrowRight className="w-5 h-5 text-gray-800 group-hover:translate-x-0.5 transition-transform duration-200" />
                                    </div>
                                </div>
                            </div>

                            {/* Subtle Background Pattern */}
                            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                <div className="w-full h-full rounded-full bg-white/20 group-hover:scale-110 transition-transform duration-700"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                <div className="w-full h-full rounded-full bg-white/30 group-hover:scale-125 transition-transform duration-700"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FreelancerDomains;
