import React from "react";
import CardCFP from "./CardCFP";
import ProgramCardCfp from "./PogramCardCfp";
interface FormationAudioProps {
  data: {
    pointsForts: { titre: string; description: string }[];
    competencesDeveloppees: { categorie: string; details: string[] }[];
    debouchesProfessionnels: { categorie: string; details: string[] }[];
    forcesFormation?: { titre: string; description: string }[];
  };
}

const FormationAudio: React.FC<FormationAudioProps> = ({ data }) => {
  return (
    <div className="rounded-lg bg-gray-400 p-6 shadow-md dark:bg-gray-700">
      <h2 className="my-10 mb-14 text-2xl font-bold dark:text-white">
        Points Formations
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {data.pointsForts.map((point, index) => (
          <CardCFP
            key={index}
            title={point.titre}
            description={point.description}
          />
        ))}
      </div>

      <h2 className="my-14 mt-6 text-2xl font-bold dark:text-white">
        Compétences Développées
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {data.competencesDeveloppees.map((comp, index) => (
          <ProgramCardCfp key={index} program={comp} />
        ))}
      </div>
      <h2 className="my-14 mt-6 text-2xl font-bold dark:text-white">
        Débouchés Professionnels
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {data.debouchesProfessionnels.map((debouche, index) => (
          <ProgramCardCfp key={index} program={debouche} />
        ))}
      </div>
      {data.forcesFormation ? (
        <>
          <h2 className="mb-14 mt-6 text-2xl font-bold dark:text-white">
            Forces de la Formation
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {data.forcesFormation.map((force, index) => (
              <CardCFP
                key={index}
                title={force.titre}
                description={force.description}
              />
            ))}{" "}
          </div>{" "}
        </>
      ) : (
        " "
      )}
    </div>
  );
};
export default FormationAudio;
