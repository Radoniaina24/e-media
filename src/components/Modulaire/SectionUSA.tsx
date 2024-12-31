"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS

import Header from "../Licence/Header";
import Section from "../Licence/Section";

import CallToAction from "../Licence/CallToAction";
import Mention from "../Master/Mention";
import CiblePublicCard from "../Master/CiblePublicCard";
import MasterCard from "../Master/MasterCard";
import ProgramDetails from "../Master/ProgramDetails";
import ProgramCard from "../Master/ProgramCard";
import CardCFP from "../CFP/CardCFP";

export default function SectionUSA() {
  const programs = [
    {
      title: "Sonorisation et Lumière de Spectacles",
      description:
        "Techniques de sonorisation pour événements live : réglages audio, placement des équipements, mixage en temps réel. Conception et gestion des éclairages pour créer des ambiances scéniques adaptées.",
    },
    {
      title: "MAO et Production Audio, Photographie",
      description:
        "Apprentissage des logiciels de Musique Assistée par Ordinateur (MAO), techniques d’enregistrement, de mixage et de mastering. Introduction à la photographie : cadrage, éclairage et retouche photo.",
    },
    {
      title: "VFX Production et Post-production",
      description:
        "Découverte des effets visuels numériques pour le cinéma et la télévision. Techniques de compositing, motion design, et intégration d’éléments 3D.",
    },
    {
      title: "Présentation et Influence TV",
      description:
        "Formation à l’art de la communication à l’écran : posture, diction, expression, et stratégies d’influence dans le cadre télévisé.",
    },
    {
      title: "Présentation et Technique Radio",
      description:
        "Techniques d’animation radio : articulation, gestion du direct, et maîtrise des équipements techniques pour une émission professionnelle.",
    },
    {
      title: "Conception d’Émission Radio et TV",
      description:
        "Étapes de création d’un programme : écriture, planification, gestion de contenu, et structuration pour attirer et fidéliser le public.",
    },
    {
      title: "Tournage Vidéo et Pilotage de Drone",
      description:
        "Formation sur la captation vidéo avec caméras et drones. Techniques de cadrage, prises de vue aériennes, et post-production.",
    },
    {
      title: "Infographie 3D",
      description:
        "Introduction à la modélisation, au texturing, à l’animation et au rendu 3D à travers des logiciels spécialisés pour des projets visuels innovants.",
    },
    {
      title: "Web Design et UX/UI",
      description:
        "Création de sites web attractifs et fonctionnels en utilisant les principes de design graphique, ergonomie, et expérience utilisateur. Maîtrise des outils comme Figma, Adobe XD, et WordPress.",
    },
    {
      title: "Développement Web",
      description:
        "Apprentissage des langages de programmation (HTML, CSS, JavaScript, PHP) et des frameworks modernes pour concevoir des sites web dynamiques et performants.",
    },
    {
      title: "Marketing Digital et SEO",
      description:
        "Initiation aux stratégies de marketing en ligne : référencement naturel (SEO), publicité sur les réseaux sociaux, email marketing, et gestion de campagnes publicitaires.",
    },
    {
      title: "Animation et Gestion de Communautés Web",
      description:
        "Techniques pour gérer et animer des communautés en ligne : création de contenu engageant, modération, et stratégie de fidélisation.",
    },
    {
      title: "Création de Contenu pour les Réseaux Sociaux",
      description:
        "Conception et production de contenus visuels et textuels optimisés pour les plateformes sociales. Utilisation d’outils comme Canva, Adobe Creative Suite, et analyse des performances via des indicateurs clés (KPIs).",
    },
    {
      title: "Initiation à la Cybersécurité",
      description:
        "Sensibilisation aux enjeux de sécurité numérique : protection des données, bonnes pratiques en ligne, et bases des outils de cybersécurité.",
    },
  ];
  const atout = [
    {
      title: "Infrastructure de Pointe",
      description:
        "Studios de tournage, équipements professionnels de post-production et laboratoires multimédias.",
    },
    {
      title: "Réseau d’Experts",
      description:
        "Enseignants issus des industries du cinéma, de l’audiovisuel et du numérique, offrant un apprentissage ancré dans la réalité professionnelle.",
    },
    {
      title: "Programmes Innovants",
      description:
        "Formations adaptées aux besoins actuels des industries créatives et numériques.",
    },
    {
      title: "Lien avec l’Industrie",
      description:
        "Opportunités de stages, productions collaboratives et partenariats locaux et internationaux.",
    },
    {
      title: "Orientation Pratique",
      description:
        "Focus sur les compétences techniques, créatives et entrepreneuriales, directement applicables au marché du travail.",
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
        id="usa"
        title="E-MEDIA : UNIVERSITÉ SPÉCIALISÉE EN AUDIOVISUEL, CINÉMATOGRAPHIE ET NUMÉRIQUE"
        subtitle=""
      />
      <div
        id="usa"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <Section
          title="Identité et Mission"
          content="E-media est la première et unique université à Madagascar dédiée exclusivement aux métiers de l’audiovisuel, de la cinématographie et du numérique. Grâce à des infrastructures modernes et à un réseau de professionnels de renom, E-media forme les talents de demain dans des secteurs en pleine expansion.

"
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
          content="E-media ambitionne de devenir un centre d’excellence et de référence en Afrique pour les métiers créatifs et numériques, en formant une nouvelle génération de professionnels capables d’innover et de contribuer au rayonnement culturel et économique de Madagascar.

"
        ></Section>

        <Section bgColor="bg-gray-200">
          <h2 className=" my-10 mb-14  text-xl font-semibold dark:text-white">
            Programmes de formations modulaires proposés par l&apos;E-media :
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
      </div>
    </div>
  );
}
