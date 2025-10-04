import { ChevronRight } from "lucide-react";

const TimeCommitment = ({ formData, updateFormData }) => {
  const commitments = [
    {
      id: "full-time",
      title: "Full time (40 or more hrs/week)",
    },
    {
      id: "part-time",
      title: "Part time (Less than 40 hrs/week)",
    },
    {
      id: "hourly",
      title: "Hourly",
    },
    {
      id: "decide-later",
      title: "I'll decide later",
    },
  ];

  return (
    <div className="space-y-3 mt-8">
      {commitments.map((commitment) => {
        const isActive = formData.timeCommitment === commitment.id;

        return (
          <button
            key={commitment.id}
            onClick={() => updateFormData("timeCommitment", commitment.id)}
            className={`w-full px-5 py-5 lg:px-8 rounded-xl border-1 text-left transition-all group cursor-pointer
              ${
                isActive
                  ? "border-blue-600 shadow-lg scale-105 bg-gradient-to-r from-blue-600 to-cyan-500"
                  : "border-gray-200 shadow-sm bg-white hover:border-blue-600 hover:shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500"
              }
            `}
          >
            <div className="flex items-center justify-between">
              <h3
                className={`text-sm font- transition-colors
                  ${isActive ? "text-white" : "text-gray-800 group-hover:text-white"}
                `}
              >
                {commitment.title}
              </h3>
              <ChevronRight
                className={`w-5 h-5 transition-colors
                  ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}
                `}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default TimeCommitment;