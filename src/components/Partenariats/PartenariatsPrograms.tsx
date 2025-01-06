"use client";

import {
  FaHandshake,
  FaLightbulb,
  FaPalette,
  FaLeaf,
  FaPiggyBank,
  FaHandsHelping,
  FaBroadcastTower,
} from "react-icons/fa";
import { useState } from "react";
import Academics from "./Academics";

// Composants pour chaque partenariat
const AcademicComponent = () => (
  <div className="mt-4 rounded-lg bg-blue-100 p-6 shadow-lg">
    <h4 className="text-2xl font-semibold">Académique</h4>
    <p>Échanges étudiants, diplômes conjoints, recherche collaborative.</p>
  </div>
);

const TechnologyComponent = () => (
  <div className="mt-4 rounded-lg bg-green-100 p-6 shadow-lg">
    <h4 className="text-2xl font-semibold">Technologie</h4>
    <p>R&D, formations professionnelles, stages en entreprise.</p>
  </div>
);

const CulturalComponent = () => (
  <div className="mt-4 rounded-lg bg-purple-100 p-6 shadow-lg">
    <h4 className="text-2xl font-semibold">Culturel et Artistique</h4>
    <p>Productions collaboratives, masterclasses, diffusion internationale.</p>
  </div>
);

const SustainabilityComponent = () => (
  <div className="mt-4 rounded-lg bg-teal-100 p-6 shadow-lg">
    <h4 className="text-2xl font-semibold">Développement Durable</h4>
    <p>Audiovisuel écoresponsable, innovations vertes, sensibilisation.</p>
  </div>
);

const FinancialComponent = () => (
  <div className="bg-primary-100 mt-4 rounded-lg p-6 shadow-lg">
    <h4 className="text-2xl font-semibold">Financiers et Stratégiques</h4>
    <p>Bourses, mécénat, incubateurs de projets créatifs.</p>
  </div>
);

const NGOComponent = () => (
  <div className="mt-4 rounded-lg bg-red-100 p-6 shadow-lg">
    <h4 className="text-2xl font-semibold">Avec ONG et Gouvernements</h4>
    <p>Initiatives éducatives et culturelles, contenus de sensibilisation.</p>
  </div>
);

const MediaComponent = () => (
  <div className="mt-4 rounded-lg bg-pink-100 p-6 shadow-lg">
    <h4 className="text-2xl font-semibold">Avec Médias</h4>
    <p>Diffusion des productions, ateliers de formation.</p>
  </div>
);

// Liste des partenariats
const partnerships = [
  {
    title: "Académiques",
    description:
      "Échanges étudiants, diplômes conjoints, recherche collaborative.",
    icon: FaHandshake,
    bgColor: "bg-blue-500",
    component: <Academics />,
  },
  {
    title: "Technologiques",
    description: "R&D, formations professionnelles, stages en entreprise.",
    icon: FaLightbulb,
    bgColor: "bg-green-500",
    component: <TechnologyComponent />,
  },
  {
    title: "Culturels et Artistiques",
    description:
      "Productions collaboratives, masterclasses, diffusion internationale.",
    icon: FaPalette,
    bgColor: "bg-purple-500",
    component: <CulturalComponent />,
  },
  {
    title: "Développement Durable",
    description:
      "Audiovisuel écoresponsable, innovations vertes, sensibilisation.",
    icon: FaLeaf,
    bgColor: "bg-teal-500",
    component: <SustainabilityComponent />,
  },
  {
    title: "Financiers et Stratégiques",
    description: "Bourses, mécénat, incubateurs de projets créatifs.",
    icon: FaPiggyBank,
    bgColor: "bg-primary",
    component: <FinancialComponent />,
  },
  {
    title: "Avec ONG et Gouvernements",
    description:
      "Initiatives éducatives et culturelles, contenus de sensibilisation.",
    icon: FaHandsHelping,
    bgColor: "bg-red-500",
    component: <NGOComponent />,
  },
  {
    title: "Avec Médias",
    description: "Diffusion des productions, ateliers de formation.",
    icon: FaBroadcastTower,
    bgColor: "bg-pink-500",
    component: <MediaComponent />,
  },
];

const PartenariatsPrograms: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  // Fonction pour afficher le composant correspondant
  const getComponent = () => {
    const program = partnerships.find((p) => p.title === selectedProgram);
    return program ? program.component : null;
  };

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Section des cartes */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {partnerships.map((program, index) => {
          const Icon = program.icon;

          return (
            <div
              key={index}
              className="relative flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:cursor-pointer hover:bg-gray-50 dark:bg-gray-dark dark:hover:bg-gray-700"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Icon */}
              <div
                className={`absolute -top-10 flex h-20 w-20 items-center justify-center rounded-full text-white shadow-lg ${program.bgColor}`}
              >
                <Icon size={36} />
              </div>

              {/* Title and Description */}
              <div className="mt-10 flex flex-col items-center text-center">
                <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-50">
                  {program.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-200">
                  {program.description}
                </p>
                {/* Button */}
                <button
                  className="mt-4 rounded-full bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none"
                  // onClick={() =>
                  //   setSelectedProgram(
                  //     selectedProgram === program.title ? null : program.title,
                  //   )
                  // }
                >
                  En savoir plus
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Section pour afficher le composant sélectionné */}
      <div className="mt-12">
        <h2 className="text-center text-3xl font-bold">
          Détails du Partenariat
        </h2>
        <div className="mt-8">{getComponent()}</div>
      </div>
    </div>
  );
};

export default PartenariatsPrograms;
