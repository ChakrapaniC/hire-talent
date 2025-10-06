"use client";
import React from 'react';
import { Database, Server, Cloud, Building2, Users, Settings, Layers, Brain } from "lucide-react";

const FreelancerDomains = () => {
    const domains = [
        {
            id: 1,
            title: "SAP",
            description: "Enterprise resource planning and business process optimization.",
            bgColor: "bg-blue-100",
            icon: <Database className="w-8 h-8" />,
            services: ["SAP HANA", "SAP FICO", "SAP MM", "SAP SD"]
        },
        {
            id: 2,
            title: "Oracle",
            description: "Database management and enterprise applications expertise.",
            bgColor: "bg-blue-100",
            icon: <Server className="w-8 h-8" />,
            services: ["Oracle DB", "Oracle Cloud", "Oracle ERP", "Oracle Analytics"]
        },
        {
            id: 3,
            title: "Salesforce",
            description: "Customer relationship management and cloud solutions.",
            bgColor: "bg-blue-100",
            icon: <Cloud className="w-8 h-8" />,
            services: ["Sales Cloud", "Service Cloud", "Marketing Cloud", "Lightning"]
        },
        {
            id: 4,
            title: "Microsoft Dynamics 365",
            description: "Integrated business applications and intelligent insights.",
            bgColor: "bg-blue-100",
            icon: <Building2 className="w-8 h-8" />,
            services: ["Dynamics CRM", "Dynamics ERP", "Power Platform", "Azure Integration"]
        },
        {
            id: 5,
            title: "Workday",
            description: "Human capital management and financial management solutions.",
            bgColor: "bg-blue-100",
            icon: <Users className="w-8 h-8" />,
            services: ["HCM", "Financial Management", "Planning", "Analytics"]
        },
        {
            id: 6,
            title: "Solution Architecture",
            description: "Designs comprehensive technology solutions for complex business needs.",
            bgColor: "bg-blue-100",
            icon: <Settings className="w-8 h-8" />,
            services: ["System Design", "Integration", "Scalability", "Security"]
        },
        {
            id: 7,
            title: "Cloud Architecture",
            description: "Designs and implements scalable cloud infrastructure solutions.",
            bgColor: "bg-blue-100",
            icon: <Layers className="w-8 h-8" />,
            services: ["AWS", "Azure", "GCP", "DevOps"]
        },
        {
            id: 8,
            title: "AI & Machine Learning",
            description: "Develops intelligent solutions and predictive analytics for business automation.",
            bgColor: "bg-blue-100",
            icon: <Brain className="w-8 h-8" />,
            services: ["Deep Learning", "NLP", "Computer Vision", "Predictive Analytics"]
        },
        {
            id: 9,
            title: "Plus Thousands More Skills",
            description: "Whatever skill or specialization your business requires, we have the top talent to meet your needs.",
            bgColor: "bg-gray-100",
            icon: null,
            services: [],
            noHover: true
        }
    ];


    return (
        <div className="py-20 px-6 lg:px-8 bg-blue-25">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
                        Find Your <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">Flexpert</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover talented professionals across various domains to bring your projects to life
                    </p>
                </div>

                {/* Domain Cards Grid - Boxy Connected Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                    {domains.map((domain, index) => (
                        <div
                            key={domain.id}
                            className={`${domain.bgColor} border-r border-b border-gray-300 p-6 ${
                                domain.noHover ? '' : 'hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500'
                            } group relative overflow-hidden flex flex-col h-full ${
                                index % 3 === 2 ? 'border-r-0' : ''
                            } ${
                                index >= domains.length - 3 ? 'border-b-0' : ''
                            }`}
                        >
                            {/* Card Content */}
                            <div className={`relative z-10 flex flex-col flex-grow ${domain.noHover ? 'justify-center items-center text-center' : ''}`}>
                                <div className={`flex items-center gap-2 mb-4 w-full ${domain.noHover ? 'justify-center' : ''}`}>
                                    {domain.icon && (
                                        <div className="group-hover:text-white text-blue-600">
                                            {domain.icon}
                                        </div>
                                    )}
                                    <h3 className={`text-xl font-bold ${domain.noHover ? 'text-gray-800' : 'text-gray-800 group-hover:text-white'}`}>
                                        {domain.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className={`text-base mb-6 leading-relaxed ${domain.noHover ? 'text-gray-700' : 'text-gray-700 group-hover:text-white'}`}>
                                    {domain.description}
                                </p>

                                {/* Services Tags - Only show if there are services */}
                                {domain.services.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {domain.services.map((service, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-white/70 backdrop-blur-sm text-gray-800 text-xs font-medium rounded-full border border-white/40"
                                            >
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                )}

                            </div>

                            {/* Subtle Background Pattern - Only for cards with hover */}
                            {!domain.noHover && (
                                <>
                                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                        <div className="w-full h-full rounded-full bg-white/20 group-hover:scale-110 transition-transform duration-700"></div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                        <div className="w-full h-full rounded-full bg-white/30 group-hover:scale-125 transition-transform duration-700"></div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FreelancerDomains;
