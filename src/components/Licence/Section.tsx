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
  <section className={`py-5 ${bgColor} dark:bg-gray-900 `}>
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-semibold dark:text-white">{title}</h2>
      {content && (
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          {content}
        </p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </div>
  </section>
);

export default Section;
