"use client";
import React from "react";
import Image from "next/image";
import HeroBanner from "../Partenariats/HeroBaner";
import { useLanguageContext } from "@/lib/context/LanguageContext";
import SectionImageCity from "./SectionImageCity";
import { FaFlask, FaUsers } from "react-icons/fa";
export default function VillageNumerique() {
  const { language } = useLanguageContext();
  const grandTitre =
    language === "fr"
      ? "Indian Ocean Tech Valley  : Pilier de la Transition Numérique à Madagascar"
      : "Indian Ocean Tech Valley: Pillar of the Digital Transition in Madagascar";
  return (
    <div>
      <header className="relative z-10 mx-auto max-w-7xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold text-red-500 md:text-5xl">
          {grandTitre}
        </h1>
      </header>

      <main className=" mx-auto py-8">
        {/* <!-- Infrastructures Éducatives et Technologiques --> */}
        <Infrastructure />
        {/* <!-- Incubateur pour Startups --> */}
        <Incurbateur />
        {/* <!-- Hebergerment--> */}
        <Hebergerment />
        {/* <!-- Attraction des Talents Locaux et Internationaux --> */}
        <Attraction />
        {/* <!-- Sport --> */}
        <Sport />
        {/* <!-- Innovatio --> */}
        <Innovation />
        {/* <!-- Engagement Écoresponsable --> */}
        {/* <Engagement /> */}
      </main>
    </div>
  );
}

const InfrastructureDataFr = {
  title: "1. Infrastructures Éducatives et Technologiques",
  points: [
    {
      title: "Campus connecté",
      description:
        "Équipé des dernières technologies pour des formations en intelligence artificielle, cybersécurité, blockchain et entrepreneuriat numérique.",
      bgColor: "bg-blue-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3-1.567-3-3.5S10.343 1 12 1s3 1.567 3 3.5S13.657 8 12 8zM12 14c-4.418 0-8 2.015-8 4.5V21h16v-2.5c0-2.485-3.582-4.5-8-4.5z"
          />
        </svg>
      ),
    },
    {
      title: "Studios audiovisuels et numériques",
      description:
        "Répondant aux normes internationales, pour développer des talents dans l’audiovisuel et le cinéma numérique.",
      bgColor: "bg-green-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      ),
    },
    {
      title: "Centre de démonstration technologique",
      description:
        "Permettre aux grandes entreprises et startups locales de tester et présenter leurs innovations.",
      bgColor: "bg-red-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
    },
  ],
};
const InfrastructureDataEn = {
  title: "1. Educational and Technological Infrastructures",
  points: [
    {
      title: "Connected Campus",
      description:
        "Equipped with the latest technologies for training in artificial intelligence, cybersecurity, blockchain, and digital entrepreneurship.",
      bgColor: "bg-blue-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3-1.567-3-3.5S10.343 1 12 1s3 1.567 3 3.5S13.657 8 12 8zM12 14c-4.418 0-8 2.015-8 4.5V21h16v-2.5c0-2.485-3.582-4.5-8-4.5z"
          />
        </svg>
      ),
    },
    {
      title: "Audiovisual and Digital Studios",
      description:
        "Meeting international standards, to develop talents in audiovisual and digital cinema.",
      bgColor: "bg-green-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      ),
    },
    {
      title: "Technology Demonstration Center",
      description:
        "Allowing large companies and local startups to test and showcase their innovations.",
      bgColor: "bg-red-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
    },
  ],
};

