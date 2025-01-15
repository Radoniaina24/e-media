"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import Header from "../Licence/Header";
import Section from "../Licence/Section";
import CardCFP from "../CFP/CardCFP";
import ScrollComponent from "../Scroll/ScrollComponent";
import { useLanguageContext } from "@/lib/context/LanguageContext";

export default function SectionUST() {
  const { language } = useLanguageContext();
  const programsFr = [
    {
      title: "Introduction à la Robotique Ludique",
      description:
        "Premiers pas dans l’assemblage et la programmation de robots simples.",
    },
    {
      title: "Cyber-hygiène et Sécurité Informatique",
      description:
        "Protection des données sensibles dans un environnement numérique.",
    },
    {
      title: "Initiation au Machine Learning",
      description:
        "Formation accélérée pour démystifier l’apprentissage automatique.",
    },
    {
      title: "IoT et Dispositifs Connectés Simples",
      description: "Conception et déploiement d’applications IoT accessibles.",
    },
    {
      title: "Analyse de Données avec Python",
      description:
        "Découverte des bases du langage Python pour la manipulation et l’analyse de données.",
    },
    {
      title: "Blockchain et Applications Décentralisées",
      description:
        "Introduction aux concepts de la blockchain et à leur utilisation dans des secteurs variés.",
    },
    {
      title: "Création d’Applications Mobiles Simples",
      description:
        "Développement d’applications pour Android et iOS avec des outils accessibles.",
    },
    {
      title: "Énergie Renouvelable et Technologies Intelligentes",
      description:
        "Initiation aux systèmes énergétiques intelligents et aux solutions solaires connectées.",
    },
    {
      title:
        "Cartographie Numérique et SIG (Systèmes d’Information Géographique)",
      description:
        "Utilisation de logiciels SIG pour analyser et représenter des données géospatiales.",
    },
    {
      title: "Impression 3D et Prototypage Rapide",
      description:
        "Apprentissage des bases de l’impression 3D et de la création de prototypes fonctionnels.",
    },
    {
      title: "Technologies Éducatives Interactives",
      description:
        "Exploration des outils numériques pour l’enseignement, incluant la réalité augmentée et les tableaux interactifs.",
    },
    {
      title: "Introduction à la Biotechnologie Numérique",
      description:
        "Sensibilisation aux applications de l’informatique dans le domaine de la biotechnologie.",
    },
    {
      title: "Optimisation des Processus Industriels avec l’IA",
      description:
        "Introduction aux outils et méthodes pour intégrer l’intelligence artificielle dans les processus industriels.",
    },
    {
      title: "Techniques de Réalité Virtuelle et Augmentée",
      description:
        "Conception et déploiement d’expériences immersives pour des applications pratiques.",
    },
    {
      title: "Économie Circulaire et Solutions Numériques",
      description:
        "Exploration des approches numériques pour favoriser des modèles durables en entreprise.",
    },
  ];
  const programsEn = [
    {
      title: "Introduction to Playful Robotics",
      description: "First steps in assembling and programming simple robots.",
    },
    {
      title: "Cyber-hygiene and IT Security",
      description: "Protection of sensitive data in a digital environment.",
    },
    {
      title: "Introduction to Machine Learning",
      description: "Accelerated training to demystify machine learning.",
    },
    {
      title: "IoT and Simple Connected Devices",
      description: "Design and deployment of accessible IoT applications.",
    },
    {
      title: "Data Analysis with Python",
      description:
        "Discovering the basics of Python for data manipulation and analysis.",
    },
    {
      title: "Blockchain and Decentralized Applications",
      description:
        "Introduction to blockchain concepts and their use in various sectors.",
    },
    {
      title: "Creating Simple Mobile Applications",
      description:
        "Developing applications for Android and iOS with accessible tools.",
    },
    {
      title: "Renewable Energy and Smart Technologies",
      description:
        "Introduction to smart energy systems and connected solar solutions.",
    },
    {
      title: "Digital Mapping and GIS (Geographic Information Systems)",
      description:
        "Using GIS software to analyze and represent geospatial data.",
    },
    {
      title: "3D Printing and Rapid Prototyping",
      description:
        "Learning the basics of 3D printing and creating functional prototypes.",
    },
    {
      title: "Interactive Educational Technologies",
      description:
        "Exploring digital tools for teaching, including augmented reality and interactive whiteboards.",
    },
    {
      title: "Introduction to Digital Biotechnology",
      description: "Awareness of the applications of IT in biotechnology.",
    },
    {
      title: "Optimizing Industrial Processes with AI",
      description:
        "Introduction to tools and methods for integrating artificial intelligence in industrial processes.",
    },
    {
      title: "Virtual and Augmented Reality Techniques",
      description:
        "Designing and deploying immersive experiences for practical applications.",
    },
    {
      title: "Circular Economy and Digital Solutions",
      description:
        "Exploring digital approaches to promote sustainable business models.",
    },
  ];
  const programs = language === "fr" ? programsFr : programsEn;
  const atoutFr = [
    {
      title: "Expertise Technologique",
      description:
        "Programmes innovants en IA, IoT, énergies renouvelables et cybersécurité.",
    },
    {
      title: "Enseignement Pratique",
      description:
        "Laboratoires modernes et projets concrets pour une application immédiate des connaissances.",
    },
    {
      title: "Collaboration Internationale",
      description:
        "Partenariats académiques et industriels pour des opportunités globales.",
    },
    {
      title: "Interdisciplinarité",
      description:
        "Formation intégrant technologie, entrepreneuriat et développement durable.",
    },
    {
      title: "Impact Local et Durable",
      description:
        "Solutions adaptées aux défis régionaux, notamment en agriculture, santé et énergie.",
    },
  ];
  const atoutEn = [
    {
      title: "Technological Expertise",
      description:
        "Innovative programs in AI, IoT, renewable energy, and cybersecurity.",
    },
    {
      title: "Practical Teaching",
      description:
        "Modern laboratories and hands-on projects for immediate application of knowledge.",
    },
    {
      title: "International Collaboration",
      description:
        "Academic and industrial partnerships offering global opportunities.",
    },
    {
      title: "Interdisciplinarity",
      description:
        "Training integrating technology, entrepreneurship, and sustainable development.",
    },
    {
      title: "Local and Sustainable Impact",
      description:
        "Solutions tailored to regional challenges, particularly in agriculture, health, and energy.",
    },
  ];
  const atout = language === "fr" ? atoutFr : atoutEn;
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Type d'animation
    });
  }, []);
  const title =
    language === "fr"
      ? "UST-IO : UNIVERSITY OF SCIENCE AND TECHNOLOGY - INDIAN OCEAN"
      : "UST-IO: UNIVERSITY OF SCIENCE AND TECHNOLOGY - INDIAN OCEAN";
  return (
    <div>
      {/* Header */}
      <Header
        id="ust"
        title={title}
        subtitle=""
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736946795/Fond-UST-IO-_-UNIVERSITY-OF-SCIENCE-AND-TECHNOLOGY---INDIAN-OCEAN_f1xatu.jpg"
      />
      <div
        id="ust"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <ScrollComponent text={title} />
        <Section
          title={
            language === "fr" ? "Identité et Mission" : "Identity and Mission"
          }
          content={
            language === "fr"
              ? "L’UST-IO est une institution clé à Madagascar, dédiée à la formation et à l’innovation dans les domaines des sciences et des nouvelles technologies. Elle vise à former des professionnels compétents pour relever les défis de la transformation digitale et du développement durable."
              : "UST-IO is a key institution in Madagascar, dedicated to training and innovation in the fields of science and new technologies. Its mission is to develop skilled professionals who can tackle the challenges of digital transformation and sustainable development."
          }
        ></Section>
        <Section bgColor="bg-gray-200">
          <h2 className=" my-10 mb-14  text-xl font-semibold dark:text-white">
            {language === "fr" ? "Atouts Distinctifs" : "Atouts Distinctifs"}
          </h2>
          <div className=" grid grid-cols-1 justify-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {atout.map((point, index) => (
              <CardCFP
                key={index}
                title={point.title}
                description={point.description}
              />
            ))}
          </div>
        </Section>

        <Section
          title={language === "fr" ? "Vision" : "Vision"}
          content={
            language === "fr"
              ? "L’UST-IO ambitionne de devenir un moteur de transformation digitale et un incubateur de talents pour Madagascar et la région de l’océan Indien, alliant excellence académique et impact communautaire."
              : "UST-IO aims to become a driving force for digital transformation and a talent incubator for Madagascar and the Indian Ocean region, combining academic excellence with community impact."
          }
        ></Section>

        <Section bgColor="bg-gray-200">
          <h2 className=" my-10 mb-14  text-xl font-semibold dark:text-white">
            {language === "fr"
              ? "Programmes de formations modulaires :"
              : "Modular Training Programs:"}
          </h2>
          <div className=" grid grid-cols-1 justify-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((point, index) => (
              <CardCFP
                key={index}
                title={point.title}
                description={point.description}
              />
            ))}
          </div>
        </Section>
        <Section bgColor="bg-gray-200">
          <div className="mx-auto max-w-2xl rounded-lg bg-gray-300 p-6 shadow-md dark:bg-gray-800">
            <p className="text-lg font-medium leading-relaxed text-gray-700 dark:text-gray-300">
              {language === "fr"
                ? "Ces thèmes s'inscrivent dans l'objectif d'UST-IO de promouvoir l'innovation technologique et de répondre aux besoins émergents de la transformation digitale, tout en restant complémentaires aux formations proposées par d'autres institutions comme E-media."
                : "These themes align with UST-IO's objective of promoting technological innovation and addressing the emerging needs of digital transformation, while remaining complementary to the programs offered by other institutions like E-media."}
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}
