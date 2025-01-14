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

import ScrollComponent from "../Scroll/ScrollComponent";
import { useLanguageContext } from "@/lib/context/LanguageContext";
export default function SectionL4() {
  const { language } = useLanguageContext();
  const currentWorldFr = [
    {
      title: "Les bacheliers de toutes filières",
      description:
        "Idéal pour ceux qui souhaitent construire une carrière dans les domaines du management, de la finance ou du commerce.",
    },
    {
      title: "Les étudiants souhaitant une base solide en gestion",
      description:
        "Pour ceux qui souhaitent poursuivre des études supérieures ou entrer directement sur le marché du travail.",
    },
    {
      title: "Les professionnels en début de carrière",
      description:
        "Cherchant à acquérir des compétences théoriques et pratiques en gestion.",
    },
  ];
  const currentWorldEn = [
    {
      title: "High school graduates from all fields",
      description:
        "Ideal for those looking to build a career in management, finance, or business.",
    },
    {
      title: "Students seeking a solid foundation in management",
      description:
        "For those who wish to pursue higher education or enter the job market directly.",
    },
    {
      title: "Early-career professionals",
      description:
        "Looking to acquire both theoretical and practical skills in management.",
    },
  ];
  const currentWorld = language === "fr" ? currentWorldFr : currentWorldEn;
  const currentWorld2Fr = {
    items: [
      "Finance et Comptabilité",
      "Administration des Affaires",
      "Commerce International",
    ],
  };
  const currentWorld2En = {
    items: [
      "Finance and Accounting",
      "Business Administration",
      "International Business",
    ],
  };
  const currentWorld2 = language === "fr" ? currentWorld2Fr : currentWorld2En;
  const specializationsFr = [
    {
      title: "Finance et Comptabilité",
      description:
        "Ce parcours est axé sur la maîtrise des outils et concepts financiers et comptables nécessaires pour gérer efficacement les ressources financières d’une organisation.",
      objectives: [
        "Comprendre et appliquer les principes fondamentaux de la finance et de la comptabilité.",
        "Élaborer des analyses financières, des bilans et des budgets.",
        "Apprendre à gérer les risques financiers et optimiser la rentabilité.",
      ],
      careers: [
        "Comptable, assistant financier ou analyste junior.",
        "Auditeur interne, assistant contrôleur de gestion.",
        "Responsable de la comptabilité ou de la trésorerie en entreprise.",
      ],
    },
    {
      title: "Administration des Affaires",
      description:
        "Cette spécialisation offre une vision globale de la gestion des organisations et des projets, avec un accent sur les compétences managériales et stratégiques.",
      objectives: [
        "Acquérir les bases de la gestion des entreprises, des ressources humaines et de la stratégie.",
        "Développer des compétences en leadership et en prise de décision.",
        "Comprendre les principes de la gestion de projet et de l’innovation.",
      ],
      careers: [
        "Assistant de direction, chef de projet junior ou chargé d’affaires.",
        "Coordinateur administratif ou gestionnaire d’équipe.",
        "Entrepreneur ou collaborateur dans des start-ups et PME.",
      ],
    },
    {
      title: "Commerce International",
      description:
        "Ce parcours est conçu pour former des professionnels capables de gérer les opérations commerciales et les échanges dans un contexte globalisé.",
      objectives: [
        "Comprendre les mécanismes du commerce international et des accords commerciaux.",
        "Maîtriser les techniques de négociation et de gestion interculturelle.",
        "Apprendre les fondamentaux de la logistique et du transport international.",
      ],
      careers: [
        "Assistant import-export, coordinateur logistique ou chargé de clientèle internationale.",
        "Analyste de marché, responsable des opérations commerciales.",
        "Collaborateur dans les entreprises multinationales ou les organisations non gouvernementales.",
      ],
    },
  ];
  const specializationsEn = [
    {
      title: "Finance and Accounting",
      description:
        "This track focuses on mastering the financial and accounting tools and concepts necessary to effectively manage an organization's financial resources.",
      objectives: [
        "Understand and apply the fundamental principles of finance and accounting.",
        "Prepare financial analyses, balance sheets, and budgets.",
        "Learn to manage financial risks and optimize profitability.",
      ],
      careers: [
        "Accountant, financial assistant, or junior analyst.",
        "Internal auditor, assistant management controller.",
        "Head of accounting or treasury in a company.",
      ],
    },
    {
      title: "Business Administration",
      description:
        "This specialization offers a comprehensive view of organizational and project management, with an emphasis on managerial and strategic skills.",
      objectives: [
        "Acquire the fundamentals of business management, human resources, and strategy.",
        "Develop leadership and decision-making skills.",
        "Understand the principles of project management and innovation.",
      ],
      careers: [
        "Executive assistant, junior project manager, or business development officer.",
        "Administrative coordinator or team manager.",
        "Entrepreneur or collaborator in startups and SMEs.",
      ],
    },
    {
      title: "International Business",
      description:
        "This track is designed to train professionals who can manage commercial operations and exchanges in a globalized context.",
      objectives: [
        "Understand the mechanisms of international trade and commercial agreements.",
        "Master negotiation techniques and cross-cultural management.",
        "Learn the basics of international logistics and transportation.",
      ],
      careers: [
        "Import-export assistant, logistics coordinator, or international customer service officer.",
        "Market analyst, head of commercial operations.",
        "Collaborator in multinational companies or non-governmental organizations.",
      ],
    },
  ];
  const specializations =
    language === "fr" ? specializationsFr : specializationsEn;
  const whyFr = [
    {
      title: "Une formation complète et adaptable",
      description:
        "Prépare les étudiants à entrer directement sur le marché du travail ou à poursuivre des études supérieures.",
    },
    {
      title: "Un enseignement pratique et concret",
      description:
        "Études de cas, projets et stages en entreprise pour une immersion professionnelle.",
    },
    {
      title: "Des spécialisations stratégiques",
      description:
        "Répondant aux besoins actuels et futurs des entreprises locales et internationales.",
    },
  ];
  const whyEn = [
    {
      title: "A comprehensive and adaptable training",
      description:
        "Prepares students to either enter the job market directly or continue their higher education.",
    },
    {
      title: "Practical and hands-on education",
      description:
        "Case studies, projects, and internships for professional immersion.",
    },
    {
      title: "Strategic specializations",
      description:
        "Meeting the current and future needs of local and international businesses.",
    },
  ];
  const why = language === "fr" ? whyFr : whyEn;
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Type d'animation
    });
  }, []);
  const title =
    language === "fr"
      ? "LICENCE EN MANAGEMENT (100% EN LIGNE)"
      : "Bachelor's in Management (100% Online)";
  const subtitle =
    language === "fr"
      ? "La Licence en Management d’E-Media est une formation fondamentale et polyvalente, exclusivement disponible en formation en ligne, conçue pour former des professionnels capables de comprendre et de gérer les aspects stratégiques, opérationnels et financiers d’une organisation. Avec des spécialisations adaptées aux besoins du marché, ce programme prépare les étudiants à des carrières prometteuses dans les domaines de la gestion, de la finance et du commerce international."
      : "E-Media's Bachelor's in Management is a comprehensive and versatile program, available exclusively online, designed to train professionals capable of understanding and managing the strategic, operational, and financial aspects of an organization. With specializations tailored to market needs, this program prepares students for promising careers in management, finance, and international business.";
  return (
    <div>
      {/* Header */}
      <Header
        id="sectionL4"
        title={title}
        subtitle={subtitle}
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736692262/MGT_1_rs5s8x.jpg"
      />
      <div
        id="sectionL4"
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
              ? "Cette licence est ouverte à :"
              : "This Bachelor's degree is open to :"}
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
        <Section>
          <h1 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">
            {language === "fr"
              ? "Spécialisations proposées"
              : "Offered Specializations"}
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

        <Section
          title={
            language === "fr"
              ? "Pourquoi choisir la Licence en Management d’E-Media ?"
              : "Why choose the Management Bachelor's degree from E-Media?"
          }
        >
          <div className="text-md mt-4 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
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
              heading={"Rejoignez-nous dès maintenant"}
              description={
                " Préparez-vous à devenir un acteur clé dans le monde des affaires !"
              }
              buttonText={"Préinscriptions ouvertes ici"}
              buttonLink={""}
            />
          ) : (
            <CallToAction
              heading={"Join us now"}
              description={
                "Get ready to become a key player in the business world!"
              }
              buttonText={"Pre-registration open here"}
              buttonLink={""}
            />
          )}
        </Section>
      </div>
    </div>
  );
}
