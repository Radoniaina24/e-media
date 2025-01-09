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
import Technologie from "./Technologie";
import Culturels from "./Culturels";
import Financier from "./Financier";
import Ong from "./Ong";
import Durable from "./Durable";
import FormatPro360 from "./360";

// Liste des partenariats
const partnerships = [
  {
    title: "Académiques",
    description:
      "Échanges étudiants, diplômes conjoints, recherche collaborative.",
    icon: FaHandshake,
    bgColor: "bg-blue-500",
    component: <Academics />,
    id: "#1",
  },
  {
    title: "Technologiques",
    description: "R&D, formations professionnelles, stages en entreprise.",
    icon: FaLightbulb,
    bgColor: "bg-green-500",
    component: <Technologie />,
    id: "#2",
  },
  {
    title: "Culturels et Artistiques",
    description:
      "Productions collaboratives, masterclasses, diffusion internationale.",
    icon: FaPalette,
    bgColor: "bg-purple-500",
    component: <Culturels />,
    id: "#3",
  },
  {
    title: "Développement Durable",
    description:
      "Audiovisuel écoresponsable, innovations vertes, sensibilisation.",
    icon: FaLeaf,
    bgColor: "bg-teal-500",
    component: <Durable />,
    id: "#4",
  },
  {
    title: "Financiers et Stratégiques",
    description: "Bourses, mécénat, incubateurs de projets créatifs.",
    icon: FaPiggyBank,
    bgColor: "bg-primary",
    component: <Financier />,
    id: "#5",
  },
  {
    title: "Avec ONG et Gouvernements",
    description:
      "Initiatives éducatives et culturelles, contenus de sensibilisation.",
    icon: FaHandsHelping,
    bgColor: "bg-red-500",
    component: <Ong />,
    id: "#6",
  },
  {
    title: "Avec Médias",
    description: "Diffusion des productions, ateliers de formation.",
    icon: FaBroadcastTower,
    bgColor: "bg-pink-500",
    component: <FormatPro360 />,
    id: "#7",
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
    <>
      <div className="container mx-auto px-6 py-12">
        {/* Section des cartes */}
        <div className="grid  grid-cols-1 justify-items-center gap-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {partnerships.map((program, index) => {
            const Icon = program.icon;

            return (
              <div
                key={index}
                className="relative flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:cursor-pointer hover:bg-gray-50  "
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
                  <h3 className="mb-4 text-xl font-semibold text-gray-800 ">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 ">{program.description}</p>
                  {/* Button */}
                  <a href={program.id}>
                    <button
                      className="mt-4 rounded-full bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none"
                      onClick={() =>
                        setSelectedProgram(
                          selectedProgram === program.title
                            ? null
                            : program.title,
                        )
                      }
                    >
                      En savoir plus
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Section pour afficher le composant sélectionné */}
      <div className="">
        <div className="">{getComponent()}</div>
      </div>
    </>
  );
};

export default PartenariatsPrograms;
