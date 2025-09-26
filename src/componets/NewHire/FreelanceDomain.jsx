"use client";
import React from 'react';
import { Palette, Code, PenTool, Type, Briefcase, Megaphone } from "lucide-react";

const FreelancerDomains = () => {
    const domains = [
        {
            id: 1,
            title: "Web Design",
            description: "Crafts engaging, user-friendly websites.",
            bgColor: "bg-purple-100",
            icon: <Palette className="w-8 h-8" />,
            services: ["Landing Page", "Portfolio", "Business Website", "E-commerce"]
        },
        {
            id: 2,
            title: "Graphic Design",
            description: "Creates impactful visuals and branding.",
            bgColor: "bg-purple-100",
            icon: <PenTool className="w-8 h-8" />,
            services: ["Packaging", "Brand Identity", "Illustrations", "Logo"]
        },
        {
            id: 3,
            title: "Developers",
            description: "Builds functional and scalable solutions.",
            bgColor: "bg-purple-100",
            icon: <Code className="w-8 h-8" />,
            services: ["Web Apps", "Mobile Apps", "APIs", "Database"]
        },
        {
            id: 4,
            title: "Copywriting",
            description: "Delivers persuasive and creative content.",
            bgColor: "bg-purple-100",
            icon: <Type className="w-8 h-8" />,
            services: ["Blog Posts", "Ad Copies", "Sales Pages", "Slogans"]
        },
        {
            id: 5,
            title: "Business Consulting",
            description: "Helps optimize strategy and operations.",
            bgColor: "bg-purple-100",
            icon: <Briefcase className="w-8 h-8" />,
            services: ["Strategy", "Market Research", "Finance", "Operations"]
        },
        {
            id: 6,
            title: "Digital Marketing",
            description: "Drives growth through online campaigns.",
            bgColor: "bg-purple-100",
            icon: <Megaphone className="w-8 h-8" />,
            services: ["SEO", "Social Media", "Email Marketing", "PPC Ads"]
        }
    ];


    return (
        <div className="py-20 px-6 lg:px-8 bg-purple-25">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
                        Find Your <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 bg-clip-text text-transparent">Flexpert</span>
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
                            className={`${domain.bgColor} rounded-3xl py-8 px-4 hover:shadow-lg hover:scale-[1.02] group relative overflow-hidden flex flex-col h-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-violet-600`}
                        >
                            {/* Card Content */}
                            <div className="relative z-10 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 mb-4 w-full">
                                    <div className="group-hover:text-white text-purple-600">
                                        {domain.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white">
                                        {domain.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-gray-700 text-base mb-6 leading-relaxed group-hover:text-white">
                                    {domain.description}
                                </p>

                                {/* Services Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {domain.services.map((service, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-white/70 backdrop-blur-sm text-gray-800 text-sm font-medium rounded-full border border-white/40"
                                        >
                                            {service}
                                        </span>
                                    ))}
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
