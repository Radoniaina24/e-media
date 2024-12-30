import React from "react";

interface ListSectionProps {
  categorie: string;
  details: string[];
}

const ListSection: React.FC<ListSectionProps> = ({ categorie, details }) => (
  <div className="mb-4">
    <h3 className="mb-2 text-xl font-semibold">{categorie}</h3>
    <ul className="list-disc pl-5">
      {details.map((detail, index) => (
        <li key={index} className="text-gray-600">
          {detail}
        </li>
      ))}
    </ul>
  </div>
);

export default ListSection;
