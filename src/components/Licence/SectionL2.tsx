"use client";
import React from "react";
import Header from "./Header";
import Section from "./Section";
import Card from "./Card";
import CiblePublicCard from "../Master/CiblePublicCard";
import MasterCard from "../Master/MasterCard";
import ProgramCard from "../Master/ProgramCard";
import CallToAction from "./CallToAction";
import ScrollComponent from "../Scroll/ScrollComponent";
import { useLanguageContext } from "@/lib/context/LanguageContext";
export default function SectionL2() {
  const { language } = useLanguageContext();
  const currentWorldFr = [
    {
      title: "Tous les bacheliers",
      description:
        "Que vous soyez un nouveau diplômé ou un professionnel, cette formation s’adresse à tous ceux ayant obtenu leur baccalauréat.",
    },
    {
      title: "Les professionnels de la communication",
      description:
        "Une opportunité de perfectionner leurs compétences et d’élargir leurs horizons dans le numérique et l’audiovisuel.",
    },
    {
      title: "Les fonctionnaires et personnes en reconversion",
      description:
        "Idéale pour ceux souhaitant évoluer ou se repositionner dans leur carrière.",
    },
    {
      title: "Passionnés de l’apprentissage",
      description:
        "Parce qu’il n’y a pas d’âge pour apprendre, cette licence offre un accès à une expertise précieuse pour tous les curieux motivés par les métiers des médias et du numérique.",
    },
  ];
  const currentWorldEn = [
    {
      title: "All High School Graduates",
      description:
        "Whether you're a new graduate or a professional, this program is open to all individuals who have earned their high school diploma.",
    },
    {
      title: "Communication Professionals",
      description:
        "An opportunity to refine their skills and expand their horizons in the digital and audiovisual fields.",
    },
    {
      title: "Public Servants and Career Changers",
      description:
        "Ideal for those looking to evolve or reposition themselves in their careers.",
    },
    {
      title: "Learning Enthusiasts",
      description:
        "Because there's no age limit to learning, this Bachelor's degree offers access to valuable expertise for all curious individuals motivated by careers in media and digital fields.",
    },
  ];
  const currentWorld = language === "fr" ? currentWorldFr : currentWorldEn;

  const licencesFr = [
    {
      title: "L1",
      description:
        "10 mois pour acquérir les fondamentaux de la communication et de l’audiovisuel..",
    },
    {
      title: "L2",
      description:
        "10 mois pour approfondir les compétences techniques et pratiques.",
    },
    {
      title: "L3",
      description:
        " 10 mois pour se spécialiser et se préparer à l’entrée sur le marché professionnel.",
    },
  ];
  const licencesEn = [
    {
      title: "L1",
      description:
        "10 months to acquire the fundamentals of communication and audiovisual studies.",
    },
    {
      title: "L2",
      description: "10 months to deepen technical and practical skills.",
    },
    {
      title: "L3",
      description:
        "10 months to specialize and prepare for entry into the professional market.",
    },
  ];
  const licences = language === "fr" ? licencesFr : licencesEn;

  const careerPathsFr = [
    {
      title: "Audiovisuel, Cinéma et Télévision",
      details: [
        "Réalisateur ou assistant réalisateur",
        "Journaliste télévisé, animateur TV ou présentateur",
        "Cadreur, monteur vidéo, ou directeur de la photographie",
        "Sound designer, mixeur son, ou technicien son",
        "Spécialiste en production musicale",
        "Régisseur audiovisuel ou chef de plateau",
      ],
    },
    {
      title: "Médias numériques et Web",
      details: [
        "Web designer, développeur multimédia, ou technicien web",
        "Responsable de projet numérique ou consultant en communication digitale",
        "Créateur de contenu multimédia pour les plateformes de streaming, réseaux sociaux et sites web",
        "Storyteller numérique ou spécialiste en stratégie audiovisuelle numérique",
      ],
    },
    {
      title: "Communication et Entreprise",
      details: [
        "Responsable communication en entreprise ou en agence",
        "Marketer digital ou consultant en stratégie de contenu",
        "Expert en production audiovisuelle d’entreprise",
      ],
    },
  ];
  const careerPathsEn = [
    {
      title: "Audiovisual, Film, and Television",
      details: [
        "Director or Assistant Director",
        "Television Journalist, TV Host, or Presenter",
        "Cameraman, Video Editor, or Director of Photography",
        "Sound Designer, Sound Mixer, or Sound Technician",
        "Music Production Specialist",
        "Audiovisual Manager or Stage Manager",
      ],
    },
    {
      title: "Digital Media and Web",
      details: [
        "Web Designer, Multimedia Developer, or Web Technician",
        "Digital Project Manager or Digital Communication Consultant",
        "Multimedia Content Creator for streaming platforms, social media, and websites",
        "Digital Storyteller or Digital Audiovisual Strategy Specialist",
      ],
    },
    {
      title: "Communication and Business",
      details: [
        "Corporate Communication Manager or Agency Communication Manager",
        "Digital Marketer or Content Strategy Consultant",
        "Corporate Audiovisual Production Expert",
      ],
    },
  ];
  const careerPaths = language === "fr" ? careerPathsFr : careerPathsEn;
  const itemsFr = [
    "Infographie 3D",
    "Techniques du son et post-production",
    "Bases de la programmation et développement web",
    "Théorie de l’information et psychologie de la communication",
    "Gestion de projet et expression artistique",
    "Marketing fondamental",
  ];
  const itemsEn = [
    "3D Graphics",
    "Sound Techniques and Post-Production",
    "Basics of Programming and Web Development",
    "Information Theory and Communication Psychology",
    "Project Management and Artistic Expression",
    "Fundamental Marketing",
  ];
  const items = language === "fr" ? itemsFr : itemsEn;
  const title =
    language === "fr"
      ? "LICENCE EN COMMUNICATION AUDIOVISUELLE ET NUMÉRIQUE (CAN)"
      : "BACHELOR'S DEGREE IN AUDIOVISUAL AND DIGITAL COMMUNICATION (CAN)";
  const subtitle =
    language === "fr"
      ? "La Licence en Communication Audiovisuelle et Numérique (CAN) d'E-media est une formation unique et innovante, conçue pour répondre aux besoins actuels du marché du travail dans un monde de plus en plus tourné vers le numérique. Ce programme forme les futurs professionnels des médias, du cinéma, de la télévision, et du numérique, leur permettant de maîtriser les outils et compétences nécessaires pour exceller dans ces secteurs en pleine expansion."
      : "E-Media's Bachelor's Degree in Audiovisual and Digital Communication (CAN) is a unique and innovative program designed to meet the current demands of the job market in an increasingly digital world. This program trains the next generation of media, film, television, and digital professionals, equipping them with the tools and skills necessary to excel in these rapidly growing sectors.";
  return (
    <div>
      <Header
        id="sectionL2"
        title={title}
        subtitle={subtitle}
        imageSrc="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736658994/CAN_zy58fw.jpg"
      />
      <div
        id="sectionL2"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <ScrollComponent text={title} />
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
            {language === "fr"
              ? "Cette licence est ouverte à :"
              : "This Bachelor's degree is open to :"}
          </h3>

          <div className=" text-md mt-4 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {currentWorld.map((item, index) => (
              <CiblePublicCard key={index} data={item} />
            ))}
          </div>
        </Section>

        <Section
          title={
            language === "fr"
              ? "L’importance de la Communication Audiovisuelle et Numérique aujourd’hui"
              : "The Importance of Audiovisual and Digital Communication Today"
          }
          content={
            language === "fr"
              ? "Dans un monde où l’information et les médias numériques dominent, les compétences en communication audiovisuelle et numérique sont devenues indispensables. Avec l’explosion des plateformes de streaming, des réseaux sociaux, et des contenus numériques, les métiers de l’audiovisuel et du digital connaissent une forte demande à l’échelle mondiale."
              : "In a world where information and digital media dominate, skills in audiovisual and digital communication have become essential. With the explosion of streaming platforms, social media, and digital content, careers in audiovisual and digital fields are experiencing strong global demand."
          }
        >
          {language === "fr" ? (
            <p className="mt-4 text-lg text-gray-600">
              À Madagascar et dans l&apos;Océan Indien, les opportunités dans
              ces domaines se développent rapidement, notamment grâce à la
              croissance du secteur des médias, de la production
              cinématographique, et du numérique. E-Media est l&apos;unique
              université à Madagascar dont les formations en audiovisuel,
              cinématographie et ingénierie du son sont habilitées par le
              Ministère de l&apos;Enseignement Supérieur et de la Recherche
              Scientifique, offrant une formation exceptionnelle et reconnue.
              Cette licence vous prépare à répondre aux attentes des entreprises
              locales et internationales en matière de contenu et de stratégie
              numérique.
            </p>
          ) : (
            <p className="mt-4 text-lg text-gray-600">
              In Madagascar and the Indian Ocean region, opportunities in these
              fields are rapidly growing, particularly due to the expansion of
              the media, film production, and digital sectors. E-Media is the
              only university in Madagascar whose programs in audiovisual
              communication, cinematography, and sound engineering are
              accredited by the Ministry of Higher Education and Scientific
              Research, offering exceptional and recognized training. This
              Bachelor&apos;s degree prepares you to meet the expectations of
              local and international companies in terms of content creation and
              digital strategy.
            </p>
          )}
        </Section>

        <Section
          title={
            language === "fr" ? "Durée de la formation" : "Program Duration"
          }
          content={
            language === "fr"
              ? "La Licence en CAN se déroule sur 3 ans, avec un format structuré et progressif :"
              : "The Bachelor's degree in CAN is completed over 3 years, following a structured and progressive format:"
          }
        >
          <div className="flex flex-wrap justify-center gap-5">
            {licences.map((spec, index) => (
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
              ? "Débouchés professionnels élargis"
              : "Expanded Career Opportunities"
          }
          bgColor="bg-gray-100"
          content={
            language === "fr"
              ? "Les diplômés de la Licence en CAN bénéficient d’une grande diversité de carrières dans des secteurs en forte demande :"
              : "Graduates of the Bachelor's degree in CAN enjoy a wide range of career opportunities in high-demand sectors:"
          }
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {careerPaths.map((path, index) => (
              <ProgramCard key={index} program={path} />
            ))}
          </div>
        </Section>
        <Section
          bgColor="bg-gray-100"
          title={
            language === "fr"
              ? "Un programme adapté aux exigences du marché"
              : "A Program Tailored to Market Demands"
          }
          content={
            language === "fr"
              ? "La formation est conçue pour fournir une expertise complète dans les domaines de l’audiovisuel et du numérique, avec des cours pratiques et théoriques tels que :"
              : "The program is designed to provide comprehensive expertise in audiovisual and digital fields, with both practical and theoretical courses such as:"
          }
        >
          <div className="grid grid-cols-1  justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <Card key={index} title={item} items={[]} />
            ))}
          </div>
        </Section>
        <Section
          bgColor="bg-gray-100"
          title={
            language === "fr"
              ? "Une formation unique à Madagascar et dans l’Océan Indien"
              : "A Unique Program in Madagascar and the Indian Ocean Region"
          }
          content={
            language === "fr"
              ? "E-Media est la seule université à Madagascar habilitée à offrir une formation en audiovisuel, cinématographie, et ingénierie du son, reconnue pour son excellence et son approche innovante. En tant que pionnier dans l’Océan Indien, E-Media propose des programmes qui combinent expertise technique, créativité et vision stratégique, répondant ainsi aux besoins locaux et internationaux."
              : "E-Media is the only university in Madagascar accredited to offer training in audiovisual communication, cinematography, and sound engineering, recognized for its excellence and innovative approach. As a pioneer in the Indian Ocean region, E-Media offers programs that combine technical expertise, creativity, and strategic vision, addressing both local and international needs."
          }
        ></Section>
        {/* Call to Action */}
        <Section bgColor="bg-gradient-to-r from-blue-500 to-teal-400 text-white">
          {language === "fr" ? (
            <CallToAction
              heading={"Postulez dès aujourd'hui et"}
              description={
                " façonnez votre avenir dans un secteur en plein essor !"
              }
              buttonText={" Préinscription ouverte ici"}
              buttonLink={""}
            />
          ) : (
            <CallToAction
              heading={"Apply today and"}
              description={"shape your future in a rapidly growing industry!"}
              buttonText={"Pre-registration open here"}
              buttonLink={""}
            />
          )}
        </Section>
      </div>
    </div>
  );
}
