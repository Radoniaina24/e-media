"use client";

import Section from "./Section";
import Card from "./Card";
import Header from "./Header";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import ProgramCard from "../Master/ProgramCard";
import MasterCard from "../Master/MasterCard";
import CallToAction from "./CallToAction";
import ScrollComponent from "../Scroll/ScrollComponent";
import { useLanguageContext } from "@/lib/context/LanguageContext";
export default function SectionL1() {
  const { language } = useLanguageContext();
  const careerPathsFr = [
    {
      title: "Infrastructures informatiques et réseaux",
      details: [
        "Administrateur réseau",
        "Technicien en maintenance IT",
        "Ingénieur en systèmes et réseaux",
      ],
    },
    {
      title: "Développement logiciel et solutions numériques",
      details: [
        "Développeur d’applications mobiles et web",
        "Ingénieur logiciel",
        "Chef de projet IT",
      ],
    },
    {
      title: "Télécommunications",
      details: [
        "Spécialiste en télécommunication : Gestion et optimisation des infrastructures de communication.",
        "Expert en IoT (Internet des objets) : Développement et déploiement de solutions connectées.",
      ],
    },
    {
      title: "Web et Digital",
      details: [
        "Webmaster ou web designer : Création et gestion de sites internet ergonomiques et esthétiques.",
        "Responsable en marketing digital : Développement de stratégies numériques pour améliorer la visibilité et les performances des entreprises en ligne.",
        "Consultant en transformation digitale : Accompagnement des organisations dans leur transition vers des solutions numériques.",
      ],
    },
    {
      title: "Industries émergentes et spécialisées",
      details: [
        "Expert en cybersécurité : Sécurisation des données et des systèmes face aux menaces numériques croissantes.",
        "pécialiste en data science : Analyse et exploitation des données pour une meilleure prise de décision stratégique.",
        "Ingénieur en systèmes embarqués : Développement de logiciels pour dispositifs connectés (automobile, santé, domotique).",
      ],
    },
  ];
  const careerPathsEn = [
    {
      title: "IT Infrastructure and Networks",
      details: [
        "Network Administrator",
        "IT Maintenance Technician",
        "Systems and Network Engineer",
      ],
    },
    {
      title: "Software Development and Digital Solutions",
      details: [
        "Mobile and Web Application Developer",
        "Software Engineer",
        "IT Project Manager",
      ],
    },
    {
      title: "Telecommunications",
      details: [
        "Telecommunication Specialist: Management and optimization of communication infrastructures.",
        "IoT Expert (Internet of Things): Development and deployment of connected solutions.",
      ],
    },
    {
      title: "Web and Digital",
      details: [
        "Webmaster or Web Designer: Creation and management of user-friendly and aesthetically pleasing websites.",
        "Digital Marketing Manager: Developing digital strategies to improve online visibility and business performance.",
        "Digital Transformation Consultant: Supporting organizations in their transition to digital solutions.",
      ],
    },
    {
      title: "Emerging and Specialized Industries",
      details: [
        "Cybersecurity Expert: Securing data and systems against growing digital threats.",
        "Data Science Specialist: Analyzing and utilizing data for better strategic decision-making.",
        "Embedded Systems Engineer: Developing software for connected devices (automotive, healthcare, home automation).",
      ],
    },
  ];
  const careerPaths = language === "fr" ? careerPathsFr : careerPathsEn;

  const specializationsFr = [
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
  const specializationsEn = [
    {
      title: "Network and Systems",
      description: "Management and optimization of IT infrastructures.",
    },
    {
      title: "Telecommunications",
      description: "Advanced technologies and digital communication.",
    },
    {
      title: "Software Engineering",
      description:
        "Development of innovative applications and software solutions.",
    },
  ];
  const specializations =
    language === "fr" ? specializationsFr : specializationsEn;
  const licencesFr = [
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
  const licencesEn = [
    {
      title: "L1",
      description: "10 months to master the fundamentals of ICT.",
    },
    {
      title: "L2",
      description: "10 months to develop advanced technical skills.",
    },
    {
      title: "L3",
      description:
        "10 months to specialize and prepare for professional realities.",
    },
  ];
  const licences = language === "fr" ? licencesFr : licencesEn;
  const currentWorldFr = {
    title: "Un secteur en pleine croissance:",
    items: [
      "Les technologies numériques représentent aujourd’hui un pilier économique, avec une demande croissante de professionnels qualifiés dans des domaines comme la cybersécurité, le cloud computing, ou encore les solutions IoT.",
      "À Madagascar et dans l’Océan Indien, le développement rapide des infrastructures numériques et des télécommunications offre des opportunités sans précédent aux diplômés en NTIC.",
    ],
  };
  const currentWorldEn = {
    title: "A Growing Sector:",
    items: [
      "Digital technologies are now a key economic pillar, with a growing demand for skilled professionals in areas such as cybersecurity, cloud computing, and IoT solutions.",
      "In Madagascar and the Indian Ocean region, the rapid development of digital infrastructure and telecommunications offers unprecedented opportunities for graduates in ICT.",
    ],
  };

  const currentWorld = language === "fr" ? currentWorldFr : currentWorldEn;
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Type d'animation
    });
  }, []);

  const title =
    language === "fr"
      ? "LICENCE EN TECHNOLOGIES DE L’INFORMATION ET DE LA COMMUNICATION (TIC)"
      : "BACHELOR'S DEGREE IN INFORMATION AND COMMUNICATION TECHNOLOGIES (ICT)";
  const subtitle =
    language === "fr"
      ? "Une formation innovante et intensive pour devenir un acteur clé de la transformation technologique."
      : "An innovative and intensive program designed to shape key players in technological transformation.";
  return (
    <div className="dark:bg-gray-800">
      {/* Header */}
      <Header
        id="sectionL1"
        title={title}
        subtitle={subtitle}
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736658993/TIC_fhiblc.jpg"
      />

      <div
        id="sectionL1"
        className="bg-gray-50 pt-20   font-sans text-gray-800 dark:bg-gray-900"
      >
        <ScrollComponent text={title} />
        {/* Pourquoi choisir cette licence */}
        <Section
          title={
            language === "fr"
              ? "Pourquoi choisir cette licence ?"
              : "Why Choose This Bachelor's Degree?"
          }
          content={
            language === "fr"
              ? "Dans un monde interconnecté, les technologies de l’information et de la communication (TIC) sont au cœur de la transformation digitale des entreprises et institutions. La demande pour des professionnels qualifiés dans des domaines comme les réseaux, le développement logiciel, les télécommunications et le web est en constante croissance. Cette licence vous offre une opportunité unique de vous positionner dans des métiers d’avenir où l’innovation et l’adaptabilité sont essentielles."
              : "In an interconnected world, Information and Communication Technologies (ICT) are at the heart of the digital transformation of businesses and institutions. The demand for skilled professionals in areas such as networking, software development, telecommunications, and the web is constantly growing. This Bachelor's degree offers you a unique opportunity to position yourself in future-focused careers where innovation and adaptability are key."
          }
        ></Section>

        {/* Débouchés professionnels */}
        <Section
          title={
            language === "fr"
              ? "Débouchés professionnels élargis"
              : "Expanded Career Opportunities"
          }
          bgColor="bg-gray-100"
          content={
            language === "fr"
              ? "La Licence en TIC d’E-media ouvre les portes à une vaste gamme de métiers dans des secteurs stratégiques et en pleine croissance, tant à Madagascar que dans le monde entier. Les diplômés peuvent aspirer à des postes dans :"
              : "The ICT Bachelor's Degree from E-Media opens the door to a wide range of careers in strategic and rapidly growing sectors, both in Madagascar and globally. Graduates can pursue roles in:"
          }
        >
          <div className="grid grid-cols-1  gap-6 md:grid-cols-2 lg:grid-cols-3">
            {careerPaths.map((path, index) => (
              <ProgramCard key={index} program={path} />
            ))}
          </div>
        </Section>

        {/* L’importance de la filière dans le monde actuel */}
        <Section
          title={
            language === "fr"
              ? "L’importance de la filière dans le monde actuel"
              : "The Importance of the ICT Field in Today's World"
          }
          bgColor="bg-gray-100"
          content={
            language === "fr"
              ? "Dans un monde de plus en plus connecté et numérisé, les technologies de l’information et de la communication (TIC) jouent un rôle central dans tous les secteurs d’activité. Elles transforment la manière dont les entreprises fonctionnent, les services sont fournis, et les individus interagissent."
              : "In an increasingly connected and digitized world, Information and Communication Technologies (ICT) play a pivotal role across all sectors. They are transforming how businesses operate, how services are delivered, and how individuals interact."
          }
        >
          <h3 className="text-bold mb-4 text-start text-xl font-semibold dark:text-white ">
            {currentWorld.title}
          </h3>
          <div className="text-md m-auto mt-10 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {currentWorld.items.map((item, index) => (
              <Card key={index} title={item} items={[]} />
            ))}
          </div>
        </Section>

        {/* Programme structuré */}
        <Section
          title={
            language === "fr"
              ? "Un programme structuré et pratique"
              : "A Structured and Practical Program"
          }
          content={
            language === "fr"
              ? "La Licence en TIC s’étend sur 3 ans, avec un format progressif et intensif. Choisissez parmi trois parcours spécialisés selon vos ambitions professionnelles."
              : "The Bachelor's Degree in ICT spans 3 years, offering a progressive and intensive format. Choose from three specialized tracks based on your professional aspirations."
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
          title=""
          content={
            language === "fr"
              ? "Les étudiants peuvent choisir parmi trois parcours spécialisés, en fonction de leurs ambitions professionnelles :"
              : "Students can choose from three specialized tracks based on their professional aspirations:"
          }
        >
          <div className="flex flex-wrap justify-center gap-5">
            {specializations.map((spec, index) => (
              <MasterCard
                key={index}
                title={spec.title}
                description={spec.description}
              />
            ))}
          </div>
        </Section>

        {/* Call to Action */}
        <Section bgColor="bg-gradient-to-r from-blue-500 to-teal-400 text-white">
          {language === "fr" ? (
            <CallToAction
              heading={" Rejoignez-nous dès aujourd'hui !"}
              description={"Transformez vos ambitions en succès."}
              buttonText={" Préinscription ouverte ici"}
              buttonLink={""}
            />
          ) : (
            <CallToAction
              heading={"Join us today!"}
              description={"Turn your ambitions into success."}
              buttonText={"Pre-registration open here"}
              buttonLink={""}
            />
          )}
        </Section>
      </div>
    </div>
  );
}
