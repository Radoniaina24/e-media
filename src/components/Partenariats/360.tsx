import React from "react";
import SectionImageCity from "../city/SectionImageCity";
import { CheckCircleIcon } from "@heroicons/react/solid";
import ScrollComponentPartenariats from "./ScrollComponentPartenariats";
import PartnershipCard from "./PartnershipCard";
import { useLanguageContext } from "@/lib/context/LanguageContext";

export default function FormatPro360() {
  const { language } = useLanguageContext();
  const offreFormationFr = {
    title: "Formapro 360 : Solutions de formation sur mesure pour entreprises",
    description:
      "E-media lance Formapro 360, une nouvelle offre de formations modulaires personnalisées pour répondre aux besoins spécifiques des entreprises. Bénéficiez de notre expertise pour renforcer les compétences de vos équipes.",
  };
  const offreFormationEn = {
    title: "Formapro 360: Tailored Training Solutions for Businesses",
    description:
      "E-media launches Formapro 360, a new offer of customized modular training to meet the specific needs of businesses. Benefit from our expertise to enhance the skills of your teams.",
  };
  const offreFormation =
    language === "fr" ? offreFormationFr : offreFormationEn;
  const educationHighlights =
    language === "fr" ? educationHighlightsFr : educationHighlightsEn;
  const interventionDomains =
    language === "fr" ? interventionDomainsFr : interventionDomainsEn;
  return (
    <div id="7" className="py-28">
      <ScrollComponentPartenariats text={offreFormation.title} />
      <PartnershipCard subtitle={offreFormation.description} />
      <h1 className="m-auto my-12 max-w-[700px] text-3xl font-semibold text-indigo-700">
        {language === "fr"
          ? "Pourquoi collaborer avec E-Media ?"
          : "Why collaborate with E-Media?"}
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
      {language === "fr" ? (
        <div className="mx-auto my-12 max-w-4xl rounded-lg bg-green-50 p-8 text-center shadow-lg">
          <h2 className="m-auto mb-6 max-w-[700px]  text-2xl font-semibold text-green-800">
            Un partenariat pour des équipes performantes et efficaces
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            Avec <span className="font-semibold text-green-600">E-media</span>{" "}
            et <span className="font-semibold text-gray-700">Formapro 360</span>
            , transformez vos défis organisationnels en opportunités
            stratégiques grâce à des solutions de formation innovantes et
            personnalisées. Que ce soit pour renforcer les compétences
            techniques de vos équipes, améliorer leur leadership, ou les
            accompagner dans la transition numérique, nous sommes votre
            partenaire idéal.
          </p>
        </div>
      ) : (
        <div className="mx-auto my-12 max-w-4xl rounded-lg bg-green-50 p-8 text-center shadow-lg">
          <h2 className="m-auto mb-6 max-w-[700px] text-2xl font-semibold text-green-800">
            A partnership for high-performing and efficient teams
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            With <span className="font-semibold text-green-600">E-media</span>{" "}
            and{" "}
            <span className="font-semibold text-gray-700">Formapro 360</span>,
            transform your organizational challenges into strategic
            opportunities with innovative and personalized training solutions.
            Whether it&apos;s to strengthen your teams&apos; technical skills,
            improve their leadership, or support them through digital
            transformation, we are your ideal partner.
          </p>
        </div>
      )}
    </div>
  );
}

