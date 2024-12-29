"use client";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
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
              className="h-[500px] min-w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="flex h-full flex-col items-center justify-center bg-black bg-opacity-50 px-4 text-white">
                <h2 className="text-3xl font-bold">{slide.title}</h2>
                <p className="mt-4 text-lg">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Boutons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 flex -translate-y-1/2 transform items-center justify-center rounded-full bg-white p-2 text-black shadow-md hover:bg-gray-200"
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 flex -translate-y-1/2 transform items-center justify-center rounded-full bg-white p-2 text-black shadow-md hover:bg-gray-200"
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-700" />
        </button>

        {/* Indicateurs */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 transform space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-4 w-4 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
