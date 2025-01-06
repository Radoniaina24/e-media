"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Importer les styles AOS
import AOS from "aos"; // Importer la librairie AOS
import Link from "next/link";
import CardLink from "./CardLink";
import Card from "./Card";
import BackgroundCard from "./BackgroundCard";
import CategoryCards from "../Formation/CategorieCard";
import GaleriePhotoAlbum from "../galerie";

const App = () => {
  const formations = [
    {
      title: "Formations universitaires",
      description: "Présentiel et en ligne pour des carrières durables.",
      imageSrc: "/images/why/f-u.jpg",
      href: "/formation/universitaire",
      altText: "Formations universitaires",
    },
    {
      title: "Formations certifiantes",
      description:
        "Accessibles avec ou sans baccalauréat, pour des jeunes en reconversion ou en quête d’emploi.",
      imageSrc: "/images/why/f-c.jpg",
      href: "/formation/cfp",
      altText: "Formations certifiantes",
    },
    {
      title: "Modules spécialisés",
      description: "Apprentissage rapide et pratique.",
      imageSrc: "/images/why/m-s.jpg",
      href: "/formation/modulaire",
      altText: "Modules spécialisés",
    },
  ];
  const facilities = [
    {
      title: "Studios professionnels",
      imageSrc: "/images/why/s-p.jpg",
      altText: "Studios professionnels",
    },
    {
      title: "Parc informatique performant",
      imageSrc: "/images/why/p-f.jpg",
      altText: "Parc informatique performant",
    },
    {
      title: "Laboratoires spécialisés",
      imageSrc: "/images/why/l-i.jpg",
      altText: "Laboratoires spécialisés",
    },
  ];
  const engagement = [
    {
      title: "Développer les talents locaux",
      description:
        "Répondre aux besoins des industries créatives avec des talents locaux qualifiés.",
      imageSrc: "/images/why/t-l.png",
      altText: "Développer les talents locaux",
    },
    {
      title: "Rendre la technologie accessible",
      description:
        "Promouvoir l'accès à la technologie pour tous, quel que soit leur parcours.",
      imageSrc: "/images/why/t-a.jpg",
      altText: "Rendre la technologie accessible",
    },
    {
      title: "Soutenir l'entrepreneuriat",
      description:
        "Encourager l'innovation et soutenir l'entrepreneuriat pour créer un impact durable.",
      imageSrc: "/images/why/s-a.jpg",
      altText: "Soutenir l'entrepreneuriat",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Transition fluide
    });
  }, []);

  return (
    <div className="bg-gray-100 px-6 py-20 dark:bg-gray-dark" id="why">
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
          {/* <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {formations.map((item, index) => (
              <CardLink
                key={index}
                href={item.href}
                imageSrc={item.imageSrc}
                altText={item.altText}
                title={item.title}
                description={item.description}
              />
            ))}
          </div> */}
          <CategoryCards />
        </div>
      </section>

      {/* Modern and Stimulating Environment */}
      <section
        className="bg-gray-200 py-16 dark:bg-gray-dark"
        data-aos="fade-up"
      >
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-8 text-3xl font-extrabold md:text-4xl">
            Explorez nos Albums et Découvez nos Photos
          </h2>
          <GaleriePhotoAlbum />
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16" data-aos="fade-up">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-12 text-4xl font-extrabold text-gray-800 dark:text-white">
            Notre Engagement
          </h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {engagement.map((item, index) => (
              <BackgroundCard
                key={index}
                imageSrc={item.imageSrc}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