const educationHighlightsFr = [
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
const educationHighlightsEn = [
  {
    title: "Custom Training Tailored to Your Needs",
    highlights: [
      {
        text: "Complete customization: We design training programs tailored to your organization's specific objectives, whether it's technical strengthening, digital transformation, or strategic communication.",
      },
      {
        text: "Flexible formats: Online, in-person, or hybrid, our solutions adapt to your organizational and time constraints.",
      },
      {
        text: "Sector targeting: Whether you're a private company, public institution, or NGO, we offer modules tailored to your professional challenges.",
      },
    ],
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736083737/socio_ezfas1.jpg",
    imageAlt: "Custom training",
    imageOnRight: false,
  },
  {
    title: "Formapro 360: A Modular and Impactful Solution",
    highlights: [
      {
        text: "Modular approach: Short and intensive training, focused on specific skills for quick results.",
      },
      {
        text: "Focus on immediate impact: Each module is designed to directly address the operational needs of your teams.",
      },
      {
        text: "Continuous assessment: Measure the impact of the training before, during, and after, to ensure an optimal return on investment.",
      },
    ],
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736083737/socio_ezfas1.jpg",
    imageAlt: "Modular training",
    imageOnRight: true,
  },
  {
    title: "Expertise and Innovation by E-media",
    highlights: [
      {
        text: "Modern infrastructure: Our audiovisual studios, digital laboratories, and educational tools provide a high-level professional environment for your training.",
      },
      {
        text: "Proven expertise: Expertise in audiovisual, digital, engineering, and management, combined with national and international experience.",
      },
      {
        text: "Personalized support: Our trainers work with you to define and achieve your strategic objectives.",
      },
    ],
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736083737/socio_ezfas1.jpg",
    imageAlt: "Expertise and innovation",
    imageOnRight: false,
  },
];

const interventionDomainsFr = [
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
const interventionDomainsEn = [
  {
    title: "Audiovisual and Communication",
    description: [
      "Audiovisual production techniques: shooting, editing, directing.",
      "Digital communication and corporate storytelling.",
      "Creation of visual and audiovisual content for campaigns and projects.",
    ],
    icon: "🎥",
  },
  {
    title: "Digital and Technologies",
    description: [
      "Training on digital tools to improve productivity.",
      "Website development, digital marketing, and social media management.",
      "Digital security and data management for businesses and NGOs.",
    ],
    icon: "💻",
  },
  {
    title: "Management and Organization",
    description: [
      "Leadership development and team management.",
      "Project management, organizational strategy, and negotiation.",
      "Motivational techniques and strengthening of soft skills.",
    ],
    icon: "📊",
  },
  {
    title: "Sector Strengthening for NGOs and International Organizations",
    description: [
      "Production of educational and awareness-raising content.",
      "Communication for social change and impact campaigns.",
      "Training in humanitarian project management and monitoring-evaluation.",
    ],
    icon: "🌍",
  },
];

const InterventionDomains = ({ opportunities }) => {
  const { language } = useLanguageContext();
  return (
    <div className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="m-auto mb-28 max-w-[700px] text-4xl font-semibold text-indigo-700">
          {language === "fr"
            ? "Domaines d'intervention avec E-media et Formapro 360"
            : "Intervention Areas with E-media and Formapro 360"}
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
const businessSolutionsBenefitsFr = [
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
const businessSolutionsBenefitsEn = [
  {
    title: "Flexibility and Customization",
    description: "An offering that adapts to your specific needs and industry.",
    icon: "⚙️", // Icon representing flexibility and adaptability
  },
  {
    title: "Immediate Impact",
    description:
      "Practical training focused on concrete and measurable results.",
    icon: "🚀", // Icon symbolizing speed and immediate results
  },
  {
    title: "Recognized Expertise",
    description:
      "A team of qualified trainers, supported by E-media's modern infrastructure.",
    icon: "🎓", // Icon highlighting expertise and training
  },
  {
    title: "Innovation with Formapro 360",
    description:
      "An innovative modular approach for quick and targeted skill enhancement.",
    icon: "💡", // Icon representing innovation and new ideas
  },
];

const BusinessSolutionsBenefits = () => {
  const { language } = useLanguageContext();
  const businessSolutionsBenefits =
    language === "fr"
      ? businessSolutionsBenefitsFr
      : businessSolutionsBenefitsEn;
  return (
    <div className="relative px-6 py-16">
      {/* Contenu principal */}
      <div className="mx-auto max-w-7xl text-center text-white">
        {/* Titre de la section */}
        <h1 className="m-auto mb-12 max-w-[700px]  text-4xl font-semibold text-indigo-700">
          {language === "fr"
            ? "Avantages des solutions entreprises d'E-media et Formapro 360"
            : "Benefits of E-media's Business Solutions and Formapro 360"}
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
