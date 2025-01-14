"use client";
import React from "react";
import FormationAudio from "./Formation";
import Section from "../Licence/Section";
import Header from "../Licence/Header";
import ScrollComponent from "../Scroll/ScrollComponent";
import DurationCard from "./DurationCard";
import { useLanguageContext } from "@/lib/context/LanguageContext";

export default function SectionSLS() {
  const { language } = useLanguageContext();
  const title =
    language === "fr"
      ? "Son : Sonorisation et Lumières de Spectacle"
      : "Sound: Live Sound and Stage Lighting";
  const subtitle =
    language === "fr"
      ? "Cette formation immersive prépare les participants à maîtriser les compétences techniques et opérationnelles nécessaires pour gérer efficacement le son et la lumière lors d’événements live, tels que des concerts, spectacles, conférences et productions scéniques. En s’appuyant sur des ateliers pratiques et des mises en situation réelles, ce programme garantit une formation intensive et orientée vers la professionnalisation."
      : "This immersive training prepares participants to master the technical and operational skills required to efficiently manage sound and lighting for live events, such as concerts, shows, conferences, and stage productions. Through hands-on workshops and real-world scenarios, this program ensures intensive, career-focused training.";

  const formationEventFr = {
    pointsForts: [
      {
        titre: "Apprentissage pratique et immersif",
        description:
          "75% du contenu de la formation est axé sur des ateliers pratiques, avec des scénarios réels pour une immersion complète dans le monde des événements live.",
      },
      {
        titre: "Équipements professionnels de pointe",
        description:
          "Les participants apprennent à manipuler des consoles numériques et analogiques, des systèmes d’éclairage modernes et des logiciels spécialisés utilisés dans l’industrie.",
      },
      {
        titre: "Encadrement par des experts",
        description:
          "Les formateurs sont des professionnels expérimentés de l’industrie événementielle, offrant des conseils pratiques et des insights sur les meilleures pratiques du secteur.",
      },
      {
        titre: "Certification reconnue",
        description:
          "Un certificat délivré par la FOP (Formation d’Orientation Professionnelle), reconnu par l’État malagasy, valorise les compétences acquises et renforce l’employabilité.",
      },
    ],
    competencesDeveloppees: [
      {
        categorie: "Installation et gestion des systèmes de sonorisation",
        details: [
          "Montage de systèmes audio adaptés à divers types d’événements.",
          "Réglage des niveaux sonores et optimisation de la qualité audio en fonction des exigences de la scène.",
        ],
      },
      {
        categorie: "Programmation et gestion des éclairages de scène",
        details: [
          "Création d’ambiances lumineuses synchronisées avec les performances.",
          "Utilisation de logiciels et équipements spécialisés pour programmer des séquences d’éclairage complexes.",
        ],
      },
      {
        categorie: "Résolution de problèmes techniques en direct",
        details: [
          "Réactivité et gestion efficace des imprévus techniques lors des événements.",
          "Maintenance et dépannage rapide des équipements son et lumière.",
        ],
      },
    ],
    debouchesProfessionnels: [
      {
        categorie: "Technicien en sonorisation et régisseur lumière",
        details: [
          "Chargé de superviser l’installation, les tests et la gestion des équipements audio et d’éclairage lors d’événements.",
          "Recruté par des entreprises de production, des théâtres, des organisateurs d’événements, ou en freelance.",
        ],
      },
      {
        categorie: "Assistant technique pour événements live et spectacles",
        details: [
          "Assiste le régisseur principal dans la coordination et le bon déroulement des prestations techniques.",
          "Intervient sur des événements tels que concerts, festivals, mariages, conférences, etc.",
        ],
      },
      {
        categorie: "Opérateur d’équipement audiovisuel",
        details: [
          "Travaille pour des entreprises spécialisées dans la location et la gestion de matériel audiovisuel.",
          "Responsable de la manipulation et de l’entretien des équipements sur site.",
        ],
      },
      {
        categorie: "Consultant technique événementiel",
        details: [
          "Accompagne les clients dans la conception et la mise en œuvre technique de leurs événements, en tenant compte des besoins spécifiques de chaque production.",
        ],
      },
      {
        categorie: "Créateur indépendant de solutions son et lumière",
        details: [
          "Conçoit des installations personnalisées pour des spectacles artistiques, des expositions ou des productions audiovisuelles.",
        ],
      },
      {
        categorie: "Régisseur général dans l’événementiel",
        details: [
          "Évolue vers un poste de responsabilité globale, supervisant les aspects techniques, logistiques et artistiques d’événements majeurs.",
        ],
      },
    ],
    forcesFormation: [
      {
        titre: "Répondre à un secteur en forte demande",
        description:
          "Avec la croissance des industries culturelles, événementielles et du divertissement, les professionnels de la sonorisation et de l’éclairage sont très recherchés, tant au niveau local qu’international.",
      },
      {
        titre: "Flexibilité des compétences",
        description:
          "Les compétences acquises s’appliquent à une variété d’environnements, allant des petites salles de spectacle aux grandes productions internationales.",
      },
      {
        titre: "Opportunités de carrière diversifiées",
        description:
          "La formation ouvre la porte à des emplois dans différents secteurs, notamment l’audiovisuel, les arts de la scène, l’événementiel, le tourisme et les médias.",
      },
      {
        titre: "Accès rapide à l’emploi",
        description:
          "Grâce à sa durée courte mais intensive, cette formation permet aux participants d’intégrer rapidement le marché du travail.",
      },
      {
        titre: "Adaptation aux évolutions technologiques",
        description:
          "Les participants sont formés à utiliser les technologies les plus récentes, leur assurant une pertinence constante dans un domaine en perpétuelle innovation.",
      },
    ],
  };
  const formationEventEn = {
    pointsForts: [
      {
        titre: "Practical and Immersive Learning",
        description:
          "75% of the training content focuses on hands-on workshops with real-world scenarios, offering complete immersion in the live events industry.",
      },
      {
        titre: "State-of-the-Art Professional Equipment",
        description:
          "Participants learn to handle digital and analog consoles, modern lighting systems, and specialized software used in the industry.",
      },
      {
        titre: "Guidance by Industry Experts",
        description:
          "Instructors are experienced professionals from the events industry, providing practical advice and insights into best practices.",
      },
      {
        titre: "Recognized Certification",
        description:
          "A certificate issued by FOP (Professional Orientation Training), recognized by the Malagasy government, enhances acquired skills and employability.",
      },
    ],
    competencesDeveloppees: [
      {
        categorie: "Installation and Management of Sound Systems",
        details: [
          "Setting up audio systems tailored to various types of events.",
          "Adjusting sound levels and optimizing audio quality based on stage requirements.",
        ],
      },
      {
        categorie: "Programming and Managing Stage Lighting",
        details: [
          "Creating lighting effects synchronized with performances.",
          "Using specialized software and equipment to program complex lighting sequences.",
        ],
      },
      {
        categorie: "Live Technical Problem Solving",
        details: [
          "Quick response and efficient management of technical issues during events.",
          "Maintenance and rapid troubleshooting of sound and lighting equipment.",
        ],
      },
    ],
    debouchesProfessionnels: [
      {
        categorie: "Sound Technician and Lighting Manager",
        details: [
          "Responsible for supervising the installation, testing, and management of audio and lighting equipment during events.",
          "Employed by production companies, theaters, event organizers, or as a freelancer.",
        ],
      },
      {
        categorie: "Technical Assistant for Live Events and Shows",
        details: [
          "Assists the main manager in coordinating and ensuring smooth technical operations.",
          "Works on events such as concerts, festivals, weddings, conferences, etc.",
        ],
      },
      {
        categorie: "Audiovisual Equipment Operator",
        details: [
          "Works for companies specializing in audiovisual equipment rental and management.",
          "Responsible for handling and maintaining equipment on-site.",
        ],
      },
      {
        categorie: "Event Technical Consultant",
        details: [
          "Supports clients in designing and implementing the technical aspects of their events, addressing specific production needs.",
        ],
      },
      {
        categorie: "Independent Sound and Lighting Solutions Creator",
        details: [
          "Designs customized setups for artistic performances, exhibitions, or audiovisual productions.",
        ],
      },
      {
        categorie: "General Manager in Events",
        details: [
          "Progresses to a role with overall responsibility, overseeing technical, logistical, and artistic aspects of major events.",
        ],
      },
    ],
    forcesFormation: [
      {
        titre: "Meeting High Industry Demand",
        description:
          "With the growth of cultural, event, and entertainment industries, professionals in sound and lighting are in high demand, both locally and internationally.",
      },
      {
        titre: "Flexible Skill Set",
        description:
          "The acquired skills apply to a variety of environments, from small venues to large-scale international productions.",
      },
      {
        titre: "Diverse Career Opportunities",
        description:
          "The training opens doors to jobs in various sectors, including audiovisual, performing arts, events, tourism, and media.",
      },
      {
        titre: "Quick Job Market Entry",
        description:
          "With its short but intensive duration, this training enables participants to enter the workforce rapidly.",
      },
      {
        titre: "Adaptation to Technological Advances",
        description:
          "Participants are trained to use the latest technologies, ensuring their relevance in an ever-evolving field.",
      },
    ],
  };
  const formationEvent =
    language === "fr" ? formationEventFr : formationEventEn;
  const text =
    language === "fr"
      ? "Cette formation constitue une opportunité unique pour ceux qui souhaitent développer une carrière technique et créative dans l’univers dynamique des événements live, en se distinguant par une expertise reconnue et immédiatement opérationnelle."
      : "This training offers a unique opportunity for those looking to build a technical and creative career in the dynamic world of live events, standing out with recognized expertise that is immediately applicable.";
  return (
    <div>
      <Header
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736491650/SONO--SONORISATION-ET-LUMI%C3%88RES-DE-SPECTACLE_zq6cxm.jpg"
        id="sls"
        title={title}
        subtitle={subtitle}
      />
      <div id="sls" className="container">
        <ScrollComponent text={title} />
        <DurationCard duration={language === "fr" ? "3 mois " : "3 months"} />
        <FormationAudio data={formationEvent} />

        <div className="my-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white shadow-lg transition-colors duration-300 dark:from-gray-800 dark:to-gray-900 dark:text-gray-200">
          <h2 className="mb-4 text-2xl font-bold">
            {language === "fr"
              ? " Faites le choix d'une formation exceptionnelle !"
              : "Choose a training program that stands out!"}
          </h2>
          <p className="text-lg">{text}</p>
        </div>
      </div>
    </div>
  );
}
