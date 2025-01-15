"use client";
import React from "react";
import HeroBanner from "./HeroBaner";
import BackgroundCard from "../QuiSommesNous/BackgroundCard";
import { useLanguageContext } from "@/lib/context/LanguageContext";

export default function WhyEmedia() {
  const { language } = useLanguageContext();
  const reasonsFr = [
    {
      title: "Position stratégique",
      description: "Madagascar, un pont entre l’Afrique, l’Asie et le monde.",
      imageSrc: "/images/partenariats/position.jpg",
      altText: "Image représentant la position stratégique de Madagascar",
    },
    {
      title: "Talents exceptionnels",
      description: "Une région riche en créativité et en potentiel.",
      imageSrc: "/images/why/t-l.png",
      altText: "Image représentant les talents exceptionnels de Madagascar",
    },
    {
      title: "Vision globale, expertise locale",
      description:
        "Un partenaire fiable pour transformer les défis en opportunités.",
      imageSrc: "/images/partenariats/vision.jpg",
      altText: "Image représentant une vision globale et une expertise locale",
    },
  ];
  const reasonsEn = [
    {
      title: "Strategic Position",
      description: "Madagascar, a bridge between Africa, Asia, and the world.",
      imageSrc: "/images/partenariats/position.jpg",
      altText: "Image representing Madagascar's strategic position",
    },
    {
      title: "Exceptional Talents",
      description: "A region rich in creativity and potential.",
      imageSrc: "/images/why/t-l.png",
      altText: "Image representing the exceptional talents of Madagascar",
    },
    {
      title: "Global Vision, Local Expertise",
      description:
        "A reliable partner for turning challenges into opportunities.",
      imageSrc: "/images/partenariats/vision.jpg",
      altText: "Image representing a global vision and local expertise",
    },
  ];
  const reasons = language === "fr" ? reasonsFr : reasonsEn;
  return (
    <div>
      <HeroBanner
        title={
          language === "fr"
            ? "Pourquoi Collaborer avec E-Media ?"
            : "Why Collaborate with E-Media"
        }
        subtitle={""}
        backgroundImage={"/images/banniere/p3.png"}
      />
      <div className="container my-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <BackgroundCard
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
