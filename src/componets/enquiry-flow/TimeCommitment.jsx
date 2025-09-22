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
    <div className="space-y-3">
      {commitments.map((commitment) => {
        const isActive = formData.timeCommitment === commitment.id;

        return (
          <button
            key={commitment.id}
            onClick={() => updateFormData("timeCommitment", commitment.id)}
            className={`w-full p-5 rounded-xl border-2 text-left transition-all group
              ${
                isActive
                  ? "border-[#3985B6] shadow-lg scale-105 bg-gradient-to-r from-[#3985b6] to-sky-400"
                  : "border-[#3985B6] bg-white hover:border-[#3985B6] hover:shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-[#3985b6] hover:to-sky-400"
              }
            `}
          >
            <div className="flex items-center justify-between">
              <h3
                className={`text-base font-medium transition-colors
                  ${isActive ? "text-white" : "text-gray-500 group-hover:text-white"}
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