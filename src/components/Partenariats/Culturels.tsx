import React from "react";
import SectionImageCity from "../city/SectionImageCity";
import {
  AcademicCapIcon,
  GlobeAltIcon,
  TrendingUpIcon,
} from "@heroicons/react/solid";
import PartnershipCard from "./PartnershipCard";
import ScrollComponentPartenariats from "./ScrollComponentPartenariats";
import { useLanguageContext } from "@/lib/context/LanguageContext";

export default function Culturels() {
  const { language } = useLanguageContext();
  const opportunitePartenariatFr = {
    title: "Nos Opportunités de Partenariat Culturels et Artistiques",
    description:
      "E-media s’engage à devenir un pont entre les cultures, en promouvant des échanges culturels dynamiques entre Madagascar et ses partenaires internationaux. À travers des collaborations stratégiques, E-media souhaite non seulement valoriser la richesse culturelle malagasy, mais aussi offrir un espace d’expression et de diffusion pour les cultures des pays partenaires, contribuant ainsi à un dialogue interculturel enrichissant sur le sol malgache.",
  };
  const opportunitePartenariatEn = {
    title: "Our Cultural and Artistic Partnership Opportunities",
    description:
      "E-media is committed to becoming a bridge between cultures, promoting dynamic cultural exchanges between Madagascar and its international partners. Through strategic collaborations, E-media aims not only to highlight the richness of Malagasy culture but also to provide a space for expression and dissemination of the cultures of partner countries, thus contributing to a rich intercultural dialogue on Malagasy soil.",
  };
  const opportunitePartenariat =
    language === "fr" ? opportunitePartenariatFr : opportunitePartenariatEn;
  const madagascarOpportunitiesFr = [
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
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736413786/dialogue_xyjoet.jpg", // Remplacez par le chemin vers votre image
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
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736413786/cooperation_two3fz.jpg", // Remplacez par le chemin vers votre image
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
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736413788/valorisation_ichmao.jpg", // Remplacez par le chemin vers votre image
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
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736413765/apprentissage_i4ig1c.jpg", // Remplacez par le chemin vers votre image
      imageAlt: "Formation interculturelle",
      imageOnRight: true, // Positionne l'image à gauche
    },
  ];
  const madagascarOpportunitiesEn = [
    {
      title: "A Space for Cultural Dialogue",
      highlights: [
        {
          text: "Celebrating cultural diversity: E-media offers to host and promote artistic and cultural events from partner countries (performances, exhibitions, film screenings, etc.) to foster a mutual exchange of values and traditions.",
        },
        {
          text: "Sharing artistic expertise: Through workshops and masterclasses, Malagasy and international artists can exchange techniques, inspirations, and perspectives, creating a unique synergy.",
        },
        {
          text: "Promoting Malagasy culture: Our modern facilities allow us to produce and broadcast content that highlights the rich cultural heritage of Madagascar to international partners.",
        },
      ],
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736413786/dialogue_xyjoet.jpg", // Replace with your image path
      imageAlt: "Cultural Dialogue",
      imageOnRight: false, // Position the image on the left
    },
    {
      title: "A Platform for International Artistic Cooperation",
      highlights: [
        {
          text: "Collaborative production: Work on joint projects such as films, documentaries, or audiovisual performances, showcasing talents from both sides.",
        },
        {
          text: "International and local distribution: Created works can be broadcast internationally while having a significant local impact in Madagascar.",
        },
        {
          text: "Festivals and cultural events: E-media aims to organize multicultural festivals bringing together local and international artists to celebrate artistic and cultural diversity.",
        },
      ],
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736413786/cooperation_two3fz.jpg", // Replace with your image path
      imageAlt: "International Artistic Cooperation",
      imageOnRight: true, // Position the image on the right
    },
    {
      title: "Promoting Partner Cultures in Madagascar",
      highlights: [
        {
          text: "Creating spaces for expression: E-media can host events and projects that highlight the cultures of partner countries on Malagasy soil.",
        },
        {
          text: "Contemporary art exhibitions, photography, or traditional artifacts.",
        },
        {
          text: "International film screenings and discussions.",
        },
        {
          text: "Concerts or performances featuring both local and international artists.",
        },
        {
          text: "Intercultural education: Integrating content that values the cultural contributions of our partners into our academic programs.",
        },
      ],
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736413788/valorisation_ichmao.jpg", // Replace with your image path
      imageAlt: "Promoting Partner Cultures",
      imageOnRight: false, // Position the image on the left
    },
    {
      title: "Intercultural Training and Learning",
      highlights: [
        {
          text: "Shared workshops: Training young Malagasy people in international cultural and artistic practices while introducing foreign partners to Malagasy traditions.",
        },
        {
          text: "Artist residencies: Offering a space for partner artists to work on projects within the local culture, enriching their creations.",
        },
      ],
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736413765/apprentissage_i4ig1c.jpg", // Replace with your image path
      imageAlt: "Intercultural Training",
      imageOnRight: true, // Position the image on the right
    },
  ];
  const madagascarOpportunities =
    language === "fr" ? madagascarOpportunitiesFr : madagascarOpportunitiesEn;

  return (
    <div id="3" className="py-28">
      <ScrollComponentPartenariats text={opportunitePartenariat.title} />
      <PartnershipCard subtitle={opportunitePartenariat.description} />
      <h1 className=" my-12 text-center text-4xl font-extrabold text-indigo-700">
        {language === "fr"
          ? "Pourquoi collaborer avec E-Media ?"
          : "Why Collaborate with E-Media ?"}
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
      {language === "fr" ? (
        <div className=" px-6 py-20 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-4xl rounded-lg bg-green-50 p-10 shadow-lg">
            <h1 className="mb-6 text-center text-2xl font-semibold text-green-800">
              E-media : Votre Partenaire Culturel
            </h1>

            <p className="mb-8 text-center text-lg leading-relaxed text-gray-700">
              E-media est votre partenaire idéal pour créer un dialogue entre
              les cultures et promouvoir une coopération artistique et
              culturelle durable.Ensemble, célébrons la richesse et la diversité
              des patrimoines à travers des échanges inspirants.
            </p>
          </div>
        </div>
      ) : (
        <div className="px-6 py-20 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-4xl rounded-lg bg-green-50 p-10 shadow-lg">
            <h1 className="mb-6 text-center text-2xl font-semibold text-green-800">
              E-media: Your Cultural Partner
            </h1>

            <p className="mb-8 text-center text-lg leading-relaxed text-gray-700">
              E-media is your ideal partner to create a dialogue between
              cultures and promote sustainable artistic and cultural
              cooperation. Together, let’s celebrate the richness and diversity
              of heritage through inspiring exchanges.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
const partenariatFr = {
  titre: "Un partenariat pour une culture inclusive et universelle",
  objectifs: [
    {
      titre: "Un rayonnement culturel mutuel",
      description:
        "Offrir une visibilité aux cultures étrangères à Madagascar tout en exportant la richesse culturelle malagasy à l’international.",
      icon: <GlobeAltIcon className="h-8 w-8 text-blue-600" />,
    },
    {
      titre: "Développement économique et social",
      description:
        "Stimuler l’industrie culturelle comme moteur de croissance et d’inclusion.",
      icon: <TrendingUpIcon className="h-8 w-8 text-green-600" />,
    },
    {
      titre: "Formation d’une nouvelle génération multiculturelle",
      description:
        "Éduquer les jeunes à comprendre et à valoriser la diversité tout en développant des compétences artistiques et technologiques.",
      icon: <AcademicCapIcon className="text-yellow-600 h-8 w-8" />,
    },
  ],
};
const partenariatEn = {
  titre: "A Partnership for an Inclusive and Universal Culture",
  objectifs: [
    {
      titre: "Mutual Cultural Outreach",
      description:
        "Offer visibility to foreign cultures in Madagascar while exporting Malagasy cultural richness internationally.",
      icon: <GlobeAltIcon className="h-8 w-8 text-blue-600" />,
    },
    {
      titre: "Economic and Social Development",
      description:
        "Stimulate the cultural industry as a driver of growth and inclusion.",
      icon: <TrendingUpIcon className="h-8 w-8 text-green-600" />,
    },
    {
      titre: "Training a New Multicultural Generation",
      description:
        "Educate young people to understand and value diversity while developing artistic and technological skills.",
      icon: <AcademicCapIcon className="text-yellow-600 h-8 w-8" />,
    },
  ],
};

const Partenariat = () => {
  const { language } = useLanguageContext();
  const partenariat = language === "fr" ? partenariatFr : partenariatEn;
  return (
    <div className="relative px-6 py-16">
      {/* Contenu principal */}
      <div className="mx-auto max-w-7xl text-center text-white">
        {/* Titre de la section */}
        <h1 className="mb-12 text-4xl font-extrabold text-indigo-700">
          {partenariat.titre}
        </h1>

        {/* Grille de cartes */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {partenariat.objectifs.map((opportunity, index) => (
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
                {opportunity.titre}
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
