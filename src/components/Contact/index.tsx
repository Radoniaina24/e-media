import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="overflow-hidden bg-gray-50 py-16 dark:bg-gray-dark md:py-20 lg:py-16"
    >
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap">
          {/* Form Section */}
          <div className="m-auto mb-12 w-full px-4 lg:mb-0 lg:w-7/12 xl:w-8/12">
            <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800 sm:p-12">
              <h2 className="mb-6 text-3xl font-semibold text-gray-800 dark:text-white">
                Contactez-nous
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                Si vous avez des questions ou des demandes, n'hésitez pas à nous
                contacter via ce formulaire.
              </p>

              <form>
                <div className="-mx-4 flex flex-wrap">
                  {/* Name Field */}
                  <div className="mb-6 w-full px-4 md:w-1/2">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Entrez votre nom"
                      className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="mb-6 w-full px-4 md:w-1/2">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Entrez votre email"
                      className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="mb-6 w-full px-4">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Entrez votre message"
                      className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="w-full px-4">
                    <button className="mt-4 w-full rounded-md bg-blue-600 py-3 font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-500">
                      Envoyer
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Google Map Section (At the bottom) */}
          <div className="mt-12 w-full">
            <div className="rounded-lg bg-gray-200 shadow-lg dark:bg-gray-700">
              <h2 className=" p-6 text-center text-xl font-semibold text-gray-800 dark:text-white">
                Trouvez-nous à Nanisana Antananarivo, Madagascar
              </h2>
              {/* Google Map Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19806.78595013018!2d47.5105!3d-18.8887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21e68d20b36a63b5%3A0x62967c8f6b2d0e5b!2sE-Media%20Madagascar%2C%20Nanisana%2C%20Antananarivo%2C%20Madagascar!5e0!3m2!1sen!2sus!4v1675598356510!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
