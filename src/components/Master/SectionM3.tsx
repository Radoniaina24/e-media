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

export default function SectionM3() {
  const ciblePublicData = [
    {
      title: "Les titulaires d’une Licence",
      description:
        "Étudiants ayant une base en marketing, communication, journalisme ou sciences sociales, souhaitant évoluer vers des postes de direction ou de haute responsabilité.",
    },
    {
      title: "Les professionnels en activité",
      description:
        "Consultants, managers ou entrepreneurs désireux de perfectionner leurs compétences et de s’adapter aux évolutions rapides des secteurs du digital et des médias.",
    },
    {
      title: "Les futurs leaders du numérique",
      description:
        "Ceux qui veulent influencer et transformer les pratiques marketing et médiatiques grâce à des approches novatrices et une vision globale.",
    },
  ];
  const master = [
    {
      title: "M1",
      description:
        "Acquisition des fondements avancés en stratégie numérique, data marketing et journalisme multimédia.",
    },
    {
      title: "M2",
      description:
        " Spécialisation dans l’un des deux parcours, avec des projets pratiques et immersifs.",
    },
    {
      title: "Mémoire de fin d’études",
      description:
        "Les étudiants réalisent un projet de recherche ou une étude appliquée sur des problématiques réelles du marketing digital ou des médias, consolidant ainsi leur expertise et leur valeur sur le marché.",
    },
  ];
  const careerPaths = [
    {
      title: "Marketing et Communication",
      details: [
        "Directeur de stratégie digitale.",
        "Responsable de campagnes marketing à l’international.",
        "Consultant en data marketing et expérience client.",
      ],
    },
    {
      title: "Journalisme et Médias",
      details: [
        "Rédacteur en chef, journaliste d’investigation ou correspondant international.",
        "Producteur de contenus innovants pour plateformes numériques et audiovisuelles.",
        "Responsable éditorial dans des médias traditionnels et numériques.",
      ],
    },
    {
      title: "Publicité et Création",
      details: [
        "Directeur artistique pour agences de communication.",
        "Créateur de campagnes publicitaires immersives et interactives.",
        "Innovateur en storytelling digital et production multimédia.",
      ],
    },
    {
      title: "Entrepreneuriat et Leadership",
      details: [
        "Fondateur de start-up dans les domaines du marketing ou des médias.",
        "Consultant indépendant en stratégie de communication ou de contenu.",
      ],
    },
  ];
  const programs = [
    {
      title: "Marketing Digital : Stratégie et Innovation",
      description:
        "Ce parcours se concentre sur le développement de compétences stratégiques et opérationnelles pour concevoir, piloter et optimiser des campagnes marketing numériques à fort impact.",
      content: [
        "Développer une expertise en analyse de données marketing (big data, SEO, SEA).",
        "Concevoir des stratégies omnicanales intégrées, combinant e-commerce, réseaux sociaux et publicité digitale.",
        "Maîtriser les technologies émergentes : IA, automation marketing, marketing d’influence.",
        "Construire et gérer des marques en ligne tout en anticipant les crises.",
      ],
      opportunities: [
        "Directeur marketing digital.",
        "Chef de projet en transformation numérique.",
        "Spécialiste en branding et gestion d’e-réputation.",
        "Consultant en stratégie digitale pour entreprises ou organisations internationales.",
      ],
    },
    {
      title: "Journalisme Multimédia : Création et Impact",
      description:
        "Ce parcours forme des journalistes et des créateurs de contenu capables de produire des informations percutantes et adaptées aux plateformes modernes. L’accent est mis sur l’innovation éditoriale, les formats multimédias et la gestion des médias numériques.",
      content: [
        "Maîtriser les techniques avancées de journalisme narratif et d’investigation.",
        "Produire des contenus multimédias de qualité (vidéos, podcasts, storytelling interactif).",
        "Développer des stratégies éditoriales innovantes pour le web et les réseaux sociaux.",
        "Comprendre et appliquer les principes d’éthique et de déontologie dans un environnement numérique.",
      ],
      opportunities: [
        "Journaliste senior ou rédacteur en chef numérique.",
        "Producteur de contenus audiovisuels pour médias ou entreprises.",
        "Consultant en stratégie éditoriale et journalisme d’impact.",
        "Responsable de rédaction ou d’équipe journalistique.",
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
        id="master3"
        title="MASTER EN MARKETING DIGITAL ET JOURNALISME (MDJ - M)"
        subtitle="Le Master en Marketing Digital et Journalisme (MDJ) d’E-Media est une formation d’excellence, spécialement conçue pour former des cadres supérieurs et des experts capables d’anticiper, de piloter et de transformer les stratégies marketing et journalistiques à l’ère du numérique. Ce programme, unique à Madagascar, associe innovation, leadership stratégique et expertise opérationnelle pour répondre aux exigences croissantes des entreprises et des médias modernes."
      />
      <div
        id="master3"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <Mention
          domain={"Sciences de la Société"}
          mention={"Marketing Digital et Journalisme"}
        />
        <Section title="À qui s’adresse cette formation ?"></Section>
        {/* À qui s’adresse cette formation ? */}
        <Section bgColor="bg-gray-100">
          <h3 className="text-bold mb-10 text-center text-xl font-semibold dark:text-gray-400 ">
            Ce Master est destiné à :
          </h3>

          <div className=" text-md mt-4 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {ciblePublicData.map((item, index) => (
              <CiblePublicCard key={index} data={item} />
            ))}
          </div>
        </Section>

        <Section
          title="Durée et organisation de la formation"
          content="Le Master en MDJ est un programme intensif et structuré sur 2 ans après la Licence (soit 4 semestres):"
        >
          <div className="flex justify-center space-x-6">
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
          content="Les diplômés du Master MDJ disposent des compétences nécessaires pour occuper des postes stratégiques et de leadership dans :"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {careerPaths.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </Section>

        <Section
          bgColor="bg-gray-100"
          title="Une formation axée sur l’excellence et le leadership"
          content="Le Master en Marketing Digital et Journalisme d’E-Media offre une approche résolument professionnelle et stratégique. Les étudiants sont formés à anticiper les tendances mondiales, à intégrer les outils technologiques les plus récents et à diriger avec assurance dans des environnements dynamiques et compétitifs."
        ></Section>
        <Section bgColor="bg-primary">
          <CallToAction
            description={
              "Rejoignez-nous dès maintenant pour devenir un leader dans le marketing et les médias numériques !"
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
