import FormStudent from "@/admin/features/student/FormStudent";
import FormUser from "@/admin/features/user/FormUser";
import Breadcrumb from "@/components/Admin/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Admin/Layouts/DefaultLayout";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Add-User | E-media",
};
export default function page() {
  return (
    <DefaultLayout>
      <div>
        <Breadcrumb pageName={"Add User"} />
        <div className="rounded-sm border border-stroke bg-white px-5 py-5  shadow-default dark:border-strokedark dark:bg-boxdark">
          <FormUser />
        </div>
      </div>
    </DefaultLayout>
  );
}
