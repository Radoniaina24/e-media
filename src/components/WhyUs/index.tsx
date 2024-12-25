import React from "react";

export default function WhyUs() {
  return (
    <div>
      <div className="mx-auto my-20 max-w-5xl">
        {/* Title Section */}
        <div className="mb-16 text-center">
          <h1 className="text-yellow-500 mb-4 text-4xl font-bold">
            Pourquoi Choisir E-Media ?
          </h1>
          <p className="text-xl text-gray-700">
            Découvrez les raisons qui font d&apos;E-Media un choix idéal pour
            votre avenir dans les industries créatives.
          </p>
        </div>

        {/* Strategic Location Section */}
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h3 className="text-yellow-400 mb-4 text-2xl font-semibold ">
              Un Emplacement Stratégique
            </h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-white">
              Située à Nanisana, au cœur d&apos;Antananarivo, E-Media est
              facilement accessible grâce à un réseau de transports bien
              desservi et proche des commodités essentielles, offrant un
              environnement pratique et accueillant.
            </p>
          </div>
          <div className="flex justify-center">
            {/* Add an image or illustration here if desired */}
          </div>
        </div>

        {/* Online Education Section */}
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h3 className="text-yellow-400 mb-4 text-2xl font-semibold">
              Une Formation en Ligne Accessible Partout
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>
                <span className="font-semibold">
                  Une communauté étudiante diversifiée
                </span>
                , issue d&apos;Afrique, d&apos;Europe, des Amériques et de la
                diaspora malgache.
              </li>
              <li>
                <span className="font-semibold">Des formations flexibles</span>{" "}
                et un accompagnement personnalisé adaptés aux besoins des
                apprenants.
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            {/* Add an image or illustration here if desired */}
          </div>
        </div>

        {/* Modern Infrastructure Section */}
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h3 className="text-yellow-400 mb-4 text-2xl font-semibold">
              Des Infrastructures Modernes
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>
                <span className="font-semibold">Studios professionnels</span> :
                Fond vert, plateau TV, sonorisation, et régie vidéo.
              </li>
              <li>
                <span className="font-semibold">Parc informatique</span> :
                Ordinateurs performants (Core i7, 7ᵉ génération et plus).
              </li>
              <li>
                <span className="font-semibold">Laboratoires spécialisés</span>{" "}
                : Multimédia, informatique et techniques avancées.
              </li>
              <li>
                <span className="font-semibold">
                  Cabines de son et studio radiophonique
                </span>{" "}
                pour une qualité optimale.
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            {/* Add an image or illustration here if desired */}
          </div>
        </div>

        {/* Sustainable Development Section */}
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h3 className="text-yellow-400 mb-4 text-2xl font-semibold">
              Un Engagement pour le Développement Durable
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>
                <span className="font-semibold">
                  Création des opportunités professionnelles
                </span>{" "}
                pour les jeunes dans les industries créatives.
              </li>
              <li>
                <span className="font-semibold">
                  Encouragement de l&apos;entrepreneuriat
                </span>{" "}
                et l&apos;innovation comme moteurs de croissance.
              </li>
              <li>
                <span className="font-semibold">
                  Valorisation des ressources culturelles
                </span>{" "}
                et humaines locales pour un rayonnement international.
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            {/* Add an image or illustration here if desired */}
          </div>
        </div>

        {/* Excellence and Impact Section */}
        <div className="mb-16">
          <h3 className="text-yellow-400 mb-4 text-2xl font-semibold">
            E-Media : L&apos;Excellence et l&apos;Impact
          </h3>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            E-Media allie innovation technologique et engagement pour un avenir
            durable, transformant créativité et savoir-faire en leviers de
            développement.
          </p>
          <h3 className="text-yellow-400 mb-4 text-2xl font-semibold">
            E-Media : Construisons l&apos;avenir ensemble.
          </h3>
        </div>
      </div>
    </div>
  );
}
