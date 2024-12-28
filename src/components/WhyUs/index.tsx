"use client";
import React, { useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircleIcon, CheckIcon } from "@heroicons/react/solid"; // Icône pour les listes
export default function WhyUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l&apos;animation
      easing: "ease-in-out", // Style de transition
    });
  }, []);
  return (
    <div className="relative  py-10 dark:bg-gray-dark">
      <div
        className="relative bg-cover bg-fixed bg-center px-6 py-16 text-white"
        style={{
          backgroundImage: "url('/images/banniere/p1.png')", // Remplacez par l'URL de votre image
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>{" "}
        {/* Overlay pour améliorer la lisibilité */}
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          {/* Titre principal */}
          <h2
            className="mb-4 text-4xl font-extrabold text-white md:text-5xl"
            data-aos="fade-up"
          >
            Pourquoi Choisir E-Media ?
          </h2>

          {/* Sous-titre */}
          <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed md:text-xl">
            Découvrez les raisons qui font d'E-Media un choix idéal pour votre
            avenir dans les industries créatives.
          </p>
        </div>
      </div>
      <div className="container">
        <div className=" px-6 py-12 dark:bg-gray-dark">
          <div
            className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg"
            data-aos="fade-up"
          >
            <div className="relative">
              <Image
                src="/images/banniere/p3.png"
                alt="Photo de Nanisana"
                className="h-64 w-full object-cover md:h-80"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-blue-900 bg-opacity-25">
                <h2 className="text-2xl font-bold text-white drop-shadow-md md:text-3xl">
                  Emplacement Stratégique
                </h2>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-lg leading-relaxed text-gray-700">
                Située à{" "}
                <span className="font-bold text-blue-600">Nanisana</span>, au
                cœur d&apos;
                <span className="font-bold text-blue-600">Antananarivo</span>,
                <span className="font-bold">E-Media</span> est facilement
                accessible grâce à un réseau de transports bien desservi et
                proche des commodités essentielles, offrant un environnement
                pratique et accueillant.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-16 px-6 py-12 dark:bg-gray-dark">
          {/*  <!-- Section 1: Une Formation en Ligne Accessible Partout -->*/}
          <div className="mx-auto max-w-7xl space-y-16">
            <div
              className="flex flex-col items-center md:flex-row "
              data-aos="fade-up"
            >
              <div className="p-6 md:w-1/2" data-aos="fade-right">
                <h2 className="mb-4 text-2xl font-bold text-primary dark:text-white md:text-3xl">
                  Une Formation en Ligne Accessible Partout
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-gray-500 dark:text-gray-400">
                  E-Media propose des programmes en ligne de haute qualité,
                  accessibles à Madagascar et à l&apos;international.
                </p>
                <ul className="space-y-3 text-gray-500 dark:text-gray-400">
                  <li className=" flex items-center">
                    <div className="mr-4">
                      <CheckIcon className=" h-6 w-6 text-green-500" />
                    </div>

                    <div>
                      <span className="font-semibold">
                        Des formations flexibles
                      </span>{" "}
                      et un accompagnement personnalisé adaptés aux besoins des
                      apprenants.
                    </div>
                  </li>
                  <li className=" flex items-center">
                    <div className="mr-4">
                      <CheckIcon className=" h-6 w-6 text-green-500" />
                    </div>

                    <div>
                      <span className="font-semibold">
                        Une communauté étudiante diversifiée
                      </span>
                      , issue d&apos;Afrique, d&apos;Europe, des Amériques et de
                      la diaspora malgache.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2" data-aos="fade-left">
                <Image
                  src="/images/why/online.jpg"
                  alt="Formation en ligne"
                  className="h-64 w-full rounded-lg object-cover shadow-lg md:h-80"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>

          {/* <!-- Section 2: Des Infrastructures Modernes --> */}
          <div
            className="flex flex-col items-center md:flex-row"
            data-aos="fade-up"
          >
            <div className="order-2 md:order-1 md:w-1/2" data-aos="fade-right">
              <img
                src="/images/banniere/p6.png"
                alt="Infrastructures modernes"
                className="h-64 w-full rounded-lg object-cover shadow-lg md:h-80"
                width={500}
                height={500}
              />
            </div>
            <div
              className="order-1 p-6 md:order-2 md:w-1/2"
              data-aos="fade-left"
            >
              <h2 className="mb-4 text-2xl font-bold  text-primary dark:text-white md:text-3xl">
                Des Infrastructures Modernes
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-500 dark:text-gray-400">
                Avec des équipements de pointe, E-Media garantit une formation
                pratique et immersive :
              </p>
              <ul className="list-inside list-disc space-y-3 text-gray-500 dark:text-gray-400">
                <li className=" flex items-center">
                  <div className="mr-4">
                    <CheckIcon className=" h-6 w-6 text-green-500" />
                  </div>

                  <div>
                    Studios professionnels : Fond vert, plateau TV,
                    sonorisation, et régie vidéo.
                  </div>
                </li>
                <li className=" flex items-center">
                  <div className="mr-4">
                    <CheckIcon className=" h-6 w-6 text-green-500" />
                  </div>

                  <div>
                    Parc informatique : Ordinateurs performants (Core i7, 7ᵉ
                    génération et plus).
                  </div>
                </li>
                <li className=" flex items-center">
                  <div className="mr-4">
                    <CheckIcon className=" h-6 w-6 text-green-500" />
                  </div>

                  <div>
                    Laboratoires spécialisés : Multimédia, informatique et
                    techniques avancées.
                  </div>
                </li>

                <li className=" flex items-center">
                  <div className="mr-4">
                    <CheckIcon className=" h-6 w-6 text-green-500" />
                  </div>

                  <div>
                    Cabines de son et studio radiophonique pour une qualité
                    optimale.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Section 3: Un Engagement pour le Développement Durable --> */}
          <div
            className="flex flex-col items-center md:flex-row"
            data-aos="fade-up"
          >
            <div className="p-6 md:w-1/2">
              <h2
                className="mb-4 text-2xl font-bold text-primary dark:text-white md:text-3xl"
                data-aos="fade-right"
              >
                Un Engagement pour le Développement Durable
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-500 dark:text-gray-400">
                E-Media contribue au développement socio-économique de
                Madagascar et de l&apos;Afrique en :
              </p>
              <ul className="list-inside list-disc space-y-3 text-gray-500 dark:text-gray-400">
                <li className=" flex items-center">
                  <div className="mr-4">
                    <CheckIcon className=" h-6 w-6 text-green-500" />
                  </div>

                  <div>
                    Créant des opportunités professionnelles pour les jeunes
                    dans les industries créatives.
                  </div>
                </li>
                <li className=" flex items-center">
                  <div className="mr-4">
                    <CheckIcon className=" h-6 w-6 text-green-500" />
                  </div>

                  <div>
                    Encourageant l&apos;entrepreneuriat et l&apos;innovation
                    comme moteurs de croissance.
                  </div>
                </li>
                <li className=" flex items-center">
                  <div className="mr-4">
                    <CheckIcon className=" h-6 w-6 text-green-500" />
                  </div>

                  <div>
                    Valorisant les ressources culturelles et humaines locales
                    pour un rayonnement international.
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <img
                src="/images/banniere/p1.png"
                alt="Développement durable"
                className="h-64 w-full rounded-lg object-cover shadow-lg md:h-80"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Section 4: E-Media : L&apos;Excellence et l&apos;Impact --> */}
      <div
        className="relative bg-cover bg-fixed bg-center px-6 py-20 text-center text-white"
        style={{
          backgroundImage: "url('/images/banniere/p7.png')", // Remplacez par l&apos;URL de votre image
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Contenu */}
        <div className="relative z-10" data-aos="zoom-in">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            E-Media : L&apos;Excellence et l&apos;Impact
          </h2>
          <p className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed md:text-xl">
            E-Media allie innovation technologique et engagement pour un avenir
            durable, transformant créativité et savoir-faire en leviers de
            développement.
          </p>
          <p className="text-lg font-semibold text-blue-300 md:text-xl">
            E-Media : Construisons l&apos;avenir ensemble.
          </p>
          <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-lg font-bold text-white shadow-lg transition hover:bg-blue-700">
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  );
}
