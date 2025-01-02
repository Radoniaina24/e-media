"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import Header from "../Licence/Header";
import Section from "../Licence/Section";
import CardCFP from "../CFP/CardCFP";
import ScrollComponent from "../Scroll/ScrollComponent";

export default function SectionUST() {
  const programs = [
    {
      title: "Introduction à la Robotique Ludique",
      description:
        "Premiers pas dans l’assemblage et la programmation de robots simples.",
    },
    {
      title: "Cyber-hygiène et Sécurité Informatique",
      description:
        "Protection des données sensibles dans un environnement numérique.",
    },
    {
      title: "Initiation au Machine Learning",
      description:
        "Formation accélérée pour démystifier l’apprentissage automatique.",
    },
    {
      title: "IoT et Dispositifs Connectés Simples",
      description: "Conception et déploiement d’applications IoT accessibles.",
    },
    {
      title: "Analyse de Données avec Python",
      description:
        "Découverte des bases du langage Python pour la manipulation et l’analyse de données.",
    },
    {
      title: "Blockchain et Applications Décentralisées",
      description:
        "Introduction aux concepts de la blockchain et à leur utilisation dans des secteurs variés.",
    },
    {
      title: "Création d’Applications Mobiles Simples",
      description:
        "Développement d’applications pour Android et iOS avec des outils accessibles.",
    },
    {
      title: "Énergie Renouvelable et Technologies Intelligentes",
      description:
        "Initiation aux systèmes énergétiques intelligents et aux solutions solaires connectées.",
    },
    {
      title:
        "Cartographie Numérique et SIG (Systèmes d’Information Géographique)",
      description:
        "Utilisation de logiciels SIG pour analyser et représenter des données géospatiales.",
    },
    {
      title: "Impression 3D et Prototypage Rapide",
      description:
        "Apprentissage des bases de l’impression 3D et de la création de prototypes fonctionnels.",
    },
    {
      title: "Technologies Éducatives Interactives",
      description:
        "Exploration des outils numériques pour l’enseignement, incluant la réalité augmentée et les tableaux interactifs.",
    },
    {
      title: "Introduction à la Biotechnologie Numérique",
      description:
        "Sensibilisation aux applications de l’informatique dans le domaine de la biotechnologie.",
    },
    {
      title: "Optimisation des Processus Industriels avec l’IA",
      description:
        "Introduction aux outils et méthodes pour intégrer l’intelligence artificielle dans les processus industriels.",
    },
    {
      title: "Techniques de Réalité Virtuelle et Augmentée",
      description:
        "Conception et déploiement d’expériences immersives pour des applications pratiques.",
    },
    {
      title: "Économie Circulaire et Solutions Numériques",
      description:
        "Exploration des approches numériques pour favoriser des modèles durables en entreprise.",
    },
  ];

  const atout = [
    {
      title: "Expertise Technologique",
      description:
        "Programmes innovants en IA, IoT, énergies renouvelables et cybersécurité.",
    },
    {
      title: "Enseignement Pratique",
      description:
        "Laboratoires modernes et projets concrets pour une application immédiate des connaissances.",
    },
    {
      title: "Collaboration Internationale",
      description:
        "Partenariats académiques et industriels pour des opportunités globales.",
    },
    {
      title: "Interdisciplinarité",
      description:
        "Formation intégrant technologie, entrepreneuriat et développement durable.",
    },
    {
      title: "Impact Local et Durable",
      description:
        "Solutions adaptées aux défis régionaux, notamment en agriculture, santé et énergie.",
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
        id="ust"
        title="UST-IO : UNIVERSITY OF SCIENCE AND TECHNOLOGY - INDIAN OCEAN"
        subtitle=""
      />
      <div
        id="ust"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <ScrollComponent text="UST-IO : UNIVERSITY OF SCIENCE AND TECHNOLOGY - INDIAN OCEAN" />
        <Section
          title="Identité et Mission"
          content="L’UST-IO est une institution clé à Madagascar, dédiée à la formation et à l’innovation dans les domaines des sciences et des nouvelles technologies. Elle vise à former des professionnels compétents pour relever les défis de la transformation digitale et du développement durable."
        ></Section>
        <Section bgColor="bg-gray-200">
          <h2 className=" my-10 mb-14  text-xl font-semibold dark:text-white">
            Atouts Distinctifs
          </h2>
          <div className=" grid grid-cols-1 justify-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {atout.map((point, index) => (
              <CardCFP
                key={index}
                title={point.title}
                description={point.description}
              />
            ))}
          </div>
        </Section>

        <Section
          title="Vision"
          content="L’UST-IO ambitionne de devenir un moteur de transformation digitale et un incubateur de talents pour Madagascar et la région de l’océan Indien, alliant excellence académique et impact communautaire."
        ></Section>

        <Section bgColor="bg-gray-200">
          <h2 className=" my-10 mb-14  text-xl font-semibold dark:text-white">
            Programmes de formations modulaires :
          </h2>
          <div className=" grid grid-cols-1 justify-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((point, index) => (
              <CardCFP
                key={index}
                title={point.title}
                description={point.description}
              />
            ))}
          </div>
        </Section>
        <Section bgColor="bg-gray-200">
          <div className="mx-auto max-w-2xl rounded-lg bg-gray-300 p-6 shadow-md dark:bg-gray-800">
            <p className="text-lg font-medium leading-relaxed text-gray-700 dark:text-gray-300">
              Ces thèmes s&apos;inscrivent dans l&apos;objectif d&apos;UST-IO de
              promouvoir l&apos;innovation technologique et de répondre aux
              besoins émergents de la transformation digitale, tout en restant
              complémentaires aux formations proposées par d&apos;autres
              institutions comme E-media.
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}
