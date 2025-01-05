"use client";
import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Counter,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import Card from "../QuiSommesNous/Card";
import CardGalerie from "./CardGalerie";

const IMAGES = [
  { src: "/images/banniere/p1.png" },
  { src: "/images/banniere/p2.png" },
  { src: "/images/banniere/p3.png" },
  { src: "/images/banniere/p4.png" },
  { src: "/images/banniere/p5.png" },
  { src: "/images/banniere/p6.png" },
  { src: "/images/banniere/p7.png" },
];
export default function GaleriePhotoAlbum() {
  const album = [
    {
      title: "Campus & Studios ",
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890237/IMG_2962_q10hhb.jpg",
      altText: "Studios professionnels",
    },
    {
      title: "sortie de promotion ",
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736099571/IMG_9454_f4tkrl.jpg",
      altText: "Parc informatique performant",
    },
    {
      title: "Salons et conférences",
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736099729/IMG_0554_loiwpl.jpg",
      altText: "Laboratoires spécialisés",
    },
    {
      title: "Reboisement et Actions pour le Climat",
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736099839/IMG_9465_iu7khf.jpg",
      altText: "Studios professionnels",
    },
    {
      title: "Studio radio E-media FM 107.8 mhz",
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736100093/IMG_1984_g8vloz.jpg",
      altText: "Studios professionnels",
    },
  ];

  const [index, setIndex] = useState(-1);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className=" bg-dark py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="container ">
        {/* <h1 className="my-10 text-center text-4xl font-bold uppercase text-white">
          Galerie photo
        </h1> */}
        <Carousel
          infinite
          autoPlay
          autoPlaySpeed={3000}
          responsive={responsive}
          itemClass="px-4"
        >
          {album.map((item, index) => (
            <CardGalerie
              key={index}
              imageSrc={item.imageSrc}
              altText={item.altText}
              title={item.title}
            />
          ))}
        </Carousel>
        <Lightbox
          plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={IMAGES}
        />
      </div>
    </section>
  );
}
