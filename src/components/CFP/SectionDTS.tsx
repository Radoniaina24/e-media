import React from "react";
import FormationAudio from "./Formation";
import Section from "../Licence/Section";
import CardCFP from "./CardCFP";
import Card from "../Licence/Card";
import ProgramCard from "../Master/ProgramCard";
import Header from "../Licence/Header";
import DurationCard from "./DurationCard";
import ScrollComponent from "../Scroll/ScrollComponent";

export default function SectionDTS() {
  const debouchesProfessionnels = [
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

  const avantagesFormation = [
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
  const objectifsFormation = [
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

  const formations = [
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
  const competencesDeveloppees = [
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
  const text =
    "Ce programme constitue une passerelle vers des carrières prometteuses dans les industries numériques, audiovisuelles, événementielles et web.";
  return (
    <div>
      <Header
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736491651/DTS-_-DIPL%C3%94ME-DE-TECHNICIEN-SUP%C3%89RIEUR_acwybh.jpg"
        id="dts"
        title="DTS – Diplôme de Technicien Supérieur"
        subtitle="Le DTS est une formation intensive et complète, regroupant les quatre spécialités décrites ci-dessus : Production Audio & MAO, Sonorisation et Lumières de Spectacle, Cinéphotographie, Post-production et 3D, et Web : Création et Développement Multimédia. Ce programme unique s’adresse à ceux qui souhaitent acquérir une expertise multidisciplinaire, combinant les compétences techniques et créatives essentielles pour exceller dans les industries numériques, culturelles et événementielles."
      />
      <div id="dts" className="container">
        <ScrollComponent text={"DTS – Diplôme de Technicien Supérieur"} />
        <DurationCard duration=" 12 mois de formation + 2 mois de stage en entreprise." />
        <Section>
          <h1 className=" mb-9  text-2xl text-dark">
            Objectifs de la formation
          </h1>

          <div className=" text-md mt-4 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {objectifsFormation.map((item, index) => (
              <Card key={index} title={item.item} items={[]} />
            ))}
          </div>
        </Section>

        <Section>
          <h1 className=" mb-9  text-2xl text-gray-800 dark:text-white">
            Contenu du programme
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {formations.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </Section>
        <Section
          title="Stage de 2 mois"
          content="À la fin de la formation, les apprenants réalisent un stage pratique en entreprise dans l’un des secteurs couverts (studio, audiovisuel, événementiel, multimédia ou web). Ce stage leur permet d’appliquer les compétences acquises tout en se familiarisant avec le milieu professionnel."
        ></Section>

        <Section>
          <h1 className=" mb-9  text-2xl text-gray-800 dark:text-white">
            Compétences clés développées
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {competencesDeveloppees.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </Section>
        <Section>
          <h1 className=" mb-9  text-2xl text-gray-800 dark:text-white">
            Débouchés professionnels
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {debouchesProfessionnels.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </Section>

        <Section>
          <h1 className=" mb-9  text-2xl text-gray-800 dark:text-white">
            Pourquoi choisir le DTS ?
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
