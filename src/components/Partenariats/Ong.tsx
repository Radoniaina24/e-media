import React from "react";
import PartnershipSection from "./PartnershipCard";
import SectionImageCity from "../city/SectionImageCity";
import { CheckCircleIcon } from "@heroicons/react/solid";
import PartnershipCard from "./PartnershipCard";
import ScrollComponentPartenariats from "./ScrollComponentPartenariats";

export default function Ong() {
  const partenariats = {
    title: "Partenariat avec les ONG et Gouvernements",
    description:
      "E-media s’engage à être un catalyseur de changement pour les jeunes défavorisés de Madagascar, en utilisant son expertise en audiovisuel, numérique, et ingénierie pour répondre aux défis éducatifs, sociaux et culturels. Notre mission est de transformer l’éducation et la sensibilisation en des outils concrets pour améliorer la vie des jeunes issus de milieux vulnérables.",
  };
  const partnershipForYouthMadagascar = [
    {
      title: "Éducation accessible à travers E-media",
      highlights: [
        {
          text: "Réduire les inégalités éducatives : De nombreux jeunes talentueux sont contraints d’abandonner leurs études faute de moyens financiers. Grâce à ses formations en ligne et en présentiel, E-media offre une plateforme accessible pour donner une chance à ces jeunes.",
        },
        {
          text: "Bourses pour la formation : E-media travaille avec des partenaires pour financer les frais de scolarité des jeunes défavorisés et leur fournir un accès gratuit ou subventionné à des formations de pointe.",
        },
        {
          text: "Formations adaptées aux besoins locaux : En combinant des compétences technologiques, audiovisuelles et culturelles, nos programmes aident les jeunes à acquérir des compétences directement applicables sur le marché du travail.",
        },
      ],
      imageSrc: "https://source.unsplash.com/1600x900/?education,youth",
      imageAlt: "Éducation accessible",
      imageOnRight: true,
    },
    {
      title: "Sensibilisation aux enjeux sociaux à travers l’audiovisuel",
      highlights: [
        {
          text: "Productions audiovisuelles engagées : E-media développe des documentaires, courts-métrages et vidéos éducatives mettant en lumière les défis sociaux et environnementaux auxquels les jeunes malagasy sont confrontés.",
        },
        {
          text: "Thématiques abordées : L’éducation pour tous, les droits des enfants et des jeunes, la préservation de l’environnement et les impacts des changements climatiques, et la lutte contre les inégalités de genre et l’autonomisation des jeunes filles.",
        },
        {
          text: "Diffusion massive : Ces contenus sont partagés à travers les réseaux d’E-media, les médias locaux, et les plateformes internationales, sensibilisant un large public et attirant l’attention sur ces causes.",
        },
      ],
      imageSrc: "https://source.unsplash.com/1600x900/?social,impact",
      imageAlt: "Sensibilisation sociale",
      imageOnRight: false,
    },
    {
      title: "Valorisation des talents à travers la culture et la créativité",
      highlights: [
        {
          text: "Un tremplin pour les jeunes créatifs : Madagascar regorge de talents artistiques et techniques souvent inexploités. E-media fournit un cadre pour les découvrir, les former et les connecter à des opportunités nationales et internationales.",
        },
        {
          text: "Mise en avant des cultures locales : En soutenant des projets créatifs qui célèbrent les traditions malagasy tout en les combinant avec des approches modernes, E-media contribue à la valorisation culturelle tout en offrant des opportunités professionnelles aux jeunes artistes.",
        },
      ],
      imageSrc: "https://source.unsplash.com/1600x900/?creativity,culture",
      imageAlt: "Valorisation culturelle",
      imageOnRight: true,
    },
    {
      title: "Un outil pour les ONG et gouvernements",
      highlights: [
        {
          text: "Formation et sensibilisation ciblée : E-media travaille avec les ONG et les institutions publiques pour produire des contenus éducatifs et de sensibilisation adaptés à leurs besoins, comme des campagnes sur la santé publique, l’inclusion sociale ou la protection de l’environnement.",
        },
        {
          text: "Impact local renforcé : Grâce à nos plateformes et infrastructures modernes, nous aidons à maximiser l’impact des initiatives gouvernementales et humanitaires en les connectant directement aux communautés malagasy.",
        },
      ],
      imageSrc: "https://source.unsplash.com/1600x900/?ngo,government",
      imageAlt: "Outil pour ONG",
      imageOnRight: false,
    },
  ];

  return (
    <div id="6" className="py-28">
      <ScrollComponentPartenariats text={partenariats.title} />
      <PartnershipCard subtitle={partenariats.description} />
      <h2 className="my-12 text-center text-4xl font-extrabold text-indigo-700">
        Pourquoi ce partenariat est essentiel pour les jeunes malagasy ?
      </h2>
      <div className="space-y-16 px-6 py-12 ">
        {partnershipForYouthMadagascar.map((item, index) => (
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
      <InitiativesWithEMedia opportunities={initiativesWithEMedia} />
      <PartnershipInitiative />
      <div className="mx-auto my-12 max-w-3xl rounded-lg bg-blue-50 p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-semibold text-blue-800">
          Avec E-media, transformons les défis sociaux en opportunités
        </h2>
        <p className="text-center text-lg leading-relaxed text-gray-700">
          Bâtissons un avenir où chaque jeune malagasy a une chance de réussir.
          En unissant nos efforts, nous pouvons créer un impact durable et
          offrir à chacun les moyens d&apos;atteindre ses ambitions.
        </p>
      </div>
    </div>
  );
}

const initiativesWithEMedia = [
  {
    title: "Bourses éducatives et mobilité internationale",
    description: [
      "Création de programmes de bourses permettant aux jeunes défavorisés de suivre des formations à E-media, couvrant les frais de scolarité, le matériel, et l’accompagnement.",
      "Opportunités de mobilité pour poursuivre des études ou des stages à l’étranger grâce à nos partenariats académiques internationaux.",
    ],
    icon: "🎓",
  },
  {
    title: "Campagnes de sensibilisation à fort impact",
    description: [
      "Production de contenus éducatifs pour sensibiliser à des problématiques clés comme la pauvreté, l’éducation, ou l’égalité des genres.",
      "Diffusion via E-media et ses partenaires pour atteindre des milliers de jeunes et communautés locales.",
    ],
    icon: "📢",
  },
  {
    title: "Incubation de projets créatifs et entrepreneuriaux",
    description: [
      "Soutien aux jeunes porteurs de projets innovants dans les secteurs créatifs et technologiques.",
      "Formation et mentorat pour transformer leurs idées en solutions concrètes.",
    ],
    icon: "🚀",
  },
  {
    title: "Valorisation des cultures et traditions",
    description: [
      "Organisation de festivals, projections, et ateliers mettant en avant la culture malagasy et ses talents émergents.",
      "Production de contenus collaboratifs avec des partenaires internationaux pour donner une visibilité globale aux cultures locales.",
    ],
    icon: "🌍",
  },
];
const InitiativesWithEMedia = ({ opportunities }) => {
  return (
    <div className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="mb-28 text-4xl font-extrabold text-indigo-700">
          Initiatives concrètes avec E-media
        </h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
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
const partnershipInitiative = [
  {
    title: "Accès pour tous",
    description:
      "En soutenant E-media, vous permettez à des milliers de jeunes défavorisés d’accéder à une éducation moderne et adaptée, essentielle pour leur avenir.",
    icon: "📘",
  },
  {
    title: "Sensibilisation à grande échelle",
    description:
      "Grâce à nos capacités de production audiovisuelle et numérique, nous touchons un large public et mettons en lumière des problématiques souvent négligées.",
    icon: "🌍",
  },
  {
    title: "Valorisation de la jeunesse et des talents",
    description:
      "En investissant dans l’éducation et la culture, vous contribuez à transformer des vies et à renforcer les communautés locales.",
    icon: "🌟",
  },
];
const PartnershipInitiative = () => {
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
        <h1 className="mb-12  text-4xl font-extrabold text-indigo-700">
          Un partenariat pour transformer les causes en solutions
        </h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {partnershipInitiative.map((item, index) => (
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
