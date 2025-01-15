"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import Header from "../Licence/Header";
import Section from "../Licence/Section";
import Card from "../Licence/Card";
import ProgramCard from "./ProgramCard";
import CallToAction from "../Licence/CallToAction";
import Mention from "./Mention";
import MasterCard from "./MasterCard";
import ProgramDetails from "./ProgramDetails";
import ScrollComponent from "../Scroll/ScrollComponent";
import { useLanguageContext } from "@/lib/context/LanguageContext";

export default function SectionM2() {
  const { language } = useLanguageContext();
  const currentWorldFr = {
    title: "Ce Master est conçu pour :",
    items: [
      "Les titulaires d’une Licence dans des domaines connexes tels que le cinéma, l’audiovisuel, les arts ou les sciences sociales.",
      "Les professionnels de l’industrie souhaitant approfondir leurs compétences techniques ou se repositionner dans des fonctions stratégiques.",
      "Les passionnés d’art et de technologie prêts à exceller dans les domaines de la cinématographie et de l’ingénierie sonore.",
    ],
  };
  const currentWorldEn = {
    title: "This Master's program is designed for:",
    items: [
      "Holders of a Bachelor's degree in related fields such as cinema, audiovisual media, arts, or social sciences.",
      "Industry professionals looking to deepen their technical skills or transition into strategic roles.",
      "Art and technology enthusiasts ready to excel in cinematography and sound engineering.",
    ],
  };
  const currentWorld = language === "fr" ? currentWorldFr : currentWorldEn;
  const masterFr = [
    {
      title: "M1",
      description:
        "10 mois pour acquérir des compétences avancées en audiovisuel et cinématographie.",
    },
    {
      title: "M2",
      description:
        "10 mois pour se spécialiser dans l’un des deux parcours proposés.",
    },
    {
      title: "Mémoire de fin d’études",
      description:
        "Un projet de recherche ou une réalisation pratique en lien avec la spécialisation, visant à valider le diplôme.",
    },
  ];
  const masterEn = [
    {
      title: "M1",
      description:
        "10 months to acquire advanced skills in audiovisual media and cinematography.",
    },
    {
      title: "M2",
      description: "10 months to specialize in one of the two offered tracks.",
    },
    {
      title: "Final Thesis",
      description:
        "A research project or practical work related to the specialization, aimed at validating the degree.",
    },
  ];
  const master = language === "fr" ? masterFr : masterEn;
  const careerPathsFr = [
    {
      title: "Industrie Cinématographique et Télévision",
      details: [
        "Réalisateur ou assistant réalisateur.",
        "Directeur artistique ou directeur de la photographie.",
        "Producteur ou gestionnaire de projets cinématographiques.",
      ],
    },
    {
      title: "Ingénierie Sonore et Audiovisuel",
      details: [
        "Sound designer ou ingénieur du son.",
        "Responsable de production musicale ou technique sonore.",
        "Mixeur ou éditeur de son dans des studios d’enregistrement ou de post-production.",
      ],
    },
    {
      title: "Médias et Publicité",
      details: [
        "Responsable de contenu audiovisuel pour agences ou plateformes numériques.",
        "Consultant en stratégie audiovisuelle et production multimédia.",
      ],
    },
  ];
  const careerPathsEn = [
    {
      title: "Film and Television Industry",
      details: [
        "Director or assistant director.",
        "Artistic director or director of photography.",
        "Producer or film project manager.",
      ],
    },
    {
      title: "Sound Engineering and Audiovisual",
      details: [
        "Sound designer or sound engineer.",
        "Head of music production or sound engineering.",
        "Mixer or sound editor in recording or post-production studios.",
      ],
    },
    {
      title: "Media and Advertising",
      details: [
        "Head of audiovisual content for agencies or digital platforms.",
        "Consultant in audiovisual strategy and multimedia production.",
      ],
    },
  ];
  const careerPaths = language === "fr" ? careerPathsFr : careerPathsEn;
  const programsFr = [
    {
      title: "Cinématographie",
      description:
        "Le parcours Cinématographie est dédié à la maîtrise des techniques avancées de création cinématographique, de la pré-production à la post-production. Il forme des experts capables de produire des contenus de qualité professionnelle pour le cinéma, la télévision et les plateformes numériques.",
      content: [
        "Réalisation et direction artistique.",
        "Écriture et scénarisation pour films, documentaires et séries.",
        "Production et gestion de projets cinématographiques.",
        "Post-production : montage numérique, étalonnage et effets visuels (VFX).",
        "Cinéma numérique : technologies modernes (4K, 8K, drones, etc.).",
        "Histoire et esthétique du cinéma.",
      ],
      opportunities: [
        "Réalisateur, directeur artistique, producteur ou monteur vidéo.",
        "Consultant en stratégie cinématographique ou créateur de contenus pour plateformes de streaming.",
      ],
    },
    {
      title: "Ingénierie de Son",
      description:
        "Le parcours Ingénierie de Son est axé sur les aspects techniques et créatifs de la production sonore. Il forme des spécialistes capables de concevoir et de réaliser des environnements sonores pour le cinéma, la télévision, la musique, les jeux vidéo et les expériences immersives.",
      content: [
        "Enregistrement et mixage sonore.",
        "Sound design pour le cinéma, les jeux vidéo et les projets numériques.",
        "Production musicale, arrangement et mastering.",
        "Post-production audio : édition, synchronisation et intégration sonore.",
        "Son immersif et spatialisation pour VR et AR.",
        "Utilisation des outils modernes : consoles numériques, logiciels DAW, et microphones avancés.",
      ],
      opportunities: [
        "Ingénieur du son, sound designer, producteur musical ou mixeur.",
        "Responsable audio pour le cinéma, les jeux vidéo ou les environnements immersifs.",
      ],
    },
  ];
  const programsEn = [
    {
      title: "Cinematography",
      description:
        "The Cinematography track focuses on mastering advanced cinematographic creation techniques, from pre-production to post-production. It trains experts capable of producing professional-grade content for cinema, television, and digital platforms.",
      content: [
        "Directing and artistic direction.",
        "Screenwriting for films, documentaries, and series.",
        "Production and management of cinematographic projects.",
        "Post-production: digital editing, color grading, and visual effects (VFX).",
        "Digital cinema: modern technologies (4K, 8K, drones, etc.).",
        "History and aesthetics of cinema.",
      ],
      opportunities: [
        "Director, artistic director, producer, or video editor.",
        "Cinematographic strategy consultant or content creator for streaming platforms.",
      ],
    },
    {
      title: "Sound Engineering",
      description:
        "The Sound Engineering track focuses on both the technical and creative aspects of sound production. It trains specialists capable of designing and creating sound environments for cinema, television, music, video games, and immersive experiences.",
      content: [
        "Sound recording and mixing.",
        "Sound design for cinema, video games, and digital projects.",
        "Music production, arrangement, and mastering.",
        "Audio post-production: editing, synchronization, and sound integration.",
        "Immersive sound and spatialization for VR and AR.",
        "Use of modern tools: digital consoles, DAW software, and advanced microphones.",
      ],
      opportunities: [
        "Sound engineer, sound designer, music producer, or mixer.",
        "Audio supervisor for cinema, video games, or immersive environments.",
      ],
    },
  ];
  const programs = language === "fr" ? programsFr : programsEn;
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Type d'animation
    });
  }, []);
  const title =
    language === "fr"
      ? "MASTER EN AUDIOVISUEL ET CINÉMATOGRAPHIE (AC)"
      : "MASTER'S IN AUDIOVISUAL AND CINEMATOGRAPHY (AC)";
  const subtitle =
    language === "fr"
      ? "Le Master en Audiovisuel et Cinématographie (AC) d’E-Media est une formation avancée et multidisciplinaire qui allie expertise technique, créativité artistique et vision stratégique. Ce programme forme les futurs professionnels du cinéma, de l’audiovisuel et de l’ingénierie sonore, leur permettant d’évoluer dans des secteurs en plein essor à l’échelle locale et internationale."
      : "The Master's program in Audiovisual and Cinematography (AC) at E-Media is an advanced, multidisciplinary training that combines technical expertise, artistic creativity, and strategic vision. This program trains future professionals in cinema, audiovisual media, and sound engineering, equipping them to thrive in growing sectors both locally and internationally.";
  return (
    <div>
      {/* Header */}
      <Header
        id="master2"
        title={title}
        subtitle={subtitle}
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736924334/E-MEDIA---UNIVERSIT%C3%89-SP%C3%89CIALIS%C3%89E-EN-AUDIOVISUEL--CIN%C3%89MATOGRAPHIE-ET-NUM%C3%89RIQUE_vu2zce.jpg"
      />
      <div
        id="master2"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <ScrollComponent text={title} />
        <Mention
          domain={
            language === "fr" ? "Sciences de la Société" : "Social Sciences"
          }
          mention={
            language === "fr"
              ? "Audiovisuel et Cinématographie"
              : "Audiovisual and Cinematography"
          }
        />
        <Section
          title={
            language === "fr"
              ? "À qui s’adresse cette formation ?"
              : "Who is this program for ?"
          }
        ></Section>
        {/* À qui s’adresse cette formation ? */}
        <Section bgColor="bg-gray-100">
          <h3 className="text-bold mb-10 text-center text-xl font-semibold dark:text-gray-400 ">
            {currentWorld.title}
          </h3>

          <div className=" text-md mt-4 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {currentWorld.items.map((item, index) => (
              <Card key={index} title={item} items={[]} />
            ))}
          </div>
        </Section>

        <Section
          title={
            language === "fr"
              ? "Durée et organisation de la formation"
              : "Duration and Program Structure"
          }
          content={
            language === "fr"
              ? "Le Master en Audiovisuel et Cinématographie se déroule sur 4 semestres après la Licence (soit 2 ans)."
              : "The Master's in Audiovisual and Cinematography spans 4 semesters after the Bachelor's degree (2 years)."
          }
        >
          <div className="flex flex-wrap justify-center gap-5">
            {master.map((spec, index) => (
              <MasterCard
                key={index}
                title={spec.title}
                description={spec.description}
              />
            ))}
          </div>
        </Section>

        <Section
          title={
            language === "fr"
              ? "Parcours spécialisés (en M2)"
              : "Specialized Tracks (in M2)"
          }
        >
          {programs.map((program, index) => (
            <ProgramDetails
              key={index}
              title={program.title}
              description={program.description}
              content={program.content}
              opportunities={program.opportunities}
            />
          ))}
        </Section>

        <Section
          bgColor="bg-gray-100"
          title={
            language === "fr"
              ? "Débouchés professionnels globaux"
              : "Global Career Opportunities"
          }
          content={
            language === "fr"
              ? "Les diplômés du Master en Audiovisuel et Cinématographie peuvent accéder à des postes variés et stratégiques dans :"
              : "Graduates of the Master's program in Audiovisual and Cinematography can pursue diverse and strategic positions in:"
          }
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {careerPaths.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </Section>

        <Section
          bgColor="bg-gray-100"
          title={
            language === "fr"
              ? "Une innovation à Madagascar et dans l’Océan Indien"
              : "An Innovation in Madagascar and the Indian Ocean"
          }
        >
          {language === "fr" ? <Fr /> : <Eng />}
        </Section>
        <Section bgColor="bg-primary">
          {language === "fr" ? (
            <CallToAction
              description={
                "Rejoignez-nous dès maintenant pour bâtir votre avenir dans le cinéma et l’audiovisuel !"
              }
              buttonText={"Préinscriptions ouvertes ici"}
              buttonLink={""}
              heading={""}
            />
          ) : (
            <CallToAction
              description={
                "Join us now to build your future in cinema and audiovisual!"
              }
              buttonText={"Pre-registration open here"}
              buttonLink={""}
              heading={""}
            />
          )}
        </Section>
      </div>
    </div>
  );
}

