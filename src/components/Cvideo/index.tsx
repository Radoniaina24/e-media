"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";
import Link from "next/link";
import { useLanguageContext } from "@/lib/context/LanguageContext";

const Video = () => {
  const { language } = useLanguageContext();
  const [isOpen, setOpen] = useState(false);
  const title =
    language === "fr"
      ? "Indian Ocean Tech Valley : Le Pôle Numérique Visionnaire de Madagascar et de l’Afrique"
      : "Indian Ocean Tech Valley: The Visionary Digital Hub of Madagascar and Africa";
  const description =
    language === "fr"
      ? "S’étendant sur 15 hectares, Indian Ocean Tech Valley est un projet novateur qui place Madagascar au cœur de l’innovation numérique, de l’éducation technologique et de l’entrepreneuriat en Afrique et dans l’Océan Indien. Bien plus qu’un complexe universitaire, il combine un centre de formation d’excellence, un incubateur de startups, et un hub technologique, attirant talents africains et investisseurs internationaux pour transformer l’avenir de la région."
      : "Spanning 15 hectares, the Indian Ocean Tech Valley is an innovative project positioning Madagascar at the forefront of digital innovation, technological education, and entrepreneurship in Africa and the Indian Ocean region. Far more than a university complex, it combines a center of excellence for training, a startup incubator, and a technology hub, attracting African talent and international investors to transform the future of the region.";
  const btnText = language === "fr" ? "En savoir plus" : "Learn more ";
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title={title} paragraph={description} center mb="40px" />
        <div className="mb-10 text-center">
          <Link
            href="/city"
            className="rounded-full bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            {btnText}
          </Link>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image
                  src="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736322517/trano_e304tx.jpg"
                  alt="video image"
                  fill
                />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center  rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="WFvtLGqi0W0"
        onClose={() => setOpen(false)}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
