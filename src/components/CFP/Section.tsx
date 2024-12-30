import React from "react";

interface SectionProps {
  title: string;
  description: string;
}

const Section: React.FC<SectionProps> = ({ title, description }) => (
  <div className="mb-4">
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Section;
