import Link from "next/link";
import React from "react";

const categories = [
  {
    title: "Formation Universitaire",
    description:
      "Découvrez nos programmes universitaires, y compris les cursus de master, pour approfondir vos connaissances et développer vos compétences.",
    icon: "👨‍🎓",
    lien: "/formation/universitaire",
  },
  {
    title: "Formation modulaire",
    description:
      "Les formations modulaires sont conçues pour offrir une flexibilité maximale. Vous pouvez suivre des modules spécifiques selon vos besoins et votre rythme.",
    icon: "📚",
    lien: "/formation/modulaire",
  },

  {
    title: "CFP",
    description:
      "Le CFP propose des formations professionnelles axées sur la pratique, adaptées aux besoins du marché et permettant une montée en compétences rapide et efficace.",
    icon: "💻",
    lien: "/formation/cfp",
  },
];

const CategoryCards: React.FC = () => {
  return (
    <div className="container mx-auto my-10 p-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <Link key={index} href={category.lien}>
            <div className="flex h-full flex-col items-center justify-between rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:cursor-pointer dark:bg-gray-dark ">
              <div className="mb-4 flex items-center justify-center text-4xl">
                {category.icon}
              </div>
              <h3 className="flex-grow text-center text-xl font-semibold text-gray-800 dark:text-white">
                {category.title}
              </h3>
              <p className="mt-2 flex-grow text-center text-gray-600 dark:text-gray-300">
                {category.description}
              </p>
              <div className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 text-sm text-white transition hover:bg-blue-600">
                En savoir plus
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
