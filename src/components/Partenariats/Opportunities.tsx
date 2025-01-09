import React from "react";
import PartenariatsPrograms from "./PartenariatsPrograms";

export default function Opportunities() {
  const text1 = " Nos Opportunités de Partenariat";
  return (
    <div className="mb-10 rounded-lg  py-8 text-center shadow-lg">
      <h1 className=" my-20 text-5xl font-extrabold tracking-wide text-gray-dark">
        {text1}
      </h1>
      <PartenariatsPrograms />
    </div>
  );
}
