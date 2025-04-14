"use client";
import { useLanguageContext } from "@/lib/context/LanguageContext";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import Swal from "sweetalert2";
import { Loader2 } from "lucide-react";
import Phone from "./Phone";
const initialValues = {
  fullname: "",
  email: "",
  subject: "",
  phone: "",
  message: "",
};
const Contact = () => {
  const { language } = useLanguageContext();
  const contact = language === "fr" ? "Contactez-nous" : "Contact Us";
  const descritption =
    language === "fr"
      ? "Si vous avez des questions ou des demandes, n'hésitez pas à nous contacter via ce formulaire."
      : "If you have any questions or requests, feel free to contact us through this form.";
  const contactAfricaItSummitSchema = yup.object({
    fullname: yup.string().required("This fullname is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("This email is required"),
    message: yup.string().required("This message is required"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: contactAfricaItSummitSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true); // Désactive le bouton
      // console.log(values);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        const result = await response.json();
        if (result.success) {
          Swal.fire({
            title: "Great!",
            text: "Your message has been sent successfully.",
            icon: "success",
            showConfirmButton: false,
            timer: 3000, // Disparition automatique après 3 sec
            background: "#f4f4f4",
            color: "#333",
            customClass: {
              popup: "rounded-xl shadow-lg",
            },
          });
          resetForm();
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to send message.",
            icon: "error",
            showConfirmButton: false,
            timer: 3000, // Disparition automatique après 3 sec
            background: "#f4f4f4",
            color: "#333",
            customClass: {
              popup: "rounded-xl shadow-lg",
            },
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "An unexpected error occurred.",
          icon: "error",
          showConfirmButton: false,
          timer: 3000, // Disparition automatique après 3 sec
          background: "#f4f4f4",
          color: "#333",
          customClass: {
            popup: "rounded-xl shadow-lg",
          },
        });
      } finally {
        setSubmitting(false); // Réactiver le bouton après réponse
      }
    },
  });
  const { values, handleChange, touched, errors, handleSubmit, resetForm } =
    formik;

  return (
    <div id="contact" className="">
      {" "}
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap">
          {/* Form Section */}
          <div className="m-auto mb-12 w-full px-4 lg:mb-0 lg:w-8/12 xl:w-8/12">
            <div className="rounded-lg bg-white p-8 shadow-lg sm:p-12 dark:bg-gray-800">
              {/* <h2 className="mb-6 text-3xl font-semibold text-gray-800 dark:text-white">
                {contact}
              </h2> */}

              <Phone language={language} />
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                {descritption}
              </p>
              <form onSubmit={handleSubmit} autoComplete="off">
                <div className="-mx-4 flex flex-wrap">
                  {/* Name Field */}
                  <div className="mb-6 w-full px-4 md:w-1/2">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      {language === "fr" ? "Nom complet" : "Full Name"}
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      placeholder={
                        language === "fr"
                          ? "Entrer votre nom complet"
                          : "Enter your full name"
                      }
                      value={formik.values.fullname}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
                    />
                    {errors.fullname && touched.fullname ? (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        <span className="font-medium"></span> {errors.fullname}
                      </p>
                    ) : (
                      ""
                    )}
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
                      placeholder={
                        language === "fr"
                          ? "Entrer votre email"
                          : "Enter your email"
                      }
                      value={formik.values.email}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
                    />
                    {errors.email && touched.email ? (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        <span className="font-medium"></span> {errors.email}
                      </p>
                    ) : (
                      ""
                    )}
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
                      placeholder={
                        language === "fr"
                          ? "Entrer votre message"
                          : "Enter your message"
                      }
                      value={formik.values.message}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
                    ></textarea>
                    {errors.message && touched.message ? (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        <span className="font-medium"></span> {errors.message}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="w-full px-4">
                    <button
                      disabled={formik.isSubmitting}
                      type="submit"
                      className={`mt-4 w-full rounded-full py-3 font-medium text-white 
    ${formik.isSubmitting ? "cursor-not-allowed bg-gray-400" : "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-500"}`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {/* Affiche le texte et le spinner quand le formulaire est en soumission */}

                        {language === "fr" ? "Envoyer" : "Send"}
                        {formik.isSubmitting ? <Loader2 /> : null}
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Google Map Section (At the bottom) */}
          <div className="mt-12 w-full" id="localisation">
            <div className="rounded-lg bg-gray-200 shadow-lg dark:bg-gray-700">
              <h2 className=" p-6 text-center text-xl font-semibold text-gray-800 dark:text-white">
                {language === "fr"
                  ? "Trouvez-nous à Nanisana Antananarivo, Madagascar"
                  : "Find us at Nanisana, Antananarivo, Madagascar"}
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
    </div>
  );
};

export default Contact;
// pour miuex vous accompagner L'Université E-MEDIA met en place des ligne dédiées:
/*
 - Présentiel: +261 38 08 777 37 
 - En ligne : +261 38 08 777 37 
 - Modulaire & professionnel : +261 38 78 777 37 
 - ile Maurice : +230 5 488-4377
*/
