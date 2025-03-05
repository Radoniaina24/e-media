"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import Header from "../Licence/Header";
import Section from "../Licence/Section";
import CallToAction from "../Licence/CallToAction";
import Mention from "./Mention";
import MasterCard from "./MasterCard";
import ProgramDetails from "./ProgramDetails";
import CiblePublicCard from "./CiblePublicCard";
import Card from "../Licence/Card";
import ScrollComponent from "../Scroll/ScrollComponent";
import { useLanguageContext } from "@/lib/context/LanguageContext";

export default function SectionM5() {
  const { language } = useLanguageContext();
  const masterFr = [
    {
      title: "M1",
      description:
        "10 mois pour explorer en profondeur les fondements avancés du droit et s’initier à des méthodologies analytiques et décisionnelles.",
    },
    {
      title: "M2",
      description:
        "10 mois pour une spécialisation intensive dans l’une des trois branches proposées et des projets applicables.",
    },
    {
      title: "Mémoire de fin d’études",
      description:
        "Les étudiants mènent une recherche approfondie ou réalisent un projet appliqué destiné à résoudre des problématiques concrètes.",
    },
  ];
  const masterEn = [
    {
      title: "M1",
      description:
        "10 months to explore in depth the advanced foundations of law and to be introduced to analytical and decision-making methodologies.",
    },
    {
      title: "M2",
      description:
        "10 months for intensive specialization in one of the three offered branches and applicable projects.",
    },
    {
      title: "Final Thesis",
      description:
        "Students conduct in-depth research or carry out an applied project aimed at solving concrete issues.",
    },
  ];
  const master = language === "fr" ? masterFr : masterEn;
  const currentWorldFr = {
    title: "Le Master s’adresse à :",
    items: [
      "Titulaires d’une Licence en Droit ou d’un diplôme équivalent, prêts à approfondir leurs connaissances et à se spécialiser.",
      "Professionnels en activité, cherchant à évoluer vers des postes de direction ou à diversifier leurs compétences dans des domaines juridiques stratégiques.",
      "Futurs leaders juridiques, souhaitant influencer les politiques publiques, diriger des affaires complexes ou représenter des organisations à l’échelle internationale.",
    ],
  };
  const currentWorldEn = {
    title: "The Master's is aimed at:",
    items: [
      "Holders of a Bachelor's degree in Law or an equivalent diploma, ready to deepen their knowledge and specialize.",
      "Active professionals seeking to advance to leadership positions or diversify their skills in strategic legal fields.",
      "Future legal leaders aiming to influence public policies, manage complex affairs, or represent organizations on an international scale.",
    ],
  };
  const currentWorld = language === "fr" ? currentWorldFr : currentWorldEn;
  const ciblePublicDataFr = [
    {
      title: "Orientation stratégique et spécialisée",
      description:
        "Contrairement à la Licence, ce programme met l’accent sur les compétences décisionnelles, stratégiques et analytiques nécessaires pour des postes de haut niveau.",
    },
    {
      title: "Approche pratique et immersive",
      description:
        "Études de cas réels, simulations, et projets concrets permettant aux étudiants de maîtriser les défis actuels du monde juridique.",
    },
    {
      title: "Flexibilité et accessibilité",
      description:
        "La formation en ligne permet aux professionnels et aux étudiants à l’international d’accéder à une éducation de qualité tout en poursuivant leurs activités.",
    },
    {
      title: "Excellence académique",
      description:
        "Enseignée par des experts juridiques locaux et internationaux, cette formation garantit une préparation optimale pour les défis contemporains.",
    },
  ];
  const ciblePublicDataEn = [
    {
      title: "Strategic and Specialized Orientation",
      description:
        "Unlike the Bachelor's degree, this program focuses on decision-making, strategic, and analytical skills required for high-level positions.",
    },
    {
      title: "Practical and Immersive Approach",
      description:
        "Real case studies, simulations, and concrete projects enable students to master the current challenges of the legal world.",
    },
    {
      title: "Flexibility and Accessibility",
      description:
        "The online format allows professionals and international students to access quality education while continuing their activities.",
    },
    {
      title: "Academic Excellence",
      description:
        "Taught by local and international legal experts, this program ensures optimal preparation for contemporary challenges.",
    },
  ];
  const ciblePublicData =
    language === "fr" ? ciblePublicDataFr : ciblePublicDataEn;
  const programsFr = [
    {
      title: "Droit Public",
      description:
        "Ce parcours se concentre sur les institutions publiques, les politiques nationales et internationales, ainsi que sur les grands enjeux de gouvernance.",
      content: [
        "Analyse approfondie du droit constitutionnel, du droit administratif et des libertés publiques.",
        "Études de cas sur la gouvernance publique et les réformes administratives.",
        "Maîtrise des mécanismes juridiques encadrant les politiques publiques et les institutions internationales.",
      ],
      opportunities: [
        "Conseiller juridique dans les administrations publiques ou internationales.",
        "Consultant en gouvernance publique ou chargé de mission dans des organismes gouvernementaux.",
        "Expert en droit des collectivités territoriales ou défenseur des droits.",
      ],
    },
    {
      title: "Droit Privé et des Affaires",
      description:
        "Cette spécialisation forme des experts capables d’analyser et de résoudre les problématiques complexes liées au droit des entreprises, des contrats et des transactions économiques.",
      content: [
        "Études avancées en droit des contrats, droit des sociétés et droit commercial international.",
        "Analyse des stratégies fiscales et des risques juridiques dans les affaires.",
        "Développement des compétences en gestion des litiges commerciaux et en arbitrage.",
      ],
      opportunities: [
        "Avocat d’affaires spécialisé en transactions complexes.",
        "Juriste d’entreprise ou consultant en droit des sociétés.",
        "Responsable de la conformité juridique ou expert en médiation commerciale.",
      ],
    },
    {
      title: "Droit International et Diplomatie",
      description:
        "Ce parcours offre une formation pointue en droit international et en diplomatie, combinant des compétences juridiques et stratégiques pour évoluer dans un environnement global.",
      content: [
        "Analyse des enjeux juridiques liés aux conflits internationaux, au droit des traités et au droit humanitaire.",
        "Études des processus de négociation et des relations diplomatiques.",
        "Préparation aux défis de la gouvernance mondiale, des droits de l’homme et du droit des affaires internationales.",
      ],
      opportunities: [
        "Diplomate ou conseiller juridique dans des organisations internationales.",
        "Consultant en arbitrage international ou en gestion de conflits transfrontaliers.",
        "Responsable des affaires internationales dans des ambassades ou des entreprises multinationales.",
      ],
    },
  ];
  const programsEn = [
    {
      title: "Public Law",
      description:
        "This track focuses on public institutions, national and international policies, as well as major governance issues.",
      content: [
        "In-depth analysis of constitutional law, administrative law, and public freedoms.",
        "Case studies on public governance and administrative reforms.",
        "Mastery of the legal mechanisms governing public policies and international institutions.",
      ],
      opportunities: [
        "Legal advisor in public or international administrations.",
        "Consultant in public governance or mission officer in government agencies.",
        "Expert in local government law or human rights advocate.",
      ],
    },
    {
      title: "Private and Business Law",
      description:
        "This specialization trains experts capable of analyzing and solving complex issues related to corporate law, contracts, and economic transactions.",
      content: [
        "Advanced studies in contract law, company law, and international commercial law.",
        "Analysis of tax strategies and legal risks in business.",
        "Development of skills in managing commercial disputes and arbitration.",
      ],
      opportunities: [
        "Corporate lawyer specialized in complex transactions.",
        "In-house legal counsel or corporate law consultant.",
        "Compliance officer or expert in commercial mediation.",
      ],
    },
    {
      title: "International Law and Diplomacy",
      description:
        "This track provides in-depth training in international law and diplomacy, combining legal and strategic skills for global environments.",
      content: [
        "Analysis of legal issues related to international conflicts, treaty law, and humanitarian law.",
        "Studies of negotiation processes and diplomatic relations.",
        "Preparation for the challenges of global governance, human rights, and international business law.",
      ],
      opportunities: [
        "Diplomat or legal advisor in international organizations.",
        "Consultant in international arbitration or cross-border conflict management.",
        "Head of international affairs in embassies or multinational companies.",
      ],
    },
  ];
  const programs = language === "fr" ? programsFr : programsEn;
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Type d'animation
    });
  }, []);
  const title =
    language === "fr"
      ? "MASTER EN DROIT (FORMATION 100% EN LIGNE)"
      : "MASTER'S IN LAW (100% ONLINE PROGRAM)";
  const subtitle =
    language === "fr"
      ? "Le Master en Droit d’E-Media, exclusivement disponible en formation en ligne, est conçu pour former des experts et des décideurs dans les différents domaines du droit. Contrairement à la Licence, qui offre une compréhension générale et fondamentale des concepts juridiques, ce programme de niveau Master se concentre sur l’acquisition de compétences avancées et spécialisées. Il prépare les étudiants à occuper des postes de responsabilité stratégique dans les secteurs public, privé et international, en combinant une formation académique rigoureuse avec une orientation pratique et professionnelle."
      : "E-Media's Master's in Law, exclusively available as an online program, is designed to train experts and decision-makers in various areas of law. Unlike the Bachelor's degree, which provides a general and foundational understanding of legal concepts, this Master's program focuses on acquiring advanced and specialized skills. It prepares students to take on strategic leadership roles in public, private, and international sectors, combining rigorous academic training with practical and professional orientation.";
  return (
    <div>
      {/* Header */}
      <Header
        id="master5"
        title={title}
        subtitle={subtitle}
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736774315/MASTER-EN-DROIT-_FORMATION-100_-EN-LIGNE_nvoozm.jpg"
      />
      <div
        id="master5"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <ScrollComponent text={title} />
        <Mention
          specialisation={
            language === "fr"
              ? "Droit Public, Droit Privé et des Affaires, Droit International et Diplomatie"
              : "Public Law, Private and Business Law, International Law and Diplomacy"
          }
        />
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
            {currentWorld.title}
          </h3>

          <div className=" text-md mt-4 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {currentWorld.items.map((item, index) => (
              <Card key={index} title={item} items={[]} />
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
              ? "Le Master en Droit se déroule sur 2 ans après la Licence (soit 4 semestres) :"
              : "The Master's in Law is completed over 2 years after the Bachelor's degree (i.e., 4 semesters) :"
          }
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

        <Section
          title={
            language === "fr"
              ? "Spécialisations disponibles"
              : "Available specializations"
          }
        >
          {programs.map((program, index) => (
            <ProgramDetails
              key={index}
              title={program.title}
              description={program.description}
              content={program.content}
              opportunities={program.opportunities}
            />
          ))}
        </Section>

        <Section
          title={
            language === "fr"
              ? "POURQUOI CHOISIR LE MASTER EN DROIT D’E-MEDIA ?"
              : "Why Choose the Master's in Law from E-Media ?"
          }
          bgColor="bg-gray-100"
        >
          <div className=" text-md mt-4 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {ciblePublicData.map((item, index) => (
              <CiblePublicCard key={index} data={item} />
            ))}
          </div>
        </Section>

        <Section bgColor="bg-primary">
          {language === "fr" ? (
            <CallToAction
              description={
                "Rejoignez E-Media dès aujourd’hui et devenez un leader dans le domaine juridique et diplomatique !"
              }
              buttonText={"Préinscriptions ouvertes ici"}
              buttonLink={"/signup"}
              heading={""}
            />
          ) : (
            <CallToAction
              description={
                "Join E-Media today and become a leader in the legal and diplomatic field!"
              }
              buttonText={"Pre-registration open here"}
              buttonLink={"/signup"}
              heading={""}
            />
          )}
        </Section>
      </div>
    </div>
  );
}
