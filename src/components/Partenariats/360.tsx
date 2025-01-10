import React from "react";
import PartnershipSection from "./PartnershipCard";
import SectionImageCity from "../city/SectionImageCity";
import { CheckCircleIcon } from "@heroicons/react/solid";
import ScrollComponentPartenariats from "./ScrollComponentPartenariats";
import PartnershipCard from "./PartnershipCard";

export default function FormatPro360() {
  const offreFormation = {
    title: "Formapro 360 : Solutions de formation sur mesure pour entreprises",
    description:
      "E-media lance Formapro 360, une nouvelle offre de formations modulaires personnalisées pour répondre aux besoins spécifiques des entreprises. Bénéficiez de notre expertise pour renforcer les compétences de vos équipes.",
  };
  return (
    <div id="7" className="py-28">
      <ScrollComponentPartenariats text={offreFormation.title} />
      <PartnershipCard subtitle={offreFormation.description} />
      <h1 className="m-auto my-12 max-w-[700px] text-3xl font-semibold text-indigo-700">
        Pourquoi collaborer avec E-Media ?
      </h1>
      <div className="space-y-16 px-6 py-12 ">
        {educationHighlights.map((item, index) => (
          <SectionImageCity
            key={index}
            title={item.title}
            highlights={item.highlights}
            imageSrc={item.imageSrc}
            imageAlt={item.title}
            imageOnRight={item.imageOnRight}
          />
        ))}
      </div>
      <InterventionDomains opportunities={interventionDomains} />
      <BusinessSolutionsBenefits />
      <div className="mx-auto my-12 max-w-4xl rounded-lg bg-green-50 p-8 text-center shadow-lg">
        <h2 className="m-auto mb-6 max-w-[700px]  text-2xl font-semibold text-green-800">
          Un partenariat pour des équipes performantes et efficaces
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-gray-600">
          Avec <span className="font-semibold text-green-600">E-media</span> et{" "}
          <span className="font-semibold text-gray-700">Formapro 360</span>,
          transformez vos défis organisationnels en opportunités stratégiques
          grâce à des solutions de formation innovantes et personnalisées. Que
          ce soit pour renforcer les compétences techniques de vos équipes,
          améliorer leur leadership, ou les accompagner dans la transition
          numérique, nous sommes votre partenaire idéal.
        </p>
      </div>
    </div>
  );
}

