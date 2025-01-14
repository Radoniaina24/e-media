"use client";
import React from "react";
import Section from "../Licence/Section";
import Card from "../Licence/Card";
import ProgramCard from "../Master/ProgramCard";
import Header from "../Licence/Header";
import DurationCard from "./DurationCard";
import ScrollComponent from "../Scroll/ScrollComponent";
import { useLanguageContext } from "@/lib/context/LanguageContext";

export default function SectionDTS() {
  const { language } = useLanguageContext();
  const title =
    language === "fr"
      ? "DTS – DIPLÔME DE TECHNICIEN SUPÉRIEUR"
      : "DTS – HIGHER TECHNICIAN DIPLOMA";
  const subtitle =
    language === "fr"
      ? "Le DTS est une formation intensive et complète, regroupant les quatre spécialités décrites ci-dessus : Production Audio & MAO, Sonorisation et Lumières de Spectacle, Cinéphotographie, Post-production et 3D, et Web : Création et Développement Multimédia. Ce programme unique s’adresse à ceux qui souhaitent acquérir une expertise multidisciplinaire, combinant les compétences techniques et créatives essentielles pour exceller dans les industries numériques, culturelles et événementielles."
      : "The DTS is an intensive and comprehensive training program encompassing the four specialties described above: Audio Production & Digital Audio Workstations (DAW), Sound and Stage Lighting, Cinematography, Post-production & 3D, and Web: Multimedia Creation and Development. This unique program is designed for those who aspire to gain multidisciplinary expertise, combining the technical and creative skills essential for excelling in the digital, cultural, and event industries.";

  const debouchesProfessionnelsFr = [
    {
      title: "Technicien audiovisuel",
      details: [
        "Interventions sur les plateaux de tournage, en studios, ou lors d’événements live.",
      ],
    },
    {
      title: "Producteur ou ingénieur du son",
      details: [
        "Réalisation et production de contenus sonores pour les médias et l’industrie musicale.",
      ],
    },
    {
      title: "Créateur de contenu visuel",
      details: [
        "Production de vidéos, photographies et animations pour les plateformes numériques.",
      ],
    },
    {
      title: "Développeur web et multimédia",
      details: [
        "Création de sites, applications interactives et stratégies numériques.",
      ],
    },
    {
      title: "Régisseur technique",
      details: [
        "Gestion des installations audio et lumineuses lors de spectacles ou événements.",
      ],
    },
    {
      title: "Entrepreneur créatif",
      details: [
        "Lancement d’un studio ou d’une agence spécialisée dans l’audiovisuel, le multimédia ou l’événementiel.",
      ],
    },
  ];
  const debouchesProfessionnelsEn = [
    {
      title: "Audiovisual Technician",
      details: [
        "Interventions on film sets, in studios, or during live events.",
      ],
    },
    {
      title: "Producer or Sound Engineer",
      details: [
        "Creation and production of audio content for media and the music industry.",
      ],
    },
    {
      title: "Visual Content Creator",
      details: [
        "Production of videos, photographs, and animations for digital platforms.",
      ],
    },
    {
      title: "Web and Multimedia Developer",
      details: [
        "Creation of websites, interactive applications, and digital strategies.",
      ],
    },
    {
      title: "Technical Manager",
      details: [
        "Management of audio and lighting installations during shows or events.",
      ],
    },
    {
      title: "Creative Entrepreneur",
      details: [
        "Launching a studio or agency specializing in audiovisual, multimedia, or event industries.",
      ],
    },
  ];
  const debouchesProfessionnels =
    language === "fr" ? debouchesProfessionnelsFr : debouchesProfessionnelsEn;
  const avantagesFormationFr = [
    {
      title: "Une expertise multidisciplinaire",
      details: [
        "Idéal pour ceux qui souhaitent une carrière variée et dynamique.",
      ],
    },
    {
      title: "Reconnaissance officielle",
      details: [
        "Diplôme agréé par l’État, ouvrant des opportunités nationales et internationales.",
      ],
    },
    {
      title: "Insertion professionnelle rapide",
      details: [
        "Une formation intensive et complète, en lien direct avec les besoins du marché.",
      ],
    },
    {
      title: "Opportunité d’évolution",
      details: [
        "Prépare les apprenants à poursuivre vers des spécialisations.",
        "Permet une évolution rapide dans leur carrière.",
      ],
    },
  ];
  const avantagesFormationEn = [
    {
      title: "Multidisciplinary Expertise",
      details: ["Ideal for those who seek a varied and dynamic career."],
    },
    {
      title: "Official Recognition",
      details: [
        "State-accredited diploma, opening national and international opportunities.",
      ],
    },
    {
      title: "Rapid Professional Integration",
      details: [
        "An intensive and comprehensive training program, directly aligned with market needs.",
      ],
    },
    {
      title: "Opportunity for Growth",
      details: [
        "Prepares learners to pursue specializations.",
        "Enables rapid career advancement.",
      ],
    },
  ];
  const avantagesFormation =
    language === "fr" ? avantagesFormationFr : avantagesFormationEn;
  const objectifsFormationFr = [
    {
      item: "Offrir une maîtrise approfondie dans les domaines clés des industries créatives et numériques.",
    },
    {
      item: "Former des techniciens supérieurs capables de s’adapter à différents environnements professionnels : studio, scène, audiovisuel, multimédia et web.",
    },
    {
      item: "Préparer les apprenants à intégrer rapidement le marché du travail avec des compétences pratiques et certifiées.",
    },
  ];
  const objectifsFormationEn = [
    {
      item: "Provide in-depth expertise in key areas of the creative and digital industries.",
    },
    {
      item: "Train higher-level technicians capable of adapting to various professional environments: studio, stage, audiovisual, multimedia, and web.",
    },
    {
      item: "Prepare learners to quickly integrate into the job market with practical and certified skills.",
    },
  ];
  const objectifsFormation =
    language === "fr" ? objectifsFormationFr : objectifsFormationEn;
  const formationsFr = [
    {
      title: "Production Audio & MAO",
      details: [
        "Techniques d’enregistrement et de mixage.",
        "Création musicale assistée par ordinateur (MAO).",
        "Production de contenus sonores adaptés aux médias, jeux vidéo, publicités, et projets artistiques.",
      ],
    },
    {
      title: "Sonorisation et Lumières de Spectacle",
      details: [
        "Installation et gestion des équipements audio et éclairage pour des événements live.",
        "Programmation et gestion des scènes lumineuses pour concerts, spectacles et conférences.",
        "Réactivité et dépannage technique en temps réel.",
      ],
    },
    {
      title: "Cinématographie, Post-production, Photographie et 3D",
      details: [
        "Techniques avancées de prise de vue et montage vidéo.",
        "Création d’effets spéciaux et animation 3D.",
        "Réalisation de contenus visuels pour les médias numériques et les plateformes de streaming.",
      ],
    },
    {
      title: "Web : Création et Développement Multimédia",
      details: [
        "Développement de sites web modernes et performants.",
        "Conception d’interfaces utilisateur (UI/UX).",
        "Optimisation SEO et stratégies de marketing digital.",
      ],
    },
  ];
  const formationsEn = [
    {
      title: "Audio Production & Digital Audio Workstations (DAW)",
      details: [
        "Recording and mixing techniques.",
        "Computer-assisted music creation (DAW).",
        "Production of audio content for media, video games, advertisements, and artistic projects.",
      ],
    },
    {
      title: "Sound and Stage Lighting",
      details: [
        "Installation and management of audio and lighting equipment for live events.",
        "Programming and managing lighting setups for concerts, performances, and conferences.",
        "Real-time troubleshooting and technical support.",
      ],
    },
    {
      title: "Cinematography, Post-production, Photography, and 3D",
      details: [
        "Advanced filming and video editing techniques.",
        "Creation of special effects and 3D animation.",
        "Production of visual content for digital media and streaming platforms.",
      ],
    },
    {
      title: "Web: Multimedia Creation and Development",
      details: [
        "Development of modern and high-performance websites.",
        "User interface (UI/UX) design.",
        "SEO optimization and digital marketing strategies.",
      ],
    },
  ];
  const formations = language === "fr" ? formationsFr : formationsEn;
  const competencesDeveloppeesFr = [
    {
      title: "Compétences audio",
      details: [
        "Enregistrement, mixage, production musicale, sonorisation live.",
      ],
    },
    {
      title: "Compétences visuelles",
      details: ["Photographie, cinématographie, montage, animation 3D."],
    },
    {
      title: "Compétences numériques",
      details: ["Développement web, design d’interfaces, marketing digital."],
    },
    {
      title: "Gestion de projets",
      details: [
        "Planification, exécution et suivi de projets techniques et créatifs.",
      ],
    },
  ];
  const competencesDeveloppeesEn = [
    {
      title: "Audio Skills",
      details: [
        "Recording, mixing, music production, live sound reinforcement.",
      ],
    },
    {
      title: "Visual Skills",
      details: ["Photography, cinematography, editing, 3D animation."],
    },
    {
      title: "Digital Skills",
      details: ["Web development, interface design, digital marketing."],
    },
    {
      title: "Project Management",
      details: [
        "Planning, execution, and monitoring of technical and creative projects.",
      ],
    },
  ];
  const competencesDeveloppees =
    language === "fr" ? competencesDeveloppeesFr : competencesDeveloppeesEn;
  const text =
    language === "fr"
      ? "Ce programme constitue une passerelle vers des carrières prometteuses dans les industries numériques, audiovisuelles, événementielles et web."
      : "This program serves as a gateway to promising careers in the digital, audiovisual, event, and web industries.";
  return (
    <div>
      <Header
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736499996/DTS-_-DIPL%C3%94ME-DE-TECHNICIEN-SUP%C3%89RIEUR_ztfk0v.jpg"
        id="dts"
        title={title}
        subtitle={subtitle}
      />
      <div id="dts" className="container">
        <ScrollComponent text={title} />
        <DurationCard
          duration={
            language === "fr"
              ? " 12 mois de formation + 2 mois de stage en entreprise."
              : "12 months of training + 2 months of internship in a company."
          }
        />
        <Section>
          <h1 className=" mb-9 text-2xl font-extrabold text-dark">
            {language === "fr"
              ? " Objectifs de la formation"
              : "Training Objectives"}
          </h1>

          <div className=" text-md mt-4 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {objectifsFormation.map((item, index) => (
              <Card key={index} title={item.item} items={[]} />
            ))}
          </div>
        </Section>

        <Section>
          <h1 className="mb-9 text-2xl font-extrabold text-dark">
            {language === "fr" ? " Contenu du programme" : "Program Content"}
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {formations.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </Section>
        <Section
          title={language === "fr" ? "Stage de 2 mois" : "2-Month Internship"}
          content={
            language === "fr"
              ? "À la fin de la formation, les apprenants réalisent un stage pratique en entreprise dans l’un des secteurs couverts (studio, audiovisuel, événementiel, multimédia ou web). Ce stage leur permet d’appliquer les compétences acquises tout en se familiarisant avec le milieu professionnel."
              : "At the end of the training, learners complete a practical internship in a company within one of the covered sectors (studio, audiovisual, events, multimedia, or web). This internship allows them to apply the skills they have acquired while becoming familiar with the professional environment."
          }
        ></Section>

        <Section>
          <h1 className="mb-9 text-2xl font-extrabold text-dark">
            {language === "fr"
              ? "Compétences clés développées"
              : "Key Skills Developed"}
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {competencesDeveloppees.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </Section>
        <Section>
          <h1 className="mb-9 text-2xl font-extrabold text-dark">
            {language === "fr"
              ? "Débouchés professionnels"
              : "Career Opportunities"}
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {debouchesProfessionnels.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </Section>

        <Section>
          <h1 className="mb-9 text-2xl font-extrabold text-dark">
            {language === "fr"
              ? "Pourquoi choisir le DTS ?"
              : "Why Choose the DTS?"}
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {avantagesFormation.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </Section>

        <Section>
          <div className="my-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white shadow-lg transition-colors duration-300 dark:from-gray-800 dark:to-gray-900 dark:text-gray-200">
            <p className="text-lg">{text}</p>
          </div>
        </Section>
        {/* <Section bgColor="bg-gray-500">
        <CallToAction
          heading={""}
          description={
            "Rejoignez dès maintenant cette formation pour développer des compétences pratiques et construire une carrière prometteuse !"
          }
          buttonText={"Inscrivez-vous ici"}
          buttonLink={""}
        />
      </Section> */}
      </div>
    </div>
  );
}
