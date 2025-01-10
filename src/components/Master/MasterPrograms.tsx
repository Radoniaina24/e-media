"use client";
import Link from "next/link";

const programs = [
  {
    title: "MASTER EN INFORMATIQUE ET ÉLECTRONIQUE EMBARQUÉES (IEE)",
    description:
      "Ce programme forme des experts en développement de solutions technologiques innovantes pour les systèmes embarqués et les applications informatiques avancées.",
    link: "/formation/master/electronique_informatique",
  },
  {
    title: "MASTER EN AUDIOVISUEL ET CINÉMATOGRAPHIE (AC)",
    description:
      "Un cursus dédié aux passionnés de production audiovisuelle et cinématographique, combinant techniques modernes et créativité.",
    link: "/formation/master/ac",
  },
  {
    title: "MASTER EN MARKETING DIGITAL ET JOURNALISME (MDJ - M)",
    description:
      "Préparez-vous aux métiers de la communication digitale et du journalisme moderne en maîtrisant les outils et stratégies numériques.",
    link: "/formation/master/mdj",
  },
  {
    title:
      "MBA SPÉCIALISÉ - MASTER OF BUSINESS ADMINISTRATION (FORMATION 100% EN LIGNE)",
    description:
      "Un programme en ligne axé sur le leadership et la gestion stratégique pour développer vos compétences en management.",
    link: "/formation/master/mba",
  },
  {
    title: "MASTER EN DROIT (FORMATION 100% EN LIGNE)",
    description:
      "Une formation juridique approfondie, accessible à distance, pour devenir un expert en droit national et international.",
    link: "/formation/master/droit",
  },
];

const MasterPrograms: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="mb-10 text-center text-3xl font-bold text-gray-800 dark:text-white">
        Nos Programmes de Master.
      </h2>
      <hr className="mb-20" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {programs.map((program, index) => (
          <Link key={index} href={program.link}>
            <div
              className="flex h-full flex-col items-stretch justify-between rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:cursor-pointer hover:bg-gray-50 dark:bg-gray-dark dark:hover:bg-gray-700"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Adding AOS animation delay for each card
            >
              <h3 className="mb-4 flex-grow text-center text-xl font-semibold text-gray-800 dark:text-gray-50">
                {program.title}
              </h3>
              <p className="mb-6 flex-grow text-center text-gray-600 dark:text-gray-200">
                {program.description}
              </p>
              <button className="mt-4 inline-block rounded bg-blue-500 px-6 py-3 text-sm text-white transition hover:bg-blue-600">
                En savoir plus
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MasterPrograms;
