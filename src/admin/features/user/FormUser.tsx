"use client";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "@/lib/context/SnackbarContext";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Admin/spinner/Spinner";
import User from "@/admin/interface/Users";
import { useAddUserMutation, useUpdateUserMutation } from "@/lib/api/userApi";
import InputSelect from "@/components/Signup/Componnents/InputSelect";
import InputFormik from "@/components/Signup/Componnents/InputFormik";
import { Loader2 } from "lucide-react";

// Validation Schema
const UserSchema = yup.object({
  username: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Make sure the email is valid.")
    .required("This field is required"),
  password: yup.string().required("This field is required"),
  role: yup.string().required("This field is required"),
});
// Initial Values
const initialValues: Omit<User, "_id"> = {
  username: "",
  email: "",
  role: "",
  password: "",
};
export default function FormUser({ userEdit }: { userEdit?: User }) {
  const navigation = useRouter();
  const { showSnackbar } = useSnackbar();
  const [addUser, { isLoading: isAdding }] = useAddUserMutation();
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();
  const roleOptions = [
    { key: "Admin", value: "admin" },
    { key: "Super Admin", value: "super_admin" },
    {
      key: "student",
      value: "student",
    },
  ];
  // Handlers
  async function handleRegisterUser(user: Omit<User, "_id">) {
    try {
      const response = await addUser(user).unwrap();
      showSnackbar(response?.message, "success"); // message, type(error, success)
      resetForm();
      navigation.push("/admin/users");
    } catch (error: any) {
      if (error?.data?.message) {
        showSnackbar(error?.data?.message, "error");
      } else {
        showSnackbar("Verifier votre connexion internet", "error");
      }
    }
  }
  async function handleUpdateUser({
    id,
    user,
  }: {
    id: string;
    user: Omit<User, "_id">;
  }) {
    if (!userEdit) return;

    try {
      const response = await updateUser({ user, id: id }).unwrap();
      resetForm();
      showSnackbar(response?.message, "success"); // message, type(error, success)
      navigation.push("/admin/users");
    } catch (error: any) {
      if (error?.data?.message) {
        showSnackbar(error?.data?.message, "error");
      } else {
        showSnackbar("Verifier votre connexion internet", "error");
      }
    }
  }
  // Formik
  const formik = useFormik({
    initialValues: userEdit || initialValues,
    validationSchema: UserSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        userEdit
          ? handleUpdateUser({ id: userEdit._id, user: values })
          : handleRegisterUser(values);
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
  const { values, handleChange, handleSubmit, errors, touched, resetForm } =
    formik;
  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InputFormik
            type="text"
            label="Username"
            id="username"
            value={values.username}
            onChange={handleChange}
            error={errors.username}
            touched={touched.username}
            placeholder="John Doe"
          />
          <InputFormik
            type="text"
            label="Email"
            id="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            touched={touched.email}
            placeholder="email@...."
          />
          <InputSelect
            label={"Role"}
            onChange={handleChange}
            value={values.role}
            id={"role"}
            options={roleOptions}
            error={errors.role}
            touched={errors.role}
          />
          <InputFormik
            type="text"
            label="Password"
            id="password"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            touched={touched.password}
            placeholder="password123!."
          />
        </div>

        {isAdding || isUpdating ? (
          <Spinner />
        ) : userEdit ? (
          <div className="mt-5 flex justify-end gap-5">
            <button
              type="submit"
              className="cursor-pointer rounded-lg border border-stroke  bg-success px-4 py-2 text-white outline-none transition hover:bg-opacity-90 dark:border-form-strokedark"
            >
              Edit
            </button>
            <button
              type="button"
              className="cursor-pointer rounded-lg border border-stroke  bg-warning px-4 py-2 text-white outline-none transition hover:bg-opacity-90 dark:border-form-strokedark"
              onClick={() => navigation.push("/admin/users")}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="mt-5 grid">
            <button
              disabled={formik.isSubmitting}
              type="submit"
              className={`relative mt-5 flex items-center justify-center gap-2 rounded px-6 py-2 text-sm font-medium text-white 
      transition-all duration-300 ease-in-out 
      ${formik.isSubmitting ? "cursor-not-allowed bg-gray-400" : "bg-primary"}`}
            >
              {formik.isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                </>
              ) : (
                "Register"
              )}
            </button>
          </div>
        )}
      </form>
    </>
  );
}
