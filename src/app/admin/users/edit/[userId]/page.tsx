"use client";
import FormUser from "@/admin/features/user/FormUser";
import Breadcrumb from "@/components/Admin/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Admin/Layouts/DefaultLayout";

import { useGetUserByIdQuery } from "@/lib/api/userApi";
import React from "react";
export default function Page({ params }: { params: { userId: string } }) {
  const { data, isLoading, error } = useGetUserByIdQuery(params.userId);

  const user = {
    _id: data?.user[0]?._id,
    username: data?.user[0]?.username,
    email: data?.user[0]?.email,
    role: data?.user[0]?.role,
    password: "",
  };

  if (isLoading)
    return (
      <DefaultLayout>
        <Breadcrumb pageName={"Edit user"} />
        <div className="rounded-sm border border-stroke bg-white px-5 py-5  shadow-default dark:border-strokedark dark:bg-boxdark">
          <p>loading...</p>
        </div>
      </DefaultLayout>
    );
  if (error)
    return (
      <DefaultLayout>
        <Breadcrumb pageName={"Edit user"} />
        <div className="rounded-sm border border-stroke bg-white px-5 py-5  shadow-default dark:border-strokedark dark:bg-boxdark">
          <p>Erreur lors du chargement des données.</p>
        </div>
      </DefaultLayout>
    );
  return (
    <DefaultLayout>
      <div>
        <Breadcrumb pageName={"Edit user"} />
        <div className="rounded-sm border border-stroke bg-white px-5 py-5  shadow-default dark:border-strokedark dark:bg-boxdark">
          {data.user && <FormUser userEdit={user} />}
        </div>
      </div>
    </DefaultLayout>
  );
}
