// components/PartnershipSection.tsx

import React from "react";

interface PartnershipSectionProps {
  title: string;
  subtitle: string;
}

const PartnershipSection: React.FC<PartnershipSectionProps> = ({
  title,
  subtitle,
}) => {
  return (
    <section className="mx-auto max-w-4xl p-6">
      <h1 className=" text-center text-5xl font-semibold text-blue-600">
        {title}
      </h1>
      <p className="mt-4 text-lg text-gray-700">{subtitle}</p>
    </section>
  );
};

export default PartnershipSection;
