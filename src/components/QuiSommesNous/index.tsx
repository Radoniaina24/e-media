"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Importer les styles AOS
import AOS from "aos"; // Importer la librairie AOS

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Transition fluide
    });
  }, []);

  return (
    <div className="bg-gray-100 px-6 py-20 dark:bg-gray-dark">
      {/* Header Section */}
      <section
        className="relative rounded-lg bg-cover bg-center shadow-lg"
        style={{ backgroundImage: "url('/images/banniere/p3.png')" }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 rounded-lg bg-black opacity-50"></div>
        <div className="relative z-10 py-20 text-center text-white">
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
            Qui Sommes-Nous ?
          </h1>
          <p className="mx-auto max-w-3xl text-xl font-light md:text-2xl">
            E-Media : L&apos;Université de Référence pour les Industries
            Créatives à Madagascar et en Afrique
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16" data-aos="fade-up">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-8 text-3xl font-extrabold md:text-4xl">
            Une Offre Académique Diversifiée
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark"
              data-aos="zoom-in"
            >
              <Image
                src="/images/why/f-u.jpg"
                alt="Formations universitaires"
                className="h-48 w-full rounded-t-lg object-cover"
                width={500}
                height={500}
              />
              <h3 className="mt-4 text-xl font-semibold">
                Formations universitaires
              </h3>
              <p className="mt-2 text-gray-600 dark:text-white">
                Présentiel et en ligne pour des carrières durables.
              </p>
            </div>
            <div
              className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark"
              data-aos="zoom-in"
            >
              <Image
                src="/images/why/f-c.jpg"
                alt="Formations certifiantes"
                className="h-48 w-full rounded-t-lg object-cover"
                width={500}
                height={500}
              />
              <h3 className="mt-4 text-xl font-semibold">
                Formations certifiantes
              </h3>
              <p className="mt-2 text-gray-600 dark:text-white">
                Accessibles avec ou sans baccalauréat, pour des jeunes en
                reconversion ou en quête d’emploi.
              </p>
            </div>
            <div
              className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark"
              data-aos="zoom-in"
            >
              <Image
                src="/images/why/m-s.jpg"
                alt="Modules spécialisés"
                className="h-48 w-full rounded-t-lg object-cover"
                width={500}
                height={500}
              />
              <h3 className="mt-4 text-xl font-semibold">
                Modules spécialisés
              </h3>
              <p className="mt-2 text-gray-600 dark:text-white">
                Apprentissage rapide et pratique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern and Stimulating Environment */}
      <section
        className="bg-gray-200 py-16 dark:bg-gray-dark"
        data-aos="fade-up"
      >
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-8 text-3xl font-extrabold md:text-4xl">
            Un Cadre Moderne et Stimulant
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark"
              data-aos="fade-left"
            >
              <Image
                src="/images/why/s-p.jpg"
                alt="Studios professionnels"
                className="h-48 w-full rounded-t-lg object-cover"
                width={500}
                height={500}
              />
              <h3 className="mt-4 text-xl font-semibold">
                Studios professionnels
              </h3>
            </div>
            <div
              className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark"
              data-aos="fade-left"
            >
              <Image
                src="/images/why/p-f.jpg"
                alt="Parc informatique performant"
                className="h-48 w-full rounded-t-lg object-cover"
                width={500}
                height={500}
              />
              <h3 className="mt-4 text-xl font-semibold">
                Parc informatique performant
              </h3>
            </div>
            <div
              className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark"
              data-aos="fade-left"
            >
              <Image
                src="/images/why/l-i.jpg"
                alt="Laboratoires spécialisés"
                className="h-48 w-full rounded-t-lg object-cover"
                width={500}
                height={500}
              />
              <h3 className="mt-4 text-xl font-semibold">
                Laboratoires spécialisés
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16" data-aos="fade-up">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-12 text-4xl font-extrabold text-gray-800 dark:text-white">
            Notre Engagement
          </h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Premier Engagement */}
            <div
              className="relative h-72 rounded-lg bg-cover bg-center shadow-lg"
              style={{
                backgroundImage: "url('/images/why/t-l.png')",
              }}
              data-aos="fade-right"
            >
              <div className="absolute inset-0 rounded-lg bg-black opacity-50"></div>
              <div className="relative z-10 flex flex-col items-center justify-center p-8 text-white">
                <svg
                  className="mb-4 h-12 w-12 text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 7a7 7 0 100-14 7 7 0 000 14zm-.5-3h1v-4h-1v4z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="text-2xl font-semibold">
                  Développer les talents locaux
                </h3>
                <p className="mt-2 text-lg">
                  Répondre aux besoins des industries créatives avec des talents
                  locaux qualifiés.
                </p>
              </div>
            </div>

            {/* Deuxième Engagement */}
            <div
              className="relative h-72 rounded-lg bg-cover bg-center shadow-lg"
              style={{
                backgroundImage: "url('/images/why/t-a.jpg')",
              }}
              data-aos="fade-right"
            >
              <div className="absolute inset-0 rounded-lg bg-black opacity-50"></div>
              <div className="relative z-10 flex flex-col items-center justify-center p-8 text-white">
                <svg
                  className="mb-4 h-12 w-12 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 7a7 7 0 100-14 7 7 0 000 14zm-.5-3h1v-4h-1v4z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="text-2xl font-semibold">
                  Rendre la technologie accessible
                </h3>
                <p className="mt-2 text-lg">
                  Promouvoir l&apos;accès à la technologie pour tous, quel que
                  soit leur parcours.
                </p>
              </div>
            </div>

            {/* Troisième Engagement */}
            <div
              className="relative h-72 rounded-lg bg-cover bg-center shadow-lg"
              style={{
                backgroundImage: "url('/images/why/s-a.jpg')",
              }}
              data-aos="fade-right"
            >
              <div className="absolute inset-0 rounded-lg bg-black opacity-50"></div>
              <div className="relative z-10 flex flex-col items-center justify-center p-8 text-white">
                <svg
                  className="text-yellow-400 mb-4 h-12 w-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 7a7 7 0 100-14 7 7 0 000 14zm-.5-3h1v-4h-1v4z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="text-2xl font-semibold">
                  Soutenir l'entrepreneuriat
                </h3>
                <p className="mt-2 text-lg">
                  Encourager l&apos;innovation et soutenir
                  l&apos;entrepreneuriat pour créer un impact durable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
