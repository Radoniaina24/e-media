import React from "react";
import Image from "next/image";
export default function AboutCity() {
  const TextHero =
    "Indian Ocean Tech Valley : Le Pôle Numérique Visionnaire de Madagascar et de l’Afrique";
  const subtitleHero1 =
    "Bien plus qu’un complexe universitaire, Indian Ocean Tech Valley combine des centres de formation d’excellence, des incubateurs de startups, un hub technologique, des espaces de collaboration internationale, et des infrastructures durables. Ce projet ambitieux vise à attirer les jeunes talents malgaches et africains, ainsi que les investisseurs et partenaires internationaux, tout en exploitant la position géographique stratégique de Madagascar comme carrefour entre l’Afrique et l’Asie.";
  const subtitleHero2 =
    "Avec une vision globale et un impact local, Indian Ocean Tech Valley devient le moteur de la croissance numérique et économique dans l’Océan Indien, stimulant l’innovation et renforçant la compétitivité régionale.";
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
              className="rounded-lg bg-white p-6 shadow-lg "
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
              className="rounded-lg bg-white p-6 shadow-lg "
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
    </div>
  );
}
