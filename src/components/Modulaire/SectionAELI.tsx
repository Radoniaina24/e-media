"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importer les styles d'AOS
import Header from "../Licence/Header";
import Section from "../Licence/Section";
import CardCFP from "../CFP/CardCFP";
import ScrollComponent from "../Scroll/ScrollComponent";
import { useLanguageContext } from "@/lib/context/LanguageContext";

export default function SectionAELI() {
  const { language } = useLanguageContext();
  const programsFr = [
    {
      title: "Gestion de Projet Agile",
      description:
        "Adopter les méthodologies Scrum et Kanban pour une gestion flexible et efficace.",
    },
    {
      title: "Leadership Transformationnel en Entreprise",
      description:
        "Techniques pour inspirer, motiver et accompagner les équipes vers le changement.",
    },
    {
      title: "Entrepreneuriat en Agrobusiness",
      description:
        "Identifier les opportunités dans l’agriculture durable et développer des projets viables.",
    },
    {
      title: "Introduction aux Énergies Renouvelables",
      description:
        "Comprendre les systèmes solaires, éoliens et autres sources d’énergie verte pour proposer des solutions durables.",
    },
    {
      title: "Techniques de Négociation pour Leaders",
      description:
        "Renforcer les capacités d’influence, de persuasion et de gestion des conflits.",
    },
    {
      title: "Design Thinking et Innovation",
      description:
        "Stimuler la créativité et résoudre des problèmes complexes grâce à une approche centrée sur l’utilisateur.",
    },
    {
      title: "Finance pour Entrepreneurs",
      description:
        "Apprendre les bases de la gestion financière, des levées de fonds et de l’élaboration d’un business plan.",
    },
    {
      title: "Création et Gestion de Startups",
      description:
        "De l’idée au marché : étapes pour lancer et développer une entreprise innovante.",
    },
    {
      title: "Management Durable et Éthique",
      description:
        "Implémenter des pratiques responsables et durables dans la gestion d’entreprise.",
    },
    {
      title: "Entrepreneuriat Social",
      description:
        "Créer des projets qui combinent impact social et viabilité économique.",
    },
    {
      title: "Marketing Digital pour Entrepreneurs",
      description:
        "Stratégies pour construire une marque forte et acquérir des clients en ligne.",
    },
    {
      title: "Leadership Inclusif et Diversité",
      description:
        "Créer des environnements inclusifs qui valorisent les talents diversifiés.",
    },
    {
      title: "Résilience et Adaptabilité pour Leaders",
      description:
        "Renforcer les compétences pour surmonter les crises et s’adapter à des environnements changeants.",
    },
    {
      title: "Introduction à la Logistique et Supply Chain",
      description:
        "Comprendre les bases de la gestion des chaînes d’approvisionnement pour des entreprises performantes.",
    },
    {
      title: "Analyse des Données pour la Prise de Décision",
      description:
        "Apprendre à exploiter les données pour orienter les stratégies et décisions d’entreprise.",
    },
    {
      title: "Entrepreneuriat dans les Industries Culturelles et Créatives",
      description:
        "Capitaliser sur les ressources culturelles pour créer des entreprises innovantes.",
    },
    {
      title: "Leadership et Communication en Contexte de Crise",
      description:
        "Développer des stratégies de communication efficaces pour gérer les crises et maintenir la confiance.",
    },
    {
      title: "Entrepreneuriat et Financement Vert",
      description:
        "Identifier et mobiliser des financements pour des projets respectueux de l’environnement.",
    },
    {
      title: "Impact Investing et Mesure de l’Impact",
      description:
        "Comprendre comment investir pour générer à la fois un rendement financier et un impact social ou environnemental.",
    },
    {
      title: "Intelligence Émotionnelle pour Managers",
      description:
        "Utiliser l’intelligence émotionnelle pour améliorer les relations professionnelles et le leadership.",
    },
  ];
  const programsEn = [
    {
      title: "Agile Project Management",
      description:
        "Adopt Scrum and Kanban methodologies for flexible and efficient project management.",
    },
    {
      title: "Transformational Leadership in Business",
      description:
        "Techniques to inspire, motivate, and guide teams towards change.",
    },
    {
      title: "Entrepreneurship in Agrobusiness",
      description:
        "Identify opportunities in sustainable agriculture and develop viable projects.",
    },
    {
      title: "Introduction to Renewable Energies",
      description:
        "Understand solar, wind, and other green energy systems to propose sustainable solutions.",
    },
    {
      title: "Negotiation Techniques for Leaders",
      description:
        "Enhance influence, persuasion, and conflict management skills.",
    },
    {
      title: "Design Thinking and Innovation",
      description:
        "Stimulate creativity and solve complex problems with a user-centered approach.",
    },
    {
      title: "Finance for Entrepreneurs",
      description:
        "Learn the basics of financial management, fundraising, and business plan development.",
    },
    {
      title: "Startup Creation and Management",
      description:
        "From idea to market: steps to launch and grow an innovative business.",
    },
    {
      title: "Sustainable and Ethical Management",
      description:
        "Implement responsible and sustainable practices in business management.",
    },
    {
      title: "Social Entrepreneurship",
      description:
        "Create projects that combine social impact and economic viability.",
    },
    {
      title: "Digital Marketing for Entrepreneurs",
      description:
        "Strategies to build a strong brand and acquire customers online.",
    },
    {
      title: "Inclusive Leadership and Diversity",
      description: "Create inclusive environments that value diverse talents.",
    },
    {
      title: "Resilience and Adaptability for Leaders",
      description:
        "Strengthen skills to overcome crises and adapt to changing environments.",
    },
    {
      title: "Introduction to Logistics and Supply Chain",
      description:
        "Understand the basics of supply chain management for high-performing businesses.",
    },
    {
      title: "Data Analysis for Decision Making",
      description:
        "Learn to leverage data to guide business strategies and decisions.",
    },
    {
      title: "Entrepreneurship in Cultural and Creative Industries",
      description:
        "Leverage cultural resources to create innovative businesses.",
    },
    {
      title: "Leadership and Communication in Crisis Contexts",
      description:
        "Develop effective communication strategies to manage crises and maintain trust.",
    },
    {
      title: "Entrepreneurship and Green Financing",
      description:
        "Identify and mobilize funding for environmentally-friendly projects.",
    },
    {
      title: "Impact Investing and Measuring Impact",
      description:
        "Learn how to invest to generate both financial returns and social or environmental impact.",
    },
    {
      title: "Emotional Intelligence for Managers",
      description:
        "Use emotional intelligence to improve professional relationships and leadership.",
    },
  ];
  const programs = language === "fr" ? programsFr : programsEn;
  const atoutFr = [
    {
      title: "Approche Holistique",
      description:
        "AELI intègre des aspects techniques, managériaux et éthiques dans ses formations, assurant une préparation complète des participants aux réalités du monde professionnel.",
    },
    {
      title: "Réseau d’Experts",
      description:
        "L’institut collabore avec des professionnels et des académiciens reconnus, offrant aux apprenants une perspective pratique et actuelle des défis et opportunités dans leurs domaines respectifs.",
    },
    {
      title: "Programmes Personnalisés",
      description:
        "Les formations sont adaptées aux besoins spécifiques des individus et des organisations, permettant une application directe des compétences acquises.",
    },
    {
      title: "Focus sur l’Innovation",
      description:
        "AELI encourage la pensée créative et l’innovation, aidant les participants à développer des solutions uniques aux problèmes contemporains.",
    },
    {
      title: "Engagement envers le Développement Durable",
      description:
        "L’institut met l’accent sur des pratiques durables et éthiques, formant des leaders conscients de leur impact sur la société et l’environnement.",
    },
  ];
  const atoutEn = [
    {
      title: "Holistic Approach",
      description:
        "AELI integrates technical, managerial, and ethical aspects into its training programs, ensuring comprehensive preparation for participants in the professional world.",
    },
    {
      title: "Network of Experts",
      description:
        "The institute collaborates with recognized professionals and academics, providing learners with a practical and up-to-date perspective on the challenges and opportunities in their respective fields.",
    },
    {
      title: "Customized Programs",
      description:
        "The training programs are tailored to the specific needs of individuals and organizations, allowing for the immediate application of acquired skills.",
    },
    {
      title: "Focus on Innovation",
      description:
        "AELI fosters creative thinking and innovation, helping participants develop unique solutions to contemporary problems.",
    },
    {
      title: "Commitment to Sustainable Development",
      description:
        "The institute emphasizes sustainable and ethical practices, training leaders who are aware of their impact on society and the environment.",
    },
  ];
  const atout = language === "fr" ? atoutFr : atoutEn;
  const methodsFr = [
    {
      title: "Ateliers Interactifs",
      description: "Favoriser l’apprentissage par la pratique.",
    },
    {
      title: "Cas Pratiques et Simulations",
      description: "Basés sur des scénarios réels pour une immersion totale.",
    },
    {
      title: "Encadrement Personnalisé",
      description: "Coaching par des experts nationaux et internationaux.",
    },
    {
      title: "Supports Digitaux Modernes",
      description:
        "Accès à des ressources en ligne pour prolonger l’apprentissage.",
    },
  ];
  const methodsEn = [
    {
      title: "Interactive Workshops",
      description: "Promote learning through hands-on practice.",
    },
    {
      title: "Practical Cases and Simulations",
      description: "Based on real-world scenarios for total immersion.",
    },
    {
      title: "Personalized Guidance",
      description: "Coaching by national and international experts.",
    },
    {
      title: "Modern Digital Resources",
      description: "Access to online materials to extend learning.",
    },
  ];
  const methods = language === "fr" ? methodsFr : methodsEn;

  const atout2Fr = [
    {
      title: "Expertise Reconnue",
      description:
        "Nos institutions sont leaders dans leurs domaines respectifs, garantissant une formation de qualité.",
    },
    {
      title: "Partenariats Stratégiques",
      description:
        "Collaboration avec des experts internationaux et des entreprises de renom.",
    },
    {
      title: "Infrastructure de Pointe",
      description:
        "Plateformes technologiques avancées et studios professionnels.",
    },
    {
      title: "Programmes Adaptés",
      description:
        "Conception sur mesure pour répondre aux besoins spécifiques des organisations.",
    },
    {
      title: "Flexibilité Logistique",
      description:
        "Formations disponibles en présentiel, en ligne ou hybrides.",
    },
  ];
  const atout2En = [
    {
      title: "Recognized Expertise",
      description:
        "Our institutions are leaders in their respective fields, ensuring high-quality training.",
    },
    {
      title: "Strategic Partnerships",
      description:
        "Collaboration with international experts and renowned companies.",
    },
    {
      title: "State-of-the-Art Infrastructure",
      description: "Advanced technological platforms and professional studios.",
    },
    {
      title: "Tailored Programs",
      description:
        "Custom-designed programs to meet the specific needs of organizations.",
    },
    {
      title: "Logistical Flexibility",
      description: "Training available in-person, online, or hybrid formats.",
    },
  ];
  const atout2 = language === "fr" ? atout2Fr : atout2En;
  const benefitsFr = [
    {
      title: "Amélioration de la Productivité",
      description: "Employés mieux formés et plus efficaces.",
    },
    {
      title: "Montée en Compétences Ciblées",
      description: "Acquisition de savoir-faire précis et opérationnels.",
    },
    {
      title: "Valorisation des Talents",
      description:
        "Renforcement de la motivation et de la rétention des collaborateurs.",
    },
    {
      title: "Réduction des Coûts",
      description:
        "Programmes intensifs et courts, limitant l’impact sur les activités quotidiennes.",
    },
  ];
  const benefitsEn = [
    {
      title: "Improved Productivity",
      description: "Better-trained and more efficient employees.",
    },
    {
      title: "Targeted Skill Enhancement",
      description: "Acquisition of specific and practical expertise.",
    },
    {
      title: "Talent Recognition",
      description: "Increased motivation and employee retention.",
    },
    {
      title: "Cost Reduction",
      description:
        "Intensive and short programs, minimizing impact on daily operations.",
    },
  ];
  const benefits = language === "fr" ? benefitsFr : benefitsEn;
  const detailsFr = [
    {
      title: "Durée",
      description: "Entre 1 et 4 semaines, selon le module choisi.",
    },
    {
      title: "Lieu",
      description: "Dans nos infrastructures modernes “Emedia Nanisana”.",
    },
    {
      title: "Tarification",
      description:
        "Forfaitaire et compétitive, adaptée à la taille et aux besoins des groupes.",
    },
    {
      title: "Inscription",
      description:
        "Via notre plateforme en ligne ou par contact direct avec notre équipe.",
    },
  ];
  const detailsEn = [
    {
      title: "Duration",
      description: "Between 1 and 4 weeks, depending on the chosen module.",
    },
    {
      title: "Location",
      description: "At our modern facilities “Emedia Nanisana”.",
    },
    {
      title: "Pricing",
      description:
        "Fixed and competitive, tailored to the size and needs of the groups.",
    },
    {
      title: "Registration",
      description:
        "Through our online platform or by direct contact with our team.",
    },
  ];
  const details = language === "fr" ? detailsFr : detailsEn;
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Type d'animation
    });
  }, []);
  const title =
    language === "fr"
      ? "AELI : L’AFRICAN ENTREPRENEURSHIP AND LEADERSHIP INSTITUTE"
      : " AELI: THE AFRICAN ENTREPRENEURSHIP AND LEADERSHIP INSTITUTE";
  const subtitle =
    language === "fr"
      ? "L’African Entrepreneurship and Leadership Institute (AELI) est une institution dédiée à la formation de leaders et d’entrepreneurs en Afrique. Elle se distingue par une approche holistique, visant à doter les individus des compétences nécessaires pour innover et créer de la valeur dans divers secteurs."
      : " The African Entrepreneurship and Leadership Institute (AELI) is an institution dedicated to training leaders and entrepreneurs in Africa. It stands out for its holistic approach, aiming to equip individuals with the skills needed to innovate and create value across various sectors.";
  return (
    <div>
      {/* Header */}
      <HeaderAeli
        id="aeli"
        title={title}
        subtitle={subtitle}
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736949226/Fond-AELI-_-L_AFRICAN-ENTREPRENEURSHIP-AND-LEADERSHIP-INSTITUTE_1_y9ft0a.jpg"
      />
      <div
        id="aeli"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <ScrollComponent text="AELI : L’AFRICAN ENTREPRENEURSHIP AND LEADERSHIP INSTITUTE" />
        <Section
          title={
            language === "fr" ? "Identité et Mission" : "Identity and Mission"
          }
          content={
            language === "fr"
              ? "AELI se consacre à la promotion de l’entrepreneuriat et du leadership transformationnel. L’institut offre des programmes conçus pour stimuler l’innovation, la gestion de projet agile, le leadership en entreprise, l’agrobusiness, les énergies renouvelables et les techniques de négociation. L’objectif est de former des leaders capables de relever les défis contemporains et de contribuer au développement durable du continent africain."
              : "AELI is dedicated to promoting entrepreneurship and transformational leadership. The institute offers programs designed to foster innovation, agile project management, leadership in business, agribusiness, renewable energies, and negotiation techniques. The goal is to train leaders capable of facing contemporary challenges and contributing to the sustainable development of the African continent."
          }
        ></Section>
        <Section bgColor="bg-gray-200">
          <h2 className=" my-10 mb-14  text-xl font-semibold dark:text-white">
            {language === "fr" ? "Atouts Distinctifs" : "Atouts Distinctifs"}
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
          title={
            language === "fr" ? "Programmes Innovants" : "Innovative Programs"
          }
          content={
            language === "fr"
              ? "AELI propose une gamme de programmes couvrant des domaines tels que la gestion de projet agile, le leadership transformationnel, l’entrepreneuriat en agrobusiness, les énergies renouvelables et les techniques de négociation. Ces formations sont conçues pour être attrayantes et pertinentes, répondant aux besoins actuels du marché et aux aspirations des professionnels africains."
              : "AELI offers a range of programs covering areas such as agile project management, transformational leadership, entrepreneurship in agribusiness, renewable energies, and negotiation techniques. These programs are designed to be engaging and relevant, addressing the current market needs and the aspirations of African professionals."
          }
        ></Section>
        <Section
          bgColor="bg-gray-200"
          title={language === "fr" ? "Vision" : "Vision"}
          content={
            language === "fr"
              ? "AELI aspire à être un catalyseur de changement en Afrique, en formant des leaders et des entrepreneurs capables de transformer leurs communautés et de contribuer positivement à l’économie mondiale. En mettant l’accent sur l’innovation, l’éthique et le développement durable, l’institut joue un rôle crucial dans la préparation de la prochaine génération de leaders africains."
              : "AELI aspires to be a catalyst for change in Africa, training leaders and entrepreneurs who can transform their communities and contribute positively to the global economy. By focusing on innovation, ethics, and sustainable development, the institute plays a crucial role in preparing the next generation of African leaders."
          }
        />
        <Section bgColor="bg-gray-200">
          <div className="mx-auto mt-8 max-w-3xl rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <p className="text-xl  leading-relaxed text-gray-800 dark:text-gray-300">
              {language === "fr"
                ? "En somme, l'African Entrepreneurship and Leadership Institute se positionne comme un acteur clé dans le paysage éducatif africain, offrant des formations de qualité qui répondent aux défis et aux opportunités du continent."
                : "In summary, the African Entrepreneurship and Leadership Institute positions itself as a key player in the African educational landscape, offering high-quality training that addresses the challenges and opportunities of the continent."}
            </p>
          </div>
        </Section>
        <Section bgColor="bg-gray-200">
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

        <div className="mx-auto my-10 max-w-2xl rounded-lg bg-gray-300 p-6 shadow-md dark:bg-gray-800">
          <p className="text-lg font-medium leading-relaxed text-gray-700 dark:text-gray-300">
            {language === "fr"
              ? "Ces thèmes visent à préparer des leaders visionnaires, capables d'innover et de faire face aux défis contemporains, tout en favorisant la création de valeur durable."
              : "These themes aim to prepare visionary leaders capable of innovating and facing contemporary challenges, while fostering the creation of sustainable value."}
          </p>
        </div>

        <Section bgColor="bg-gray-200">
          <h2 className=" my-10 mb-14  text-xl font-semibold dark:text-white">
            {language === "fr"
              ? "Approche Méthodologique"
              : "Methodological Approach "}
          </h2>
          <h4 className=" mb-10 text-start text-lg  leading-relaxed text-gray-800 dark:text-gray-300">
            {language === "fr"
              ? "Les formations suivent une approche structurée et dynamique pour maximiser l'impact."
              : "The training programs follow a structured and dynamic approach to maximize impact."}
          </h4>
          <div className=" grid grid-cols-1 justify-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {methods.map((point, index) => (
              <CardCFP
                key={index}
                title={point.title}
                description={point.description}
              />
            ))}
          </div>
        </Section>

        <Section>
          <h2 className=" my-10 mb-14 text-2xl font-semibold dark:text-white">
            {language === "fr" ? "Nos Atouts" : "Our Strengths"}
          </h2>
          <div className=" grid grid-cols-1 justify-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {atout2.map((point, index) => (
              <CardCFP
                key={index}
                title={point.title}
                description={point.description}
              />
            ))}
          </div>
        </Section>
        <Section bgColor="bg-gray-200">
          <h2 className=" my-10 mb-14 text-2xl font-semibold dark:text-white">
            {language === "fr"
              ? "Avantages pour les Entreprises"
              : "Benefits for Businesses"}
          </h2>
          <div className=" grid grid-cols-1 justify-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((point, index) => (
              <CardCFP
                key={index}
                title={point.title}
                description={point.description}
              />
            ))}
          </div>
        </Section>

        <Section>
          <h2 className=" my-10 mb-14 text-2xl font-semibold dark:text-white">
            {language === "fr"
              ? "Modalités Pratiques pour chaque établissement :"
              : "Practical Modalities for Each Institution :"}
          </h2>
          <div className=" grid grid-cols-1 justify-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {details.map((point, index) => (
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

