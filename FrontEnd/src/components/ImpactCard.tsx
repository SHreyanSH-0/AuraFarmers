import React from "react";
import { Droplets, Leaf, Sprout } from "lucide-react";
import { useUser } from "../context/UserContext";

const ImpactCard: React.FC = () => {
  const { impactSummary } = useUser();

  const stats = [
    {
      label: "Water Saved",
      value: `${impactSummary.waterSaved.toLocaleString()} L`,
      icon: Droplets,
      color: "text-blue-600 bg-blue-100",
    },
    {
      label: "Soil Improved",
      value: `${impactSummary.soilImproved.toLocaleString()} kg`,
      icon: Sprout,
      color: "text-amber-600 bg-amber-100",
    },
    {
      label: "Biodiversity Supported",
      value: `${impactSummary.biodiversitySupported.toLocaleString()}`,
      icon: Leaf,
      color: "text-green-600 bg-green-100",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100 mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        🌍 Your Environmental Impact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center space-x-3 p-4 rounded-lg bg-gray-50"
          >
            <div className={`p-2 rounded-lg ${stat.color}`}>
              <stat.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-800">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactCard;
