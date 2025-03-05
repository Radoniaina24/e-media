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
import { useLanguageContext } from "@/lib/context/LanguageContext";
import { cp } from "fs";
export default function SectionL5() {
  const { language } = useLanguageContext();
  const currentWorldFr = [
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
  const currentWorldEn = [
    {
      title: "High school graduates from all fields",
      description:
        "Interested in legal studies and seeking flexibility in their learning.",
    },
    {
      title: "Professionals in active employment",
      description:
        "Looking to specialize or evolve in the fields of law or diplomacy without interrupting their career.",
    },
    {
      title: "International students",
      description:
        "Looking for an accessible program suited to a global context.",
    },
  ];
  const currentWorld = language === "fr" ? currentWorldFr : currentWorldEn;
  const currentWorld2Fr = {
    items: [
      "Droit Public",
      "Droit Privé et des Affaires",
      "Droit International et Diplomatie",
    ],
  };
  const currentWorld2En = {
    items: [
      "Public Law",
      "Private and Business Law",
      "International Law and Diplomacy",
    ],
  };
  const currentWorld2 = language === "fr" ? currentWorld2Fr : currentWorld2En;
  const specializationsFr = [
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
  const specializationsEn = [
    {
      title: "Public Law",
      description:
        "This specialization explores the relationships between public institutions, administrations, and citizens.",
      objectives: [
        "Study constitutional law, administrative law, and public freedoms.",
        "Understand the issues of governance and public policies.",
        "Master administrative procedures and local government law.",
      ],
      careers: [
        "Public servant in public or international institutions.",
        "Project officer in local governments or NGOs.",
        "Consultant in public governance or lawyer specialized in administrative law.",
      ],
    },
    {
      title: "Private Law and Business Law",
      description:
        "This specialization trains experts in legal relations between individuals and businesses.",
      objectives: [
        "Master the fundamental principles of contract law, corporate law, and commercial law.",
        "Understand the fiscal and legal issues facing businesses.",
        "Manage commercial litigation and legal procedures.",
      ],
      careers: [
        "Business lawyer or legal advisor in a company.",
        "Legal or tax manager in a company.",
        "Freelance lawyer or mediator in dispute resolution.",
      ],
    },
    {
      title: "International Law and Diplomacy",
      description:
        "This specialization is aimed at those who wish to evolve in an international environment.",
      objectives: [
        "Study international public and private law, treaty law, and humanitarian law.",
        "Understand international institutions and regulatory mechanisms.",
        "Develop skills in diplomatic negotiation and conflict management.",
      ],
      careers: [
        "Diplomat or public servant in an international organization (UN, African Union, etc.).",
        "Consultant in international law or international arbitration.",
        "International affairs officer in embassies, NGOs, or multinational companies.",
      ],
    },
  ];
  const specializations =
    language === "fr" ? specializationsFr : specializationsEn;
  const whyFr = [
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
  const whyEn = [
    {
      title: "Total Flexibility",
      description:
        "Study at your own pace, wherever you are, while benefiting from high-quality academic support.",
    },
    {
      title: "Interactive and Practical Program",
      description:
        "Case studies, mock trials, and online projects for a professional immersion.",
    },
    {
      title: "Strategic and Diverse Specializations",
      description:
        "Meeting the current needs of the public, private, and international sectors.",
    },
    {
      title: "Global Accessibility",
      description:
        "Ideal for students and professionals based in Madagascar or abroad.",
    },
  ];
  const why = language === "fr" ? whyFr : whyEn;
  const licencesFr = [
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
  const licencesEn = [
    {
      title: "L1",
      description:
        "10 months to acquire the basics of constitutional, civil, and administrative law.",
    },
    {
      title: "L2",
      description:
        "10 months to deepen legal concepts and explore specializations.",
    },
    {
      title: "L3",
      description:
        "10 months to focus on one of the three specializations and work on practical projects.",
    },
  ];
  const licences = language === "fr" ? licencesFr : licencesEn;

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Type d'animation
    });
  }, []);
  const title =
    language === "fr"
      ? "LICENCE EN DROIT (FORMATION 100% EN LIGNE)"
      : "Bachelor's Degree in Law (100% Online Program)";
  const subtitle =
    language === "fr"
      ? "La Licence en Droit d’E-Media, exclusivement disponible en formation en ligne, est une opportunité unique pour les étudiants et les professionnels souhaitant se former à distance. Cette formation rigoureuse offre une compréhension approfondie des systèmes juridiques nationaux et internationaux tout en s’adaptant à vos contraintes personnelles et professionnelles. Avec des spécialisations stratégiques, ce programme vous prépare à des carrières variées dans les domaines juridique, diplomatique et des affaires."
      : "E-Media's Bachelor's Degree in Law, exclusively available as an online program, is a unique opportunity for students and professionals seeking to study remotely. This rigorous program offers an in-depth understanding of national and international legal systems while adapting to your personal and professional constraints. With strategic specializations, this program prepares you for diverse careers in the legal, diplomatic, and business fields.";
  return (
    <div>
      {/* Header */}
      <Header
        id="sectionL5"
        title={title}
        subtitle={subtitle}
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736692262/Droit_r8nimt.jpg"
      />
      <div
        id="sectionL5"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <ScrollComponent text={title} />
        <Section
          title={language === "fr" ? "Spécialisations" : "Specializations"}
        >
          <div className=" text-md mt-4 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {currentWorld2.items.map((item, index) => (
              <Card key={index} title={item} items={[]} />
            ))}
          </div>
        </Section>
        <Section
          title={
            language === "fr"
              ? "À qui s’adresse cette formation ?"
              : "Who is this program for ?"
          }
        ></Section>
        {/* À qui s’adresse cette formation ? */}
        <Section bgColor="bg-gray-100">
          <h3 className="text-bold mb-10 text-center text-xl font-semibold dark:text-gray-400 ">
            {language === "fr"
              ? "Cette licence en ligne est destinée à :"
              : "This online bachelor's degree is intended for:"}
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
          title={
            language === "fr"
              ? "Durée et organisation de la formation"
              : "Duration and Organization of the Program"
          }
          content={
            language === "fr"
              ? "La Licence en Droit se déroule sur 3 ans (6 semestres), avec une organisation flexible et adaptée à l’apprentissage en ligne :"
              : "The Law Bachelor's degree lasts for 3 years (6 semesters), with a flexible structure tailored for online learning:"
          }
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

        <Section
          content={
            language === "fr"
              ? "Les étudiants accèdent à des ressources numériques modernes, des cours interactifs, des études de cas et un encadrement personnalisé assuré par des experts juridiques."
              : "Students have access to modern digital resources, interactive courses, case studies, and personalized guidance provided by legal experts."
          }
        ></Section>
        <Section>
          <h1 className=" mb-10 text-3xl font-bold text-gray-800 dark:text-white">
            {language === "fr"
              ? "Spécialisations proposées"
              : "Proposed Specializations:"}
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
          {language === "fr" ? (
            <CallToAction
              heading={"Rejoignez E-Media dès aujourd’hui"}
              description={
                "Lancez votre carrière dans le domaine juridique et diplomatique !"
              }
              buttonText={"Préinscriptions ouvertes ici"}
              buttonLink={"/signup"}
            />
          ) : (
            <CallToAction
              heading={"Join E-Media today"}
              description={
                "Kickstart your career in the legal and diplomatic field!"
              }
              buttonText={"Pre-registration open here"}
              buttonLink={"/signup"}
            />
          )}
        </Section>
      </div>
    </div>
  );
}
