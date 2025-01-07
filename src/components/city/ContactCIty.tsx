import React from "react";
import InputField from "../Partenariats/Form/InputField ";
import SelectFields from "../Partenariats/Form/SelectFields";
import CheckBox from "../Partenariats/Form/CheckBox";
import TextArea from "../Partenariats/Form/TextArea";

export default function ContactCIty() {
  const options = [
    { label: "Académiques", value: "Académiques" },
    { label: "Technologiques", value: "Technologiques" },
    { label: "Culturels et Artistiques", value: "Culturels et Artistiques" },
    { label: "Développement Durable", value: "Développement Durable" },
    {
      label: "Financiers et Stratégiques",
      value: "Financiers et Stratégiques",
    },
    { label: "Avec ONG et Gouvernements", value: "Avec ONG et Gouvernements" },
    { label: "Avec Médias", value: "Avec Médias" },
    { label: "Autre", value: "Autre" },
  ];

  const collaborationIdeas = [
    { label: "Partenariats éducatifs", value: "partenariats_educatifs" },
    { label: "Projets technologiques", value: "projets_technologiques" },
    {
      label: "Initiatives culturelles et artistiques",
      value: "initiatives_culturelles_artistiques",
    },
    {
      label: "Programmes de développement durable",
      value: "developpement_durable",
    },
    { label: "Stratégies de financement", value: "strategies_financement" },
    {
      label: "Collaborations avec ONG ou gouvernements",
      value: "ong_gouvernements",
    },
    { label: "Médias et communication", value: "medias_communication" },
    { label: "Recherche et innovation", value: "recherche_innovation" },
    { label: "Formation professionnelle", value: "formation_professionnelle" },
    { label: "Événements communautaires", value: "evenements_communautaires" },
    { label: "Responsabilité sociale des entreprises (RSE)", value: "rse" },
    { label: "Accords commerciaux", value: "accords_commerciaux" },
    { label: "Solutions logistiques", value: "solutions_logistiques" },
    { label: "Support aux start-ups", value: "support_startups" },
    {
      label: "Expériences immersives (VR/AR)",
      value: "experiences_immersives",
    },
    {
      label: "Développement d'applications",
      value: "developpement_applications",
    },
  ];

  return (
    <section
      id="contact"
      className="overflow-hidden bg-gray-50 py-16  md:py-20 lg:py-16"
    >
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap">
          {/* Form Section */}
          <div className="m-auto mb-12 w-full px-4 lg:mb-0 lg:w-7/12 xl:w-10/12">
            <div className="rounded-lg bg-white p-8 shadow-lg  sm:p-12">
              <h2 className=" mb-6 text-center text-3xl font-semibold text-gray-800 ">
                Veuillez remplir ce formulaire afin que nous puissions entrer en
                contact avec vous et discuter de votre rôle potentiel dans cette
                initiative visionnaire.
              </h2>

              <form>
                <div className="-mx-4 flex flex-wrap">
                  <InputField
                    id="name"
                    type="text"
                    label="Nom"
                    placeholder="Entrer votre nom"
                  />
                  <InputField
                    id="firstname"
                    type="text"
                    label="Prénom"
                    placeholder="Entrer votre prénom"
                  />
                  <InputField
                    id="email"
                    type="text"
                    label="E-mail"
                    placeholder="Entrer votre email"
                  />
                  <InputField
                    id="enite"
                    type="text"
                    label="Entité"
                    placeholder="Entrer votre email"
                  />
                  <InputField
                    id="telephone"
                    type="text"
                    label="Telephone"
                    placeholder="Entrer votre numéro de téléphone"
                  />
                  <InputField
                    id="whatsApp "
                    type="text"
                    label="WhatsApp"
                    placeholder="Entrer votre whatsApp"
                  />
                  <InputField
                    id="fonction "
                    type="text"
                    label="Fonction"
                    placeholder="Entrer votre fonction"
                  />
                  <InputField
                    id="pays"
                    type="text"
                    label="Pays/Localisation"
                    placeholder=" Votre localisation"
                  />
                  <SelectFields
                    label={"Type de partenariat souhaité"}
                    id={"partenariat"}
                    options={options}
                  />
                  <SelectFields
                    label={"Suggestions ou idées de collaboration"}
                    id={"collaboration"}
                    options={collaborationIdeas}
                  />
                  <CheckBox label={"Consentement"} />
                  {/* Message Field */}
                  <TextArea />
                  <CheckBox
                    label={
                      "J’accepte de partager mes informations pour être contacté par l’équipe de partenariat d’E-media."
                    }
                  />
                  {/* Submit Button */}
                  <div className="w-full px-4">
                    <button className="d mt-4 w-full rounded-full bg-blue-600 py-3 font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 ">
                      Envoyer
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
