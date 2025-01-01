"use client";

import Section from "./Section";
import Card from "./Card";
import Header from "./Header";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import MasterCard from "../Master/MasterCard";
import ProgramCard from "../Master/ProgramCard";
export default function SectionL3() {
  const currentWorld = [
    {
      title: "Bacheliers de toutes filières",
      description:
        "Idéal pour ceux souhaitant s’orienter vers des métiers créatifs et stratégiques.",
    },
    {
      title: "Professionnels en activité",
      description:
        "Entrepreneurs, salariés ou fonctionnaires cherchant à renforcer leurs compétences dans le digital et les médias.",
    },
    {
      title: "Acteurs de tous secteurs",
      description:
        "La communication et le marketing étant transversaux, ils concernent les secteurs primaire, secondaire et surtout tertiaire.",
    },
  ];
  const currentWorld2 = {
    items: [
      "Le marketing digital est indispensable pour gérer la visibilité en ligne des entreprises et développer des stratégies percutantes.",
      "Le journalisme multimédia permet de produire des contenus adaptés aux plateformes numériques et de répondre à la demande croissante d’information en temps réel.",
      "Cette formation forme des professionnels capables d’innover, de s’adapter aux nouveaux outils et de piloter des campagnes ou des projets médiatiques.",
    ],
  };

  const licences = [
    {
      title: "L1",
      description:
        "10 mois pour maîtriser les fondamentaux du marketing, de la communication et du journalisme.",
    },
    {
      title: "L2",
      description:
        "10 mois pour approfondir les compétences techniques et analytiques.",
    },
    {
      title: "L3",
      description:
        "10 mois pour se spécialiser et développer une expertise professionnelle.",
    },
  ];
  const careerPaths = [
    {
      title: "Marketing Digital et Communication",
      details: [
        "Responsable marketing digital",
        "Chef de projet en stratégie digitale",
        "Social media manager",
        "Spécialiste en publicité numérique et branding",
        "Spécialiste en production musicale",
        "Consultant en communication et e-commerce",
      ],
    },
    {
      title: "Journalisme et Médias",
      details: [
        "Journaliste multimédia (web, TV, radio, presse)",
        "Reporter ou correspondant numérique",
        "Producteur de contenus audiovisuels et podcasts",
        "Rédacteur web ou storyteller multimédia",
      ],
    },
    {
      title: "Publicité et Création",
      details: [
        "Directeur artistique ou concepteur-rédacteur",
        "Créateur de campagnes publicitaires et visuelles",
        "Spécialiste en design interactif et production de contenu multimédia",
      ],
    },
    {
      title: "Entrepreneuriat et Développement",
      details: [
        "Consultant en stratégie de contenu ou analyse de données",
        "Créateur de start-up dans les médias ou le marketing digital",
        "Expert en SEO/SEA et marketing de contenu",
      ],
    },
  ];
  const items = [
    "Infographie 3D",
    "Techniques du son et post-production",
    "Bases de la programmation et développement web",
    "Théorie de l’information et psychologie de la communication",
    "Gestion de projet et expression artistique",
    "Marketing fondamental",
  ];
  const parcoursC = [
    {
      title: "Marketing Digital",
      description:
        "Focus sur la stratégie numérique, les réseaux sociaux, la publicité en ligne et le branding",
    },
    {
      title: "Journalisme",
      description:
        " Axé sur les techniques journalistiques modernes, le storytelling numérique et la production audiovisuelle.",
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
        id="sectionL3"
        title="MARKETING DIGITAL ET JOURNALISME (MDJ - L ) - LICENCE"
        subtitle="La Licence en Marketing Digital et Journalisme (MDJ) d’E-Media est une formation multidisciplinaire qui combine innovation digitale, communication et journalisme. Conçue pour répondre aux besoins des entreprises et des médias modernes, elle prépare les étudiants à s’imposer dans des secteurs en pleine transformation."
      />
      <div
        id="sectionL3"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <Section title="À qui s’adresse cette formation ?"></Section>
        {/* À qui s’adresse cette formation ? */}
        <Section bgColor="bg-gray-100">
          <h3 className="text-bold mb-10 text-center text-xl font-semibold dark:text-gray-400 ">
            Cette licence est ouverte à :
          </h3>

          <div className=" text-md mt-4 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {currentWorld.map((item, index) => (
              <MasterCard
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Section>

        <Section
          title="Pourquoi cette licence est essentielle aujourd’hui ?"
          content="Dans un monde hyperconnecté, les compétences en marketing digital et journalisme sont essentielles pour capter et fidéliser l’attention du public."
        >
          <div className=" text-md mt-4 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {currentWorld2.items.map((item, index) => (
              <Card key={index} title={item} items={[]} />
            ))}
          </div>
        </Section>

        <Section
          title="Un programme structuré et pratique"
          content="La Licence MDJ se déroule sur 3 ans, avec un format progressif :"
        >
          <div className="flex flex-wrap justify-center gap-5">
            {licences.map((spec, index) => (
              <MasterCard
                key={index}
                title={spec.title}
                description={spec.description}
              />
            ))}
          </div>
        </Section>
        <Section bgColor="bg-gray-100">
          <h3 className="text-bold mb-10 text-center text-xl font-semibold dark:text-gray-400">
            Les étudiants choisissent parmi deux parcours spécialisés :
          </h3>

          <div className="text-md mt-4 flex flex-wrap justify-center gap-6 text-center font-normal">
            {parcoursC.map((item, index) => (
              <MasterCard
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Section>
        <Section
          title="Débouchés professionnels"
          bgColor="bg-gray-100"
          content="Les diplômés de la Licence MDJ accèdent à des postes variés et dynamiques dans :"
        >
          <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            {careerPaths.map((path, index) => (
              <ProgramCard key={index} program={path} />
            ))}
          </div>
        </Section>

        <Section bgColor="bg-gray-100" title="" content="">
          <div className="flex justify-center ">
            <p className=" m-auto  text-center text-xl font-medium leading-relaxed text-gray-500 md:text-xl">
              Avec cette licence, les diplômés deviennent des professionnels
              prêts à innover dans les secteurs en constante évolution du
              marketing et des médias numériques.
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}
