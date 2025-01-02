import React from "react";
import FormationAudio from "./Formation";
import Section from "../Licence/Section";
import CardCFP from "./CardCFP";
import Header from "../Licence/Header";
import ScrollComponent from "../Scroll/ScrollComponent";
import DurationCard from "./DurationCard";

export default function SectionMultimedia() {
  const formationEvent = {
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
  const forcesFormation = [
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
  const text =
    "Cette formation est idéale pour les passionnés de technologie et de création numérique, souhaitant construire une carrière solide et pérenne dans un secteur en constante évolution.";
  return (
    <div>
      <Header
        id="multimedia"
        title="Web : Création et Développement Multimédia"
        subtitle="Cette formation pratique et immersive prépare les apprenants à concevoir, développer et optimiser des sites web modernes, performants et adaptés aux besoins des utilisateurs. En combinant les compétences en programmation et en design, cette formation permet de maîtriser les langages de programmation, les aspects visuels, et les techniques avancées de gestion de projets numériques. Un certificat agréé par l’État est délivré à l’issue de la formation, garantissant une reconnaissance officielle des compétences."
      />
      <div id="multimedia" className="container">
        <ScrollComponent text={"Web : Création et Développement Multimédia"} />
        <DurationCard duration={"5 mois"} />
        <FormationAudio data={formationEvent} />
        <Section title="Pourquoi choisir cette formation professionnelle ?">
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
            Faites le choix d&apos;une formation exceptionnelle !
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
