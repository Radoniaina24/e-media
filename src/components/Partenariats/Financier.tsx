import React from "react";

import { CheckCircleIcon } from "@heroicons/react/outline";
import ScrollComponentPartenariats from "./ScrollComponentPartenariats";
import PartnershipCard from "./PartnershipCard";
import { useLanguageContext } from "@/lib/context/LanguageContext";
const partenariatFr = {
  title: "Nos Opportunités de Partenariat Financiers et Stratégiques",
  description:
    "E-media, en tant qu'université engagée dans la transformation numérique et éducative, invite des partenaires financiers et stratégiques à collaborer pour soutenir nos initiatives et répondre aux besoins croissants de nos étudiants et de notre institution.",
};
const partenariatEn = {
  title: "Our Financial and Strategic Partnership Opportunities",
  description:
    "E-media, as a university committed to digital and educational transformation, invites financial and strategic partners to collaborate in supporting our initiatives and addressing the growing needs of our students and institution.",
};
export default function Financier() {
  const { language } = useLanguageContext();
  const partenariat = language === "fr" ? partenariatFr : partenariatEn;

  const opportunities = language === "fr" ? opportunitiesFr : opportunitiesEn;
  return (
    <div id="5" className="py-28">
      <ScrollComponentPartenariats text={partenariat.title} />
      <PartnershipCard subtitle={partenariat.description} />
      <WhyCollaborateSection />
      <StructuralProjectsSupport />
      <CreativeProjectsSupport />
      <CollaborationOpportunities opportunities={opportunities} />
      <Partnership />
      {language === "fr" ? (
        <div className="mx-auto my-12 max-w-3xl rounded-lg bg-green-50 p-8 text-center shadow-lg">
          <h2 className="mb-6 text-center text-3xl font-semibold text-green-800">
            Rejoignez E-media pour un avenir où chaque jeune talent peut
            réaliser ses ambitions
          </h2>
          <p className="text-text-center text-lg leading-relaxed text-gray-700">
            Rejoignez-nous pour bâtir ensemble un avenir où chaque jeune talent,
            quel que soit son milieu, peut accéder à une éducation de qualité et
            réaliser ses ambitions. Ensemble, nous pouvons ouvrir de nouvelles
            opportunités pour les talents de demain grâce à des initiatives
            durables et innovantes.
          </p>
        </div>
      ) : (
        <div className="mx-auto my-12 max-w-3xl rounded-lg bg-green-50 p-8 text-center shadow-lg">
          <h2 className="mb-6 text-center text-3xl font-semibold text-green-800">
            Join E-media for a future where every young talent can achieve their
            ambitions
          </h2>
          <p className="text-center text-lg leading-relaxed text-gray-700">
            Join us to build a future where every young talent, regardless of
            their background, can access quality education and achieve their
            ambitions. Together, we can open new opportunities for
            tomorrow&apos;s talents through sustainable and innovative
            initiatives.
          </p>
        </div>
      )}
    </div>
  );
}
const educationScholarshipsFr = [
  {
    title: "Un accès limité pour de nombreux jeunes talents",
    description:
      "Malgré un coût de formation compétitif, de nombreux étudiants ne peuvent poursuivre leur formation faute de moyens financiers. Chaque année, plusieurs abandonnent leurs études ou renoncent à rejoindre notre établissement.",
    icon: "🎓", // Icône pour l'accès à l'éducation
  },
  {
    title: "Impact des bourses",
    description:
      "Les bourses représentent une solution clé pour permettre aux jeunes issus de milieux défavorisés d’accéder à une éducation de qualité, encourager les étudiants méritants à poursuivre leurs études sans contrainte financière et offrir des opportunités internationales.",
    icon: "💡", // Icône pour l'impact des bourses
  },
  {
    title: "Opportunités internationales",
    description:
      "Les bourses offrent des opportunités pour poursuivre des formations à l’étranger, ouvrant ainsi les portes à des expériences éducatives et professionnelles globales.",
    icon: "🌍", // Icône pour les opportunités internationales
  },
];
const educationScholarshipsEn = [
  {
    title: "Limited access for many young talents",
    description:
      "Despite competitive training costs, many students cannot continue their education due to financial constraints. Every year, several students drop out or give up on joining our institution.",
    icon: "🎓", // Icon for access to education
  },
  {
    title: "Impact of scholarships",
    description:
      "Scholarships are a key solution to allow young people from disadvantaged backgrounds to access quality education, encourage deserving students to continue their studies without financial constraints, and offer international opportunities.",
    icon: "💡", // Icon for the impact of scholarships
  },
  {
    title: "International opportunities",
    description:
      "Scholarships offer opportunities to pursue studies abroad, thus opening doors to global educational and professional experiences.",
    icon: "🌍", // Icon for international opportunities
  },
];

