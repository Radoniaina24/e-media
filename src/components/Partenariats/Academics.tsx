import React from "react";
import PartnershipCard from "./PartnershipCard";
import ScrollComponent from "../Scroll/ScrollComponent";
import ScrollComponentPartenariats from "./ScrollComponentPartenariats";

export default function Academics() {
  const partnershipOpportunities = {
    title: "Nos Opportunités de Partenariat Académique",
    subtitle:
      "E-Media, université pionnière à Madagascar, propose des partenariats académiques stratégiques pour soutenir la transformation numérique et éducative à Madagascar, dans l’Océan Indien et en Afrique.",
  };

  return (
    <section className="bg-gray-50 px-6 py-28 " id="1">
      <ScrollComponentPartenariats text={partnershipOpportunities.title} />
      <PartnershipCard subtitle={partnershipOpportunities.subtitle} />

      <div
        className="relative bg-cover bg-center bg-no-repeat px-6 py-16"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?technology,education')", // Lien d'une image de fond
        }}
      >
        <WhyCollaborateSection />
        <PartnershipOpportunities />
        <HumanitarianCommitmentSection />
      </div>
    </section>
  );
}

const whyCollaborateWithEMedia = [
  {
    title: "Position stratégique",
    description:
      "Madagascar, au carrefour de l’Afrique et de l’Océan Indien, offre un potentiel unique pour développer des programmes adaptés aux besoins régionaux.",
    icon: "🌍", // Vous pouvez remplacer par une icône SVG
  },
  {
    title: "Engagement pour l’inclusion",
    description:
      "Nous démocratisons l’accès au numérique et à une éducation de qualité, en accompagnant particulièrement les jeunes issus de milieux défavorisés.",
    icon: "🤝", // Icône personnalisée
  },
  {
    title: "Innovation pour l’Afrique et l’Océan Indien",
    description:
      "Nos projets renforcent les capacités locales et préparent les talents aux défis mondiaux.",
    icon: "🚀", // Icône personnalisée
  },
];
const WhyCollaborateSection = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat px-6 py-16"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dx3xhdaym/image/upload/v1736410946/why_flgoih.jpg')", // Lien d'une image de fond
      }}
    >
      {/* Overlay pour assombrir l'image */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenu de la section */}
      <div className="relative z-10 mx-auto max-w-6xl text-center text-indigo-700">
        <h1 className="mb-12 text-4xl font-extrabold">
          Pourquoi collaborer avec E-Media ?
        </h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {whyCollaborateWithEMedia.map((item, index) => (
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

const partnershipOpportunities = [
  {
    title: "Échanges académiques",
    description:
      "Mobilité des étudiants et enseignants pour partager des compétences et des perspectives globales.",
    icon: "🌍",
  },
  {
    title: "Diplômes conjoints",
    description:
      "Programmes co-créés pour une reconnaissance académique internationale et une employabilité renforcée.",
    icon: "🎓",
  },
  {
    title: "Recherche collaborative",
    description:
      "Projets conjoints sur la transformation numérique, le développement durable, et l’inclusion sociale.",
    icon: "🔬",
  },
];

const PartnershipOpportunities = () => {
  return (
    <div className="relative px-6 py-16">
      {/* Contenu principal */}
      <div className="mx-auto max-w-7xl text-center text-white">
        {/* Titre de la section */}
        <h1 className="mb-12 text-4xl font-extrabold text-indigo-700">
          Opportunités de Partenariat
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

const humanitarianCommitment = [
  {
    title: "Réduction des inégalités d’accès à l’éducation",
    icon: "📚",
  },
  {
    title: "Autonomisation des jeunes",
    icon: "💪",
  },
  {
    title: "Soutien au développement durable",
    icon: "🌱",
  },
  {
    title: "Bâtir une génération de leaders compétents",
    icon: "🌍",
  },
];

const HumanitarianCommitmentSection = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 to-blue-50 px-6 py-24">
      <div className="mx-auto max-w-7xl text-center">
        {/* Titre de la section */}
        <h2 className="mb-12 text-4xl font-extrabold tracking-tight text-indigo-700">
          Un engagement humanitaire et inclusif
        </h2>

        {/* Engagements détaillés sans description */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {humanitarianCommitment.map((commitment, index) => (
            <div
              key={index}
              className="flex transform items-center justify-start rounded-xl bg-white p-8 shadow-md transition-transform hover:scale-105 hover:bg-indigo-50 hover:shadow-2xl"
            >
              {/* Icône */}
              <div className="mr-6 text-4xl text-indigo-600">
                {commitment.icon}
              </div>

              {/* Titre de l'engagement */}
              <div className="flex-1">
                <h3 className="mb-4 text-xl font-semibold text-indigo-800">
                  {commitment.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
