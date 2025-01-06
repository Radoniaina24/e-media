import React from "react";
import PartnershipCard from "./PartnershipCard";
import { CheckCircleIcon } from "@heroicons/react/solid";
export default function Technologie() {
  const partenariatTechnologique = {
    title: "Nos Opportunités de Partenariat Technologique",
    description:
      "E-media, au cœur des domaines de la cinématographie, de l’audiovisuel, de l’ingénierie du son, de l’informatique et de l’électronique, offre des opportunités de collaboration technologique basées sur la Recherche et Développement (R&D), les formations professionnelles et les stages en entreprise. Notre vision est de connecter les talents locaux aux technologies de pointe et de répondre aux besoins croissants des industries créatives et numériques.",
  };

  return (
    <div>
      <PartnershipCard
        title={partenariatTechnologique.title}
        subtitle={partenariatTechnologique.description}
      />
      <CollaborationTable />
      <ImpactDomainsTable />
      <SustainableImpactCommitments />
      <div className="mx-auto my-12 max-w-4xl rounded-lg bg-white p-8 text-center shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
          Rejoignez E-Media pour construire ensemble un avenir technologique où
          la formation, la recherche et l&apos;innovation se conjuguent au
          service de la transformation numérique.
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-gray-600">
          Avec <span className="font-semibold text-green-600">E-media</span>,
          contribuez à un futur innovant où les technologies jouent un rôle clé
          dans la transformation des industries et des sociétés. Soyez acteur de
          ce changement et rejoignez une équipe engagée dans la construction
          d&apos;un avenir numérique durable.
        </p>
      </div>
    </div>
  );
}
const collaborationOpportunities = [
  {
    title: "Recherche et Développement (R&D)",
    description: [
      "Co-développez des solutions innovantes dans des domaines clés comme la post-production cinématographique, la réalité augmentée (AR) pour l’audiovisuel, ou les systèmes électroniques embarqués.",
      "Participez à des projets de recherche appliquée adaptés aux défis locaux de Madagascar, de l’Océan Indien et de l’Afrique.",
    ],
    icon: "🔬",
  },
  {
    title: "Formations professionnelles axées sur la pratique",
    description: [
      "Développez des programmes sur mesure pour former des techniciens et spécialistes dans les secteurs du numérique, de l’électronique et de l’audiovisuel.",
      "Intégrez des modules technologiques modernes dans nos cursus, comme le traitement audio avancé, les effets visuels (VFX), ou l’automatisation industrielle.",
    ],
    icon: "📚",
  },
  {
    title: "Stages et insertion professionnelle",
    description: [
      "Accueillez des étudiants formés sur des équipements de pointe pour travailler sur vos projets technologiques.",
      "Identifiez et recrutez des talents opérationnels capables de contribuer immédiatement à vos activités.",
    ],
    icon: "💼",
  },
];

const CollaborationTable: React.FC = () => {
  return (
    <div className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="mb-20 text-4xl font-extrabold text-gray-900">
          Pourquoi collaborer avec E-media ?
        </h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {collaborationOpportunities.map((item, index) => (
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

const ImpactDomainsTable: React.FC = () => {
  const impactDomains = [
    {
      title: "CINÉMATOGRAPHIE ET AUDIOVISUEL",
      description: [
        "Intégration des dernières technologies en production et post-production (montage, effets spéciaux, régie vidéo).",
        "Collaboration sur des projets immersifs, incluant la réalité virtuelle et augmentée.",
      ],
      icon: "🎬",
    },
    {
      title: "INGÉNIERIE DU SON",
      description: [
        "Développement de compétences en sonorisation numérique et analogique, mastering, et spatialisation audio pour des expériences immersives.",
      ],
      icon: "🔊",
    },
    {
      title: "INFORMATIQUE ET ÉLECTRONIQUE",
      description: [
        "Formation et application en IoT (Internet des Objets), cybersécurité, et électronique embarquée.",
        "Collaboration sur des solutions d’automatisation industrielle et d’optimisation numérique.",
      ],
      icon: "💻",
    },
  ];

  return (
    <div className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="mb-20 text-4xl font-extrabold text-gray-900">
          Domaines d&apos;impact technologique
        </h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {impactDomains.map((item, index) => (
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

const sustainableImpactCommitments = [
  {
    title: "Démocratiser l’accès à la technologie",
    description:
      "Offrir aux jeunes talents, notamment ceux issus de milieux défavorisés, l’opportunité de se former et d’évoluer dans des secteurs technologiques de pointe.",
    icon: "💻",
  },
  {
    title: "Renforcer les compétences locales",
    description:
      "Préparer une main-d’œuvre qualifiée capable de répondre aux exigences des industries technologiques modernes.",
    icon: "🛠️",
  },
  {
    title: "Contribuer à l’innovation régionale",
    description:
      "Enrichir l’écosystème technologique de Madagascar et de l’Océan Indien grâce à des projets collaboratifs et des transferts de technologie.",
    icon: "🌐",
  },
];

const SustainableImpactCommitments = () => {
  return (
    <div className="relative px-6 py-16">
      {/* Contenu principal */}
      <div className="mx-auto max-w-7xl text-center text-white">
        {/* Titre de la section */}
        <h1 className="mb-12 text-5xl font-extrabold text-indigo-700">
          Nos Engagements pour un Impact Durable
        </h1>

        {/* Grille de cartes */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sustainableImpactCommitments.map((opportunity, index) => (
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
