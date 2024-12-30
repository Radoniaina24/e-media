// components/ProgramCard.tsx
import React from "react";

interface ProgramCardProps {
  title: string;
  duration: string;
  description: string;
  highlights: string[];
  skills: string[];
  opportunities: string[];
  certification?: string;
}

const ProgramCardCFP: React.FC<ProgramCardProps> = ({
  title,
  duration,
  description,
  highlights,
  skills,
  opportunities,
  certification,
}) => {
  return (
    <div className="mb-8 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
        {title}
      </h2>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        <strong>Durée :</strong> {duration}
      </p>
      <p className="mt-4 text-gray-600 dark:text-gray-400">{description}</p>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Points forts de la formation :
        </h3>
        <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
          {highlights.map((point, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">
                •
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Compétences développées :
        </h3>
        <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">
                •
              </span>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Débouchés professionnels :
        </h3>
        <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
          {opportunities.map((opportunity, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">
                •
              </span>
              <span>{opportunity}</span>
            </li>
          ))}
        </ul>
      </div>

      {certification && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Certification :
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {certification}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProgramCardCFP;
