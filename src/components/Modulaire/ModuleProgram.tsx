"use client";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title:
      "E-media : Université spécialisée en Audiovisuel, Cinématographie et Numérique",
    description:
      "Ce programme forme des experts en audiovisuel, cinématographie et technologies numériques, offrant des compétences dans la production vidéo, le montage, et la gestion des projets multimédia.",
    link: "/formation/modulaire/mediaUsa",
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736508890/univ_mgaskl.png",
  },
  {
    title: "UST-IO : University of Science and Technology - Indian Ocean",
    description:
      "L'UST-IO est une institution académique de premier plan qui propose des programmes en sciences et technologies, visant à former des professionnels capables de répondre aux défis technologiques de la région de l'océan Indien.",
    link: "/formation/modulaire/ust_io",
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736508891/UST_IO_jifewl.png",
  },
  {
    title: "AELI : L’African Entrepreneurship and Leadership Institute",
    description:
      "AELI offre une formation en entrepreneuriat et leadership, visant à développer des compétences de gestion et d'innovation pour les futurs leaders et entrepreneurs en Afrique.",
    link: "/formation/modulaire/aeli",
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736508890/AELI_wn0rfr.png",
  },
];

const ModulePrograms: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((program, index) => (
          <Link key={index} href={program.link}>
            <div
              className="flex flex-col items-center justify-between rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={program.imageSrc}
                  width={150}
                  height={150}
                  alt={"logo"}
                  className="object-contain"
                />
              </div>
              <h3 className="mb-4 text-center text-lg font-semibold text-gray-800 dark:text-gray-50">
                {program.title}
              </h3>
              <p className="mb-6 text-center text-gray-600 dark:text-gray-200">
                {program.description}
              </p>
              <button className="rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-600">
                En savoir plus
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ModulePrograms;
