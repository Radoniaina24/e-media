import React from "react";
import FormationAudio from "./Formation";
import Section from "../Licence/Section";

export default function SectionSLS() {
  const formationEvent = {
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
  const text =
    "Cette formation constitue une opportunité unique pour ceux qui souhaitent développer une carrière technique et créative dans l’univers dynamique des événements live, en se distinguant par une expertise reconnue et immédiatement opérationnelle.";
  return (
    <div>
      <Section
        title="Son : Sonorisation et Lumières de Spectacle"
        content="Cette formation immersive prépare les participants à maîtriser les compétences techniques et opérationnelles nécessaires pour gérer efficacement le son et la lumière lors d’événements live, tels que des concerts, spectacles, conférences et productions scéniques. En s’appuyant sur des ateliers pratiques et des mises en situation réelles, ce programme garantit une formation intensive et orientée vers la professionnalisation."
      ></Section>
      <div className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 p-4 text-white shadow-md transition-all duration-300 dark:from-gray-800 dark:to-gray-900 dark:text-gray-200">
        <span className="text-sm font-medium uppercase tracking-wide opacity-75 dark:opacity-90">
          Durée :
        </span>
        <span className="text-xl font-bold">3 mois</span>
      </div>
      <FormationAudio data={formationEvent} />

      <div className="my-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white shadow-lg transition-colors duration-300 dark:from-gray-800 dark:to-gray-900 dark:text-gray-200">
        <h2 className="mb-4 text-2xl font-bold">
          Faites le choix d&apos;une formation exceptionnelle !
        </h2>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
}
