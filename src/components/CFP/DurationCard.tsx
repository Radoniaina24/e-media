import React from "react";

interface DurationCardProps {
  duration: string; // Durée à afficher, ex : "7 mois"
  gradientFrom?: string; // Couleur de départ du gradient
  gradientTo?: string; // Couleur de fin du gradient
}

const DurationCard: React.FC<DurationCardProps> = ({
  duration,
  gradientFrom = "from-indigo-500",
  gradientTo = "to-purple-600",
}) => {
  return (
    <div
      className={`mt-24 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r ${gradientFrom} ${gradientTo} p-4 text-white shadow-md transition-all duration-300 dark:from-gray-800 dark:to-gray-900 dark:text-gray-200`}
    >
      <span className="text-sm font-medium uppercase tracking-wide opacity-75 dark:opacity-90">
        Durée :
      </span>
      <span className="text-xl font-bold">{duration}</span>
    </div>
  );
};

export default DurationCard;
