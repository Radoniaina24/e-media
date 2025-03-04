"use client";
import FormStudent from "@/admin/features/student/FormStudent";
import Breadcrumb from "@/components/Admin/Breadcrumbs/Breadcrumb";
import { useGetStudentByIdQuery } from "@/lib/api/studentApi";
import React from "react";
export default function Page({ params }: { params: { studentId: string } }) {
  const { data, isLoading, error } = useGetStudentByIdQuery(params.studentId);
  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur lors du chargement des données.</p>;
  return (
    <div>
      <Breadcrumb pageName={"Edit student"} />
      <div className="border-stroke shadow-default dark:border-strokedark dark:bg-boxdark rounded-sm border  bg-white px-5 py-5">
        {data.student && <FormStudent studentEdit={data.student} />}
      </div>
    </div>
  );
}
