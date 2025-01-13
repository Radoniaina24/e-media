"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useLanguageContext } from "@/lib/context/LanguageContext";
const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Temps de transition
    });
  }, []);

  const { language } = useLanguageContext();
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dx3xhdaym/image/upload/v1736332411/page-d_accueilmod_hv9gml.png')",
      }}
    >
      {/* <div className="absolute inset-0 bg-black "></div> */}
      <div className="relative z-10 flex h-full items-center justify-start px-6  text-white">
        <div className="container">
          {language === "fr" ? <French /> : <English />}
        </div>
      </div>
    </section>
  );
};

export default Hero;

const English = () => {
  return (
    <div className="max-w-[750px] space-y-11">
      <h1
        className="text-shadow text-lg font-extrabold leading-tight transition duration-500 sm:text-xl md:text-2xl"
        data-aos="fade-up"
      >
        The leading institution in{" "}
        <span className="text-customeRed">cinema</span>,{" "}
        <span className="text-customeRed">audiovisual</span>,{" "}
        <span className="text-customeRed">sound engineering</span> and{" "}
        <span className="text-customeRed">technological innovations</span> for
        Madagascar and Africa, at the heart of the Indian Ocean.
      </h1>
      <p className="text-md mb-8 text-start font-light leading-relaxed text-gray-200 sm:text-lg md:text-xl">
        Join an innovative university that trains tomorrow&apos; s leaders in
        creative and technological fields.
      </p>
      <a
        href="#why"
        className="mt-8 inline-block transform rounded-r-full rounded-tl-full bg-primary px-8 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-blue-800"
      >
        Learn More
      </a>
    </div>
  );
};

const French = () => {
  return (
    <div className="max-w-[750px] space-y-11">
      <h1
        className="text-shadow text-lg font-extrabold leading-tight transition duration-500 sm:text-xl  md:text-2xl"
        data-aos="fade-up"
      >
        L&apos;institution de référence en{" "}
        <span className="text-customeRed">cinéma</span>,{" "}
        <span className="text-customeRed">audiovisuel</span>,{" "}
        <span className="text-customeRed">ingénierie du son</span> et{" "}
        <span className="text-customeRed">innovations technologiques</span> pour
        Madagascar et l&apos;Afrique, au cœur de l&apos;Océan Indien.
      </h1>
      <p className="text-md mb-8  text-start font-light leading-relaxed text-gray-200 sm:text-lg md:text-xl">
        Rejoignez une université innovante qui forme les leaders de demain dans
        les secteurs créatifs et technologiques.
      </p>
      <a
        href="#why"
        className="mt-8 inline-block transform  rounded-r-full rounded-tl-full bg-primary px-8 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-blue-800"
      >
        En savoir plus
      </a>
    </div>
  );
};
