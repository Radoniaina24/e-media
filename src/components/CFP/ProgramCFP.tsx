"use client";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Son : Production Audio & MAO",
    description:
      "Apprenez les techniques avancées de production audio et maîtrisez les outils de Musique Assistée par Ordinateur (MAO) pour créer des productions sonores de qualité professionnelle.",
    image: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736328264/son_fsmyel.png",
    link: "/formation/cfp/sam",
  },
  {
    title: "Sono : Sonorisation et Lumières de Spectacle",
    description:
      "Devenez expert en sonorisation et en gestion des lumières pour les spectacles en direct, en alliant savoir-faire technique et créativité scénique.",
    image: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736332109/Sono_yuvvba.png",
    link: "/formation/cfp/ssls",
  },
  {
    title: "Image : Cinématographie, Post-production, Photographie et 3D",
    description:
      "Formez-vous aux métiers de l'image, de la captation à la post-production, en passant par la photographie et la création 3D, pour des projets visuels innovants.",
    image: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736328262/image_jyukwy.png",
    link: "/formation/cfp/cpp",
  },
  {
    title: "Web : Création et Développement Multimédia",
    description:
      "Développez des compétences en création et développement multimédia pour concevoir des sites web interactifs et des expériences numériques immersives.",
    image: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736328264/web_xjkbr3.png",
    link: "/formation/cfp/cdm",
  },
  {
    title: "DTS – Diplôme de Technicien Supérieur",
    description:
      "Un diplôme technique conçu pour vous préparer aux métiers spécialisés, combinant théorie et pratique pour répondre aux besoins du marché.",
    image: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736333864/DTS-Web_ieqtpa.png",
    link: "/formation/cfp/dts",
  },
];

const CFPPrograms: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="mb-10 text-center text-3xl font-bold text-gray-800 dark:text-white">
        Nos Programmes de CFP
      </h2>
      <hr className="mb-10" />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {programs.map((program, index) => (
         <Link key={index} href={program.link} aria-label={`En savoir plus sur ${program.title}`}>
         <div
           className="flex flex-col items-center md:flex-row  transition-transform hover:scale-105 hover:cursor-pointer hover:bg-gray-50 dark:bg-gray-800"
           data-aos="fade-up"
           data-aos-delay={index * 100}
         >
           {/* Section gauche : Titre et Description */}
           <div className="flex flex-col justify-center p-4 md:w-1/2">
             <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-50">
               {program.title.toLocaleUpperCase()}
             </h3>
             <p className="rounded-lg bg-gray-100 p-4 text-gray-600 dark:bg-gray-700 dark:text-gray-200">
               {program.description}
             </p>
           </div>
           {/* Section droite : Image et Bouton */}
           <div className="flex flex-col items-center justify-center md:w-1/2">
             <div className="flex flex-col h-full w-full">
               {/* L'image occupe maintenant moins de place */}
              
               <Image
                 src={program.image}
                 alt={program.title}
                 className="z-50 object-cover w-full h-48 rounded-md"  // Réduit la hauteur de l'image
                 layout="intrinsic"
                 quality={100}
                 priority
                 width={600}  // Largeur réduite pour une image plus petite
                 height={350} // Hauteur réduite pour un meilleur ratio
               />
             
              
               {/* Bouton en bas */}
               <button className="mt-4 w-full rounded-full bg-blue-500 px-6 py-2 text-sm text-white transition hover:bg-blue-600">
                 En savoir plus
               </button>
             </div>
           </div>
         </div>
       </Link>
       
        ))}
      </div>
    </div>
  );
};

export default CFPPrograms;
