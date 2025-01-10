"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Importer les styles AOS
import AOS from "aos"; // Importer la librairie AOS
import BackgroundCard from "./BackgroundCard";
import CategoryCards from "../Formation/CategorieCard";
import GaleriePhotoAlbum from "../galerie";

const App = () => {
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
  const who = "Qui Sommes-Nous ?";
  const emedia =
    "E-Media : L'Université de Référence pour les Industries Créatives à Madagascar et en Afrique";
  const academique = " Une Offre Académique Diversifiée";
  const album = "Explorez nos Albums et Découvez nos Photos";
  const engagements = "  Notre Engagement";
  return (
    <div className="bg-gray-100 px-6 py-20" id="why">
      {/* Header Section */}
      <section
        className="relative rounded-lg bg-cover bg-center shadow-lg"
        style={{ backgroundImage: "url('/images/banniere/p3.png')" }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 rounded-lg bg-black opacity-50"></div>
        <div className="relative z-10 py-20 text-center text-white">
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">{who}</h1>
          <p className="mx-auto max-w-3xl text-xl font-light md:text-2xl">
            {emedia}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16" data-aos="fade-up">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-8 text-3xl font-extrabold text-dark md:text-4xl">
            {academique}
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
      <section className="bg-gray-200 py-16 " data-aos="fade-up">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-8 text-3xl font-extrabold text-dark md:text-4xl">
            {album}
          </h2>
          <GaleriePhotoAlbum />
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16" data-aos="fade-up">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-12 text-4xl font-extrabold text-gray-800">
            {engagements}
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
