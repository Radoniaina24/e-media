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

export default function SectionM4() {
  const master = [
    {
      title: "M1",
      description:
        "10 mois pour consolider les bases théoriques et pratiques des disciplines clés du management et de la gestion.",
    },
    {
      title: "M2",
      description:
        "10 mois pour se spécialiser dans l’une des trois disciplines proposées et développer des projets stratégiques.",
    },
    {
      title: "Mémoire de fin d’études",
      description:
        " Un travail de recherche appliquée ou un projet pratique destiné à répondre à une problématique réelle d’entreprise, permettant de valider le diplôme.",
    },
  ];
  const currentWorld = {
    title: "Ce Master s’adresse à:",
    items: [
      "Les titulaires d’un diplôme de Licence ou d’un Master dans des domaines tels que la finance, la gestion, l’économie, ou le commerce international.",
      "Les professionnels en activité : Managers, entrepreneurs ou cadres souhaitant renforcer leurs compétences et accéder à des postes à responsabilités.",
      "Les décideurs d’entreprise désireux de maîtriser les outils modernes de gestion et de stratégie.",
    ],
  };
  const careerPaths = {
    items: [
      "Responsable des opérations internationales ou des exportations.",
      "Consultant en commerce international ou analyste de marché.",
      "Responsable de la logistique ou gestionnaire des achats internationaux.",
    ],
  };

  const avantages = {
    items: [
      "Un programme tourné vers l’international : Adapté aux standards mondiaux avec un accent sur les pratiques locales et globales.",
      "Un encadrement par des experts : Enseignants et professionnels reconnus dans leur domaine.",
      "Une employabilité immédiate : Les diplômés accèdent rapidement à des postes stratégiques dans des organisations de premier plan.",
    ],
  };

  const programs = [
    {
      title: "Finance et Comptabilité",
      description:
        "Cette spécialisation prépare les étudiants à devenir des experts financiers capables d’analyser, de gérer et de superviser les ressources financières d’une organisation.",
      content: [
        "Maîtriser les outils de gestion financière avancée et de comptabilité analytique.",
        "Comprendre les mécanismes des marchés financiers et des investissements.",
        "Piloter des projets de financement, d’évaluation d’actifs et de gestion des risques.",
        "Développer des compétences en audit et contrôle de gestion.",
      ],
      opportunities: [
        "Directeur financier (CFO), contrôleur de gestion, auditeur financier.",
        "Analyste financier, gestionnaire de portefeuille ou conseiller en investissement.",
        "Consultant en stratégie financière ou responsable comptable.",
      ],
    },
    {
      title: "Administration des Affaires",
      description:
        "Ce parcours est conçu pour former des dirigeants capables de piloter une organisation, de développer des stratégies efficaces et de prendre des décisions éclairées dans des environnements complexes.",
      content: [
        "Apprendre à élaborer et mettre en œuvre des stratégies d’entreprise.",
        "Développer des compétences en gestion des ressources humaines, leadership et gestion du changement.",
        "Comprendre les enjeux de la gouvernance et de la responsabilité sociétale des entreprises (RSE).",
        "Acquérir une expertise en négociation, innovation et entrepreneuriat.",
      ],
      opportunities: [
        "Directeur général, responsable des opérations ou consultant en gestion stratégique.",
        "Responsable des ressources humaines ou chef de projet en transformation organisationnelle.",
        "Entrepreneur ou dirigeant de PME.",
      ],
    },
    {
      title: "Commerce International",
      description:
        "Cette spécialisation est orientée vers les défis et opportunités du commerce mondial, en formant des experts en gestion des échanges internationaux et en développement d’affaires sur des marchés globaux.",
      content: [
        "Comprendre les règles du commerce international et les accords commerciaux.",
        "Développer des compétences en logistique, transport et gestion des chaînes d’approvisionnement (supply chain).",
        "Analyser les tendances des marchés mondiaux et identifier les opportunités commerciales.",
        "Maîtriser les techniques de négociation interculturelle et les stratégies d’expansion internationale.",
      ],
      opportunities: [
        "Directeur des ventes internationales, gestionnaire de commerce extérieur.",
        "Consultant en développement international et stratégie commerciale.",
        "Responsable logistique internationale ou chef de projet export.",
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
        id="master4"
        title="MBA SPÉCIALISÉ - MASTER OF BUSINESS ADMINISTRATION (FORMATION 100% EN LIGNE) "
        subtitle="Le MBA Spécialisé d’E-Media est une formation d’excellence destinée à former des cadres supérieurs et des leaders capables de piloter des projets stratégiques et de gérer des organisations dans un environnement économique globalisé. Exclusivement disponible en formation en ligne. Ce programme s’adresse à des professionnels ambitieux, désireux d’acquérir une expertise approfondie dans leur domaine tout en développant des compétences managériales et décisionnelles avancées."
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736772102/MBA-SP%C3%89CIALIS%C3%89---MASTER-OF-BUSINESS-ADMINISTRATION-_FORMATION-100_-EN-LIGNE_vplf1h.jpg"
      />
      <div
        id="master4"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <ScrollComponent text="MBA SPÉCIALISÉ - MASTER OF BUSINESS ADMINISTRATION (FORMATION 100% EN LIGNE)" />
        <Mention specialisation=" Marketing Digital et Journalisme" />
        <Section title="À qui s’adresse ce MBA ?"></Section>
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
          content="Le MBA Spécialisé se déroule sur 2 ans après la Licence (4 semestres) :"
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
          title="Débouchés professionnels"
          bgColor="bg-gray-100"
          content="Les diplômés du Master MDJ disposent des compétences nécessaires pour occuper des postes stratégiques et de leadership dans :"
        >
          <div className=" text-md mt-4 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {careerPaths.items.map((item, index) => (
              <Card key={index} title={item} items={[]} />
            ))}
          </div>
        </Section>
        <Section
          title="Avantages du MBA Spécialisé d’E-Media"
          bgColor="bg-gray-100"
        >
          <div className=" text-md mt-4 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {avantages.items.map((item, index) => (
              <Card key={index} title={item} items={[]} />
            ))}
          </div>
        </Section>

        <Section bgColor="bg-primary">
          <CallToAction
            description={
              "Rejoignez E-Media dès aujourd’hui et devenez un leader dans votre domaine !"
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
