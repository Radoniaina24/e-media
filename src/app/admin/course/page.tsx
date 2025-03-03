import FormCourse from "@/admin/features/course/form";
import ListCourse from "@/admin/features/course/list";
import Breadcrumb from "@/components/Admin/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Admin/Layouts/DefaultLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Course | E-media",
};

export default function page() {
  return (
    <DefaultLayout>
      <div>
        <Breadcrumb pageName={"Cours list"} />
        <div className="border-stroke shadow-default dark:border-strokedark dark:bg-boxdark rounded-sm border  bg-white px-5 py-5">
          {/* form add classe */}
          <FormCourse />
          {/* Liste classe */}
          <ListCourse />
        </div>
      </div>
    </DefaultLayout>
  );
}
