"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import Header from "../Licence/Header";
import Section from "../Licence/Section";
import Card from "../Licence/Card";
import ProgramCard from "./ProgramCard";
import CallToAction from "../Licence/CallToAction";
import Mention from "./Mention";
import MasterCard from "./MasterCard";
import ScrollComponent from "../Scroll/ScrollComponent";
import { useLanguageContext } from "@/lib/context/LanguageContext";

export default function SectionM1() {
  const { language } = useLanguageContext();
  const currentWorldFr = {
    title: "Ce Master s’adresse à:",
    items: [
      "Les titulaires d’une Licence dans des domaines connexes, tels que l’informatique, l’électronique, les télécommunications ou les sciences de l’ingénieur.",
      "Les professionnels souhaitant renforcer leurs compétences et évoluer vers des postes stratégiques ou techniques.",
      "Les passionnés de technologie désireux de se spécialiser dans des domaines à forte valeur ajoutée comme les systèmes embarqués ou la cybersécurité.",
    ],
  };
  const currentWorldEn = {
    title: "This Master's program is intended for:",
    items: [
      "Holders of a Bachelor's degree in related fields such as computer science, electronics, telecommunications, or engineering sciences.",
      "Professionals looking to enhance their skills and transition into strategic or technical positions.",
      "Technology enthusiasts aiming to specialize in high-value areas like embedded systems or cybersecurity.",
    ],
  };
  const currentWorld = language === "fr" ? currentWorldFr : currentWorldEn;
  const masterFr = [
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
  const masterEn = [
    {
      title: "M1",
      description:
        "10 months to strengthen foundational knowledge in computer science, electronics, and system management.",
    },
    {
      title: "M2",
      description:
        "10 months for in-depth specialization in one of the offered tracks.",
    },
    {
      title: "Final Thesis",
      description:
        "Students undertake a research or application project related to their specialization to complete their degree requirements.",
    },
  ];
  const master = language === "fr" ? masterFr : masterEn;
  const programsFr = [
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
  const programsEn = [
    {
      title: "Information Systems Management",
      details: [
        "Management of complex data and IT infrastructures.",
        "Development and implementation of innovative solutions for businesses.",
      ],
    },
    {
      title: "Embedded Electronics",
      details: [
        "Design and optimization of embedded systems in fields such as automotive, aerospace, or home automation.",
        "Development of IoT (Internet of Things) solutions.",
      ],
    },
    {
      title: "Cybersecurity and Systems",
      details: [
        "Protection of data and critical infrastructures against cyber threats.",
        "Expertise in cryptography, vulnerability analysis, and secure architecture.",
      ],
    },
  ];
  const programs = language === "fr" ? programsFr : programsEn;
  const careerOpportunitiesFr = [
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
  const careerOpportunitiesEn = [
    {
      title: "Computer Science and Information Systems",
      details: [
        "Information Systems Architect",
        "IT Project Manager",
        "Consultant in Digital Transformation",
      ],
    },
    {
      title: "Electronics and Embedded Systems",
      details: [
        "Embedded Electronics Engineer",
        "IoT (Internet of Things) Developer",
        "R&D Manager in Embedded Systems",
      ],
    },
    {
      title: "Cybersecurity and Risk Management",
      details: [
        "Cybersecurity Expert",
        "System Security Analyst",
        "Head of Critical Infrastructure Protection",
      ],
    },
    {
      title: "Other Opportunities",
      details: [
        "Lecturer-Researcher in Engineering Sciences",
        "Independent Consultant in Technological Innovation",
        "Entrepreneur in high-tech, IoT, or cybersecurity sectors",
      ],
    },
  ];
  const careerOpportunities =
    language === "fr" ? careerOpportunitiesFr : careerOpportunitiesEn;
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Type d'animation
    });
  }, []);
  const title =
    language === "fr"
      ? "MASTER EN INFORMATIQUE ET ÉLECTRONIQUE EMBARQUÉES (IEE)"
      : "MASTER'S IN EMBEDDED COMPUTER AND ELECTRONIC SYSTEMS (IEE)";
  const subtitle =
    language === "fr"
      ? "Le Master en Informatique et Électronique Embarquées (IEE) d’E-Media est une formation d’excellence, alliant innovation technologique, recherche appliquée et compétences en gestion des systèmes complexes. Ce programme prépare les étudiants à des carrières de haut niveau dans des secteurs en pleine expansion, tels que la cybersécurité, les systèmes embarqués et la gestion des systèmes d’information."
      : "The Master's program in Embedded Computer and Electronic Systems (IEE) at E-Media is a prestigious training course combining technological innovation, applied research, and expertise in managing complex systems. This program prepares students for high-level careers in rapidly growing sectors such as cybersecurity, embedded systems, and information systems management.";
  return (
    <div>
      {/* Header */}
      <Header
        id="master1"
        title={title}
        subtitle={subtitle}
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736924334/MASTER-EN-INFORMATIQUE-ET-%C3%89LECTRONIQUE-EMBARQU%C3%89ES-_IEE_1_c39hi5.jpg"
      />
      <div
        id="master1"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <ScrollComponent text={title} />
        <Mention
          domain={
            language === "fr"
              ? "Sciences de l’Ingénieur"
              : "Engineering Sciences"
          }
          mention={
            language === "fr"
              ? "Informatique et Électronique Embarquées"
              : "Embedded Computer and Electronic Systems"
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
              : "Duration and Program Structure"
          }
          content={
            language === "fr"
              ? "Le Master en IEE se déroule sur 2 ans, avec une structure pédagogique claire et progressive :"
              : "The Master's in IEE spans 2 years, featuring a clear and progressive educational framework:"
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
              ? "Parcours spécialisés (en M2)"
              : "Specialized Tracks (in M2)"
          }
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {programs.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
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
              ? "Les diplômés du Master en IEE peuvent accéder à des carrières variées et stratégiques dans des secteurs clés de l’industrie et des services :"
              : "Graduates of the Master's program in IEE can pursue diverse and strategic careers in key sectors of industry and services:"
          }
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {careerOpportunities.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </Section>

        <Section
          bgColor="bg-gray-100"
          title={
            language === "fr"
              ? "Une formation tournée vers l’avenir"
              : "A Future-Oriented Program"
          }
          content={
            language === "fr"
              ? "Le Master en IEE prépare ses diplômés à devenir des leaders dans des secteurs technologiques en pleine croissance. Que ce soit pour concevoir des systèmes embarqués innovants, sécuriser des infrastructures critiques ou gérer des systèmes d’information complexes, cette formation vous ouvre les portes des métiers d’avenir."
              : "The Master's in IEE prepares its graduates to become leaders in rapidly growing technological sectors. Whether it's designing innovative embedded systems, securing critical infrastructures, or managing complex information systems, this program opens the doors to future careers."
          }
        ></Section>
        <Section bgColor="bg-primary">
          {language === "fr" ? (
            <CallToAction
              heading={"Rejoignez-nous dès aujourd’hui"}
              description={
                "bâtissez une carrière dans les technologies de pointe !"
              }
              buttonText={"Préinscriptions ouvertes ici"}
              buttonLink={""}
            />
          ) : (
            <CallToAction
              heading={"Join us today"}
              description={"Build a career in cutting-edge technologies!"}
              buttonText={"Pre-registration open here"}
              buttonLink={""}
            />
          )}
        </Section>
      </div>
    </div>
  );
}
