import React from "react";
import FieldInfoPerso from "./Form/FieldInfoPerso";
import FieldDomain from "./Form/FieldDomain";
import FieldVision from "./Form/FieldVision";
import FieldAvalible from "./Form/FieldAvalible";

const Form = () => {
  return (
    <div className="mx-auto mb-7 max-w-6xl rounded-lg bg-white p-8 shadow-lg">
      {/* Formulaire */}
      <form>
        {/* Informations Personnelles et Contact */}
        <FieldInfoPerso />
        {/* Domaine d’Intérêt */}
        <FieldDomain />
        {/* Votre Vision et Vos Attentes */}
        <FieldVision />
        {/* Disponibilité */}
        <FieldAvalible />
        {/* Texte avant le bouton de soumission */}
        <div className="mb-6">
          <p className="text-base leading-6 text-gray-700">
            Merci pour votre intérêt et votre temps. Une fois ce formulaire
            soumis, notre équipe examinera vos informations et vous contactera
            dans les plus brefs délais pour explorer les opportunités de
            collaboration.
          </p>
        </div>

        {/* Bouton de soumission */}
        <div className="mt-6 grid">
          <button
            type="submit"
            className="text-md rounded-full bg-indigo-600  py-3 font-medium text-white shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Envoyer ma candidature
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
