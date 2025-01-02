"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import Header from "../Licence/Header";
import Section from "../Licence/Section";
import CardCFP from "../CFP/CardCFP";
import ScrollComponent from "../Scroll/ScrollComponent";

export default function SectionAELI() {
  const programs = [
    {
      title: "Gestion de Projet Agile",
      description:
        "Adopter les méthodologies Scrum et Kanban pour une gestion flexible et efficace.",
    },
    {
      title: "Leadership Transformationnel en Entreprise",
      description:
        "Techniques pour inspirer, motiver et accompagner les équipes vers le changement.",
    },
    {
      title: "Entrepreneuriat en Agrobusiness",
      description:
        "Identifier les opportunités dans l’agriculture durable et développer des projets viables.",
    },
    {
      title: "Introduction aux Énergies Renouvelables",
      description:
        "Comprendre les systèmes solaires, éoliens et autres sources d’énergie verte pour proposer des solutions durables.",
    },
    {
      title: "Techniques de Négociation pour Leaders",
      description:
        "Renforcer les capacités d’influence, de persuasion et de gestion des conflits.",
    },
    {
      title: "Design Thinking et Innovation",
      description:
        "Stimuler la créativité et résoudre des problèmes complexes grâce à une approche centrée sur l’utilisateur.",
    },
    {
      title: "Finance pour Entrepreneurs",
      description:
        "Apprendre les bases de la gestion financière, des levées de fonds et de l’élaboration d’un business plan.",
    },
    {
      title: "Création et Gestion de Startups",
      description:
        "De l’idée au marché : étapes pour lancer et développer une entreprise innovante.",
    },
    {
      title: "Management Durable et Éthique",
      description:
        "Implémenter des pratiques responsables et durables dans la gestion d’entreprise.",
    },
    {
      title: "Entrepreneuriat Social",
      description:
        "Créer des projets qui combinent impact social et viabilité économique.",
    },
    {
      title: "Marketing Digital pour Entrepreneurs",
      description:
        "Stratégies pour construire une marque forte et acquérir des clients en ligne.",
    },
    {
      title: "Leadership Inclusif et Diversité",
      description:
        "Créer des environnements inclusifs qui valorisent les talents diversifiés.",
    },
    {
      title: "Résilience et Adaptabilité pour Leaders",
      description:
        "Renforcer les compétences pour surmonter les crises et s’adapter à des environnements changeants.",
    },
    {
      title: "Introduction à la Logistique et Supply Chain",
      description:
        "Comprendre les bases de la gestion des chaînes d’approvisionnement pour des entreprises performantes.",
    },
    {
      title: "Analyse des Données pour la Prise de Décision",
      description:
        "Apprendre à exploiter les données pour orienter les stratégies et décisions d’entreprise.",
    },
    {
      title: "Entrepreneuriat dans les Industries Culturelles et Créatives",
      description:
        "Capitaliser sur les ressources culturelles pour créer des entreprises innovantes.",
    },
    {
      title: "Leadership et Communication en Contexte de Crise",
      description:
        "Développer des stratégies de communication efficaces pour gérer les crises et maintenir la confiance.",
    },
    {
      title: "Entrepreneuriat et Financement Vert",
      description:
        "Identifier et mobiliser des financements pour des projets respectueux de l’environnement.",
    },
    {
      title: "Impact Investing et Mesure de l’Impact",
      description:
        "Comprendre comment investir pour générer à la fois un rendement financier et un impact social ou environnemental.",
    },
    {
      title: "Intelligence Émotionnelle pour Managers",
      description:
        "Utiliser l’intelligence émotionnelle pour améliorer les relations professionnelles et le leadership.",
    },
  ];

  const atout = [
    {
      title: "Approche Holistique",
      description:
        "AELI intègre des aspects techniques, managériaux et éthiques dans ses formations, assurant une préparation complète des participants aux réalités du monde professionnel.",
    },
    {
      title: "Réseau d’Experts",
      description:
        "L’institut collabore avec des professionnels et des académiciens reconnus, offrant aux apprenants une perspective pratique et actuelle des défis et opportunités dans leurs domaines respectifs.",
    },
    {
      title: "Programmes Personnalisés",
      description:
        "Les formations sont adaptées aux besoins spécifiques des individus et des organisations, permettant une application directe des compétences acquises.",
    },
    {
      title: "Focus sur l’Innovation",
      description:
        "AELI encourage la pensée créative et l’innovation, aidant les participants à développer des solutions uniques aux problèmes contemporains.",
    },
    {
      title: "Engagement envers le Développement Durable",
      description:
        "L’institut met l’accent sur des pratiques durables et éthiques, formant des leaders conscients de leur impact sur la société et l’environnement.",
    },
  ];
  const methods = [
    {
      title: "Ateliers Interactifs",
      description: "Favoriser l’apprentissage par la pratique.",
    },
    {
      title: "Cas Pratiques et Simulations",
      description: "Basés sur des scénarios réels pour une immersion totale.",
    },
    {
      title: "Encadrement Personnalisé",
      description: "Coaching par des experts nationaux et internationaux.",
    },
    {
      title: "Supports Digitaux Modernes",
      description:
        "Accès à des ressources en ligne pour prolonger l’apprentissage.",
    },
  ];

  const atout2 = [
    {
      title: "Expertise Reconnue",
      description:
        "Nos institutions sont leaders dans leurs domaines respectifs, garantissant une formation de qualité.",
    },
    {
      title: "Partenariats Stratégiques",
      description:
        "Collaboration avec des experts internationaux et des entreprises de renom.",
    },
    {
      title: "Infrastructure de Pointe",
      description:
        "Plateformes technologiques avancées et studios professionnels.",
    },
    {
      title: "Programmes Adaptés",
      description:
        "Conception sur mesure pour répondre aux besoins spécifiques des organisations.",
    },
    {
      title: "Flexibilité Logistique",
      description:
        "Formations disponibles en présentiel, en ligne ou hybrides.",
    },
  ];

  const benefits = [
    {
      title: "Amélioration de la Productivité",
      description: "Employés mieux formés et plus efficaces.",
    },
    {
      title: "Montée en Compétences Ciblées",
      description: "Acquisition de savoir-faire précis et opérationnels.",
    },
    {
      title: "Valorisation des Talents",
      description:
        "Renforcement de la motivation et de la rétention des collaborateurs.",
    },
    {
      title: "Réduction des Coûts",
      description:
        "Programmes intensifs et courts, limitant l’impact sur les activités quotidiennes.",
    },
  ];
  const details = [
    {
      title: "Durée",
      description: "Entre 1 et 4 semaines, selon le module choisi.",
    },
    {
      title: "Lieu",
      description: "Dans nos infrastructures modernes “Emedia Nanisana”.",
    },
    {
      title: "Tarification",
      description:
        "Forfaitaire et compétitive, adaptée à la taille et aux besoins des groupes.",
    },
    {
      title: "Inscription",
      description:
        "Via notre plateforme en ligne ou par contact direct avec notre équipe.",
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
        id="aeli"
        title="AELI : L’AFRICAN ENTREPRENEURSHIP AND LEADERSHIP INSTITUTE"
        subtitle="L’African Entrepreneurship and Leadership Institute (AELI) est une institution dédiée à la formation de leaders et d’entrepreneurs en Afrique. Elle se distingue par une approche holistique, visant à doter les individus des compétences nécessaires pour innover et créer de la valeur dans divers secteurs."
      />
      <div
        id="aeli"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <ScrollComponent text="AELI : L’AFRICAN ENTREPRENEURSHIP AND LEADERSHIP INSTITUTE" />
        <Section
          title="Identité et Mission"
          content="AELI se consacre à la promotion de l’entrepreneuriat et du leadership transformationnel. L’institut offre des programmes conçus pour stimuler l’innovation, la gestion de projet agile, le leadership en entreprise, l’agrobusiness, les énergies renouvelables et les techniques de négociation. L’objectif est de former des leaders capables de relever les défis contemporains et de contribuer au développement durable du continent africain."
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
          title="Programmes Innovants"
          content="AELI propose une gamme de programmes couvrant des domaines tels que la gestion de projet agile, le leadership transformationnel, l’entrepreneuriat en agrobusiness, les énergies renouvelables et les techniques de négociation. Ces formations sont conçues pour être attrayantes et pertinentes, répondant aux besoins actuels du marché et aux aspirations des professionnels africains."
        ></Section>
        <Section
          bgColor="bg-gray-200"
          title="Vision"
          content="AELI aspire à être un catalyseur de changement en Afrique, en formant des leaders et des entrepreneurs capables de transformer leurs communautés et de contribuer positivement à l’économie mondiale. En mettant l’accent sur l’innovation, l’éthique et le développement durable, l’institut joue un rôle crucial dans la préparation de la prochaine génération de leaders africains."
        ></Section>
        <Section bgColor="bg-gray-200">
          <div className="mx-auto mt-8 max-w-3xl rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <p className="text-xl  leading-relaxed text-gray-800 dark:text-gray-300">
              En somme, l&apos;African Entrepreneurship and Leadership Institute
              se positionne comme un acteur clé dans le paysage éducatif
              africain, offrant des formations de qualité qui répondent aux
              défis et aux opportunités du continent.
            </p>
          </div>
        </Section>
        <Section bgColor="bg-gray-200">
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

        <div className="mx-auto my-10 max-w-2xl rounded-lg bg-gray-300 p-6 shadow-md dark:bg-gray-800">
          <p className="text-lg font-medium leading-relaxed text-gray-700 dark:text-gray-300">
            Ces thèmes visent à préparer des leaders visionnaires, capables
            d&apos;innover et de faire face aux défis contemporains, tout en
            favorisant la création de valeur durable.
          </p>
        </div>

        <Section bgColor="bg-gray-200">
          <h2 className=" my-10 mb-14  text-xl font-semibold dark:text-white">
            Approche Méthodologique
          </h2>
          <h4 className=" mb-10 text-start text-lg  leading-relaxed text-gray-800 dark:text-gray-300">
            Les formations suivent une approche structurée et dynamique pour
            maximiser l&apos;impact.
          </h4>
          <div className=" grid grid-cols-1 justify-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {methods.map((point, index) => (
              <CardCFP
                key={index}
                title={point.title}
                description={point.description}
              />
            ))}
          </div>
        </Section>

        <Section>
          <h2 className=" my-10 mb-14 text-2xl font-semibold dark:text-white">
            Nos Atouts
          </h2>
          <div className=" grid grid-cols-1 justify-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {atout2.map((point, index) => (
              <CardCFP
                key={index}
                title={point.title}
                description={point.description}
              />
            ))}
          </div>
        </Section>
        <Section bgColor="bg-gray-200">
          <h2 className=" my-10 mb-14 text-2xl font-semibold dark:text-white">
            Avantages pour les Entreprises
          </h2>
          <div className=" grid grid-cols-1 justify-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((point, index) => (
              <CardCFP
                key={index}
                title={point.title}
                description={point.description}
              />
            ))}
          </div>
        </Section>

        <Section>
          <h2 className=" my-10 mb-14 text-2xl font-semibold dark:text-white">
            Modalités Pratiques pour chaque établissement :
          </h2>
          <div className=" grid grid-cols-1 justify-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {details.map((point, index) => (
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
