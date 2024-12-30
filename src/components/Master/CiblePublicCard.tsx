import React from "react";

interface CiblePublic {
  title: string;
  description: string;
}

const CiblePublicCard: React.FC<{ data: CiblePublic }> = ({ data }) => (
  <div className="rounded-lg bg-white p-6 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-400 hover:text-white dark:bg-gray-800">
    <h3 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-white">
      {data.title}
    </h3>
    <p className="text-base text-gray-600  dark:text-gray-200">
      {data.description}
    </p>
  </div>
);

export default CiblePublicCard;
