"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import { CheckIcon } from "@heroicons/react/solid";
import Header from "../Licence/Header";
import Section from "../Licence/Section";
import Card from "../Licence/Card";
import ParcoursCard from "../Licence/ParcourCard";
import ProgramCard from "./ProgramCard";
import CallToAction from "../Licence/CallToAction";
import Mention from "./Mention";
import MasterCard from "./MasterCard";
import ScrollComponent from "../Scroll/ScrollComponent";

export default function SectionM1() {
  const currentWorld = {
    title: "Ce Master s’adresse à:",
    items: [
      "Les titulaires d’une Licence dans des domaines connexes, tels que l’informatique, l’électronique, les télécommunications ou les sciences de l’ingénieur.",
      "Les professionnels souhaitant renforcer leurs compétences et évoluer vers des postes stratégiques ou techniques.",
      "Les passionnés de technologie désireux de se spécialiser dans des domaines à forte valeur ajoutée comme les systèmes embarqués ou la cybersécurité.",
    ],
  };

  const master = [
    {
      title: "M1",
      description:
        "10 mois pour renforcer les bases en informatique, électronique et gestion des systèmes.",
    },
    {
      title: "M2",
      description:
        "10 mois pour une spécialisation approfondie dans l’un des parcours proposés.",
    },
    {
      title: "Mémoire de fin d’études",
      description:
        "Les étudiants réalisent un projet de recherche ou d’application en lien avec leur spécialisation pour valider leur diplôme.",
    },
  ];

  const programs = [
    {
      title: "Management des Systèmes d’Information",
      details: [
        "Gestion de données complexes et infrastructures IT.",
        "Développement et implémentation de solutions innovantes pour les entreprises.",
      ],
    },
    {
      title: "Électronique Embarquée",
      details: [
        "Conception et optimisation de systèmes embarqués dans des domaines tels que l’automobile, l’aérospatial ou la domotique.",
        "Développement de solutions IoT (Internet des Objets).",
      ],
    },
    {
      title: "Cybersécurité et Systèmes",
      details: [
        "Protection des données et des infrastructures critiques contre les cybermenaces.",
        "Expertise en cryptographie, analyse de vulnérabilités et architecture sécurisée.",
      ],
    },
  ];

  const careerOpportunities = [
    {
      title: "Informatique et systèmes d’information",
      details: [
        "Architecte des systèmes d’information",
        "Chef de projet IT",
        "Consultant en transformation digitale",
      ],
    },
    {
      title: "Électronique et systèmes embarqués",
      details: [
        "Ingénieur en électronique embarquée",
        "Développeur IoT (Internet des Objets)",
        "Responsable R&D en systèmes embarqués",
      ],
    },
    {
      title: "Cybersécurité et gestion des risques",
      details: [
        "Expert en cybersécurité",
        "Analyste en sécurité des systèmes",
        "Responsable de la protection des infrastructures critiques",
      ],
    },
    {
      title: "Autres opportunités",
      details: [
        "Enseignant-chercheur en sciences de l’ingénieur",
        "Consultant indépendant en innovation technologique",
        "Entrepreneur dans les secteurs de la high-tech, de l’IoT ou de la cybersécurité",
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
        id="master1"
        title="MASTER EN INFORMATIQUE ET ÉLECTRONIQUE EMBARQUÉES (IEE)"
        subtitle="Le Master en Informatique et Électronique Embarquées (IEE) d’E-Media est une formation d’excellence, alliant innovation technologique, recherche appliquée et compétences en gestion des systèmes complexes. Ce programme prépare les étudiants à des carrières de haut niveau dans des secteurs en pleine expansion, tels que la cybersécurité, les systèmes embarqués et la gestion des systèmes d’information."
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736754974/MASTER-EN-INFORMATIQUE-ET-%C3%89LECTRONIQUE-EMBARQU%C3%89ES-_IEE_hsgxn1.jpg"
      />
      <div
        id="master1"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <ScrollComponent text="MASTER EN INFORMATIQUE ET ÉLECTRONIQUE EMBARQUÉES (IEE)" />
        <Mention
          domain={"Sciences de l’Ingénieur"}
          mention={"Informatique et Électronique Embarquées"}
        />
        <Section title="À qui s’adresse cette formation ?"></Section>
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
          content="Le Master en IEE se déroule sur 2 ans, avec une structure pédagogique claire et progressive :"
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

        <Section title="Parcours spécialisés (en M2) ">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {programs.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </Section>

        <Section
          title="Débouchés professionnels"
          bgColor="bg-gray-100"
          content="Les diplômés du Master en IEE peuvent accéder à des carrières variées et stratégiques dans des secteurs clés de l’industrie et des services :"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {careerOpportunities.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </Section>

        <Section
          bgColor="bg-gray-100"
          title="Une formation tournée vers l’avenir"
          content="Le Master en IEE prépare ses diplômés à devenir des leaders dans des secteurs technologiques en pleine croissance. Que ce soit pour concevoir des systèmes embarqués innovants, sécuriser des infrastructures critiques ou gérer des systèmes d’information complexes, cette formation vous ouvre les portes des métiers d’avenir."
        ></Section>
        <Section bgColor="bg-primary">
          <CallToAction
            heading={"Rejoignez-nous dès aujourd’hui"}
            description={
              "bâtissez une carrière dans les technologies de pointe !"
            }
            buttonText={"Préinscriptions ouvertes ici"}
            buttonLink={""}
          />
        </Section>
      </div>
    </div>
  );
}
