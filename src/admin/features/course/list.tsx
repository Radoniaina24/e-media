"use client";

import Course from "@/admin/interface/Course";
import DeleteButton from "@/components/Admin/Button/DeleteButton";
import Loader from "@/components/Admin/common/Loader";
import {
  useDeleteCourseMutation,
  useGetCourseQuery,
} from "@/lib/api/courseApi";
import React from "react";

export default function ListCourse() {
  const { data, isLoading, error } = useGetCourseQuery("");
  const courses = data?.courses;
  if (isLoading) {
    return <Loader />;
  }
  if (courses?.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center bg-white dark:bg-black">
        <h2>
          Il n&apos;y a pas encore de cours existante, merci d&apos;en ajouter
          une
        </h2>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-white dark:bg-black">
        <div
          className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
          role="alert"
        >
          <strong className="font-bold">
            🚨 Erreur : Problème avec le serveur
          </strong>
          <span className="block sm:inline">
            La liste des cours ne peut pas être affichée pour le moment.
          </span>
          <span className="mt-2 block sm:inline">
            Veuillez vérifier la connexion ou contacter l&apos;équipe technique.
          </span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <ul className="mt-5 h-screen divide-y overflow-y-auto dark:divide-gray-700">
        {courses?.map((item: Course) => (
          <ListItem course={item} key={item._id} />
        ))}
      </ul>
    </div>
  );
}

function ListItem({ course }: { course: Course }) {
  const [deleteCourse] = useDeleteCourseMutation();
  return (
    <li className="dark:border-strokedark whitespace-nowrap border-b border-[#eee] px-6  py-4 font-semibold text-gray-900 dark:text-white">
      <div className="flex items-center justify-between">
        <div>{course.level}</div>
        <div>
          <DeleteButton
            id={course._id}
            onDelete={(id) => deleteCourse(id).unwrap()}
          />
        </div>
      </div>
    </li>
  );
}
