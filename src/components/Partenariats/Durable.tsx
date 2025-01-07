import React from "react";
import PartnershipSection from "./PartnershipCard";
import SectionImageCity from "../city/SectionImageCity";
import ScrollComponentPartenariats from "./ScrollComponentPartenariats";
import PartnershipCard from "./PartnershipCard";
const partenariat = {
  title: "Nos Opportunités de Partenariat pour le Développement Durable",
  description:
    "E-media, consciente de la vulnérabilité écologique de Madagascar, s’engage à jouer un rôle actif dans la préservation de l’environnement et la promotion de pratiques durables. En tant que pays riche en biodiversité mais fortement touché par les changements climatiques, Madagascar offre un cadre unique pour développer des initiatives d’impact en matière de développement durable, notamment dans les secteurs de l’audiovisuel, de l’innovation technologique, et de la sensibilisation environnementale.",
};
const initiativesPartenariat = [
  {
    title: "Audiovisuel écoresponsable pour sensibiliser",
    highlights: [
      {
        text: "Productions environnementales : Co-créons des documentaires, courts-métrages ou campagnes de sensibilisation mettant en lumière les richesses naturelles de Madagascar et les défis auxquels elles font face.",
      },
      {
        text: "Pratiques de production durables : Intégrons des solutions écoresponsables dans nos productions (utilisation d’équipements économes en énergie, réduction des déchets).",
      },
      {
        text: "Plateforme pour le changement : Utilisons l’audiovisuel comme un outil puissant pour éduquer les populations locales et internationales sur l’importance de la préservation écologique.",
      },
    ],
    imageSrc: "https://source.unsplash.com/1600x900/?technology,education", // Remplacez par l'URL de l'image
    imageAlt: "Audiovisuel écoresponsable",
    imageOnRight: false, // Positionne l'image à gauche
  },
  {
    title: "Innovations technologiques vertes",
    highlights: [
      {
        text: "Technologies pour la préservation : Développons des outils technologiques pour surveiller, protéger et restaurer les écosystèmes malagasy (drones pour la surveillance forestière, systèmes d’alerte pour les catastrophes naturelles).",
      },
      {
        text: "R&D en solutions énergétiques : Promouvons l’usage de l’énergie solaire et des technologies propres pour les productions audiovisuelles et les installations locales.",
      },
      {
        text: "Formation à l’électronique verte : Offrons des modules spécifiques pour enseigner l’utilisation et la maintenance d’équipements durables.",
      },
    ],
    imageSrc: "https://source.unsplash.com/1600x900/?technology,education", // Remplacez par l'URL de l'image
    imageAlt: "Innovations technologiques vertes",
    imageOnRight: true, // Positionne l'image à droite
  },
  {
    title: "Sensibilisation et éducation environnementale",
    highlights: [
      {
        text: "Programmes éducatifs dédiés : Intégrons dans nos cursus universitaires et formations professionnelles des cours sur l’impact environnemental et les solutions pour le réduire dans les secteurs de l’audiovisuel et de l’ingénierie.",
      },
      {
        text: "Projets étudiants concrets : Encourager les étudiants à travailler sur des initiatives locales pour protéger la biodiversité, comme des campagnes communautaires ou des technologies de reforestation.",
      },
      {
        text: "Partenariats avec ONG et entreprises : Travaillons avec des organisations locales et internationales pour maximiser l’impact des initiatives de sensibilisation et d’action sur le terrain.",
      },
    ],
    imageSrc: "https://source.unsplash.com/1600x900/?technology,education", // Remplacez par l'URL de l'image
    imageAlt: "Sensibilisation et éducation environnementale",
    imageOnRight: false, // Positionne l'image à gauche
  },
];

export default function Durable() {
  return (
    <div id="4" className="py-28">
      <ScrollComponentPartenariats text={partenariat.title} />
      <PartnershipCard subtitle={partenariat.description} />

      <WhyCollaborateSection />
      <h1 className=" my-12 text-center text-5xl font-semibold">
        Nos initiatives et propositions de partenariat
      </h1>
      <div className="space-y-16 px-6 py-12 ">
        {initiativesPartenariat.map((item, index) => (
          <SectionImageCity
            key={index}
            title={item.title}
            highlights={item.highlights}
            imageSrc={item.imageSrc}
            imageAlt={item.title}
            imageOnRight={item.imageOnRight}
          />
        ))}
      </div>
      <EnvironnementPartnership />
      <div className="mx-auto my-12 max-w-3xl rounded-lg bg-green-50 p-8 shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-semibold text-green-800">
          E-media s&apos;engage pour la durabilité à Madagascar
        </h2>
        <p className="text-center text-lg leading-relaxed text-gray-700">
          E-media s&apos;engage à faire de Madagascar un exemple de durabilité,
          en utilisant l&apos;audiovisuel et la technologie comme moteurs
          d&apos;innovation et de sensibilisation. Ensemble, contribuons à
          protéger ce joyau naturel et à promouvoir un avenir plus vert pour les
          générations futures.
        </p>
      </div>
    </div>
  );
}

const whyMadagascarIsCentral = [
  {
    title: "Un hotspot de biodiversité mondiale",
    description:
      "Madagascar abrite 5% de la biodiversité mondiale, dont 80% est endémique. Cependant, cette richesse est menacée par la déforestation, l’érosion des sols et les changements climatiques.",
    icon: "🌿", // Icône représentant la nature
  },
  {
    title: "Vulnérabilité environnementale",
    description:
      "Le pays subit régulièrement des cyclones, des périodes de sécheresse et une perte accélérée de ses écosystèmes. Ces défis nécessitent des actions immédiates et innovantes.",
    icon: "🌪️", // Icône représentant un cyclone
  },
  {
    title: "Un potentiel pour l’éducation environnementale",
    description:
      "En sensibilisant les jeunes malagasy aux enjeux environnementaux, nous pouvons former une génération engagée pour protéger leur environnement tout en adoptant des pratiques durables dans les secteurs créatifs et technologiques.",
    icon: "📚", // Icône représentant l'éducation
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
          Pourquoi Madagascar est central dans cette mission ?
        </h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {whyMadagascarIsCentral.map((item, index) => (
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

const environnementPartnership = [
  {
    title: "Préserver le patrimoine naturel unique",
    description:
      "Ensemble, valorisons la biodiversité malagasy à travers des productions audiovisuelles et des projets éducatifs qui attirent l’attention sur ces trésors menacés.",
    icon: "🌿", // Icône personnalisée pour la préservation de la nature
  },
  {
    title: "Éduquer et responsabiliser",
    description:
      "Equipons la jeunesse malagasy des outils nécessaires pour devenir des acteurs du changement, à la fois sur le plan local et global.",
    icon: "🎓", // Icône personnalisée pour l'éducation
  },
  {
    title: "Innover pour la durabilité",
    description:
      "Investissons dans des technologies et des pratiques qui allient créativité, technologie et respect de l’environnement.",
    icon: "💡", // Icône personnalisée pour l'innovation
  },
];
const EnvironnementPartnership = () => {
  return (
    <div className="relative px-6 py-16">
      {/* Contenu principal */}
      <div className="mx-auto max-w-7xl text-center text-white">
        {/* Titre de la section */}
        <h1 className="mb-20 text-5xl font-extrabold text-black">
          Opportunités de Partenariat
        </h1>

        {/* Grille de cartes */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {environnementPartnership.map((opportunity, index) => (
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
