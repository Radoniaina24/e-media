"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/solid"; // Version pleine (solid)
export default function SectionFour() {
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
                  className=" mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 80, damping: 20 }}
                >
                  Notre Engagement :
                </motion.h3>
                <motion.hr
                  className=" my-8 h-px w-24 border-2 border-primary bg-gray-200 dark:bg-gray-700"
                  initial={{ y: "100%", opacity: 0 }} // Ligne commence en bas
                  animate={{ y: 0, opacity: 1 }} // Ligne monte vers sa position finale
                  transition={{
                    delay: 0.3, // Ajouter un léger délai pour l'animation de la ligne
                    type: "spring",
                    stiffness: 80,
                    damping: 15,
                    duration: 1,
                  }}
                />
                {/* Animation du paragraphe */}
                <ul className="max-w-md list-inside space-y-1 text-base font-medium leading-relaxed text-gray-500 dark:text-gray-400  sm:text-lg sm:leading-relaxed">
                  <li className=" flex items-center">
                    <div className="mr-4">
                      <CheckIcon className=" h-6 w-6 text-green-500" />
                    </div>

                    <div>
                      Développer les talents locaux pour répondre aux besoins
                      des industries créatives.
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-4">
                      <CheckIcon className=" h-6 w-6 text-green-500" />
                    </div>
                    <div>Rendre la technologie accessible à tous.</div>
                  </li>
                  <li className="flex items-center ">
                    <div className="mr-4">
                      <CheckIcon className=" h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      Soutenir l&apos;entrepreneuriat et l&apos;innovation.
                    </div>
                  </li>
                </ul>
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
                src="/images/banniere/p2.png"
                alt="about image"
                className=" rotate-12 rounded-lg shadow-lg drop-shadow-three   dark:drop-shadow-none"
                // width={500}
                // height={500}
                fill
              />
              <Image
                src="/images/banniere/p6.png"
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
