"use client";
interface ParcoursCardProps {
  title: string;
  description: string;
}

const ParcoursCard = ({ title, description }: ParcoursCardProps) => {
  return (
    <div className="flex-1 rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-lg">
      <h2 className="mb-2 text-xl font-bold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default ParcoursCard;
