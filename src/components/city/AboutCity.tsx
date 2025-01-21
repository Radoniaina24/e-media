"use client";
import React from "react";
import Image from "next/image";
import { useLanguageContext } from "@/lib/context/LanguageContext";
export default function AboutCity() {
  const { language } = useLanguageContext();
  const TextHero =
    language === "fr"
      ? "Indian Ocean Tech Valley : Le Pôle Numérique Visionnaire de Madagascar et de l’Afrique"
      : "Indian Ocean Tech Valley: The Visionary Digital Hub of Madagascar and Africa";
  const subtitleHero1 =
    language === "fr"
      ? "Bien plus qu’un complexe universitaire, Indian Ocean Tech Valley combine des centres de formation d’excellence, des incubateurs de startups, un hub technologique, des espaces de collaboration internationale, et des infrastructures durables. Ce projet ambitieux vise à attirer les jeunes talents malgaches et africains, ainsi que les investisseurs et partenaires internationaux, tout en exploitant la position géographique stratégique de Madagascar comme carrefour entre l’Afrique et l’Asie."
      : "More than just a university complex, Indian Ocean Tech Valley combines centers of excellence for training, startup incubators, a technological hub, international collaboration spaces, and sustainable infrastructure. This ambitious project aims to attract young Malagasy and African talents, as well as international investors and partners, while leveraging Madagascar's strategic geographical location as a crossroads between Africa and Asia.";
  const subtitleHero2 =
    language === "fr"
      ? "Avec une vision globale et un impact local, Indian Ocean Tech Valley devient le moteur de la croissance numérique et économique dans l’Océan Indien, stimulant l’innovation et renforçant la compétitivité régionale."
      : "With a global vision and a local impact, Indian Ocean Tech Valley is becoming the driving force behind digital and economic growth in the Indian Ocean region, fostering innovation and strengthening regional competitiveness.";
  return (
    <div>
      <section id="details" className="bg-white py-16 ">
        <div className="container mx-auto max-w-7xl px-6">
          <h2
            className="mb-8 text-center text-3xl font-extrabold text-gray-800  md:text-4xl"
            data-aos="fade-up"
          >
            {TextHero}
          </h2>
          <p className="mx-auto max-w-5xl text-center text-lg leading-relaxed text-gray-600">
            {subtitleHero1}
          </p>
          <p className="mx-auto max-w-5xl text-center text-lg leading-relaxed text-gray-600">
            {" "}
            {subtitleHero2}
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              className="rounded-lg bg-white p-6 shadow-lg "
              data-aos="fade-right"
            >
              <Image
                src="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736337899/pole_academique_d6r9y9.jpg"
                alt="Pôle académique"
                className="mb-4 rounded-lg"
                width={500}
                height={300}
              />
              <h3 className="mb-2 text-xl font-semibold text-dark">
                {language === "fr" ? "Pôle académique" : "Academic Hub"}
              </h3>
              <p className="text-gray-600">
                {language === "fr"
                  ? "Un centre d'excellence académique offrant des formations innovantes et adaptées aux besoins du marché."
                  : "An academic center of excellence offering innovative training programs tailored to market needs."}
              </p>
            </div>
            <div
              className="rounded-lg bg-white p-6 shadow-lg "
              data-aos="fade-up"
            >
              <Image
                src="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736337166/centre_technologie_kd7tge.jpg"
                alt="Centre technologique"
                className="mb-4 rounded-lg"
                width={500}
                height={300}
              />
              <h3 className="mb-2 text-xl font-semibold text-dark">
                {language === "fr"
                  ? "Centre technologique"
                  : "Technology Center"}
              </h3>
              <p className="text-gray-600">
                {language === "fr"
                  ? "Un espace dédié à l'innovation et à la recherche technologique, pour stimuler la créativité et l'entrepreneuriat."
                  : "A space dedicated to innovation and technological research, designed to foster creativity and entrepreneurship."}
              </p>
            </div>
            <div
              className="rounded-lg bg-white p-6 shadow-lg "
              data-aos="fade-left"
            >
              <Image
                src="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736337165/centre_culturel_dyfpdw.jpg"
                alt="Centre culturel"
                className="mb-4 rounded-lg"
                width={500}
                height={300}
              />
              <h3 className="mb-2 text-xl font-semibold text-dark">
                {language === "fr" ? "Centre culturel" : "Cultural Center"}
              </h3>
              <p className="text-gray-600">
                {language === "fr"
                  ? "Une plateforme pour la culture et l'échange, favorisant l'inclusion sociale et technologique."
                  : "A platform for culture and exchange, promoting social and technological inclusion."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
