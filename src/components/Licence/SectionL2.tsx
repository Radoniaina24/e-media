import React from "react";
import Header from "./Header";
import Section from "./Section";
import Card from "./Card";
import CiblePublicCard from "../Master/CiblePublicCard";
import MasterCard from "../Master/MasterCard";
import ProgramCard from "../Master/ProgramCard";
import CallToAction from "./CallToAction";
import ScrollComponent from "../Scroll/ScrollComponent";
export default function SectionL2() {
  const currentWorld = [
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

  const licences = [
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
  const careerPaths = [
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
  const items = [
    "Infographie 3D",
    "Techniques du son et post-production",
    "Bases de la programmation et développement web",
    "Théorie de l’information et psychologie de la communication",
    "Gestion de projet et expression artistique",
    "Marketing fondamental",
  ];
  return (
    <div>
      <Header
        id="sectionL2"
        title="LICENCE EN COMMUNICATION AUDIOVISUELLE ET NUMÉRIQUE (CAN)"
        subtitle="La Licence en Communication Audiovisuelle et Numérique (CAN) d'E-media est une formation unique et innovante, conçue pour répondre aux besoins actuels du marché du travail dans un monde de plus en plus tourné vers le numérique. Ce programme forme les futurs professionnels des médias, du cinéma, de la télévision, et du numérique, leur permettant de maîtriser les outils et compétences nécessaires pour exceller dans ces secteurs en pleine expansion."
      />
      <div
        id="sectionL2"
        className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
      >
        <ScrollComponent text="LICENCE EN COMMUNICATION AUDIOVISUELLE ET NUMÉRIQUE (CAN)" />
        <Section title="À qui s’adresse cette formation ?"></Section>
        {/* À qui s’adresse cette formation ? */}

        <Section bgColor="bg-gray-100">
          <h3 className="text-bold mb-10 text-center text-xl font-semibold dark:text-gray-400 ">
            Cette licence est ouverte à :
          </h3>

          <div className=" text-md mt-4 grid grid-cols-1 gap-6 text-center font-normal md:grid-cols-2 lg:grid-cols-3">
            {currentWorld.map((item, index) => (
              <CiblePublicCard key={index} data={item} />
            ))}
          </div>
        </Section>

        <Section
          title="L’importance de la Communication Audiovisuelle et Numérique aujourd’hui"
          content="Dans un monde où l’information et les médias numériques dominent, les compétences en communication audiovisuelle et numérique sont devenues indispensables. Avec l’explosion des plateformes de streaming, des réseaux sociaux, et des contenus numériques, les métiers de l’audiovisuel et du digital connaissent une forte demande à l’échelle mondiale."
        >
          <p className="mt-4 text-lg text-gray-600">
            À Madagascar et dans l&apos;Océan Indien, les opportunités dans ces
            domaines se développent rapidement, notamment grâce à la croissance
            du secteur des médias, de la production cinématographique, et du
            numérique. E-Media est l&apos;unique université à Madagascar dont
            les formations en audiovisuel, cinématographie et ingénierie du son
            sont habilitées par le Ministère de l&apos;Enseignement Supérieur et
            de la Recherche Scientifique, offrant une formation exceptionnelle
            et reconnue. Cette licence vous prépare à répondre aux attentes des
            entreprises locales et internationales en matière de contenu et de
            stratégie numérique.
          </p>
        </Section>

        <Section
          title="Durée de la formation"
          content="La Licence en CAN se déroule sur 3 ans, avec un format structuré et progressif :"
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
          title="Débouchés professionnels"
          bgColor="bg-gray-100"
          content="Les diplômés de la Licence en CAN bénéficient d’une grande diversité de carrières dans des secteurs en forte demande :"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {careerPaths.map((path, index) => (
              <ProgramCard key={index} program={path} />
            ))}
          </div>
        </Section>
        <Section
          bgColor="bg-gray-100"
          title="Un programme adapté aux exigences du marché"
          content="La formation est conçue pour fournir une expertise complète dans les domaines de l’audiovisuel et du numérique, avec des cours pratiques et théoriques tels que :"
        >
          <div className="grid grid-cols-1  justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <Card key={index} title={item} items={[]} />
            ))}
          </div>
        </Section>
        <Section
          bgColor="bg-gray-100"
          title="Une formation unique à Madagascar et dans l’Océan Indien"
          content="E-Media est la seule université à Madagascar habilitée à offrir une formation en audiovisuel, cinématographie, et ingénierie du son, reconnue pour son excellence et son approche innovante. En tant que pionnier dans l’Océan Indien, E-Media propose des programmes qui combinent expertise technique, créativité et vision stratégique, répondant ainsi aux besoins locaux et internationaux."
        ></Section>
        {/* Call to Action */}
        <Section bgColor="bg-gradient-to-r from-blue-500 to-teal-400 text-white">
          <CallToAction
            heading={" Postulez dès aujourd'hui et"}
            description={
              " façonnez votre avenir dans un secteur en plein essor !"
            }
            buttonText={" Préinscription ouverte ici"}
            buttonLink={""}
          />
        </Section>
      </div>
    </div>
  );
}
