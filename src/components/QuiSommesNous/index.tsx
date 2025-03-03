"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Importer les styles AOS
import AOS from "aos"; // Importer la librairie AOS
import BackgroundCard from "./BackgroundCard";
import CategoryCards from "../Formation/CategorieCard";
import GaleriePhotoAlbum from "../galerie";
import { useLanguageContext } from "@/lib/context/LanguageContext";

const App = () => {
  const { language } = useLanguageContext();
  const engagementFR = [
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

  const engagementUs = [
    {
      title: "Develop local talents",
      description:
        "Meet the needs of the creative industries with skilled local talents.",
      imageSrc: "/images/why/t-l.png",
      altText: "Develop local talents",
    },
    {
      title: "Make technology accessible",
      description:
        "Promote access to technology for everyone, regardless of their background.",
      imageSrc: "/images/why/t-a.jpg",
      altText: "Make technology accessible",
    },
    {
      title: "Support entrepreneurship",
      description:
        "Encourage innovation and support entrepreneurship to create a sustainable impact.",
      imageSrc: "/images/why/s-a.jpg",
      altText: "Support entrepreneurship",
    },
  ];

  const engagement = language === "fr" ? engagementFR : engagementUs;

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Transition fluide
    });
  }, []);
  const who = language === "fr" ? "Qui Sommes-Nous ?" : "Who Are We ?";
  const emedia =
    language === "fr"
      ? "E-Media : L'Université de Référence pour les Industries Créatives à Madagascar et en Afrique"
      : "E-Media: The Leading University for Creative Industries in Madagascar and Africa";
  const academique =
    language === "fr"
      ? "Une Offre Académique Diversifiée"
      : "A Diverse Academic Offering";

  const album =
    language === "fr"
      ? "Explorez nos Albums et Découvez nos Photos"
      : "Explore Our Albums and Discover Our Photos";
  const engagements = language === "fr" ? "Notre Engagement" : "Our Commitment";
  return (
    <div className="bg-gray-100  pb-20" id="why">
      {/* Header Section */}
      <section
        className="relative  bg-cover bg-center shadow-lg"
        style={{ backgroundImage: "url('/images/banniere/p3.png')" }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0  bg-black opacity-50"></div>
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
          <CategoryCards />
        </div>
      </section>

      {/* Modern and Stimulating Environment */}
      <section className="bg-gray-200 py-16 " data-aos="fade-up">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className=" text-3xl font-extrabold text-dark md:text-4xl">
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