interface HeaderProps {
  id?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string; // Call to action text for the button
  ctaLink?: string; // URL for the call to action button
  imageSrc?: string;
}

const HeaderAeli: React.FC<HeaderProps> = ({
  title,
  id,
  subtitle,
  imageSrc = "/images/why/fond.jpg",
}) => {
  const { language } = useLanguageContext();
  return (
    <header className="relative h-screen w-full bg-cover bg-center py-16 text-white">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${imageSrc}")` }}
      ></div>

      {/* Contenu */}
      <div className="relative z-10 flex h-full items-center justify-center px-8 sm:justify-center md:justify-end">
        <div className=" max-w-xl space-y-6 text-right md:mr-32">
          {/* Titre */}
          <h1 className="text-shadow-lg text-center text-xl font-extrabold leading-tight sm:text-2xl md:text-3xl lg:text-4xl">
            {title.toLocaleUpperCase()}
          </h1>

          {/* Sous-titre */}
          <p className="text-md text-center font-light leading-relaxed text-gray-200 sm:text-lg lg:text-xl">
            {subtitle}
          </p>

          {/* Bouton */}
          <div className="text-center">
            <a
              href={"#" + id}
              className="inline-block transform rounded-full bg-primary px-6 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-blue-800"
            >
              {language === "fr" ? "Détails" : "Details"}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
