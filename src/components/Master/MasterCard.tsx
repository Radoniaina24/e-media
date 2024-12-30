import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const MasterCard: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="max-w-sm transform rounded-lg bg-white p-6 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-teal-500 hover:text-white hover:shadow-xl dark:bg-gray-800">
      <h3 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-white">
        {title}
      </h3>
      <p className="text-base leading-relaxed text-gray-600 dark:text-gray-200">
        {description}
      </p>
    </div>
  );
};

export default MasterCard;
