"use client";
import React, { useState, useEffect } from 'react';
import { Code, Terminal, Database, Cloud, GitBranch, Smartphone } from 'lucide-react';
import { useRouter } from 'next/navigation';

const SAPConsultants = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = [
    {
      id: 1,
      title: "SAP Core Modules",
      description: "Expert implementation and support for essential SAP business modules",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      technologies: ["SAP FICO", "SAP MM", "SAP SD", "SAP PP", "SAP WM"]
    },
    {
      id: 2,
      title: "SAP S/4HANA",
      description: "Next-generation ERP solutions and digital transformation",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      technologies: ["S/4HANA", "Fiori", "HANA DB", "UI5", "OData"]
    },
    {
      id: 3,
      title: "SAP Technical",
      description: "Custom development and integration solutions",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      technologies: ["ABAP", "Basis", "Security", "GRC", "Integration"]
    },
    {
      id: 4,
      title: "SAP Analytics",
      description: "Business intelligence and reporting solutions",
      icon: <Database className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      technologies: ["BW", "BI", "BOBJ", "Analytics Cloud", "BW/4HANA"]
    }
  ];


  return (
    <div className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Code Elements */}
        <div className="absolute top-20 left-10 text-blue-200 opacity-30 font-mono text-sm animate-bounce">
          <Terminal className="w-4 h-4" />
        </div>
        <div className="absolute top-40 right-20 text-cyan-200 opacity-30 font-mono text-sm animate-bounce" style={{ animationDelay: '0.5s' }}>
          <GitBranch className="w-4 h-4" />
        </div>
        <div className="absolute bottom-20 left-1/4 text-indigo-200 opacity-30 font-mono text-sm animate-bounce" style={{ animationDelay: '1s' }}>
          <Database className="w-4 h-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-6">
            <Code className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">Elite SAP Team</span>
          </div>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
            World-Class <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">SAP Consultants</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with pre-vetted SAP experts who excel in implementation, customization, and optimization of SAP solutions that drive your business transformation
          </p>
        </div>


        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((skill, index) => (
            <div
              key={skill.id}
              className={`${skill.bgColor} rounded-3xl p-8 border-2 transition-all duration-700 border-blue-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white shadow-lg`}>
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {skill.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
                <div className="text-2xl font-bold opacity-20">
                  0{index + 1}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Transform Your SAP Environment?
            </h3>
            <p className="text-gray-600 mb-6">
              Connect with our elite SAP consultants and unlock the full potential of your enterprise systems
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => router.push('/enquiry?service=sap-consultants')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Hire SAP Consultants
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SAPConsultants;
