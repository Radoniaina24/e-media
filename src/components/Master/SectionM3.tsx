"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import Header from "../Licence/Header";
import Section from "../Licence/Section";
import ProgramCard from "./ProgramCard";
import CallToAction from "../Licence/CallToAction";
import Mention from "./Mention";
import MasterCard from "./MasterCard";
import ProgramDetails from "./ProgramDetails";
import CiblePublicCard from "./CiblePublicCard";
import ScrollComponent from "../Scroll/ScrollComponent";
import { useLanguageContext } from "@/lib/context/LanguageContext";

export default function SectionM3() {
  const { language } = useLanguageContext();
  const ciblePublicDataFr = [
    {
      title: "Les titulaires d’une Licence",
      description:
        "Étudiants ayant une base en marketing, communication, journalisme ou sciences sociales, souhaitant évoluer vers des postes de direction ou de haute responsabilité.",
    },
    {
      title: "Les professionnels en activité",
      description:
        "Consultants, managers ou entrepreneurs désireux de perfectionner leurs compétences et de s’adapter aux évolutions rapides des secteurs du digital et des médias.",
    },
    {
      title: "Les futurs leaders du numérique",
      description:
        "Ceux qui veulent influencer et transformer les pratiques marketing et médiatiques grâce à des approches novatrices et une vision globale.",
    },
  ];
  const ciblePublicDataEn = [
    {
      title: "Holders of a Bachelor's degree",
      description:
        "Students with a background in marketing, communication, journalism, or social sciences, looking to advance to leadership or high-responsibility positions.",
    },
    {
      title: "Active professionals",
      description:
        "Consultants, managers, or entrepreneurs seeking to enhance their skills and adapt to the rapid changes in the digital and media sectors.",
    },
    {
      title: "Future digital leaders",
      description:
        "Those who want to influence and transform marketing and media practices through innovative approaches and a global vision.",
    },
  ];
  const ciblePublicData =
    language === "fr" ? ciblePublicDataFr : ciblePublicDataEn;
  const masterFr = [
    {
      title: "M1",
      description:
        "Acquisition des fondements avancés en stratégie numérique, data marketing et journalisme multimédia.",
    },
    {
      title: "M2",
      description:
        " Spécialisation dans l’un des deux parcours, avec des projets pratiques et immersifs.",
    },
    {
      title: "Mémoire de fin d’études",
      description:
        "Les étudiants réalisent un projet de recherche ou une étude appliquée sur des problématiques réelles du marketing digital ou des médias, consolidant ainsi leur expertise et leur valeur sur le marché.",
    },
  ];
  const masterEn = [
    {
      title: "M1",
      description:
        "Acquisition of advanced foundations in digital strategy, data marketing, and multimedia journalism.",
    },
    {
      title: "M2",
      description:
        "Specialization in one of the two tracks, with practical and immersive projects.",
    },
    {
      title: "Final Thesis",
      description:
        "Students conduct a research project or applied study on real-world digital marketing or media issues, thereby consolidating their expertise and value in the market.",
    },
  ];
  const master = language === "fr" ? masterFr : masterEn;
  const careerPathsFr = [
    {
      title: "Marketing et Communication",
      details: [
        "Directeur de stratégie digitale.",
        "Responsable de campagnes marketing à l’international.",
        "Consultant en data marketing et expérience client.",
      ],
    },
    {
      title: "Journalisme et Médias",
      details: [
        "Rédacteur en chef, journaliste d’investigation ou correspondant international.",
        "Producteur de contenus innovants pour plateformes numériques et audiovisuelles.",
        "Responsable éditorial dans des médias traditionnels et numériques.",
      ],
    },
    {
      title: "Publicité et Création",
      details: [
        "Directeur artistique pour agences de communication.",
        "Créateur de campagnes publicitaires immersives et interactives.",
        "Innovateur en storytelling digital et production multimédia.",
      ],
    },
    {
      title: "Entrepreneuriat et Leadership",
      details: [
        "Fondateur de start-up dans les domaines du marketing ou des médias.",
        "Consultant indépendant en stratégie de communication ou de contenu.",
      ],
    },
  ];
  const careerPathsEn = [
    {
      title: "Marketing and Communication",
      details: [
        "Digital strategy director.",
        "International marketing campaign manager.",
        "Consultant in data marketing and customer experience.",
      ],
    },
    {
      title: "Journalism and Media",
      details: [
        "Editor-in-chief, investigative journalist, or international correspondent.",
        "Producer of innovative content for digital and audiovisual platforms.",
        "Editorial manager in traditional and digital media.",
      ],
    },
    {
      title: "Advertising and Creation",
      details: [
        "Art director for communication agencies.",
        "Creator of immersive and interactive advertising campaigns.",
        "Innovator in digital storytelling and multimedia production.",
      ],
    },
    {
      title: "Entrepreneurship and Leadership",
      details: [
        "Founder of start-ups in the marketing or media sectors.",
        "Independent consultant in communication or content strategy.",
      ],
    },
  ];
  const careerPaths = language === "fr" ? careerPathsFr : careerPathsEn;
  const programsFr = [
    {
      title: "Marketing Digital : Stratégie et Innovation",
      description:
        "Ce parcours se concentre sur le développement de compétences stratégiques et opérationnelles pour concevoir, piloter et optimiser des campagnes marketing numériques à fort impact.",
      content: [
        "Développer une expertise en analyse de données marketing (big data, SEO, SEA).",
        "Concevoir des stratégies omnicanales intégrées, combinant e-commerce, réseaux sociaux et publicité digitale.",
        "Maîtriser les technologies émergentes : IA, automation marketing, marketing d’influence.",
        "Construire et gérer des marques en ligne tout en anticipant les crises.",
      ],
      opportunities: [
        "Directeur marketing digital.",
        "Chef de projet en transformation numérique.",
        "Spécialiste en branding et gestion d’e-réputation.",
        "Consultant en stratégie digitale pour entreprises ou organisations internationales.",
      ],
    },
    {
      title: "Journalisme Multimédia : Création et Impact",
      description:
        "Ce parcours forme des journalistes et des créateurs de contenu capables de produire des informations percutantes et adaptées aux plateformes modernes. L’accent est mis sur l’innovation éditoriale, les formats multimédias et la gestion des médias numériques.",
      content: [
        "Maîtriser les techniques avancées de journalisme narratif et d’investigation.",
        "Produire des contenus multimédias de qualité (vidéos, podcasts, storytelling interactif).",
        "Développer des stratégies éditoriales innovantes pour le web et les réseaux sociaux.",
        "Comprendre et appliquer les principes d’éthique et de déontologie dans un environnement numérique.",
      ],
      opportunities: [
        "Journaliste senior ou rédacteur en chef numérique.",
        "Producteur de contenus audiovisuels pour médias ou entreprises.",
        "Consultant en stratégie éditoriale et journalisme d’impact.",
        "Responsable de rédaction ou d’équipe journalistique.",
      ],
    },
  ];
  const programsEn = [
    {
      title: "Digital Marketing: Strategy and Innovation",
      description:
        "This track focuses on developing strategic and operational skills to design, lead, and optimize high-impact digital marketing campaigns.",
      content: [
        "Develop expertise in marketing data analysis (big data, SEO, SEA).",
        "Design integrated omnichannel strategies combining e-commerce, social media, and digital advertising.",
        "Master emerging technologies: AI, marketing automation, influencer marketing.",
        "Build and manage online brands while anticipating crises.",
      ],
      opportunities: [
        "Digital marketing director.",
        "Project manager in digital transformation.",
        "Specialist in branding and e-reputation management.",
        "Consultant in digital strategy for companies or international organizations.",
      ],
    },
    {
      title: "Multimedia Journalism: Creation and Impact",
      description:
        "This track trains journalists and content creators to produce impactful information tailored to modern platforms. The focus is on editorial innovation, multimedia formats, and digital media management.",
      content: [
        "Master advanced techniques in narrative and investigative journalism.",
        "Produce high-quality multimedia content (videos, podcasts, interactive storytelling).",
        "Develop innovative editorial strategies for web and social media.",
        "Understand and apply ethical and deontological principles in a digital environment.",
      ],
      opportunities: [
        "Senior journalist or digital editor-in-chief.",
        "Producer of audiovisual content for media or businesses.",
        "Consultant in editorial strategy and impact journalism.",
        "Editorial or journalistic team leader.",
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
      ? "MASTER EN MARKETING DIGITAL ET JOURNALISME (MDJ - M)"
      : "MASTER'S IN DIGITAL MARKETING AND JOURNALISM (MDJ - M)";
  const subtitle =
    language === "fr"
      ? "Le Master en Marketing Digital et Journalisme (MDJ) d’E-Media est une formation d’excellence, spécialement conçue pour former des cadres supérieurs et des experts capables d’anticiper, de piloter et de transformer les stratégies marketing et journalistiques à l’ère du numérique. Ce programme, unique à Madagascar, associe innovation, leadership stratégique et expertise opérationnelle pour répondre aux exigences croissantes des entreprises et des médias modernes."
      : "The Master's program in Digital Marketing and Journalism (MDJ) at E-Media is a prestigious training program specifically designed to develop senior executives and experts capable of anticipating, driving, and transforming marketing and journalistic strategies in the digital age. This unique program in Madagascar combines innovation, strategic leadership, and operational expertise to meet the growing demands of modern businesses and media.";
  return (
    <div>
      {/* Header */}
      <Header
        id="master3"
        title={title}
        subtitle={subtitle}
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736771303/MASTER-EN-MARKETING-DIGITAL-ET-JOURNALISME-_MDJ---M_nky7j7.jpg"
      />
      <div
        id="master3"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <ScrollComponent text={title} />
        <Mention
          domain={
            language === "fr" ? "Sciences de la Société" : "Social Sciences"
          }
          mention={
            language === "fr"
              ? "Marketing Digital et Journalisme"
              : "Digital Marketing and Journalism"
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
            {language === "fr"
              ? "Ce Master est destiné à :"
              : "This Master's program is intended for:"}
          </h3>

          <div className=" text-md mt-4 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {ciblePublicData.map((item, index) => (
              <CiblePublicCard key={index} data={item} />
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
              ? "Le Master en MDJ est un programme intensif et structuré sur 2 ans après la Licence (soit 4 semestres):"
              : "The Master's in MDJ is an intensive program structured over 2 years after the Bachelor's degree (4 semesters):"
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
              ? "Débouchés professionnels globaux"
              : "Global Career Opportunities"
          }
          content={
            language === "fr"
              ? "Les diplômés du Master MDJ disposent des compétences nécessaires pour occuper des postes stratégiques et de leadership dans :"
              : "Graduates of the MDJ Master's program possess the skills needed to take on strategic and leadership roles in:"
          }
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {careerPaths.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </Section>

        <Section
          bgColor="bg-gray-100"
          title={
            language === "fr"
              ? "Une formation axée sur l’excellence et le leadership"
              : "A Program Focused on Excellence and Leadership"
          }
          content={
            language === "fr"
              ? "Le Master en Marketing Digital et Journalisme d’E-Media offre une approche résolument professionnelle et stratégique. Les étudiants sont formés à anticiper les tendances mondiales, à intégrer les outils technologiques les plus récents et à diriger avec assurance dans des environnements dynamiques et compétitifs."
              : "The Master’s in Digital Marketing and Journalism from E-Media offers a highly professional and strategic approach. Students are trained to anticipate global trends, integrate the latest technological tools, and lead confidently in dynamic and competitive environments."
          }
        ></Section>
        <Section bgColor="bg-primary">
          {language === "fr" ? (
            <CallToAction
              description={
                "Rejoignez-nous dès maintenant pour devenir un leader dans le marketing et les médias numériques !"
              }
              buttonText={"Préinscriptions ouvertes ici"}
              buttonLink={""}
              heading={""}
            />
          ) : (
            <CallToAction
              description={
                "Join us now to become a leader in digital marketing and media!"
              }
              buttonText={"Pre-enroll here"}
              buttonLink={""}
              heading={""}
            />
          )}
        </Section>
      </div>
    </div>
  );
}