const educationHighlights = [
  {
    title: "Une formation sur mesure adaptée à vos besoins",
    highlights: [
      {
        text: "Personnalisation totale : Nous concevons des formations adaptées aux objectifs spécifiques de votre organisation, qu’il s’agisse de renforcement technique, de transformation digitale ou de communication stratégique.",
      },
      {
        text: "Formats flexibles : En ligne, en présentiel ou en mode hybride, nos solutions s’adaptent à vos contraintes organisationnelles et temporelles.",
      },
      {
        text: "Ciblage sectoriel : Que vous soyez une entreprise privée, une institution publique, ou une ONG, nous proposons des modules adaptés à vos défis professionnels.",
      },
    ],
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736083737/socio_ezfas1.jpg",
    imageAlt: "Formation sur mesure",
    imageOnRight: false,
  },
  {
    title: "Formapro 360 : Une solution modulaire et impactante",
    highlights: [
      {
        text: "Approche modulaire : Des formations courtes et intensives, axées sur des compétences spécifiques pour des résultats rapides.",
      },
      {
        text: "Focus sur l’impact immédiat : Chaque module est conçu pour répondre directement aux besoins opérationnels de vos équipes.",
      },
      {
        text: "Évaluation continue : Mesure de l’impact des formations avant, pendant et après, pour garantir un retour sur investissement optimal.",
      },
    ],
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736083737/socio_ezfas1.jpg",
    imageAlt: "Formation modulaire",
    imageOnRight: true,
  },
  {
    title: "Expertise et innovation par E-media",
    highlights: [
      {
        text: "Infrastructure moderne : Nos studios audiovisuels, laboratoires numériques et outils pédagogiques offrent un cadre professionnel de haut niveau pour vos formations.",
      },
      {
        text: "Savoir-faire reconnu : Une expertise dans l’audiovisuel, le numérique, l’ingénierie et le management, combinée à une expérience nationale et internationale.",
      },
      {
        text: "Accompagnement personnalisé : Nos formateurs travaillent avec vous pour définir et atteindre vos objectifs stratégiques.",
      },
    ],
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736083737/socio_ezfas1.jpg",
    imageAlt: "Expertise et innovation",
    imageOnRight: false,
  },
];
const interventionDomains = [
  {
    title: "Audiovisuel et communication",
    description: [
      "Techniques de production audiovisuelle : prise de vue, montage, régie.",
      "Communication numérique et storytelling d’entreprise.",
      "Création de contenus visuels et audiovisuels pour campagnes et projets.",
    ],
    icon: "🎥",
  },
  {
    title: "Numérique et technologies",
    description: [
      "Formation aux outils numériques pour améliorer la productivité.",
      "Développement de sites web, marketing digital, et gestion des réseaux sociaux.",
      "Sécurité numérique et gestion des données pour entreprises et ONG.",
    ],
    icon: "💻",
  },
  {
    title: "Management et organisation",
    description: [
      "Développement du leadership et gestion des équipes.",
      "Gestion de projet, stratégie organisationnelle et négociation.",
      "Techniques de motivation et renforcement des soft skills.",
    ],
    icon: "📊",
  },
  {
    title: "Renforcement sectoriel pour ONG et organismes internationaux",
    description: [
      "Production de contenus éducatifs et de sensibilisation.",
      "Communication pour le changement social et campagnes d’impact.",
      "Formation en gestion de projets humanitaires et suivi-évaluation.",
    ],
    icon: "🌍",
  },
];
const InterventionDomains = ({ opportunities }) => {
  return (
    <div className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="m-auto mb-28 max-w-[700px] text-4xl font-semibold text-indigo-700">
          Domaines d&apos;intervention avec E-media et Formapro 360
        </h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="relative transform rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute right-0 top-0 -mr-6 -mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-3xl text-indigo-600 shadow-md">
                {item.icon}
              </div>

              <h2 className="mt-10 text-2xl font-semibold text-indigo-600">
                {item.title}
              </h2>
              <ul className="mt-4 space-y-2 text-left text-gray-700">
                {item.description.map((desc, idx) => (
                  <li key={idx} className="flex items-center">
                    {/* Icône CheckCircle à la place du point */}
                    <div>
                      <CheckCircleIcon className="mr-2 h-5 w-5 text-indigo-600" />
                    </div>

                    <div>{desc}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const businessSolutionsBenefits = [
  {
    title: "Flexibilité et personnalisation",
    description:
      "Une offre qui s’ajuste à vos besoins spécifiques et à votre secteur d’activité.",
    icon: "⚙️", // Icône représentant la flexibilité et l'adaptation
  },
  {
    title: "Impact immédiat",
    description:
      "Des formations pratiques, centrées sur des résultats concrets et mesurables.",
    icon: "🚀", // Icône symbolisant la rapidité et les résultats immédiats
  },
  {
    title: "Expertise reconnue",
    description:
      "Une équipe de formateurs qualifiés, soutenue par les infrastructures modernes d’E-media.",
    icon: "🎓", // Icône mettant en avant l'expertise et la formation
  },
  {
    title: "Innovation avec Formapro 360",
    description:
      "Une approche modulaire innovante pour une montée en compétences rapide et ciblée.",
    icon: "💡", // Icône représentant l'innovation et les nouvelles idées
  },
];

const BusinessSolutionsBenefits = () => {
  return (
    <div className="relative px-6 py-16">
      {/* Contenu principal */}
      <div className="mx-auto max-w-7xl text-center text-white">
        {/* Titre de la section */}
        <h1 className="m-auto mb-12 max-w-[700px]  text-4xl font-semibold text-indigo-700">
          Avantages des solutions entreprises d&apos;E-media et Formapro 360
        </h1>

        {/* Grille de cartes */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {businessSolutionsBenefits.map((opportunity, index) => (
            <div
              key={index}
              className="relative flex transform flex-col items-center overflow-hidden rounded-3xl bg-white p-10 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Icône dynamique */}
              <div className="mb-6 flex h-20 w-20 transform items-center justify-center rounded-full bg-indigo-600 text-4xl text-white transition-transform duration-300 ease-in-out hover:rotate-12">
                {opportunity.icon}
              </div>

              {/* Titre de l'opportunité */}
              <h2 className="mb-4 text-2xl font-semibold text-indigo-700">
                {opportunity.title}
              </h2>

              {/* Description de l'opportunité */}
              <p className="mb-6 leading-relaxed text-gray-800">
                {opportunity.description}
              </p>

              {/* Bordure subtile au survol */}
              <div className="absolute inset-0 rounded-3xl border-2 border-indigo-600 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