const Eng = () => {
  return (
    <div className="rounded-lg bg-gray-50 p-8 text-start shadow-lg dark:bg-gray-800">
      <p className="mb-6 text-lg font-medium text-gray-700 dark:text-gray-300">
        These two tracks,{" "}
        <span className="font-semibold text-teal-600 dark:text-teal-400">
          Cinematography
        </span>{" "}
        and{" "}
        <span className="font-semibold text-teal-600 dark:text-teal-400">
          Sound Engineering
        </span>
        , are unique to Madagascar and offer a comprehensive and innovative
        training.{" "}
        <span className="font-semibold text-teal-500 dark:text-teal-300">
          E-Media
        </span>{" "}
        is the only university in Madagascar offering such a program, aligned
        with international standards.
      </p>
      <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
        With modern infrastructures (film studios, sound laboratories,
        state-of-the-art equipment) and a faculty of local and international
        experts, these tracks ensure a rewarding and professional learning
        experience.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Graduates from these tracks will stand out for their ability to{" "}
        <span className="font-semibold text-teal-500 dark:text-teal-300">
          innovate
        </span>
        , tackle technical and artistic challenges, and actively contribute to
        the growth of cultural and creative industries in Madagascar and the
        Indian Ocean region.
      </p>
    </div>
  );
};

