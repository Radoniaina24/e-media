"use client";
import React from "react";
import FormationAudio from "./Formation";
import Section from "../Licence/Section";
import CardCFP from "./CardCFP";
import ScrollComponent from "../Scroll/ScrollComponent";
import DurationCard from "./DurationCard";
import { useLanguageContext } from "@/lib/context/LanguageContext";

export default function SectionMultimedia() {
  const { language } = useLanguageContext();
  const title =
    language === "fr"
      ? "WEB : CRÉATION ET DÉVELOPPEMENT MULTIMÉDIA"
      : "WEB: MULTIMEDIA CREATION AND DEVELOPMENT";
  const subtitle =
    language === "fr"
      ? "Cette formation pratique et immersive prépare les apprenants à concevoir, développer et optimiser des sites web modernes, performants et adaptés aux besoins des utilisateurs. En combinant les compétences en programmation et en design, cette formation permet de maîtriser les langages de programmation, les aspects visuels, et les techniques avancées de gestion de projets numériques. Un certificat agréé par l’État est délivré à l’issue de la formation, garantissant une reconnaissance officielle des compétences."
      : "This practical and immersive training prepares learners to design, develop, and optimize modern, high-performance websites tailored to user needs. By combining programming and design skills, the program enables mastery of programming languages, visual aspects, and advanced digital project management techniques. A state-recognized certificate is awarded upon completion of the training, ensuring official recognition of the skills acquired.";

  const formationEventFr = {
    pointsForts: [
      {
        titre: "Projets concrets",
        description:
          "Les apprenants participent à la création de sites web, de boutiques en ligne, et d’applications interactives basées sur des besoins réels.",
      },
      {
        titre: "Introduction aux technologies avancées",
        description:
          "Techniques de référencement (SEO), optimisation des performances web et gestion de projets numériques.",
      },
      {
        titre: "Formation par des experts",
        description:
          "Encadrement assuré par des professionnels expérimentés dans le développement web, le design UI/UX, et la gestion de projets multimédias.",
      },
      {
        titre: "Certification reconnue",
        description:
          "Un certificat délivré par la FOP (Formation d’Orientation Professionnelle), reconnu par l’État malagasy, renforce l’employabilité des diplômés.",
      },
    ],
    competencesDeveloppees: [
      {
        categorie: "Programmation web",
        details: [
          "Maîtrise des langages essentiels tels que HTML, CSS, JavaScript, PHP, et MySQL pour le développement front-end et back-end.",
          "Création de sites dynamiques et interactifs.",
        ],
      },
      {
        categorie:
          "Création graphique et design d’interfaces utilisateur (UI/UX)",
        details: [
          "Conception d’interfaces modernes, ergonomiques et adaptées aux utilisateurs.",
          "Utilisation de logiciels tels qu’Adobe XD, Figma, ou Sketch pour le prototypage et le design.",
        ],
      },
      {
        categorie: "Gestion de projets web",
        details: [
          "Planification et gestion de projets numériques avec des outils comme Trello ou Asana.",
          "Coordination des équipes pour la création de solutions complètes, de la conception au déploiement.",
        ],
      },
      {
        categorie: "Optimisation SEO et marketing numérique",
        details: [
          "Techniques de référencement naturel (SEO) et optimisation des performances web.",
          "Stratégies de marketing digital adaptées aux besoins des entreprises.",
        ],
      },
    ],
    debouchesProfessionnels: [
      {
        categorie: "Développeur web",
        details: [
          "Responsable de la création, du développement et de la maintenance de sites web.",
          "Spécialisation possible en front-end, back-end ou full-stack.",
        ],
      },
      {
        categorie: "Web designer",
        details: [
          "Conception et amélioration des interfaces utilisateur pour une expérience optimale.",
          "Création de contenus graphiques adaptés aux plateformes numériques.",
        ],
      },
      {
        categorie: "Gestionnaire de projets multimédias",
        details: [
          "Supervision de projets numériques, depuis la conception jusqu’au déploiement.",
          "Collaboration avec des équipes de développeurs, designers et marketeurs.",
        ],
      },
      {
        categorie: "Consultant en référencement et marketing numérique",
        details: [
          "Aide aux entreprises pour améliorer leur visibilité en ligne et leur stratégie digitale.",
          "Audit SEO, gestion de campagnes publicitaires en ligne, et optimisation de contenu.",
        ],
      },
      {
        categorie: "Freelance ou entrepreneur",
        details: [
          "Création et gestion de son propre portefeuille de clients en tant que développeur ou consultant digital.",
        ],
      },
    ],
  };
  const formationEventEn = {
    pointsForts: [
      {
        titre: "Concrete projects",
        description:
          "Learners engage in creating websites, online stores, and interactive applications based on real-world needs.",
      },
      {
        titre: "Introduction to advanced technologies",
        description:
          "Techniques for search engine optimization (SEO), web performance optimization, and digital project management.",
      },
      {
        titre: "Training by experts",
        description:
          "Guidance provided by experienced professionals in web development, UI/UX design, and multimedia project management.",
      },
      {
        titre: "Recognized certification",
        description:
          "A certificate issued by FOP (Formation d’Orientation Professionnelle), recognized by the Malagasy State, enhances graduates' employability.",
      },
    ],
    competencesDeveloppees: [
      {
        categorie: "Web programming",
        details: [
          "Mastery of essential languages like HTML, CSS, JavaScript, PHP, and MySQL for front-end and back-end development.",
          "Creation of dynamic and interactive websites.",
        ],
      },
      {
        categorie: "Graphic creation and user interface design (UI/UX)",
        details: [
          "Design of modern, ergonomic, and user-friendly interfaces.",
          "Use of tools like Adobe XD, Figma, or Sketch for prototyping and design.",
        ],
      },
      {
        categorie: "Web project management",
        details: [
          "Planning and managing digital projects using tools like Trello or Asana.",
          "Coordinating teams to deliver complete solutions, from conception to deployment.",
        ],
      },
      {
        categorie: "SEO optimization and digital marketing",
        details: [
          "Techniques for natural referencing (SEO) and web performance optimization.",
          "Digital marketing strategies tailored to business needs.",
        ],
      },
    ],
    debouchesProfessionnels: [
      {
        categorie: "Web developer",
        details: [
          "Responsible for creating, developing, and maintaining websites.",
          "Potential specialization in front-end, back-end, or full-stack development.",
        ],
      },
      {
        categorie: "Web designer",
        details: [
          "Design and improvement of user interfaces for optimal user experiences.",
          "Creation of graphic content tailored to digital platforms.",
        ],
      },
      {
        categorie: "Multimedia project manager",
        details: [
          "Supervision of digital projects from conception to deployment.",
          "Collaboration with teams of developers, designers, and marketers.",
        ],
      },
      {
        categorie: "Consultant in SEO and digital marketing",
        details: [
          "Helping businesses improve their online visibility and digital strategies.",
          "SEO audits, management of online advertising campaigns, and content optimization.",
        ],
      },
      {
        categorie: "Freelancer or entrepreneur",
        details: [
          "Building and managing a personal client portfolio as a developer or digital consultant.",
        ],
      },
    ],
  };
  const formationEvent =
    language === "fr" ? formationEventFr : formationEventEn;
  const forcesFormationFr = [
    {
      titre: "Polyvalence des compétences",
      description:
        "Les participants développent des compétences applicables à de nombreux secteurs : publicité, cinéma, photographie, modélisation 3D, médias sociaux et entreprises créatives.",
    },
    {
      titre: "Dynamisme des secteurs visés",
      description:
        "La demande pour des professionnels en cinématographie, montage vidéo, photographie et 3D est en pleine croissance, particulièrement avec l’essor des contenus numériques et immersifs.",
    },
    {
      titre: "Insertion professionnelle rapide",
      description:
        "Grâce à la création d’un portfolio professionnel et aux nombreux projets pratiques, les diplômés sont prêts à intégrer le marché du travail dès la fin de leur formation.",
    },
    {
      titre: "Certification officielle",
      description:
        "La délivrance d’un certificat agréé par l’État garantit une reconnaissance officielle des compétences, renforçant la crédibilité et l’employabilité des diplômés auprès des employeurs.",
    },
  ];
  const forcesFormationEn = [
    {
      titre: "Versatility of skills",
      description:
        "Participants develop skills applicable to many sectors: advertising, cinema, photography, 3D modeling, social media, and creative businesses.",
    },
    {
      titre: "Dynamism of targeted sectors",
      description:
        "The demand for professionals in cinematography, video editing, photography, and 3D is growing rapidly, particularly with the rise of digital and immersive content.",
    },
    {
      titre: "Rapid professional integration",
      description:
        "Thanks to the creation of a professional portfolio and numerous practical projects, graduates are ready to enter the job market as soon as they complete their training.",
    },
    {
      titre: "Official certification",
      description:
        "The issuance of a state-accredited certificate guarantees official recognition of skills, enhancing graduates' credibility and employability with employers.",
    },
  ];
  const forcesFormation =
    language === "fr" ? forcesFormationFr : forcesFormationEn;
  const text =
    language === "fr"
      ? "Cette formation est idéale pour les passionnés de technologie et de création numérique, souhaitant construire une carrière solide et pérenne dans un secteur en constante évolution."
      : "This training is ideal for technology and digital creation enthusiasts looking to build a solid and sustainable career in a constantly evolving sector.";
  return (
    <div>
      <HeaderWebMultimedia
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736491651/WEB--CR%C3%89ATION-ET-D%C3%89VELOPPEMENT-MULTIM%C3%89DIA_ffftkh.jpg"
        id="multimedia"
        title={title}
        subtitle={subtitle}
      />
      <div id="multimedia" className="container">
        <ScrollComponent text={title} />
        <DurationCard duration={language === "fr" ? "5 mois " : "5 months"} />
        <FormationAudio data={formationEvent} />
        <Section
          title={
            language === "fr"
              ? "Pourquoi choisir cette formation professionnelle ?"
              : "Why choose this professional training program?"
          }
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {forcesFormation.map((force, index) => (
              <CardCFP
                key={index}
                title={force.titre}
                description={force.description}
              />
            ))}
          </div>
        </Section>
        <div className="my-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white shadow-lg transition-colors duration-300 dark:from-gray-800 dark:to-gray-900 dark:text-gray-200">
          <h2 className="mb-4 text-2xl font-bold">
            {language === "fr"
              ? "Faites le choix d'une formation exceptionnelle !"
              : "Choose an exceptional training program!"}
          </h2>
          <p className="text-lg">{text}</p>
        </div>
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

interface HeaderProps {
  id?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string; // Call to action text for the button
  ctaLink?: string; // URL for the call to action button
  imageSrc?: string;
}

const HeaderWebMultimedia: React.FC<HeaderProps> = ({
  title,
  id,
  subtitle,
  imageSrc = "/images/why/fond.jpg",
}) => {
  const { language } = useLanguageContext();
  return (
    <header className="relative h-screen w-full bg-cover bg-center py-16 text-white">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${imageSrc}")` }}
      ></div>

      {/* Contenu */}
      <div className="relative z-10 flex h-full items-center justify-center px-8 sm:justify-center md:justify-end">
        <div className=" max-w-xl space-y-6 text-right md:mr-32">
          {/* Titre */}
          <h1 className="text-shadow-lg text-center text-xl font-extrabold leading-tight sm:text-2xl md:text-3xl lg:text-4xl">
            {title.toLocaleUpperCase()}
          </h1>

          {/* Sous-titre */}
          <p className="text-md text-center font-light leading-relaxed text-gray-200 sm:text-lg lg:text-xl">
            {subtitle}
          </p>

          {/* Bouton */}
          <div className="text-center">
            <a
              href={"#" + id}
              className="inline-block transform rounded-full bg-primary px-6 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-blue-800"
            >
              {language === "fr" ? "Détails" : "Details"}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
