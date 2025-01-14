"use client";

import Section from "./Section";
import Card from "./Card";
import Header from "./Header";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import MasterCard from "../Master/MasterCard";
import ProgramCard from "../Master/ProgramCard";
import ScrollComponent from "../Scroll/ScrollComponent";
import { useLanguageContext } from "@/lib/context/LanguageContext";
export default function SectionL3() {
  const { language } = useLanguageContext();
  const currentWorldFr = [
    {
      title: "Bacheliers de toutes filières",
      description:
        "Idéal pour ceux souhaitant s’orienter vers des métiers créatifs et stratégiques.",
    },
    {
      title: "Professionnels en activité",
      description:
        "Entrepreneurs, salariés ou fonctionnaires cherchant à renforcer leurs compétences dans le digital et les médias.",
    },
    {
      title: "Acteurs de tous secteurs",
      description:
        "La communication et le marketing étant transversaux, ils concernent les secteurs primaire, secondaire et surtout tertiaire.",
    },
  ];
  const currentWorldEn = [
    {
      title: "Graduates from all fields",
      description:
        "Ideal for those looking to pursue creative and strategic careers.",
    },
    {
      title: "Active Professionals",
      description:
        "Entrepreneurs, employees, or civil servants looking to enhance their skills in digital and media fields.",
    },
    {
      title: "Actors from all sectors",
      description:
        "Communication and marketing are transversal, impacting primary, secondary, and especially tertiary sectors.",
    },
  ];
  const currentWorld = language === "fr" ? currentWorldFr : currentWorldEn;

  const currentWorld2Fr = {
    items: [
      "Le marketing digital est indispensable pour gérer la visibilité en ligne des entreprises et développer des stratégies percutantes.",
      "Le journalisme multimédia permet de produire des contenus adaptés aux plateformes numériques et de répondre à la demande croissante d’information en temps réel.",
      "Cette formation forme des professionnels capables d’innover, de s’adapter aux nouveaux outils et de piloter des campagnes ou des projets médiatiques.",
    ],
  };
  const currentWorld2En = {
    items: [
      "Digital marketing is essential for managing online visibility for businesses and developing impactful strategies.",
      "Multimedia journalism enables the production of content tailored to digital platforms and meets the growing demand for real-time information.",
      "This program trains professionals who are capable of innovating, adapting to new tools, and managing media campaigns or projects.",
    ],
  };
  const currentWorld2 = language === "fr" ? currentWorld2Fr : currentWorld2En;
  const licences = [
    {
      title: "L1",
      description:
        "10 mois pour maîtriser les fondamentaux du marketing, de la communication et du journalisme.",
    },
    {
      title: "L2",
      description:
        "10 mois pour approfondir les compétences techniques et analytiques.",
    },
    {
      title: "L3",
      description:
        "10 mois pour se spécialiser et développer une expertise professionnelle.",
    },
  ];
  const careerPathsFr = [
    {
      title: "Marketing Digital et Communication",
      details: [
        "Responsable marketing digital",
        "Chef de projet en stratégie digitale",
        "Social media manager",
        "Spécialiste en publicité numérique et branding",
        "Spécialiste en production musicale",
        "Consultant en communication et e-commerce",
      ],
    },
    {
      title: "Journalisme et Médias",
      details: [
        "Journaliste multimédia (web, TV, radio, presse)",
        "Reporter ou correspondant numérique",
        "Producteur de contenus audiovisuels et podcasts",
        "Rédacteur web ou storyteller multimédia",
      ],
    },
    {
      title: "Publicité et Création",
      details: [
        "Directeur artistique ou concepteur-rédacteur",
        "Créateur de campagnes publicitaires et visuelles",
        "Spécialiste en design interactif et production de contenu multimédia",
      ],
    },
    {
      title: "Entrepreneuriat et Développement",
      details: [
        "Consultant en stratégie de contenu ou analyse de données",
        "Créateur de start-up dans les médias ou le marketing digital",
        "Expert en SEO/SEA et marketing de contenu",
      ],
    },
  ];
  const careerPathsEn = [
    {
      title: "Digital Marketing and Communication",
      details: [
        "Digital Marketing Manager",
        "Digital Strategy Project Manager",
        "Social Media Manager",
        "Digital Advertising and Branding Specialist",
        "Music Production Specialist",
        "Communication and E-commerce Consultant",
      ],
    },
    {
      title: "Journalism and Media",
      details: [
        "Multimedia Journalist (web, TV, radio, press)",
        "Digital Reporter or Correspondent",
        "Audiovisual and Podcast Content Producer",
        "Web Writer or Multimedia Storyteller",
      ],
    },
    {
      title: "Advertising and Creation",
      details: [
        "Art Director or Copywriter",
        "Advertising and Visual Campaign Creator",
        "Interactive Design and Multimedia Content Production Specialist",
      ],
    },
    {
      title: "Entrepreneurship and Development",
      details: [
        "Content Strategy or Data Analysis Consultant",
        "Startup Founder in Media or Digital Marketing",
        "SEO/SEA and Content Marketing Expert",
      ],
    },
  ];
  const careerPaths = language === "fr" ? careerPathsFr : careerPathsEn;
  const parcoursCFr = [
    {
      title: "Marketing Digital",
      description:
        "Focus sur la stratégie numérique, les réseaux sociaux, la publicité en ligne et le branding",
    },
    {
      title: "Journalisme",
      description:
        " Axé sur les techniques journalistiques modernes, le storytelling numérique et la production audiovisuelle.",
    },
  ];
  const parcoursCEn = [
    {
      title: "Digital Marketing",
      description:
        "Focus on digital strategy, social media, online advertising, and branding.",
    },
    {
      title: "Journalism",
      description:
        "Focused on modern journalistic techniques, digital storytelling, and audiovisual production.",
    },
  ];
  const parcoursC = language === "fr" ? parcoursCFr : parcoursCEn;
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Type d'animation
    });
  }, []);
  const title =
    language === "fr"
      ? "MARKETING DIGITAL ET JOURNALISME (MDJ - L ) - LICENCE"
      : "DIGITAL MARKETING AND JOURNALISM (MDJ - L) - BACHELOR'S DEGREE";
  const subtitle =
    language === "fr"
      ? "La Licence en Marketing Digital et Journalisme (MDJ) d’E-Media est une formation multidisciplinaire qui combine innovation digitale, communication et journalisme. Conçue pour répondre aux besoins des entreprises et des médias modernes, elle prépare les étudiants à s’imposer dans des secteurs en pleine transformation."
      : "E-Media's Bachelor's degree in Digital Marketing and Journalism (MDJ) is a multidisciplinary program that combines digital innovation, communication, and journalism. Designed to meet the needs of modern businesses and media, it prepares students to thrive in rapidly transforming sectors.";
  return (
    <div>
      {/* Header */}
      <Header
        id="sectionL3"
        title={title}
        subtitle={subtitle}
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736658993/MDJ_daojyr.jpg"
      />
      <div
        id="sectionL3"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <ScrollComponent text={title} />
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

        <Section
          title={
            language === "fr"
              ? "Pourquoi cette licence est essentielle aujourd’hui ?"
              : "Why is this Bachelor's degree essential today ?"
          }
          content={
            language === "fr"
              ? "Dans un monde hyperconnecté, les compétences en marketing digital et journalisme sont essentielles pour capter et fidéliser l’attention du public."
              : "In a hyperconnected world, skills in digital marketing and journalism are crucial for capturing and retaining the audience's attention. With the constant evolution of media and communication platforms, mastering these areas enables professionals to create impactful content, engage with diverse audiences, and drive brand success in the digital age."
          }
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
              ? "Un programme structuré et pratique"
              : "A Structured and Practical Program"
          }
          content={
            language === "fr"
              ? "La Licence MDJ se déroule sur 3 ans, avec un format progressif :"
              : "The MDJ Bachelor's degree spans 3 years, following a progressive format:"
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
        <Section bgColor="bg-gray-100">
          <h3 className="text-bold mb-10 text-center text-xl font-semibold dark:text-gray-400">
            {language === "fr"
              ? " Les étudiants choisissent parmi deux parcours spécialisés :"
              : "Students choose from two specialized tracks:"}
          </h3>

          <div className="text-md mt-4 flex flex-wrap justify-center gap-6 text-center font-normal">
            {parcoursC.map((item, index) => (
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
              ? "Débouchés professionnels"
              : "Career Opportunities"
          }
          bgColor="bg-gray-100"
          content={
            language === "fr"
              ? "Les diplômés de la Licence MDJ accèdent à des postes variés et dynamiques dans :"
              : "Graduates of the MDJ Bachelor's degree can access diverse and dynamic positions in:"
          }
        >
          <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            {careerPaths.map((path, index) => (
              <ProgramCard key={index} program={path} />
            ))}
          </div>
        </Section>

        <Section bgColor="bg-gray-100" title="" content="">
          <div className="flex justify-center ">
            <p className=" m-auto  text-center text-xl font-medium leading-relaxed text-gray-500 md:text-xl">
              {language === "fr"
                ? "Avec cette licence, les diplômés deviennent des professionnels prêts à innover dans les secteurs en constante évolution du marketing et des médias numériques."
                : "With this degree, graduates become professionals ready to innovate in the ever-evolving sectors of marketing and digital media."}
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}