const Fr = () => {
  return (
    <div className="rounded-lg bg-gray-50 p-8 text-start shadow-lg dark:bg-gray-800">
      <p className="mb-6 text-lg font-medium text-gray-700 dark:text-gray-300">
        Ces deux parcours,{" "}
        <span className="font-semibold text-teal-600 dark:text-teal-400">
          Cinématographie
        </span>{" "}
        et{" "}
        <span className="font-semibold text-teal-600 dark:text-teal-400">
          Ingénierie de Son
        </span>
        , sont uniques à Madagascar et offrent une formation complète et
        inédite.{" "}
        <span className="font-semibold text-teal-500 dark:text-teal-300">
          E-Media
        </span>{" "}
        est la seule université habilitée à Madagascar à proposer un tel
        programme, aligné sur les standards internationaux.
      </p>
      <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
        Avec des infrastructures modernes (studios de cinéma, laboratoires
        sonores, équipements de pointe) et un corps professoral composé
        d&apos;experts locaux et internationaux, ces parcours garantissent une
        expérience d&apos;apprentissage enrichissante et professionnalisante.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Les diplômés de ces parcours se distingueront par leur capacité à{" "}
        <span className="font-semibold text-teal-500 dark:text-teal-300">
          innover
        </span>
        , à relever les défis techniques et artistiques, et à contribuer
        activement à l&apos;essor des industries culturelles et créatives à
        Madagascar et dans la région de l&apos;Océan Indien.
      </p>
    </div>
  );
};
