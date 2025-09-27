"use client";
import React, { useState, useEffect } from 'react';
import { Code, Terminal, Database, Cloud, GitBranch, Smartphone } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Developers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = [
    {
      id: 1,
      title: "Full Stack Development",
      description: "End-to-end web application development with modern frameworks",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      technologies: ["React", "Node.js", "Python", "TypeScript", "MongoDB"]
    },
    {
      id: 2,
      title: "Mobile Development",
      description: "Native and cross-platform mobile app development",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"]
    },
    {
      id: 3,
      title: "Cloud & DevOps",
      description: "Scalable infrastructure and deployment solutions",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
    },
    {
      id: 4,
      title: "Data & Analytics",
      description: "Data engineering and machine learning solutions",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      technologies: ["Python", "SQL", "TensorFlow", "Spark", "BigQuery"]
    }
  ];


  return (
    <div className="py-20 px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-indigo-50 to-violet-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-100 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Code Elements */}
        <div className="absolute top-20 left-10 text-purple-200 opacity-30 font-mono text-sm animate-bounce">
          <Terminal className="w-4 h-4" />
        </div>
        <div className="absolute top-40 right-20 text-violet-200 opacity-30 font-mono text-sm animate-bounce" style={{ animationDelay: '0.5s' }}>
          <GitBranch className="w-4 h-4" />
        </div>
        <div className="absolute bottom-20 left-1/4 text-indigo-200 opacity-30 font-mono text-sm animate-bounce" style={{ animationDelay: '1s' }}>
          <Database className="w-4 h-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-violet-100 rounded-full mb-6">
            <Code className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-gray-700">Elite Development Team</span>
          </div>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
            World-Class <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">Developers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with pre-vetted developers who excel in modern technologies and deliver scalable solutions that power your digital transformation
          </p>
        </div>


        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((skill, index) => (
            <div
              key={skill.id}
              className={`${skill.bgColor} rounded-3xl p-8 border-2 transition-all duration-700 border-purple-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
                      className="px-3 py-1 bg-gradient-to-r from-purple-500 to-violet-500 text-white text-xs font-medium rounded-full"
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
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-600 mb-6">
              Connect with our elite developers and bring your vision to life with cutting-edge technology
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => router.push('/enquiry?service=developers')}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-xl shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Hire Developers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
