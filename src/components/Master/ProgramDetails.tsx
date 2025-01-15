"use client ";
import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useLanguageContext } from "@/lib/context/LanguageContext";

interface ProgramDetailsProps {
  title: string;
  description: string;
  content: string[];
  opportunities: string[];
}

const ProgramDetails: React.FC<ProgramDetailsProps> = ({
  title,
  description,
  content,
  opportunities,
}) => {
  const { language } = useLanguageContext();
  return (
    <div className="mx-auto mb-8 max-w-5xl">
      <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
        {title}
      </h3>
      <p className="mb-6 text-gray-600 dark:text-gray-300">{description}</p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Carte Contenu du Parcours */}
        <div className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl dark:bg-gray-800">
          <h4 className="mb-2 text-lg font-semibold text-blue-500 dark:text-blue-400">
            {language === "fr" ? "Contenu du parcours" : "Program Content"}
          </h4>
          <ul className="space-y-2">
            {content.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div>
                  {" "}
                  <CheckCircleIcon className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                </div>

                <div className=" text-start text-gray-600 dark:text-gray-300">
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Carte Débouchés */}
        <div className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl dark:bg-gray-800">
          <h4 className="mb-2 text-lg font-semibold text-blue-500 dark:text-blue-400">
            {language === "fr" ? "Débouchés" : "Career Opportunities"}
          </h4>
          <ul className="space-y-2">
            {opportunities.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div>
                  {" "}
                  <CheckCircleIcon className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                </div>

                <div className=" text-start text-gray-600 dark:text-gray-300">
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;
