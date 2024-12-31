"use client";
import Link from "next/link";

const programs = [
  {
    title: "Son : Production Audio & MAO",
    description:
      "Apprenez les techniques avancées de production audio et maîtrisez les outils de Musique Assistée par Ordinateur (MAO) pour créer des productions sonores de qualité professionnelle.",
    link: "/formation/cfp/sam",
  },
  {
    title: "Son : Sonorisation et Lumières de Spectacle",
    description:
      "Devenez expert en sonorisation et en gestion des lumières pour les spectacles en direct, en alliant savoir-faire technique et créativité scénique.",
    link: "/formation/cfp/ssls",
  },
  {
    title: "Image : Cinématographie, Post-production, Photographie et 3D",
    description:
      "Formez-vous aux métiers de l'image, de la captation à la post-production, en passant par la photographie et la création 3D, pour des projets visuels innovants.",
    link: "/formation/cfp/cpp",
  },
  {
    title: "Web : Création et Développement Multimédia",
    description:
      "Développez des compétences en création et développement multimédia pour concevoir des sites web interactifs et des expériences numériques immersives.",
    link: "/formation/cfp/cdm",
  },
  {
    title: "DTS – Diplôme de Technicien Supérieur",
    description:
      "Un diplôme technique conçu pour vous préparer aux métiers spécialisés, combinant théorie et pratique pour répondre aux besoins du marché.",
    link: "/formation/cfp/dts",
  },
];

const CFPPrograms: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="mb-10 text-center text-3xl font-bold text-gray-800 dark:text-white">
        Nos Programmes de CFP
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
export default CFPPrograms;
