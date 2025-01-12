"use client";

import Section from "./Section";
import Card from "./Card";
import Header from "./Header";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import SpecializationCard from "./SpecializationCard";
import CallToAction from "./CallToAction";
import MasterCard from "../Master/MasterCard";
import ProgramDetails from "../Master/ProgramDetails";
import ScrollComponent from "../Scroll/ScrollComponent";
export default function SectionL5() {
  const currentWorld = [
    {
      title: "Les bacheliers de toutes filières",
      description:
        "Intéressés par les études juridiques et cherchant une flexibilité dans leur apprentissage.",
    },
    {
      title: "Les professionnels en activité",
      description:
        "Souhaitant se spécialiser ou évoluer dans les secteurs du droit ou de la diplomatie sans interrompre leur carrière.",
    },
    {
      title: "Les étudiants internationaux",
      description:
        "À la recherche d’une formation accessible, adaptée à un contexte mondial.",
    },
  ];
  const currentWorld2 = {
    items: [
      "Droit Public",
      "Droit Privé et des Affaires",
      "Droit International et Diplomatie",
    ],
  };
  const specializations = [
    {
      title: "Droit Public",
      description:
        "Ce parcours explore les relations entre les institutions publiques, les administrations et les citoyens.",
      objectives: [
        "Étudier le droit constitutionnel, le droit administratif et les libertés publiques.",
        "Comprendre les enjeux de la gouvernance et des politiques publiques.",
        "Maîtriser les procédures administratives et le droit des collectivités locales.",
      ],
      careers: [
        "Fonctionnaire dans les institutions publiques ou internationales.",
        "Chargé de mission dans les collectivités locales ou les ONG.",
        "Consultant en gouvernance publique ou juriste spécialisé en droit administratif.",
      ],
    },
    {
      title: "Droit Privé et des Affaires",
      description:
        "Ce parcours forme des spécialistes des relations juridiques entre les particuliers et les entreprises.",
      objectives: [
        "Maîtriser les principes fondamentaux du droit des contrats, du droit des sociétés et du droit commercial.",
        "Comprendre les enjeux fiscaux et juridiques des entreprises.",
        "Gérer les contentieux commerciaux et les procédures judiciaires.",
      ],
      careers: [
        "Avocat spécialisé en droit des affaires ou conseiller juridique en entreprise.",
        "Responsable juridique ou fiscal dans une société.",
        "Juriste indépendant ou médiateur en résolution des litiges.",
      ],
    },
    {
      title: "Droit International et Diplomatie",
      description:
        "Ce parcours s’adresse à ceux qui souhaitent évoluer dans un environnement international.",
      objectives: [
        "Étudier le droit international public et privé, le droit des traités et le droit humanitaire.",
        "Comprendre les institutions internationales et les mécanismes de régulation.",
        "Développer des compétences en négociation diplomatique et gestion des conflits.",
      ],
      careers: [
        "Diplomate ou fonctionnaire dans une organisation internationale (ONU, Union Africaine, etc.).",
        "Consultant en droit international ou en arbitrage international.",
        "Chargé des affaires internationales dans les ambassades, ONG ou entreprises multinationales.",
      ],
    },
  ];
  const why = [
    {
      title: "Flexibilité totale",
      description:
        "Étudiez à votre rythme, où que vous soyez, tout en bénéficiant d’un encadrement pédagogique de qualité.",
    },
    {
      title: "Programme interactif et pratique",
      description:
        "Études de cas, simulations de procès, et projets en ligne pour une immersion professionnelle.",
    },
    {
      title: "Spécialisations stratégiques et diversifiées",
      description:
        "Répondant aux besoins actuels des secteurs public, privé et international.",
    },
    {
      title: "Accessibilité mondiale",
      description:
        "Idéal pour les étudiants et les professionnels basés à Madagascar ou à l’étranger.",
    },
  ];
  const licences = [
    {
      title: "L1",
      description:
        "10 mois pour acquérir les bases du droit constitutionnel, civil et administratif.",
    },
    {
      title: "L2",
      description:
        "10 mois pour approfondir les concepts juridiques et explorer les spécialisations.",
    },
    {
      title: "L3",
      description:
        "10 mois pour se concentrer sur l’une des trois spécialisations et travailler sur des projets pratiques.",
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
        id="sectionL5"
        title="LICENCE EN DROIT (FORMATION 100% EN LIGNE)"
        subtitle="La Licence en Droit d’E-Media, exclusivement disponible en formation en ligne, est une opportunité unique pour les étudiants et les professionnels souhaitant se former à distance. Cette formation rigoureuse offre une compréhension approfondie des systèmes juridiques nationaux et internationaux tout en s’adaptant à vos contraintes personnelles et professionnelles. Avec des spécialisations stratégiques, ce programme vous prépare à des carrières variées dans les domaines juridique, diplomatique et des affaires."
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736692262/Droit_r8nimt.jpg"
      />
      <div
        id="sectionL5"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <ScrollComponent text="LICENCE EN DROIT (FORMATION 100% EN LIGNE)" />
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
          <h3 className="text-bold mb-10 text-center text-xl font-semibold dark:text-gray-400 ">
            Cette licence en ligne est destinée à :
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
          title="Durée et organisation de la formation"
          content="La Licence en Droit se déroule sur 3 ans (6 semestres), avec une organisation flexible et adaptée à l’apprentissage en ligne :"
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

        <Section content="Les étudiants accèdent à des ressources numériques modernes, des cours interactifs, des études de cas et un encadrement personnalisé assuré par des experts juridiques."></Section>
        <Section>
          <h1 className=" mb-10 text-3xl font-bold text-gray-800 dark:text-white">
            Spécialisations proposées
          </h1>
          {specializations.map((spec, index) => (
            <SpecializationCard
              key={index}
              title={spec.title}
              description={spec.description}
              content={spec.objectives}
              opportunities={spec.careers}
            />
          ))}
        </Section>

        <Section title="Avantages de la Licence en Droit en ligne d’E-Media">
          <div className="text-md mt-20 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {why.map((item, index) => (
              <MasterCard
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Section>
        {/* Call to Action */}
        <Section bgColor="bg-gradient-to-r from-blue-500 to-teal-400 text-white">
          <CallToAction
            heading={"Rejoignez E-Media dès aujourd’hui"}
            description={
              "Lancez votre carrière dans le domaine juridique et diplomatique !"
            }
            buttonText={"Préinscriptions ouvertes ici"}
            buttonLink={""}
          />
        </Section>
      </div>
    </div>
  );
}
