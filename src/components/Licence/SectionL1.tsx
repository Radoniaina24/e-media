"use client";

import Section from "./Section";
import Card from "./Card";
import Header from "./Header";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
export default function SectionL1() {
  const careerPaths = [
    {
      title: "Infrastructures informatiques et réseaux",
      items: [
        "Administrateur réseau",
        "Technicien en maintenance IT",
        "Ingénieur en systèmes et réseaux",
      ],
    },
    {
      title: "Développement logiciel et solutions numériques",
      items: [
        "Développeur d’applications mobiles et web",
        "Ingénieur logiciel",
        "Chef de projet IT",
      ],
    },
    {
      title: "Télécommunications",
      items: [
        "Spécialiste en télécommunication : Gestion et optimisation des infrastructures de communication.",
        "Expert en IoT (Internet des objets) : Développement et déploiement de solutions connectées.",
      ],
    },
    {
      title: "Web et Digital",
      items: [
        "Webmaster ou web designer : Création et gestion de sites internet ergonomiques et esthétiques.",
        "Responsable en marketing digital : Développement de stratégies numériques pour améliorer la visibilité et les performances des entreprises en ligne.",
        "Consultant en transformation digitale : Accompagnement des organisations dans leur transition vers des solutions numériques.",
      ],
    },
    {
      title: "Industries émergentes et spécialisées",
      items: [
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

  const currentWorld = [
    {
      title: "Un secteur en pleine croissance",
      items: [
        "Les technologies numériques représentent aujourd’hui un pilier économique, avec une demande croissante de professionnels qualifiés dans des domaines comme la cybersécurité, le cloud computing, ou encore les solutions IoT.",
        "À Madagascar et dans l’Océan Indien, le développement rapide des infrastructures numériques et des télécommunications offre des opportunités sans précédent aux diplômés en NTIC.",
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
        id="sectionL1"
        title="LICENCE EN TECHNOLOGIES DE L’INFORMATION ET DE LA COMMUNICATION (TIC)"
        subtitle="Une formation innovante et intensive pour devenir un acteur clé de la transformation technologique."
      />
      <div id="sectionL1" className="bg-gray-50 pt-20 font-sans text-gray-800">
        {/* Pourquoi choisir cette licence */}
        <Section
          title="Pourquoi choisir cette licence ?"
          content="Dans un monde interconnecté, les technologies de l’information et de la communication (TIC) sont au cœur de la transformation digitale des entreprises et institutions. La demande pour des professionnels qualifiés dans des domaines comme les réseaux, le développement logiciel, les télécommunications et le web est en constante croissance. Cette licence vous offre une opportunité unique de vous positionner dans des métiers d’avenir où l’innovation et l’adaptabilité sont essentielles."
        >
          {/* <img
          src="/images/digital_transformation.jpg"
          alt="Transformation digitale"
          className="mx-auto w-full max-w-lg rounded-lg shadow-md"
        /> */}
        </Section>

        {/* Débouchés professionnels */}
        <Section
          title="Débouchés professionnels élargis"
          bgColor="bg-gray-100"
          content="La Licence en TIC d’E-media ouvre les portes à une vaste gamme de métiers dans des secteurs stratégiques et en pleine croissance, tant à Madagascar que dans le monde entier. Les diplômés peuvent aspirer à des postes dans :"
        >
          <div className="grid grid-cols-1  justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            {careerPaths.map((path, index) => (
              <Card key={index} title={path.title} items={path.items} />
            ))}
          </div>
        </Section>

        {/* L’importance de la filière dans le monde actuel */}
        <Section
          title="L’importance de la filière dans le monde actuel"
          bgColor="bg-gray-100"
          content="Dans un monde de plus en plus connecté et numérisé, les technologies de l’information et de la communication (TIC) jouent un rôle central dans tous les secteurs d’activité. Elles transforment la manière dont les entreprises fonctionnent, les services sont fournis, et les individus interagissent."
        >
          <div className="grid grid-cols-1 ">
            {currentWorld.map((path, index) => (
              <Card key={index} title={path.title} items={path.items} />
            ))}
          </div>
        </Section>

        {/* Programme structuré */}
        <Section
          title="Un programme structuré et pratique"
          content="La Licence en TIC s’étend sur 3 ans, avec un format progressif et intensif. Choisissez parmi trois parcours spécialisés selon vos ambitions professionnelles."
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

        <Section
          title=""
          content="Les étudiants peuvent choisir parmi trois parcours spécialisés, en fonction de leurs ambitions professionnelles :"
        >
          <div className="flex justify-center space-x-6">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="relative max-w-sm rounded-lg bg-cover bg-center p-6 shadow-md"
                style={{
                  backgroundImage: `url('/images/your-image-${index}.jpg')`, // L'URL de l'image de fond
                }}
              >
                <div className="absolute inset-0 rounded-lg bg-black opacity-40"></div>{" "}
                {/* Superposition sombre */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white">{spec.title}</h3>
                  <p className="mt-2 text-white opacity-80">
                    {spec.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Call to Action */}
        <Section bgColor="bg-gradient-to-r from-blue-500 to-teal-400 text-white">
          <h2 className="text-3xl font-semibold">
            Rejoignez-nous dès aujour&apos;hui !
          </h2>
          <p className="mt-4 text-lg">Transformez vos ambitions en succès.</p>
          <a
            href="#"
            className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-bold text-blue-500 shadow-md hover:bg-gray-100"
          >
            Préinscription ouverte ici
          </a>
        </Section>
      </div>
    </div>
  );
}
