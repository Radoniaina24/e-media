"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import Header from "../Licence/Header";
import Section from "../Licence/Section";
import CardCFP from "../CFP/CardCFP";
import ScrollComponent from "../Scroll/ScrollComponent";
import { useLanguageContext } from "@/lib/context/LanguageContext";

export default function SectionUSA() {
  const { language } = useLanguageContext();
  const programsFr = [
    {
      title: "Sonorisation et Lumière de Spectacles",
      description:
        "Techniques de sonorisation pour événements live : réglages audio, placement des équipements, mixage en temps réel. Conception et gestion des éclairages pour créer des ambiances scéniques adaptées.",
    },
    {
      title: "MAO et Production Audio, Photographie",
      description:
        "Apprentissage des logiciels de Musique Assistée par Ordinateur (MAO), techniques d’enregistrement, de mixage et de mastering. Introduction à la photographie : cadrage, éclairage et retouche photo.",
    },
    {
      title: "VFX Production et Post-production",
      description:
        "Découverte des effets visuels numériques pour le cinéma et la télévision. Techniques de compositing, motion design, et intégration d’éléments 3D.",
    },
    {
      title: "Présentation et Influence TV",
      description:
        "Formation à l’art de la communication à l’écran : posture, diction, expression, et stratégies d’influence dans le cadre télévisé.",
    },
    {
      title: "Présentation et Technique Radio",
      description:
        "Techniques d’animation radio : articulation, gestion du direct, et maîtrise des équipements techniques pour une émission professionnelle.",
    },
    {
      title: "Conception d’Émission Radio et TV",
      description:
        "Étapes de création d’un programme : écriture, planification, gestion de contenu, et structuration pour attirer et fidéliser le public.",
    },
    {
      title: "Tournage Vidéo et Pilotage de Drone",
      description:
        "Formation sur la captation vidéo avec caméras et drones. Techniques de cadrage, prises de vue aériennes, et post-production.",
    },
    {
      title: "Infographie 3D",
      description:
        "Introduction à la modélisation, au texturing, à l’animation et au rendu 3D à travers des logiciels spécialisés pour des projets visuels innovants.",
    },
    {
      title: "Web Design et UX/UI",
      description:
        "Création de sites web attractifs et fonctionnels en utilisant les principes de design graphique, ergonomie, et expérience utilisateur. Maîtrise des outils comme Figma, Adobe XD, et WordPress.",
    },
    {
      title: "Développement Web",
      description:
        "Apprentissage des langages de programmation (HTML, CSS, JavaScript, PHP) et des frameworks modernes pour concevoir des sites web dynamiques et performants.",
    },
    {
      title: "Marketing Digital et SEO",
      description:
        "Initiation aux stratégies de marketing en ligne : référencement naturel (SEO), publicité sur les réseaux sociaux, email marketing, et gestion de campagnes publicitaires.",
    },
    {
      title: "Animation et Gestion de Communautés Web",
      description:
        "Techniques pour gérer et animer des communautés en ligne : création de contenu engageant, modération, et stratégie de fidélisation.",
    },
    {
      title: "Création de Contenu pour les Réseaux Sociaux",
      description:
        "Conception et production de contenus visuels et textuels optimisés pour les plateformes sociales. Utilisation d’outils comme Canva, Adobe Creative Suite, et analyse des performances via des indicateurs clés (KPIs).",
    },
    {
      title: "Initiation à la Cybersécurité",
      description:
        "Sensibilisation aux enjeux de sécurité numérique : protection des données, bonnes pratiques en ligne, et bases des outils de cybersécurité.",
    },
  ];
  const programsEn = [
    {
      title: "Sound and Lighting for Shows",
      description:
        "Techniques for live event sound: audio settings, equipment placement, real-time mixing. Design and management of lighting to create suitable stage atmospheres.",
    },
    {
      title: "Music Production and Photography",
      description:
        "Learning Music Production Software (MAO), recording, mixing, and mastering techniques. Introduction to photography: framing, lighting, and photo retouching.",
    },
    {
      title: "VFX Production and Post-production",
      description:
        "Introduction to digital visual effects for cinema and television. Compositing techniques, motion design, and integration of 3D elements.",
    },
    {
      title: "TV Presentation and Influence",
      description:
        "Training in screen communication: posture, diction, expression, and influence strategies in the television context.",
    },
    {
      title: "Radio Presentation and Technique",
      description:
        "Radio hosting techniques: articulation, live broadcast management, and mastering technical equipment for a professional show.",
    },
    {
      title: "Radio and TV Program Design",
      description:
        "Program creation steps: writing, planning, content management, and structuring to attract and retain an audience.",
    },
    {
      title: "Video Filming and Drone Operation",
      description:
        "Training in video capture with cameras and drones. Framing techniques, aerial shots, and post-production.",
    },
    {
      title: "3D Graphics Design",
      description:
        "Introduction to 3D modeling, texturing, animation, and rendering using specialized software for innovative visual projects.",
    },
    {
      title: "Web Design and UX/UI",
      description:
        "Creating attractive and functional websites using graphic design principles, ergonomics, and user experience. Mastery of tools like Figma, Adobe XD, and WordPress.",
    },
    {
      title: "Web Development",
      description:
        "Learning programming languages (HTML, CSS, JavaScript, PHP) and modern frameworks to design dynamic and high-performance websites.",
    },
    {
      title: "Digital Marketing and SEO",
      description:
        "Introduction to online marketing strategies: SEO (Search Engine Optimization), social media advertising, email marketing, and managing advertising campaigns.",
    },
    {
      title: "Community Management and Animation",
      description:
        "Techniques for managing and engaging online communities: creating engaging content, moderation, and loyalty strategies.",
    },
    {
      title: "Social Media Content Creation",
      description:
        "Design and production of visual and textual content optimized for social platforms. Using tools like Canva, Adobe Creative Suite, and performance analysis via key performance indicators (KPIs).",
    },
    {
      title: "Introduction to Cybersecurity",
      description:
        "Awareness of digital security challenges: data protection, online best practices, and basic cybersecurity tools.",
    },
  ];
  const programs = language === "fr" ? programsFr : programsEn;
  const atoutFr = [
    {
      title: "Infrastructure de Pointe",
      description:
        "Studios de tournage, équipements professionnels de post-production et laboratoires multimédias.",
    },
    {
      title: "Réseau d’Experts",
      description:
        "Enseignants issus des industries du cinéma, de l’audiovisuel et du numérique, offrant un apprentissage ancré dans la réalité professionnelle.",
    },
    {
      title: "Programmes Innovants",
      description:
        "Formations adaptées aux besoins actuels des industries créatives et numériques.",
    },
    {
      title: "Lien avec l’Industrie",
      description:
        "Opportunités de stages, productions collaboratives et partenariats locaux et internationaux.",
    },
    {
      title: "Orientation Pratique",
      description:
        "Focus sur les compétences techniques, créatives et entrepreneuriales, directement applicables au marché du travail.",
    },
  ];
  const atoutEn = [
    {
      title: "State-of-the-Art Infrastructure",
      description:
        "Film studios, professional post-production equipment, and multimedia laboratories.",
    },
    {
      title: "Network of Experts",
      description:
        "Teachers from the film, audiovisual, and digital industries, providing learning grounded in professional reality.",
    },
    {
      title: "Innovative Programs",
      description:
        "Training programs tailored to the current needs of the creative and digital industries.",
    },
    {
      title: "Industry Connection",
      description:
        "Internship opportunities, collaborative productions, and local and international partnerships.",
    },
    {
      title: "Practical Orientation",
      description:
        "Focus on technical, creative, and entrepreneurial skills directly applicable to the job market.",
    },
  ];
  const atout = language === "fr" ? atoutFr : atoutEn;
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Type d'animation
    });
  }, []);
  const title =
    language === "fr"
      ? "E-MEDIA : UNIVERSITÉ SPÉCIALISÉE EN AUDIOVISUEL, CINÉMATOGRAPHIE ET NUMÉRIQUE"
      : "E-MEDIA: UNIVERSITY SPECIALIZING IN AUDIOVISUAL, CINEMATOGRAPHY, AND DIGITAL TECHNOLOGIES";
  const subtitle = language === "fr" ? "" : "";
  return (
    <div>
      {/* Header */}
      <Header id="usa" title={title} subtitle="" />
      <div
        id="usa"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <ScrollComponent text={title} />
        <Section
          title={
            language === "fr" ? "Identité et Mission" : "Identity and Mission"
          }
          content={
            language === "fr"
              ? "E-media est la première et unique université à Madagascar dédiée exclusivement aux métiers de l’audiovisuel, de la cinématographie et du numérique. Grâce à des infrastructures modernes et à un réseau de professionnels de renom, E-media forme les talents de demain dans des secteurs en pleine expansion."
              : "E-media is the first and only university in Madagascar exclusively dedicated to audiovisual, cinematography, and digital professions. With modern infrastructure and a network of renowned professionals, E-media trains the talents of tomorrow in rapidly growing sectors."
          }
        ></Section>

        <Section bgColor="bg-gray-200">
          <h2 className=" my-10 mb-14  text-xl font-semibold dark:text-white">
            {language === "fr" ? "Atouts Distinctifs" : "Distinctive Strengths"}
          </h2>
          <div className=" grid grid-cols-1 justify-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {atout.map((point, index) => (
              <CardCFP
                key={index}
                title={point.title}
                description={point.description}
              />
            ))}
          </div>
        </Section>

        <Section
          title={language === "fr" ? "Vision" : "Vision"}
          content={
            language === "fr"
              ? "E-media ambitionne de devenir un centre d’excellence et de référence en Afrique pour les métiers créatifs et numériques, en formant une nouvelle génération de professionnels capables d’innover et de contribuer au rayonnement culturel et économique de Madagascar."
              : "E-media aims to become a center of excellence and a benchmark in Africa for creative and digital professions, training a new generation of professionals capable of innovating and contributing to the cultural and economic development of Madagascar."
          }
        ></Section>

        <Section bgColor="bg-gray-200">
          <h2 className=" my-10 mb-14  text-xl font-semibold dark:text-white">
            {language === "fr"
              ? "Programmes de formations modulaires proposés par l'E-media :"
              : "Modular Training Programs Offered by E-media:"}
          </h2>
          <div className=" grid grid-cols-1 justify-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((point, index) => (
              <CardCFP
                key={index}
                title={point.title}
                description={point.description}
              />
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
