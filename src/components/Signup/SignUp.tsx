"use client";
import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddPanelistMutation } from "@/lib/api/panelistApi";
import { useSnackbar } from "@/lib/context/SnackbarContext";
import { Loader2 } from "lucide-react";
import { useLanguageContext } from "@/lib/context/LanguageContext";
import InputFormik from "./Componnents/InputFormik";
import InputFile from "./Componnents/InputFile";
import DatePickerOne from "./Componnents/DatePicker";
import InputSelect from "./Componnents/InputSelect";
import InputFilePdf from "./Componnents/InputFilePdf";
import InputPhoneNumber from "./Componnents/InputPhoneNumber";
import { useAddStudentMutation } from "@/lib/api/studentApi";

export default function FormPanelist() {
  const { language } = useLanguageContext();
  const [addStudent] = useAddStudentMutation();
  const { showSnackbar } = useSnackbar();

  const inputFileRef = useRef<HTMLInputElement>(null);
  const inputFilePdfRef_last_degree = useRef<HTMLInputElement>(null);
  const inputFilePdfRef_residence_certificate = useRef<HTMLInputElement>(null);
  const inputFilePdfRef_transcript = useRef<HTMLInputElement>(null);
  const resetFileInputPhoto = () => {
    if (inputFileRef.current) {
      inputFileRef.current.value = "";
    }
  };
  const resetFilePdfInput = () => {
    if (
      inputFilePdfRef_last_degree.current &&
      inputFilePdfRef_residence_certificate
    ) {
      inputFilePdfRef_last_degree.current.value = "";
      inputFilePdfRef_residence_certificate.current.value = "";
      inputFilePdfRef_transcript.current.value = "";
    }
  };

  const initialvalues = {
    profilePhoto: "",
    last_name: "",
    first_name: "",
    date_of_birth: "",
    current_address: "",
    email: "",
    phone_number: "",
    classe: "",
    course: "",
    last_degree: "",
    residence_certificate: "",
    transcript: "",
  };

  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: Yup.object({
      last_name: Yup.string().required(
        language === "fr" ? "Le nom est requis" : "Last name is required",
      ),
      first_name: Yup.string().required(
        language === "fr" ? "Le nom est requis" : "First name is required",
      ),

      date_of_birth: Yup.string().required(
        language === "fr"
          ? "La date de naissance  est requis"
          : "Date of birth is required",
      ),
      current_address: Yup.string().required(
        language === "fr"
          ? "L'adresse actuelle est   est requis"
          : "Current address  is required",
      ),
      email: Yup.string()
        .email(language === "fr" ? "Email invalide" : "Invalid email")
        .required(
          language === "fr" ? "L'email est requis" : "Email is required",
        ),
      phone_number: Yup.string().required(
        language === "fr"
          ? "Le numéro de téléphone est requis"
          : "Phone number is required",
      ),
      classe: Yup.string().required(
        language === "fr"
          ? "Cette classe est requis"
          : " iThis class is required",
      ),
      course: Yup.string().required(
        language === "fr"
          ? "Cette cours est requis"
          : "This course is required",
      ),
      profilePhoto: Yup.string().required(
        language === "fr" ? "Ce photo est requis" : "This photo is required",
      ),
      last_degree: Yup.string().required(
        language === "fr"
          ? "Ce dernier diplôme est requis"
          : "This last degree is required",
      ),
      residence_certificate: Yup.string().required(
        language === "fr"
          ? "Ce certificat de résidence est requis"
          : "This residence certificate is required",
      ),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]: any) => {
        if (value !== undefined && value !== "") {
          formData.append(key, value instanceof File ? value : String(value));
        }
      });

      setSubmitting(true);

      try {
        const response = await addStudent(formData).unwrap();
        showSnackbar(response?.message, "success"); // message, type(error, success)
        resetForm();
        resetFileInputPhoto();
        resetFilePdfInput();
      } catch (error: any) {
        if (error?.data?.message) {
          showSnackbar(error?.data?.message, "error");
        } else {
          showSnackbar("Verifier votre connexion internet", "error");
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  const optionsClasse = [
    { key: "L1", value: "L1" },
    { key: "L2", value: "L2" },
    { key: "L3", value: "L3" },
  ];
  const course = [
    { key: "Communication audiovisuelle et numérique", value: "CAN" },
    { key: "Marketing Digital et Journalisme", value: "MPJ" },
    {
      key: "Technologie de l'informatique et de la télécommunication",
      value: "TIC",
    },
    { key: "Droit", value: "DRT" },
    { key: "Management", value: "MGT" },
  ];

  return (
    <section className="  bg-white py-10">
      <div className="mx-auto max-w-5xl px-10 md:px-5">
        <form
          onSubmit={formik.handleSubmit}
          className="space-y-4"
          autoComplete="off"
        >
          <h2 className=" text-xl  text-black">
            {language === "fr"
              ? "Informations Personnelles "
              : " Personal Information "}
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <InputFormik
              label={language === "fr" ? "Nom" : "Last name"}
              type="text"
              id="last_name"
              placeholder={language === "fr" ? "Nom" : "Last name"}
              value={formik.values.last_name}
              onChange={formik.handleChange}
              error={formik.errors.last_name}
              touched={formik.touched.last_name}
            />
            <InputFormik
              label={language === "fr" ? "Prénom " : "First name"}
              type="text"
              id="first_name"
              placeholder={language === "fr" ? "Prénom " : "First Name"}
              value={formik.values.first_name}
              onChange={formik.handleChange}
              error={formik.errors.first_name}
              touched={formik.touched.first_name}
            />

            <InputFormik
              label={
                language === "fr" ? "Adresse actuelle" : "Current Address "
              }
              type="text"
              id="current_address"
              placeholder={
                language === "fr" ? "Adresse actuelle" : "Current Address "
              }
              value={formik.values.current_address}
              onChange={formik.handleChange}
              error={formik.errors.current_address}
              touched={formik.touched.current_address}
            />
            <InputFormik
              label={language === "fr" ? "Date de naissance" : "Date of birth "}
              type="date"
              id="date_of_birth"
              placeholder={
                language === "fr" ? "Date de naissance" : "Date of birth "
              }
              value={formik.values.date_of_birth}
              onChange={formik.handleChange}
              error={formik.errors.date_of_birth}
              touched={formik.touched.date_of_birth}
            />

            <InputFormik
              label="Email"
              type="text"
              id="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.errors.email}
              touched={formik.touched.email}
            />
            <InputFormik
              label={language === "fr" ? "Numéro de téléphone" : "Phone number"}
              type="text"
              id="phone_number"
              placeholder={
                language === "fr" ? "Numéro de téléphone" : "Phone number"
              }
              value={formik.values.phone_number}
              onChange={formik.handleChange}
              error={formik.errors.phone_number}
              touched={formik.touched.phone_number}
            />
            {/* <InputPhoneNumber
              name="phone_number"
              label={language === "fr" ? "Numéro de téléphone" : "Phone number"}
              value={formik.values.phone_number}
              onChange={formik.setFieldValue}
              error={formik.errors.phone_number}
              touched={formik.touched.phone_number}
            /> */}

            <InputSelect
              label={language === "fr" ? "Classe" : "Class"}
              id="classe"
              value={formik.values.classe}
              onChange={formik.handleChange}
              options={optionsClasse}
              error={formik.errors.classe}
              touched={formik.touched.classe}
              placeholder={
                language === "fr"
                  ? "Seletionnez votre classe"
                  : "Select your class"
              }
            />
            <InputSelect
              label={language === "fr" ? "Cours" : "Course"}
              id="course"
              value={formik.values.course}
              onChange={formik.handleChange}
              options={course}
              error={formik.errors.course}
              touched={formik.touched.course}
              placeholder={
                language === "fr"
                  ? "Seletionnez votre cours"
                  : "Select your course"
              }
            />
          </div>

          <h2 className=" text-xl  text-black">
            {language === "fr"
              ? "Documents à soumettre "
              : "Documents to Submit "}
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <InputFile
              inputRef={inputFileRef}
              label={language === "fr" ? "Photo recent" : "Recent photo"}
              setFieldValue={formik.setFieldValue}
              name="profilePhoto"
              error={formik.errors.profilePhoto}
              touched={formik.touched.profilePhoto}
            />
            <InputFilePdf
              inputRef={inputFilePdfRef_last_degree}
              label={language === "fr" ? "Dernier diplôme" : "Last degree"}
              setFieldValue={formik.setFieldValue}
              name="last_degree"
              error={formik.errors.last_degree}
              touched={formik.touched.last_degree}
            />
            <InputFilePdf
              inputRef={inputFilePdfRef_residence_certificate}
              label={
                language === "fr"
                  ? "Certificat de résidence"
                  : "Residence certificate"
              }
              setFieldValue={formik.setFieldValue}
              name="residence_certificate"
              error={formik.errors.residence_certificate}
              touched={formik.touched.residence_certificate}
            />
            <InputFilePdf
              inputRef={inputFilePdfRef_transcript}
              label={
                language === "fr"
                  ? "Copie des relevés de notes"
                  : "Copy of transcripts"
              }
              setFieldValue={formik.setFieldValue}
              name="transcript"
              error={formik.errors.transcript}
              touched={formik.touched.transcript}
            />
          </div>

          <div className="grid grid-cols-1">
            <button
              disabled={formik.isSubmitting}
              type="submit"
              className={`relative mt-5 flex items-center justify-center gap-2 rounded px-6 py-2 text-sm font-medium text-white 
      transition-all duration-300 ease-in-out 
      ${formik.isSubmitting ? "cursor-not-allowed bg-gray-400" : "bg-primary"}`}
            >
              {formik.isSubmitting ? (
                <>
                  {language === "fr" ? "Traitement..." : "Processing..."}
                  <Loader2 className="h-5 w-5 animate-spin" />
                </>
              ) : language === "fr" ? (
                "Soumettre"
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
