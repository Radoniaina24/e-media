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

const IMAGES = [
  { src: "/images/banniere/p1.png" },
  { src: "/images/banniere/p2.png" },
  { src: "/images/banniere/p3.png" },
  { src: "/images/banniere/p4.png" },
  { src: "/images/banniere/p5.png" },
  { src: "/images/banniere/p6.png" },
  { src: "/images/banniere/p7.png" },
];
export default function Galerie() {
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
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const images = IMAGES.map((data, index) => (
    <div
      key={index}
      className="hover:rotate-y-6 relative  my-2 px-5 transition-transform duration-500 hover:scale-105 hover:cursor-pointer hover:shadow-lg"
      onClick={() => setIndex(index)}
    >
      <Image width={500} height={500} className="" src={data.src} alt="" />
    </div>
  ));
  return (
    <section className=" bg-dark py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="container">
        {/* <h1 className="my-10 text-center text-4xl font-bold uppercase text-white">
          Galerie photo
        </h1> */}
        <Carousel
          infinite
          autoPlay
          autoPlaySpeed={3000}
          responsive={responsive}
        >
          {images}
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
