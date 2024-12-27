"use client";
import React from "react";
import Image from "next/image";
export default function SectionOne() {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  E-Media : L&apos;Université de Référence pour les Industries
                  Créatives à Madagascar et en Afrique
                </h3>
                <p className=" text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Fondée en 2011, E-Media forme des talents créatifs et
                  innovants dans les domaines du cinéma, de l&apos;audiovisuel,
                  de l&apos;ingénierie du son et de l&apos;innovation
                  technologique, tout en contribuant au développement économique
                  de Madagascar et de l&apos;Afrique.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/banniere/p3.png"
                alt="about image"
                fill
                className=" rouded drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/banniere/p3.png"
                alt="about image"
                fill
                className=" rouded hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
