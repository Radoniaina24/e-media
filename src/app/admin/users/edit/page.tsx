import FormUser from "@/admin/features/user/FormUser";
import Breadcrumb from "@/components/Admin/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Add-students",
};
export default function page() {
  return (
    <div>
      <Breadcrumb pageName={"Edit User"} />
      <div className="rounded-sm border border-stroke bg-white px-5 py-5  shadow-default dark:border-strokedark dark:bg-boxdark">
        <FormUser />
      </div>
    </div>
  );
}
