import React from "react";
import InputField from "./InputField ";

export default function ContactPartenariats() {
  return (
    <section
      id="contact"
      className="overflow-hidden bg-gray-50 py-16  md:py-20 lg:py-16"
    >
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap">
          {/* Form Section */}
          <div className="m-auto mb-12 w-full px-4 lg:mb-0 lg:w-7/12 xl:w-8/12">
            <div className="rounded-lg bg-white p-8 shadow-lg  sm:p-12">
              <h2 className=" mb-6 text-center text-3xl font-semibold text-gray-800 ">
                Merci de bien vouloir remplir ce formulaire pour établir un
                premier contact avec nous.
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

                  {/* Message Field */}
                  <div className="mb-6 w-full px-4">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-700 "
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Entrez votre message"
                      className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500  "
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="w-full px-4">
                    <button className="d mt-4 w-full rounded-md bg-blue-600 py-3 font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 ">
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
