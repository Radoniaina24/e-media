"use client";
import React from "react";
import Header from "../Licence/Header";
import Section from "../Licence/Section";
import Card from "../Licence/Card";
import ModulePrograms from "./ModuleProgram";
import ScrollComponent from "../Scroll/ScrollComponent";
import { useLanguageContext } from "@/lib/context/LanguageContext";
const objectifsFr = [
  "Apporter une réponse immédiate et pratique aux besoins en renforcement de capacités des entreprises.",
  "Former des collaborateurs sur des thématiques ciblées, permettant une application directe des compétences.",
  "Contribuer à la transformation et au développement durable des organisations publiques et privées en proposant des formations alignées sur les standards internationaux et les réalités locales.",
];
const objectivesEn = [
  "Provide an immediate and practical response to the capacity-building needs of companies.",
  "Train employees on targeted topics, enabling the direct application of skills.",
  "Contribute to the transformation and sustainable development of public and private organizations by offering training aligned with international standards and local realities.",
];

export default function SectionModulaire() {
  const { language } = useLanguageContext();
  const title =
    language === "fr"
      ? "OFFRE DE FORMATIONS MODULAIRES"
      : "MODULAR TRAINING OFFER";
  const subtitle =
    language === "fr"
      ? "DÉDIÉES AUX ENTREPRISES PUBLIQUES ET PRIVÉES"
      : "DEDICATED TO PUBLIC AND PRIVATE COMPANIES";
  const objectifs = language === "fr" ? objectifsFr : objectivesEn;
  return (
    <div>
      {/* Header */}
      <Header
        id="modulaire"
        title={title}
        subtitle={subtitle}
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736510791/Fond-Modulaire_1_zpsc8c.jpg"
      />
      <div
        id="modulaire"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <ScrollComponent text={title} />
        {language === "fr" ? <Fr /> : <En />}
        <Section>
          <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-200">
            {language === "fr"
              ? "Objectifs de l'offre"
              : "Objectives of the Offer"}
          </h2>
          <div className=" text-md mt-4 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {objectifs.map((item, index) => (
              <Card key={index} title={item} items={[]} />
            ))}
          </div>
        </Section>
        <div className="mb-10 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 py-8 text-center shadow-lg">
          {language === "fr" ? (
            <>
              <h1 className="text-3xl font-extrabold tracking-wide text-white">
                Description des Offres de Formations Modulaires
              </h1>
              <p className="mt-2 text-lg font-light text-white">
                proposés par chaque établissement
              </p>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-extrabold tracking-wide text-white">
                Description of Modular Training Offers
              </h1>
              <p className="mt-2 text-lg font-light text-white">
                Offered by each institution
              </p>
            </>
          )}
        </div>
        <ModulePrograms />
      </div>
    </div>
  );
}

const En = () => {
  return (
    <div className="container mb-10 mt-10 rounded-lg bg-gray-50 p-8 shadow-md transition duration-300 dark:bg-gray-800">
      <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-200">
        Context and Justification
      </h2>
      <p className="leading-relaxed text-gray-700 dark:text-gray-300">
        In a constantly evolving professional environment, marked by the
        emergence of new technologies and globalization, public and private
        companies must continually adapt their skills to maintain their
        competitiveness.
      </p>
      <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
        Our institutions
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
          {" "}
          “E-media, UST-IO, and AELI”{" "}
        </span>
        offer innovative solutions through short, modular training programs
        focused on strategic and operational skills.
      </p>
      <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
        These training programs are designed to seamlessly integrate with
        professional constraints while maximizing the impact of learners on
        their roles within their organizations.
      </p>
    </div>
  );
};

const Fr = () => {
  return (
    <div className=" container mb-10 mt-10 rounded-lg bg-gray-50 p-8 shadow-md transition duration-300 dark:bg-gray-800">
      <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-200">
        Contexte et Justification
      </h2>
      <p className="leading-relaxed text-gray-700 dark:text-gray-300">
        Dans un environnement professionnel en constante mutation, marqué par
        l&apos;émergence des nouvelles technologies et la globalisation, les
        entreprises publiques et privées doivent continuellement adapter leurs
        compétences pour maintenir leur compétitivité.
      </p>
      <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
        Nos institutions
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
          {" "}
          “E-media, UST-IO, et AELI”{" "}
        </span>
        offrent des solutions innovantes à travers des formations modulaires
        courtes, ciblées sur des compétences stratégiques et opérationnelles.
      </p>
      <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
        Ces formations sont conçues pour s’intégrer harmonieusement aux
        contraintes professionnelles tout en maximisant l’impact des apprenants
        sur leurs missions au sein de leurs organisations.
      </p>
    </div>
  );
};
