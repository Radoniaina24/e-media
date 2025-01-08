"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Temps de transition
    });
  }, []);
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dx3xhdaym/image/upload/v1736327068/page-d_accueil-moddif_rracn4.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex h-full items-center justify-start px-6  text-white">
        <div className="container">
          <div className="space-y-6 max-w-96">
          <h1
            className="text-shadow text-lg font-extrabold leading-tight transition duration-500 sm:text-xl  md:text-2xl"
            data-aos="fade-up"
          >
            L&apos;institution de référence en{" "}
            <span className="text-primary">cinéma</span>,{" "}
            <span className="text-primary">audiovisuel</span>,{" "}
            <span className="text-primary">ingénierie du son</span> et{" "}
            <span className="text-primary">innovations technologiques</span>{" "}
            pour Madagascar et l&apos;Afrique, au cœur de l&apos;Océan Indien.
          </h1>
          <p className="text-md text-start  mb-8 font-light leading-relaxed text-gray-200 sm:text-lg md:text-xl">
            Rejoignez une université innovante qui forme les leaders de demain
            dans les secteurs créatifs et technologiques.
          </p>
          <a
            href="#why"
            className="mt-8 inline-block transform  rounded-full bg-primary px-8 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-blue-800"
          >
            En savoir plus
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
