import {ChevronRight} from 'lucide-react';
const ServiceSelection = ({ formData, updateFormData }) => {
  const services = [
    {
      id: 'erp-consultants',
      title: "ERP Consultants",
      description: "SAP, Salesforce, Oracle, NetSuite experts...",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      id: 'enterprise-architects',
      title: "Enterprise Architects", 
      description: "Seasoned enterprise architects who design and align...",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      id: 'developers',
      title: "Developers",
      description: "Software Developer, Data Scientist, DevOps, QA...",
      bgColor: "bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      id: 'designers',
      title: "Designers",
      description: "Web, Mobile, UI/UX, Branding, and Visual Designer...",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      id: 'management-consultants',
      title: "Management Consultants",
      description: "Finance Expert, Business Strategist, M&A Expert...",
      bgColor: "bg-teal-100",
      iconColor: "text-teal-600"
    },
    {
      id: 'marketing-experts',
      title: "Marketing Experts",
      description: "Growth Marketing Expert, Content Marketing Strategist...",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600"
    }
  ];

  return (
    <div className="grid gap-3">
      {services.map((service) => (
        <button
          key={service.id}
          onClick={() => updateFormData('serviceType', service.id)}
          className={`w-full p-4 rounded-xl border-2 text-left transition-all hover:shadow-lg ${
            formData.serviceType === service.id
              ? `border-current shadow-xl scale-105 ${service.bgColor}`
              : 'border-gray-200 hover:border-gray-300 bg-gray-50'
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </button>
      ))}
    </div>
  );
};

export default ServiceSelection;