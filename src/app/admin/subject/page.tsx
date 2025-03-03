import FormSubject from "@/admin/features/subject/form";
import ListSubject from "@/admin/features/subject/list";
import Breadcrumb from "@/components/Admin/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Admin/Layouts/DefaultLayout";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Subject",
};
export default function page() {
  return (
    <DefaultLayout>
      <div>
        <Breadcrumb pageName={"Subject liste"} />
        <div className="border-stroke shadow-default dark:border-strokedark dark:bg-boxdark rounded-sm border  bg-white px-5 py-5">
          {/* form add subject */}
          <FormSubject />
          {/* Liste subject */}
          <ListSubject />
        </div>
      </div>
    </DefaultLayout>
  );
}
