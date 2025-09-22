import {ChevronRight} from 'lucide-react';
const TimeCommitment = ({ formData, updateFormData }) => {
  const commitments = [
    {
      id: 'full-time',
      title: "Full time (40 or more hrs/week)",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 'part-time',
      title: "Part time (Less than 40 hrs/week)",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      id: 'hourly',
      title: "Hourly",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 'decide-later',
      title: "I'll decide later",
      color: "from-gray-500 to-gray-600"
    }
  ];

  return (
    <div className="space-y-3">
      {commitments.map((commitment) => (
        <button
          key={commitment.id}
          onClick={() => updateFormData('timeCommitment', commitment.id)}
          className={`w-full p-6 rounded-xl border-2 text-left transition-all hover:shadow-lg ${
            formData.timeCommitment === commitment.id
              ? 'border-blue-500 bg-blue-50 shadow-xl scale-105'
              : 'border-gray-200 hover:border-gray-300 bg-gray-50'
          }`}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              {commitment.title}
            </h3>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </button>
      ))}
    </div>
  );
};

export default TimeCommitment;