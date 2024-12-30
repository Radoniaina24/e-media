"use client";

import Section from "./Section";
import Card from "./Card";
import Header from "./Header";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import { CheckIcon } from "@heroicons/react/solid";
import ParcoursCard from "./ParcourCard";
export default function SectionL1() {
  const currentWorld = {
    title: "Cette licence est ouverte à :",
    items: [
      "Bacheliers de toutes filières : Idéal pour ceux souhaitant s’orienter vers des métiers créatifs et stratégiques.",
      "Professionnels en activité : Entrepreneurs, salariés ou fonctionnaires cherchant à renforcer leurs compétences dans le digital et les médias.",
      "Acteurs de tous secteurs : La communication et le marketing étant transversaux, ils concernent les secteurs primaire, secondaire et surtout tertiaire",
    ],
  };
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
      items: [
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
      items: [
        "Journaliste multimédia (web, TV, radio, presse)",
        "Reporter ou correspondant numérique",
        "Producteur de contenus audiovisuels et podcasts",
        "Rédacteur web ou storyteller multimédia",
      ],
    },
    {
      title: "Publicité et Création",
      items: [
        "Directeur artistique ou concepteur-rédacteur",
        "Créateur de campagnes publicitaires et visuelles",
        "Spécialiste en design interactif et production de contenu multimédia",
      ],
    },
    {
      title: "Entrepreneuriat et Développement",
      items: [
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
        id="sectionL4"
        title="LICENCE EN MANAGEMENT (100% EN LIGNE)"
        subtitle="La Licence en Management d’E-Media est une formation fondamentale et polyvalente, exclusivement disponible en formation en ligne, conçue pour former des professionnels capables de comprendre et de gérer les aspects stratégiques, opérationnels et financiers d’une organisation. Avec des spécialisations adaptées aux besoins du marché, ce programme prépare les étudiants à des carrières prometteuses dans les domaines de la gestion, de la finance et du commerce international."
      />
      <div id="sectionL4" className="bg-gray-50 pt-20 font-sans text-gray-800">
        <Section title="À qui s’adresse cette formation ?"></Section>
        {/* À qui s’adresse cette formation ? */}
        <Section bgColor="bg-gray-100">
          <h3 className="text-bold mb-10 text-center text-xl font-semibold ">
            {currentWorld.title}
          </h3>

          <div className=" text-md mt-4 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {currentWorld.items.map((item, index) => (
              <Card key={index} title={item} items={[]} />
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
          <div className="flex justify-center space-x-6">
            {licences.map((spec, index) => (
              <div
                key={index}
                className="max-w-sm transform rounded-lg bg-white p-6 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-teal-500 hover:text-white hover:shadow-xl"
              >
                <h3 className="mb-3 text-2xl font-semibold text-gray-800">
                  {spec.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-600">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </Section>
        <Section bgColor="bg-gray-100">
          <h3 className="text-bold mb-10 text-center text-xl font-semibold ">
            Les étudiants choisissent parmi deux parcours spécialisés :
          </h3>

          <div className="text-md mt-4 flex flex-wrap justify-center gap-6 text-center font-normal">
            {parcoursC.map((item, index) => (
              <ParcoursCard
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
              <Card key={index} title={path.title} items={path.items} />
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
