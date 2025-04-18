"use client";
import { useLanguageContext } from "@/lib/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";

const programsFr = [
  {
    title: "Son:Production Audio & MAO",
    description:
      "Apprenez les techniques avancées de production audio et maîtrisez les outils de Musique Assistée par Ordinateur (MAO) pour créer des productions sonores de qualité professionnelle.",
    image:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736340927/son_v46pec.png",
    link: "/formation/cfp/sam",
  },
  {
    title: "Sono:Sonorisation et Lumières de Spectacle",
    description:
      "Devenez expert en sonorisation et en gestion des lumières pour les spectacles en direct, en alliant savoir-faire technique et créativité scénique.",
    image:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736340927/sono_zwryiz.png",
    link: "/formation/cfp/ssls",
  },
  {
    title: "Image:Cinématographie, Post-production, Photographie et 3D",
    description:
      "Formez-vous aux métiers de l'image, de la captation à la post-production, en passant par la photographie et la création 3D, pour des projets visuels innovants.",
    image:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736340528/sans_nom_gb1r1u.png",
    link: "/formation/cfp/cpp",
  },
  {
    title: "Web:Création et Développement Multimédia",
    description:
      "Développez des compétences en création et développement multimédia pour concevoir des sites web interactifs et des expériences numériques immersives.",
    image:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736341038/web_te7wtp.png",
    link: "/formation/cfp/cdm",
  },
  {
    title: "DTS:Diplôme de Technicien Supérieur",
    description:
      "Un diplôme technique conçu pour vous préparer aux métiers spécialisés, combinant théorie et pratique pour répondre aux besoins du marché.",
    image:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736341111/DTS_gjpuwe.png",
    link: "/formation/cfp/dts",
  },
];
const programsEn = [
  {
    title: "Sound:Audio Production & DAW",
    description:
      "Learn advanced audio production techniques and master Digital Audio Workstation (DAW) tools to create professional-quality sound productions.",
    image:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736340927/son_v46pec.png",
    link: "/formation/cfp/sam",
  },
  {
    title: "Sound:Sound and Lighting for Live Performances",
    description:
      "Become an expert in sound reinforcement and lighting management for live shows, combining technical expertise with creative stagecraft.",
    image:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736340927/sono_zwryiz.png",
    link: "/formation/cfp/ssls",
  },
  {
    title: "Image:Cinematography, Post-production, Photography, and 3D",
    description:
      "Train in image-related professions, from shooting to post-production, including photography and 3D creation, for innovative visual projects.",
    image:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736340528/sans_nom_gb1r1u.png",
    link: "/formation/cfp/cpp",
  },
  {
    title: "Web: Multimedia Creation and Development",
    description:
      "Develop skills in multimedia creation and development to design interactive websites and immersive digital experiences.",
    image:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736341038/web_te7wtp.png",
    link: "/formation/cfp/cdm",
  },
  {
    title: "DTS:Higher Technician Diploma",
    description:
      "A technical diploma designed to prepare you for specialized careers, combining theory and practice to meet market demands.",
    image:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736341111/DTS_gjpuwe.png",
    link: "/formation/cfp/dts",
  },
];

const CFPPrograms: React.FC = () => {
  const { language } = useLanguageContext();
  const programs = language === "fr" ? programsFr : programsEn;

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="mb-10 text-center text-3xl font-bold text-gray-800 dark:text-white">
        {language === "fr" ? "Nos Programmes de CFP" : "Our CFP Programs"}
      </h2>
      <hr className="mb-10" />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {programs.map((program, index) => {
          const title = program.title.split(":");
          return (
            <Link
              key={index}
              href={program.link}
              aria-label={`En savoir plus sur ${program.title}`}
            >
              <div
                className="hover:cursor-pointe flex flex-col items-center  transition-transform hover:scale-105 md:flex-row "
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Section gauche : Titre et Description */}
                <div className="flex flex-col justify-center pr-4 md:w-1/2">
                  <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-50">
                    {title[0].toLocaleUpperCase()} :
                    <br />
                    {title[1].toLocaleUpperCase()}
                  </h3>
                  <p className="rounded-lg bg-gray-100 p-4 text-justify text-gray-600 dark:bg-gray-700 dark:text-gray-200">
                    {program.description}
                  </p>
                </div>
                {/* Section droite : Image et Bouton */}
                <div className="flex flex-col items-center justify-center md:w-1/2">
                  <div className="flex h-full w-full flex-col">
                    {/* L'image occupe maintenant moins de place */}

                    <Image
                      src={program.image}
                      alt={program.title}
                      className="z-50 h-48 w-full rounded-md object-cover" // Réduit la hauteur de l'image
                      layout="intrinsic"
                      quality={100}
                      priority
                      width={600} // Largeur réduite pour une image plus petite
                      height={350} // Hauteur réduite pour un meilleur ratio
                    />

                    {/* Bouton en bas */}
                    <button className="mt-4 w-full rounded-full bg-blue-500 px-6 py-2 text-sm text-white transition hover:bg-blue-600">
                      {language === "fr" ? "En savoir plus" : "Learn more"}
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CFPPrograms;
