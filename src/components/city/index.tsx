"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import Link from "next/link";
import FooterCity from "./Footer";
import HeroCity from "./HeroCity";
import AboutCity from "./AboutCity";
import OpportunitiesCity from "./OpportunitiesCity";
import VillageNumerique from "./VillageNumerique";
export default function CityProject() {
  //Le Village Numérique : Pilier de la Transition Numérique à Madagascar
  const villageNumerique = [
    {
      title: "Infrastructures Éducatives et Technologiques",
      points: [
        "Campus connecté : Équipé des dernières technologies pour des formations en intelligence artificielle, cybersécurité, blockchain et entrepreneuriat numérique.",
        "Studios audiovisuels et numériques : Répondant aux normes internationales, pour développer des talents dans l’audiovisuel et le cinéma numérique.",
        "Centre de démonstration technologique : Permettre aux grandes entreprises et startups locales de tester et présenter leurs innovations.",
      ],
    },
    {
      title: "Incubateur pour Startups",
      points: [
        "Espaces de coworking : Offrant un environnement dynamique pour stimuler la collaboration et l’innovation.",
        "Accès à des investisseurs : Organisation de forums technologiques et d’événements pour connecter les startups malgaches et africaines avec des partenaires financiers internationaux.",
        "Soutien au développement des projets : Coaching, mentorat et financement initial pour transformer les idées en entreprises prospères.",
      ],
    },
    {
      title: "Attraction des Talents Locaux et Internationaux",
      points: [
        "Formation des jeunes malgaches : Offrir une éducation technologique accessible pour donner à la jeunesse les compétences nécessaires pour exceller dans un monde numérique.",
        "Attirer les étudiants africains : Madagascar, grâce à ses coûts abordables et à la qualité de l’éducation offerte par le Village Numérique, peut devenir une destination de choix pour les étudiants africains désireux d’acquérir une formation de pointe.",
      ],
    },
    {
      title: "Engagement Écoresponsable",
      points: [
        "Le Village Numérique intègre des pratiques durables : énergies renouvelables, gestion écologique des déchets et utilisation de matériaux locaux pour réduire l’impact environnemental.",
      ],
    },
    {
      title: "Impact du Projet sur Madagascar et l’Afrique",
      subSections: [
        {
          title: "Renforcement de l’Écosystème Numérique",
          points: [
            "Le Village Numérique jouera un rôle clé dans la formation de talents qualifiés pour soutenir le secteur des BPO, des services numériques et de l’innovation technologique.",
            "En stimulant les startups locales, il contribuera à la création d’un écosystème entrepreneurial robuste.",
          ],
        },
        {
          title: "Rayonnement International de Madagascar",
          points: [
            "Le projet positionnera Madagascar comme une destination éducative et technologique en Afrique et dans l’Océan Indien.",
            "Les collaborations internationales renforceront la notoriété et la crédibilité du pays sur la scène mondiale.",
          ],
        },
        {
          title: "Transformation Socio-Économique",
          points: [
            "Création d’emplois : Des milliers d’emplois directs et indirects seront générés dans les secteurs de l’éducation, de la technologie et des services.",
            "Éducation accessible : Les jeunes malgaches et africains auront accès à des formations certifiées et reconnues mondialement.",
            "Réduction de la fracture numérique : En donnant accès à des outils modernes, le Village Numérique contribuera à combler l’écart technologique entre les zones rurales et urbaines.",
          ],
        },
      ],
    },
  ];
  //Impact du Projet sur Madagascar et l’Afrique
  const impactSurEcosysteme = [
    {
      title: "Renforcement de l’Écosystème Numérique",
      points: [
        "Le Village Numérique jouera un rôle clé dans la formation de talents qualifiés pour soutenir le secteur des BPO, des services numériques et de l’innovation technologique.",
        "En stimulant les startups locales, il contribuera à la création d’un écosystème entrepreneurial robuste.",
      ],
    },
    {
      title: "Rayonnement International de Madagascar",
      points: [
        "Le projet positionnera Madagascar comme une destination éducative et technologique en Afrique et dans l’Océan Indien.",
        "Les collaborations internationales renforceront la notoriété et la crédibilité du pays sur la scène mondiale.",
      ],
    },
    {
      title: "Transformation Socio-Économique",
      points: [
        "Création d’emplois : Des milliers d’emplois directs et indirects seront générés dans les secteurs de l’éducation, de la technologie et des services.",
        "Éducation accessible : Les jeunes malgaches et africains auront accès à des formations certifiées et reconnues mondialement.",
        "Réduction de la fracture numérique : En donnant accès à des outils modernes, le Village Numérique contribuera à combler l’écart technologique entre les zones rurales et urbaines.",
      ],
    },
  ];
  //Chiffres Clés et Opportunités
  const chiffresClesEtOpportunites = [
    {
      title: "Statistiques Économiques de Madagascar",
      points: [
        "Croissance annuelle du PIB : +5% en moyenne ces dernières années.",
        "Plus de 40 000 emplois créés dans le secteur des BPO et du numérique en 2023.",
        "Augmentation de 10 % par an de la connectivité Internet, soutenant l’émergence des services numériques.",
      ],
    },
    {
      title: "Opportunités dans l’Océan Indien",
      points: [
        "Population cumulée de plus de 45 millions dans les îles voisines, avec une demande croissante en services technologiques et éducatifs.",
        "Un marché en pleine expansion : Les services numériques et éducatifs en Afrique devraient atteindre une valeur de plus de 300 milliards USD d’ici 2025.",
      ],
    },
  ];
  //Invitation à Investir
  const invitationAInvestir = {
    title: "Invitation à Investir",
    description:
      "Le Village Numérique E-Media représente une opportunité unique de participer à la transformation numérique et éducative de Madagascar et de l’Océan Indien. En rejoignant ce projet, les investisseurs et partenaires auront un impact direct sur :",
    points: [
      "L’autonomisation des jeunes talents africains.",
      "La création d’un écosystème technologique durable et prospère.",
      "Le positionnement stratégique de Madagascar comme un acteur clé de l’innovation et de l’éducation en Afrique.",
    ],
  };
  const text1 =
    "Faites partie d’une initiative visionnaire qui transforme l’éducation et l’innovation en Afrique. Ensemble, bâtissons un hub numérique d’exception pour Madagascar et l’Océan Indien.";
  const text2 =
    "Contactez-nous dès aujourd’hui pour discuter de votre rôle dans cette révolution numérique :";
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);
  return (
    <div className="bg-gray-50">
      <HeroCity />
      <AboutCity />
      <OpportunitiesCity />
      <VillageNumerique />
      <FooterCity />
    </div>
  );
}
