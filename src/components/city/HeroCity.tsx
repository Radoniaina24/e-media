import React from "react";

export default function HeroCity() {
  const TextHero = "Indian Ocean Tech Valley";
  const subtitleHero =
    "Indian Ocean Tech Valley est un projet visionnaire et multifonctionnel qui s’étend sur 15 hectares, conçu pour transformer Madagascar en un hub stratégique dans l’Océan Indien. Ce pôle numérique intègre l’éducation de pointe, l’innovation technologique, l’entrepreneuriat, et le développement économique pour propulser Madagascar et l’Afrique vers l’avenir.";

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dx3xhdaym/image/upload/v1736066013/village_l3oint.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <h1
            data-aos="fade-up"
            className="text-4xl font-extrabold leading-tight md:text-6xl"
          >
            {TextHero}
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-light md:text-xl">
            {subtitleHero}
          </p>
          {/* <a
            href="#details"
            className="mt-6 inline-block rounded-lg bg-indigo-600 px-8 py-3 text-lg font-semibold shadow-lg transition duration-300 hover:bg-indigo-700"
          >
            Découvrir le projet
          </a> */}

          {/* Flèche vers le bas */}
          <div className="mt-8">
            <a href="#details" className="flex flex-col items-center">
              <svg
                className="h-8 w-8 animate-bounce text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <span className="mt-2 text-sm font-light">En savoir plus</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
