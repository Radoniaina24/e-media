"use client";
import { useLanguageContext } from "@/lib/context/LanguageContext";
import Link from "next/link";
import React from "react";

const categoriesFr = [
  {
    title: "Licence",
    icon: "🎓",
    lien: "/formation/licence",
    description:
      "La LICENCE est un programme de premier cycle universitaire qui permet aux étudiants d'acquérir des connaissances fondamentales dans leur domaine d'études. Ce diplôme offre une formation théorique et pratique, ouvrant la voie à une spécialisation ou à une entrée sur le marché du travail dans divers secteurs. La Licence dure généralement trois ans et constitue la première étape vers des études supérieures comme le Master.",
  },
  {
    title: "Master",
    icon: "👨‍🎓",
    lien: "/formation/master",
    description:
      "Le MASTER est un diplôme de deuxième cycle universitaire qui permet aux étudiants de se spécialiser dans un domaine spécifique après avoir obtenu leur Licence. Ce programme de deux ans propose un enseignement approfondi et souvent orienté vers la recherche ou la pratique professionnelle. Le Master prépare les étudiants à des carrières avancées dans des secteurs variés ou à poursuivre avec un doctorat pour des études plus approfondies.",
  },
];
const categoriesEn = [
  {
    title: "Bachelor's Degree",
    icon: "🎓",
    lien: "/formation/licence",
    description:
      "The Bachelor's Degree is an undergraduate program designed to provide students with foundational knowledge in their field of study. This degree offers a combination of theoretical and practical training, paving the way for specialization or entry into the job market across various sectors. Typically completed in three years, it serves as the first step toward advanced studies such as a Master's Degree.",
  },
  {
    title: "Master's Degree",
    icon: "👨‍🎓",
    lien: "/formation/master",
    description:
      "The Master's Degree is a postgraduate program that allows students to specialize in a specific field after earning their Bachelor's Degree. This two-year program offers in-depth education, often focusing on research or professional practice. The Master's Degree prepares students for advanced careers in various sectors or further studies, such as pursuing a PhD for more specialized academic work.",
  },
];

const CategoryUniversitaires: React.FC = () => {
  const { language } = useLanguageContext();
  const categories = language === "fr" ? categoriesFr : categoriesEn;
  return (
    <div className="container mx-auto my-10 p-6">
      <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {categories.map((category, index) => (
          <Link key={index} href={category.lien}>
            <div className="flex h-full flex-col items-center justify-between rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:cursor-pointer dark:bg-gray-dark">
              <div className="mb-4 flex items-center justify-center text-4xl">
                {category.icon}
              </div>
              <h3 className="flex-grow text-center text-xl font-semibold text-gray-800 dark:text-white">
                {category.title.toLocaleUpperCase()}
              </h3>
              <p className="mt-2 flex-grow text-center text-gray-600 dark:text-gray-300">
                {category.description}
              </p>
              <div className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 text-sm text-white transition hover:bg-blue-600">
                {language === "fr" ? "En savoir plus" : "Learn more"}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryUniversitaires;
