"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import ProgramCard from "../Master/ProgramCard";
import MasterCard from "../Master/MasterCard";
import Section from "../Licence/Section";
import CallToAction from "../Licence/CallToAction";
import Card from "../Licence/Card";
import Header from "../Licence/Header";
import CategoryUniversitaires from "./CategoriesUniversitaires";

export default function Universitaire() {
  const careerPaths = [
    {
      title: "Infrastructures informatiques et réseaux",
      details: [
        "Administrateur réseau",
        "Technicien en maintenance IT",
        "Ingénieur en systèmes et réseaux",
      ],
    },
    {
      title: "Développement logiciel et solutions numériques",
      details: [
        "Développeur d’applications mobiles et web",
        "Ingénieur logiciel",
        "Chef de projet IT",
      ],
    },
    {
      title: "Télécommunications",
      details: [
        "Spécialiste en télécommunication : Gestion et optimisation des infrastructures de communication.",
        "Expert en IoT (Internet des objets) : Développement et déploiement de solutions connectées.",
      ],
    },
    {
      title: "Web et Digital",
      details: [
        "Webmaster ou web designer : Création et gestion de sites internet ergonomiques et esthétiques.",
        "Responsable en marketing digital : Développement de stratégies numériques pour améliorer la visibilité et les performances des entreprises en ligne.",
        "Consultant en transformation digitale : Accompagnement des organisations dans leur transition vers des solutions numériques.",
      ],
    },
    {
      title: "Industries émergentes et spécialisées",
      details: [
        "Expert en cybersécurité : Sécurisation des données et des systèmes face aux menaces numériques croissantes.",
        "pécialiste en data science : Analyse et exploitation des données pour une meilleure prise de décision stratégique.",
        "Ingénieur en systèmes embarqués : Développement de logiciels pour dispositifs connectés (automobile, santé, domotique).",
      ],
    },
  ];
  const specializations = [
    {
      title: "Réseau et Système",
      description: "Gestion et optimisation des infrastructures IT.",
    },
    {
      title: "Télécommunication",
      description: "Technologies avancées et communication numérique.",
    },
    {
      title: "Génie Logiciel",
      description:
        "Développement d’applications et solutions logicielles innovantes.",
    },
  ];
  const licences = [
    {
      title: "L1",
      description: "10 mois pour maîtriser les fondamentaux des TIC.",
    },
    {
      title: "L2",
      description:
        "10 mois pour développer des compétences techniques avancées.",
    },
    {
      title: "L3",
      description:
        "10 mois pour se spécialiser et se préparer aux réalités professionnelles.",
    },
  ];

  const currentWorld = {
    title: "Un secteur en pleine croissance:",
    items: [
      "Les technologies numériques représentent aujourd’hui un pilier économique, avec une demande croissante de professionnels qualifiés dans des domaines comme la cybersécurité, le cloud computing, ou encore les solutions IoT.",
      "À Madagascar et dans l’Océan Indien, le développement rapide des infrastructures numériques et des télécommunications offre des opportunités sans précédent aux diplômés en NTIC.",
    ],
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Type d'animation
    });
  }, []);
  return (
    <div className="dark:bg-gray-800">
      {/* Header */}
      <Header id="universitaire" title="FORMATION UNIVERSITAIRES" subtitle="" />
      <div
        id="universitaire"
        className="bg-gray-50 pt-20  font-sans text-gray-800 dark:bg-gray-900"
      >
        <Section
          title="Formation Universitaire"
          content="Les formations universitaires offrent des programmes d'enseignement supérieur complets, en présentiel et en ligne, permettant aux étudiants de se préparer à des carrières professionnelles durables. Ces formations couvrent des domaines variés  avec un enseignement théorique et pratique dispensé par des experts. Elles sont conçues pour répondre aux besoins du marché de l'emploi et offrent une flexibilité qui permet de concilier études et vie personnelle. À l'issue de ces formations, les étudiants peuvent entrer sur le marché du travail ou poursuivre des études avancées."
        ></Section>
        <CategoryUniversitaires />
      </div>
    </div>
  );
}
