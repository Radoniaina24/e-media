import React from "react";
import Image from "next/image";
import HeroBanner from "../Partenariats/HeroBaner";
export default function VillageNumerique() {
  const grandTitre =
    " Indian Ocean Tech Valley  : Pilier de la Transition Numérique à Madagascar";
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
        {/* <!-- Attraction des Talents Locaux et Internationaux --> */}
        <Attraction />

        {/* <!-- Engagement Écoresponsable --> */}
        <Engagement />
      </main>
    </div>
  );
}

const InfrastructureData = {
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
const Infrastructure = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dx3xhdaym/image/upload/v1736066013/village_l3oint.jpg')", // Remplacez par l'URL de votre image
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
const incubateurData = [
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
const Incurbateur = () => {
  return (
    <section className="relative bg-gray-50 py-16">
      <div className="absolute inset-0   opacity-30"></div>
      <div className="container relative mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-dark ">
          2. Incubateur pour Startups
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
const attractionData = [
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
const Attraction = () => {
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
          3. Attraction des Talents Locaux et Internationaux
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
const engagementEcoresponsableData = {
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

const Engagement = () => {
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
