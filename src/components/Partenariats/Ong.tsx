import React from "react";
import SectionImageCity from "../city/SectionImageCity";
import { CheckCircleIcon } from "@heroicons/react/solid";
import PartnershipCard from "./PartnershipCard";
import ScrollComponentPartenariats from "./ScrollComponentPartenariats";
import { useLanguageContext } from "@/lib/context/LanguageContext";

export default function Ong() {
  const { language } = useLanguageContext();
  const partenariatsFr = {
    title: "Partenariat avec les ONG et Gouvernements",
    description:
      "E-media s’engage à être un catalyseur de changement pour les jeunes défavorisés de Madagascar, en utilisant son expertise en audiovisuel, numérique, et ingénierie pour répondre aux défis éducatifs, sociaux et culturels. Notre mission est de transformer l’éducation et la sensibilisation en des outils concrets pour améliorer la vie des jeunes issus de milieux vulnérables.",
  };
  const partenariatsEn = {
    title: "Partnership with NGOs and Governments",
    description:
      "E-media is committed to being a catalyst for change for disadvantaged youth in Madagascar, using its expertise in audiovisual, digital, and engineering fields to address educational, social, and cultural challenges. Our mission is to transform education and awareness into concrete tools to improve the lives of young people from vulnerable backgrounds.",
  };
  const partenariats = language === "fr" ? partenariatsFr : partenariatsEn;
  const partnershipForYouthMadagascarFr = [
    {
      title: "Éducation accessible à travers E-media",
      highlights: [
        {
          text: "Réduire les inégalités éducatives : De nombreux jeunes talentueux sont contraints d’abandonner leurs études faute de moyens financiers. Grâce à ses formations en ligne et en présentiel, E-media offre une plateforme accessible pour donner une chance à ces jeunes.",
        },
        {
          text: "Bourses pour la formation : E-media travaille avec des partenaires pour financer les frais de scolarité des jeunes défavorisés et leur fournir un accès gratuit ou subventionné à des formations de pointe.",
        },
        {
          text: "Formations adaptées aux besoins locaux : En combinant des compétences technologiques, audiovisuelles et culturelles, nos programmes aident les jeunes à acquérir des compétences directement applicables sur le marché du travail.",
        },
      ],
      imageSrc: "https://source.unsplash.com/1600x900/?education,youth",
      imageAlt: "Éducation accessible",
      imageOnRight: true,
    },
    {
      title: "Sensibilisation aux enjeux sociaux à travers l’audiovisuel",
      highlights: [
        {
          text: "Productions audiovisuelles engagées : E-media développe des documentaires, courts-métrages et vidéos éducatives mettant en lumière les défis sociaux et environnementaux auxquels les jeunes malagasy sont confrontés.",
        },
        {
          text: "Thématiques abordées : L’éducation pour tous, les droits des enfants et des jeunes, la préservation de l’environnement et les impacts des changements climatiques, et la lutte contre les inégalités de genre et l’autonomisation des jeunes filles.",
        },
        {
          text: "Diffusion massive : Ces contenus sont partagés à travers les réseaux d’E-media, les médias locaux, et les plateformes internationales, sensibilisant un large public et attirant l’attention sur ces causes.",
        },
      ],
      imageSrc: "https://source.unsplash.com/1600x900/?social,impact",
      imageAlt: "Sensibilisation sociale",
      imageOnRight: false,
    },
    {
      title: "Valorisation des talents à travers la culture et la créativité",
      highlights: [
        {
          text: "Un tremplin pour les jeunes créatifs : Madagascar regorge de talents artistiques et techniques souvent inexploités. E-media fournit un cadre pour les découvrir, les former et les connecter à des opportunités nationales et internationales.",
        },
        {
          text: "Mise en avant des cultures locales : En soutenant des projets créatifs qui célèbrent les traditions malagasy tout en les combinant avec des approches modernes, E-media contribue à la valorisation culturelle tout en offrant des opportunités professionnelles aux jeunes artistes.",
        },
      ],
      imageSrc: "https://source.unsplash.com/1600x900/?creativity,culture",
      imageAlt: "Valorisation culturelle",
      imageOnRight: true,
    },
    {
      title: "Un outil pour les ONG et gouvernements",
      highlights: [
        {
          text: "Formation et sensibilisation ciblée : E-media travaille avec les ONG et les institutions publiques pour produire des contenus éducatifs et de sensibilisation adaptés à leurs besoins, comme des campagnes sur la santé publique, l’inclusion sociale ou la protection de l’environnement.",
        },
        {
          text: "Impact local renforcé : Grâce à nos plateformes et infrastructures modernes, nous aidons à maximiser l’impact des initiatives gouvernementales et humanitaires en les connectant directement aux communautés malagasy.",
        },
      ],
      imageSrc: "https://source.unsplash.com/1600x900/?ngo,government",
      imageAlt: "Outil pour ONG",
      imageOnRight: false,
    },
  ];
  const partnershipForYouthMadagascarEn = [
    {
      title: "Accessible Education through E-media",
      highlights: [
        {
          text: "Reducing educational inequalities: Many talented young people are forced to abandon their studies due to lack of financial resources. Through its online and in-person training, E-media provides an accessible platform to give these youth a chance.",
        },
        {
          text: "Training scholarships: E-media works with partners to fund the tuition fees of underprivileged youth and provide them with free or subsidized access to advanced training.",
        },
        {
          text: "Training adapted to local needs: By combining technological, audiovisual, and cultural skills, our programs help youth acquire skills directly applicable in the job market.",
        },
      ],
      imageSrc: "https://source.unsplash.com/1600x900/?education,youth",
      imageAlt: "Accessible Education",
      imageOnRight: true,
    },
    {
      title: "Raising Awareness of Social Issues through Audiovisual Content",
      highlights: [
        {
          text: "Engaged audiovisual productions: E-media develops documentaries, short films, and educational videos highlighting the social and environmental challenges faced by Malagasy youth.",
        },
        {
          text: "Themes addressed: Education for all, children's and youth rights, environmental preservation, the impacts of climate change, and the fight against gender inequality and the empowerment of young girls.",
        },
        {
          text: "Mass distribution: These contents are shared through E-media's networks, local media, and international platforms, raising awareness among a large audience and drawing attention to these causes.",
        },
      ],
      imageSrc: "https://source.unsplash.com/1600x900/?social,impact",
      imageAlt: "Social Awareness",
      imageOnRight: false,
    },
    {
      title: "Valorizing Talents through Culture and Creativity",
      highlights: [
        {
          text: "A springboard for young creatives: Madagascar is full of artistic and technical talents often untapped. E-media provides a framework to discover, train, and connect them to national and international opportunities.",
        },
        {
          text: "Promoting local cultures: By supporting creative projects that celebrate Malagasy traditions while combining them with modern approaches, E-media contributes to cultural valorization while providing professional opportunities for young artists.",
        },
      ],
      imageSrc: "https://source.unsplash.com/1600x900/?creativity,culture",
      imageAlt: "Cultural Valorization",
      imageOnRight: true,
    },
    {
      title: "A Tool for NGOs and Governments",
      highlights: [
        {
          text: "Targeted training and awareness: E-media works with NGOs and public institutions to produce educational and awareness content tailored to their needs, such as campaigns on public health, social inclusion, or environmental protection.",
        },
        {
          text: "Enhanced local impact: With our modern platforms and infrastructures, we help maximize the impact of government and humanitarian initiatives by connecting them directly with Malagasy communities.",
        },
      ],
      imageSrc: "https://source.unsplash.com/1600x900/?ngo,government",
      imageAlt: "Tool for NGOs",
      imageOnRight: false,
    },
  ];
  const partnershipForYouthMadagascar =
    language === "fr"
      ? partnershipForYouthMadagascarFr
      : partnershipForYouthMadagascarEn;
  const initiativesWithEMedia =
    language === "fr" ? initiativesWithEMediaFr : initiativesWithEMediaEn;
  return (
    <div id="6" className="py-28">
      <ScrollComponentPartenariats text={partenariats.title} />
      <PartnershipCard subtitle={partenariats.description} />
      <h2 className="my-12 text-center text-4xl font-extrabold text-indigo-700">
        {language === "fr"
          ? "Pourquoi ce partenariat est essentiel pour les jeunes malagasy ?"
          : "Why is this partnership essential for Malagasy youth?"}
      </h2>
      <div className="space-y-16 px-6 py-12 ">
        {partnershipForYouthMadagascar.map((item, index) => (
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
      <InitiativesWithEMedia opportunities={initiativesWithEMedia} />
      <PartnershipInitiative />
      {language === "fr" ? (
        <div className="mx-auto my-12 max-w-3xl rounded-lg bg-blue-50 p-8 shadow-lg">
          <h2 className="mb-6 text-center text-2xl font-semibold text-blue-800">
            Avec E-media, transformons les défis sociaux en opportunités
          </h2>
          <p className="text-center text-lg leading-relaxed text-gray-700">
            Bâtissons un avenir où chaque jeune malagasy a une chance de
            réussir. En unissant nos efforts, nous pouvons créer un impact
            durable et offrir à chacun les moyens d&apos;atteindre ses
            ambitions.
          </p>
        </div>
      ) : (
        <div className="mx-auto my-12 max-w-3xl rounded-lg bg-blue-50 p-8 shadow-lg">
          <h2 className="mb-6 text-center text-2xl font-semibold text-blue-800">
            With E-media, let&apos;s turn social challenges into opportunities
          </h2>
          <p className="text-center text-lg leading-relaxed text-gray-700">
            Let&apos;s build a future where every Malagasy youth has a chance to
            succeed. By uniting our efforts, we can create a lasting impact and
            provide everyone with the means to achieve their ambitions.
          </p>
        </div>
      )}
    </div>
  );
}

const initiativesWithEMediaFr = [
  {
    title: "Bourses éducatives et mobilité internationale",
    description: [
      "Création de programmes de bourses permettant aux jeunes défavorisés de suivre des formations à E-media, couvrant les frais de scolarité, le matériel, et l’accompagnement.",
      "Opportunités de mobilité pour poursuivre des études ou des stages à l’étranger grâce à nos partenariats académiques internationaux.",
    ],
    icon: "🎓",
  },
  {
    title: "Campagnes de sensibilisation à fort impact",
    description: [
      "Production de contenus éducatifs pour sensibiliser à des problématiques clés comme la pauvreté, l’éducation, ou l’égalité des genres.",
      "Diffusion via E-media et ses partenaires pour atteindre des milliers de jeunes et communautés locales.",
    ],
    icon: "📢",
  },
  {
    title: "Incubation de projets créatifs et entrepreneuriaux",
    description: [
      "Soutien aux jeunes porteurs de projets innovants dans les secteurs créatifs et technologiques.",
      "Formation et mentorat pour transformer leurs idées en solutions concrètes.",
    ],
    icon: "🚀",
  },
  {
    title: "Valorisation des cultures et traditions",
    description: [
      "Organisation de festivals, projections, et ateliers mettant en avant la culture malagasy et ses talents émergents.",
      "Production de contenus collaboratifs avec des partenaires internationaux pour donner une visibilité globale aux cultures locales.",
    ],
    icon: "🌍",
  },
];
const initiativesWithEMediaEn = [
  {
    title: "Educational Scholarships and International Mobility",
    description: [
      "Creation of scholarship programs allowing disadvantaged youth to take courses at E-media, covering tuition fees, materials, and support.",
      "Mobility opportunities for studying or interning abroad through our international academic partnerships.",
    ],
    icon: "🎓",
  },
  {
    title: "High-Impact Awareness Campaigns",
    description: [
      "Production of educational content to raise awareness on key issues such as poverty, education, and gender equality.",
      "Dissemination through E-media and its partners to reach thousands of young people and local communities.",
    ],
    icon: "📢",
  },
  {
    title: "Incubation of Creative and Entrepreneurial Projects",
    description: [
      "Support for young innovators in the creative and technological sectors.",
      "Training and mentoring to transform their ideas into concrete solutions.",
    ],
    icon: "🚀",
  },
  {
    title: "Celebration of Cultures and Traditions",
    description: [
      "Organization of festivals, screenings, and workshops showcasing Malagasy culture and emerging talents.",
      "Production of collaborative content with international partners to give global visibility to local cultures.",
    ],
    icon: "🌍",
  },
];

const InitiativesWithEMedia = ({ opportunities }) => {
  const { language } = useLanguageContext();
  return (
    <div className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="mb-28 text-4xl font-extrabold text-indigo-700">
          {language === "fr"
            ? "Initiatives concrètes avec E-media"
            : "Concrete Initiatives with E-media"}
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
const partnershipInitiativeFr = [
  {
    title: "Accès pour tous",
    description:
      "En soutenant E-media, vous permettez à des milliers de jeunes défavorisés d’accéder à une éducation moderne et adaptée, essentielle pour leur avenir.",
    icon: "📘",
  },
  {
    title: "Sensibilisation à grande échelle",
    description:
      "Grâce à nos capacités de production audiovisuelle et numérique, nous touchons un large public et mettons en lumière des problématiques souvent négligées.",
    icon: "🌍",
  },
  {
    title: "Valorisation de la jeunesse et des talents",
    description:
      "En investissant dans l’éducation et la culture, vous contribuez à transformer des vies et à renforcer les communautés locales.",
    icon: "🌟",
  },
];
const partnershipInitiativeEn = [
  {
    title: "Access for All",
    description:
      "By supporting E-media, you enable thousands of disadvantaged youth to access modern and tailored education, which is essential for their future.",
    icon: "📘",
  },
  {
    title: "Awareness on a Large Scale",
    description:
      "Thanks to our audiovisual and digital production capabilities, we reach a wide audience and highlight issues that are often overlooked.",
    icon: "🌍",
  },
  {
    title: "Empowering Youth and Talents",
    description:
      "By investing in education and culture, you contribute to transforming lives and strengthening local communities.",
    icon: "🌟",
  },
];

const PartnershipInitiative = () => {
  const { language } = useLanguageContext();
  const partnershipInitiative =
    language === "fr" ? partnershipInitiativeFr : partnershipInitiativeEn;
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat px-6 py-16"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?technology,education')", // Lien d'une image de fond
      }}
    >
      {/* Overlay pour assombrir l'image */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenu de la section */}
      <div className="relative z-10 mx-auto max-w-6xl text-center text-white">
        <h1 className="mb-12  text-4xl font-extrabold text-indigo-700">
          {language === "fr"
            ? "Un partenariat pour transformer les causes en solutions"
            : "A partnership to transform causes into solutions."}
        </h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {partnershipInitiative.map((item, index) => (
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
