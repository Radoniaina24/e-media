"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import Header from "../Licence/Header";
import Section from "../Licence/Section";
import ProgramCard from "./ProgramCard";
import CallToAction from "../Licence/CallToAction";
import Mention from "./Mention";
import MasterCard from "./MasterCard";
import ProgramDetails from "./ProgramDetails";
import CiblePublicCard from "./CiblePublicCard";
import Card from "../Licence/Card";
import ScrollComponent from "../Scroll/ScrollComponent";

export default function SectionM5() {
  const master = [
    {
      title: "M1",
      description:
        "10 mois pour explorer en profondeur les fondements avancés du droit et s’initier à des méthodologies analytiques et décisionnelles.",
    },
    {
      title: "M2",
      description:
        "10 mois pour une spécialisation intensive dans l’une des trois branches proposées et des projets applicables.",
    },
    {
      title: "Mémoire de fin d’études",
      description:
        "Les étudiants mènent une recherche approfondie ou réalisent un projet appliqué destiné à résoudre des problématiques concrètes.",
    },
  ];
  const currentWorld = {
    title: "Le Master s’adresse à :",
    items: [
      "Titulaires d’une Licence en Droit ou d’un diplôme équivalent, prêts à approfondir leurs connaissances et à se spécialiser.",
      "Professionnels en activité, cherchant à évoluer vers des postes de direction ou à diversifier leurs compétences dans des domaines juridiques stratégiques.",
      "Futurs leaders juridiques, souhaitant influencer les politiques publiques, diriger des affaires complexes ou représenter des organisations à l’échelle internationale.",
    ],
  };
  const ciblePublicData = [
    {
      title: "Orientation stratégique et spécialisée",
      description:
        "Contrairement à la Licence, ce programme met l’accent sur les compétences décisionnelles, stratégiques et analytiques nécessaires pour des postes de haut niveau.",
    },
    {
      title: "Approche pratique et immersive",
      description:
        "Études de cas réels, simulations, et projets concrets permettant aux étudiants de maîtriser les défis actuels du monde juridique.",
    },
    {
      title: "Flexibilité et accessibilité",
      description:
        "La formation en ligne permet aux professionnels et aux étudiants à l’international d’accéder à une éducation de qualité tout en poursuivant leurs activités.",
    },
    {
      title: "Excellence académique",
      description:
        "Enseignée par des experts juridiques locaux et internationaux, cette formation garantit une préparation optimale pour les défis contemporains.",
    },
  ];

  const programs = [
    {
      title: "Droit Public",
      description:
        "Ce parcours se concentre sur les institutions publiques, les politiques nationales et internationales, ainsi que sur les grands enjeux de gouvernance.",
      content: [
        "Analyse approfondie du droit constitutionnel, du droit administratif et des libertés publiques.",
        "Études de cas sur la gouvernance publique et les réformes administratives.",
        "Maîtrise des mécanismes juridiques encadrant les politiques publiques et les institutions internationales.",
      ],
      opportunities: [
        "Conseiller juridique dans les administrations publiques ou internationales.",
        "Consultant en gouvernance publique ou chargé de mission dans des organismes gouvernementaux.",
        "Expert en droit des collectivités territoriales ou défenseur des droits.",
      ],
    },
    {
      title: "Droit Privé et des Affaires",
      description:
        "Cette spécialisation forme des experts capables d’analyser et de résoudre les problématiques complexes liées au droit des entreprises, des contrats et des transactions économiques.",
      content: [
        "Études avancées en droit des contrats, droit des sociétés et droit commercial international.",
        "Analyse des stratégies fiscales et des risques juridiques dans les affaires.",
        "Développement des compétences en gestion des litiges commerciaux et en arbitrage.",
      ],
      opportunities: [
        "Avocat d’affaires spécialisé en transactions complexes.",
        "Juriste d’entreprise ou consultant en droit des sociétés.",
        "Responsable de la conformité juridique ou expert en médiation commerciale.",
      ],
    },
    {
      title: "Droit International et Diplomatie",
      description:
        "Ce parcours offre une formation pointue en droit international et en diplomatie, combinant des compétences juridiques et stratégiques pour évoluer dans un environnement global.",
      content: [
        "Analyse des enjeux juridiques liés aux conflits internationaux, au droit des traités et au droit humanitaire.",
        "Études des processus de négociation et des relations diplomatiques.",
        "Préparation aux défis de la gouvernance mondiale, des droits de l’homme et du droit des affaires internationales.",
      ],
      opportunities: [
        "Diplomate ou conseiller juridique dans des organisations internationales.",
        "Consultant en arbitrage international ou en gestion de conflits transfrontaliers.",
        "Responsable des affaires internationales dans des ambassades ou des entreprises multinationales.",
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
        id="master5"
        title="MASTER EN DROIT (FORMATION 100% EN LIGNE)"
        subtitle="Le Master en Droit d’E-Media, exclusivement disponible en formation en ligne, est conçu pour former des experts et des décideurs dans les différents domaines du droit. Contrairement à la Licence, qui offre une compréhension générale et fondamentale des concepts juridiques, ce programme de niveau Master se concentre sur l’acquisition de compétences avancées et spécialisées. Il prépare les étudiants à occuper des postes de responsabilité stratégique dans les secteurs public, privé et international, en combinant une formation académique rigoureuse avec une orientation pratique et professionnelle."
      />
      <div
        id="master5"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <ScrollComponent text="MASTER EN DROIT (FORMATION 100% EN LIGNE)" />
        <Mention specialisation="Droit Public, Droit Privé et des Affaires, Droit International et Diplomatie" />
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
          content="Le Master en Droit se déroule sur 2 ans après la Licence (soit 4 semestres) :"
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

        <Section title="Spécialisations disponibles">
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
          title="POURQUOI CHOISIR LE MASTER EN DROIT D’E-MEDIA ?"
          bgColor="bg-gray-100"
        >
          <div className=" text-md mt-4 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {ciblePublicData.map((item, index) => (
              <CiblePublicCard key={index} data={item} />
            ))}
          </div>
        </Section>

        <Section bgColor="bg-primary">
          <CallToAction
            description={
              "Rejoignez E-Media dès aujourd’hui et devenez un leader dans le domaine juridique et diplomatique !"
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