const Infrastructure = () => {
  const { language } = useLanguageContext();
  const InfrastructureData =
    language === "fr" ? InfrastructureDataFr : InfrastructureDataEn;
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dx3xhdaym/image/upload/v1736322517/trano_e304tx.jpg')", // Remplacez par l'URL de votre image
      }}
    >
      {/* Overlay pour un effet sombre */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container relative mx-auto px-4 hover:cursor-pointer">
        <h2 className="mb-20 text-center text-3xl font-bold text-white">
          {InfrastructureData.title}
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          {InfrastructureData.points.map((point, index) => (
            <div
              key={index}
              className="group relative rounded-lg bg-white p-6 pt-20 text-center shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 transform">
                <div
                  className={`flex h-16 w-16 items-center justify-center ${point.bgColor} rounded-full shadow-lg transition-all duration-300 group-hover:scale-110`}
                >
                  {point.icon}
                </div>
              </div>
              {/* Content */}
              <h3 className="mb-2 text-xl font-bold text-gray-800 transition-colors duration-300 ">
                {point.title}
              </h3>
              <p className="text-gray-700 transition-colors duration-300 ">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const incubateurDataFr = [
  {
    title: "Espaces de coworking",
    description:
      "Offrant un environnement dynamique pour stimuler la collaboration et l’innovation.",
    imageUrl:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736079354/coworking_nwlmga.jpg",
    bgColor: "bg-blue-600",
  },
  {
    title: "Accès à des investisseurs",
    description:
      "Organisation de forums technologiques et d’événements pour connecter les startups malgaches et africaines avec des partenaires financiers internationaux.",
    imageUrl:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736079355/investissement_exbedl.jpg",
    bgColor: "bg-green-600",
  },
  {
    title: "Soutien au développement des projets",
    description:
      "Coaching, mentorat et financement initial pour transformer les idées en entreprises prospères.",
    imageUrl:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736079355/soutient_xsfni7.jpg",
    bgColor: "bg-red-600",
  },
];
const incubateurDataEn = [
  {
    title: "Coworking Spaces",
    description:
      "Providing a dynamic environment to stimulate collaboration and innovation.",
    imageUrl:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736079354/coworking_nwlmga.jpg",
    bgColor: "bg-blue-600",
  },
  {
    title: "Access to Investors",
    description:
      "Organizing technology forums and events to connect Malagasy and African startups with international financial partners.",
    imageUrl:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736079355/investissement_exbedl.jpg",
    bgColor: "bg-green-600",
  },
  {
    title: "Project Development Support",
    description:
      "Coaching, mentoring, and seed funding to transform ideas into successful businesses.",
    imageUrl:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736079355/soutient_xsfni7.jpg",
    bgColor: "bg-red-600",
  },
];

const Incurbateur = () => {
  const { language } = useLanguageContext();
  const incubateurData =
    language === "fr" ? incubateurDataFr : incubateurDataEn;
  return (
    <section className="relative bg-gray-50 py-16">
      <div className="absolute inset-0   opacity-30"></div>
      <div className="container relative mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-dark ">
          {language === "fr"
            ? "2. Incubateur pour Startups"
            : "2. Incubator for Startups"}
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          {incubateurData.map((data, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
            >
              <div
                className={`absolute inset-0 ${data.bgColor} opacity-40`}
              ></div>
              <div className="relative z-10 p-6 text-center">
                <h3 className="mb-4 text-xl font-semibold text-gray-800 group-hover:text-white">
                  {data.title}
                </h3>
                <p className="mb-4 text-gray-700 group-hover:text-white">
                  {data.description}
                </p>
                <Image
                  width={500}
                  height={500}
                  src={data.imageUrl}
                  alt={data.title}
                  className="w-full rounded-lg shadow-lg transition-shadow duration-300 group-hover:shadow-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const accommodationsFr = [
  {
    title: "Résidences Étudiantes et Hébergements Locatifs",
    highlights: [
      {
        text: "Capacité d’accueil jusqu’à 1 000 étudiants logés dans des chambres modernes, avec des espaces privatifs ou partagés selon les besoins.",
      },
      {
        text: "Services intégrés : Connexion Internet haut débit, zones d’étude, bibliothèques et espaces communs de détente, sécurité 24/7 avec accès sécurisé.",
      },
      {
        text: "Options modulaires : Chambres individuelles, studios ou dortoirs partagés pour répondre à différents budgets et besoins.",
      },
    ],
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1737520958/Indian_4_paxrcg.png",
    imageAlt: "Résidences étudiantes",
    imageOnRight: false,
  },
  {
    title: "Résidences pour Professeurs, Chercheurs et Personnel",
    highlights: [
      {
        text: "Capacité d’accueil : Jusqu’à 200 logements pour les enseignants, techniciens et chercheurs internationaux.",
      },
      {
        text: "Appartements modernes : Logements familiaux pour les résidents permanents, suites individuelles pour les intervenants de courte durée.",
      },
      {
        text: "Espaces communs premium : Zones de coworking, salles de réunion, et espaces de networking.",
      },
    ],
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736337899/pole_academique_d6r9y9.jpg",
    imageAlt: "Résidences pour professeurs et chercheurs",
    imageOnRight: true,
  },
  {
    title: "Hébergements pour Visiteurs",
    highlights: [
      {
        text: "Suites et studios temporaires : Pour les conférenciers invités, investisseurs, et participants à des événements internationaux.",
      },
      {
        text: "Capacité adaptable : Jusqu’à 300 visiteurs grâce à des espaces flexibles.",
      },
    ],
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736337165/centre_culturel_dyfpdw.jpg",
    imageAlt: "Hébergements pour visiteurs",
    imageOnRight: false,
  },
];
const accommodationsEn = [
  {
    title: "Student Residences and Rental Accommodations",
    highlights: [
      {
        text: "Capacity: Up to 1,000 students housed in modern rooms, with private or shared spaces depending on individual needs.",
      },
      {
        text: "Integrated services: High-speed internet access, study areas, libraries, and communal relaxation spaces. 24/7 security with controlled access.",
      },
      {
        text: "Flexible options: Single rooms, studios, or shared dormitories to accommodate different budgets and preferences.",
      },
    ],
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1737520958/Indian_4_paxrcg.png",
    imageAlt: "Student residences",
    imageOnRight: false,
  },
  {
    title: "Residences for Professors, Researchers, and Staff",
    highlights: [
      {
        text: "Capacity: Up to 200 housing units for teachers, technicians, and international researchers.",
      },
      {
        text: "Modern apartments: Family housing for permanent residents, individual suites for short-term visitors.",
      },
      {
        text: "Premium communal spaces: Coworking areas, meeting rooms, and networking spaces.",
      },
    ],
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736337899/pole_academique_d6r9y9.jpg",
    imageAlt: "Residences for professors and researchers",
    imageOnRight: true,
  },
  {
    title: "Visitor Accommodations",
    highlights: [
      {
        text: "Temporary suites and studios: Designed for guest lecturers, investors, and participants in international events.",
      },
      {
        text: "Flexible capacity: Accommodates up to 300 visitors through adaptable spaces.",
      },
    ],
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736337165/centre_culturel_dyfpdw.jpg",
    imageAlt: "Visitor accommodations",
    imageOnRight: false,
  },
];
const Hebergerment = () => {
  const { language } = useLanguageContext();
  const accommodations =
    language === "fr" ? accommodationsFr : accommodationsEn;
  return (
    <>
      <h1 className="mb-5 text-center text-3xl font-bold text-dark">
        {language === "fr"
          ? "3. Hébergements Étendus et Résidences Modernes"
          : "3. Extended Accommodations and Modern Residences"}
      </h1>
      <div className="space-y-16 px-6 py-12 ">
        {accommodations.map((item, index) => (
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
    </>
  );
};
const sportsAndLeisureFacilitiesEn = [
  {
    title: "Multidisciplinary Sports Complex",
    highlights: [
      {
        text: "Versatile sports fields: Football, basketball, volleyball, and handball, designed for university and regional competitions.",
      },
      {
        text: "Olympic swimming pool: International standard dimensions for hosting competitions, along with aquatic leisure spaces for residents.",
      },
      {
        text: "Athletics track and fitness zones: Equipped with modern facilities for outdoor training.",
      },
    ],
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1737520953/Indian_3_ghuwad.png",
    imageAlt: "Multidisciplinary sports complex",
    imageOnRight: false,
  },
  {
    title: "High-End Golf Course",
    highlights: [
      {
        text: "9-hole semi-professional course, designed to attract both amateurs and professionals.",
      },
      {
        text: "Dedicated areas for local and international tournaments.",
      },
      {
        text: "Sustainable maintenance with eco-friendly irrigation and climate-adapted grass.",
      },
      {
        text: "Clubhouse included: An exclusive space for meetings, networking, and leisure.",
      },
    ],
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1737520952/Indian_2_mzlcdd.png",
    imageAlt: "High-end golf course",
    imageOnRight: true,
  },
  {
    title: "Outdoor Leisure Areas",
    highlights: [
      {
        text: "Landscaped green spaces: Scenic gardens, walking trails, and picnic areas.",
      },
      {
        text: "Family-friendly facilities: Children's playgrounds and family relaxation zones.",
      },
    ],
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1737520955/Indian_7_meuk12.png",
    imageAlt: "Outdoor leisure areas",
    imageOnRight: false,
  },
];

const sportsAndLeisureFacilitiesFr = [
  {
    title: "Complexe Sportif Multidisciplinaire",
    highlights: [
      {
        text: "Terrains de sport polyvalents : Football, basket-ball, volley-ball et handball, conçus pour les compétitions universitaires et régionales.",
      },
      {
        text: "Piscine olympique : Dimensions conformes aux normes internationales pour accueillir des compétitions, avec des espaces de loisirs aquatiques pour les résidents.",
      },
      {
        text: "Piste d’athlétisme et zones de fitness : Équipées d'installations modernes pour l'entraînement en plein air.",
      },
    ],
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1737520953/Indian_3_ghuwad.png",
    imageAlt: "Complexe sportif multidisciplinaire",
    imageOnRight: false,
  },
  {
    title: "Parcours de Golf Haut de Gamme",
    highlights: [
      {
        text: "Parcours 9 trous semi-professionnels, conçu pour attirer les amateurs et les professionnels.",
      },
      {
        text: "Zones dédiées aux tournois locaux et internationaux.",
      },
      {
        text: "Entretien durable avec une irrigation écoresponsable et un gazon adapté au climat.",
      },
      {
        text: "Clubhouse inclus : Un espace exclusif pour les réunions, le networking et les loisirs.",
      },
    ],
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1737520952/Indian_2_mzlcdd.png",
    imageAlt: "Parcours de golf haut de gamme",
    imageOnRight: true,
  },
  {
    title: "Zones de Loisirs Extérieures",
    highlights: [
      {
        text: "Espaces verts aménagés : Jardins paysagers, sentiers de promenade et aires de pique-nique.",
      },
      {
        text: "Installations adaptées aux familles : Aires de jeux pour enfants et espaces de détente familiaux.",
      },
    ],
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1737520955/Indian_7_meuk12.png",
    imageAlt: "Zones de loisirs extérieures",
    imageOnRight: false,
  },
];

const Sport = () => {
  const { language } = useLanguageContext();
  const sportsAndLeisureFacilities =
    language === "fr"
      ? sportsAndLeisureFacilitiesFr
      : sportsAndLeisureFacilitiesEn;
  return (
    <>
      <h1 className="mb-5 mt-10 text-center text-3xl font-bold text-dark">
        {language === "fr"
          ? "5. Installations Sportives de Haute Qualité"
          : "5. High-Quality Sports Facilities"}
      </h1>
      <div className="space-y-16 px-6 py-12 ">
        {sportsAndLeisureFacilities.map((item, index) => (
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
    </>
  );
};
const attractionDataFr = [
  {
    title: "Formation des jeunes malgaches",
    description:
      "Offrir une éducation technologique accessible pour donner à la jeunesse les compétences nécessaires pour exceller dans un monde numérique.",
    imageUrl:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736080385/formation_zyq8o8.jpg",
    bgColor: "bg-purple-500",
  },
  {
    title: "Attirer les étudiants africains",
    description:
      "Madagascar, grâce à ses coûts abordables et à la qualité de l’éducation offerte par le Village Numérique, peut devenir une destination de choix pour les étudiants africains désireux d’acquérir une formation de pointe.",
    imageUrl:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736080385/Attyrer_z0wphw.jpg",
    bgColor: "bg-indigo-500",
  },
];
const attractionDataEn = [
  {
    title: "Training Malagasy Youth",
    description:
      "Providing accessible technological education to equip the youth with the necessary skills to excel in a digital world.",
    imageUrl:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736080385/formation_zyq8o8.jpg",
    bgColor: "bg-purple-500",
  },
  {
    title: "Attracting African Students",
    description:
      "With its affordable costs and the quality of education offered by the Digital Village, Madagascar can become a top destination for African students seeking advanced training.",
    imageUrl:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736080385/Attyrer_z0wphw.jpg",
    bgColor: "bg-indigo-500",
  },
];
const Attraction = () => {
  const { language } = useLanguageContext();
  const attractionData =
    language === "fr" ? attractionDataFr : attractionDataEn;
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dx3xhdaym/image/upload/v1736066013/village_l3oint.jpg')", // Remplacez par l'URL de votre image de fond
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container relative mx-auto px-6">
        <h2 className="mb-16 text-center text-3xl font-bold text-white">
          {language === "fr"
            ? "4. Attraction des Talents Locaux et Internationaux"
            : ". Attraction of Local and International Talents"}
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          {attractionData.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 shadow-xl"
            >
              <div className="relative z-10 flex h-full flex-col justify-between p-6">
                <div className="text-white">
                  <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                </div>
                <div className="mt-6">
                  <Image
                    width={500}
                    height={300}
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-48 w-full rounded-lg object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const engagementEcoresponsableDataFr = {
  title: "4. Engagement Écoresponsable",
  description:
    "Le Village Numérique intègre des pratiques durables : énergies renouvelables, gestion écologique des déchets et utilisation de matériaux locaux pour réduire l'impact environnemental.",
  image:
    "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736080936/engagement_i57pyl.jpg", // Image de l'engagement écoresponsable
  content: [
    {
      title: "Des pratiques durables au cœur de notre engagement",
      text: "Nous croyons fermement à l'intégration de solutions écologiques pour assurer un avenir durable. Grâce à l'usage d'énergies renouvelables et à la gestion responsable des déchets, le Village Numérique contribue à la préservation de notre environnement tout en favorisant l'innovation.",
    },
  ],
};
const engagementEcoresponsableDataEn = {
  title: "4. Eco-Responsibility Commitment",
  description:
    "The Digital Village incorporates sustainable practices: renewable energy, ecological waste management, and the use of local materials to reduce environmental impact.",
  image:
    "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736080936/engagement_i57pyl.jpg", // Image of eco-responsibility commitment
  content: [
    {
      title: "Sustainable Practices at the Core of Our Commitment",
      text: "We firmly believe in integrating ecological solutions to ensure a sustainable future. Through the use of renewable energy and responsible waste management, the Digital Village contributes to preserving our environment while fostering innovation.",
    },
  ],
};

const Engagement = () => {
  const { language } = useLanguageContext();
  const engagementEcoresponsableData =
    language === "fr"
      ? engagementEcoresponsableDataFr
      : engagementEcoresponsableDataEn;
  return (
    <section className="mb-16 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-8 text-3xl font-bold text-blue-600">
          {engagementEcoresponsableData.title}
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-gray-700 md:text-xl">
          {engagementEcoresponsableData.description}
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="relative">
            <Image
              width={500}
              height={500}
              src={engagementEcoresponsableData.image}
              alt="Engagement Écoresponsable"
              className="h-64 w-full rounded-lg object-cover shadow-xl"
            />
          </div>

          <div className="flex flex-col justify-center">
            {engagementEcoresponsableData.content.map((item, index) => (
              <div key={index}>
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
const researchAndStartupHubFr = [
  {
    title: "Grand Laboratoire Interdisciplinaire",
    icon: <FaFlask className="text-3xl text-red-600" />,
    details: [
      {
        text: "Domaines de recherche ",
        subItems: [
          "Intelligence artificielle et data science.",
          "Robotique et automatisation.",
          "Énergies renouvelables et technologies durables.",
          "Biotechnologie et sciences de la santé.",
        ],
      },
      {
        text: "Infrastructures de pointe ",
        subItems: [
          "Espaces de prototypage et ateliers collaboratifs.",
          "Équipements pour la recherche expérimentale, y compris en réalité augmentée et virtuelle.",
        ],
      },
      {
        text: "Collaboration internationale ",
        subItems: [
          "Accueil de chercheurs, projets communs avec universités et entreprises.",
        ],
      },
    ],
  },
  {
    title: "Hub Technologique pour Startups",
    icon: <FaUsers className="text-3xl text-green-500" />,
    details: [
      {
        text: "Capacité d’accueil",
        subItems: ["Jusqu’à 100 startups en incubation ou accélération."],
      },
      {
        text: "Espaces collaboratifs",
        subItems: [
          "Bureaux partagés, laboratoires, et plateformes de test pour les innovations technologiques.",
        ],
      },
      {
        text: "Programmes de mentorat",
        subItems: [
          " Accompagnement par des experts en finance, innovation et entrepreneuriat.",
        ],
      },
    ],
  },
];
const researchAndStartupHubEn = [
  {
    title: "Large Interdisciplinary Laboratory",
    icon: <FaFlask className="text-3xl text-red-600" />,
    details: [
      {
        text: "Research Areas",
        subItems: [
          "Artificial Intelligence and Data Science.",
          "Robotics and Automation.",
          "Renewable Energy and Sustainable Technologies.",
          "Biotechnology and Health Sciences.",
        ],
      },
      {
        text: "State-of-the-art Infrastructure",
        subItems: [
          "Prototyping spaces and collaborative workshops.",
          "Experimental research equipment, including augmented and virtual reality.",
        ],
      },
      {
        text: "International Collaboration",
        subItems: [
          "Hosting researchers, joint projects with universities and companies.",
        ],
      },
    ],
  },
  {
    title: "Technology Hub for Startups",
    icon: <FaUsers className="text-3xl text-green-500" />,
    details: [
      {
        text: "Capacity",
        subItems: ["Up to 100 startups in incubation or acceleration."],
      },
      {
        text: "Collaborative Spaces",
        subItems: [
          "Shared offices, laboratories, and testing platforms for technological innovations.",
        ],
      },
      {
        text: "Mentorship Programs",
        subItems: [
          "Support from experts in finance, innovation, and entrepreneurship.",
        ],
      },
    ],
  },
];

const Innovation = () => {
  const { language } = useLanguageContext();
  const researchAndStartupHub =
    language === "fr" ? researchAndStartupHubFr : researchAndStartupHubEn;
  return (
    <div
      className="bg-gradient-to-r from-blue-50 to-teal-50 py-16"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dx3xhdaym/image/upload/v1737520958/Indian_4_paxrcg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="mb-12 text-center text-4xl font-bold text-red-600">
        {language === "fr"
          ? "5. Centres de Recherche et Innovation"
          : "5. Research and Innovation Centers."}
      </h2>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {researchAndStartupHub.map((section, index) => (
          <div key={index} className="mb-12 rounded-2xl  p-8 ">
            {/* Card Header with Icon */}
            <div className="flex flex-col items-center space-y-6">
              <div className="rounded-full bg-gray-400 p-8 shadow-xl">
                <div className="text-5xl text-white">{section.icon}</div>
              </div>
              <h2 className="text-center text-3xl font-semibold text-white">
                {section.title}
              </h2>
            </div>

            {/* Card Details */}
            <div className="mt-6 space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
                {section.details.map((detail, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-gray-50 p-6 shadow-lg transition duration-300 hover:shadow-xl"
                  >
                    <h3 className="mb-4 text-center text-lg font-semibold text-primary">
                      {detail.text}
                    </h3>
                    <ul className="list-disc space-y-2 pl-6 text-gray-600">
                      {detail.subItems &&
                        detail.subItems.map((item, idx) => (
                          <li key={idx} className="text-base">
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
