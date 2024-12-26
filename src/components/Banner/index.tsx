"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ImageList = [
  {
    id: 3,
    img: "/images/banniere/p3.png",
  },
  {
    id: 1,
    img: "/images/banniere/p1.png",
  },
  {
    id: 2,
    img: "/images/banniere/p2.png",
  },

  {
    id: 4,
    img: "/images/banniere/p4.png",
  },
  {
    id: 5,
    img: "/images/banniere/p5.png",
  },
  {
    id: 6,
    img: "/images/banniere/p6.png",
  },
  {
    id: 7,
    img: "/images/banniere/p7.png",
    text: "Texte pour image 1",
  },
];

export default function Banner() {
  const sentence =
    "L’institution de référence en cinéma, audiovisuel, ingénierie du son et innovations technologiques pour Madagascar et l’Afrique, au cœur de l’Océan Indien.";
  const words = sentence.split(" ");
  return (
    <div className="banner relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{
          delay: 5000,
        }}
        effect="fade"
        loop={true}
        className="swiper_container"
      >
        {ImageList.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="relative">
              <Image
                width={2000}
                height={1000}
                src={data.img}
                alt=""
                className="image-dim"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="mx-auto max-w-[800px] text-center">
                  {/* <h2 className="my-5 text-sm font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-4xl md:leading-tight">
                    L’institution de référence en{" "}
                    <span className="text-primary">cinéma</span> ,{" "}
                    <span className="text-primary">audiovisuel</span>,
                    <span className="text-primary">ingénierie du son </span>
                    et{" "}
                    <span className="text-primary">
                      innovations technologiques
                    </span>{" "}
                    pour Madagascar et l’Afrique, au cœur de l’Océan Indien.
                  </h2> */}
                  <div className="relative flex h-screen items-center justify-center ">
                    <motion.div
                      className="text-center"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: { staggerChildren: 0.1 },
                        },
                      }}
                    >
                      {words.map((word, index) => (
                        <motion.span
                          key={index}
                          className={`mx-1 inline-block text-2xl font-bold sm:text-4xl md:text-5xl ${
                            word === "cinéma," || word === "audiovisuel,"
                              ? "text-primary" // Classe pour appliquer la couleur
                              : "text-white"
                          }`}
                          variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                          }}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
