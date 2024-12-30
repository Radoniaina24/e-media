"use client";

import Section from "./Section";
import Card from "./Card";
import Header from "./Header";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import { CheckIcon } from "@heroicons/react/solid";
import ParcoursCard from "./ParcourCard";
import SpecializationCard from "./SpecializationCard";
import CallToAction from "./CallToAction";
export default function SectionL1() {
  const currentWorld = {
    title: "Cette licence est ouverte à :",
    items: [
      "Les bacheliers de toutes filières : Idéal pour ceux qui souhaitent construire une carrière dans les domaines du management, de la finance ou du commerce.",
      "Les étudiants souhaitant une base solide en gestion pour poursuivre des études supérieures ou entrer directement sur le marché du travail.",
      "Les professionnels en début de carrière cherchant à acquérir des compétences théoriques et pratiques en gestion.",
    ],
  };
  const currentWorld2 = {
    items: [
      "Finance et Comptabilité",
      "Administration des Affaires",
      "Commerce International",
    ],
  };
  const specializations = [
    {
      title: "Finance et Comptabilité",
      description:
        "Ce parcours est axé sur la maîtrise des outils et concepts financiers et comptables nécessaires pour gérer efficacement les ressources financières d’une organisation.",
      objectives: [
        "Comprendre et appliquer les principes fondamentaux de la finance et de la comptabilité.",
        "Élaborer des analyses financières, des bilans et des budgets.",
        "Apprendre à gérer les risques financiers et optimiser la rentabilité.",
      ],
      careers: [
        "Comptable, assistant financier ou analyste junior.",
        "Auditeur interne, assistant contrôleur de gestion.",
        "Responsable de la comptabilité ou de la trésorerie en entreprise.",
      ],
    },
    {
      title: "Administration des Affaires",
      description:
        "Cette spécialisation offre une vision globale de la gestion des organisations et des projets, avec un accent sur les compétences managériales et stratégiques.",
      objectives: [
        "Acquérir les bases de la gestion des entreprises, des ressources humaines et de la stratégie.",
        "Développer des compétences en leadership et en prise de décision.",
        "Comprendre les principes de la gestion de projet et de l’innovation.",
      ],
      careers: [
        "Assistant de direction, chef de projet junior ou chargé d’affaires.",
        "Coordinateur administratif ou gestionnaire d’équipe.",
        "Entrepreneur ou collaborateur dans des start-ups et PME.",
      ],
    },
    {
      title: "Commerce International",
      description:
        "Ce parcours est conçu pour former des professionnels capables de gérer les opérations commerciales et les échanges dans un contexte globalisé.",
      objectives: [
        "Comprendre les mécanismes du commerce international et des accords commerciaux.",
        "Maîtriser les techniques de négociation et de gestion interculturelle.",
        "Apprendre les fondamentaux de la logistique et du transport international.",
      ],
      careers: [
        "Assistant import-export, coordinateur logistique ou chargé de clientèle internationale.",
        "Analyste de marché, responsable des opérations commerciales.",
        "Collaborateur dans les entreprises multinationales ou les organisations non gouvernementales.",
      ],
    },
  ];
  const why = {
    items: [
      "Une formation complète et adaptable : Prépare les étudiants à entrer directement sur le marché du travail ou à poursuivre des études supérieures.",
      "Un enseignement pratique et concret : Études de cas, projets et stages en entreprise pour une immersion professionnelle.",
      "Des spécialisations stratégiques : Répondant aux besoins actuels et futurs des entreprises locales et internationales.",
    ],
  };
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
        <Section title="Spécialisations">
          <div className=" text-md mt-4 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {currentWorld2.items.map((item, index) => (
              <Card key={index} title={item} items={[]} />
            ))}
          </div>
        </Section>
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
        <Section>
          <h1 className="mb-6 text-3xl font-bold text-gray-800">
            Spécialisations proposées
          </h1>
          {specializations.map((spec, index) => (
            <SpecializationCard
              key={index}
              title={spec.title}
              description={spec.description}
              objectives={spec.objectives}
              careers={spec.careers}
            />
          ))}
        </Section>

        <Section title="Pourquoi choisir la Licence en Management d’E-Media ?">
          <div className=" text-md mt-4 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {why.items.map((item, index) => (
              <Card key={index} title={item} items={[]} />
            ))}
          </div>
        </Section>

        {/* Call to Action */}
        <Section bgColor="bg-gradient-to-r from-blue-500 to-teal-400 text-white">
          <CallToAction
            heading={"Rejoignez-nous dès maintenant"}
            description={
              " Préparez-vous à devenir un acteur clé dans le monde des affaires !"
            }
            buttonText={"Préinscriptions ouvertes ici"}
            buttonLink={""}
          />
        </Section>
      </div>
    </div>
  );
}
