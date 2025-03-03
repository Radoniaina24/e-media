import FormClasse from "@/admin/features/classe/form";
import ListClasse from "@/admin/features/classe/list";
import Breadcrumb from "@/components/Admin/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Admin/Layouts/DefaultLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Classe",
};

export default function page() {
  return (
    <DefaultLayout>
      <div>
        <Breadcrumb pageName={"Classe liste"} />
        <div className="border-stroke shadow-default dark:border-strokedark dark:bg-boxdark rounded-sm border  bg-white px-5 py-5">
          {/* form add classe */}
          <FormClasse />
          {/* Liste classe */}
          <ListClasse />
        </div>
      </div>
    </DefaultLayout>
  );
}
