import React from "react";
import FormationAudio from "./Formation";
import Section from "../Licence/Section";

export default function SectionAudioMao() {
  const formationAudio = {
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
  const text =
    "Cette formation constitue une porte d’entrée idéale pour toute personne passionnée par le son et la musique, offrant une expertise immédiatement exploitable dans un secteur dynamique et en constante évolution.";
  return (
    <div>
      <Section
        title="Son : Production Audio & MAO "
        content="Cette formation offre une immersion complète dans un environnement studio professionnel, permettant aux apprenants d’acquérir les bases essentielles de la production audio et de la création musicale assistée par ordinateur (MAO). Ce programme intensif met l’accent sur la pratique et l’utilisation d’outils de pointe pour produire des contenus sonores de qualité professionnelle adaptés à divers domaines, tels que la musique, la publicité ou l’audiovisuel."
      >
        <div className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 p-4 text-white shadow-md transition-all duration-300 dark:from-gray-800 dark:to-gray-900 dark:text-gray-200">
          <span className="text-sm font-medium uppercase tracking-wide opacity-75 dark:opacity-90">
            Durée :
          </span>
          <span className="text-xl font-bold">5 mois</span>
        </div>
      </Section>
      <FormationAudio data={formationAudio} />

      <div className="mt-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white shadow-lg transition-colors duration-300 dark:from-gray-800 dark:to-gray-900 dark:text-gray-200">
        <h2 className="mb-4 text-2xl font-bold">
          Faites le choix d&apos;une formation exceptionnelle !
        </h2>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
}
