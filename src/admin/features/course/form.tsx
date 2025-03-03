"use client";

import * as yup from "yup";
import React from "react";
import { useFormik } from "formik";
import { useSnackbar } from "@/lib/context/SnackbarContext";
import { useAddCourseMutation } from "@/lib/api/courseApi";
import Course from "@/admin/interface/Course";
// Validation Schema
const courseSchema = yup.object({
  level: yup.string().required("Le nom du cours est obligatoire"),
});
// Initial Values
const initialValues: Omit<Course, "_id"> = {
  level: "",
};
export default function FormCourse() {
  //Notification
  const { showSnackbar } = useSnackbar();
  //RTK query
  const [addCourse, responseAddCourse] = useAddCourseMutation();
  // Formik
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: courseSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await addCourse(values).unwrap();
        showSnackbar(response?.message, "success");
        resetForm();
      } catch (error: any) {
        const errorMessage =
          error?.data?.message || "Vérifiez votre connexion internet";
        showSnackbar(errorMessage, "error");
        resetForm();
      }
    },
  });

  const { values, handleChange, handleSubmit, errors, touched } = formik;
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className=" flex  items-center  gap-2"
    >
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="">
        <input
          type="text"
          id="level"
          value={values.level}
          onChange={handleChange}
          className={`dark:border-form-strokedark dark:bg-form-input  rounded border-[1.5px] bg-transparent px-5 py-2 font-normal outline-none transition focus:border-primary active:border-primary dark:focus:border-primary ${errors.level && touched.level ? "border-red-500" : "border-stroke"}`}
          placeholder="Nom du cours..."
        />
      </div>
      <button
        type="submit"
        className="bg-success hover:bg-success ms-2 inline-flex items-center rounded-lg border border-blue-700 px-3 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Ajouter
      </button>
    </form>
  );
}
