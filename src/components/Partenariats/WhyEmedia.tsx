import React from "react";
import HeroBanner from "./HeroBaner";
import BackgroundCard from "../QuiSommesNous/BackgroundCard";

export default function WhyEmedia() {
  const reasons = [
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
  return (
    <div>
      <HeroBanner
        title={"Pourquoi Collaborer avec E-Media ?"}
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
