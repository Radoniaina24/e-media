import UsersList from "@/admin/features/user/list";
import DefaultLayout from "@/components/Admin/Layouts/DefaultLayout";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Users | E-media",
};
export default function page() {
  return (
    <DefaultLayout>
      <UsersList />
    </DefaultLayout>
  );
}
