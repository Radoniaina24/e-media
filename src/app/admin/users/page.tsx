import Breadcrumb from "@/components/Admin/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Admin/Layouts/DefaultLayout";
import React from "react";

export default function page() {
  return (
    <DefaultLayout>
      <div>
        <Breadcrumb pageName={"Users"} />
        <div className="border-stroke shadow-default dark:border-strokedark dark:bg-boxdark rounded-sm border  bg-white px-5 py-5">
          {/* form add classe */}
          Utilisateur
          {/* Liste classe */}
        </div>
      </div>
    </DefaultLayout>
  );
}
