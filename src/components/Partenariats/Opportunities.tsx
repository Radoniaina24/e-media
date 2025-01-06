import React from "react";
import PartenariatsPrograms from "./PartenariatsPrograms";

export default function Opportunities() {
  const text1 = " Nos Opportunités de Partenariat";
  return (
    <div className="mb-10 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 py-8 text-center shadow-lg">
      <h1 className=" mb-10 text-3xl font-extrabold tracking-wide text-white">
        {text1}
      </h1>
      <PartenariatsPrograms />
    </div>
  );
}
