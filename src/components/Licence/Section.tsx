import React, { ReactNode } from "react";

interface SectionProps {
  title?: string;
  content?: string;
  children?: ReactNode;
  bgColor?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  content = "",
  children,
  bgColor = "bg-white",
}) => (
  <section className={`py-12 ${bgColor} `}>
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-semibold">{title}</h2>
      {content && <p className="mt-4 text-gray-600">{content}</p>}
      {children && <div className="mt-8">{children}</div>}
    </div>
  </section>
);

export default Section;
