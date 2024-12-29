"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import Link from "next/link";
export default function CityProject() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/why/v-l.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <h1
            data-aos="fade-up"
            className="text-4xl font-extrabold leading-tight md:text-6xl"
          >
            Un Village Numérique à Madagascar
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-light md:text-xl">
            Le complexe universitaire visionnaire qui transforme l&apos;avenir
            de Madagascar et de l&apos;Afrique.
          </p>
          <a
            href="#details"
            className="mt-6 inline-block rounded-lg bg-indigo-600 px-8 py-3 text-lg font-semibold shadow-lg transition duration-300 hover:bg-indigo-700"
          >
            Découvrir le projet
          </a>
        </div>
      </section>
      {/* About Section */}
      <section id="details" className="bg-white py-16 dark:bg-gray-dark">
        <div className="container mx-auto max-w-7xl px-6">
          <h2
            className="mb-8 text-center text-3xl font-extrabold text-gray-800 dark:text-white md:text-4xl"
            data-aos="fade-up"
          >
            Le Village Numérique : Un Complexe Universitaire Visionnaire
          </h2>
          <p className="mx-auto max-w-4xl text-center text-lg leading-relaxed text-gray-600">
            L&apos;Université E-Media ambitionne de transformer Madagascar et
            l&apos;Afrique avec un projet d&apos;envergure : la création
            d&apos;un village numérique, conçu comme un complexe universitaire
            multifonctionnel.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark"
              data-aos="fade-right"
            >
              <Image
                src="/images/why/p-a.jpg"
                alt="Pôle académique"
                className="mb-4 rounded-lg"
                width={500}
                height={300}
              />
              <h3 className="mb-2 text-xl font-semibold">Pôle académique</h3>
              <p className="text-gray-600">
                Un centre d&apos;excellence académique offrant des formations
                innovantes et adaptées aux besoins du marché.
              </p>
            </div>
            <div
              className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark"
              data-aos="fade-up"
            >
              <Image
                src="/images/why/c-t.jpg"
                alt="Centre technologique"
                className="mb-4 rounded-lg"
                width={500}
                height={300}
              />
              <h3 className="mb-2 text-xl font-semibold">
                Centre technologique
              </h3>
              <p className="text-gray-600">
                Un espace dédié à l&apos;innovation et à la recherche
                technologique, pour stimuler la créativité et
                l&apos;entrepreneuriat.
              </p>
            </div>
            <div
              className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark"
              data-aos="fade-left"
            >
              <Image
                src="/images/why/c-c.jpg"
                alt="Centre culturel"
                className="mb-4 rounded-lg"
                width={500}
                height={300}
              />
              <h3 className="mb-2 text-xl font-semibold">Centre culturel</h3>
              <p className="text-gray-600">
                Une plateforme pour la culture et l&apos;échange, favorisant
                l&apos;inclusion sociale et technologique.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 py-16 text-white dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2
            className="text-3xl font-extrabold md:text-4xl"
            data-aos="fade-up"
          >
            Rejoignez l&apos;Avenir Numérique
          </h2>
          <p
            className="mx-auto mt-4 max-w-3xl text-lg md:text-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Participez à ce projet révolutionnaire et contribuez à transformer
            Madagascar et l&apos;Afrique avec des solutions innovantes.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-indigo-600 px-8 py-3 text-lg font-semibold shadow-lg transition duration-300 hover:bg-indigo-700"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
}
