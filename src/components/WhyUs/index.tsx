"use client";
import React, { useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircleIcon, CheckIcon } from "@heroicons/react/solid"; // Icône pour les listes
import SectionWithImage from "./SectionWithImage";
import HeroBanner from "../Partenariats/HeroBaner";
export default function WhyUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l&apos;animation
      easing: "ease-in-out", // Style de transition
    });
  }, []);

  const eMediaContent = [
    {
      title: "Une Formation en Ligne Accessible Partout",
      description:
        "E-Media propose des programmes en ligne de haute qualité, accessibles à Madagascar et à l’international.",
      highlights: [
        {
          text: "Une communauté étudiante diversifiée, issue d’Afrique, d’Europe, des Amériques et de la diaspora malgache.",
        },
        {
          text: "Des formations flexibles et un accompagnement personnalisé adaptés aux besoins des apprenants.",
        },
      ],
      imageSrc: "/images/why/online.jpg",
      imageAlt: "Formation en ligne",
      imageOnRight: true, // Positionne l'image à droite
    },
    {
      title: "Des Infrastructures Modernes",
      description:
        "Avec des équipements de pointe, E-Media garantit une formation pratique et immersive :",
      highlights: [
        {
          text: "Studios professionnels : Fond vert, plateau TV, sonorisation, et régie vidéo.",
        },
        {
          text: "Parc informatique : Ordinateurs performants (Core i7, 7ᵉ génération et plus).",
        },
        {
          text: "Laboratoires spécialisés : Multimédia, informatique et techniques avancées.",
        },
        {
          text: "Cabines de son et studio radiophonique pour une qualité optimale.",
        },
      ],
      imageSrc: "/images/banniere/p6.png",
      imageAlt: "Infrastructures modernes",
      imageOnRight: false, // Positionne l'image à droite
    },
    {
      title: "Un Engagement pour le Développement Durable",
      description:
        "E-Media contribue au développement socio-économique de Madagascar et de l’Afrique en :",
      highlights: [
        {
          text: "Créant des opportunités professionnelles pour les jeunes dans les industries créatives.",
        },
        {
          text: "Encourageant l’entrepreneuriat et l’innovation comme moteurs de croissance.",
        },
        {
          text: "Valorisant les ressources culturelles et humaines locales pour un rayonnement international.",
        },
      ],
      imageSrc: "/images/banniere/p1.png",
      imageAlt: "Engagement pour le développement durable",
      imageOnRight: true, // Positionne l'image à gauche
    },
  ];

  return (
    <div className="relative   dark:bg-gray-dark ">
      <HeroBanner
        title={"Pourquoi Choisir E-Media ?"}
        subtitle={
          "Découvrez les raisons qui font d'E-Media un choix idéal pour votre avenir dans les industries créatives."
        }
        backgroundImage={"/images/banniere/p1.png"}
      />
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
          {eMediaContent.map((item, index) => (
            <SectionWithImage
              key={index}
              title={item.title}
              description={item.description}
              highlights={item.highlights}
              imageSrc={item.imageSrc}
              imageAlt={item.title}
              imageOnRight={item.imageOnRight}
            />
          ))}
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
        </div>
      </div>
    </div>
  );
}
