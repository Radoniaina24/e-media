"use client";
import Link from "next/link";

const programs = [
  {
    title:
      "LICENCE EN TECHNOLOGIES DE L’INFORMATION ET DE LA TELECOMMUNICATION (TIC)",
    description:
      "Cette formation vous permettra d’acquérir les compétences nécessaires dans les domaines des technologies de l’information, de la communication et de la gestion des systèmes d’information.",
    link: "/formation/licence/tic", // Remplacez par le lien vers la page de la licence TIC
  },
  {
    title: "LICENCE EN COMMUNICATION AUDIOVISUELLE ET NUMÉRIQUE (CAN)",
    description:
      "Apprenez les bases de la production audiovisuelle et du numérique, et maîtrisez les techniques de communication visuelle et sonore.",
    link: "/formation/licence/can", // Remplacez par le lien vers la page de la licence CAN
  },
  {
    title: "MARKETING DIGITAL ET JOURNALISME (MDJ - L) - LICENCE",
    description:
      "Cette formation combine des compétences en marketing digital et en journalisme pour vous préparer à une carrière dans le monde de la communication numérique.",
    link: "/formation/licence/mdj", // Remplacez par le lien vers la page de la licence MDJ
  },
  {
    title: "LICENCE EN MANAGEMENT (100% EN LIGNE)",
    description:
      "Découvrez les principes fondamentaux du management et du leadership, tout en développant des compétences adaptées aux exigences du marché actuel, en ligne.",
    link: "/formation/licence/management", // Remplacez par le lien vers la page de la licence Management
  },
  {
    title: "LICENCE EN DROIT (FORMATION 100% EN LIGNE)",
    description:
      "Une formation complète en droit, dispensée entièrement en ligne, pour développer des compétences en législation et en analyse juridique.",
    link: "/formation/licence/droit", // Remplacez par le lien vers la page de la licence Droit
  },
];

const LicensePrograms: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="mb-10 text-center text-3xl font-bold text-gray-800 dark:text-white">
        Nos Programmes de Licence dfsfsdfsdfsdfsdfs
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

export default LicensePrograms;
