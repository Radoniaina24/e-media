import React from "react";

export default function Chiffre() {
  const grandTitre = "Chiffres Clés et Opportunités";
  const madagascarStatistics = {
    title: "1. statistiques Économiques de Madagascar",
    points: [
      {
        title: "Croissance annuelle du PIB",
        description:
          "Croissance annuelle du PIB : +5% en moyenne ces dernières années.",
        bgColor: "bg-green-600",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
            />
          </svg>
        ),
      },
      {
        title: "Emplois créés dans le secteur des BPO et numérique",
        description:
          "Plus de 40 000 emplois créés dans le secteur des BPO et du numérique en 2023.",
        bgColor: "bg-orange-600",
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
              d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8zM12 14c-4.418 0-8 2.015-8 4.5V21h16v-2.5c0-2.485-3.582-4.5-8-4.5z"
            />
          </svg>
        ),
      },
      {
        title: "Augmentation de la connectivité Internet",
        description:
          "Augmentation de 10 % par an de la connectivité Internet, soutenant l’émergence des services numériques.",
        bgColor: "bg-blue-600",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        ),
      },
    ],
  };

  const madagascarOpportunities = {
    title: "2. Opportunités dans l’Océan Indien",
    points: [
      {
        title: "Population cumulée des îles voisines",
        description:
          "Population cumulée de plus de 45 millions dans les îles voisines, avec une demande croissante en services technologiques et éducatifs.",
        bgColor: "bg-purple-600",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
            />
          </svg>
        ),
      },
      {
        title: "Marché en pleine expansion",
        description:
          "Un marché en pleine expansion : Les services numériques et éducatifs en Afrique devraient atteindre une valeur de plus de 300 milliards USD d’ici 2025.",
        bgColor: "bg-red-600",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
        ),
      },
    ],
  };

  return (
    <div>
      <header className="relative z-10 mx-auto max-w-7xl text-center">
        <h1 className="my-20 text-4xl font-extrabold text-red-500 md:text-5xl">
          {grandTitre}
        </h1>
      </header>
      <section
        className="relative bg-cover bg-center bg-no-repeat py-16"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dx3xhdaym/image/upload/v1736086904/cl%C3%A9_bttkkt.jpg')", // Remplacez par l'URL de votre image
        }}
      >
        {/* Overlay pour un effet sombre */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container relative mx-auto px-4 hover:cursor-pointer">
          {/* Madagascar statistic */}
          <h2 className="mb-20 text-center text-3xl font-bold text-white">
            {madagascarStatistics.title}
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            {madagascarStatistics.points.map((point, index) => (
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

          {/* Madagascar opportunity */}
          <h2 className="my-20 text-center text-3xl font-bold text-white">
            {madagascarOpportunities.title}
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            {madagascarOpportunities.points.map((point, index) => (
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
    </div>
  );
}
