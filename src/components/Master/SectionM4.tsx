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
import Card from "../Licence/Card";
import ScrollComponent from "../Scroll/ScrollComponent";
import { useLanguageContext } from "@/lib/context/LanguageContext";

export default function SectionM4() {
  const { language } = useLanguageContext();
  const masterFr = [
    {
      title: "M1",
      description:
        "10 mois pour consolider les bases théoriques et pratiques des disciplines clés du management et de la gestion.",
    },
    {
      title: "M2",
      description:
        "10 mois pour se spécialiser dans l’une des trois disciplines proposées et développer des projets stratégiques.",
    },
    {
      title: "Mémoire de fin d’études",
      description:
        " Un travail de recherche appliquée ou un projet pratique destiné à répondre à une problématique réelle d’entreprise, permettant de valider le diplôme.",
    },
  ];
  const masterEn = [
    {
      title: "M1",
      description:
        "10 months to consolidate the theoretical and practical foundations of key management and business administration disciplines.",
    },
    {
      title: "M2",
      description:
        "10 months to specialize in one of the three offered disciplines and develop strategic projects.",
    },
    {
      title: "Final Thesis",
      description:
        "An applied research project or practical project aimed at solving a real-world business issue, validating the degree.",
    },
  ];
  const master = language === "fr" ? masterFr : masterEn;
  const currentWorldFr = {
    title: "Ce Master s’adresse à:",
    items: [
      "Les titulaires d’un diplôme de Licence ou d’un Master dans des domaines tels que la finance, la gestion, l’économie, ou le commerce international.",
      "Les professionnels en activité : Managers, entrepreneurs ou cadres souhaitant renforcer leurs compétences et accéder à des postes à responsabilités.",
      "Les décideurs d’entreprise désireux de maîtriser les outils modernes de gestion et de stratégie.",
    ],
  };
  const currentWorldEn = {
    title: "This Master is intended for:",
    items: [
      "Holders of a Bachelor's or Master's degree in fields such as finance, management, economics, or international business.",
      "Active professionals: Managers, entrepreneurs, or executives seeking to strengthen their skills and access leadership positions.",
      "Business decision-makers eager to master modern management and strategy tools.",
    ],
  };
  const currentWorld = language === "fr" ? currentWorldFr : currentWorldEn;
  const careerPathsFr = {
    items: [
      "Responsable des opérations internationales ou des exportations.",
      "Consultant en commerce international ou analyste de marché.",
      "Responsable de la logistique ou gestionnaire des achats internationaux.",
    ],
  };
  const careerPathsEn = {
    items: [
      "International operations or export manager.",
      "International trade consultant or market analyst.",
      "Logistics manager or international procurement manager.",
    ],
  };
  const careerPaths = language === "fr" ? careerPathsFr : careerPathsEn;
  const avantagesFr = {
    items: [
      "Un programme tourné vers l’international : Adapté aux standards mondiaux avec un accent sur les pratiques locales et globales.",
      "Un encadrement par des experts : Enseignants et professionnels reconnus dans leur domaine.",
      "Une employabilité immédiate : Les diplômés accèdent rapidement à des postes stratégiques dans des organisations de premier plan.",
    ],
  };
  const avantagesEn = {
    items: [
      "An internationally oriented program: Tailored to global standards with a focus on both local and global practices.",
      "Guidance from experts: Teachers and professionals recognized in their field.",
      "Immediate employability: Graduates quickly access strategic positions in leading organizations.",
    ],
  };
  const avantages = language === "fr" ? avantagesFr : avantagesEn;
  const programsFr = [
    {
      title: "Finance et Comptabilité",
      description:
        "Cette spécialisation prépare les étudiants à devenir des experts financiers capables d’analyser, de gérer et de superviser les ressources financières d’une organisation.",
      content: [
        "Maîtriser les outils de gestion financière avancée et de comptabilité analytique.",
        "Comprendre les mécanismes des marchés financiers et des investissements.",
        "Piloter des projets de financement, d’évaluation d’actifs et de gestion des risques.",
        "Développer des compétences en audit et contrôle de gestion.",
      ],
      opportunities: [
        "Directeur financier (CFO), contrôleur de gestion, auditeur financier.",
        "Analyste financier, gestionnaire de portefeuille ou conseiller en investissement.",
        "Consultant en stratégie financière ou responsable comptable.",
      ],
    },
    {
      title: "Administration des Affaires",
      description:
        "Ce parcours est conçu pour former des dirigeants capables de piloter une organisation, de développer des stratégies efficaces et de prendre des décisions éclairées dans des environnements complexes.",
      content: [
        "Apprendre à élaborer et mettre en œuvre des stratégies d’entreprise.",
        "Développer des compétences en gestion des ressources humaines, leadership et gestion du changement.",
        "Comprendre les enjeux de la gouvernance et de la responsabilité sociétale des entreprises (RSE).",
        "Acquérir une expertise en négociation, innovation et entrepreneuriat.",
      ],
      opportunities: [
        "Directeur général, responsable des opérations ou consultant en gestion stratégique.",
        "Responsable des ressources humaines ou chef de projet en transformation organisationnelle.",
        "Entrepreneur ou dirigeant de PME.",
      ],
    },
    {
      title: "Commerce International",
      description:
        "Cette spécialisation est orientée vers les défis et opportunités du commerce mondial, en formant des experts en gestion des échanges internationaux et en développement d’affaires sur des marchés globaux.",
      content: [
        "Comprendre les règles du commerce international et les accords commerciaux.",
        "Développer des compétences en logistique, transport et gestion des chaînes d’approvisionnement (supply chain).",
        "Analyser les tendances des marchés mondiaux et identifier les opportunités commerciales.",
        "Maîtriser les techniques de négociation interculturelle et les stratégies d’expansion internationale.",
      ],
      opportunities: [
        "Directeur des ventes internationales, gestionnaire de commerce extérieur.",
        "Consultant en développement international et stratégie commerciale.",
        "Responsable logistique internationale ou chef de projet export.",
      ],
    },
  ];
  const programsEn = [
    {
      title: "Finance and Accounting",
      description:
        "This specialization prepares students to become financial experts capable of analyzing, managing, and overseeing the financial resources of an organization.",
      content: [
        "Master advanced financial management tools and cost accounting.",
        "Understand the mechanisms of financial markets and investments.",
        "Manage financing projects, asset evaluation, and risk management.",
        "Develop skills in auditing and financial control.",
      ],
      opportunities: [
        "Chief Financial Officer (CFO), financial controller, financial auditor.",
        "Financial analyst, portfolio manager, investment advisor.",
        "Financial strategy consultant, accounting manager.",
      ],
    },
    {
      title: "Business Administration",
      description:
        "This program is designed to train leaders capable of managing an organization, developing effective strategies, and making informed decisions in complex environments.",
      content: [
        "Learn to develop and implement business strategies.",
        "Develop skills in human resource management, leadership, and change management.",
        "Understand governance issues and corporate social responsibility (CSR).",
        "Acquire expertise in negotiation, innovation, and entrepreneurship.",
      ],
      opportunities: [
        "General Manager, operations manager, strategic management consultant.",
        "Human resources manager, project manager in organizational transformation.",
        "Entrepreneur or SME leader.",
      ],
    },
    {
      title: "International Business",
      description:
        "This specialization is focused on the challenges and opportunities of global trade, training experts in managing international exchanges and business development in global markets.",
      content: [
        "Understand the rules of international trade and commercial agreements.",
        "Develop skills in logistics, transportation, and supply chain management.",
        "Analyze global market trends and identify business opportunities.",
        "Master intercultural negotiation techniques and international expansion strategies.",
      ],
      opportunities: [
        "International sales director, foreign trade manager.",
        "International development consultant, business strategy consultant.",
        "International logistics manager or export project manager.",
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
      ? "MBA SPÉCIALISÉ - MASTER OF BUSINESS ADMINISTRATION (FORMATION 100% EN LIGNE)"
      : "MBA Specialized - Master of Business Administration (100% Online Program)";
  const subtitle =
    language === "fr"
      ? "Le MBA Spécialisé d’E-Media est une formation d’excellence destinée à former des cadres supérieurs et des leaders capables de piloter des projets stratégiques et de gérer des organisations dans un environnement économique globalisé. Exclusivement disponible en formation en ligne. Ce programme s’adresse à des professionnels ambitieux, désireux d’acquérir une expertise approfondie dans leur domaine tout en développant des compétences managériales et décisionnelles avancées."
      : "E-Media's Specialized MBA is an outstanding program designed to train senior executives and leaders capable of managing strategic projects and leading organizations in a globalized economic environment. Exclusively available through online learning, this program is intended for ambitious professionals who wish to gain in-depth expertise in their field while developing advanced managerial and decision-making skills.";
  return (
    <div>
      {/* Header */}
      <Header
        id="master4"
        title={title}
        subtitle={subtitle}
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736772102/MBA-SP%C3%89CIALIS%C3%89---MASTER-OF-BUSINESS-ADMINISTRATION-_FORMATION-100_-EN-LIGNE_vplf1h.jpg"
      />
      <div
        id="master4"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <ScrollComponent text={title} />
        <Mention
          specialisation={
            language === "fr"
              ? " Marketing Digital et Journalisme"
              : "Digital Marketing and Journalism"
          }
        />
        <Section
          title={
            language === "fr"
              ? "À qui s’adresse ce MBA ?"
              : "Who is this MBA for ?"
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
              ? "Le MBA Spécialisé se déroule sur 2 ans après la Licence (4 semestres) :"
              : "The Specialized MBA takes place over 2 years after the Bachelor's degree (4 semesters):"
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
          bgColor="bg-gray-100"
          title={
            language === "fr"
              ? "Débouchés professionnels"
              : "Career Opportunities"
          }
          content={
            language === "fr"
              ? "Les diplômés du Master MDJ disposent des compétences nécessaires pour occuper des postes stratégiques et de leadership dans :"
              : "Graduates of the Master MDJ program possess the skills required to hold strategic and leadership positions in:"
          }
        >
          <div className=" text-md mt-4 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {careerPaths.items.map((item, index) => (
              <Card key={index} title={item} items={[]} />
            ))}
          </div>
        </Section>
        <Section
          title={
            language === "fr"
              ? "Avantages du MBA Spécialisé d’E-Media"
              : "Advantages of the Specialized MBA in E-Media"
          }
          bgColor="bg-gray-100"
        >
          <div className=" text-md mt-4 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {avantages.items.map((item, index) => (
              <Card key={index} title={item} items={[]} />
            ))}
          </div>
        </Section>

        <Section bgColor="bg-primary">
          {language === "fr" ? (
            <CallToAction
              description={
                "Rejoignez E-Media dès aujourd’hui et devenez un leader dans votre domaine !"
              }
              buttonText={"Préinscriptions ouvertes ici"}
              buttonLink={"/signup"}
              heading={""}
            />
          ) : (
            <CallToAction
              description={
                "Join E-Media today and become a leader in your field!"
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