const WhyCollaborateSection = () => {
  const { language } = useLanguageContext();
  const educationScholarships =
    language === "fr" ? educationScholarshipsFr : educationScholarshipsEn;
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat px-6 py-16"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dx3xhdaym/image/upload/v1737619971/fs_mfhvnc.jpg')", // Lien d'une image de fond
      }}
    >
      {/* Overlay pour assombrir l'image */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenu de la section */}
      <div className="relative z-10 mx-auto max-w-6xl text-center text-white">
        <h1 className="mb-12 text-4xl font-extrabold text-indigo-700">
          {language === "fr"
            ? "Pourquoi un partenariat financier et stratégique est essentiel ?"
            : "Why is a financial and strategic partnership essential?"}
        </h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {educationScholarships.map((item, index) => (
            <div
              key={index}
              className="relative flex transform flex-col items-start overflow-hidden rounded-xl bg-white p-8 text-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icône flottante */}
              <div className="absolute right-0 top-0 -mr-6 -mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-3xl text-indigo-600 shadow">
                {item.icon}
              </div>

              {/* Titre */}
              <h2 className="mt-6 text-2xl font-bold text-indigo-600">
                {item.title}
              </h2>

              {/* Description */}
              <p className="mt-4 leading-relaxed text-gray-700">
                {item.description}
              </p>

              {/* Effet visuel */}
              <div className="absolute inset-0 z-[-1] rounded-xl bg-gradient-to-br from-indigo-50 to-white opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const structuralProjectsSupportFr = [
  {
    title: "Financement du village numérique",
    description:
      "E-media prévoit la construction d’un village numérique, un espace éducatif intégré avec des laboratoires technologiques, des studios audiovisuels, des incubateurs de projets créatifs et des logements étudiants.",
    icon: "🏙️", // Icône pour le village numérique
  },
  {
    title: "Acquisition de matériels pédagogiques modernes",
    description:
      "Les besoins en équipements (ordinateurs, caméras, logiciels avancés, équipements sonores) sont essentiels pour offrir une formation alignée sur les standards internationaux.",
    icon: "💻", // Icône pour l'acquisition de matériels
  },
];
const structuralProjectsSupportEn = [
  {
    title: "Funding for the Digital Village",
    description:
      "E-media plans to build a digital village, an integrated educational space with technology laboratories, audiovisual studios, creative project incubators, and student housing.",
    icon: "🏙️", // Icon for the digital village
  },
  {
    title: "Acquisition of Modern Educational Equipment",
    description:
      "The need for equipment (computers, cameras, advanced software, sound equipment) is essential to provide training aligned with international standards.",
    icon: "💻", // Icon for the acquisition of equipment
  },
];

const StructuralProjectsSupport = () => {
  const { language } = useLanguageContext();
  const structuralProjectsSupport =
    language === "fr"
      ? structuralProjectsSupportFr
      : structuralProjectsSupportEn;
  return (
    <div className="px-6 py-16">
      {/* Contenu de la section */}
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="mb-12 text-4xl font-extrabold text-indigo-700">
          {language === "fr"
            ? "Soutenir des projets structurants"
            : "Supporting Structural Projects"}
        </h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {structuralProjectsSupport.map((item, index) => (
            <div
              key={index}
              className="relative flex transform flex-col items-start overflow-hidden rounded-xl bg-white p-8 text-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icône flottante */}
              <div className="absolute right-0 top-0 -mr-6 -mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-3xl text-indigo-600 shadow">
                {item.icon}
              </div>

              {/* Titre */}
              <h2 className="mt-6 text-2xl font-bold text-indigo-600">
                {item.title}
              </h2>

              {/* Description */}
              <p className="mt-4 leading-relaxed text-gray-700">
                {item.description}
              </p>

              {/* Effet visuel */}
              <div className="absolute inset-0 z-[-1] rounded-xl bg-gradient-to-br from-indigo-50 to-white opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const creativeProjectsSupportFr = [
  {
    title: "Incubateurs de talents",
    description:
      "Investissez dans la création d’incubateurs pour accompagner les étudiants dans le développement de projets créatifs et entrepreneuriaux dans les domaines de l’audiovisuel, de la technologie et de l’innovation sociale.",
    icon: "💡", // Vous pouvez remplacer cette icône par une autre
  },
  {
    title: "Mécénat culturel",
    description:
      "Financez des productions audiovisuelles ou des projets artistiques qui valorisent les talents locaux tout en renforçant votre image de marque comme partenaire engagé pour la culture.",
    icon: "🎭", // Vous pouvez remplacer cette icône par une autre
  },
];
const creativeProjectsSupportEn = [
  {
    title: "Talent Incubators",
    description:
      "Invest in the creation of incubators to support students in developing creative and entrepreneurial projects in the fields of audiovisual, technology, and social innovation.",
    icon: "💡", // You can replace this icon with another
  },
  {
    title: "Cultural Sponsorship",
    description:
      "Fund audiovisual productions or artistic projects that showcase local talents while strengthening your brand image as a committed partner for culture.",
    icon: "🎭", // You can replace this icon with another
  },
];

const CreativeProjectsSupport = () => {
  const { language } = useLanguageContext();
  const creativeProjectsSupport =
    language === "fr" ? creativeProjectsSupportFr : creativeProjectsSupportEn;
  return (
    <div className="relative px-6 py-16">
      {/* Contenu principal */}
      <div className="mx-auto max-w-7xl text-center text-white">
        {/* Titre de la section */}
        <h1 className="mb-12 text-4xl font-extrabold text-indigo-700">
          {language === "fr"
            ? "Incubation et soutien aux projets créatifs"
            : "Incubation and Support for Creative Projects"}
        </h1>

        {/* Grille de cartes */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {creativeProjectsSupport.map((opportunity, index) => (
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

const opportunitiesFr = [
  {
    title: "Création de programmes de bourses",
    description: [
      "Bourses pour financer les frais de scolarité des étudiants défavorisés ou méritants.",
      "Bourses de mobilité pour permettre aux étudiants de poursuivre leurs formations à l’international.",
      "Soutien pour des bourses spécifiques aux jeunes filles et aux groupes sous-représentés dans les secteurs technologiques et audiovisuels.",
    ],
    icon: "🎓",
  },
  {
    title: "Soutien aux projets d’infrastructure",
    description: [
      "Investir dans le village numérique, un projet phare pour transformer l’apprentissage et renforcer l’écosystème éducatif et numérique à Madagascar.",
      "Aider à équiper les laboratoires, studios et infrastructures nécessaires pour maintenir une qualité d’enseignement exemplaire.",
    ],
    icon: "🏗️",
  },
  {
    title: "Partenariat pour les incubateurs",
    description: [
      "Collaborer pour soutenir les jeunes talents en leur offrant des ressources financières et techniques pour concrétiser leurs projets créatifs ou entrepreneuriaux.",
      "Accueillir et financer des projets innovants issus des étudiants et enseignants d’E-media.",
    ],
    icon: "🚀",
  },
];
const opportunitiesEn = [
  {
    title: "Creation of Scholarship Programs",
    description: [
      "Scholarships to fund tuition fees for underprivileged or deserving students.",
      "Mobility scholarships to allow students to pursue their studies internationally.",
      "Support for scholarships specifically for young girls and underrepresented groups in technology and audiovisual sectors.",
    ],
    icon: "🎓",
  },
  {
    title: "Support for Infrastructure Projects",
    description: [
      "Invest in the digital village, a flagship project to transform learning and strengthen the educational and digital ecosystem in Madagascar.",
      "Help equip laboratories, studios, and necessary infrastructures to maintain exemplary teaching quality.",
    ],
    icon: "🏗️",
  },
  {
    title: "Partnership for Incubators",
    description: [
      "Collaborate to support young talents by providing financial and technical resources to bring their creative or entrepreneurial projects to life.",
      "Host and fund innovative projects from E-media's students and teachers.",
    ],
    icon: "🚀",
  },
];

const CollaborationOpportunities = ({ opportunities }) => {
  const { language } = useLanguageContext();
  return (
    <div className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="mb-20 text-4xl font-extrabold text-indigo-700">
          {language === "fr"
            ? "Opportunités de Collaboration pour les Partenaires"
            : "Collaboration Opportunities for Partners"}
        </h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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

const partnershipOpportunitiesFr = [
  {
    title: "Contribuez à rendre l’éducation accessible",
    description:
      "Rendre l’éducation accessible à une jeunesse talentueuse mais économiquement vulnérable.",
    icon: "📚", // Icône personnalisée ou un autre symbole
  },
  {
    title: "Investissez dans le futur de Madagascar",
    description:
      "Soutenez des initiatives éducatives et technologiques durables pour le développement de Madagascar et de l’Océan Indien.",
    icon: "🌍", // Icône personnalisée ou un autre symbole
  },
  {
    title: "Faites partie d’une transformation positive",
    description:
      "Aidez à bâtir des infrastructures modernes, développez des talents locaux et soutenez des projets créatifs à fort impact.",
    icon: "💡", // Icône personnalisée ou un autre symbole
  },
];
const partnershipOpportunitiesEn = [
  {
    title: "Contribute to Making Education Accessible",
    description:
      "Make education accessible to a talented yet economically vulnerable youth.",
    icon: "📚", // Custom icon or another symbol
  },
  {
    title: "Invest in the Future of Madagascar",
    description:
      "Support sustainable educational and technological initiatives for the development of Madagascar and the Indian Ocean region.",
    icon: "🌍", // Custom icon or another symbol
  },
  {
    title: "Be Part of a Positive Transformation",
    description:
      "Help build modern infrastructures, develop local talents, and support high-impact creative projects.",
    icon: "💡", // Custom icon or another symbol
  },
];

const Partnership = () => {
  const { language } = useLanguageContext();
  const partnershipOpportunities =
    language === "fr" ? partnershipOpportunitiesFr : partnershipOpportunitiesEn;
  return (
    <div className="relative px-6 py-16">
      {/* Contenu principal */}
      <div className="mx-auto max-w-7xl text-center text-white">
        {/* Titre de la section */}
        <h1 className="mb-20 text-4xl font-extrabold text-indigo-700">
          {language === "fr"
            ? "Un partenariat pour un avenir équitable et innovant"
            : "A Partnership for a Fair and Innovative Future"}
        </h1>

        {/* Grille de cartes */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {partnershipOpportunities.map((opportunity, index) => (
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

//  Un partenariat pour un avenir équitable et innovant
