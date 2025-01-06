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
      <SustainableImpactTable />
    </div>
  );
}
const collaborationOpportunities = [
  {
    title: "Recherche et Développement (R&D)",
    details: [
      "Co-développez des solutions innovantes dans des domaines clés comme la post-production cinématographique, la réalité augmentée (AR) pour l’audiovisuel, ou les systèmes électroniques embarqués.",
      "Participez à des projets de recherche appliquée adaptés aux défis locaux de Madagascar, de l’Océan Indien et de l’Afrique.",
    ],
  },
  {
    title: "Formations professionnelles axées sur la pratique",
    details: [
      "Développez des programmes sur mesure pour former des techniciens et spécialistes dans les secteurs du numérique, de l’électronique et de l’audiovisuel.",
      "Intégrez des modules technologiques modernes dans nos cursus, comme le traitement audio avancé, les effets visuels (VFX), ou l’automatisation industrielle.",
    ],
  },
  {
    title: "Stages et insertion professionnelle",
    details: [
      "Accueillez des étudiants formés sur des équipements de pointe pour travailler sur vos projets technologiques.",
      "Identifiez et recrutez des talents opérationnels capables de contribuer immédiatement à vos activités.",
    ],
  },
];

const CollaborationTable: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat px-6 py-16"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?technology,education')", // Lien d'une image de fond
      }}
    >
      <div className="rounded-lg bg-black bg-opacity-50 p-8">
        <h1 className=" mb-12 text-center text-5xl font-extrabold">
          Pourquoi collaborer avec E-Media ?
        </h1>
        <div className=" container grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {collaborationOpportunities.map((opportunity, index) => (
            <div
              key={index}
              className="relative flex flex-col items-start rounded-lg bg-white p-8 shadow-xl transition-transform hover:scale-105 hover:bg-indigo-50 hover:shadow-2xl dark:bg-gray-800 dark:hover:bg-gray-700"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Titre */}
              <h3 className="mb-6 text-center text-2xl font-bold text-gray-800 dark:text-gray-50">
                {opportunity.title}
              </h3>

              {/* Liste des détails */}
              <ul className="list-none space-y-4 text-gray-600 dark:text-gray-200">
                {opportunity.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div>
                      <CheckCircleIcon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      {" "}
                      <p className="text-lg">{detail}</p>
                    </div>
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
      details: [
        "Intégration des dernières technologies en production et post-production (montage, effets spéciaux, régie vidéo).",
        "Collaboration sur des projets immersifs, incluant la réalité virtuelle et augmentée.",
      ],
    },
    {
      title: "INGÉNIERIE DU SON",
      details: [
        "Développement de compétences en sonorisation numérique et analogique, mastering, et spatialisation audio pour des expériences immersives.",
      ],
    },
    {
      title: "INFORMATIQUE ET ÉLECTRONIQUE",
      details: [
        "Formation et application en IoT (Internet des Objets), cybersécurité, et électronique embarquée.",
        "Collaboration sur des solutions d’automatisation industrielle et d’optimisation numérique.",
      ],
    },
  ];

  return (
    <div className="container mx-auto rounded-xl bg-gradient-to-r from-indigo-700 to-purple-800 px-6 py-12 shadow-xl">
      <h2 className="mb-10 text-center text-4xl font-bold tracking-tight text-white">
        Domaines d&apos;impact technologique
      </h2>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {impactDomains.map((domain, index) => (
          <div
            key={index}
            className="relative flex transform flex-col items-start rounded-2xl bg-white p-8 shadow-2xl transition-transform hover:scale-105 hover:bg-indigo-100 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 className="mb-6 text-center  text-2xl font-semibold text-indigo-800">
              {domain.title}
            </h3>
            <ul className="space-y-4 text-gray-700">
              {domain.details.map((detail, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <div>
                    {" "}
                    <CheckCircleIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    {" "}
                    <p className="text-lg">{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const sustainableImpactCommitments = [
  {
    title: "Démocratiser l’accès à la technologie",
    details: [
      "Offrir aux jeunes talents, notamment ceux issus de milieux défavorisés, l’opportunité de se former et d’évoluer dans des secteurs technologiques de pointe.",
    ],
  },
  {
    title: "Renforcer les compétences locales",
    details: [
      "Préparer une main-d’œuvre qualifiée capable de répondre aux exigences des industries technologiques modernes.",
    ],
  },
  {
    title: "Contribuer à l’innovation régionale",
    details: [
      "Enrichir l’écosystème technologique de Madagascar et de l’Océan Indien grâce à des projets collaboratifs et des transferts de technologie.",
    ],
  },
];

const SustainableImpactTable: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-indigo-600">
          Nos Engagements pour un Impact Durable
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Découvrez nos engagements pour contribuer à un avenir technologique et
          durable.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {sustainableImpactCommitments.map((commitment, index) => (
          <div
            key={index}
            className="relative flex transform flex-col items-start rounded-xl bg-white p-8 shadow-xl transition-all hover:scale-105 hover:bg-indigo-50 hover:shadow-2xl dark:bg-gray-800 dark:hover:bg-gray-700"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Title */}
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              {commitment.title}
            </h3>

            {/* Details List */}
            <ul className="space-y-4 text-gray-600 dark:text-gray-200">
              {commitment.details.map((detail, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <div>
                    <CheckCircleIcon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <p>{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
