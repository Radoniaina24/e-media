"use client";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Lightbox from "yet-another-react-lightbox";
import {
  Counter,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change toutes les 3 secondes
    return () => clearInterval(interval);
  }, [currentIndex]);

  const slides = [
    {
      id: 1,
      image: "/images/banniere/p3.png",
      title: "Votre titre 1",
      description: "Une description captivante pour votre produit ou service.",
    },
    {
      id: 2,
      image: "/images/banniere/p2.png",
      title: "Votre titre 2",
      description: "Un autre argument qui attire vos clients.",
    },
    {
      id: 3,
      image: "/images/banniere/p1.png",
      title: "Votre titre 3",
      description: "Présentez vos atouts de manière professionnelle.",
    },
  ];

  const [index, setIndex] = useState(-1);
  const IMAGES = [
    { src: "/images/banniere/p1.png" },
    { src: "/images/banniere/p2.png" },
    { src: "/images/banniere/p3.png" },
    { src: "/images/banniere/p4.png" },
    { src: "/images/banniere/p5.png" },
    { src: "/images/banniere/p6.png" },
    { src: "/images/banniere/p7.png" },
  ];

  return (
    <section className=" bg-dark py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-lg shadow-lg">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="group relative h-[500px] min-w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Bouton centré visible uniquement au survol */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button
                  onClick={() => setIndex(1)}
                  className="rounded-lg border-2 border-white bg-transparent px-6 py-2 font-semibold text-white shadow-md hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 dark:border-gray-300 dark:hover:bg-gray-300 dark:hover:text-gray-800 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
                >
                  Plus d&apos;images
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Boutons de navigation */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 flex -translate-y-1/2 transform items-center justify-center rounded-full bg-gray-500 p-2 text-black shadow-md hover:bg-gray-200"
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 flex -translate-y-1/2 transform items-center justify-center rounded-full bg-gray-500 p-2 text-black shadow-md hover:bg-gray-200"
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-700" />
        </button>
      </div>
      <Lightbox
        plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={IMAGES}
      />
    </section>
  );
}
