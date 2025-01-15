"use client";
import React from "react";
import PartenariatsPrograms from "./PartenariatsPrograms";
import { useLanguageContext } from "@/lib/context/LanguageContext";

export default function Opportunities() {
  const { language } = useLanguageContext();
  const text1 =
    language === "fr"
      ? "Nos Opportunités de Partenariat"
      : "Our Partnership Opportunities";
  return (
    <div className="mb-10 rounded-lg  py-8 text-center shadow-lg">
      <h1 className=" my-20 text-5xl font-extrabold tracking-wide text-gray-dark">
        {text1}
      </h1>
      <PartenariatsPrograms />
    </div>
  );
}
