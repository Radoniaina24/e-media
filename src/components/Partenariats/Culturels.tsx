import React from "react";
import PartnershipSection from "./PartnershipCard";
import SectionImageCity from "../city/SectionImageCity";
import {
  AcademicCapIcon,
  GlobeAltIcon,
  TrendingUpIcon,
} from "@heroicons/react/solid";

export default function Culturels() {
  const opportunitePartenariat = {
    title: "Nos Opportunités de Partenariat Culturels et Artistiques",
    description:
      "E-media s’engage à devenir un pont entre les cultures, en promouvant des échanges culturels dynamiques entre Madagascar et ses partenaires internationaux. À travers des collaborations stratégiques, E-media souhaite non seulement valoriser la richesse culturelle malagasy, mais aussi offrir un espace d’expression et de diffusion pour les cultures des pays partenaires, contribuant ainsi à un dialogue interculturel enrichissant sur le sol malgache.",
  };
  const madagascarOpportunities = [
    {
      title: "Un espace pour le dialogue des cultures",
      highlights: [
        {
          text: "Valorisation de la diversité culturelle : E-media propose d’accueillir et de promouvoir des manifestations artistiques et culturelles des pays partenaires (spectacles, expositions, projections cinématographiques, etc.) pour favoriser un échange réciproque de valeurs et de traditions.",
        },
        {
          text: "Partage des savoir-faire artistiques : À travers des ateliers et des masterclasses, les artistes malagasy et internationaux peuvent échanger des techniques, des inspirations, et des perspectives, créant ainsi une synergie unique.",
        },
        {
          text: "Promotion de la culture malagasy : Nos infrastructures modernes permettent de produire et de diffuser des contenus valorisant la richesse culturelle de Madagascar auprès des partenaires étrangers.",
        },
      ],
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736083737/socio_ezfas1.jpg", // Remplacez par le chemin vers votre image
      imageAlt: "Dialogue des cultures",
      imageOnRight: false, // Positionne l'image à gauche
    },
    {
      title: "Une plateforme pour la coopération artistique internationale",
      highlights: [
        {
          text: "Production collaborative : Réalisez des projets communs, comme des films, des documentaires ou des performances audiovisuelles, mettant en lumière les talents des deux côtés.",
        },
        {
          text: "Diffusion internationale et locale : Les œuvres créées peuvent être diffusées à l’échelle internationale tout en ayant un impact local significatif à Madagascar.",
        },
        {
          text: "Festival et événements culturels : E-media souhaite organiser des festivals multiculturels réunissant des artistes locaux et internationaux pour célébrer la diversité artistique et culturelle.",
        },
      ],
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736083737/socio_ezfas1.jpg", // Remplacez par le chemin vers votre image
      imageAlt: "Coopération artistique internationale",
      imageOnRight: true, // Positionne l'image à gauche
    },
    {
      title: "Valorisation des cultures partenaires à Madagascar",
      highlights: [
        {
          text: "Création d’espaces d’expression : E-media peut accueillir des événements et des projets mettant en avant les cultures des pays partenaires sur le sol malgache.",
        },
        {
          text: "Expositions d’art contemporain, photographies, ou artefacts traditionnels.",
        },
        {
          text: "Projections de films et débats cinématographiques internationaux.",
        },
        {
          text: "Concerts ou performances mettant en scène des artistes locaux et étrangers.",
        },
        {
          text: "Éducation interculturelle : Intégrer dans nos programmes académiques des contenus valorisant les apports culturels de nos partenaires.",
        },
      ],
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736083737/socio_ezfas1.jpg", // Remplacez par le chemin vers votre image
      imageAlt: "Valorisation des cultures partenaires",
      imageOnRight: false, // Positionne l'image à gauche
    },
    {
      title: "Formation et apprentissage interculturels",
      highlights: [
        {
          text: "Ateliers partagés : Former les jeunes malagasy aux pratiques culturelles et artistiques internationales tout en introduisant les partenaires étrangers aux traditions malagasy.",
        },
        {
          text: "Résidences artistiques : Offrir un espace aux artistes partenaires pour travailler sur des projets au cœur de la culture locale, enrichissant ainsi leurs créations.",
        },
      ],
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736083737/socio_ezfas1.jpg", // Remplacez par le chemin vers votre image
      imageAlt: "Formation interculturelle",
      imageOnRight: true, // Positionne l'image à gauche
    },
  ];
  const texte =
    "E-media est votre partenaire idéal pour créer un dialogue entre les cultures et promouvoir une coopération artistique et culturelle durable. Ensemble, célébrons la richesse et la diversité des patrimoines à travers des échanges inspirants.";
  return (
    <div>
      <PartnershipSection
        title={opportunitePartenariat.title}
        subtitle={opportunitePartenariat.description}
      />
      <h1 className=" my-12 text-center text-5xl font-semibold">
        Pourquoi collaborer avec E-Media ?
      </h1>
      <div className="space-y-16 px-6 py-12 ">
        {madagascarOpportunities.map((item, index) => (
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
      <Partenariat />
      <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-blue-50 to-teal-50 px-6 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl rounded-lg bg-white p-10 shadow-lg">
          <h1 className="mb-6 text-center text-4xl font-extrabold text-gray-800">
            E-media : Votre Partenaire Culturel
          </h1>

          <p className="mb-8 text-center text-2xl leading-relaxed text-gray-700">
            E-media est votre partenaire idéal pour créer un dialogue entre les
            cultures et promouvoir une coopération artistique et culturelle
            durable.
          </p>

          <p className="text-center text-xl leading-relaxed text-gray-600">
            Ensemble, célébrons la richesse et la diversité des patrimoines à
            travers des échanges inspirants.
          </p>
        </div>
      </div>
    </div>
  );
}
const partenariat = {
  titre: "Un partenariat pour une culture inclusive et universelle",
  objectifs: [
    {
      titre: "Un rayonnement culturel mutuel",
      description:
        "Offrir une visibilité aux cultures étrangères à Madagascar tout en exportant la richesse culturelle malagasy à l’international.",
      icon: <GlobeAltIcon className="h-6 w-6 text-blue-600" />,
    },
    {
      titre: "Développement économique et social",
      description:
        "Stimuler l’industrie culturelle comme moteur de croissance et d’inclusion.",
      icon: <TrendingUpIcon className="h-6 w-6 text-green-600" />,
    },
    {
      titre: "Formation d’une nouvelle génération multiculturelle",
      description:
        "Éduquer les jeunes à comprendre et à valoriser la diversité tout en développant des compétences artistiques et technologiques.",
      icon: <AcademicCapIcon className="text-yellow-600 h-6 w-6" />,
    },
  ],
};

const Partenariat = () => {
  return (
    <div className="container my-12 rounded-lg bg-white p-10 shadow-xl">
      <h1 className="my-12 text-center text-5xl font-semibold">
        {partenariat.titre}
      </h1>

      <div>
        <ul className="space-y-8">
          {partenariat.objectifs.map((objectif, index) => (
            <li
              key={index}
              className="flex items-start rounded-lg bg-gray-50 p-6 shadow-md transition-all hover:bg-gray-200"
            >
              <div className="mr-6">{objectif.icon}</div>
              <div>
                <h2 className="mb-2 text-2xl font-semibold text-blue-600">
                  {objectif.titre}
                </h2>
                <p className="text-lg text-gray-700">{objectif.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};