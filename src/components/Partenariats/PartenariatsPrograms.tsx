"use client";
import Link from "next/link";

const partnerships = [
  {
    title: "Académiques",
    description:
      "Échanges étudiants, diplômes conjoints, recherche collaborative.",
    link: "/partnerships/academics",
  },
  {
    title: "Technologiques",
    description: "R&D, formations professionnelles, stages en entreprise.",
    link: "/partnerships/technologies",
  },
  {
    title: "Culturels et Artistiques",
    description:
      "Productions collaboratives, masterclasses, diffusion internationale.",
    link: "/partnerships/culture-arts",
  },
  {
    title: "Développement Durable",
    description:
      "Audiovisuel écoresponsable, innovations vertes, sensibilisation.",
    link: "/partnerships/sustainable-development",
  },
  {
    title: "Financiers et Stratégiques",
    description: "Bourses, mécénat, incubateurs de projets créatifs.",
    link: "/partnerships/finance-strategy",
  },
  {
    title: "Avec ONG et Gouvernements",
    description:
      "Initiatives éducatives et culturelles, contenus de sensibilisation.",
    link: "/partnerships/ngo-government",
  },
  {
    title: "Avec Médias",
    description: "Diffusion des productions, ateliers de formation.",
    link: "/partnerships/media",
  },
];
const PartenariatsPrograms: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {partnerships.map((program, index) => (
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
export default PartenariatsPrograms;
