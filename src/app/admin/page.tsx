import Dashboard from "@/components/Admin/Dashboard/Dashboard";
import DefaultLayout from "@/components/Admin/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | E-media",
};

export default function Home() {
  return (
    <DefaultLayout>
      <Dashboard />
    </DefaultLayout>
  );
}
