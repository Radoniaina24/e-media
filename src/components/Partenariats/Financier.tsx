import React from "react";
import PartnershipSection from "./PartnershipCard";
import { CheckCircleIcon } from "@heroicons/react/outline";
const partenariat = {
  title: "Nos Opportunités de Partenariat Financiers et Stratégiques",
  description:
    "E-media, en tant qu'université engagée dans la transformation numérique et éducative, invite des partenaires financiers et stratégiques à collaborer pour soutenir nos initiatives et répondre aux besoins croissants de nos étudiants et de notre institution.",
};

export default function Financier() {
  return (
    <div id="5" className="py-28">
      <PartnershipSection
        title={partenariat.title}
        subtitle={partenariat.description}
      />
      <WhyCollaborateSection />
      <StructuralProjectsSupport />
      <CreativeProjectsSupport />
      <CollaborationOpportunities opportunities={opportunities} />
      <Partnership />
      <div className="mx-auto my-12 max-w-3xl rounded-lg bg-green-50 p-8 text-center shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-semibold text-green-800">
          Rejoignez E-media pour un avenir où chaque jeune talent peut réaliser
          ses ambitions
        </h2>
        <p className="text-text-center text-lg leading-relaxed text-gray-700">
          Rejoignez-nous pour bâtir ensemble un avenir où chaque jeune talent,
          quel que soit son milieu, peut accéder à une éducation de qualité et
          réaliser ses ambitions. Ensemble, nous pouvons ouvrir de nouvelles
          opportunités pour les talents de demain grâce à des initiatives
          durables et innovantes.
        </p>
      </div>
    </div>
  );
}
const educationScholarships = [
  {
    title: "Un accès limité pour de nombreux jeunes talents",
    description:
      "Malgré un coût de formation compétitif, de nombreux étudiants ne peuvent poursuivre leur formation faute de moyens financiers. Chaque année, plusieurs abandonnent leurs études ou renoncent à rejoindre notre établissement.",
    icon: "🎓", // Icône pour l'accès à l'éducation
  },
  {
    title: "Impact des bourses",
    description:
      "Les bourses représentent une solution clé pour permettre aux jeunes issus de milieux défavorisés d’accéder à une éducation de qualité, encourager les étudiants méritants à poursuivre leurs études sans contrainte financière et offrir des opportunités internationales.",
    icon: "💡", // Icône pour l'impact des bourses
  },
  {
    title: "Opportunités internationales",
    description:
      "Les bourses offrent des opportunités pour poursuivre des formations à l’étranger, ouvrant ainsi les portes à des expériences éducatives et professionnelles globales.",
    icon: "🌍", // Icône pour les opportunités internationales
  },
];
const WhyCollaborateSection = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat px-6 py-16"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?technology,education')", // Lien d'une image de fond
      }}
    >
      {/* Overlay pour assombrir l'image */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenu de la section */}
      <div className="relative z-10 mx-auto max-w-6xl text-center text-white">
        <h1 className="mb-12 text-5xl font-extrabold">
          Pourquoi un partenariat financier et stratégique est essentiel ?
        </h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {educationScholarships.map((item, index) => (
            <div
              key={index}
              className="relative flex transform flex-col items-start overflow-hidden rounded-xl bg-white p-8 text-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icône flottante */}
              <div className="absolute right-0 top-0 -mr-6 -mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-3xl text-indigo-600 shadow">
                {item.icon}
              </div>

              {/* Titre */}
              <h2 className="mt-6 text-2xl font-bold text-indigo-600">
                {item.title}
              </h2>

              {/* Description */}
              <p className="mt-4 leading-relaxed text-gray-700">
                {item.description}
              </p>

              {/* Effet visuel */}
              <div className="absolute inset-0 z-[-1] rounded-xl bg-gradient-to-br from-indigo-50 to-white opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const structuralProjectsSupport = [
  {
    title: "Financement du village numérique",
    description:
      "E-media prévoit la construction d’un village numérique, un espace éducatif intégré avec des laboratoires technologiques, des studios audiovisuels, des incubateurs de projets créatifs et des logements étudiants.",
    icon: "🏙️", // Icône pour le village numérique
  },
  {
    title: "Acquisition de matériels pédagogiques modernes",
    description:
      "Les besoins en équipements (ordinateurs, caméras, logiciels avancés, équipements sonores) sont essentiels pour offrir une formation alignée sur les standards internationaux.",
    icon: "💻", // Icône pour l'acquisition de matériels
  },
];
const StructuralProjectsSupport = () => {
  return (
    <div className="px-6 py-16">
      {/* Contenu de la section */}
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="mb-12 text-3xl font-extrabold text-gray-900">
          Soutenir des projets structurants
        </h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {structuralProjectsSupport.map((item, index) => (
            <div
              key={index}
              className="relative flex transform flex-col items-start overflow-hidden rounded-xl bg-white p-8 text-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icône flottante */}
              <div className="absolute right-0 top-0 -mr-6 -mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-3xl text-indigo-600 shadow">
                {item.icon}
              </div>

              {/* Titre */}
              <h2 className="mt-6 text-2xl font-bold text-indigo-600">
                {item.title}
              </h2>

              {/* Description */}
              <p className="mt-4 leading-relaxed text-gray-700">
                {item.description}
              </p>

              {/* Effet visuel */}
              <div className="absolute inset-0 z-[-1] rounded-xl bg-gradient-to-br from-indigo-50 to-white opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const creativeProjectsSupport = [
  {
    title: "Incubateurs de talents",
    description:
      "Investissez dans la création d’incubateurs pour accompagner les étudiants dans le développement de projets créatifs et entrepreneuriaux dans les domaines de l’audiovisuel, de la technologie et de l’innovation sociale.",
    icon: "💡", // Vous pouvez remplacer cette icône par une autre
  },
  {
    title: "Mécénat culturel",
    description:
      "Financez des productions audiovisuelles ou des projets artistiques qui valorisent les talents locaux tout en renforçant votre image de marque comme partenaire engagé pour la culture.",
    icon: "🎭", // Vous pouvez remplacer cette icône par une autre
  },
];

const CreativeProjectsSupport = () => {
  return (
    <div className="relative px-6 py-16">
      {/* Contenu principal */}
      <div className="mx-auto max-w-7xl text-center text-white">
        {/* Titre de la section */}
        <h1 className="mb-12 text-3xl font-extrabold text-indigo-700">
          Incubation et soutien aux projets créatifs
        </h1>

        {/* Grille de cartes */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {creativeProjectsSupport.map((opportunity, index) => (
            <div
              key={index}
              className="relative flex transform flex-col items-center overflow-hidden rounded-3xl bg-white p-10 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Icône dynamique */}
              <div className="mb-6 flex h-20 w-20 transform items-center justify-center rounded-full bg-indigo-600 text-4xl text-white transition-transform duration-300 ease-in-out hover:rotate-12">
                {opportunity.icon}
              </div>

              {/* Titre de l'opportunité */}
              <h2 className="mb-4 text-2xl font-semibold text-indigo-700">
                {opportunity.title}
              </h2>

              {/* Description de l'opportunité */}
              <p className="mb-6 leading-relaxed text-gray-800">
                {opportunity.description}
              </p>

              {/* Bordure subtile au survol */}
              <div className="absolute inset-0 rounded-3xl border-2 border-indigo-600 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const opportunities = [
  {
    title: "Création de programmes de bourses",
    description: [
      "Bourses pour financer les frais de scolarité des étudiants défavorisés ou méritants.",
      "Bourses de mobilité pour permettre aux étudiants de poursuivre leurs formations à l’international.",
      "Soutien pour des bourses spécifiques aux jeunes filles et aux groupes sous-représentés dans les secteurs technologiques et audiovisuels.",
    ],
    icon: "🎓",
  },
  {
    title: "Soutien aux projets d’infrastructure",
    description: [
      "Investir dans le village numérique, un projet phare pour transformer l’apprentissage et renforcer l’écosystème éducatif et numérique à Madagascar.",
      "Aider à équiper les laboratoires, studios et infrastructures nécessaires pour maintenir une qualité d’enseignement exemplaire.",
    ],
    icon: "🏗️",
  },
  {
    title: "Partenariat pour les incubateurs",
    description: [
      "Collaborer pour soutenir les jeunes talents en leur offrant des ressources financières et techniques pour concrétiser leurs projets créatifs ou entrepreneuriaux.",
      "Accueillir et financer des projets innovants issus des étudiants et enseignants d’E-media.",
    ],
    icon: "🚀",
  },
];
const CollaborationOpportunities = ({ opportunities }) => {
  return (
    <div className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="mb-20 text-4xl font-extrabold text-gray-900">
          Opportunités de Collaboration pour les Partenaires
        </h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="relative transform rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute right-0 top-0 -mr-6 -mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-3xl text-indigo-600 shadow-md">
                {item.icon}
              </div>

              <h2 className="mt-10 text-2xl font-semibold text-indigo-600">
                {item.title}
              </h2>
              <ul className="mt-4 space-y-2 text-left text-gray-700">
                {item.description.map((desc, idx) => (
                  <li key={idx} className="flex items-center">
                    {/* Icône CheckCircle à la place du point */}
                    <div>
                      <CheckCircleIcon className="mr-2 h-5 w-5 text-indigo-600" />
                    </div>

                    <div>{desc}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const partnershipOpportunities = [
  {
    title: "Contribuez à rendre l’éducation accessible",
    description:
      "Rendre l’éducation accessible à une jeunesse talentueuse mais économiquement vulnérable.",
    icon: "📚", // Icône personnalisée ou un autre symbole
  },
  {
    title: "Investissez dans le futur de Madagascar",
    description:
      "Soutenez des initiatives éducatives et technologiques durables pour le développement de Madagascar et de l’Océan Indien.",
    icon: "🌍", // Icône personnalisée ou un autre symbole
  },
  {
    title: "Faites partie d’une transformation positive",
    description:
      "Aidez à bâtir des infrastructures modernes, développez des talents locaux et soutenez des projets créatifs à fort impact.",
    icon: "💡", // Icône personnalisée ou un autre symbole
  },
];
const Partnership = () => {
  return (
    <div className="relative px-6 py-16">
      {/* Contenu principal */}
      <div className="mx-auto max-w-7xl text-center text-white">
        {/* Titre de la section */}
        <h1 className="mb-20 text-3xl font-extrabold text-indigo-700">
          Un partenariat pour un avenir équitable et innovant
        </h1>

        {/* Grille de cartes */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {partnershipOpportunities.map((opportunity, index) => (
            <div
              key={index}
              className="relative flex transform flex-col items-center overflow-hidden rounded-3xl bg-white p-10 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Icône dynamique */}
              <div className="mb-6 flex h-20 w-20 transform items-center justify-center rounded-full bg-indigo-600 text-4xl text-white transition-transform duration-300 ease-in-out hover:rotate-12">
                {opportunity.icon}
              </div>

              {/* Titre de l'opportunité */}
              <h2 className="mb-4 text-2xl font-semibold text-indigo-700">
                {opportunity.title}
              </h2>

              {/* Description de l'opportunité */}
              <p className="mb-6 leading-relaxed text-gray-800">
                {opportunity.description}
              </p>

              {/* Bordure subtile au survol */}
              <div className="absolute inset-0 rounded-3xl border-2 border-indigo-600 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

//  Un partenariat pour un avenir équitable et innovant
