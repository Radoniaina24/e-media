"use client";
import FormStudent from "@/admin/features/student/FormStudent";
import Breadcrumb from "@/components/Admin/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Admin/Layouts/DefaultLayout";
import { useGetStudentByIdQuery } from "@/lib/api/studentApi";
import { Metadata } from "next";
import React from "react";

export default function Page({ params }: { params: { studentId: string } }) {
  const { data, isLoading, error } = useGetStudentByIdQuery(params.studentId);
  if (isLoading)
    return (
      <DefaultLayout>
        <Breadcrumb pageName={"Edit student"} />
        <div className="rounded-sm border border-stroke bg-white px-5 py-5  shadow-default dark:border-strokedark dark:bg-boxdark">
          <p>Chargement...</p>
        </div>
      </DefaultLayout>
    );
  if (error)
    return (
      <DefaultLayout>
        <Breadcrumb pageName={"Edit student"} />
        <div className="rounded-sm border border-stroke bg-white px-5 py-5  shadow-default dark:border-strokedark dark:bg-boxdark">
          <p>Erreur lors du chargement des données.</p>
        </div>
      </DefaultLayout>
    );
  return (
    <div>
      <DefaultLayout>
        <Breadcrumb pageName={"Edit student"} />
        <div className="rounded-sm border border-stroke bg-white px-5 py-5  shadow-default dark:border-strokedark dark:bg-boxdark">
          {data.student && <FormStudent studentEdit={data.student} />}
        </div>
      </DefaultLayout>
    </div>
  );
}
