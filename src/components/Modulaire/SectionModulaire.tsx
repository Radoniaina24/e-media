import React from "react";
import Header from "../Licence/Header";
import Section from "../Licence/Section";
import Card from "../Licence/Card";
import ModulePrograms from "./ModuleProgram";
import ScrollComponent from "../Scroll/ScrollComponent";
const objectifs = [
  "Apporter une réponse immédiate et pratique aux besoins en renforcement de capacités des entreprises.",
  "Former des collaborateurs sur des thématiques ciblées, permettant une application directe des compétences.",
  "Contribuer à la transformation et au développement durable des organisations publiques et privées en proposant des formations alignées sur les standards internationaux et les réalités locales.",
];
export default function SectionModulaire() {
  return (
    <div>
      {/* Header */}
      <Header
        id="modulaire"
        title="OFFRE DE FORMATIONS MODULAIRES"
        subtitle="DÉDIÉES AUX ENTREPRISES PUBLIQUES ET PRIVÉES"
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736510253/Fond-Modulaire_mkcgzm.jpg"
      />
      <div
        id="modulaire"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <ScrollComponent text="FORMATIONS MODULAIRES" />
        <div className=" container mb-10 mt-10 rounded-lg bg-gray-50 p-8 shadow-md transition duration-300 dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-200">
            Contexte et Justification
          </h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            Dans un environnement professionnel en constante mutation, marqué
            par l&apos;émergence des nouvelles technologies et la globalisation,
            les entreprises publiques et privées doivent continuellement adapter
            leurs compétences pour maintenir leur compétitivité.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
            Nos institutions
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              {" "}
              “E-media, UST-IO, et AELI”{" "}
            </span>
            offrent des solutions innovantes à travers des formations modulaires
            courtes, ciblées sur des compétences stratégiques et
            opérationnelles.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
            Ces formations sont conçues pour s’intégrer harmonieusement aux
            contraintes professionnelles tout en maximisant l’impact des
            apprenants sur leurs missions au sein de leurs organisations.
          </p>
        </div>
        <Section>
          <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-200">
            Objectifs de l&apos;offre
          </h2>
          <div className=" text-md mt-4 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {objectifs.map((item, index) => (
              <Card key={index} title={item} items={[]} />
            ))}
          </div>
        </Section>
        <div className="mb-10 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 py-8 text-center shadow-lg">
          <h1 className="text-3xl font-extrabold tracking-wide text-white">
            Description des Offres de Formations Modulaires
          </h1>
          <p className="mt-2 text-lg font-light text-white">
            proposés par chaque établissement
          </p>
        </div>
        <ModulePrograms />
      </div>
    </div>
  );
}
