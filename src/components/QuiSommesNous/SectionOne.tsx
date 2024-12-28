"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export default function SectionOne() {
  return (
    <section className="py-2 md:py-20 lg:py-5">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[500px]">
              <motion.div
                className="mb-9"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 50 }, // Commence invisible et en bas
                  visible: {
                    opacity: 1,
                    y: 0, // Revient à sa position normale
                    transition: { staggerChildren: 0.3, duration: 1 }, // Délai entre les enfants
                  },
                }}
              >
                {/* Animation du titre */}
                <motion.h3
                  className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 80, damping: 20 }}
                >
                  E-Media : L&apos;Université de Référence pour les Industries
                  Créatives à Madagascar et en Afrique
                </motion.h3>

                {/* Animation du paragraphe */}
                <motion.p
                  className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed"
                  variants={{
                    hidden: { opacity: 0, x: -50 }, // Glisse depuis la gauche
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  Fondée en 2011, E-Media forme des talents créatifs et
                  innovants dans les domaines du cinéma, de l&apos;audiovisuel,
                  de l&apos;ingénierie du son et de l&apos;innovation
                  technologique, tout en contribuant au développement économique
                  de Madagascar et de l&apos;Afrique.
                </motion.p>
              </motion.div>
            </div>
          </div>
          <div className=" hidden w-full px-4 sm:my-10 sm:hidden md:block lg:w-1/2">
            <motion.div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              initial={{ scale: 0.8, opacity: 0 }} // Démarre petit et invisible
              animate={{ scale: 1, opacity: 1 }} // Grandit à sa taille normale et devient visible
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 1.2,
              }}
              whileHover={{ scale: 1.05, rotate: 10 }} // Légère rotation et agrandissement au survol
              whileTap={{ scale: 0.95 }} // Réduction légère quand cliqué
            >
              <Image
                src="/images/banniere/p5.png"
                alt="about image"
                className=" rotate-12 rounded-lg shadow-lg drop-shadow-three   dark:drop-shadow-none"
                // width={500}
                // height={500}
                fill
              />
              <Image
                src="/images/banniere/p3.png"
                alt="about image"
                className=" rounded-lg drop-shadow-three dark:block dark:drop-shadow-none"
                // width={500}
                // height={500}
                fill
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
