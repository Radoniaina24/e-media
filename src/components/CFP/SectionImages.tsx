import React from "react";
import FormationAudio from "./Formation";
import Header from "../Licence/Header";
import ScrollComponent from "../Scroll/ScrollComponent";
import DurationCard from "./DurationCard";

export default function SectionImages() {
  const formationEvent = {
    pointsForts: [
      {
        titre: "Projets pratiques immersifs",
        description:
          "Les apprenants participent à des tournages, des sessions de photographie, des projets de montage vidéo et des créations en 3D basées sur des scénarios réels.",
      },
      {
        titre: "Création d’un portfolio professionnel",
        description:
          "Chaque étudiant construit un portfolio de qualité professionnelle, incluant des vidéos, courts métrages, séries photographiques et modélisations 3D, essentiel pour se démarquer sur le marché du travail.",
      },
      {
        titre: "Accès à des équipements de pointe",
        description:
          "Utilisation de caméras professionnelles, drones, éclairages, logiciels de montage vidéo (Premiere Pro, DaVinci Resolve), de retouche photo (Adobe Photoshop, Lightroom) et de création 3D (Blender, Maya, 3ds Max).",
      },
      {
        titre: "Encadrement par des experts",
        description:
          "Formation assurée par des professionnels expérimentés dans le cinéma, la photographie, les médias numériques et la modélisation 3D.",
      },
      {
        titre: "Certification reconnue",
        description:
          "Un certificat agréé par l’État, délivré par la FOP (Formation d’Orientation Professionnelle), atteste officiellement des compétences techniques et pratiques acquises par les apprenants.",
      },
    ],
    competencesDeveloppees: [
      {
        categorie: "Techniques avancées de prise de vue et éclairage",
        details: [
          "Maîtrise des réglages manuels de caméras et appareils photo professionnels.",
          "Techniques d’éclairage créatif pour la photographie, le cinéma et la vidéo, adaptées à divers contextes (studios, extérieurs, scènes dramatiques, etc.).",
        ],
      },
      {
        categorie: "Montage vidéo et post-production",
        details: [
          "Assemblage, montage et finalisation de projets vidéo.",
          "Ajout d’effets spéciaux, étalonnage des couleurs et amélioration des visuels avec des logiciels professionnels.",
        ],
      },

      {
        categorie: "Création en 3D",
        details: [
          "Modélisation 3D d’objets, de personnages et de scènes.",
          "Texturage, éclairage et rendu pour des projets visuels, architecturaux ou artistiques.",
          "Animation 3D pour le cinéma, les jeux vidéo ou les expériences immersives (VR/AR).",
        ],
      },
      {
        categorie: "Création de contenus pour médias numériques",
        details: [
          "Production de vidéos, images, animations et graphismes adaptés aux plateformes numériques telles que YouTube, Instagram, et campagnes publicitaires digitales.",
        ],
      },
      {
        categorie: "Narration visuelle et artistique",
        details: [
          "Apprentissage des principes de composition, de cadrage et de storytelling visuel pour transmettre efficacement des messages à travers les médias visuels et 3D.",
        ],
      },
      {
        categorie: "Création et retouche de contenus visuels",
        details: [
          "Prise de photos artistiques ou commerciales, retouche avancée et optimisation pour différents formats (impression, médias sociaux, campagnes publicitaires).",
        ],
      },
    ],
    debouchesProfessionnels: [
      {
        categorie: "Assistant réalisateur",
        details: [
          "Soutien au réalisateur principal sur les plateaux de tournage, avec des responsabilités techniques et artistiques.",
        ],
      },
      {
        categorie: "Monteur vidéo",
        details: [
          "Spécialiste du montage et de la post-production pour le cinéma, la télévision et les plateformes numériques.",
        ],
      },
      {
        categorie: "Photographe professionnel",
        details: [
          "Spécialisation en photographie artistique, événementielle, publicitaire ou documentaire.",
          "Création de portraits, de paysages ou de contenus visuels pour des campagnes marketing ou éditoriales.",
        ],
      },
      {
        categorie: "Infographiste et modélisateur 3D",
        details: [
          "Création de modèles 3D pour des projets architecturaux, des animations, des films ou des jeux vidéo.",
          "Texturage et animation pour des contenus immersifs.",
        ],
      },
      {
        categorie: "Créateur de contenu visuel",
        details: [
          "Conception et production de vidéos, images, animations 3D et contenus interactifs pour les médias sociaux, les sites web ou les campagnes numériques.",
        ],
      },
      {
        categorie: "Directeur de la photographie (évolution de carrière)",
        details: [
          "Responsable de la création visuelle sur les productions cinématographiques et audiovisuelles, maîtrisant à la fois la technique et l’art.",
        ],
      },
      {
        categorie: "Assistant réalisateur",
        details: [
          "Soutien au réalisateur principal sur les plateaux de tournage, avec des responsabilités techniques et artistiques.",
        ],
      },
      {
        categorie: "Designer en réalité virtuelle et augmentée (VR/AR)",
        details: [
          "Création d’expériences immersives en 3D pour des applications artistiques, éducatives ou commerciales.",
        ],
      },
      {
        categorie: "Cinéaste et animateur indépendant",
        details: [
          "Réalisation de courts métrages, documentaires ou projets audiovisuels intégrant des éléments 3D.",
        ],
      },
    ],
    forcesFormation: [
      {
        titre: "Pratique intensive (75%)",
        description:
          "Favorise l’acquisition de compétences directement applicables en milieu professionnel.",
      },
      {
        titre: "Accessibilité universelle",
        description:
          "Ouvertes à tous, avec ou sans baccalauréat, permettant une transition rapide vers le monde du travail.",
      },
      {
        titre: "Reconnaissance officielle",
        description:
          "Un certificat agréé par l’État garantit la reconnaissance des compétences sur le marché local et international.",
      },
      {
        titre: "Insertion professionnelle rapide",
        description:
          "Formation courte et orientée vers les métiers numériques en forte demande.",
      },
      {
        titre: "Accompagnement personnalisé",
        description:
          "Ateliers encadrés par des formateurs expérimentés et basés sur des projets concrets pour une progression rapide et efficace.",
      },
    ],
  };
  const text =
    "Cette formation s’adresse aux passionnés de l’image et de la 3D, leur offrant une expertise complète pour exceller dans les métiers techniques, créatifs et numériques.";
  return (
    <div>
      <HeaderWebCinematography
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736491650/IMAGE--CIN%C3%89MATOGRAPHIE_-POST-PRODUCTION_-PHOTOGRAPHIE-ET-3D_bj1kh6.jpg"
        id="image"
        title="Image : Cinématographie, Post-production, Photographie et 3D"
        subtitle="Cette formation complète et immersive forme les apprenants à maîtriser les outils et techniques liés à la production visuelle, à la post-production, à la photographie et à la conception en 3D. Grâce à une approche centrée sur la pratique, les participants développent des compétences polyvalentes et innovantes pour répondre aux exigences des industries créatives et numériques. Au terme de la formation, un certificat agréé par l’État est délivré, renforçant la reconnaissance professionnelle des diplômés."
      />
      <div id="image" className="container">
        <ScrollComponent
          text={"Image : Cinématographie, Post-production, Photographie et 3D"}
        />
        <DurationCard duration={"7 mois"} />
        <FormationAudio data={formationEvent} />

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
interface HeaderProps {
  id?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string; // Call to action text for the button
  ctaLink?: string; // URL for the call to action button
  imageSrc?: string;
}

const HeaderWebCinematography: React.FC<HeaderProps> = ({
  title,
  id,
  subtitle,
  imageSrc = "/images/why/fond.jpg",
}) => (
  <header className="relative h-screen w-full bg-cover bg-center py-16 text-white">
    {/* Image de fond */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url("${imageSrc}")` }}
    ></div>

    {/* Contenu */}
    <div className="relative z-10 flex h-full items-center justify-center px-8 sm:justify-center md:justify-start">
      <div className=" max-w-xl space-y-6 text-right md:ml-96">
        {/* Titre */}
        <h1 className="text-shadow-lg text-start text-xl font-extrabold leading-tight sm:text-2xl md:text-3xl lg:text-4xl">
          {title.toLocaleUpperCase()}
        </h1>

        {/* Sous-titre */}
        <p className="text-md text-start font-light leading-relaxed text-gray-200 sm:text-lg lg:text-xl">
          {subtitle}
        </p>

        {/* Bouton */}
        <div className="text-start">
          <a
            href={"#" + id}
            className="inline-block transform rounded-full bg-primary px-6 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-blue-800"
          >
            Détails
          </a>
        </div>
      </div>
    </div>
  </header>
);
