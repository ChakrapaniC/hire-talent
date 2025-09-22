import { ChevronRight } from "lucide-react";

const ServiceSelection = ({ formData, updateFormData }) => {
  const services = [
    {
      id: "erp-consultants",
      title: "ERP Consultants",
      description: "SAP, Salesforce, Oracle, NetSuite experts...",
    },
    {
      id: "enterprise-architects",
      title: "Enterprise Architects",
      description: "Seasoned enterprise architects who design and align...",
    },
    {
      id: "developers",
      title: "Developers",
      description: "Software Developer, Data Scientist, DevOps, QA...",
    },
    {
      id: "designers",
      title: "Designers",
      description: "Web, Mobile, UI/UX, Branding, and Visual Designer...",
    },
    {
      id: "management-consultants",
      title: "Management Consultants",
      description: "Finance Expert, Business Strategist, M&A Expert...",
    },
    {
      id: "marketing-experts",
      title: "Marketing Experts",
      description: "Growth Marketing Expert, Content Marketing Strategist...",
    },
  ];

  return (
    <div className="grid gap-3">
      {services.map((service) => {
        const isActive = formData.serviceType === service.id;

        return (
          <button
            key={service.id}
            onClick={() => updateFormData("serviceType", service.id)}
            className={`w-full p-4 rounded-xl border text-left transition-all group
              ${
                isActive
                  ? "border-[#3985B6] shadow-lg scale-105 bg-gradient-to-r from-[#3985b6] to-sky-400"
                  : "border-[#3985B6] bg-white hover:bg-gradient-to-r hover:from-[#3985b6] hover:to-sky-300 hover:scale-105 hover:shadow-lg"
              }
            `}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3
                  className={`text-base font-medium mb-1 transition-colors
                    ${
                      isActive
                        ? "text-white"
                        : "text-gray-600 group-hover:text-white"
                    }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm transition-colors
                    ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                >
                  {service.description}
                </p>
              </div>
              <ChevronRight
                className={`w-5 h-5 transition-colors
                  ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                  }`}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default ServiceSelection;
