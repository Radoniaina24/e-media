import FormStudent from "@/admin/features/student/FormStudent";
import Breadcrumb from "@/components/Admin/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Add-students",
};
export default function page() {
  return (
    <div>
      <Breadcrumb pageName={"Edit student"} />
      <div className="border-stroke shadow-default dark:border-strokedark dark:bg-boxdark rounded-sm border  bg-white px-5 py-5">
        <FormStudent />
      </div>
    </div>
  );
}
