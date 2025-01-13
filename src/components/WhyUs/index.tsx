"use client";
import React, { useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircleIcon, CheckIcon } from "@heroicons/react/solid"; // Icône pour les listes
import SectionWithImage from "./SectionWithImage";
import HeroBanner from "../Partenariats/HeroBaner";
import Link from "next/link";
import { useLanguageContext } from "@/lib/context/LanguageContext";
export default function WhyUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l&apos;animation
      easing: "ease-in-out", // Style de transition
    });
  }, []);
  const { language } = useLanguageContext();
  const eMediaContentFr = [
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
  const eMediaContentEn = [
    {
      title: "Accessible Online Training Anywhere",
      description:
        "E-Media offers high-quality online programs accessible in Madagascar and internationally.",
      highlights: [
        {
          text: "A diverse student community from Africa, Europe, the Americas, and the Malagasy diaspora.",
        },
        {
          text: "Flexible courses and personalized support tailored to learners' needs.",
        },
      ],
      imageSrc: "/images/why/online.jpg",
      imageAlt: "Online Training",
      imageOnRight: true, // Positions the image on the right
    },
    {
      title: "Modern Infrastructure",
      description:
        "With state-of-the-art equipment, E-Media ensures practical and immersive training:",
      highlights: [
        {
          text: "Professional studios: Green screen, TV set, sound systems, and video control rooms.",
        },
        {
          text: "Computer lab: High-performance computers (Core i7, 7th generation and above).",
        },
        {
          text: "Specialized labs: Multimedia, IT, and advanced technology.",
        },
        {
          text: "Sound booths and radio studio for optimal quality.",
        },
      ],
      imageSrc: "/images/banniere/p6.png",
      imageAlt: "Modern Infrastructure",
      imageOnRight: false, // Positions the image on the left
    },
    {
      title: "A Commitment to Sustainable Development",
      description:
        "E-Media contributes to the socio-economic development of Madagascar and Africa by:",
      highlights: [
        {
          text: "Creating job opportunities for young people in the creative industries.",
        },
        {
          text: "Encouraging entrepreneurship and innovation as drivers of growth.",
        },
        {
          text: "Promoting local cultural and human resources for international recognition.",
        },
      ],
      imageSrc: "/images/banniere/p1.png",
      imageAlt: "Commitment to Sustainable Development",
      imageOnRight: true, // Positions the image on the right
    },
  ];

  const eMediaContent = language === "fr" ? eMediaContentFr : eMediaContentEn;

  const why =
    language === "fr" ? "Pourquoi Choisir E-Media ?" : "Why Choose E-Media?";
  const description =
    language === "fr"
      ? "Découvrez les raisons qui font d'E-Media un choix idéal pour votre avenir dans les industries créatives."
      : "Discover the reasons why E-Media is the ideal choice for your future in the creative industries.";
  return (
    <div className="relative   dark:bg-gray-dark ">
      <HeroBanner
        title={why}
        subtitle={description}
        backgroundImage={"/images/banniere/p3.png"}
      />
      <div className="bg-gray-200">
        <div className="container my-4" data-aos="fade-up">
          <div className="flex items-center justify-between">
            <div className="">
              <Image
                src="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736493896/localisation_efccti.png"
                alt="Photo de Nanisana"
                className=" "
                width={500}
                height={500}
              />
            </div>
            {language === "fr" ? <LocalFr /> : <LocalEng />}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="space-y-16 px-6 pb-12 dark:bg-gray-dark">
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
        {language === "fr" ? <French /> : <English />}
      </div>
    </div>
  );
}

const English = () => {
  return (
    <div className="relative z-10" data-aos="zoom-in">
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">
        E-Media: Excellence and Impact
      </h2>
      <p className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed md:text-xl">
        E-Media combines technological innovation with a commitment to a
        sustainable future, transforming creativity and expertise into drivers
        of development.
      </p>
      <p className="text-lg font-semibold text-blue-300 md:text-xl">
        E-Media: Building the Future Together.
      </p>
    </div>
  );
};

const French = () => {
  return (
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
  );
};

const LocalEng = () => {
  return (
    <div className="col-span-2 pl-6">
      <p className="text-justify text-lg leading-relaxed text-gray-700">
        Located in{" "}
        <Link href={"#localisation"}>
          <span className="font-bold text-blue-600">Nanisana</span>
        </Link>{" "}
        , in the heart of{" "}
        <span className="font-bold text-blue-600">Antananarivo</span>,
        <span className="font-bold"> E-Media</span> is easily accessible thanks
        to a well-connected transport network and its proximity to essential
        amenities, offering a practical and welcoming environment.
      </p>
    </div>
  );
};

const LocalFr = () => {
  return (
    <div className="col-span-2 pl-6">
      <p className="text-justify text-lg leading-relaxed text-gray-700">
        Située à{" "}
        <Link href={"#localisation"}>
          <span className="font-bold text-blue-600">Nanisana</span>
        </Link>{" "}
        , au cœur d&apos;
        <span className="font-bold text-blue-600">Antananarivo</span>,
        <span className="font-bold"> E-Media</span> est facilement accessible
        grâce à un réseau de transports bien desservi et proche des commodités
        essentielles, offrant un environnement pratique et accueillant.
      </p>
    </div>
  );
};
