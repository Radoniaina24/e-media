"use client";
import React from "react";
import FormationAudio from "./Formation";
import Header from "../Licence/Header";
import ScrollComponent from "../Scroll/ScrollComponent";
import DurationCard from "./DurationCard";
import { useLanguageContext } from "@/lib/context/LanguageContext";

export default function SectionAudioMao() {
  const { language } = useLanguageContext();
  const title =
    language === "fr"
      ? "Son : Production Audio & MAO"
      : "Sound: Audio Production & DAW (Digital Audio Workstation)";
  const subtitle =
    language === "fr"
      ? "Cette formation offre une immersion complète dans un environnement studio professionnel, permettant aux apprenants d’acquérir les bases essentielles de la production audio et de la création musicale assistée par ordinateur (MAO). Ce programme intensif met l’accent sur la pratique et l’utilisation d’outils de pointe pour produire des contenus sonores de qualité professionnelle adaptés à divers domaines, tels que la musique, la publicité ou l’audiovisuel."
      : "This training provides a comprehensive immersion in a professional studio environment, allowing learners to acquire the essential foundations of audio production and computer-assisted music creation (DAW). This intensive program focuses on hands-on experience and the use of cutting-edge tools to produce high-quality sound content tailored to various fields, such as music, advertising, and audiovisual production.";

  const formationAudioFr = {
    pointsForts: [
      {
        titre: "Utilisation d’un studio professionnel",
        description:
          "Accès à un environnement entièrement équipé avec des consoles numériques, des logiciels DAW (Digital Audio Workstation) comme Pro Tools, Logic Pro, Ableton Live, ainsi que des équipements haut de gamme pour l’enregistrement et la production musicale.",
      },
      {
        titre: "Pratique intensive",
        description:
          "Formation axée sur des projets réels, incluant l’enregistrement en studio, le mixage audio avancé, le mastering et la production complète de morceaux.",
      },
      {
        titre: "Accompagnement personnalisé",
        description:
          "Chaque apprenant bénéficie du suivi d’experts de l’industrie musicale pour développer ses compétences techniques et artistiques.",
      },
      {
        titre: "Éducation axée sur l’innovation",
        description:
          "Introduction à des technologies émergentes, comme les plugins avancés, les outils d’intelligence artificielle pour la création musicale et les formats immersifs (son 3D, Dolby Atmos).",
      },
    ],

    competencesDeveloppees: [
      {
        categorie: "Enregistrement et traitement audio",
        details: [
          "Maîtrise des techniques d’enregistrement en studio (voix, instruments, effets).",
          "Édition et nettoyage des pistes audio pour obtenir une qualité sonore optimale.",
        ],
      },
      {
        categorie: "Création musicale assistée par ordinateur (MAO)",
        details: [
          "Composition, arrangement et production musicale sur des logiciels de MAO.",
          "Programmation de beats, synthétiseurs et instruments virtuels.",
        ],
      },
      {
        categorie: "Mixage et mastering",
        details: [
          "Application des techniques de mixage pour équilibrer les différentes pistes sonores.",
          "Mastering professionnel pour optimiser la qualité audio pour la diffusion (radio, streaming, CD, etc.).",
        ],
      },
      {
        categorie: "Production de contenus sonores",
        details: [
          "Création de bandes son pour la publicité, les films, les jeux vidéo ou les vidéos promotionnelles.",
          "Sound design pour enrichir des projets audiovisuels et numériques.",
        ],
      },
    ],

    debouchesProfessionnels: [
      {
        categorie: "Technicien audio",
        details: [
          "Responsable de la gestion technique en studio d’enregistrement ou sur des lieux de production.",
          "Spécialiste du traitement audio pour des projets variés.",
        ],
      },
      {
        categorie: "Producteur musical",
        details: [
          "Création et supervision de projets musicaux pour des artistes, des groupes ou des entreprises.",
          "Coordination des processus artistiques et techniques en studio.",
        ],
      },
      {
        categorie: "Arrangeur musical",
        details: [
          "Spécialisation dans l’écriture et la réarrangement de compositions musicales pour divers styles et besoins.",
        ],
      },
      {
        categorie: "Assistant ingénieur du son",
        details: [
          "Travail au sein de studios professionnels pour assister à l’enregistrement, au mixage et à la post-production audio.",
        ],
      },
      {
        categorie: "Créateur de contenu audio",
        details: [
          "Conception de bandes son pour le cinéma, la télévision, les podcasts ou les jeux vidéo.",
          "Développement de contenus immersifs et innovants pour les médias numériques.",
        ],
      },
      {
        categorie: "Entrepreneur dans la production musicale",
        details: [
          "Création et gestion de studios d’enregistrement indépendants.",
          "Développement de projets innovants dans le domaine de la musique et de l’audio numérique.",
        ],
      },
      {
        categorie: "Sound designer",
        details: [
          "Conception de paysages sonores pour des projets artistiques ou commerciaux, incluant les effets spéciaux audio et les sons immersifs.",
        ],
      },
    ],

    forcesFormation: [
      {
        titre: "Adaptabilité aux besoins du marché",
        description:
          "Cette formation répond aux demandes croissantes de professionnels qualifiés dans les domaines de la musique, de la publicité et des médias.",
      },
      {
        titre: "Flexibilité et créativité",
        description:
          "Les apprenants développent des compétences leur permettant de s’adapter à différents styles musicaux et exigences techniques.",
      },
      {
        titre: "Insertion professionnelle rapide",
        description:
          "Grâce à une formation pratique et orientée vers les besoins de l’industrie, les diplômés accèdent rapidement à des opportunités d’emploi ou développent des activités entrepreneuriales.",
      },
      {
        titre: "Reconnaissance officielle",
        description:
          "Certification délivrée par la FOP, valorisant les compétences acquises et assurant une reconnaissance sur le marché du travail.",
      },
    ],
  };

  const formationAudioEn = {
    pointsForts: [
      {
        titre: "Use of a Professional Studio",
        description:
          "Access to a fully equipped environment with digital consoles, DAW (Digital Audio Workstation) software such as Pro Tools, Logic Pro, Ableton Live, as well as high-end equipment for recording and music production.",
      },
      {
        titre: "Intensive Practice",
        description:
          "Training focused on real-world projects, including studio recording, advanced audio mixing, mastering, and full track production.",
      },
      {
        titre: "Personalized Support",
        description:
          "Each learner benefits from guidance by industry experts to develop both technical and artistic skills.",
      },
      {
        titre: "Education Focused on Innovation",
        description:
          "Introduction to emerging technologies, such as advanced plugins, AI tools for music creation, and immersive formats (3D sound, Dolby Atmos).",
      },
    ],

    competencesDeveloppees: [
      {
        categorie: "Audio Recording and Processing",
        details: [
          "Mastering studio recording techniques (vocals, instruments, effects).",
          "Editing and cleaning audio tracks for optimal sound quality.",
        ],
      },
      {
        categorie: "Computer-Assisted Music Creation (DAW)",
        details: [
          "Composition, arrangement, and music production using DAW software.",
          "Beat programming, synthesizers, and virtual instruments.",
        ],
      },
      {
        categorie: "Mixing and Mastering",
        details: [
          "Applying mixing techniques to balance different audio tracks.",
          "Professional mastering to optimize audio quality for broadcasting (radio, streaming, CD, etc.).",
        ],
      },
      {
        categorie: "Sound Content Production",
        details: [
          "Creating soundtracks for advertising, films, video games, or promotional videos.",
          "Sound design to enhance audiovisual and digital projects.",
        ],
      },
    ],

    debouchesProfessionnels: [
      {
        categorie: "Audio Technician",
        details: [
          "Responsible for technical management in recording studios or production locations.",
          "Specialist in audio processing for various projects.",
        ],
      },
      {
        categorie: "Music Producer",
        details: [
          "Creating and overseeing music projects for artists, bands, or companies.",
          "Coordinating artistic and technical processes in the studio.",
        ],
      },
      {
        categorie: "Music Arranger",
        details: [
          "Specializing in writing and rearranging musical compositions for different styles and needs.",
        ],
      },
      {
        categorie: "Assistant Sound Engineer",
        details: [
          "Working in professional studios to assist with recording, mixing, and audio post-production.",
        ],
      },
      {
        categorie: "Audio Content Creator",
        details: [
          "Designing soundtracks for film, television, podcasts, or video games.",
          "Developing immersive and innovative content for digital media.",
        ],
      },
      {
        categorie: "Entrepreneur in Music Production",
        details: [
          "Creating and managing independent recording studios.",
          "Developing innovative projects in the music and digital audio fields.",
        ],
      },
      {
        categorie: "Sound Designer",
        details: [
          "Designing soundscapes for artistic or commercial projects, including audio effects and immersive sounds.",
        ],
      },
    ],

    forcesFormation: [
      {
        titre: "Market Adaptability",
        description:
          "This training meets the growing demand for qualified professionals in music, advertising, and media fields.",
      },
      {
        titre: "Flexibility and Creativity",
        description:
          "Learners develop skills that allow them to adapt to different music styles and technical requirements.",
      },
      {
        titre: "Quick Professional Integration",
        description:
          "With hands-on training focused on industry needs, graduates quickly access job opportunities or develop entrepreneurial activities.",
      },
      {
        titre: "Official Recognition",
        description:
          "Certification issued by FOP, enhancing acquired skills and ensuring recognition in the job market.",
      },
    ],
  };
  const formationAudio =
    language === "fr" ? formationAudioFr : formationAudioEn;
  const text =
    language === "fr"
      ? "Cette formation constitue une porte d’entrée idéale pour toute personne passionnée par le son et la musique, offrant une expertise immédiatement exploitable dans un secteur dynamique et en constante évolution."
      : "This training serves as an ideal gateway for anyone passionate about sound and music, offering immediately applicable expertise in a dynamic and ever-evolving industry.";
  return (
    <div>
      <Header
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736491651/SON--PRODUCTION-AUDIO-_-MAO_e4ajeu.jpg"
        title={title}
        id="audiomao"
        subtitle={subtitle}
      />
      <div id="audiomao" className="container">
        <ScrollComponent text={title} />
        <DurationCard duration={language === "fr" ? "5 mois " : "5 months"} />
        <FormationAudio data={formationAudio} />

        <div className="my-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white shadow-lg transition-colors duration-300 dark:from-gray-800 dark:to-gray-900 dark:text-gray-200">
          <h2 className="mb-4 text-2xl font-bold">
            {language === "fr"
              ? "Faites le choix d'une formation exceptionnelle !"
              : "Choose an exceptional training program!"}
          </h2>
          <p className="text-lg">{text}</p>
        </div>
      </div>
    </div>
  );
}
