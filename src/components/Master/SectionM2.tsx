"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import { CheckIcon } from "@heroicons/react/solid";
import Header from "../Licence/Header";
import Section from "../Licence/Section";
import Card from "../Licence/Card";
import ParcoursCard from "../Licence/ParcourCard";
import ProgramCard from "./ProgramCard";
import CallToAction from "../Licence/CallToAction";
import Mention from "./Mention";
import MasterCard from "./MasterCard";
import ProgramDetails from "./ProgramDetails";

export default function SectionM2() {
  const currentWorld = {
    title: "Ce Master est conçu pour :",
    items: [
      "Les titulaires d’une Licence dans des domaines connexes tels que le cinéma, l’audiovisuel, les arts ou les sciences sociales.",
      "Les professionnels de l’industrie souhaitant approfondir leurs compétences techniques ou se repositionner dans des fonctions stratégiques.",
      "Les passionnés d’art et de technologie prêts à exceller dans les domaines de la cinématographie et de l’ingénierie sonore.",
    ],
  };

  const master = [
    {
      title: "M1",
      description:
        "10 mois pour acquérir des compétences avancées en audiovisuel et cinématographie.",
    },
    {
      title: "M2",
      description:
        "10 mois pour se spécialiser dans l’un des deux parcours proposés.",
    },
    {
      title: "Mémoire de fin d’études",
      description:
        "Un projet de recherche ou une réalisation pratique en lien avec la spécialisation, visant à valider le diplôme.",
    },
  ];
  const careerPaths = [
    {
      title: "Industrie Cinématographique et Télévision",
      details: [
        "Réalisateur ou assistant réalisateur.",
        "Directeur artistique ou directeur de la photographie.",
        "Producteur ou gestionnaire de projets cinématographiques.",
      ],
    },
    {
      title: "Ingénierie Sonore et Audiovisuel",
      details: [
        "Sound designer ou ingénieur du son.",
        "Responsable de production musicale ou technique sonore.",
        "Mixeur ou éditeur de son dans des studios d’enregistrement ou de post-production.",
      ],
    },
    {
      title: "Médias et Publicité",
      details: [
        "Responsable de contenu audiovisuel pour agences ou plateformes numériques.",
        "Consultant en stratégie audiovisuelle et production multimédia.",
      ],
    },
  ];
  const programs = [
    {
      title: "Cinématographie",
      description:
        "Le parcours Cinématographie est dédié à la maîtrise des techniques avancées de création cinématographique, de la pré-production à la post-production. Il forme des experts capables de produire des contenus de qualité professionnelle pour le cinéma, la télévision et les plateformes numériques.",
      content: [
        "Réalisation et direction artistique.",
        "Écriture et scénarisation pour films, documentaires et séries.",
        "Production et gestion de projets cinématographiques.",
        "Post-production : montage numérique, étalonnage et effets visuels (VFX).",
        "Cinéma numérique : technologies modernes (4K, 8K, drones, etc.).",
        "Histoire et esthétique du cinéma.",
      ],
      opportunities: [
        "Réalisateur, directeur artistique, producteur ou monteur vidéo.",
        "Consultant en stratégie cinématographique ou créateur de contenus pour plateformes de streaming.",
      ],
    },
    {
      title: "Ingénierie de Son",
      description:
        "Le parcours Ingénierie de Son est axé sur les aspects techniques et créatifs de la production sonore. Il forme des spécialistes capables de concevoir et de réaliser des environnements sonores pour le cinéma, la télévision, la musique, les jeux vidéo et les expériences immersives.",
      content: [
        "Enregistrement et mixage sonore.",
        "Sound design pour le cinéma, les jeux vidéo et les projets numériques.",
        "Production musicale, arrangement et mastering.",
        "Post-production audio : édition, synchronisation et intégration sonore.",
        "Son immersif et spatialisation pour VR et AR.",
        "Utilisation des outils modernes : consoles numériques, logiciels DAW, et microphones avancés.",
      ],
      opportunities: [
        "Ingénieur du son, sound designer, producteur musical ou mixeur.",
        "Responsable audio pour le cinéma, les jeux vidéo ou les environnements immersifs.",
      ],
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Type d'animation
    });
  }, []);
  return (
    <div>
      {/* Header */}
      <Header
        id="master2"
        title="MASTER EN AUDIOVISUEL ET CINÉMATOGRAPHIE (AC)"
        subtitle="Le Master en Audiovisuel et Cinématographie (AC) d’E-Media est une formation avancée et multidisciplinaire qui allie expertise technique, créativité artistique et vision stratégique. Ce programme forme les futurs professionnels du cinéma, de l’audiovisuel et de l’ingénierie sonore, leur permettant d’évoluer dans des secteurs en plein essor à l’échelle locale et internationale."
      />
      <div
        id="master2"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <Mention
          domain={"Sciences de la Société"}
          mention={"Audiovisuel et Cinématographie"}
        />
        <Section title="À qui s’adresse cette formation ?"></Section>
        {/* À qui s’adresse cette formation ? */}
        <Section bgColor="bg-gray-100">
          <h3 className="text-bold mb-10 text-center text-xl font-semibold dark:text-gray-400 ">
            {currentWorld.title}
          </h3>

          <div className=" text-md mt-4 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {currentWorld.items.map((item, index) => (
              <Card key={index} title={item} items={[]} />
            ))}
          </div>
        </Section>

        <Section
          title="Durée et organisation de la formation"
          content="Le Master en Audiovisuel et Cinématographie se déroule sur 4 semestres après la Licence (soit 2 ans)."
        >
          <div className="flex flex-wrap justify-center gap-5">
            {master.map((spec, index) => (
              <MasterCard
                key={index}
                title={spec.title}
                description={spec.description}
              />
            ))}
          </div>
        </Section>

        <Section title="Parcours spécialisés (en M2) ">
          {programs.map((program, index) => (
            <ProgramDetails
              key={index}
              title={program.title}
              description={program.description}
              content={program.content}
              opportunities={program.opportunities}
            />
          ))}
        </Section>

        <Section
          title="Débouchés professionnels globaux"
          bgColor="bg-gray-100"
          content="Les diplômés du Master en Audiovisuel et Cinématographie peuvent accéder à des postes variés et stratégiques dans :"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {careerPaths.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </Section>

        <Section
          bgColor="bg-gray-100"
          title="Une innovation à Madagascar et dans l’Océan Indien"
        >
          <div className="rounded-lg bg-gray-50 p-8 text-start shadow-lg dark:bg-gray-800">
            <p className="mb-6 text-lg font-medium text-gray-700 dark:text-gray-300">
              Ces deux parcours,{" "}
              <span className="font-semibold text-teal-600 dark:text-teal-400">
                Cinématographie
              </span>{" "}
              et{" "}
              <span className="font-semibold text-teal-600 dark:text-teal-400">
                Ingénierie de Son
              </span>
              , sont uniques à Madagascar et offrent une formation complète et
              inédite.{" "}
              <span className="font-semibold text-teal-500 dark:text-teal-300">
                E-Media
              </span>{" "}
              est la seule université habilitée à Madagascar à proposer un tel
              programme, aligné sur les standards internationaux.
            </p>
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
              Avec des infrastructures modernes (studios de cinéma, laboratoires
              sonores, équipements de pointe) et un corps professoral composé
              d&apos;experts locaux et internationaux, ces parcours garantissent
              une expérience d&apos;apprentissage enrichissante et
              professionnalisante.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Les diplômés de ces parcours se distingueront par leur capacité à{" "}
              <span className="font-semibold text-teal-500 dark:text-teal-300">
                innover
              </span>
              , à relever les défis techniques et artistiques, et à contribuer
              activement à l&apos;essor des industries culturelles et créatives
              à Madagascar et dans la région de l&apos;Océan Indien.
            </p>
          </div>
        </Section>
        <Section bgColor="bg-primary">
          <CallToAction
            description={
              "Rejoignez-nous dès maintenant pour bâtir votre avenir dans le cinéma et l’audiovisuel !"
            }
            buttonText={"Préinscriptions ouvertes ici"}
            buttonLink={""}
            heading={""}
          />
        </Section>
      </div>
    </div>
  );
}
